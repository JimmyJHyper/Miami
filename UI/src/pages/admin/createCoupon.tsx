import { AdminLayout } from "@/components/Admin/AdminLayout/AdminLayout";
import CouponcreateDiv from "@/components/Admin/Coupons/CreateCoupon";

import withAuth from "@/hocs/withAuth";
import { useCoupon } from "@/providers/CouponsProvider";

import { CouponContextType, MarketingContextType } from "@/providers/types";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Coupon } from "@/types/admin/admin";

function CreateCoupon() {
 const allCoupons = useCoupon()?.allCoupons as Coupon[];
   const getAllCoupons = useCoupon()?.getAllCoupons as ()=> void;

  const router = useRouter();

  useEffect(() => {}, []);

  return (
    <AdminLayout>
      <CouponcreateDiv />
    </AdminLayout>
  );
}

export default withAuth(CreateCoupon);