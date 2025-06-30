import { BlogContent } from "@/types";
import { convertTitleToId } from "@/utils/helpers";
import React from "react";
import { LiPostNavItem, UlPostNavList } from "./styles";
import Link from "next/link";
import { NextSeo } from "next-seo";

type Props = {
  contents: BlogContent[] | undefined;
};

function NavList({ contents }: Props) {

  return (
    <>

      <UlPostNavList>
        {contents?.map((navContent, idx) => (
          <LiPostNavItem key={idx}>
            <Link href={`#${convertTitleToId(navContent.title)}`}>
              {navContent.title}
            </Link>
          </LiPostNavItem>
        ))}
      </UlPostNavList>
    </>
  );
}

export default NavList;
