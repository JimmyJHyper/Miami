import styled from "styled-components";

export const DivContentWrapper = styled.div`
  text-align: center;
  padding: 2rem 0;
`;
export const ImgUpdated = styled.img`
  width: 84px;
  margin-bottom: 2rem;
`;
export const H1Title = styled.h1`
  font-size: 1.7rem;
  color: ${({ theme }) => theme.colors.wizardBlack};
  margin-bottom: 2rem;
`;
export const ButtonDone = styled.button`
  width: 150px;
  background: ${({ theme }) => theme.colors.lightGreen};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 3px ${({ theme }) => theme.colors.wizardShadow};
  border-radius: 5px;
  font-weight: 700;
  padding: 0.9rem;
  transition: all 0.3s ease-out;

  &:hover {
    filter: brightness(0.95);
  }
`;
