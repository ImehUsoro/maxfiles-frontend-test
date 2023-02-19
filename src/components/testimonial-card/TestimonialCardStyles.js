import styled, { css } from "styled-components";

export const TestimonialCardStyles = styled.section`
  height: 16.5rem;
  width: 25rem;
  background-color: #ffffff;
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.19);
  transition: all 0.3s ease-in-out;

  :hover {
    cursor: pointer;
    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.27);
    -webkit-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.27);
    -moz-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.27);
  }
  .profile-image {
    align-self: center;
    margin-top: -1.75rem;
    margin-bottom: 1.375rem;
  }

  .name {
    font-family: "Proxima Nova", sans-serif;
    color: #162e40;
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 0.75rem;
    line-height: 1.5625rem;
  }

  .quote-container {
    display: flex;
    gap: 0.625rem;
  }

  .text {
    max-width: 14.375rem;
    font-size: 1.125rem;
    line-height: 1.5625rem;
    text-align: center;
  }

  .left {
    align-self: flex-start;
  }
  .right {
    align-self: flex-end;
  }

  .stars-container {
    display: flex;
  }

  ${({ space }) =>
    space &&
    css`
      .stars-container {
        margin-top: 1.4375rem;
      }
    `};
`;
