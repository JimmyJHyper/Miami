import Image from "next/image";
import styled from "styled-components";

export const DivMobileHeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99;
`;

export const DivHeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 1.5rem;
  background: ${(props) => props.theme.colors.white};
`;

export const ImgLogo = styled(Image)`
  width: auto;
  min-height: 35px;
`;

export const ButtonMenuToggle = styled.div`
  width: 20px;
  height: 14px;
  position: relative;
  z-index: 100;
  margin-inline: 1rem;
  cursor: pointer;

  span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.button};
  }
  span:first-child {
    top: 0px;
  }
  span:nth-child(2) {
    top: 6px;
  }
  span:last-child {
    bottom: 0px;
  }

  &.active {
    span {
      background-color: ${({ theme }) => theme.colors.button};
    }
    span:first-child {
      transform: rotate(-45deg);
      top: 6px;
    }
    span:nth-child(2) {
      display: none;
    }
    span:last-child {
      transform: rotate(45deg);
      bottom: 6px;
    }
  }
`;

export const DivDropMenuWrapper = styled.div`
  box-shadow: 2px 10px 35px rgba(0, 0, 0, 0.1);
  height: 0;
  overflow: hidden;
  transition: all 0.5s ease;
  background: ${(props) => props.theme.colors.white};

  &.show {
    height: 408px;
  }
`;
export const PMenuItem = styled.p`
  padding: 0.9rem 1rem;
  color: ${(props) => props.theme.colors.button};
  font-weight: 300;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray4};
  }

  &.list-title {
    background-color: ${({ theme }) => theme.colors.button};
    color: ${({ theme }) => theme.colors.white};
  }
  &.list-item {
    margin-left: 3rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray4};
    &:last-child {
      border: none;
    }
  }
`;
