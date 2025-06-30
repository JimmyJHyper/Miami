import Image from "next/image";
import styled from "styled-components";

export const DivHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 99;
  padding: 10px 1.5rem;
  background: ${(props) => props.theme.colors.white};
`;

export const ImgLogo = styled(Image)`
  width: auto;
  min-height: 70px;
`;

export const DivNavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const NavLink = styled.span`
  color: ${(props) => props.theme.colors.gray1};
  transition: all 0.3s ease-out;
  font-size: 1.1rem;
  line-height: 1.5;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    background: ${(props) => props.theme.colors.button};
    width: 0;
    height: 2px;
    transition: all 0.3s ease-in-out;
    opacity: 0;
  }
  &:hover {
    color: ${(props) => props.theme.colors.button};
    &::after {
      opacity: 1;
      width: 100%;
    }
  }
`;
