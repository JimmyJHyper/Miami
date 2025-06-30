import React, { useContext, useEffect, useState } from "react";
import { CouponContextType } from "./types";
import { AllCouponsResponse, CouponResponse } from "@/types";

import { getAllCouponsApi, getCouponByIdApi } from "@/apis/couponsApis";
import { Coupon } from "@/types/admin/admin";

const CouponContext = React.createContext<CouponContextType | null>(null);

export function useCoupon() {
  return useContext(CouponContext);
}

type Props = {
  children: any;
};

export function CouponProvider({ children }: Props) {
  const [selectedCouponId, setSelectedCouponId] = useState(0);
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon | undefined>(
    undefined
  );
  const [allCoupons, setAllCoupons] = useState<Coupon[] | undefined>([]);
  const [isGetAllCouponsLoading, setIsGetAllCouponsLoading] = useState(true);
  

  const getAllCoupons = () => {
    setIsGetAllCouponsLoading(true);
    getAllCouponsApi()
      .then((res: AllCouponsResponse) => {
        setAllCoupons(res.data ?? []);
        
        setIsGetAllCouponsLoading(false);
      })
      .catch((err: any) => {
        setIsGetAllCouponsLoading(false);
      });
  };

  const getCouponById = (id: number) => {
    getCouponByIdApi(id)
      .then((res: CouponResponse) => setSelectedCoupon(res.data))
      .catch((err: any) => {});
  };

  useEffect(() => {
    if (selectedCouponId != 0) {
      getCouponById(selectedCouponId);
    }

    return () => {};
  }, [selectedCouponId]);

  useEffect(() => {
    getAllCoupons();
  }, []);

  

  const value: CouponContextType = {
    selectedCouponId,
    setSelectedCouponId,
    selectedCoupon,
    allCoupons,
    getAllCoupons,
    setIsGetAllCouponsLoading,
    setAllCoupons,
    getCouponById,
    isGetAllCouponsLoading,
    
  };
  

  return (
    <CouponContext.Provider value={value}>{children}</CouponContext.Provider>
  );
}

