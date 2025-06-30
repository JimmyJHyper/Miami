import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import BikeTable from "./BikeTable/BikeTable";
import {
  ButtonEdit,
  DivBikeInsuranceTableContainer,
  DivInputWrapper,
  DivInsuranceListItem,
  DivInsuranceListWrapper,
  H3Title,
  PDescription,
  PLabel,
} from "./styles";
import BasePricesTable from "./BikeTablePrices/BasePricesTable";

interface Bike {
  id: number;
  name: string;
  model: string;
  regularPrice: number;
  is_deleted:number;
  position?:number;
}

interface BikesPageProps {
  bikes: Bike[];
  pageType:number;
  initialDiscountPercentage?:number;
  softDelete?:Function;
  hardDelete:Function;
}

const BikesTable: React.FC<BikesPageProps> = ({ bikes,pageType,initialDiscountPercentage=0,softDelete=()=>{},hardDelete=()=>{} }) => {
  const [discountPercentage, setDiscountPercentage] = useState(initialDiscountPercentage);

  const handleDiscountPercentageChange = (newDiscountPercentage: number) => {
    setDiscountPercentage(newDiscountPercentage);
  };

  return pageType==1?(
    <DivBikeInsuranceTableContainer>
      <H3Title>Inventory</H3Title>
      <DivInsuranceListWrapper>
        <BikeTable
        softDelete={softDelete}
          bikes={bikes}
          hardDelete={hardDelete}
        />
      </DivInsuranceListWrapper>
    </DivBikeInsuranceTableContainer>
  ):(
    <DivBikeInsuranceTableContainer>
      <H3Title>Inventory</H3Title>
      <DivInsuranceListWrapper>
        <BasePricesTable
          bikes={bikes}
          discountPercentage={discountPercentage}
          onDiscountPercentageChange={handleDiscountPercentageChange}
        />
      </DivInsuranceListWrapper>
    </DivBikeInsuranceTableContainer>
  );
};

export default BikesTable;
