import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Bike } from "@/types";
import { useEffect, useRef, useState } from "react";
import BikeCard from "../BikeCard";
import BikeNotFound from "../BikeNotFound";
import { DivBikeListContainer } from "./styles";
import { useBanner } from "@/providers/BannersProvider";
import { BannerContextType } from "@/providers/types";
import { Banner } from "@/types/admin/admin";
import Image from "next/image";
import BannerImageCard from "../BannerCard";

type Props = {
  bikes: Bike[] | undefined;
  banners?: (Banner | null)[];
  bikePage?: "HOME" | "ALL_OUR_BIKES" | "OTHER";
};

function BikeList({ bikes, banners = [], bikePage = "OTHER" }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const dividedBikeList = bikes
    ? [[...bikes].slice(0, 6), [...bikes].slice(6, bikes.length)]
    : [];
  const entry = useIntersectionObserver(ref, {});
  useEffect(() => {
    if (visible === true) return;
    setVisible(entry?.isIntersecting || false);
  }, [entry]);

  return (
    <>
      {bikes?.length ? (
        <DivBikeListContainer>
          {dividedBikeList[0].map((bike, index) => (
            <>
              <div
                ref={index === dividedBikeList[0].length - 1 ? ref : null}
                key={bike.id}
              >
                <BikeCard bike={bike} priority={index === 0} />
              </div>
              {bikePage == "HOME" && index == 5 && (
                <BannerImageCard banner={banners[0]} />
              )}
            </>
          ))}

          {dividedBikeList[1].map((bike, index) => (
            <>
              <BikeCard key={bike.id} bike={bike} priority={false} />

              {bikePage == "ALL_OUR_BIKES" && index == 5 && (
                <BannerImageCard banner={banners[0]} />
              )}

              {bikePage == "ALL_OUR_BIKES" && index == 17 && (
                <BannerImageCard banner={banners[1]} />
              )}

              {bikePage == "HOME" && index == 7 && (
                <BannerImageCard banner={banners[1]} />
              )}

              {bikePage == "HOME" && index == 17 && (
                <BannerImageCard banner={banners[2]} />
              )}
            </>
          ))}
        </DivBikeListContainer>
      ) : (
        <BikeNotFound />
      )}
    </>
  );
}

export default BikeList;
