"use client";
import EmailVerificationPage from "@/components/EmailVerificationPage";
import { MarketingLayout } from "@/layout/MarketingLayout";
import { DivBookingLayoutContainer } from "@/layout/styles";
import React, { useEffect, useState } from "react";

export default function EmailVerification() {
  const [email, setEmail] = useState<string | null>("");

  useEffect(() => {
    // Access localStorage only on the client side
    const storedEmail = localStorage.getItem("email");
    setEmail(storedEmail ?? "");
  }, []);

  return (
    <MarketingLayout>
      <DivBookingLayoutContainer>
        <EmailVerificationPage email={email ?? ""} />
      </DivBookingLayoutContainer>
    </MarketingLayout>
  );
}
