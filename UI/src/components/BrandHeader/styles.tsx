import Image from "next/image";
import styled from "styled-components";

export const DivBrandHeaderContainer = styled.div`
  text-align: center;
`;
export const ImgBrand = styled(Image)`
  max-width: 200px;
  margin: auto;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 980px) {
    max-width: 150px;
  }
  @media screen and (max-width: 768px) {
    max-width: 100px;
  }
`;
export const H1Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: 500;
  margin-bottom: 1rem;

  @media screen and (max-width: 980px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
