import { MediaItem } from "@/types";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import ImageViewer from "react-simple-image-viewer";
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from '../Shared/Swiper';
import { BulletContainer, DivBikeCarouselContainer, ImageBikeContainer } from "./styles";


type Props = {
  mediaItems: MediaItem[] | undefined;
};

const SWIPER_BREAKPOINTS = {
  0: { slidesPerView: 1 },
  568: { slidesPerView: 2 },
  1024: { slidesPerView: 3 },
}

interface LoadImageProps {
  src: string;
  alt: string;
  setCurrentImage: React.Dispatch<React.SetStateAction<string>>;
  setIsViewerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const imageLoader = () => `https://placehold.co/1600x1000/FFFFFF/FFF/png`;

const LoadImg = ({ src,  alt, setCurrentImage, setIsViewerOpen }: LoadImageProps) => {

  const openImageViewer = useCallback(() => {
    setCurrentImage(src);
    setIsViewerOpen(true);
  }, []);
  

    return (
    <ImageBikeContainer>
        <Image
          src={src}
          alt={alt}
          key={`${src}-${alt}`}
          fill
          onClick={() => openImageViewer()}
          priority={true}
          loading="eager"
          quality={60}
          style={{ objectFit: 'fill' }}
          unoptimized
          sizes="(max-width: 568px) 80vw,(max-width: 568px) 50vw, (max-width: 1024px) 33vw, 30vw"
        />
    </ImageBikeContainer>
    );
  };


function BikeCarousel({ mediaItems }: Props) {
  const [currentImage, setCurrentImage] = useState<string>('');
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = mediaItems?.map((item) => ({ src: item.mediaUrl, alt: item.alt }));

  const bulletContainerRef = useRef<HTMLDivElement>(null)
  
  const closeImageViewer = () => {
    setCurrentImage('');
    setIsViewerOpen(false);
  };

  return (
    <>
      <DivBikeCarouselContainer>
        <Swiper
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={3}
          onSlideChange={() => {}}
          pagination={{
            clickable: true,
            el: bulletContainerRef.current,
            renderBullet: (_index, className) => {
              return `<span class="${className}"></span>`
            }
          }}
          breakpoints={SWIPER_BREAKPOINTS}
        >
          {images?.map((image) => (
            <SwiperSlide key={`${image.src}-${image.alt}`}>
               <LoadImg src={image.src} alt={image.alt} setCurrentImage={setCurrentImage} setIsViewerOpen={setIsViewerOpen} />
            </SwiperSlide>
          ))}
        </Swiper>
        <BulletContainer ref={bulletContainerRef}></BulletContainer>
        {isViewerOpen && (
          <ImageViewer
            src={images?.map((item) => item.src) as string[]}
            currentIndex={images?.findIndex(image => image.src === currentImage)}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        )}
      </DivBikeCarouselContainer>
    </>
  );
}

export default BikeCarousel;