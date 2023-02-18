import styled from "styled-components";

export const SignUpStyles = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  a {
    text-decoration: none;
  }

  input:-webkit-autofill {
    transition: background-color 1s 5000s;
  }

  input {
    outline: none;
  }

  .left-section {
    width: 28.85%;
    background-image: url("/images/signup-bg.png");
    background-size: cover;
  }
  .right-section {
    width: 55%;
    padding-top: 10rem;
    padding-left: 6.25%;
  }

  .welcome-text {
    font-weight: 800;
    font-size: 2.25rem;
    margin-bottom: 0.625rem;
    color: #222222;
  }

  .subtext {
    color: #757575;
    font-size: 1.125rem;
    margin-bottom: 1.875rem;
  }

  .signup-as-agent {
    font-size: 1.125rem;
    margin-bottom: 3.125rem;
    font-weight: 600;
    font-size: 1.25rem;
    user-select: none;
    line-height: 3.125rem;
  }

  .hide {
    display: none;
  }

  .signup-as-agent span {
    font-family: "Proxima Nova", sans-serif;
    color: #d19439;
    transition: all 0.2s ease-in-out;
  }

  .signup-as-agent span:hover {
    color: #bc8533;
    cursor: pointer;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .inputs-container {
    display: flex;
    gap: 3.125rem;
    width: 100%;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .input {
    font-size: 1.125rem;
  }

  .plain-input {
    border: 1px solid #d1943966;
    border-radius: 0.625rem;
    color: black;
    background-color: #f1ebe2;
    padding: 0.875rem 1.875rem 0.875rem 2.5rem;
  }

  .special-input {
    width: 100%;
    border: none;
    background-color: #f1ebe2;
  }

  .input-and-icon-group {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-top: 1.25rem;
    background-color: #f1ebe2;
    border-radius: 0.625rem;
    padding: 0.875rem 1.25rem 0.875rem 2.5rem;
    border: 1px solid #d1943966;
  }

  .input-and-icon-group-phone {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1.25rem;
    background-color: #f1ebe2;
    border-radius: 0.625rem;
    padding: 0.875rem 1.25rem 0.875rem 2.5rem;
    border: 1px solid #d1943966;
  }

  .flags-dropdown {
    display: flex;
    align-items: center;
    gap: 0.3125rem;
  }

  .checkbox-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.25rem;
    margin-top: 2.5rem;
  }

  .agree {
    /* font-weight: 600; */
  }

  .agree span {
    font-family: "Proxima Nova", sans-serif;
    color: #d19439;
  }

  .sign-in-container {
    display: flex;
    gap: 1.25rem;
    margin-bottom: 1.875rem;
  }
  .sign-up-btn {
    background-color: #d19439;
    width: 9.0625rem;
    line-height: 3.125rem;
    color: #f5f5f5;
    border-radius: 0.9375rem;
    font-family: inherit;
    font-weight: 600;
    font-size: 1.25rem;
    transition: all 0.2s ease-in-out;
  }

  .sign-up-btn:hover {
    background-color: #bc8533;
    transform: scale(1.05);
  }

  .sign-up-btn:active {
    background-color: #bc8533;
    transform: scale(1);
  }

  .google-sign-in {
    display: flex;
    align-items: center;
    gap: 1.625rem;
  }

  .google-sign-in p {
    color: #757575;
  }

  .google-image-container {
    cursor: pointer;
  }

  .create-account {
    font-size: 1.125rem;
    align-self: center;
    text-align: center;
    font-weight: 600;
  }
  .sign-up {
    font-family: "Proxima Nova", sans-serif;
    color: #d19439;
    font-size: 1rem;
    transition: all 0.2s ease-in-out;
  }

  .sign-up:hover {
    color: #bc8533;
  }

  .check-container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .check-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: -0.15rem;
    left: 0;
    height: 1rem;
    width: 1rem;
    background-color: inherit;
    border: 1px solid #222222;
  }

  .check-container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  .check-container input:checked ~ .checkmark {
    background-color: #d19439;
    border: 1px solid #d19439;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .check-container input:checked ~ .checkmark:after {
    display: block;
  }

  .check-container .checkmark:after {
    left: 5px;
    top: 0px;
    width: 3px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .break-hide {
    display: none;
  }

  @media only screen and (max-width: 950px) {
    .left-section {
      display: none;
    }

    .right-section {
      width: 100%;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    form {
      width: 80%;
    }
  }

  @media only screen and (max-width: 670px) {
    .inputs-container {
      flex-direction: column;
      gap: 1.25rem;
    }
  }

  @media only screen and (max-width: 490px) {
    .signup-as-agent {
      text-align: center;
      line-height: 2rem;
      margin-bottom: 2.125rem;
    }
    .hide {
      display: block;
    }
  }

  @media only screen and (max-width: 400px) {
    .sign-in-container {
      flex-direction: column;
      align-items: center;
    }
    .sign-up-btn {
      width: 100%;
    }
    .welcome-text {
      font-size: 1.8rem;
    }
    .break-hide {
      display: block;
    }
  }
`;
