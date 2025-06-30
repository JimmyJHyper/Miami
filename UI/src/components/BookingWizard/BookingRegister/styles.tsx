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

