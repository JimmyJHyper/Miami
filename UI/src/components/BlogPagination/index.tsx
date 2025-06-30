import React from "react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { ButtonAction, DivBlogPaginationContainer } from "./styles";

function BlogPagination() {
  return (
    <DivBlogPaginationContainer>
      <ButtonAction>
        <HiOutlineArrowNarrowLeft />
        <span>Prev Post</span>
      </ButtonAction>
      <ButtonAction>
        <span>Next Post</span>
        <HiOutlineArrowNarrowRight />
      </ButtonAction>
    </DivBlogPaginationContainer>
  );
}

export default BlogPagination;
