import { useMarketing } from "@/providers/MarketingProvider";
import { MarketingContextType } from "@/providers/types";
import { Bike, CheckoutOrderData } from "@/types";
import {
  CardImg,
  DivBikeCardContainer,
  DivRowContainer,
  CardDetails,
  CardTitle,
  CardStatus,
  DateInfo,
  PriceInfo,
} from "./styles";
import { formattedDayjs } from "@/utils/helpers";

type Props = {
  bike: Bike;
  priority?: boolean;
  order: CheckoutOrderData;
};

function ProfileOrderBikeCard({ bike, priority, order }: Props) {
  const pickupDate = formattedDayjs(order.pickUpDate);
  const dropOffDate = formattedDayjs(order.dropOffDate);
  return (
    <DivRowContainer>
      <DivBikeCardContainer>
        <CardImg
          src={order.bikeImage}
          width={bike?.featuredMediaItem?.width}
          height={bike?.featuredMediaItem?.height}
          sizes="(max-width: 376px) 300px,(max-width: 768px) 70vw, (max-width: 1200px) 500px, 450px"
          quality={80}
          loading="eager"
          alt={bike?.featuredMediaItem?.alt}
          priority={priority}
          rel="dns-prefetch"
        />
      </DivBikeCardContainer>
      <CardDetails>
        <CardTitle>
          {bike.brand?.name ?? ""} - {bike.model}
        </CardTitle>
        <CardStatus>Status: {order.status}</CardStatus>
        <DateInfo>
          <h6>
            Pickup: {pickupDate.month() + 1}/{pickupDate.date()}/
            {pickupDate.year()} {order.pickUpTime}
          </h6>
          <h6>
            Drop off: {dropOffDate.month() + 1}/{dropOffDate.date()}/
            {dropOffDate.year()} {order.dropOffTime}
          </h6>
        </DateInfo>
        <PriceInfo>Total: ${order.orderTotalAmount}</PriceInfo>
      </CardDetails>
    </DivRowContainer>
  );
}

export default ProfileOrderBikeCard;
