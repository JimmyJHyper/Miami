import styled from "styled-components";

export const H3Title = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.wizardBlack};
  margin-top: 3rem;
  margin-bottom: 1rem;
`;

export const PDescription = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray1};
  margin-bottom: 3rem;
`;

export const PInformText = styled.p`
  color: ${({ theme }) => theme.colors.wizardBlack};
  margin-bottom: 1.5rem;
  padding: 0 1rem;
  line-height: 1.5;
  font-size: 1.1rem;
  font-weight: 300;
`;
