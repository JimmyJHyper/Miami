import { AdminLayout } from "@/components/Admin/AdminLayout/AdminLayout";
import BannercreateDiv from "@/components/Admin/Banners/CreateBanner";
import withAuth from "@/hocs/withAuth";
import { useBanner } from "@/providers/BannersProvider";
import { BannerContextType, MarketingContextType } from "@/providers/types";
import { useRouter } from "next/router";
import { useEffect } from "react";

function CreateBike() {
  const { allBanners, getAllBanners } = useBanner() as BannerContextType;

  const router = useRouter();

  useEffect(() => {}, []);

  return (
    <AdminLayout>
      <BannercreateDiv />
    </AdminLayout>
  );
}

export default withAuth(CreateBike);
