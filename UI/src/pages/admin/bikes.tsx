import { useMarketing } from "@/providers/MarketingProvider";
import BikesTable from "@/components/Admin/Bikes";
import withAuth from "@/hocs/withAuth";
import { BookingLayout } from "@/layout/BookingLayout";
import { useBooking } from "@/providers/BookingProvider";
import { BookingContextType, MarketingContextType } from "@/providers/types";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { hardDeleteBike, softDeleteBike } from "@/apis/adminApis";
import { AdminLayout } from "@/components/Admin/AdminLayout/AdminLayout";
import confirmMessage from "@/components/common/SwalConfirm";

function BikeAdmin() {
  const { allBikes, getAllBikesAdmin } =
    useMarketing() as MarketingContextType;
  useEffect(() => {
    getAllBikesAdmin();
    return () => { };
  }, []);


  const deleteBike = (bikeId: number, index: number, type: number) => {
    softDeleteBike(bikeId, type).then(res => {
      if (res === true) {
        getAllBikesAdmin()
      }
    })
  }

  const fullDeleteBike = (bikeId: number, index: number) => {
    confirmMessage({
      callback: () => {
        hardDeleteBike(bikeId).then(res => {
          if (res === true) {
            getAllBikesAdmin()
          }
        })
      },
      confirmButtonText: "Yes, delete it!",
      title: "Are you sure?",
      text: "You won't be able to revert this!",

    })

  }

  return (
    <AdminLayout>
      <BikesTable bikes={allBikes ?? []} pageType={1} softDelete={deleteBike} hardDelete={fullDeleteBike} />
    </AdminLayout>
  );
}

export default withAuth(BikeAdmin);
