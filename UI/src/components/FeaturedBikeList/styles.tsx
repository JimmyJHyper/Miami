import styled from "styled-components";

export const DivFeaturedBikeListContainer = styled.div`
  width: 80%;
  max-width: 1080px;
  padding: 3rem 0;
  margin: auto;

  @media screen and (max-width: 980px) {
    padding: 4rem 0;
  }
`;

export const H2Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 2.5rem;
  font-weight: 700;
  max-width: 1080px;
  margin: auto;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 980px) {
    font-size: 2rem;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
