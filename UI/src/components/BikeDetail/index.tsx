import { useMarketing } from "@/providers/MarketingProvider";
import { MarketingContextType } from "@/providers/types";
import { Bike } from "@/types";
import { MdOutlinePlayCircle } from "react-icons/md";
import BikeCard from "../BikeCard";
import CardCarousel from "../CardCarousel";
import {
  DivBikeDetailContainer,
  DivDescription,
  DivFeatureGroup,
  H3SubTitle,
  LiFeatureItem,
  PTitle,
  UlFeatureList,
} from "./styles";

type Props = {
  bike: Bike | undefined;
};

function BikeDetail({ bike }: Props) {
  const { allBikes } = useMarketing() as MarketingContextType;

  // Temporary approach: display Naked-bikes for Sport-bikes or Standard-bike
  const featuredBikes =
    bike?.typeId === 1 || bike?.typeId === 2
      ? allBikes?.filter((item) => item.typeId === 6 && item.id !== bike.id)
      : allBikes?.filter(
        (item) => item.typeId === bike?.typeId && item.id !== bike.id
      );
  const items =
    featuredBikes?.map((bike, idx) => <BikeCard key={idx} bike={bike} />) || [];
  return (
    <>
      <DivBikeDetailContainer>
        <DivFeatureGroup>
          <MdOutlinePlayCircle className="title-icon" />
          <div>
            <PTitle>Highlights:</PTitle>
            {
              typeof bike?.highlights === 'object' && bike?.highlights?.length > 0 ? (
                <UlFeatureList>
                  {bike?.highlights?.map((item, idx) => (
                    <LiFeatureItem key={idx}>{item}</LiFeatureItem>
                  ))}
                </UlFeatureList>
              ) : (
                <div
                  dangerouslySetInnerHTML={{
                    __html: bike?.highlights?.toString() || "", // Use an empty string if bike?.highlights is undefined
                  }}
                />

              )
            }
          </div>
        </DivFeatureGroup>
        <DivFeatureGroup>
          <MdOutlinePlayCircle className="title-icon" />
          <div>
            <PTitle>Description:</PTitle>

            <DivDescription
              dangerouslySetInnerHTML={{
                __html: bike?.description?.replace(/(\r\n|\r|\n)/g, "<br>")!,
              }}
            />
          </div>
        </DivFeatureGroup>
        <DivFeatureGroup>
          <MdOutlinePlayCircle className="title-icon" />
          <div>
            <PTitle>Distance Included:</PTitle>
            <DivDescription
              dangerouslySetInnerHTML={{ __html: bike?.distanceIncluded! }}
            />
          </div>
        </DivFeatureGroup>

        <DivFeatureGroup>
          <MdOutlinePlayCircle className="title-icon" />
          <div>
            <PTitle>Features:</PTitle>
            {
              typeof bike?.features === 'object' && bike?.features?.length > 0 ? (
                <UlFeatureList>
                  {bike?.features?.map((item, idx) => (
                    <LiFeatureItem key={idx}>{item}</LiFeatureItem>
                  ))}
                </UlFeatureList>
              ) : (
                <div
                  dangerouslySetInnerHTML={{
                    __html: bike?.features?.toString() || "", // Use an empty string if bike?.highlights is undefined
                  }}
                />
              )
            }

          </div>
        </DivFeatureGroup>

        <DivFeatureGroup>
          <MdOutlinePlayCircle className="title-icon" />
          <div>
            <PTitle>Extras:</PTitle>
            {
              typeof bike?.extras === 'object' && bike?.extras?.length > 0 ? (

                <UlFeatureList>
                  {bike?.extras?.map((item, idx) => (
                    <LiFeatureItem key={idx}>{item}</LiFeatureItem>
                  ))}
                </UlFeatureList>
              ) : (
                <div
                dangerouslySetInnerHTML={{
                  __html: bike?.extras?.toString() || "", // Use an empty string if bike?.highlights is undefined
                }}
              />
              )
            }
          </div>
        </DivFeatureGroup>

        <H3SubTitle>You may also like</H3SubTitle>

        <CardCarousel items={items} />
      </DivBikeDetailContainer>
    </>
  );
}

export default BikeDetail;
