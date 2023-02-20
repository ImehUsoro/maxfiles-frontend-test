import styled from "styled-components";

export const SectionSixStyles = styled.section`
  margin-bottom: 11.875rem;
  .image-and-text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 66%;
    margin: 0 0 0 auto;
    margin-bottom: 0.625rem;
  }

  .section-heading {
    font-weight: 800;
    font-size: 2.25rem;
    line-height: 3.125rem;
    text-align: center;

    span {
      color: #d19439;
    }
  }

  .testimonials-container {
    display: flex;
    gap: 1.25rem;
    justify-content: center;
    margin-bottom: 1rem;
  }

  @media (max-width: 1220px) {
    .image-and-text {
      width: 70%;
    }
    .testimonials-container {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4rem;
      margin: auto;
    }
  }

  @media (max-width: 1000px) {
    .image-and-text {
      width: 70%;
    }

    .section-heading {
      max-width: 400px;
    }
  }

  @media (max-width: 900px) {
    .hide {
      display: none;
    }
    .image-and-text {
      width: 100%;
      justify-content: center;
    }

    .section-heading {
      margin-bottom: 3rem;
      max-width: none;
    }
  }

  @media (max-width: 550px) {
    margin: 0 2rem 5rem 2rem;

    .section-heading {
      font-size: 1.8rem;
      line-height: 2.125rem;

      span {
        color: #d19439;
      }
    }
  }
`;
