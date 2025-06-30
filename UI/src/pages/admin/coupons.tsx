import withAuth from "@/hocs/withAuth";
import { CouponContextType } from "@/providers/types";
import React, { useContext, useEffect, useState } from "react";
import { AdminLayout } from "@/components/Admin/AdminLayout/AdminLayout";
import { deleteUserAPI, LockUser } from "@/apis/usersApis";
import { CouponProvider, useCoupon } from "@/providers/CouponsProvider";
import CouponTable from "@/components/Admin/Coupons";
import { deleteCouponAPI, getAllCouponsApi, LockCoupon } from "@/apis/couponsApis";
import { Coupon } from "@/types/admin/admin";
import { getAllAdminBrandsApi } from '../../apis/adminApis';


function Coupons() {
  
  const {allCoupons,getAllCoupons} = useCoupon() as CouponContextType;

  
  
  useEffect(() => {
    getAllCouponsApi();
    
    return ()=>{} ;
  }, []);

  const lockCoupon = (CouponId: number, index: number) => {
    LockCoupon(CouponId, index).then((res) => {
      if (res === true) {
        getAllCoupons();
      }
    });
  };

  const deleteCoupon = (CouponId: number, index: number) => {
    deleteCouponAPI(CouponId, index).then((res) => {
      if (res === true) {
        getAllCoupons();
      }
    });
  };

  return (
    <AdminLayout>
      
      <CouponTable
        coupons={allCoupons ?? []}
        softDelete={lockCoupon}
        hardDelete={deleteCoupon}
      />
    </AdminLayout>
  );
}

export default withAuth(Coupons);
