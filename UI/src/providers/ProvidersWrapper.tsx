import React from "react";
import { BookingProvider } from "./BookingProvider";
import { MarketingProvider } from "./MarketingProvider";
import { UserProvider } from "./UsersProvider";
import { BannerProvider } from "./BannersProvider";
import { CouponProvider } from './CouponsProvider';
import { CouponPercentageProvider } from './GetCouponPercentageProvider';
type Props = {
  children: any;
};

function ProvidersWrapper({ children }: Props) {
  return (
    <MarketingProvider>
      <CouponPercentageProvider>
      <CouponProvider>
      <BannerProvider>
        <BookingProvider>
          <UserProvider>
            <BannerProvider>{children}</BannerProvider>
          </UserProvider>
        </BookingProvider>
      </BannerProvider>
      </CouponProvider>
      </CouponPercentageProvider>
    </MarketingProvider>
  );
}

export default ProvidersWrapper;
