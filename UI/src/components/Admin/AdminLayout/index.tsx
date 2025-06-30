import React from "react";
import {
  DivBookingHeaderContainer,
  DivHeaderLink,
  DivHeaderLinks,
  ImgLogo,
  NavLink,
  Spacer,
} from "./styles";
import Router from "next/router";
import { useBooking } from "@/providers/BookingProvider";
import { BannerContextType, BookingContextType } from "@/providers/types";
import Link from "next/link";
import { useBanner } from "@/providers/BannersProvider";

function AdminHeader() {
  const { initializeBooking } = useBooking() as BookingContextType;

  const takeMeHome = () => {
    Router.push("/");
    initializeBooking();
  };

  const logout = () => {
    localStorage.clear();
    Router.push("/");
  };

  return (
    <DivBookingHeaderContainer>
      <ImgLogo
        onClick={takeMeHome}
        src="/images/miami_logo.png"
        alt="logo"
        width={160}
        height={50}
        quality={100}
        rel="dns-prefetch"
        priority
      />

      <DivHeaderLinks>
        <DivHeaderLink>
          <NavLink href="/admin/bikes">Inventory</NavLink>
        </DivHeaderLink>

        <DivHeaderLink>
          <NavLink href="/admin/users">Users</NavLink>
        </DivHeaderLink>
        <DivHeaderLink>
          <NavLink href="/admin/banners">Banners</NavLink>
        </DivHeaderLink>
        <DivHeaderLink>
          <NavLink href="/admin/coupons">Coupons</NavLink>
        </DivHeaderLink>
        <Spacer />
        <DivHeaderLink>
          <NavLink href="#" onClick={logout}>
            Logout
          </NavLink>
        </DivHeaderLink>
      </DivHeaderLinks>
    </DivBookingHeaderContainer>
  );
}

export default AdminHeader;
