import { AdminLayout } from "@/components/Admin/AdminLayout/AdminLayout";
import BannerEditDiv from "@/components/Admin/Banners/EditBanner";
import withAuth from "@/hocs/withAuth";
import { useBanner } from "@/providers/BannersProvider";
import { BannerContextType } from "@/providers/types";
import { useRouter } from "next/router";
import { useEffect } from "react";

function EditBike() {
  const { setSelectedBannerId, selectedBanner } =
    useBanner() as BannerContextType;
  const router = useRouter();
  const { id: bannerId } = router.query;

  useEffect(() => {
    if (Number(bannerId)) {
      setSelectedBannerId(Number(bannerId));
    }
    return () => {};
  }, [bannerId]);

  return (
    <AdminLayout>
      <BannerEditDiv banner={selectedBanner} />
    </AdminLayout>
  );
}

export default withAuth(EditBike);
