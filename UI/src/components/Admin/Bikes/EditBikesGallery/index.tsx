import { Row, FormCheckout } from "./style";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { MediaItem } from "@/types";

import BikeCarouselChooser from "@/components/BikeCarouselChooser";
import { deleteCarouselImage, updateBikeAltImage, updateBikeMainImage } from "@/apis/adminApis";
import ImageUploader from "@/components/ImageUploader/ImageUploader";
import confirmMessage from "@/components/common/SwalConfirm";
import { Button } from "@mui/material";

interface BikeGallery {
    bike: any;
    selectedMedia: MediaItem[] | undefined;
}

const EditBikeGalleryComponent: React.FC<BikeGallery> = ({ bike, selectedMedia }) => {
    const router = useRouter();
    const [images, setImagees] = useState<MediaItem[] | undefined>([]);
    const [image, setImagee] = useState<MediaItem | undefined>(undefined);
    const [alt, setAlt] = useState<string | ''>('');
    const [singleImage, setSingleImage] = useState<string | null>('');
    const updateMainAlt = async () => {
        await updateBikeAltImage({
            mediaItemId: image?.id,
            alt: alt
        })
    }
    const uploadMainImage = async (file: any) => {

        let img = await updateBikeMainImage(bike.id, file, alt)

        setSingleImage(img.mediaUrl)
        setImagee(img);
    }
    const onDelete = (index: number) => {
        confirmMessage({
            callback: () => {
                deleteCarouselImage(selectedMedia ? selectedMedia[index].id : -1).then((e) => {
                    setImagees(selectedMedia?.filter((ele, currentIndex) => currentIndex !== index) || []);
                })
            },
            confirmButtonText: "Yes, delete it!",
            title: "Are you sure?",
            text: "You won't be able to revert this!",

        })

    }

    const uploadCarouselImage = async (file: any, alt: string) => {
        let img = await updateBikeMainImage(bike.id, file, alt, false)
        const updatedMedia = images ? [...images, img] : [img];
        setImagees(updatedMedia);
        selectedMedia?.push(img)
        // router.reload();
    }

    useEffect(() => {
        if (bike !== undefined) {
            setSingleImage(bike.featuredMediaItem?.mediaUrl ?? '')
            setImagees(bike.featuredMediaItem?.transformedMediaItems?.map((element: any) => element.mediaUrl))
            setAlt(bike.featuredMediaItem?.alt);
            setImagee(bike.featuredMediaItem);
        }
        if (selectedMedia != undefined) {
            setImagees(selectedMedia);
        }
    }, [bike]);

    return (
        <FormCheckout>
            <BikeCarouselChooser mediaItems={images} callback={uploadCarouselImage} deleteCallback={onDelete} />
            <Row>
                <ImageUploader showAlt={false} src={singleImage ?? ''} callback={uploadMainImage} textChange={setAlt} imageAlt={alt} />
            </Row>
            <Button onClick={() => updateMainAlt()}>Change Alt</Button>
        </FormCheckout>
    );
}

export default EditBikeGalleryComponent