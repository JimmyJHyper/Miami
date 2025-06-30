import { BlogContent } from "@/types";
import DisplayContent from "./DisplayContent";
import NavList from "./NavList";
import {
  DivBlogDetailContainer,
  DivNavWrapper,
  DivPostWrapper,
  PBold,
} from "./styles";

type Props = {
  contents: BlogContent[] | undefined;
};

function BlogDetail({ contents }: Props) {
  const ackContent = contents?.find((content) => content.isAck);
  const otherContents = contents?.filter((content) => !content.isAck);
  const navContents = contents?.filter((content) => content.heading === "h1");

  return (
    <>

      <DivBlogDetailContainer>
        <DivNavWrapper>
          <PBold>Navigate article</PBold>
          <NavList contents={navContents} />
        </DivNavWrapper>

        <DivPostWrapper>
          {ackContent && <DisplayContent content={ackContent} />}

          <PBold>Navigate this article</PBold>
          <NavList contents={navContents} />

          {otherContents?.map((otherContent, idx) => (
            <DisplayContent key={idx} content={otherContent} />
          ))}
        </DivPostWrapper>
      </DivBlogDetailContainer>
    </>
  );
}

export default BlogDetail;
