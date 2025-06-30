import Image from "next/image";
import styled from "styled-components";

export const DivBikeCarouselContainer = styled.div`
  
  .swiper-wrapper {
    min-height: 180px;
  }


  .react-simple-image-viewer__modal {
    z-index: 99;
    background: ${({ theme }) => theme.colors.gray1};
    padding: 0;
  }

  .styles-module_navigation__1pqAE,
  .react-simple-image-viewer__close {
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }

  .carousel.carousel-slider {
    overflow: visible;
    margin-bottom: 2rem;
  }

  .carousel .control-dots {
    bottom: -2.5rem;
  }

  .carousel .control-dots .dot {
    background: ${({ theme }) => theme.colors.black};
    width: 15px;
    height: 15px;
  }
  .carousel .control-dots .dot:not(.selected):hover {
    opacity: 0.3;
  }

  @media screen and (max-width: 640px) {
    .alice-carousel__dots {
      margin-top: 1rem;
    }
  }

  @media screen and (min-width: 992px) {
    .swiper-wrapper {
      min-height: 210px;
    }
  }

  @media screen and (min-width: 1440px) {
    .swiper-wrapper {
      min-height: 320px;
    }
  }
`;


export const ImageBikeContainer = styled.div`
  aspect-ratio: 16 / 10;
  position: relative;
  width: 100%;
`

export const ImgBike = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
  cursor: pointer;
`;

export const BulletContainer = styled.div`
  max-width: fit-content;
  margin: 1rem auto 0 auto;
  display: flex;
  gap: 12px;
  align-items: center;

  .swiper-pagination-bullet {
    width: 17px;
    height: 17px;
    background-color: rgb(236, 236, 236);
    cursor: pointer;
    opacity: 1;
  }


  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background-color: #000000;
  }

  @media (min-width: 640px) {
     margin: 3rem auto 0 auto;
     gap: 16px;
  }

`