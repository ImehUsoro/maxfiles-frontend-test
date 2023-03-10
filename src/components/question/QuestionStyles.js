import styled from "styled-components";

export const QuestionStyle = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 1.25rem 10.8% 0.625rem 1.3125rem;
  border-bottom: 1px solid #bdbdbd66;
  cursor: pointer;

  .text-group {
    user-select: none;
  }
  .text {
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 3.125rem;
  }

  .answer {
    max-width: 43.125rem;
    line-height: 1.5625rem;
    color: #757575;
  }

  .icon {
    align-self: center;
    cursor: pointer;
    user-select: none;
  }

  @media (max-width: 1070px) {
    padding: 1.25rem 2% 0.625rem 1.3125rem;
  }

  @media (max-width: 860px) {
    gap: 2rem;
  }

  @media (max-width: 620px) {
    .text {
      line-height: 2rem;
    }
  }
`;
