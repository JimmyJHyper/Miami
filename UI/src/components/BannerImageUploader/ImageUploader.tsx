import Image from "next/image";
import { useCallback, useRef, useState, useEffect } from "react";
import { ImageBikeContainer, ImgBike } from "./style";
import { Input, TextField } from "@mui/material";
import { updateBikeMainImage } from "@/apis/adminApis";
import FileUploader from "../Uploader/ImageUploader";
import { DivInputWrapper } from "../Admin/Bikes/styles";

interface ImageUploader {
  src: string;
  callback: Function;
  textChange?: Function;
}

const BannerImageUploader: React.FC<ImageUploader> = ({ src, callback }) => {
  const [image, setImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  useEffect(() => {
    if (src) {
      setImage(src);
    }
  }, [src]);
  return (
    <ImageBikeContainer>
      <ImgBike src={image} alt={""} width="500" height={300} />
      <FileUploader
        showTextInput={false}
        callback={callback}
        autoCallback={true}
      />
    </ImageBikeContainer>
  );
};

export default BannerImageUploader;
