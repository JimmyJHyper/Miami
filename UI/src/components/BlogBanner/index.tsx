import { type StaticImageData } from 'next/image';
import { DivBlogBannerContainer, DivEmptyBlur, ImageContainer, ImgBlog } from "./styles";

type Props = {
  bgImg:  StaticImageData  | undefined;
};

function BlogBanner({ bgImg }: Props) {

  return (
    <>
      <DivBlogBannerContainer bgImg={bgImg?.src}>
        <DivEmptyBlur />
        <ImageContainer >

        <ImgBlog
          src={bgImg!}
          alt="Blog Banner"
          fill
           priority
          loading="eager"
          style={{objectFit: 'contain', objectPosition: 'center'}}            
        />
        </ImageContainer>
        <DivEmptyBlur />
      </DivBlogBannerContainer>
    </>
  );
}

export default BlogBanner;
