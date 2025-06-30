import { Bike } from "@/types";
import NavBar from "../NavBar";
import {
  DivBikeDetailHeaderContainer,
  DivPricingWrapper,
  H1Title,
  PCategory,
  PCurrentPrice,
  PLastPrice,
  PName,
} from "./styles";

type Props = {
  bike: Bike | undefined;
};

function BikeDetailHeader({ bike }: Props) {

  return (
    <>
      <DivBikeDetailHeaderContainer>
        <H1Title>{bike?.name}</H1Title>
        <NavBar nextLinks={["Motorcycle Rental", bike?.name!]} />
        <DivPricingWrapper>
          <PCategory>{bike?.brand.name}</PCategory>
          <PLastPrice>${Number(bike?.regularPrice || 0).toFixed(2)}</PLastPrice>
        </DivPricingWrapper>
        <DivPricingWrapper>
          <PName>{bike?.model}</PName>
          <PCurrentPrice>${Number(bike?.discountPrice || 0).toFixed(2)}/ Day</PCurrentPrice>
        </DivPricingWrapper>
      </DivBikeDetailHeaderContainer>
    </>
  );
}

export default BikeDetailHeader;
