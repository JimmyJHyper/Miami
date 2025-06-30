import React, { useContext, useEffect, useState } from "react";
import { MarketingContextType } from "./types";
import {
  getAllBikeTypesApi,
  getAllBikesAdminApi,
  getAllBikesApi,
  getAllBrandsApi,
  getBikeByIdApi,
  getBikeMediaItemsApi,
  getBikesByBrandIdApi,
  getBikesByTypeIdApi,
} from "@/apis/marketingApis";
import {
  AllBikesResponse,
  Bike,
  BikeMediaItemsResponse,
  BikeResponse,
  BikeType,
  Brand,
  MediaItem,
} from "@/types";
import { AllTypesResponse } from "@/types";
import { AllBrandsResponse } from "@/types";
import { getAllAdminBrandsApi } from "@/apis/adminApis";

const MarketingContext = React.createContext<MarketingContextType | null>(null);

export function useMarketing() {
  return useContext(MarketingContext);
}

type Props = {
  children: any;
};

export function MarketingProvider({ children }: Props) {
  const [selectedBlogTitle, setSelectedBlogTitle] = useState("");
  const [screenSize, getDimension] = useState({ width: 0, height: 0 });
  const [allBikes, setAllBikes] = useState<Bike[] | undefined>(undefined);
  const [selectedBikeId, setSelectedBikeId] = useState(0);
  const [selectedBike, setSelectedBike] = useState<Bike | undefined>(undefined);
  const [selectedBikeMediaItems, setSelectedBikeMediaItems] = useState<
    MediaItem[] | undefined
  >(undefined);
  const [allBikeTypes, setAllBikeTypes] = useState<BikeType[] | undefined>(
    undefined
  );
  const [allBrands, setAllBrands] = useState<Brand[] | undefined>(undefined);
  const [selectedBikeTypeId, setSelectedBikeTypeId] = useState(0);
  const [bikesByType, setBikesByType] = useState<Bike[] | undefined>(undefined);
  const [bikesByBrand, setBikesByBrand] = useState<Bike[] | undefined>(
    undefined
  );
  const [isGetAllBikesLoading, setIsGetAllBikesLoading] = useState(true);

  const setDimension = () => {
    getDimension({
      width: window?.innerWidth,
      height: window?.innerHeight,
    });
  };

  const getAllBikes = () => {
    setIsGetAllBikesLoading(true);
    getAllBikesApi()
      .then((res: AllBikesResponse) => {
        setAllBikes(res.data);
        setIsGetAllBikesLoading(false);
      })
      .catch((err) => {
        setIsGetAllBikesLoading(false);
      });
  };

  const getAllBikesAdmin = () => {
    setIsGetAllBikesLoading(true);
    getAllBikesAdminApi()
      .then((res: AllBikesResponse) => {
        setAllBikes(res.data);
        setIsGetAllBikesLoading(false);
      })
      .catch((err) => {
        setIsGetAllBikesLoading(false);
      });
  };

  const getAllBikeTypes = () => {
    getAllBikeTypesApi()
      .then((res: AllTypesResponse) => setAllBikeTypes(res.data))
      .catch((err) => {});
  };

  const getAllBrands = () => {
    getAllBrandsApi()
      .then((res: AllBrandsResponse) => setAllBrands(res.data))
      .catch((err) => {});
  };

  const getAllAdminBrands = () => {
    getAllAdminBrandsApi()
      .then((res: AllBrandsResponse) => setAllBrands(res.data))
      .catch((err) => {});
  };

  const getBikesByTypeId = (typeId: number) => {
    getBikesByTypeIdApi(typeId)
      .then((res: AllBikesResponse) => setBikesByType(res.data))
      .catch((err) => {});
  };

  const getBikesByBrandId = (brandId: number) => {
    getBikesByBrandIdApi(brandId)
      .then((res: AllBikesResponse) => setBikesByBrand(res.data))
      .catch((err) => {});
  };

  const getBikeById = (id: number) => {
    getBikeByIdApi(id)
      .then((res: BikeResponse) => setSelectedBike(res.data))
      .catch((err) => {});
  };

  const getBikeMediaItems = (id: number) => {
    getBikeMediaItemsApi(id)
      .then((res: BikeMediaItemsResponse) =>
        setSelectedBikeMediaItems(res.data)
      )
      .catch((err) => {});
  };

  useEffect(() => {
    setDimension();

    return () => {};
  }, []);

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  useEffect(() => {
    if (selectedBikeId) {
      getBikeById(selectedBikeId);
      getBikeMediaItems(selectedBikeId);
    }

    return () => {};
  }, [selectedBikeId]);

  useEffect(() => {
    if (selectedBikeTypeId) {
      getBikesByTypeId(selectedBikeTypeId);
    }

    return () => {};
  }, [selectedBikeTypeId]);

  const value: MarketingContextType = {
    selectedBlogTitle,
    setSelectedBlogTitle,
    screenSize,
    allBikes,
    selectedBikeId,
    setSelectedBikeId,
    selectedBike,
    selectedBikeMediaItems,
    allBikeTypes,
    allBrands,
    selectedBikeTypeId,
    setSelectedBikeTypeId,
    bikesByType,
    bikesByBrand,
    getAllBikes,
    getAllBikesAdmin,
    getAllBikeTypes,
    getAllBrands,
    getAllAdminBrands,
    isGetAllBikesLoading,
    setAllBrands,
    setAllBikes,
    setAllBikeTypes,
    getBikeById
  };

  return (
    <MarketingContext.Provider value={value}>
      {children}
    </MarketingContext.Provider>
  );
}
