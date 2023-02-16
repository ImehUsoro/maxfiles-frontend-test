import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  const handleSubmit = (e) => {
    try {
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

      fetch("http://localhost:3001/api/v1/users/login", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
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
