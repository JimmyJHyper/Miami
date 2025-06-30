import Link from "next/link";
import { Row, Col, DivInputWrapper, FormCheckout, ButtonSubmit } from "./styles";
import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { PLabel } from "../styles";
import SelectInput from "@/components/common/SelectInput";
import { Bike, BikeType, Brand, MediaItem, Options } from "@/types";
import QuillEditor from "@/components/BookingWizard/common/RichTextEditor";
import RichTextEditor from "@/components/BookingWizard/common/RichTextEditor";
import BikeCarouselChooser from "@/components/BikeCarouselChooser";
import { updateBikeAltImage, updateBikeInfo, updateBikeMainImage, updateBikeSEO } from "@/apis/adminApis";
import AlertMessage from "@/components/Alerts/AlertMessage";
import ImageUploader from "@/components/ImageUploader/ImageUploader";

interface BikeSeo {
    bike: any;

}



const BikeEditSEO: React.FC<BikeSeo> = ({ bike }) => {

    //seo
    const [ogTitle, setOgTitle] = useState<string | undefined>('');
    const [ogDescription, setOgDescription] = useState<string | undefined>('');
    const [ogImage, setOgImage] = useState<string | undefined>('');
    const [ogAltImage, setOgAltImage] = useState<string | undefined>('');
    const [altImage, setAltImage] = useState<string | undefined>('');
    const [keywords, setKeywords] = useState<string | undefined>('');
    const [canonical, setCanonical] = useState<string | undefined>('');
    const [seoTitle, setSeotitle] = useState<string | null>(null);
    const [seoDescription, SetSeoDescription] = useState<string | null>(null);
    //endseo

    useEffect(() => {
        if (bike !== undefined) {
            setSeotitle(bike.seoTitle || ''); // Ensure it's not null or undefined
            SetSeoDescription(bike.seoDescription);
            setOgTitle(bike.ogTitle);
            setOgDescription(bike.ogDescription);
            setKeywords(bike.keywords);
            setCanonical(bike.canonical);
            setAltImage(bike.featuredMediaItem?.alt)
            
        }
    }, [bike]); // Make sure to include dependencies for useEffect



    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const obj = {
            'seoTitle': seoTitle,
            'seoDescription': seoDescription,
            'ogTitle': ogTitle,
            'ogDescription': ogDescription,
            // 'ogAltImage': ogAltImage,
            'canonical': canonical,
            'keywords': keywords,
            'alt': altImage,
            'mediaItemId':bike.featuredMediaItemId
            // 'ogImage': ogImage,
        }
        await updateBikeSEO(bike.id, obj).then(async res => {
            await updateBikeAltImage(obj);
        })
    };

    return (
        <FormCheckout onSubmit={handleSubmit}>
            <h2>Set Inventory SEO</h2>
            <Row>
                <Col>
                    <DivInputWrapper>
                        <TextField
                            className="text-input"
                            label="Seo title"
                            variant="outlined"
                            type="text"
                            value={seoTitle || ''}
                            onChange={(e) => setSeotitle(e.target.value)}
                            required={true}
                        />
                    </DivInputWrapper>
                </Col>
                <Col>
                    <DivInputWrapper>
                        <TextField
                            className="text-input"
                            label="Seo Description"
                            variant="outlined"
                            type="text"
                            value={seoDescription || ''}
                            onChange={(e) => SetSeoDescription(e.target.value)}
                            required={true}
                        />
                    </DivInputWrapper>
                </Col>
            </Row>
            <Row>
                <Col>
                    <DivInputWrapper>
                        <TextField
                            className="text-input"
                            label="og:title"
                            variant="outlined"
                            type="text"
                            value={ogTitle || ''}
                            onChange={(e) => setOgTitle(e.target.value)}
                            required={true}
                        />
                    </DivInputWrapper>
                </Col>
                <Col>
                    <DivInputWrapper>
                        <TextField
                            className="text-input"
                            label="og:description"
                            variant="outlined"
                            type="text"
                            value={ogDescription || ''}
                            onChange={(e) => setOgDescription(e.target.value)}
                            required={true}
                        />
                    </DivInputWrapper>
                </Col>
            </Row>
            <Row>
                {/* <Col>
                    <DivInputWrapper>
                        <TextField
                            className="text-input"
                            label="og:image"
                            variant="outlined"s
                            type="text"
                            value={ogImage || ''}
                            onChange={(e) => setOgImage(e.target.value)}
                            required={true}
                        />
                    </DivInputWrapper>
                </Col> */}
                <Col>
                    <DivInputWrapper>
                        <TextField
                            className="text-input"
                            label="Alt Image"
                            variant="outlined"
                            type="text"
                            value={altImage || ''}
                            onChange={(e) => setAltImage(e.target.value)}
                            required={true}
                        />
                    </DivInputWrapper>
                </Col>
            </Row>
            <Row>
                <Col>
                    <DivInputWrapper>
                        <TextField
                            className="text-input"
                            label="Keywords"
                            variant="outlined"
                            type="text"
                            value={keywords || ''}
                            onChange={(e) => setKeywords(e.target.value)}
                            required={true}
                        />
                    </DivInputWrapper>
                </Col>
                <Col>
                    <DivInputWrapper>
                        <TextField
                            className="text-input"
                            label="Canonical"
                            variant="outlined"
                            type="text"
                            value={canonical || ''}
                            onChange={(e) => setCanonical(e.target.value)}
                            required={true}
                        />
                    </DivInputWrapper>
                </Col>
            </Row>
            <ButtonSubmit>Save</ButtonSubmit>
        </FormCheckout>
    );
};

export default BikeEditSEO;
