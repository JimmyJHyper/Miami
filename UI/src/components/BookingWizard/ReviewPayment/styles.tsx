import styled from "styled-components";

export const PSectionTitle = styled.p`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.wizardBlack};

  &:not(:first-child) {
    margin-top: 1.5rem;
  }

  .section-icon {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.gray1};
  }
`;

export const DivInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.wizardBlack};
  line-height: 1.5;

  .info-label {
    font-weight: 700;
    margin-top: 1rem;
  }

  strong {
    color: ${({ theme }) => theme.colors.background2};
    font-weight: 500;
  }
`;

export const SpanAlert = styled.span`
  background: ${({ theme }) => theme.colors.alertGray};
  color: ${({ theme }) => theme.colors.wizardBlack};
  padding: 0.7rem 1.5rem;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 300;
  display: inline-block;
  margin-top: 1rem;
`;

export const DivPriceBar = styled.div<{ hasMargin?: boolean }>`
  display: flex;
  align-items: end;
  justify-content: space-between;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.wizardBlack};
  margin-top: ${({ hasMargin }) => (hasMargin ? "1rem" : 0)};

  p {
    text-transform: capitalize;
  }

  span {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.gray1};
  }

  button {
    color: ${({ theme }) => theme.colors.gray1};
    font-size: 0.7rem;
    text-decoration: underline;
    margin-left: 1rem;
  }
`;

export const PDescription = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.gray1};
  margin-top: 1rem;
  line-height: 1.3;
`;

export const CheckboxLabel = styled.div`
  color: ${({ theme }) => theme.colors.wizardBlack};
  button {
    color: ${({ theme }) => theme.colors.gray1};
    text-decoration: underline;
  }
`;

export const DivPaymentWrapper = styled.div`
  position: relative;
  min-height: 300px;
`;

export const DivCheckoutFormOverlay = styled.div`
  position: absolute;
  background: rgba(1, 1, 1, 0.8);
  width: 100%;
  height: 100%;
  z-index: 9;
  left: 0px;
  top: 0px;
  color: white;
  font-size: 1.5rem;
  padding: 5rem;
  text-align: center;
`;
