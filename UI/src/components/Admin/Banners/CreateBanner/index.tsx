import {
  Row,
  Col,
  DivInputWrapper,
  FormCheckout,
  ButtonSubmit,
} from "./styles";
import { Input, TextField } from "@mui/material";
import { useEffect, useState } from "react";

import AlertMessage from "@/components/Alerts/AlertMessage";
import { createBanner } from "@/apis/bannersApis";
import { PLabel } from "../styles";
import SelectInput from "@/components/common/SelectInput";
import { getBannerPositions } from "@/constants/banners-positions";
import { useBanner } from "@/providers/BannersProvider";
import { BannerContextType } from "@/providers/types";
import { Options } from "@/types";

const BannercreateDiv = () => {
  const { usedPositions } = useBanner() as BannerContextType;

  const [title, setTitle] = useState<string | null>(null);
  const [altText, setAltText] = useState<string | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [imgUrl, setImgUrl] = useState<string>("");
  const [image, setImage] = useState<File | undefined>(undefined);
  const [imgSmallUrl, setImgSmallUrl] = useState<string>("");
  const [imageSmall, setImageSmall] = useState<File | undefined>(undefined);
  const [selectedPositions, setSelectedPositions] = useState<any>([]);
  let [positions, setPositions] = useState<Options[]>([]);

  useEffect(() => {
    if (usedPositions) setPositions(getBannerPositions(usedPositions));
  }, [usedPositions]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    let pos = JSON.stringify(selectedPositions);

    const obj = {
      title,
      altText,
      url,
      positions: pos,
      isEnabled: false,
    };
    await createBanner(obj, image, imageSmall)
      .then(() => {
        AlertMessage({ type: "success", message: "Done" });
      })
      .catch(() => {
        AlertMessage({ type: "error", message: "Failed" });
      });
  };

  const fileChoosed = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setImage(file);
    if (!file.type.startsWith("image/")) {
      AlertMessage({
        type: "error",
        message: "Please select a valid image file.",
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setImgUrl(e.target?.result as string);
    };

    reader.readAsDataURL(file);
  };

  const fileSmallChoosed = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setImageSmall(file);
    if (!file.type.startsWith("image/")) {
      AlertMessage({
        type: "error",
        message: "Please select a valid image file.",
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setImgSmallUrl(e.target?.result as string);
    };

    reader.readAsDataURL(file);
  };

  return (
    <FormCheckout onSubmit={handleSubmit}>
      <div>
        <Input type="file" onChange={fileChoosed} style={{ width: "20%" }} />
        {imgUrl && (
          <div style={{ width: "70%", height: "300px" }}>
            <img
              src={imgUrl}
              alt="Preview"
              style={{ width: "1080px", height: "180px" }}
            />
          </div>
        )}
      </div>
      {/* <Row>
        {imgMediumUrl && (
          <img
            src={imgMediumUrl}
            alt="Preview"
            style={{ width: "70%", height: "300px" }}
          />
        )}
        <Input
          type="file"
          onChange={fileMediumChoosed}
          style={{ width: "20%" }}
        />
      </Row> */}
      <div>
        <Input
          type="file"
          onChange={fileSmallChoosed}
          style={{ width: "20%" }}
        />
        {imgSmallUrl && (
          <div style={{ width: "70%", height: "300px" }}>
            <img
              src={imgSmallUrl}
              alt="Preview"
              style={{ width: "320px", height: "120px" }}
            />
          </div>
        )}
      </div>
      <Row>
        <Col>
          <DivInputWrapper>
            <TextField
              className="text-input"
              label="Title"
              variant="outlined"
              type="text"
              value={title || ""}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </DivInputWrapper>
        </Col>
        <Col>
          <DivInputWrapper>
            <TextField
              className="text-input"
              label="Alt Text"
              variant="outlined"
              type="text"
              value={altText || ""}
              onChange={(e) => setAltText(e.target.value)}
              required
            />
          </DivInputWrapper>
        </Col>
      </Row>
      <Row>
        <Col>
          <DivInputWrapper>
            <TextField
              className="text-input"
              label="URL"
              variant="outlined"
              type="text"
              value={url || ""}
              onChange={(e) => setUrl(e.target.value)}
            />
          </DivInputWrapper>
        </Col>
      </Row>
      <Row>
        <Col>
          <PLabel>Positions</PLabel>
          <DivInputWrapper>
            <SelectInput
              multiple={true}
              className="text-input"
              label="Select Position"
              name="relatedBikes[]"
              value={selectedPositions}
              autoWidth={true}
              fixedLeft={true}
              onChange={(e) => {
                setSelectedPositions(e.target.value);
              }}
              options={positions || []}
            />
          </DivInputWrapper>
        </Col>
      </Row>
      <ButtonSubmit>Create</ButtonSubmit>
    </FormCheckout>
  );
};

export default BannercreateDiv;
