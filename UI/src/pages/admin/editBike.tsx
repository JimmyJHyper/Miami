import { AdminLayout } from '@/components/Admin/AdminLayout/AdminLayout';
import BikeEditDiv from '@/components/Admin/Bikes/EditBike';
import withAuth from '@/hocs/withAuth';
import { useMarketing } from '@/providers/MarketingProvider';
import { MarketingContextType } from '@/providers/types';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


function EditBike() {
  const { setSelectedBikeId,selectedBike,allBrands,getAllAdminBrands,allBikes,getAllBikes,allBikeTypes,getAllBikeTypes } = useMarketing() as MarketingContextType;
  const router = useRouter();
  const { id: bikeId } = router.query;

  useEffect(() => {
    if (Number(bikeId)) {
      setSelectedBikeId(Number(bikeId));
      getAllAdminBrands();
      getAllBikes();
      getAllBikeTypes();
    }
    return () => { };
  }, [bikeId]);

  return (
    <AdminLayout>
      <BikeEditDiv bike={selectedBike} brands={allBrands} allBikes={allBikes} allBikesTypes={allBikeTypes} />
    </AdminLayout>
  );
}

export default withAuth(EditBike);
