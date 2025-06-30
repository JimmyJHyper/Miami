import React from "react";
import {
  DivBlogHeaderContainer,
  H1Title,
  PCategory,
  PDescription,
} from "./styles";
import { NextSeo } from "next-seo";

type Props = {
  category: string | undefined;
  title: string | undefined;
  date: string | undefined;
};

function BlogHeader({ category, date, title }: Props) {

  return (
    <>
 
      <DivBlogHeaderContainer>
        <PCategory>{category}</PCategory>
        <H1Title>{title}</H1Title>
        <PDescription>Updated: {date}</PDescription>
      </DivBlogHeaderContainer>
    </>
  );
}

export default BlogHeader;
