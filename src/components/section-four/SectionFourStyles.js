import styled from "styled-components";

export const SectionFourStyles = styled.section`
  margin-bottom: 9.375rem;
  h2 {
    font-weight: 800;
    font-size: 2.25rem;
    line-height: 3.125rem;
    margin-bottom: 4.375rem;
    text-align: center;

    span {
      color: #d19439;
    }
  }

  .top-destination-cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    place-items: center;
    gap: 1.6875rem;
    row-gap: 4rem;
    width: 100%;
  }

  @media (max-width: 320px) {
    h2 {
      font-size: 1.8rem;
      margin-bottom: 3.375rem;
    }
  }

  
`;
