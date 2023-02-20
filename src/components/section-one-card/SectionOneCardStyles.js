import styled, { css } from "styled-components";

export const SectionOneStyles = styled.div`
  background-color: #f5f5f5;
  border-radius: 1rem;
  padding: 1rem 0 1.5625rem 1.25rem;
  width: 13.125rem;
  height: 6.625rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    box-shadow: 0px 0px 7px 2px rgba(204, 204, 204, 0.5);
    -webkit-box-shadow: 0px 0px 7px 2px rgba(204, 204, 204, 0.5);
    -moz-box-shadow: 0px 0px 7px 2px rgba(204, 204, 204, 0.5);
  }

  ${({ group }) =>
    group &&
    css`
      padding: 1rem 0 0 1.25rem;
    `};

  .card-title {
    color: #757575;
    margin-bottom: 0.625rem;
    font-size: 0.875rem;
  }

  .card-info {
    display: flex;
    gap: 2.25rem;
  }
  .card-info p {
    color: #222222;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 3.125rem;
  }
  .card-info img {
    align-self: center;
    cursor: pointer;
  }
  .sub-info {
    color: #757575;
    font-size: 0.75rem;
  }

  ${({ widthChange }) =>
    widthChange &&
    css`
      width: 10rem;
      padding: 1rem 0.75rem 0 1.25rem;

      .card-info {
        display: flex;
        justify-content: space-between;
        gap: 0;
      }
    `};

  @media (max-width: 900px) {
    width: 10rem;
    padding: 1rem 0.75rem 0 1.25rem;
    height: auto;

    .card-info {
      gap: 0;
      justify-content: space-between;
    }
  }


  @media (max-width: 520px) {
    ${({ widthChange }) =>
      !widthChange &&
      css`
        height: 5.75rem;
      `};
  }
`;
