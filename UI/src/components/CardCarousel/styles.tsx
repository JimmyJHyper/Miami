import styled from "styled-components";

export const DivCardCarouselContainer = styled.div`
  .alice-carousel__stage-item {
    padding: 1rem;
    z-index: 99;
  }
  .alice-carousel__dots {
    display: none;
  }
  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    height: fit-content;
    width: fit-content;
    position: absolute;
    top: 50%;
    z-index: 9;
  }
  .alice-carousel__prev-btn {
    text-align: left;
    left: -3rem;
  }
  .alice-carousel__next-btn {
    text-align: right;
    right: -3rem;
  }
  .alice-carousel__next-btn-item,
  .alice-carousel__prev-btn-item {
    background: ${({ theme }) => theme.colors.pink};
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: 2rem;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    span {
      padding-bottom: 3px;
      cursor: pointer;
    }
  }
  .alice-carousel__next-btn-item {
    span {
      padding-left: 3px;
    }
  }
  .alice-carousel__prev-btn-item {
    span {
      padding-right: 3px;
    }
  }

  @media screen and (max-width: 980px) {
    margin-bottom: 7rem;
    .alice-carousel__prev-btn,
    .alice-carousel__next-btn {
      display: flex;
      align-items: flex-end;
      top: auto;
      bottom: -4rem;
    }
    .alice-carousel__prev-btn {
      margin-left: 6rem;
      justify-content: start;
    }
    .alice-carousel__next-btn {
      margin-right: 6rem;
      justify-content: end;
    }
    .alice-carousel__next-btn-item,
    .alice-carousel__prev-btn-item {
      font-size: 1.7rem;
      width: 40px;
      height: 40px;
    }
  }
`;
