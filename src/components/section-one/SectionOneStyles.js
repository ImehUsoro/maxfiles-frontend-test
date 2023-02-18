import styled from "styled-components";

export const SectionOneStyles = styled.section`
  margin-top: -0.25rem;
  background-image: url("/images/section_one_bg.png");
  background-size: cover;
  height: 48.625rem;
  color: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding: 0 2.2rem;

  .title {
    font-size: 2rem;
    font-weight: 800;
    max-width: 31.5rem;
    line-height: 2.8125rem;
    margin-top: 12.5rem;
  }

  .blur-background {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.32) 0%,
      rgba(255, 255, 255, 0.08) 100%
    );
    box-shadow: 0px 4px 24px rgba(212, 175, 156, 0.25);
    backdrop-filter: blur(22.5px);
    margin-top: 3.125rem;
    padding: 3.125rem 1rem 0.6875rem 1rem;
    border-radius: 1.875rem;
    display: flex;
    flex-direction: column;
  }

  .cards {
    display: flex;
    gap: 1.875rem;
  }

  .card-group {
    display: flex;
    gap: 1rem;
  }

  .group-one {
    align-items: center;
    gap: 0;
  }
  .image-container {
    margin: 0 -1rem;
    z-index: 1;
  }

  .scroll-icon {
    margin-top: 1.875rem;
    align-self: center;
    cursor: pointer;
  }
`;
