import { MediaItem } from "@/types";
import Image from "next/image";
import { useCallback, useRef, useState, useEffect } from "react";
import ImageViewer from "react-simple-image-viewer";
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from '../Shared/Swiper';
import { BulletContainer, DivBikeCarouselContainer, ImageBikeContainer } from "./styles";
import { Button, Input } from "@mui/material";
import { deleteCarouselImage, updateBikeAltImage } from "@/apis/adminApis";
import FileUploader from "../Uploader/ImageUploader";


type Props = {
  mediaItems: MediaItem[] | undefined;
  callback: Function;
  deleteCallback: Function;
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
  onDelete: Function;
  updateAlt: Function;
  image_id: number | undefined;
}

const imageLoader = () => `https://placehold.co/1600x1000/FFFFFF/FFF/png`;

const LoadImg = ({ src, alt, setCurrentImage, setIsViewerOpen, onDelete, updateAlt, image_id = -1 }: LoadImageProps) => {

  const openImageViewer = useCallback(() => {
    setCurrentImage(src);
    setIsViewerOpen(true);
  }, []);

  const [altImage, setAltImage] = useState<string>('');

  useEffect(() => {
    if (alt != null) {
      setAltImage(alt);
    }
  }, [])

  const handletextChange = (text: string) => {
    setAltImage(text);
  }

  return (
    <div>
      <div>
        <ImageBikeContainer>
          <Image
            
            src={src}
            alt={altImage}
            key={`${src}-${altImage}`}
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
        <Input style={{width:"90%"}} type="text" value={altImage} onChange={(s) => handletextChange(s.target.value)} />
        
        
      </div>
      <div>
      <Button type="button" onClick={() => onDelete()}>Delete</Button>
        <Button type="button" onClick={() => updateAlt(altImage, image_id)}>update Alt</Button>
      </div>
    </div>
  );
};


function BikeCarouselChooser({ mediaItems, callback, deleteCallback }: Props) {

  const [currentImage, setCurrentImage] = useState<string>('');
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [allImages, setAllImages] = useState(mediaItems?.map((item) => ({ src: item.mediaUrl, alt: item.alt, id: item.id })))

  const bulletContainerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (mediaItems) {
      setAllImages(mediaItems.map((item) => ({ src: item.mediaUrl, alt: item.alt, id: item.id })))
    }
  }, [mediaItems])
  const closeImageViewer = () => {
    setCurrentImage('');
    setIsViewerOpen(false);
  };

  const updateAlt = async (alt: string, id: string) => {
    await updateBikeAltImage({
      mediaItemId: id,
      alt: alt
    })
  }
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const newImages = Array.from(files).map((file) => ({
        src: URL.createObjectURL(file),
        alt: file.name,
      }));
      // setImages([...images, ...newImages]);
    }
  };

  return (
    <>
      <FileUploader showTextInput={true} callback={callback} />
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
          {allImages?.map((image, index) => (
            <SwiperSlide key={`${image.src}-${image.alt}`}>
              <LoadImg image_id={image.id} updateAlt={updateAlt} onDelete={() => deleteCallback(index)} src={image.src} alt={image.alt} setCurrentImage={setCurrentImage} setIsViewerOpen={setIsViewerOpen} />
            </SwiperSlide>
          ))}
        </Swiper>
        <BulletContainer ref={bulletContainerRef}></BulletContainer>
        {isViewerOpen && (
          <ImageViewer
            src={allImages?.map((item) => item.src) as string[]}
            currentIndex={allImages?.findIndex(image => image.src === currentImage)}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        )}
      </DivBikeCarouselContainer>

    </>
  );
}

export default BikeCarouselChooser;