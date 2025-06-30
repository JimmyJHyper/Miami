import { useMarketing } from "@/providers/MarketingProvider";
import BikesTable from "@/components/Admin/Bikes";
import withAuth from "@/hocs/withAuth";
import { BookingLayout } from "@/layout/BookingLayout";
import { useBooking } from "@/providers/BookingProvider";
import {
  BookingContextType,
  MarketingContextType,
  UserContextType,
} from "@/providers/types";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { hardDeleteBike, softDeleteBike } from "@/apis/adminApis";
import { AdminLayout } from "@/components/Admin/AdminLayout/AdminLayout";
import confirmMessage from "@/components/common/SwalConfirm";
import UsersTable from "@/components/Admin/Users";
import { useUser } from "@/providers/UsersProvider";
import { deleteUserAPI, LockUser } from "@/apis/usersApis";

function UsersAdmin() {
  const { allUsers, getAllUsers } = useUser() as UserContextType;
  useEffect(() => {
    getAllUsers();
    return () => {};
  }, []);

  const lockUser = (userId: number, index: number) => {
    LockUser(userId, index).then((res) => {
      if (res === true) {
        getAllUsers();
      }
    });
  };

  const deleteUser = (userId: number, index: number) => {
    deleteUserAPI(userId, index).then((res) => {
      if (res === true) {
        getAllUsers();
      }
    });
  };

  return (
    <AdminLayout>
      <UsersTable
        users={allUsers ?? []}
        softDelete={lockUser}
        hardDelete={deleteUser}
      />
    </AdminLayout>
  );
}

export default withAuth(UsersAdmin);
