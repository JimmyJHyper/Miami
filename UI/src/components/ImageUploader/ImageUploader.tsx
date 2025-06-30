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
    imageAlt?: string;
    showAlt:boolean | false;
}

const ImageUploader: React.FC<ImageUploader> = ({ src, callback, textChange, imageAlt, showAlt}) => {
    const [image, setImage] = useState('');
    const [alt, setAlt] = useState('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    useEffect(() => {
        if (src) {
            setImage(src)
        }
        if (imageAlt) {
            setAlt(imageAlt)
        }
    }, [src,imageAlt])
    return (
        <ImageBikeContainer>
            <ImgBike src={image} alt={""} width="500" height={300} />
            <DivInputWrapper>
                <TextField
                    className="text-input"
                    label="Image Alt"
                    variant="outlined"
                    type="text"
                    value={alt}
                    onChange={(e) => textChange ? textChange(e.target.value) : null}
                />
            </DivInputWrapper>
            <FileUploader showTextInput={showAlt} callback={callback} />
        </ImageBikeContainer>
    )
}

export default ImageUploader