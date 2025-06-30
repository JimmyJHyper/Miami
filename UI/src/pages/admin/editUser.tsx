import { AdminLayout } from '@/components/Admin/AdminLayout/AdminLayout';
import BikeEditDiv from '@/components/Admin/Bikes/EditBike';
import UserEditDiv from '@/components/Admin/Users/EditUser';
import withAuth from '@/hocs/withAuth';
import { useMarketing } from '@/providers/MarketingProvider';
import { MarketingContextType, UserContextType } from '@/providers/types';
import { useUser } from '@/providers/UsersProvider';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


function EditUser() {
  const { setSelectedUserId,selectedUser } = useUser() as UserContextType;
  const router = useRouter();
  const { id: userId } = router.query;

  useEffect(() => {
    if (Number(userId)) {
      setSelectedUserId(Number(userId));
    }
    return () => { };
  }, [userId]);

  return (
    <AdminLayout>
      <UserEditDiv user={selectedUser} />
    </AdminLayout>
  );
}

export default withAuth(EditUser);
