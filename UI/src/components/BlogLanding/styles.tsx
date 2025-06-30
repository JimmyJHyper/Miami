import styled from "styled-components";

export const DivLandingBannerWrapper = styled.div`
  background-blend-mode: overlay;
  background-image: url("/images/blog_landing_bg.webp");
  background-color: ${({ theme }) => theme.colors.shadowGray};
  background-position: center;
  background-size: cover;
  padding: 6.5rem 0;

  @media screen and (max-width: 980px) {
    padding: 3rem 0;
  }
`;

export const DivHeaderWrapper = styled.div`
  width: 80%;
  max-width: 1080px;
  margin: auto;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.title};
  text-align: center;
`;
export const H1Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 500;
  margin-bottom: 1rem;

  @media screen and (max-width: 980px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;
export const PDescription = styled.p`
  max-width: 700px;
  margin: auto;
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 1.5;
  @media screen and (max-width: 980px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 768px) {
    line-height: 1.3;
  }
`;

export const DivBlogListWrapper = styled.div`
  width: 80%;
  max-width: 1080px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.7rem;
  padding: 5rem 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
