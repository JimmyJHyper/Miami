import styled from "styled-components";

export const DivActionBarContainer = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding-bottom: 4rem;

  .next-btn,
  .back-btn {
    background-color: ${({ theme }) => theme.colors.lightGreen};
    text-transform: capitalize;
    min-width: max-content;
    font-weight: 700;
    font-size: 1.1rem;
    width: 130px;
    padding: 0.7rem;
    transition: all 0.3s ease-out;
  }

  .next-btn:hover {
    background-color: ${({ theme }) => theme.colors.green};
  }

  .back-btn {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.gray1};
    border: none;

    &:hover {
      background-color: ${({ theme }) => theme.colors.white};
      box-shadow: 0 1px 3px ${({ theme }) => theme.colors.wizardShadow};
    }
  }
`;
