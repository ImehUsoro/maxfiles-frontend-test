import styled from "styled-components";

export const SectionOneStyles = styled.section`
  margin-top: -0.25rem;
  background-image: url("/images/section_one_bg.png");
  background-size: cover;
  height: 48.625rem;
  color: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding: 0 2.2rem 3rem 2.2rem;

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
    /* padding: 3.125rem 0rem 0.6875rem 0rem; */
    padding: 3.125rem 0rem 0.6875rem 0rem;
    border-radius: 1.875rem;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .cards {
    display: flex;
    gap: 1.875rem;
    justify-content: center;
    flex-wrap: wrap;
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
  /* 1411 */

  @media (max-width: 1411px) {
    height: 55rem;
  }

  @media (max-width: 900px) {
    height: 60rem;

    .title {
      margin-top: 6.5rem;
    }
  }

  @media (max-width: 535px) {
    height: 65rem;
  }

  @media (max-width: 520px) {
    .title {
      margin-top: 4.5rem;
      font-size: 1.8rem;
      text-align: center;
    }
    .card-group {
      flex-direction: column;
    }

    .image-container {
      transform: rotate(90deg);
      margin: -1rem -1rem;
    }
  }

  @media (max-width: 484px) {
    height: 85rem;
  }
`;
