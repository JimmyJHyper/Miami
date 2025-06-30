import { AdminLayout } from '@/components/Admin/AdminLayout/AdminLayout';
import BikeEditDiv from '@/components/Admin/Bikes/EditBike';
import BikeEditDiscounts from '@/components/Admin/Bikes/EditDiscounts';
import withAuth from '@/hocs/withAuth';
import { useMarketing } from '@/providers/MarketingProvider';
import { MarketingContextType } from '@/providers/types';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


function EditBikeDiscounts() {
  const { setSelectedBikeId,selectedBike } = useMarketing() as MarketingContextType;
  const router = useRouter();
  const { id: bikeId } = router.query;

  useEffect(() => {
    if (Number(bikeId)) {
      setSelectedBikeId(Number(bikeId));
    }
    return () => { };
  }, [bikeId]);

  return (
    <AdminLayout>
      <BikeEditDiscounts bike={selectedBike} />
    </AdminLayout>
  );
}

export default withAuth(EditBikeDiscounts);
