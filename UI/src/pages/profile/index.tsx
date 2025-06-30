import React, { useEffect } from "react";
import ActionBar from "@/components/BookingWizard/ActionBar";
import BookingProgressBar from "@/components/BookingWizard/BookingProgressBar";
import BookingRegister from "@/components/BookingWizard/BookingRegister";
import ReviewPayment from "@/components/BookingWizard/ReviewPayment";
import SelectDamageCoverage from "@/components/BookingWizard/SelectDamageCoverage";
import SelectGearAccessory from "@/components/BookingWizard/SelectGearAccessory";
import SelectPickupDropTime from "@/components/BookingWizard/SelectPickupDropTime";
import SelectRoadsideAssistance from "@/components/BookingWizard/SelectRoadsideAssistance";
import { BookingLayout } from "@/layout/BookingLayout";
import { useBooking } from "@/providers/BookingProvider";
import { useMarketing } from "@/providers/MarketingProvider";
import {
  BookingContextType,
  MarketingContextType,
  UserContextType,
} from "@/providers/types";
import {
  InitialOrderPayload,
  OnCheckoutPayload,
  StripePaymentPayload,
} from "@/types";
import { getDuration } from "@/utils/helpers";
import { useRouter } from "next/router";
import { discounts } from "@/constants/modalConsts";
import { useUser } from "@/providers/UsersProvider";
import { MarketingLayout } from "@/layout/MarketingLayout";
import ProfilePage from "@/components/ProfilePage";

function Profile() {
  return (
    <MarketingLayout>
      <ProfilePage />
    </MarketingLayout>
  );
}

export default Profile;
