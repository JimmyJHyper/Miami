import styled from "styled-components";

export const DivDatePickerContainer = styled.div`
  .picker-input {
    width: 100%;
    cursor: pointer;
  }
  cursor: pointer;
`;

export const DivActionBar = styled.div`
  display: flex;
  padding: 0.5rem;
  justify-content: end;
  gap: 0.5rem;
`;
export const ButtonClose = styled.button`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.lightGreen};
  box-shadow: 0 1px 3px ${({ theme }) => theme.colors.wizardShadow};
  border-radius: 5px;
  padding: 0.8rem 1rem;
  font-weight: 700;
  font-size: 0.9rem;
  transition: all 0.3s ease-out;

  &:hover {
    background: ${({ theme }) => theme.colors.lightGreen};
    color: ${({ theme }) => theme.colors.white};
  }
`;
export const ButtonConfirm = styled.button`
  background: ${({ theme }) => theme.colors.lightGreen};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 3px ${({ theme }) => theme.colors.wizardShadow};
  border-radius: 5px;
  padding: 0.8rem 1rem;
  font-weight: 700;
  font-size: 0.9rem;
  transition: all 0.3s ease-out;

  &:hover {
    background: ${({ theme }) => theme.colors.green};
  }
`;
