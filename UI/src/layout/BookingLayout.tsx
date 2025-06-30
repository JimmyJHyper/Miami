import React from "react";
import { DivBookingLayoutContainer } from "./styles";
import BookingHeader from "@/components/BookingWizard/BookingHeader";

export const BookingLayout = ({ children }: any) => {
  return (
    <DivBookingLayoutContainer>
      <BookingHeader />
      {children}
    </DivBookingLayoutContainer>
  );
};
