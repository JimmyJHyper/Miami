import { useMarketing } from "@/providers/MarketingProvider";
import { MarketingContextType } from "@/providers/types";
import { Bike } from "@/types";
import Link from "next/link";
import ForwardIcon from "../common/Icons/ForwardIcon";
import {
  CardButton,
  CardImg,
  CardImgCover,
  CurrentPrice,
  DeletePrice,
  DivBikeCardContainer,
  DivCardImgWrapper,
  DivDescriptionWrapper,
  DivPricingWrapper,
  PSubTitle,
  PTitle,
} from "./styles";

type Props = {
  bike: Bike;
  priority?: boolean;
};

function BikeCard({ bike, priority }: Props) {
  const { setSelectedBikeId } = useMarketing() as MarketingContextType;
  const bikeLink = `/motorcycle-rental/${bike.slug}`;
  
  return (
    <DivBikeCardContainer>
      <Link href={bikeLink} onClick={() => setSelectedBikeId(bike.id)}>
        <DivCardImgWrapper>
          <CardImg
            src={bike?.featuredMediaItem?.mediaUrl}
            width={bike?.featuredMediaItem?.width}
            height={bike?.featuredMediaItem?.height}
            sizes="(max-width: 376px) 300px,(max-width: 768px) 70vw, (max-width: 1200px) 500px, 450px"
            quality={80}
            loading="eager"
            alt={bike?.featuredMediaItem?.alt}
            priority={priority}
            rel="dns-prefetch"
          />
          <CardImgCover></CardImgCover>
        </DivCardImgWrapper>
      </Link>

      <DivDescriptionWrapper>
        <PTitle>{bike?.brand?.name}</PTitle>
        <PSubTitle>{bike?.model}</PSubTitle>
      </DivDescriptionWrapper>

      <DivPricingWrapper>
        <DeletePrice>{`$${Number(bike?.regularPrice || 0).toFixed(2)}`}</DeletePrice>
        <CurrentPrice>{`$${Number(bike?.discountPrice || 0).toFixed(2)}/Day`}</CurrentPrice>
      </DivPricingWrapper>

      <Link href={bikeLink} onClick={() => setSelectedBikeId(bike.id)}>
        <CardButton>
          <span>Check Availability</span>
          <ForwardIcon className="btn-icon" />
        </CardButton>
      </Link>
    </DivBikeCardContainer>
  );
}

export default BikeCard;
