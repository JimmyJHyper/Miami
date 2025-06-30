import { useMarketing } from "@/providers/MarketingProvider";
import BikesTable from "@/components/Admin/Bikes";
import withAuth from "@/hocs/withAuth";
import { useBooking } from "@/providers/BookingProvider";
import { BookingContextType, MarketingContextType } from "@/providers/types";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { AdminLayout } from "@/components/Admin/AdminLayout/AdminLayout";

 function BasePricesAdmin() {
  const {  allBikes, getAllBikes } =
  useMarketing() as MarketingContextType;
  useEffect(() => {
    if (!allBikes) {
      getAllBikes();
    }
    return () => {};
  }, []);
  
  return (
    <AdminLayout>
      <BikesTable bikes={allBikes??[]} pageType={2} initialDiscountPercentage={20} hardDelete={()=>{}}/>
    </AdminLayout>
  );
}

export default withAuth(BasePricesAdmin);