import styled from "styled-components";

export const H3Title = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.wizardBlack};
  margin-top: 3rem;
  margin-bottom: 1rem;
`;
export const DivPricingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
  padding-top: 2rem;
  margin: 0 -1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray2};
  color: ${({ theme }) => theme.colors.gray1};

  &.pricing-header {
    color: ${({ theme }) => theme.colors.wizardBlack};
  }
  &:last-child {
    border: none;
  }
`;
export const PDescription = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray1};
  margin-bottom: 2rem;
`;
