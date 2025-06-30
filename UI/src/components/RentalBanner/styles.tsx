import styled from "styled-components";

export const DivHeaderWrapper = styled.div`
  padding: 1.8rem;
  padding-top: 1.3rem;
  background-image: url("/images/rental_banner.webp");
  background-blend-mode: overlay;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.33);
  text-align: center;
`;

export const H1Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 2.5rem;

  @media screen and (max-width: 980px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
