import styled from "styled-components";

export const OfferCardStyles = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.375rem 0 1.375rem;
  box-shadow: 0px 4px 8px rgba(14, 31, 53, 0.12);
  border-radius: 1.25rem;
  width: 13.15rem;
  height: 15.12375rem;
  transition: all 0.3s ease-in-out;

  :hover {
    cursor: pointer;
    box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.75);
  }

  .card-image {
    margin-top: -1.5rem;
  }

  .card-title {
    font-weight: 700;
    font-size: 1.375rem;
    margin-top: 1.69625rem;
    margin-bottom: 0.625rem;
    line-height: 1.875rem;
  }

  .card-text {
    text-align: center;
    font-size: 1.125rem;
    line-height: 1.5625rem;
  }
`;
