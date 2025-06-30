import { AdminLayout } from '@/components/Admin/AdminLayout/AdminLayout';
import BikeEditSEO from '@/components/Admin/Bikes/BikeSeo';
import withAuth from '@/hocs/withAuth';
import { useMarketing } from '@/providers/MarketingProvider';
import { MarketingContextType } from '@/providers/types';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


function SEOBike() {
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
      <BikeEditSEO bike={selectedBike} />
    </AdminLayout>
  );
}

export default withAuth(SEOBike);
