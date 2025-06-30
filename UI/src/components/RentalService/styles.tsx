import styled from "styled-components";

export const DivRentalServiceContainer = styled.div`
  padding: 6rem 0;
  background-image: url("/images/rental_bg.avif");
  background-blend-mode: overlay;
  background-size: cover;
  background-color: ${({ theme }) => theme.colors.gray1};

  @media screen and (max-width: 768px) {
    padding: 3rem 0;
  }
`;

export const H2Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.white};
  font-size: 3rem;
  font-weight: 500;
  max-width: 650px;
  margin: auto;
  text-align: center;
  padding: 3rem 0;

  @media screen and (max-width: 980px) {
    font-size: 2.3rem;
    padding: 3rem 4rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const DivServiceList = styled.div`
  max-width: 1080px;
  margin: auto;
  display: grid;
  gap: 3.5rem;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 2rem;

  @media screen and (max-width: 980px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 2rem;
    gap: 2rem;
  }
`;

export const DivServiceCard = styled.div`
  padding: 1rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.73);
  padding: 1.5rem 2rem;
`;

export const ServiceTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

export const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray1};
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.7;
  font-weight: 300;

  @media screen and (max-width: 980px) {
    max-width: 550px;
    margin: auto;
  }
`;
