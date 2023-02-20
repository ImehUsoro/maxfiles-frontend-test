import styled from "styled-components";

export const FaqStyles = styled.section`
  margin-top: -3.2rem;
  margin-bottom: 9.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .faq-heading {
    font-weight: 800;
    font-size: 2.25rem;
    line-height: 3.125rem;
    margin-bottom: 3.125rem;
    text-align: center;
  }

  .faqs-container {
    width: 66.5%;
    background: linear-gradient(
      180deg,
      #f5f5f5 0%,
      rgba(255, 255, 255, 0.89) 100%
    );
    border-radius: 1.25rem;
    padding: 1.875rem 1.875rem 4.5rem 1.875rem;
  }

  @media (max-width: 900px) {
    margin-top: 0;
    margin-bottom: 5rem;
  }

  @media (max-width: 860px) {
    .faqs-container {
      width: 90%;
      padding: 1.875rem 1rem 4.5rem 1rem;
    }
  }

  @media (max-width: 540px) {
    .faqs-container {
      padding: 0;
    }
  }
`;
