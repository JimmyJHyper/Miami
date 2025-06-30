import styled from "styled-components";

export const DivBlogListContainer = styled.div`
  width: 80%;
  max-width: 1080px;
  margin: auto;
  padding: 4rem 0;

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
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const DivBlogListWrapper = styled.div`
  display: grid;
  margin-bottom: 3rem;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.7rem;

  @media screen and (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
