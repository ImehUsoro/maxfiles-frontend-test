import styled from "styled-components";

export const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 6.9444444444% 0 4.1666666667%;

  .left-section {
    display: flex;
    align-items: center;
    gap: 3.125rem;
  }

  .right-section {
    display: flex;
    align-items: center;
    gap: 1.875rem;
  }

  .links {
    display: flex;
    gap: 3.125rem;
    color: #222222;
  }

  .links a {
  }

  .btn {
    padding: 0.8rem 1.875rem;
    transition: all 0.2s ease-in-out;
    border-radius: 1rem;
    font-size: 1.25rem;
    font-weight: 600;
  }

  .sign-in-btn {
    border: 1px solid #d19439;
    padding: 0.8rem 1.875rem;
  }

  .sign-up-container {
    position: relative;
  }

  .sign-up-btn {
    background-color: #d19439;
    color: #f5f5f5;
    padding: 0.8rem 1.875rem;
    cursor: pointer;
    user-select: none;
  }

  .sign-in-btn:hover {
    transform: scale(1.05);
  }

  .sign-up-btn:hover {
    background-color: #bc8533;
  }

  .sign-up-modal {
    position: absolute;
    top: 3rem;
    right: 0;
    display: flex;
    gap: 0.2rem;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem 0rem;
    width: 11.3125rem;
    background-color: #ffffff;
    border-radius: 0.625rem;
    box-shadow: 0px 4px 24px rgba(212, 175, 156, 0.25);
  }
  .sign-up-modal a {
    width: 90%;
    text-align: center;
    padding: 0.6rem;
    transition: all 0.2s ease-in-out;
    font-weight: 600;
  }
  .sign-up-modal a:hover {
    background-color: #4c4c4c;
    color: #f5f5f5;
    font-weight: 800;
  }
  .divider {
    border: 1px solid #bdbdbd;
    width: 90%;
  }

  @media (max-width: 1280px) {
    .left-section {
      gap: 2rem;
    }
    .links {
      gap: 1.5rem;
    }
    .btn {
      padding: 0.5rem 1.2rem;
      border-radius: 0.5rem;
    }
  }

  @media (max-width: 1120px) {
    .links {
      display: none;
    }
  }

  @media (max-width: 520px) {
    flex-direction: column;
    gap: 1.5rem;
    padding-bottom: 1.5rem;
  }

  @media (max-width: 270px) {
    .btn {
      padding: 0.3rem 0;
      width: 100px;
      display: flex;
      justify-content: center;
    }
    .sign-up-btn {
      width: 100px;
    }
  }
`;
