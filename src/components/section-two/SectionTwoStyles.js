import styled from "styled-components";

export const SectionTwoStyles = styled.section`
  display: flex;
  justify-content: flex-end;
  padding: 0;
  gap: 10.2%;
  margin-bottom: 9.375rem;
  margin-left: 2rem;

  .left-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 40%;

    h2 {
      font-size: 2.25rem;
      line-height: 3.125rem;
      margin-bottom: 1.875rem;
      text-align: center;
    }
    span {
      color: #d19439;
    }
    p {
      font-size: 1.125rem;
    }
  }

  @media (max-width: 930px) {
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    margin: 0 3% 7rem 3%;

    .left-section {
      align-items: center;
      width: 100%;
      h2 {
      }
      p {
        text-align: center;
        width: 70%;
      }
    }

    .right-section {
      width: 85%;
      display: flex;
      justify-content: center;
      img {
        max-width: 100%;
      }
    }
  }

  @media (max-width: 484px) {
    .left-section {
      h2 {
        font-size: 1.8rem;
      }
    }
  }
`;
