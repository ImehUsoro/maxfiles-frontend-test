import styled from "styled-components";

export const SectionThreeStyles = styled.section`
  margin-bottom: 9.375rem;
  h2 {
    font-weight: 800;
    font-size: 2.25rem;
    line-height: 3.125rem;
    margin-bottom: 5.875rem;
    text-align: center;
  }

  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    place-items: center;
    gap: 2.5rem;
    row-gap: 4rem;
    justify-content: center;
    width: 100%;
  }

  @media (max-width: 860px) {
    margin-bottom: 6.5rem;
  }

  @media (max-width: 450px) {
    h2 {
      font-size: 1.8rem;
      margin-bottom: 3rem;
    }
  }
`;
