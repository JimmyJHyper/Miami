import { AdminLayout } from '@/components/Admin/AdminLayout/AdminLayout';
import BikecreateDiv from '@/components/Admin/Bikes/CreateBike';
import withAuth from '@/hocs/withAuth';
import { useMarketing } from '@/providers/MarketingProvider';
import { MarketingContextType } from '@/providers/types';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


function CreateBike() {
    const { allBrands, getAllAdminBrands, allBikes, getAllBikes,allBikeTypes,getAllBikeTypes } = useMarketing() as MarketingContextType;
    const router = useRouter();

    useEffect(() => {
        getAllAdminBrands();
        getAllBikes();
        getAllBikeTypes();
        return () => { };
    }, []);

    return (
        <AdminLayout>
            <BikecreateDiv brands={allBrands} allBikes={allBikes} allBikesTypes={allBikeTypes}/>
        </AdminLayout>
    );
}

export default withAuth(CreateBike);
