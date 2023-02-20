import styled from "styled-components";

export const SectionFiveStyles = styled.section`
  margin-bottom: 9.375rem;
  width: 100%;

  .main-title {
    font-weight: 800;
    font-size: 2.25rem;
    line-height: 3.125rem;
    margin-bottom: 0.75rem;
    text-align: center;
  }

  .sub-heading-container {
    background-color: #fff3d199;
    padding: 0.5625rem 0;
    margin-bottom: 3.8125rem;
  }

  .sub-heading {
    color: #757575;
    text-align: center;
    line-height: 3.125rem;
    font-weight: 600;
    font-size: 1.25rem;
  }

  .popular-destination-container {
    display: flex;
    justify-content: center;
    gap: 2.125rem;
  }
  .popular-destination-container img {
    align-self: center;
    cursor: pointer;
  }

  .popular-destinations-cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5625rem;
    row-gap: 4rem;
    width: 90%;
    place-items: center;
  }

  @media (max-width: 1420px) {
    .popular-destination-container {
      margin: 0 2rem;
    }
  }

  @media (max-width: 812px) {
    .hide {
      display: none;
    }
    .popular-destination-container {
      margin: 0;
    }

    .popular-destinations-cards-container {
      width: 100%;
    }
  }

  @media (max-width: 364px) {
    .main-title {
      font-size: 1.8rem;
    }
  }
`;
