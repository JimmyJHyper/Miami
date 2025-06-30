import styled from "styled-components";

export const DivCategoryListContainer = styled.div`
  width: 80%;
  max-width: 1080px;
  margin: auto;
  padding: 3rem 0;

  @media screen and (max-width: 980px) {
    padding: 5rem 0;
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
