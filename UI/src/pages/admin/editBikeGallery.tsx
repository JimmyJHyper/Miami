import { AdminLayout } from '@/components/Admin/AdminLayout/AdminLayout';
import BikeEditDiv from '@/components/Admin/Bikes/EditBike';
import EditBikeGalleryComponent from '@/components/Admin/Bikes/EditBikesGallery';
import withAuth from '@/hocs/withAuth';
import { useMarketing } from '@/providers/MarketingProvider';
import { MarketingContextType } from '@/providers/types';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


function EditBikeGallery() {
    const { setSelectedBikeId,selectedBike,selectedBikeMediaItems } = useMarketing() as MarketingContextType;
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
        <EditBikeGalleryComponent bike={selectedBike} selectedMedia={selectedBikeMediaItems}/>
      </AdminLayout>
    );
  }
  
  export default withAuth(EditBikeGallery);