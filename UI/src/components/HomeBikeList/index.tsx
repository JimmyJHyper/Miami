import { useMarketing } from "@/providers/MarketingProvider";
import { MarketingContextType } from "@/providers/types";
import { Bike } from "@/types";
import Image from "next/image";
import BikeList from "../BikeList";
import {
  DivHomeBikeListContainer,
  DivLoadingBar,
  MainTitle,
  SubTitle,
} from "./styles";
import { Banner } from "@/types/admin/admin";

interface HomeBikeListProps {
  initialBikes?: Bike[];
  banners: (Banner | null)[];
}

function HomeBikeList({ initialBikes, banners }: HomeBikeListProps) {
  const { allBikes, isGetAllBikesLoading } =
    useMarketing() as MarketingContextType;
  return (
    <DivHomeBikeListContainer>
      <MainTitle>Miami Motorcycle Rentals</MainTitle>
      <SubTitle>Book a motorcycle rental in Miami under 5 minutes.</SubTitle>
      {!initialBikes && isGetAllBikesLoading ? (
        <DivLoadingBar>
          <Image
            src="/images/spinner.gif"
            alt="logo"
            width={70}
            height={70}
            quality={100}
            loading="eager"
          />
        </DivLoadingBar>
      ) : (
        <BikeList bikes={allBikes || initialBikes} banners={banners} bikePage="HOME"/>
      )}
    </DivHomeBikeListContainer>
  );
}

export default HomeBikeList;
