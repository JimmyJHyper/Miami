import Image from "next/image";
import styled from "styled-components";

export const DivBikeCardContainer = styled.div`
  border-radius: 7px;
  background: ${({ theme }) => theme.colors.white};
  padding-bottom: 1rem;
  box-shadow: 0px -1px 5px 0px ${({ theme }) => theme.colors.pink};
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    box-shadow: 0px 3px 5px -1px ${({ theme }) => theme.colors.pink};
  }
`;

export const CardImgCover = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.colors.white};
  opacity: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  border-radius: 7px 7px 0 0;
  visibility: hidden;
  transition: all 0.3s ease-out;

  &::before {
    color: ${({ theme }) => theme.colors.pink};
    content: "\+";
    position: absolute;
    top: 50%;
    left: 47%;
    line-height: 0;
    font-size: 32px;
    font-weight: 200;
    border: 2px solid;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding-bottom: 5px; */
    box-sizing: border-box;
    width: 30px;
    height: 30px;
  }
`;

export const DivCardImgWrapper = styled.div`
  position: relative;
  cursor: pointer;

  &:hover {
    ${CardImgCover} {
      visibility: visible;
      opacity: 0.9;
    }
  }
`;

export const CardImg = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
  cursor: pointer;
  border-radius: 7px 7px 0 0;
  max-height:330px;
`;

export const DivDescriptionWrapper = styled.div`
  text-align: left;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray2};
  margin: 0 0.7rem;
  padding: 0.5rem 0;
`;

export const PTitle = styled.p`
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 3px;
`;

export const PSubTitle = styled.p`
  color: ${({ theme }) => theme.colors.gray1};
`;

export const DivPricingWrapper = styled.div`
  text-align: right;
  padding: 0.5rem 0.7rem;
  line-height: 1.5;
`;

export const DeletePrice = styled.p`
  text-decoration-line: line-through;
`;

export const CurrentPrice = styled.p`
  font-weight: 700;
`;

export const CardButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  border-radius: 25px;
  cursor: pointer;

  .btn-icon {
    width: 0;
    transition: all 0.3s ease;
  }

  &:hover .btn-icon {
    width: 20px;
  }
`;
