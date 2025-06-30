import React from "react";
import { DivBookingHeaderContainer, ImgLogo } from "./styles";
import Router from "next/router";
import { useBooking } from "@/providers/BookingProvider";
import { BookingContextType } from "@/providers/types";
import Link from "next/link";
import UserProfileNav from "@/components/UserProfileDropdown";

function BookingHeader() {
  const { initializeBooking } = useBooking() as BookingContextType;

  const takeMeHome = () => {
    Router.push("/");
    initializeBooking();
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
      <UserProfileNav />
    </DivBookingHeaderContainer>
  );
}

export default BookingHeader;
