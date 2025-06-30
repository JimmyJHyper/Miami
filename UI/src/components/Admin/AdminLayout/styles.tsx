import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const DivBookingHeaderContainer = styled.div`
  padding: 0.5rem;
  padding-left: 5%;
  background: ${({ theme }) => theme.colors.white};
`;

export const ImgLogo = styled(Image)`
  max-width: 152px;
  height: auto;
  cursor: pointer;
`;

export const NavLink = styled(Link)`
  margin-inline: 0.2rem;
  .active {
    color: red !important;
  }
`;

export const DivMarketingLayoutContainer = styled.div`
  width: 100%;
  margin: auto;
  overflow: hidden;

  .scroll-to-top {
    background-color: ${({ theme }) => theme.colors.button};
    color: ${({ theme }) => theme.colors.white};
    right: 0;
    bottom: 6.5rem;
    border-radius: 5px 0 0 5px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    font-size: 1.7rem;
    padding-top: 5px;
  }

  @media screen and (max-width: 980px) {
    padding-top: 3.7rem;
  }
`;

export const DivBookingLayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background1};
`;

export const DivHeaderLink = styled.div`
  margin-inline: 5px;
  width: max-content;
`;

export const Spacer = styled.div`
  width: -webkit-fill-available;
`;

export const DivHeaderLinks = styled.div`
  display: flex;
`;
