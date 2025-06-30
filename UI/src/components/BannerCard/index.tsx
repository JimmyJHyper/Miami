"use client";

import { Banner } from "@/types/admin/admin";
import React from "react";
import { BannerContainer, BannerImage } from "./styles";

const encodeURL = (url: string) => encodeURI(url);

function BannerImageCard({ banner }: { banner: Banner | null }) {
  if (!banner) return null;

  return (
    <BannerContainer href={banner.url} target="_blank">
      <picture
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* Large screens (Desktops & Laptops) */}
        <source
          srcSet={encodeURL(banner.mediaItem.mediaUrl)}
          media="(min-width: 980px)"
        />
        {/* Medium screens (Tablets & Small Laptops) */}
        {/* <source
          srcSet={encodeURL(banner.mediaMediumItem.mediaUrl)}
          media="(min-width: 768px)"
        /> */}
        {/* Small screens (Phones) */}
        <source
          srcSet={encodeURL(banner.mediaSmallItem?.mediaUrl)}
          media="(max-width: 979px)"
        />
        {/* Default fallback image */}
        <BannerImage
          src={encodeURL(banner.mediaSmallItem?.mediaUrl)}
          alt={banner.altText}
        />
      </picture>
    </BannerContainer>
  );
}

export default BannerImageCard;
