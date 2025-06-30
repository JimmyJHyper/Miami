import React from "react";
import { DivBookingLayoutContainer } from "./styles";
import BookingHeader from "@/components/BookingWizard/BookingHeader";
import AdminHeader from ".";

export const AdminLayout = ({ children }: any) => {
  return (
    <DivBookingLayoutContainer>
      <AdminHeader />
      {children}
    </DivBookingLayoutContainer>
  );
};
