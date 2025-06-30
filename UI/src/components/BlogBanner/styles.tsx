import Image from "next/image";
import styled from "styled-components";

export const DivBlogBannerContainer = styled.div<{ bgImg?: string }>`
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(${({ bgImg }) => bgImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 980px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ImageContainer = styled.div`
  aspect-ratio: 16/10;
  height: 210px;
  position: relative;
  margin: auto;

  @media screen and (min-width: 480px) {
      height: 250px;
  }

  @media screen and (min-width: 980px) {
    height: 320px;
  }
`

export const ImgBlog = styled(Image)`
  width: 100%;
`;

export const DivEmptyBlur = styled.div`
  backdrop-filter: blur(8px);

  @media screen and (max-width: 980px) {
    display: none;
  }
`;
