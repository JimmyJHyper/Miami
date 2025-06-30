import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const DivBlogCardContainer = styled.div`
  box-shadow: 0 -1px 5px 0 ${({ theme }) => theme.colors.pink};
  border-radius: 5px;
`;

export const CardImg = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
`;

export const H2Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 1.7rem;
  padding: 1rem;
  font-weight: 300;
  line-height: 1;
`;
export const PDescription = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.5;
  padding: 1rem;
`;
export const DivPostInfo = styled.div`
  padding: 0.7rem 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.gray1};
`;
export const PPostDate = styled.p`
  line-height: 1.5;
`;
export const ButtonReadMore = styled(Link)`
  text-align: right;
  color: ${({ theme }) => theme.colors.button};
  align-self: baseline;
`;
