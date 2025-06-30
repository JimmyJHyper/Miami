import Image from "next/image";
import styled from "styled-components";

export const DivBlogDetailContainer = styled.div`
  width: 80%;
  max-width: 1080px;
  margin: auto;
  display: grid;
  grid-template-columns: 16% 58% 16%;
  gap: 5%;
  scroll-behavior: smooth;

  @media screen and (max-width: 980px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const DivPostWrapper = styled.div``;
export const PBold = styled.p`
  font-weight: 700;
  line-height: 2;
  margin-bottom: 1rem;
`;
export const PDescription = styled.p`
  line-height: 2;
  margin-bottom: 1rem;
`;
export const DivDescription = styled.div`
  line-height: 2;
  margin-bottom: 1rem;

  a {
    color: ${({ theme }) => theme.colors.pink};
  }
`;
export const UlPostNavList = styled.ul<{ sideBar?: boolean }>`
  line-height: ${({ sideBar }) => (sideBar ? 1.2 : 1.5)};
  font-size: ${({ sideBar }) => (sideBar ? "0.9rem" : "1rem")};
`;
export const LiPostNavItem = styled.li`
  cursor: pointer;
  border-bottom: 1px solid #ccc;
  padding: 0.7rem 0;
  transition: all 0.5s ease;
  a {
    color: ${({ theme }) => theme.colors.black};
  }
  &::before {
    content: ">";
    display: inline-block;
    margin-right: 1rem;
  }
  &:hover {
    font-weight: 700;
  }
`;
export const DivNavWrapper = styled.div`
  position: sticky;
  top: 100px;
  z-index: 9;

  ${LiPostNavItem} {
    font-size: 0.8rem;
    line-height: 1.2;
  }
  @media screen and (max-width: 980px) {
    display: none;
  }
`;
export const H1PostTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 2.7rem;
  margin-bottom: 1rem;
  margin-top: 2rem;

  @media screen and (max-width: 980px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const H2PostTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 2.7rem;
  margin-bottom: 1rem;
  margin-top: 2rem;

  @media screen and (max-width: 980px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const H3PostSubTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 2rem;
  margin-bottom: 1rem;
  margin-top: 2rem;

  @media screen and (max-width: 980px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const ImgPost = styled(Image)`
  width: 100%;
  margin-bottom: 1rem;
`;
