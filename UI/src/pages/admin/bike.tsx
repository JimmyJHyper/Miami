import { AdminLayout } from "@/components/Admin/AdminLayout/AdminLayout";
import BikeInsuranceTable from "@/components/BookingWizard/BikeInsuranceTable";
import withAuth from "@/hocs/withAuth";
import { useBooking } from "@/providers/BookingProvider";
import { BookingContextType } from "@/providers/types";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function BikeAdmin() {
  const { getBikeInsurances } = useBooking() as BookingContextType;
  const router = useRouter();
  const { id: bikeId } = router.query;

  useEffect(() => {
    if (Number(bikeId)) {
      getBikeInsurances(Number(bikeId));
    }
    return () => {};
  }, [bikeId]);

  return (
    <AdminLayout>
      <BikeInsuranceTable bikeId={Number(bikeId)} />
    </AdminLayout>
  );
}

export default withAuth(BikeAdmin);
