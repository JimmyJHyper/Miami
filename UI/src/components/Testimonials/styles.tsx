import styled from "styled-components";

export const DivTestimonialsContainer = styled.div`
  padding: 5rem 0;
  background: ${({ theme }) => theme.colors.background1};
`;

export const H2Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 2.5rem;
  font-weight: 700;
  max-width: 650px;
  margin: auto;
  text-align: center;
  margin-bottom: 1rem;

  @media screen and (max-width: 980px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 980px) {
    font-size: 1.5rem;
  }
`;

export const DivCardListWrapper = styled.div`
  width: 80%;
  max-width: 1080px;
  margin: auto;
  margin-top: 2rem;

  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    position: absolute;
    top: 35%;
  }

  .alice-carousel__next-btn-item,
  .alice-carousel__prev-btn-item {
    background: transparent;
    color: ${({ theme }) => theme.colors.gray2};
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: 3rem;
    transition: all 0.3s ease-out;
  }
  .alice-carousel__next-btn-item.__inactive,
  .alice-carousel__prev-btn-item.__inactive {
    display: none;
  }
  .alice-carousel__next-btn-item:hover,
  .alice-carousel__prev-btn-item:hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 980px) {
    .alice-carousel__prev-btn,
    .alice-carousel__next-btn {
      display: block;
      align-items: flex-end;
      top: 35%;
    }
    .alice-carousel__prev-btn {
      margin-left: 1rem;
    }
    .alice-carousel__next-btn {
      margin-right: 1rem;
    }
    .alice-carousel__next-btn-item,
    .alice-carousel__prev-btn-item {
      font-size: 2.5rem;
      width: 45px;
      height: 45px;
    }
  }
`;

export const PDescription = styled.h4`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 1.2rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 0.5rem;
  line-height: 1.7;

  @media screen and (max-width: 980px) {
    font-size: 1rem;
  }
`;
