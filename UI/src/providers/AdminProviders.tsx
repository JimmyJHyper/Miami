import React, { useContext, useEffect, useState } from "react";
import { AdminContextType } from "./types";
import { updateBasePrice } from "@/apis/adminApis";
import { BasePricePayload } from "@/types/admin/admin";
import AlertMessage from "@/components/Alerts/AlertMessage";

const AdminContext = React.createContext<AdminContextType | null>(null);

export function useAdmin() {
  return useContext(AdminContext);
}

type Props = {
  children: any;
};

export function AdminProvider({ children }: Props) {
  const updateBasePriceById = (bikeId: number, body: BasePricePayload) => {
    updateBasePrice(bikeId, body)
      .then((res) => {
        AlertMessage({
          type: "success",
          message: "Done",
        });
      })
      .catch((e) => {
        AlertMessage({
          type: "error",
          message: "Failed",
        });
      });
  };

  const value: AdminContextType = {
    updateBasePriceById,
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
}
