import styled from "styled-components";

export const AssessmentStyle = styled.section`
  background-image: url("/images/assessment_bg.png");
  background-size: cover;
  margin-bottom: 6.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .form {
    display: flex;
    flex-direction: column;
    width: 60%;

    input {
      margin-bottom: 1.25rem;
      font-size: 1.125rem;
      outline: none;
      padding: 1.125rem 0 1.125rem 3.75rem;
      border: none;
      border-radius: 0.625rem;
    }

    input:focus {
      outline: 2px solid #d19439;
    }

    input::placeholder {
      color: #757575;
    }

    textarea {
      border: none;
      border-radius: 0.625rem;
      padding: 1.625rem 0 1.625rem 3.75rem;
      font-family: "Lato", sans-serif;
      font-size: 1.125rem;
      outline: none;
      resize: none;
    }

    textarea:focus {
      outline: 2px solid #d19439;
    }

    .submit-btn {
      background-color: #d19439;
      font-weight: 600;
      font-size: 1.25rem;
      color: #f5f5f5;
      padding: 1rem 3.125rem;
      border-radius: 1rem;
      margin-top: 1.875rem;
      margin-bottom: 2.8125rem;
      align-self: center;
      transition: all 0.2s ease-in-out;
    }

    .submit-btn:hover {
      background-color: #bc8533;
      transform: scale(1.05);
    }
    .submit-btn:active {
      transform: scale(1);
    }
  }

  .assessment-heading {
    font-size: 2.25rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 1.25rem;
    margin-top: 3.3125rem;
  }

  .assessment-text {
    text-align: center;
    margin-bottom: 3.125rem;
    color: #d19439;
    font-size: 1.125rem;
  }
`;
