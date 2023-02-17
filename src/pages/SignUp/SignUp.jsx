import React from "react";
import { Link } from "react-router-dom";
import { SignUpStyles } from "./SignUpStyles";

const SignUp = () => {
  return (
    <SignUpStyles>
      <div className="left-section"></div>
      <div className="right-section">
        <h2 className="welcome-text">Welcome!</h2>
        <p className="subtext">This will only take a minute!</p>

        <p className="signup-as-agent">
          Sign up as an agent instead? Sign up as agent
        </p>

        <form action="">
          <div>
            <input type="text" placeholder="First name *" />
            <input type="text" placeholder="Email address *" />
            <input type="text" placeholder="Password *" />
          </div>
          <div>
            <input type="text" placeholder="Last name *" />
            <input type="text" placeholder="+234" />
            <input type="text" placeholder="Confirm password *" />
          </div>

          <div className="checkbox-container">
            <input type="checkbox" />
            <p>
              I agree to the <span>terms and conditions</span>
            </p>
          </div>

          <div className="sign-in-container">
            <button type="submit" className="sign-in-btn">
              Sign Up
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
            <Link to={"/signup"} className="sign-up">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </SignUpStyles>
  );
};

export default SignUp;
