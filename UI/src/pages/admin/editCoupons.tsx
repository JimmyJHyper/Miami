import { AdminLayout } from "@/components/Admin/AdminLayout/AdminLayout";

import withAuth from "@/hocs/withAuth";
import { useCoupon } from "@/providers/CouponsProvider";
import { CouponContextType } from "@/providers/types";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Coupon } from '../../types/admin/admin';
import CouponEditDiv from "@/components/Admin/Coupons/EditCoupon";

function EditCoupons( ) {
  const { setSelectedCouponId, selectedCoupon } =
    useCoupon() as CouponContextType;
  const router = useRouter();
  const { id: couponId } = router.query;
   
 


  console.log(couponId)

  useEffect(() => {
    if (Number(couponId)) {
      setSelectedCouponId(Number(couponId));
    }
    return () => {};
  }, [couponId]);

  return (
    <AdminLayout>
      <CouponEditDiv coupon={selectedCoupon} />
    </AdminLayout>
  );
}

export default withAuth(EditCoupons);
