import styled from "styled-components";

export const Divider = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray2};
  margin: 1.5rem -6rem;

  @media screen and (max-width: 640px) {
    margin: 1.5rem -1rem;
  }
`;

export const DivFormWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 94%;
  max-width: 850px;
  margin: auto;
  padding: 4rem 6rem;
  border-radius: 5px;

  .addon-card:last-child {
    ${Divider} {
      display: none;
    }
  }

  @media screen and (max-width: 640px) {
    padding: 2rem 1rem;
  }
`;

export const PTitle = styled.p`
  text-align: center;
  padding: 2rem 1rem;
  font-size: 1.1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.wizardBlack};

  
  @media screen and (max-width: 640px) {
    padding: 1.8rem 0.5rem;
  }
`;

export const CLabel = styled.p`
  color: ${({ theme }) => theme.colors.wizardBlack};
  margin-bottom: 1rem;
  &:not(:first-child) {
    margin-top: 2rem;
  }

  @media screen and (max-width: 640px) {
    margin-top: -0.5rem;
    &:not(:first-child) {
      margin-top: -0.5rem;
    }
  }
`;


export const PLabel = styled.p`
  color: ${({ theme }) => theme.colors.wizardBlack};
  margin-bottom: 1rem;
  &:not(:first-child) {
    margin-top: 2rem;
  }

  @media screen and (max-width: 640px) {
    margin-top: -0.5rem;
    &:not(:first-child) {
      margin-top: -0.5rem;
    }
  }
`;

export const DivInputWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;

  .text-input {
    flex: 1;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const DivContentWrapper = styled.div`
  padding: 1rem;
  color: ${({ theme }) => theme.colors.wizardBlack};
  line-height: 1.7;

  p,
  span,
  li {
    font-size: 1.1rem;
    font-weight: 300;
  }
`;
