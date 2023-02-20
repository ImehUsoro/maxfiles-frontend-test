import styled from "styled-components";

export const FooterStyle = styled.footer`
  .top {
    display: flex;
    align-items: center;
    gap: 10.5%;
    justify-content: center;
    padding-top: 2.25rem;
    padding-bottom: 2.375rem;
    margin: 0 6.944%;
    border-top: 1px solid #bdbdbd66;

    .social-links {
      display: flex;
      gap: 1rem;

      img {
        align-self: center;
      }
    }

    .contact-links {
      display: flex;
      gap: 6.3125rem;

      .single-contact-group {
        .head {
          font-weight: 600;
          font-size: 1.25rem;
          line-height: 3.125rem;
        }
        .contact {
          color: #757575;
          font-size: 1.125rem;
          margin-bottom: 1.25rem;
        }
      }
    }
  }

  .bottom {
    background-color: #162e40;
    color: #f5f5f5;
    text-align: center;
    padding: 1.375rem 0;
  }

  @media (max-width: 1228px) {
    .top {
      gap: 7%;

      .contact-links {
        gap: 3.3125rem;
      }
    }
  }

  @media (max-width: 1000px) {
    .top {
      flex-direction: column-reverse;
      gap: 2rem;
      .contact-links {
        width: 100%;
        justify-content: space-between;
      }
    }
  }

  @media (max-width: 724px) {
    .top {
      margin: 0 3.5%;
    }
  }

  @media (max-width: 668px) {
    .top {
      .contact-links {
        display: grid;
        grid-template-columns: 1fr 1fr;

        .single-contact-group {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }
  }

  @media (max-width: 350px) {
    .top {
      .contact-links {
        gap: 2%;
      }
    }
  }
`;
