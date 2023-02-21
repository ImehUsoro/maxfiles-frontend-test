import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/api";
import { LoginStyles } from "./LoginStyles";
import BeatLoader from "react-spinners/BeatLoader";
import { toast } from "react-toastify";

const Login = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const [formData, setFormData] = useState({});
  // const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // With Backend API
    // login(formData, setLoading, navigate);

    // Without Backend API
    setTimeout(() => {
      toast.success("Login Successful");
      navigate("/");
    }, 3000);
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
            // required
          />
          {/* {errors.email && <p className="error">{errors.email}</p>} */}
          <div className="password-input-container">
            <input
              onChange={handleChange}
              name="password"
              value={formData.password || ""}
              className="input password-input"
              type={`${viewPassword ? "text" : "password"}`}
              placeholder="Password *"
              required
            />

            <div
              className="view-password-image-container"
              onClick={() => setViewPassword((prev) => !prev)}
            >
              {viewPassword ? (
                <img src="/images/no_view_password_icon.png" alt="" />
              ) : (
                <img src="/images/view_password_icon.png" alt="" />
              )}
            </div>
          </div>
          {/* {errors.password && <p className="error">{errors.password}</p>} */}
          <div className="checkbox-container">
            <div
              className="check-container"
              onClick={() => setChecked((prev) => !prev)}
            >
              <input type="checkbox" className="checkbox" checked={checked} />
              <span className="checkmark"></span>
            </div>
            <p>Keep me signed in</p>
          </div>

          <div className="sign-in-container">
            <button type="submit" className="sign-in-btn">
              {loading ? (
                <BeatLoader color={"#fff"} loading={loading} size={10} />
              ) : (
                "Sign In"
              )}
            </button>

            <div className="google-sign-in">
              <p>or sign in with</p>
              <div className="google-image-container">
                <img src="/images/google_icon.png" alt="" />
              </div>
            </div>
          </div>

          <p className="create-account">
            Don't have an account? <br className="break-hide" />
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
