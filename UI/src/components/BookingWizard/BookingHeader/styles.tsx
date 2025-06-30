import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const DivBookingHeaderContainer = styled.div`
  padding: 0.5rem;
  padding-left: 5%;
  background: ${({ theme }) => theme.colors.white};
  display:flex;
  width:100%;
  justify-content:space-between
`;

export const ImgLogo = styled(Image)`
  max-width: 152px;
  height: auto;
  cursor: pointer;
`;

export const NavLink = styled(Link)`
margin-inline:0.2rem;
`;
