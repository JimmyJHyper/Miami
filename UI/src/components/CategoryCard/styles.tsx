import Image from "next/image";
import styled from "styled-components";

export const DivCategoryCardContainer = styled.div`
  cursor: pointer;
  box-shadow: 0 12px 18px -6px ${({ theme }) => theme.colors.shadowGray};
`;

export const CardImg = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
  cursor: pointer;
`;

export const PCategoryName = styled.h3`
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 1.3rem;
  font-weight: 700;
  padding: 1rem;
  cursor: pointer;
`;
