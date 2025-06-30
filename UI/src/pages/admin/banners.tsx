import withAuth from "@/hocs/withAuth";
import { BannerContextType } from "@/providers/types";
import React, { useContext, useEffect, useState } from "react";
import { AdminLayout } from "@/components/Admin/AdminLayout/AdminLayout";
import { deleteUserAPI, LockUser } from "@/apis/usersApis";
import { useBanner } from "@/providers/BannersProvider";
import BannerTable from "@/components/Admin/Banners";
import { deleteBannerAPI, LockBanner } from "@/apis/bannersApis";

function Banners() {
  const { allBanners, getAllBanners } = useBanner() as BannerContextType;
  useEffect(() => {
    // getAllBanners();
    return () => {};
  }, []);

  const lockBanner = (bannerId: number, index: number) => {
    LockBanner(bannerId, index).then((res) => {
      if (res === true) {
        getAllBanners();
      }
    });
  };

  const deleteBanner = (bannerId: number, index: number) => {
    deleteBannerAPI(bannerId, index).then((res) => {
      if (res === true) {
        getAllBanners();
      }
    });
  };

  return (
    <AdminLayout>
      <BannerTable
        banners={allBanners ?? []}
        softDelete={lockBanner}
        hardDelete={deleteBanner}
      />
    </AdminLayout>
  );
}

export default withAuth(Banners);
