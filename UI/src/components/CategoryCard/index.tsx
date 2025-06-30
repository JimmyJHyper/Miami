import { useMarketing } from "@/providers/MarketingProvider";
import { MarketingContextType } from "@/providers/types";
import { BikeType, Brand } from "@/types";
import { convertTitleToLink } from "@/utils/helpers";
import Link from "next/link";
import { CardImg, DivCategoryCardContainer, PCategoryName } from "./styles";

type Props = {
  category: BikeType | Brand;
  fromBrand?: boolean;
};

function CategoryCard({ category, fromBrand = false }: Props) {
  const { setSelectedBikeTypeId } = useMarketing() as MarketingContextType;
  const link = fromBrand
    ? `/${convertTitleToLink(category.name).replace("cycles", "cycle")}-rental-miami`
    : `/motorcycle-rental/?typeOfMotorcycle=${convertTitleToLink(
        category.name
      )}`;

  return (
    <DivCategoryCardContainer>
      <Link
        href={link}
        onClick={() => {
          !fromBrand && setSelectedBikeTypeId(category.id);
        }}
      >
        <CardImg
          src={category.mediaItem.mediaUrl!}
          alt={category.mediaItem.alt}
          width={category.mediaItem.width}
          height={category.mediaItem.height}
          sizes="(max-width: 376px) 300px,(max-width: 768px) 40vw, (max-width: 1200px) 330px"
          loading={'eager'}
          rel="dns-prefetch"
        />
        <PCategoryName>{category?.name}</PCategoryName>
      </Link>
    </DivCategoryCardContainer>
  );
}

export default CategoryCard;
