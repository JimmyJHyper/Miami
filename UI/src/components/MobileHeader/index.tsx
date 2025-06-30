import { useMarketing } from "@/providers/MarketingProvider";
import { MarketingContextType } from "@/providers/types";
import { convertTitleToLink } from "@/utils/helpers";
import Link from "next/link";
import { useState } from "react";
import {
  ButtonMenuToggle,
  DivDropMenuWrapper,
  DivHeaderBar,
  DivMobileHeaderContainer,
  ImgLogo,
  PMenuItem,
} from "./styles";
import UserProfileNav from "../UserProfileDropdown";

function MobileHeader() {
  const [showMenu, setShowMenu] = useState(false);
  const { allBrands } = useMarketing() as MarketingContextType;
  const brandOptions = allBrands?.map((brand) => {
    const label = `${brand.name.replace("cycles", "cycle")} Rental Miami`;
    const link = convertTitleToLink(label);
    return { label, link };
  });

  return (
    <>
      <DivMobileHeaderContainer>
        <DivHeaderBar>
          <Link href="/">
            <ImgLogo
              src="/images/miami_logo.png"
              alt="miami-motorcycle-rentals-logo"
              width={128}
              height={45}
              quality={100}
              priority
              unoptimized
              sizes="128px"
            />
          </Link>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <UserProfileNav />
            <ButtonMenuToggle
              onClick={() => setShowMenu(!showMenu)}
              className={`${showMenu && "active"}`}
            >
              <span />
              <span />
              <span />
            </ButtonMenuToggle>
          </div>
        </DivHeaderBar>

        <DivDropMenuWrapper
          onClick={() => setShowMenu(false)}
          className={`${showMenu && "show"}`}
        >
          <Link href="/motorcycle-rental">
            <PMenuItem>All Our Bikes</PMenuItem>
          </Link>

          <PMenuItem className="list-title">
            Choose a Motorcycle Rental
          </PMenuItem>
          {brandOptions?.map((option, idx) => (
            <Link key={idx} href={`/${option.link}`}>
              <PMenuItem className="list-item">{option.label}</PMenuItem>
            </Link>
          ))}
        </DivDropMenuWrapper>
      </DivMobileHeaderContainer>
    </>
  );
}

export default MobileHeader;
