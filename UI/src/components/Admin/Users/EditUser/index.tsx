import Link from "next/link";
import {
  Row,
  Col,
  DivInputWrapper,
  FormCheckout,
  ButtonSubmit,
} from "./styles";
import { TextField } from "@mui/material";
import { useState, useEffect, use } from "react";
import { PLabel } from "../styles";
import SelectInput from "@/components/common/SelectInput";
import { Bike, BikeType, Brand, MediaItem, Options } from "@/types";
import QuillEditor from "@/components/BookingWizard/common/RichTextEditor";
import RichTextEditor from "@/components/BookingWizard/common/RichTextEditor";
import BikeCarouselChooser from "@/components/BikeCarouselChooser";
import { updateBikeInfo, updateBikeMainImage } from "@/apis/adminApis";
import AlertMessage from "@/components/Alerts/AlertMessage";
import ImageUploader from "@/components/ImageUploader/ImageUploader";
import { User } from "@/types/admin/admin";
import { updateUserInfo } from "@/apis/usersApis";

interface UserTableProp {
  user?: User;
}

const UserEditDiv: React.FC<UserTableProp> = ({ user }) => {
  const encodeArray = (array: any) => {
    if (typeof array !== "string" && array != null) {
      let high = "<ul>";
      array.forEach((element: string) => {
        high += `<li>${element}</li>\n`;
      });
      high += "</ul>";
      return high;
    }
    return array;
  };

  const [firstname, setFirstname] = useState<string | null>(null);
  const [lastname, setLastname] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
  const [dateOfBirth, setDateOfBirth] = useState<string | null>(null);
  const [country, setCountry] = useState<string | null>(null);
  const [state, setState] = useState<string | null>(null);
  const [postalCode, setPostalCode] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [streetAddress, setStreetAddress] = useState<string | null>(null);
  const [aptSuit, setAptSuit] = useState<string | null>(null);

  useEffect(() => {
    if (user !== undefined) {
      setFirstname(user.firstName);
      setLastname(user.lastName);
      setEmail(user.email);
      setPhoneNumber(user.phoneNumber);
      setDateOfBirth(user.dateOfBirth);
      setCountry(user.country);
      setState(user.state);
      setPostalCode(user.postalCode);
      setCity(user.city);
      setStreetAddress(user.streetAddress);
      setAptSuit(user.aptSuit);
    }
  }, [user]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const obj = {
      firstName: firstname,
      lastName: lastname,
      email: email,
      phoneNumber: phoneNumber,
      dateOfBirth: dateOfBirth,
      country: country,
      state: state,
      postalCode: postalCode,
      city: city,
      streetAddress: streetAddress,
      aptSuite: aptSuit,
    };
    await updateUserInfo(user?.id ?? -1, obj)
      .then((res) => {})
      .catch((error) => {
        AlertMessage({
          type: "error",
          message: "Failed",
        });
      });
  };

  return (
    <FormCheckout onSubmit={handleSubmit}>
      <Row>
        <Col>
          <DivInputWrapper>
            <TextField
              className="text-input"
              label="Firstname"
              variant="outlined"
              type="text"
              value={firstname || ""}
              onChange={(e) => setFirstname(e.target.value)}
              required={true}
            />
          </DivInputWrapper>
        </Col>
        <Col>
          <DivInputWrapper>
            <TextField
              className="text-input"
              label="Lastname"
              variant="outlined"
              type="text"
              value={lastname || ""}
              onChange={(e) => setLastname(e.target.value)}
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
              label="Email"
              variant="outlined"
              type="email"
              value={email || ""}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required={true}
            />
          </DivInputWrapper>
        </Col>
        <Col>
          <DivInputWrapper>
            <TextField
              className="text-input"
              label="Phone Number"
              variant="outlined"
              type="text"
              value={phoneNumber || ""}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
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
              label="Date Of Birth"
              variant="outlined"
              type="date"
              value={dateOfBirth || ""}
              onChange={(e) => {
                setDateOfBirth(e.target.value);
              }}
              required={true}
            />
          </DivInputWrapper>
        </Col>
        <Col>
          <DivInputWrapper>
            <TextField
              className="text-input"
              label="Country"
              variant="outlined"
              type="text"
              value={country || ""}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
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
              label="City"
              variant="outlined"
              type="text"
              value={city || ""}
              onChange={(e) => {
                setCity(e.target.value);
              }}
              required={true}
            />
          </DivInputWrapper>
        </Col>
        <Col>
          <DivInputWrapper>
            <TextField
              className="text-input"
              label="Street Address"
              variant="outlined"
              type="text"
              value={streetAddress || ""}
              onChange={(e) => {
                setStreetAddress(e.target.value);
              }}
              required={false}
            />
          </DivInputWrapper>
        </Col>

        {/* <Col>
          <DivInputWrapper>
            <TextField
              className="text-input"
              label="Apt Suit"
              variant="outlined"
              type="text"
              value={aptSuit || ""}
              onChange={(e) => {
                setAptSuit(e.target.value);
              }}
              required={false}
            />
          </DivInputWrapper>
        </Col> */}
      </Row>

      <Row>
        <Col>
          <DivInputWrapper>
            <TextField
              className="text-input"
              label="State"
              variant="outlined"
              type="text"
              value={state || ""}
              onChange={(e) => {
                setState(e.target.value);
              }}
              required={true}
            />
          </DivInputWrapper>
        </Col>
        <Col>
          <DivInputWrapper>
            <TextField
              className="text-input"
              label="Postal Code"
              variant="outlined"
              type="text"
              value={postalCode || ""}
              onChange={(e) => {
                setPostalCode(e.target.value);
              }}
              required={false}
            />
          </DivInputWrapper>
        </Col>
      </Row>
      <ButtonSubmit>Update</ButtonSubmit>
    </FormCheckout>
  );
};

export default UserEditDiv;
