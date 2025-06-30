import { useMarketing } from "@/providers/MarketingProvider";
import { MarketingContextType } from "@/providers/types";
import BikeCard from "../BikeCard";
import CardCarousel from "../CardCarousel";
import { DivFeaturedBikeListContainer, H2Title } from "./styles";

function FeaturedBikeList() {
  const { allBikes } = useMarketing() as MarketingContextType;
  const items =
    allBikes?.map((bike, idx) => <BikeCard key={idx} bike={bike} />) || [];


  return (
    <>

      <DivFeaturedBikeListContainer>
        <H2Title>Featured Bikes</H2Title>

        <CardCarousel items={items} />
      </DivFeaturedBikeListContainer>
    </>
  );
}

export default FeaturedBikeList;
