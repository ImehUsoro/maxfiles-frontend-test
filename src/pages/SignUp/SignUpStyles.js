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
  }
`;

// 794px for form
