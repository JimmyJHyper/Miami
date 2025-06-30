import Image from "next/image";
import styled from "styled-components";

export const DivBookingServiceContainer = styled.div`
  padding: 3rem 0;
`;

export const H2Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 3rem;
  font-weight: 500;
  max-width: 650px;
  margin: auto;
  text-align: center;

  @media screen and (max-width: 980px) {
    font-size: 2.5rem;
    padding: 0 4.5rem;
  }
  @media screen and (max-width: 768px) {
    padding: 0 2rem;
  }
`;

export const DivServiceList = styled.div`
  max-width: 1000px;
  margin: auto;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  padding: 2rem 0;

  @media screen and (max-width: 980px) {
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
  }
`;

export const DivServiceCard = styled.div`
  padding: 1rem;
  max-width: 550px;
  margin: auto;
`;

export const ServiceImg = styled(Image)`
  width: 50px;
  margin-bottom: 1.5rem;
`;

export const ServiceTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

export const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray1};
  line-height: 1.5;
  font-size: 1.1rem;
  font-weight: 300;
`;
