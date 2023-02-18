import styled from "styled-components";

export const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 6.25rem 0 3.625rem;

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

  .sign-in-btn {
    border: 1px solid #d19439;
    padding: 0.8rem 1.875rem;
    /* line-height: 50px; */
    border-radius: 1rem;
    transition: all 0.2s ease-in-out;
    font-size: 1.25rem;
    font-weight: 600;
  }

  .sign-up-container {
    position: relative;
  }

  .sign-up-btn {
    background-color: #d19439;
    color: #f5f5f5;
    padding: 0.8rem 1.875rem;
    border-radius: 1rem;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    user-select: none;
    font-size: 1.25rem;
    font-weight: 600;
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
    /* font-size: 1.125rem; */
  }
  .divider {
    border: 1px solid #bdbdbd;
    width: 90%;
  }
`;
