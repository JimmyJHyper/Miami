import styled from "styled-components";

export const PSubTitle = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.wizardBlack};
`;

export const DivCheckBoxBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.wizardBlack};

  .MuiCheckbox-root.Mui-checked {
    color: ${({ theme }) => theme.colors.lightGreen};
  }
`;

export const SpanPrice = styled.span`
  font-weight: 300;
`;

export const PDescription = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.gray1};
  margin-top: 1rem;
`;

export const DivCheckGroupWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray2};
  margin: 0 -5rem;
  padding: 2rem 5rem;
  padding-top: 0;
`;
