import { useMarketing } from "@/providers/MarketingProvider";
import { MarketingContextType } from "@/providers/types";
import Link from "next/link";
import Router from "next/router";
import NavDropdown from "../NavDropdown";
import { DivHeaderContainer, DivNavItems, ImgLogo, NavLink } from "./styles";
import UserProfileNav from "../UserProfileDropdown";

function Header() {
  const { setSelectedBikeTypeId } = useMarketing() as MarketingContextType;

  const onClickNavLink = () => {
    Router.push("/motorcycle-rental");
    setSelectedBikeTypeId(0);
  };

  return (
    <>
  
      <DivHeaderContainer>
        <Link href="/">
          <ImgLogo
            src="/images/miami_logo.png"
            alt="miami-motorcycle-rentals-logo"
            width={128}
            height={45}
            quality={100}
            unoptimized
            sizes="128px"
          />
        </Link>

        <DivNavItems>
          <NavLink onClick={onClickNavLink}>All Our Bikes</NavLink>
          <NavDropdown />
          <UserProfileNav />
        </DivNavItems>
      </DivHeaderContainer>
    </>
  );
}

export default Header;
