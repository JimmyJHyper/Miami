import styled from "styled-components";

export const DivBikeInsuranceTableContainer = styled.div`
  width: 90%;
  margin: auto;
  box-shadow: 0 1px 3px ${({ theme }) => theme.colors.wizardShadow};
  margin-top: 3.5rem;
`;
export const H3Title = styled.h3`
  font-size: 1.5rem;
  padding: 1.5rem 1rem;
  color: ${({ theme }) => theme.colors.wizardBlack};
`;
export const DivInsuranceListWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 2rem 5rem;
  min-height: 400px;

  @media screen and (max-width: 620px) {
    padding: 2rem 1rem;
  }
`;
export const PLabel = styled.p`
  color: ${({ theme }) => theme.colors.wizardBlack};
  text-transform: capitalize;
  margin-bottom: 1rem;
`;
export const DivInputWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
  .text-input {
    width: 100%;
  }
`;
export const DivInsuranceListItem = styled.div`
  padding: 1rem 0;
  padding-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.wizardShadow};

  &:last-child {
    border: none;
    padding-bottom: 1rem;
  }
`;
export const PDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray1};
`;
export const ButtonEdit = styled.button`
  min-width: 90px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.lightGreen};
  box-shadow: 0 1px 3px ${({ theme }) => theme.colors.wizardShadow};
  border-radius: 5px;
  padding: 1rem;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s ease-out;

  &:hover {
    background: ${({ theme }) => theme.colors.lightGreen};
    color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (max-width: 620px) {
    width: 100%;
    margin-top: 1rem;
  }
`;
