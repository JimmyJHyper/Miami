"use client";
import ForgotPasswordPage from "@/components/ForgotPasswordPage";
import { MarketingLayout } from "@/layout/MarketingLayout";
import { DivBookingLayoutContainer } from "@/layout/styles";
import React from "react";

export default function ForgetPassword() {
  return (
    <>
      <MarketingLayout>
        <DivBookingLayoutContainer>
          <ForgotPasswordPage />
        </DivBookingLayoutContainer>
      </MarketingLayout>
    </>
  );
}
