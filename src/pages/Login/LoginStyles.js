import styled from "styled-components";

export const LoginStyles = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  a {
    text-decoration: none;
  }

  input {
    outline: none;
  }

  .left-section {
    width: 38.194%;
    background-image: url("/images/login-bg.png");
    background-size: cover;
  }
  .right-section {
    width: 55%;
    padding-top: 12.5rem;
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
    margin-bottom: 3.125rem;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 71.5%;
  }

  .input {
    font-size: 1.125rem;
  }

  .error {
    color: red;
    font-size: 0.75rem;
    margin-top: 0.25rem;
  }

  .password-input-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.25rem;
    background-color: #f1ebe2;
    border-radius: 0.625rem;
    padding: 0.875rem 1.25rem 0.875rem 2.5rem;
    border: 1px solid #d1943966;
  }

  .email-input {
    border: 1px solid #d1943966;
    border-radius: 0.625rem;
    color: black;
    background-color: #f1ebe2;
    padding: 0.875rem 1.875rem 0.875rem 2.5rem;
  }

  .password-input {
    border: none;
    width: 100%;
    background-color: #f1ebe2;
  }

  .password-input-container img {
    align-self: center;
  }

  .view-password-image-container {
    cursor: pointer;
    user-select: none;
  }

  .checkbox-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.25rem;
    margin-top: 2.5rem;
  }

  .checkbox-container input[type="checkbox"] {
    border: none;
    background-color: inherit;
  }

  .checkbox:checked {
    background-color: #d19439;
  }

  .checkbox-container input {
    margin: 0;
  }

  .checkbox-container p {
    color: #222222;
  }

  .sign-in-container {
    display: flex;
    gap: 1.25rem;
    margin-bottom: 1.875rem;
  }

  .sign-in-btn {
    width: 9.0625rem;
    background-color: #d19439;
    line-height: 3.125rem;
    color: #f5f5f5;
    border-radius: 0.9375rem;
    font-family: inherit;
    font-weight: 600;
    font-size: 1.25rem;
    transition: all 0.2s ease-in-out;
  }

  .sign-in-btn:hover {
    background-color: #bc8533;
    transform: scale(1.05);
  }

  .sign-in-btn:active {
    background-color: #bc8533;
    transform: scale(1);
  }

  .google-sign-in {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .google-sign-in p {
    color: #757575;
  }

  .google-image-container {
    width: 2.8125rem;
    height: 2.8125rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 0.625rem;
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

  @media only screen and (max-width: 815px) {
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
  }

  @media only screen and (max-width: 488px) {
    .sign-in-container {
      flex-direction: column;
      align-items: center;
    }
    .sign-in-btn {
      width: 100%;
    }
    .subtext {
      text-align: center;
    }
  }

  @media only screen and (max-width: 350px) {
    .welcome-text {
      font-size: 1.8rem;
      text-align: center;
    }
    .break-hide {
      display: block;
    }
  }
`;
