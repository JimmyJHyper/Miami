import styled from "styled-components";

export const PDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray1};
  text-align: center;
  padding: 1.5rem 3rem;
  line-height: 1.5;
  font-size: 0.9rem;

  @media screen and (max-width: 640px) {
    padding: 1.5rem 1rem;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 300px;
  margin: auto;

  .form-field {
    flex: 1;
  }
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
export const ButtonResend = styled.button<{ disabled?: boolean }>`
  background: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray2 : theme.colors.white};
  color: ${({ theme }) => theme.colors.gray1};
  box-shadow: 0 1px 3px ${({ theme }) => theme.colors.wizardShadow};
  border-radius: 5px;
  padding: 1rem;
  font-weight: 700;
  font-size: 1.1rem;
  margin-top: 1rem;
  transition: all 0.3s ease-out;
  cursor: ${({ disabled }) => (disabled ? "initial" : "pointer")};

  &:hover {
    background: ${({ theme, disabled }) =>
      disabled ? theme.colors.gray2 : theme.colors.lightGreen};
  }
`;
