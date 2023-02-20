import styled from "styled-components";

export const StatisticsStyles = styled.div`
  /* border: 1px solid red; */
  width: 51.6%;
  margin: -2rem auto 7.5625rem auto;
  border-radius: 1.25rem;
  padding: 0.875rem 3.6%;
  background-color: #d19439;
  display: flex;

  .divider {
    width: auto;
    border: 0.5px solid rgba(189, 189, 189, 0.7);
    margin: 0 1.875rem 0 1.5625rem;
  }

  @media (max-width: 1340px) {
    width: 60%;
    padding: 0.875rem 2%;
  }

  @media (max-width: 930px) {
    /* margin-top: -3rem; */
    margin-bottom: 4.5rem;
  }
  @media (max-width: 900px) {
    margin-top: -3rem;
  }



  @media (max-width: 723px) {
    margin-top: -4rem;
  }

  @media (max-width: 535px) {
    margin-top: -9rem;

    flex-direction: column;
    align-items: center;

    .divider {
      width: 100%;
      margin: 1rem 0;
    }
  }
`;
