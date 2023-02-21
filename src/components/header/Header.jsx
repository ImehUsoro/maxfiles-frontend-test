import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { agentSignUpState } from "../atoms/SignUpAtom";
import { HeaderStyles } from "./HeaderStyles";

const Header = () => {
  const [showSignupOptions, setShowSignupOptions] = useState(false);
  const [agentSignUp, setAgentSignUp] = useRecoilState(agentSignUpState);
  const ref = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (showSignupOptions && ref.current && !ref.current.contains(e.target)) {
        setShowSignupOptions(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showSignupOptions]);

  return (
    <HeaderStyles>
      <div className="left-section">
        <div>
          <img src="images/visaprof_logo.png" alt="Visa Prof Logo" />
        </div>
        <div className="links">
          <Link to={"/"}>Agent information</Link>
          <Link to={"/"}>Country requirements</Link>
          <Link to={"/"}>About Us</Link>
          <a href="#contact-us">Contact Us</a>
        </div>
      </div>
      <div className="right-section">
        <Link to={"/login"} className="sign-in-btn btn">
          Sign In
        </Link>
        <div className="sign-up-container">
          <span
            className="sign-up-btn btn"
            onClick={() => setShowSignupOptions((prev) => !prev)}
          >
            Sign Up
          </span>

          {showSignupOptions && (
            <div className="sign-up-modal" ref={ref}>
              <button
                className="top"
                onClick={() => {
                  setAgentSignUp(false);
                  setShowSignupOptions(false);
                  navigate("/signup");
                }}
              >
                Sign up as myself
              </button>
              <div className="divider"></div>
              <button
                className="bottom"
                onClick={() => {
                  setAgentSignUp(true);
                  setShowSignupOptions(false);
                  navigate("/signup");
                }}
              >
                Sign up as an agent
              </button>
            </div>
          )}
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
