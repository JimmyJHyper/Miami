import CompletedOrder from "@/components/BookingWizard/CompletedOrder";
import { BookingLayout } from "@/layout/BookingLayout";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function BookingSuccess() {
  const router = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
    history.pushState(null, "", router.asPath);
    window.addEventListener("popstate", () => {
      history.pushState(null, "", router.asPath);
    });
  }, []);

  return (
    <BookingLayout>
      <CompletedOrder />
    </BookingLayout>
  );
}

export default BookingSuccess;
