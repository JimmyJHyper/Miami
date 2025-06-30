import { useMarketing } from "@/providers/MarketingProvider";
import { MarketingContextType } from "@/providers/types";
import { Blog } from "@/types";
import { convertTitleToLink } from "@/utils/helpers";
import Link from "next/link";
import {
  ButtonReadMore,
  CardImg,
  DivBlogCardContainer,
  DivPostInfo,
  H2Title,
  PDescription,
  PPostDate
} from "./styles";

type Props = {
  blog: Blog;
  isLanding?: boolean;
};

function BlogCard({ blog, isLanding = false }: Props) {
  const convertedTitle = convertTitleToLink(blog.title);
  const blogLink = `/blog/${convertedTitle}`;
  const { setSelectedBlogTitle } = useMarketing() as MarketingContextType;

  return (
    <>

      <DivBlogCardContainer>
        <Link href={blogLink}>
          <CardImg
            src={blog.image.src}
            alt={blog.image.alt}
            width={200}
            height={128}
            loading="eager"
            sizes="(max-width: 768px) 70vw, (max-width: 1200px) 400px, 350px"
          />
        </Link>

        <H2Title>{blog.title}</H2Title>

        {isLanding ? <PDescription>{blog.overview}</PDescription> : null}

        <DivPostInfo>
          <PPostDate>{blog.updatedAt}</PPostDate>
          <ButtonReadMore
            href={blogLink}
            onClick={() => setSelectedBlogTitle(convertedTitle)}
          >
            Read more
          </ButtonReadMore>
        </DivPostInfo>
      </DivBlogCardContainer>
    </>
  );
}

export default BlogCard;
