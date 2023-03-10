import styled from "styled-components";

export const PopularDestinationCardStyles = styled.div`
  width: 18.4375rem;
  height: 22.3125rem;
  background-color: #ffffff;
  color: #222222;
  box-shadow: 0px 4px 8px rgba(14, 31, 53, 0.12);
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;

  :hover {
    cursor: pointer;
    box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.75);
  }

  .name-container p {
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 3.125rem;
    text-align: center;
    margin: 1.875rem 0 0.625rem 0;
  }

  .info-container {
    margin-top: -0.3rem;
    padding-left: 1.5rem;
    padding-top: 1.1875rem;
    background-color: #d19439;
    border-radius: 0 0 1.25rem 1.25rem;

    .processing-time {
      font-size: 1.125rem;
      color: #f5f5f5;
      line-height: 1.5625rem;
      margin-bottom: 0.1875rem;
    }

    .days {
      line-height: 1.5625rem;
      font-size: 1.125rem;
    }

    .price {
      font-weight: 600;
      color: #f5f5f5;
      font-size: 1.25rem;
      line-height: 3.125rem;
    }
  }

  @media (max-width: 320px) {
    width: 13.5rem;
    .image-container {
      width: 100%;

      img {
        max-width: 100%;
      }
    }

    .info-container {
      padding-top: 1.8rem;

      padding-bottom: 1.8rem;
    }
  }
`;
