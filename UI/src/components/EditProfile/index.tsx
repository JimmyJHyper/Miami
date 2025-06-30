import React, { useEffect, useState } from "react";
import { useUser } from "@/providers/UsersProvider";
import { UserContextType } from "@/providers/types";
import { updateMyUserInfo } from "@/apis/usersApis";
import AlertMessage from "../Alerts/AlertMessage";
import {
  ButtonSubmit,
  Col,
  DivInputWrapper,
  HeaderParagraph,
  HeaderTitle,
  InputField,
  InputGroup,
  InputHeaderText,
  MainDiv,
  Row,
  ErrorDiv,
} from "./styles";

const EditProfile = () => {
  const { selectedUser } = useUser() as UserContextType;

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
  const [currentPassword, setCurrentPassword] = useState<string | null>(null);
  const [newPassword, setNewPassword] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (selectedUser !== undefined) {

      setFirstname(selectedUser.firstName);
      setLastname(selectedUser.lastName);
      setEmail(selectedUser.email);
      setPhoneNumber(selectedUser.phoneNumber);
      setDateOfBirth(selectedUser.dateOfBirth);
      setCountry(selectedUser.country);
      setState(selectedUser.state);
      setPostalCode(selectedUser.postalCode);
      setCity(selectedUser.city);
      setStreetAddress(selectedUser.streetAddress);
      setAptSuit(selectedUser.aptSuit);
    }
  }, [selectedUser]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    let errors: { [key: string]: string } = {};

    if (!firstname) errors.firstname = "First name is required";
    if (!lastname) errors.lastname = "Last name is required";
    if (!email) errors.email = "Email is required";
    if (!phoneNumber) errors.phoneNumber = "Phone number is required";
    if (!dateOfBirth) errors.dateOfBirth = "Date of birth is required";
    if (!country) errors.country = "Country is required";
    if (!state) errors.state = "State is required";
    if (!city) errors.city = "City is required";
    if (!postalCode) errors.postalCode = "Postal Code is required";

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
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
      password: newPassword,
      currentPassword: currentPassword,
    };
    await updateMyUserInfo(obj)
      .then((res) => {
        AlertMessage({
          type: "success",
          message: "Profile updated successfully!",
        });
      })
      .catch((error) => {
        AlertMessage({
          type: "error",
          message: "Failed to update profile.",
        });
      });
  };

  return (
    <MainDiv>
      <Row>
        <HeaderTitle>My Account</HeaderTitle>
      </Row>
      <Row>
        <HeaderParagraph>
          Edit your account details or change your password
        </HeaderParagraph>
      </Row>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <InputGroup>
              <InputHeaderText>First name *</InputHeaderText>
              <InputField
                className="text-input"
                type="text"
                value={firstname || ""}
                onChange={(e) => setFirstname(e.target.value)}
                required={true}
              />
              {errors.firstname && (
                <ErrorDiv>{errors.firstname}</ErrorDiv>
              )}
            </InputGroup>
          </Col>
          <Col>
            <InputGroup>
              <InputHeaderText>Last name *</InputHeaderText>
              <InputField
                className="text-input"
                type="text"
                value={lastname || ""}
                onChange={(e) => setLastname(e.target.value)}
                required={true}
              />
              {errors.lastname && (
                <ErrorDiv>{errors.lastname}</ErrorDiv>
              )}
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <InputGroup>
              <InputHeaderText>Email *</InputHeaderText>
              <InputField
                className="text-input"
                type="email"
                value={email || ""}
                onChange={(e) => setEmail(e.target.value)}
                required={true}
              />
              {errors.email && <ErrorDiv>{errors.email}</ErrorDiv>}
            </InputGroup>
          </Col>
          <Col>
            <InputGroup>
              <InputHeaderText>Phone number *</InputHeaderText>
              <InputField
                className="text-input"
                type="text"
                value={phoneNumber || ""}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required={true}
              />
              {errors.phoneNumber && (
                <ErrorDiv>{errors.phoneNumber}</ErrorDiv>
              )}
            </InputGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <InputGroup>
              <InputHeaderText>Date of birth *</InputHeaderText>
              <InputField
                className="text-input"
                type="date"
                value={dateOfBirth || ""}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required={true}
              />
              {errors.dateOfBirth && (
                <ErrorDiv>{errors.dateOfBirth}</ErrorDiv>
              )}
            </InputGroup>
          </Col>
          <Col>
            <InputGroup>
              <InputHeaderText>Country *</InputHeaderText>
              <InputField
                className="text-input"
                type="text"
                value={country || ""}
                onChange={(e) => setCountry(e.target.value)}
                required={true}
              />
              {errors.country && (
                <ErrorDiv>{errors.country}</ErrorDiv>
              )}
            </InputGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <InputGroup>
              <InputHeaderText>City *</InputHeaderText>
              <InputField
                className="text-input"
                type="text"
                value={city || ""}
                onChange={(e) => setCity(e.target.value)}
                required={true}
              />
              {errors.city && <ErrorDiv>{errors.city}</ErrorDiv>}
            </InputGroup>
          </Col>
          <Col>
            <InputGroup>
              <InputHeaderText>Street Address</InputHeaderText>
              <InputField
                className="text-input"
                type="text"
                value={streetAddress || ""}
                onChange={(e) => setStreetAddress(e.target.value)}
                required={false}
              />
            </InputGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <InputGroup>
              <InputHeaderText>State *</InputHeaderText>
              <InputField
                className="text-input"
                type="text"
                value={state || ""}
                onChange={(e) => setState(e.target.value)}
                required={true}
              />
              {errors.state && <ErrorDiv>{errors.state}</ErrorDiv>}
            </InputGroup>
          </Col>
          <Col>
            <InputGroup>
              <InputHeaderText>Postal Code *</InputHeaderText>
              <InputField
                className="text-input"
                type="text"
                value={postalCode || ""}
                onChange={(e) => setPostalCode(e.target.value)}
                required={true}
              />
              {errors.postalCode && (
                <ErrorDiv>{errors.postalCode}</ErrorDiv>
              )}
            </InputGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <InputGroup>
              <InputHeaderText>
                Current password (leave blank to leave unchanged)
              </InputHeaderText>
              <InputField
                className="text-input"
                type="password"
                autoComplete="off"
                value={currentPassword || ""}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required={false}
              />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup>
              <InputHeaderText>
                New password (leave blank to leave unchanged)
              </InputHeaderText>
              <InputField
                className="text-input"
                type="password"
                autoComplete="new-password"
                value={newPassword || ""}
                onChange={(e) => setNewPassword(e.target.value)}
                required={false}
              />
            </InputGroup>
          </Col>
        </Row>

        <ButtonSubmit type="submit">Update</ButtonSubmit>
      </form>
    </MainDiv>
  );
};

export default EditProfile;
