import React from "react";
import {
  DivBikeInsuranceTableContainer,
  DivInsuranceListWrapper,
  H3Title,
} from "./styles";
import { Banner } from "@/types/admin/admin";
import BannersTable from "./BannersTable/BannersTable";

interface BannersPageProps {
  banners: Banner[];
  softDelete?: Function;
  hardDelete?: Function;
}

const BannerTable: React.FC<BannersPageProps> = ({
  banners,
  softDelete = () => {},
  hardDelete = () => {},
}) => {
  return (
    <DivBikeInsuranceTableContainer>
      <H3Title>Banners</H3Title>
      <DivInsuranceListWrapper>
        <BannersTable
          softDelete={softDelete}
          banners={banners}
          hardDelete={hardDelete}
        />
      </DivInsuranceListWrapper>
    </DivBikeInsuranceTableContainer>
  );
};

export default BannerTable;
