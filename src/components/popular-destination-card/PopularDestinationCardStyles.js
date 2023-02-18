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
`;
