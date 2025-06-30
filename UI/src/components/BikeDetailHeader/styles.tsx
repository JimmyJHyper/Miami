import styled from "styled-components";

export const DivBikeDetailHeaderContainer = styled.div`
  width: 80%;
  max-width: 1080px;
  margin: auto;
  padding: 3rem 0;
  @media screen and (max-width: 768px) {
    padding-top: 0.5rem;
  }
`;
export const H1Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title};
  text-align: center;
  font-weight: 500;
  margin-bottom: 1rem;

  @media screen and (max-width: 980px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
export const DivPricingWrapper = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  font-size: 1.2rem;
  line-height: 1.3;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const PCategory = styled.p`
  font-weight: 700;
  margin-top: 2rem;
  @media screen and (max-width: 640px) {
    margin-top: 1rem;
  }
`;
export const PLastPrice = styled.p`
  text-decoration: line-through;
  font-size: 1rem;
`;
export const PName = styled.p``;
export const PCurrentPrice = styled.p`
  font-weight: 700;
`;
