import styled from "styled-components";

export const DivHomeBikeListContainer = styled.div`
  background: ${({ theme }) => theme.colors.background1};
  padding: 3rem 0;
  text-align: center;

  @media screen and (max-width: 980px) {
    padding-top: 0.5rem;
  }
`;

export const MainTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: clamp(1rem, -0.4792rem + 6.7619vw, 5.4375rem);
  margin-bottom: 1rem;
`;

export const SubTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: clamp(0.875rem, 0.6458rem + 1.0476vw, 1.5625rem);
  color: ${({ theme }) => theme.colors.pink};
  text-shadow: 0.1em -0.01em 0.57em ${({ theme }) => theme.colors.background2};
`;

export const DivLoadingBar = styled.div`
  margin-top: 3rem;
  .MuiCircularProgress-root {
    color: ${({ theme }) => theme.colors.pink};
  }
`;
