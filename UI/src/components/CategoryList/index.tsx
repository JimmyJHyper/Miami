import { useMarketing } from "@/providers/MarketingProvider";
import { MarketingContextType } from "@/providers/types";
import CardCarousel from "../CardCarousel";
import CategoryCard from "../CategoryCard";
import { DivCategoryListContainer, H2Title } from "./styles";

function CategoryList() {
  const { allBikeTypes } = useMarketing() as MarketingContextType;

  const items = allBikeTypes?.map((category, idx) => (
    <CategoryCard key={idx} category={category} />
  ));


  return (
    <>

      <DivCategoryListContainer>
        <H2Title>Browse By Category</H2Title>

        <CardCarousel items={items} />
      </DivCategoryListContainer>
    </>
  );
}

export default CategoryList;
