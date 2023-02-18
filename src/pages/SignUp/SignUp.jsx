import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignUpStyles } from "./SignUpStyles";
import BeatLoader from "react-spinners/BeatLoader";

const SignUp = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const [viewConfirmPassword, setViewConfirmPassword] = useState(false);
  const [agentSignUp, setAgentSignUp] = useState(false);
  const [checked, setChecked] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    isAgent: agentSignUp ? false : true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  // Simulating Login without Backend

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  };

  return (
    <SignUpStyles>
      <div className="left-section"></div>
      <div className="right-section">
        <h2 className="welcome-text">Welcome!</h2>
        <p className="subtext">This will only take a minute!</p>

        <p className="signup-as-agent">
          Sign up as an agent instead?{" "}
          <br className="hide"/>
          <span onClick={() => setAgentSignUp((prev) => !prev)}>
            {agentSignUp ? "Sign up as a user" : "Sign up as an agent"}
          </span>
        </p>

        <form action="" onSubmit={handleSubmit}>
          <div className="inputs-container">
            <div className="inputs">
              <input
                type="text"
                name="firstName"
                onChange={handleChange}
                value={formData.firstName || ""}
                placeholder="First name *"
                className="input plain-input"
              />
              <div className="input-and-icon-group">
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  value={formData.email || ""}
                  placeholder="Email address *"
                  className="input special-input"
                />
                <div className="icon-container">
                  <img src="/images/email_icon.png" alt="" />
                </div>
              </div>

              <div className="input-and-icon-group">
                <input
                  name="password"
                  onChange={handleChange}
                  value={formData.password || ""}
                  type={`${viewPassword ? "text" : "password"}`}
                  placeholder="Password *"
                  className="input special-input"
                />
                <div
                  className="icon-container"
                  onClick={() => setViewPassword((prev) => !prev)}
                >
                  {viewPassword ? (
                    <img src="/images/no_view_password_icon.png" alt="" />
                  ) : (
                    <img src="/images/view_password_icon.png" alt="" />
                  )}
                </div>
              </div>
            </div>

            <div className="inputs">
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                value={formData.lastName || ""}
                placeholder="Last name *"
                className="input plain-input"
              />

              <div className="input-and-icon-group-phone">
                <div className="flags-dropdown">
                  <img src="/images/nigerian_icon.png" alt="" />
                  <img src="/images/drop_down.png" alt="" />
                </div>
                <input
                  name="phoneNumber"
                  onChange={handleChange}
                  value={formData.phoneNumber || ""}
                  type="text"
                  placeholder="+234"
                  className="input special-input"
                />
              </div>

              <div className="input-and-icon-group">
                <input
                  name="confirmPassword"
                  onChange={handleChange}
                  value={formData.confirmPassword || ""}
                  type={`${viewConfirmPassword ? "text" : "password"}`}
                  placeholder="Confirm password *"
                  className="input special-input"
                />

                <div
                  className="icon-container"
                  onClick={() => setViewConfirmPassword((prev) => !prev)}
                >
                  {viewConfirmPassword ? (
                    <img src="/images/no_view_password_icon.png" alt="" />
                  ) : (
                    <img src="/images/view_password_icon.png" alt="" />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="checkbox-container">
            <div
              className="check-container"
              onClick={() => setChecked((prev) => !prev)}
            >
              <input type="checkbox" className="checkbox" checked={checked} />
              <span className="checkmark"></span>
            </div>
            <p className="agree">
              I agree to the <span>terms and conditions</span>
            </p>
          </div>

          <div className="sign-in-container">
            <button type="submit" className="sign-up-btn">
              {loading ? (
                <BeatLoader color={"#fff"} loading={loading} size={10} />
              ) : (
                "Sign Up"
              )}
            </button>

            <div className="google-sign-in">
              <p>or sign up with</p>
              <div className="google-image-container">
                <img src="/images/google_icon.png" alt="" />
              </div>
            </div>
          </div>

          <p className="create-account">
            Already have an account?{" "}
            <br className="break-hide"/>
            <Link to={"/login"} className="sign-up">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </SignUpStyles>
  );
};

export default SignUp;
