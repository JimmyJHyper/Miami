import { BlogContent } from "@/types";
import { convertTitleToId } from "@/utils/helpers";
import Link from "next/link";
import {
  DivDescription,
  H1PostTitle,
  H2PostTitle,
  ImgPost,
  PBold
} from "./styles";

type Props = {
  content: BlogContent;
};

function DisplayContent({ content }: Props) {

  return (
    <>
      <div>
        {content.heading === "h1" ? (
          <H1PostTitle id={convertTitleToId(content.title)}>
            {content.title}
          </H1PostTitle>
        ) : null}
        {content.heading === "h2" ? (
          <H2PostTitle>{content.title}</H2PostTitle>
        ) : null}
        {content.heading === "h3" ? <PBold>{content.title}</PBold> : null}
        {content?.descriptions?.map((description, idx) => (
          <DivDescription
            key={idx}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        ))}
        {!content.imageLink && content.image ? (
          <ImgPost
            src={content.image.src}
            alt={content.image.alt}
            height={530}
            style={{ objectFit: 'contain' }}
            loading="eager"
          />
        ) : null}
        {content.imageLink && content.image && (
          <Link href={content.imageLink}>
            <ImgPost
              src={content.image.src}
              alt={content.image.alt}
              height={450}
              loading="eager"
              style={{objectFit: 'contain'}}
            />
          </Link>
        )}
      </div>
    </>
  );
}

export default DisplayContent;
