import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  margin-block: 0.6rem;
  margin-inline: 0.2rem;
  gap: 0.3rem;
  align-items: start;
`;

export const Col = styled.div`
  flex: 0.5;
  padding-inline: 0.2rem;
  width: -webkit-fill-available !important;
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

export const FormCheckout = styled.form`
  box-shadow: 0 0 0 0.5px #32325d1a, 0 2px 5px #32325d1a, 0 1px 1.5px #00000012;
  padding: 2.5rem;
`;

export const ButtonSubmit = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.lightGreen};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 3px ${({ theme }) => theme.colors.wizardShadow};
  border-radius: 5px;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 1rem;
  transition: all 0.3s ease-out;
  margin-top: 2rem;
  margin-bottom: 1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.green};
  }
`;
