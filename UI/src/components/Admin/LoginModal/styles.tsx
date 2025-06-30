import styled from "styled-components";

export const PDescriptionn = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray1};
  margin-bottom: 2rem;
`;

export const DivLoginFormContainer = styled.div`
  max-width: 360px;
  margin: auto;
  padding: 3rem 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.wizardBlack};
`;

export const H3Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const PDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  font-weight: 300;
`;

export const DivInputWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
  .text-input {
    width: 100%;
    background: ${({ theme }) => theme.colors.white};
  }
`;

export const ButtonLogin = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.lightGreen};
  box-shadow: 0 1px 3px ${({ theme }) => theme.colors.wizardShadow};
  border-radius: 5px;
  padding: 1rem;
  font-weight: 700;
  font-size: 1.1rem;
  margin-top: 1rem;
  transition: all 0.3s ease-out;

  &:hover {
    background: ${({ theme }) => theme.colors.lightGreen};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const PError = styled.p`
  color: red;
  margin-bottom: 0.5rem;
`;

