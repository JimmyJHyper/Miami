import { blogs } from "@/constants/blogs";
import BlogCard from "../BlogCard";
import { DivBlogListContainer, DivBlogListWrapper, H2Title } from "./styles";
import { DivBanner } from "../BannerCard/styles";
import BannerImageCard from "../BannerCard";
import { Banner } from "@/types/admin/admin";

function BlogList({ banner = null }: { banner: Banner | null }) {
  return (
    <>
      <DivBlogListContainer>
        <H2Title>Blog</H2Title>

        <DivBlogListWrapper>
          {blogs?.map((blog, idx) => (
            <BlogCard key={idx} blog={blog} />
          ))}
        </DivBlogListWrapper>

        <BannerImageCard banner={banner} />
      </DivBlogListContainer>
    </>
  );
}

export default BlogList;
