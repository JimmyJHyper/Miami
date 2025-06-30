"use client";
import LoginPage from "@/components/LoginPage";
import SignupPage from "@/components/SignupPage";
import { MarketingLayout } from "@/layout/MarketingLayout";
import { DivBookingLayoutContainer } from "@/layout/styles";

export default function Login() {
  return (
    <>
      <MarketingLayout>
        <DivBookingLayoutContainer>
          <SignupPage />
        </DivBookingLayoutContainer>
      </MarketingLayout>
    </>
  );
}
