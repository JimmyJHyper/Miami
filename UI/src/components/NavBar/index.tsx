import React, { Fragment } from "react";
import { IoHome } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { DivNavBarContainer } from "./styles";
import Link from "next/link";

type Props = {
  nextLinks: string[];
};

function NavBar({ nextLinks }: Props) {
  return (
    <DivNavBarContainer>
      <IoHome className="home-icon" />
      <Link href="/">
        <span className="active">Home</span>
      </Link>
      {nextLinks.map((link, idx) => (
        <Fragment key={idx}>
          <MdKeyboardDoubleArrowRight className="next-icon" />
          <span>{link}</span>
        </Fragment>
      ))}
    </DivNavBarContainer>
  );
}

export default NavBar;
