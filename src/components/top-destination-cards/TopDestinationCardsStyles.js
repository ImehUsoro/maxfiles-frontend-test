import styled, { css } from "styled-components";

export const TopDestinationCardStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(14, 31, 53, 0.12);
  border-radius: 1.25rem;
  width: 18.125rem;
  height: 17.375rem;
  color: #f5f5f5;

  ${({ bg }) =>
    bg === "#D19439" &&
    css`
      background-color: #d19439;
    `};

  ${({ bg }) =>
    bg === "#2D4253" &&
    css`
      background-color: #2d4253;
    `};

  .bottom {
    p {
      line-height: 3rem;
      font-weight: 600;
      font-size: 1.25rem;
    }
  }

  @media (max-width: 320px) {
    width: 13.5rem;
    height: 14rem;

    .top {
      width: 100%;

      img {
        max-width: 100%;
      }
    }
  }
`;
