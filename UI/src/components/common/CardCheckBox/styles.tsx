import styled from "styled-components";

export const DivCardCheckBoxContainer = styled.div<{ active?: boolean }>`
  background: ${({ theme, active }) =>
    active ? theme.colors.opacityGreen : "transparent"};
  border: 1px solid
    ${({ theme, active }) =>
      active ? theme.colors.lightGreen : theme.colors.gray2};
  border-radius: 5px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  cursor: pointer;

  .MuiCheckbox-root.Mui-disabled {
    color: ${({ theme, active }) =>
      active ? theme.colors.lightGreen : theme.colors.gray1};
  }
`;

export const DivHeaderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.wizardBlack};
`;

export const PTitle = styled.p`
  font-size: 1.1rem;
  text-transform: capitalize;

  span {
    font-weight: 300;
    margin-left: 0.5rem;
  }
`;

export const SpanDescription = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.gray1};
`;
