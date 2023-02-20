import styled from "styled-components";

export const SingleStatStyles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h2 {
    color: #ffffff;
    line-height: 3.125rem;
  }

  p {
    color: #f5f5f5;
  }

  @media (max-width: 1155px) {
    p {
      text-align: center;
    }
  }
`;
