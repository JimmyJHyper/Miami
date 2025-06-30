import React, { useContext, useEffect, useState } from "react";
import { CouponPercentageContextType } from './types';
import { AllCouponsResponse, CouponResponse } from "@/types";
import { getCouponByName } from "@/apis/couponsApis";
import { getAllCouponsApi, getCouponByIdApi } from "@/apis/couponsApis";
import { Coupon } from "@/types/admin/admin";
import { getCouponPercentage } from "@/utils/helpers";
const CouponPercentageContext = React.createContext<CouponPercentageContextType | null>(null);

export function useCouponPer() {
  return useContext(CouponPercentageContext);
}

type Props = {
  children: any;
 
};
type data = {percentage:number;
    code:string;
}

export  function CouponPercentageProvider({ children }: Props) {
  const [couponCode,setCouponCode] = useState("")
  const [couponPercentage,setCouponPercentage] = useState(0)
  const[couponInput,setCouponInput] = useState("")
  const[couponFound,setCouponFound] = useState(false)
  


  const getCoupon = async () => {
 const res = await getCouponByName(couponInput)
setCouponCode(res.data.code)
setCouponPercentage(res.data.percentage)



  }
useEffect(()=>{
  console.log("useEffect")
    getCoupon()
    
    
    
},[couponInput])


 
  

  const value: CouponPercentageContextType = {
    couponCode,
    setCouponCode,
    couponPercentage,
    setCouponPercentage,
    couponInput,
    setCouponInput,
    couponFound,
    setCouponFound,
    
  };
  

  return (
    <CouponPercentageContext.Provider value={value}>{children}</CouponPercentageContext.Provider>
  );
}

