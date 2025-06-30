import Link from "next/link";
import { Row, Col, DivInputWrapper, FormCheckout, ButtonSubmit } from "./style";
import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { PLabel } from "../styles";
import SelectInput from "@/components/common/SelectInput";
import { Brand, MediaItem, Options } from "@/types";
import QuillEditor from "@/components/BookingWizard/common/RichTextEditor";
import RichTextEditor from "@/components/BookingWizard/common/RichTextEditor";
import BikeCarouselChooser from "@/components/BikeCarouselChooser";
import { updateBasePrice, updateBikeDiscounts, updateBikeInfo, updateBikeMainImage } from "@/apis/adminApis";
import AlertMessage from "@/components/Alerts/AlertMessage";
import ImageUploader from "@/components/ImageUploader/ImageUploader";
import { BasePricePayload } from "@/types/admin/admin";
import { ButtonSave } from "../BikeTablePrices/styles";

interface BikeTableProps {
    bike: any;
}

type discount = {
    two: number;
    three: number;
    four: number;
    five: number;
}



const BikeEditDiscounts: React.FC<BikeTableProps> = ({ bike }) => {

    const [two, setTwo] = useState<number | null>(0);
    const [three, setThree] = useState<number | null>(0);
    const [four, setFour] = useState<number | null>(0);
    const [five, setFive] = useState<number | null>(0);
    const [basePrices, setBasePrices] = useState<number>(0);
    const [discountPrice, setDiscountPrice] = useState<number>(0);
    const [discountPercentage, setDiscountPercentage] = useState<number>(0);
    const calculateDiscount = (price1: number, price2: number) => {
        return Number(((1-(price1 / price2)) * 100).toFixed(0));
    }
    const discountChange = (discount: number) => {
        setDiscountPercentage(discount);

        setDiscountPrice(Number(((basePrices) * (1 - (discount / 100))).toFixed(2)))
    }
    const basePriceChange = (basePrice: number) => {
        setBasePrices(basePrice);
        setDiscountPrice(Number(((basePrice) * (1 - (discountPercentage / 100))).toFixed(2)))
    }
    const onSave = async () => {
        const updateBody: BasePricePayload = {
            regularPrice: basePrices,
            discountPercentage: discountPercentage,
        };
        try {
            await updateBasePrice(bike.id, updateBody);
            
        } catch (error) {
            AlertMessage({
                type: "error",
                message: "Failed",
            });
        }
    };
    useEffect(() => {
        if (bike !== undefined) {

            let oob = JSON.parse(bike.discountPercentage)
            if (oob != null) {
                setTwo(oob.two)
                setThree(oob.three)
                setFour(oob.four)
                setFive(oob.five)
            }
            setBasePrices(bike.regularPrice);
            setDiscountPrice(bike.discountPrice);
            setDiscountPercentage(calculateDiscount(bike.discountPrice, bike.regularPrice))

        }
    }, [bike]); // Make sure to include dependencies for useEffect

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const obj = {
            "two": two,
            "three": three,
            "four": four,
            "five": five
        }
        await updateBikeDiscounts(bike.id, obj).then(async res => {
            await onSave().then(ress => {})
        }).catch(error => {
            AlertMessage({
                type: "error",
                message: "Failed",
            });
        })
    };

    return (
        <div>
            <FormCheckout onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <DivInputWrapper>
                            <TextField
                                className="text-input"
                                label="Base Price"
                                variant="outlined"
                                type="number"
                                value={basePrices}
                                onChange={(e) => { basePriceChange(Number(e.target.value)) }} // Example of handling input changes
                            />
                        </DivInputWrapper>
                    </Col>
                    <Col>
                        <DivInputWrapper>
                            <TextField
                                className="text-input"
                                label="Frontend Discount %"
                                variant="outlined"
                                type="number"
                                value={discountPercentage}
                                onChange={(e) => { discountChange(Number(e.target.value)) }} // Example of handling input changes
                            />
                        </DivInputWrapper>
                    </Col>
                    <Col>
                        <DivInputWrapper>
                            <TextField
                                inputProps={{ readOnly: true }}
                                className="text-input"
                                label="Frontend Discount Price"
                                variant="outlined"
                                type="number"
                                value={discountPrice}
                                onChange={(e) => { setDiscountPrice(Number(e.target.value)) }} // Example of handling input changes
                            />
                        </DivInputWrapper>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DivInputWrapper>
                            <TextField
                                className="text-input"
                                label="2 Day Discount %"
                                variant="outlined"
                                type="number"
                                value={two}
                                onChange={(e) => { setTwo(Number(e.target.value)) }} // Example of handling input changes
                            />
                        </DivInputWrapper>
                    </Col>
                    <Col>
                        <DivInputWrapper>
                            <TextField
                                className="text-input"
                                label="3 Day Discount %"
                                variant="outlined"
                                type="number"
                                value={three || 0}
                                onChange={(e) => { setThree(Number(e.target.value)) }} // Example of handling input changes
                            />
                        </DivInputWrapper>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DivInputWrapper>
                            <TextField
                                className="text-input"
                                label="4 Day Discount %"
                                variant="outlined"
                                type="number"
                                value={four || 0}
                                onChange={(e) => { setFour(Number(e.target.value)) }} // Example of handling input changes
                            />
                        </DivInputWrapper>
                    </Col>
                    <Col>
                        <DivInputWrapper>
                            <TextField
                                className="text-input"
                                label="5 Day Discount %"
                                variant="outlined"
                                type="number"
                                value={five || 0}
                                onChange={(e) => { setFive(Number(e.target.value)) }} // Example of handling input changes
                            />
                        </DivInputWrapper>
                    </Col>
                </Row>
                <ButtonSubmit>Save</ButtonSubmit>
            </FormCheckout>
        </div>
    );
};

export default BikeEditDiscounts;
