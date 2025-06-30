import { useState } from "react";

import dynamic from "next/dynamic";
const AliceCarousel = dynamic(() => import("react-alice-carousel"), {
  ssr: false,
});

import { EventObject } from "react-alice-carousel";
import { DivCardCarouselContainer } from "./styles";

const responsive = {
  0: { items: 1 },
  768: { items: 2 },
  980: { items: 3, itemsFit: "contain" },
};

type Props = {
  items: JSX.Element[] | undefined;
};

function CardCarousel({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChanged = (event: EventObject) => {
    const { item } = event;
    setCurrentIndex(item);
  };


  return (
    <DivCardCarouselContainer>
      {items?.length ? (
        <AliceCarousel
          mouseTracking
          // autoPlay
          // infinite
          autoPlayInterval={2000}
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          activeIndex={currentIndex}
          onSlideChanged={handleSlideChanged}
        />
      ) : null}
    </DivCardCarouselContainer>
  );
}

export default CardCarousel;
