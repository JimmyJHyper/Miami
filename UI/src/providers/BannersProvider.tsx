import React, { useContext, useEffect, useState } from "react";
import { BannerContextType } from "./types";
import { AllBannersResponse, BannerResponse } from "@/types";

import { getAllBannersApi, getBannerByIdApi } from "@/apis/bannersApis";
import { Banner } from "@/types/admin/admin";

const BannerContext = React.createContext<BannerContextType | null>(null);

export function useBanner() {
  return useContext(BannerContext);
}

type Props = {
  children: any;
};

export function BannerProvider({ children }: Props) {
  const [selectedBannerId, setSelectedBannerId] = useState(0);
  const [selectedBanner, setSelectedBanner] = useState<Banner | undefined>(
    undefined
  );
  const [allBanners, setAllBanners] = useState<Banner[] | undefined>([]);
  const [isGetAllBannersLoading, setIsGetAllBannersLoading] = useState(true);
  const [usedPositions, setUsedPositions] = useState<string[]>([]);

  const getAllBanners = () => {
    setIsGetAllBannersLoading(true);
    getAllBannersApi()
      .then((res: AllBannersResponse) => {
        setAllBanners(res.data ?? []);
        setIsGetAllBannersLoading(false);
      })
      .catch((err: any) => {
        setIsGetAllBannersLoading(false);
      });
  };

  const getBannerById = (id: number) => {
    getBannerByIdApi(id)
      .then((res: BannerResponse) => setSelectedBanner(res.data))
      .catch((err: any) => {});
  };

  useEffect(() => {
    if (selectedBannerId != 0) {
      getBannerById(selectedBannerId);
    }

    return () => {};
  }, [selectedBannerId]);

  useEffect(() => {
    getAllBanners();
  }, []);

  useEffect(() => {
    if (!allBanners) return;

    const selectedPositions = new Set(selectedBanner?.positions || []);

    const pos = allBanners
      .flatMap((banner) => banner.positions)
      .filter((position) => !selectedPositions.has(position));

    setUsedPositions(pos);
  }, [allBanners, selectedBanner]);

  const value: BannerContextType = {
    selectedBannerId,
    setSelectedBannerId,
    selectedBanner,
    allBanners,
    getAllBanners,
    setIsGetAllBannersLoading,
    setAllBanners,
    getBannerById,
    isGetAllBannersLoading,
    usedPositions,
  };

  return (
    <BannerContext.Provider value={value}>{children}</BannerContext.Provider>
  );
}
