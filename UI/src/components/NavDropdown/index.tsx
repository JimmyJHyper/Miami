import React from "react";
import {
  DivNavDropdownContainer,
  DropDownBtn,
  DropdownItem,
  DropdownList,
} from "./styles";
import { convertTitleToLink } from "@/utils/helpers";
import Link from "next/link";
import { useMarketing } from "@/providers/MarketingProvider";
import { MarketingContextType } from "@/providers/types";
import ArrowDownIcon from "../common/Icons/ArrowDownIcon";

function NavDropdown() {
  const { allBrands } = useMarketing() as MarketingContextType;
  const brandOptions = allBrands?.map((brand) => {
    const label = `${brand.name.replace("cycles", "cycle")} Rental Miami`;
    const link = convertTitleToLink(label);
    return { label, link };
  });

  return (
    <DivNavDropdownContainer>
      <DropDownBtn>
        <span>Choose a Motorcycle Rental</span>
        <ArrowDownIcon />
      </DropDownBtn>
      <DropdownList>
        {brandOptions?.map((option, idx) => (
          <Link key={idx} href={`/${option.link}`}>
            <DropdownItem>{option.label}</DropdownItem>
          </Link>
        ))}
      </DropdownList>
    </DivNavDropdownContainer>
  );
}

export default NavDropdown;
