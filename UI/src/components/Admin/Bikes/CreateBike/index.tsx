import { Row, Col, DivInputWrapper, FormCheckout, ButtonSubmit } from "./styles";
import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { PLabel } from "../styles";
import SelectInput from "@/components/common/SelectInput";
import { Bike, BikeType, Brand, MediaItem, Options } from "@/types";
import RichTextEditor from "@/components/BookingWizard/common/RichTextEditor";
import { createBike, updateBikeInfo, updateBikeMainImage } from "@/apis/adminApis";
import AlertMessage from "@/components/Alerts/AlertMessage";

interface BikeTableProps {
    brands: Brand[] | undefined;
    allBikes: Bike[] | undefined;
    allBikesTypes: BikeType[] | undefined;
}



const BikecreateDiv: React.FC<BikeTableProps> = ({ brands, allBikes, allBikesTypes }) => {
    const encodeArray = (array: any) => {
        if (typeof array !== 'string' && array != null) {
            let high = '<ul>';
            array.forEach((element: string) => {
                high += `<li>${element}</li>\n`
            });
            high += '</ul>'
            return high;
        }
        return array;
    }
    const [model, setModel] = useState<string | null>(null);
    const [name, setName] = useState<string | null>(null);
    const [slug, setSlug] = useState<string | null>(null);
    const [seoTitle, setSeotitle] = useState<string | null>(null);

    const [seoDescription, SetSeoDescription] = useState<string | null>(null);
    const [wpBikeId, setWpBikeId] = useState<string | null>(null);
    const [brandId, setBrandId] = useState<string>();
    const [description, setDescription] = useState<string | undefined>();
    const [distanceIncluded, setDistanceIncluded] = useState<string | undefined>();
    const [highlights, setHighlights] = useState<string | undefined>('');
    const [features, setFeatures] = useState<string | undefined>('');
    const [extras, setExtras] = useState<string | undefined>('');
    const [selectedBikes, setSelectedBikes] = useState<number[] | string | undefined>([]);
    const [bikeType, setBikeType] = useState<string | undefined>('');
    const [bikes, setBikes] = useState<Options[] | undefined>(allBikes
        ? allBikes.map((e) => ({
            label: e.model,
            value: e.id
        }))
        : undefined);
    const [mappedBrands, setBrands] = useState<Options[] | undefined>(
        brands
            ? brands.map((e) => ({
                label: e.name,
                value: e.id
            }))
            : undefined
    );
    const [mappedTypes, setMappedTypes] = useState<Options[] | undefined>(
        allBikesTypes
            ? allBikesTypes.map((e) => ({
                label: e.name,
                value: e.id
            }))
            : undefined
    );

    const change = (e: string) => {

    }

    useEffect(() => {
        if (allBikes !== undefined) {
            setBikes(
                allBikes.map((e) => ({
                    label: e.model,
                    value: e.id
                }))
            );
        }
        if (brands !== undefined) {
            setBrands(
                brands.map((e) => ({
                    label: e.name,
                    value: e.id
                }))
            );
        }
        if (allBikesTypes !== undefined) {


            setMappedTypes(
                allBikesTypes.map((e) => ({
                    label: e.name,
                    value: e.id
                }))
            );
        }


    }, [brands, allBikes]); // Make sure to include dependencies for useEffect



    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const obj = {
            'model': model,
            'name': name,
            'slug': slug,
            'brandId': brandId == '' ? null : brandId,
            'description': description,
            'distanceIncluded': distanceIncluded,
            'highlights': highlights,
            'features': features,
            'extras': extras,
            // 'seoTitle': seoTitle,
            // 'seoDescription': seoDescription,
            // 'relatedBikesId': selectedBikes,
            'typeId': bikeType
            // 'wpBikeId':wpBikeId
        }
        await createBike(obj).then(res => {
            AlertMessage({
                type: "success",
                message: "Done",
            });
        }).catch(error => {
            AlertMessage({
                type: "error",
                message: "Failed",
            });
        })
    };

    return (
        <FormCheckout onSubmit={handleSubmit}>
            <Col>
                <PLabel>Brand</PLabel>
                <DivInputWrapper>
                    <SelectInput
                        className="text-input"
                        label="Select Brand"
                        name="brand"
                        value={brandId}
                        onChange={(e) => setBrandId(e.target.value)}
                        options={mappedBrands || []}
                        is_required={false}
                    />
                </DivInputWrapper>
            </Col>
            <Col>
                <PLabel>Inventory Type</PLabel>
                <DivInputWrapper>
                    <SelectInput
                        className="text-input"
                        label="Select Type"
                        name="typeId"
                        value={bikeType}
                        onChange={(e) => setBikeType(e.target.value)}
                        options={mappedTypes || []}
                        is_required={true}
                    />
                </DivInputWrapper>
            </Col>
            <Row>
                <Col>
                    <DivInputWrapper>
                        <TextField
                            className="text-input"
                            label="model"
                            variant="outlined"
                            type="text"
                            value={model || ''}
                            onChange={(e) => setModel(e.target.value)}
                            required={true}
                        />
                    </DivInputWrapper>
                </Col>
                <Col>
                    <DivInputWrapper>
                        <TextField
                            className="text-input"
                            label="slug"
                            variant="outlined"
                            type="text"
                            value={slug || ''}
                            onChange={(e) => setSlug(e.target.value)}
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
                            label="Name"
                            variant="outlined"
                            type="text"
                            value={name || ''}
                            onChange={(e) => { setName(e.target.value) }}
                            required={true}
                        />
                    </DivInputWrapper>
                </Col>
                <Col>
                    <PLabel>Distance Included</PLabel>
                    <RichTextEditor change={setDistanceIncluded} text={distanceIncluded || ''} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <PLabel>Highlight</PLabel>
                    <RichTextEditor change={setHighlights} text={highlights || ''} />
                </Col>
                <Col>
                    <PLabel>Description</PLabel>
                    <RichTextEditor change={setDescription} text={description || ''} />
                </Col>
            </Row>
            <Row>

                <Col>
                    <PLabel>Extras</PLabel>
                    <RichTextEditor change={setExtras} text={extras || ''} />
                </Col>
                <Col>
                    <PLabel>Features</PLabel>
                    <RichTextEditor change={setFeatures} text={features || ''} />
                </Col>
            </Row>
            {/* <Row>
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
            </Row> */}
            {/* <Col>
                <PLabel>related Bikes</PLabel>
                <DivInputWrapper>
                    <SelectInput
                        multiple={true}
                        className="text-input"
                        label="Select Related Bikes"
                        name="relatedBikes[]"
                        value={selectedBikes}
                        onChange={(e) => setSelectedBikes(e.target.value)}
                        options={bikes || []}
                    />
                </DivInputWrapper>
            </Col> */}
            <ButtonSubmit>Update</ButtonSubmit>
        </FormCheckout>
    );
};

export default BikecreateDiv;
