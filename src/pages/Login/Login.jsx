import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../services/api";
import { LoginStyles } from "./LoginStyles";

const Login = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (formData.password) {
      const errors = {};
      if (formData.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
      }
      setErrors((prev) => ({ ...prev, ...errors }));
    }
  }, [formData.password]);

  useEffect(() => {
    if (formData.email) {
      const errors = {};
      if (!formData.email.includes("@")) {
        errors.email = "Email is invalid";
      }
      setErrors((prev) => ({ ...prev, ...errors }));
    }
  }, [formData.email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const errors = {};
    if (!formData.email) {
      errors.email = "Email is required";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      setLoading(false);
      return;
    }
    login(formData, setLoading);
  };

  return (
    <LoginStyles>
      <div className="left-section"></div>
      <div className="right-section">
        <h2 className="welcome-text">Welcome back!</h2>
        <p className="subtext">We're always excited to have you back.</p>
        <form action="" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            name="email"
            value={formData.email || ""}
            placeholder="Email Address *"
            className="input email-input"
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <div className="password-input-container">
            <input
              onChange={handleChange}
              name="password"
              value={formData.password || ""}
              className="input password-input"
              type={`${viewPassword ? "text" : "password"}`}
              placeholder="Password *"
            />

            <div
              className="view-password-image-container"
              onClick={() => setViewPassword((prev) => !prev)}
            >
              <img src="/images/view_password_icon.png" alt="" />
            </div>
          </div>
          {errors.password && <p className="error">{errors.password}</p>}
          <div className="checkbox-container">
            <input type="checkbox" />
            <p>Keep me signed in</p>
          </div>

          <div className="sign-in-container">
            <button type="submit" className="sign-in-btn">
              Sign In
            </button>

            <div className="google-sign-in">
              <p>or sign in with</p>
              <div className="google-image-container">
                <img src="/images/google_icon.png" alt="" />
              </div>
            </div>
          </div>

          <p className="create-account">
            Don't have an account?{" "}
            <Link to={"/signup"} className="sign-up">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </LoginStyles>
  );
};

export default Login;
