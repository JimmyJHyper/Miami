import styled from "styled-components";

export const PErrorMsg = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-size: 0.8rem;
  margin-left: 0.5rem;
`;

export const SubmitButton = styled.button`
  background: green;
`;
export const PTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.wizardBlack};
  font-size: 1.8rem;
  padding: 3rem 0;
  text-align: center;
`;
export const ButtonSubmit = styled.button`
  background: ${({ theme }) => theme.colors.lightGreen};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 3px ${({ theme }) => theme.colors.wizardShadow};
  border-radius: 5px;
  padding: 1rem;
  font-weight: 700;
  font-size: 1.1rem;
  margin-top: 1rem;
  transition: all 0.3s ease-out;

  &:hover {
    background: ${({ theme }) => theme.colors.green};
  }
`;

export const RouteButton = styled.a`
  background: ${({ theme }) => theme.colors.lightGreen};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 3px ${({ theme }) => theme.colors.wizardShadow};
  border-radius: 5px;
  padding: 1rem;
  font-weight: 700;
  font-size: 1.1rem;
  margin-top: 1rem;
  transition: all 0.3s ease-out;
  text-align:center;
  &:hover {
    background: ${({ theme }) => theme.colors.green};
  }
`;
