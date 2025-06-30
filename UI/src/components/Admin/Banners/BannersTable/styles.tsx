import styled from 'styled-components';

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: left;
  margin-top:2rem;
`;

export const StyledTableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
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

export const ButtonSubmit = styled.a`
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
  margin-bottom: 3rem;
  margin-right:1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.green};
  }
`;

// ... (rest of your component code)
