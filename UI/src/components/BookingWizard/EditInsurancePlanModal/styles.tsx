import styled from "styled-components";

export const H3Title = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.wizardBlack};
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
`;
export const DivContentWrapper = styled.div`
  padding: 1rem 3rem;

  @media screen and (max-width: 480px) {
    padding: 1rem;
  }
`;
export const PDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray1};
  text-transform: capitalize;
  margin-bottom: 2rem;
`;
export const DivInputWrapper = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  .text-input {
    width: 100%;
    margin-bottom: 0.5rem;
  }
  textarea.text-input {
    height: 90px;
    padding: 1rem 2rem;
    margin-bottom: 0;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.gray1};
    &:focus {
      color: ${({ theme }) => theme.colors.wizardBlack};
    }
  }
`;
export const ButtonSave = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.lightGreen};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 3px ${({ theme }) => theme.colors.wizardShadow};
  border-radius: 5px;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 1rem;
  transition: all 0.3s ease-out;

  &:hover {
    background: ${({ theme }) => theme.colors.green};
  }
`;
