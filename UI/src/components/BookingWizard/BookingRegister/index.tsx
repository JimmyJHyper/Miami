import React, { ChangeEvent, useEffect, useState } from "react";
import { Box, Button, SelectChangeEvent, TextField } from "@mui/material";
import SelectInput from "@/components/common/SelectInput";
import {
  countryOptions,
  dayOptions,
  monthOptions,
  yearOptions,
} from "@/constants/options";
import { DivFormWrapper, DivInputWrapper, PLabel } from "../common/styles";
import { useBooking } from "@/providers/BookingProvider";
import { BookingContextType, UserContextType } from "@/providers/types";
import { RegisterValues, UserResponse } from "@/types";
import { PErrorMsg, PTitle, SubmitButton } from "./styles";
import {
  requestEmailVerification,
  userLogin,
  userRegister,
  verifyEmail,
} from "@/apis/usersApis";
import { UserRegisterResponse } from "@/types/admin/admin";
import EmailVerificationModal from "@/components/EmailVerificationModal/emailVerificationModal";
import { useUser } from "@/providers/UsersProvider";
import { useRouter } from "next/router";
import AlertMessage from "@/components/Alerts/AlertMessage";
import { DivActionBarContainer } from "../ActionBar/styles";
import BookingProgressBar from "../BookingProgressBar";
import RegisterVerifyEmail from "../RegisterVerifyEmail";
import Link from "next/link";
import { PDescription } from "../BikeInsuranceTable/styles";

function BookingRegister({ isRegister = true }) {
  const {
    registerValues,
    setRegisterValues,
    registerErrors,
    validateRegisterValues,
    setIsVerified,
    validateBirthday,
    birthdayError,
    validateAll,
    hasRegisterError,
    setRegisterErrors,
  } = useBooking() as BookingContextType;
  const { setToken } = useUser() as UserContextType;
  const router = useRouter();
  const [error, setError] = useState("");
  const [emailExistsError, setEmailExistsError] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    validateBirthday();
  }, [registerValues]);
  const logi = () => {
    userLogin({
      username: registerValues.email,
      password: registerValues.password,
    })
      .then((isLogged) => {
        if (isLogged == true) {
          setToken(localStorage.getItem("SESSION_ID") ?? undefined);
          let bikeId = localStorage.getItem("bikeId");
          if (bikeId != "" && bikeId != undefined && bikeId != null) {
            localStorage.removeItem("bikeId");
            router.push(`/booking?bikeId=${bikeId}`);
          } else {
            setPage(3);
          }
        }
      })
      .catch((error) => {
        setError(error);
      });
  };
  const handleInputChange = (
    e:
      | ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      | SelectChangeEvent<string | number>
  ) => {
    const { name, value } = e.target;
    let newValues: Record<string, string | number> = { ...registerValues };
    newValues[name] = value as string;
    setRegisterValues(newValues as unknown as RegisterValues);
    validateRegisterValues(name, value as string);
    setIsVerified(false);
  };

  const register = async () => {
    validateAll();
    validateBirthday();
    setEmailExistsError("");
    if (isRegister == true && !hasRegisterError() && birthdayError == "") {
      userRegister({
        firstName: registerValues.firstName,
        lastName: registerValues.lastName,
        phoneNumber: registerValues.phoneNumber,
        email: registerValues.email,
        password: registerValues.password,
        dateOfBirth: `${registerValues.year}-${registerValues.month}-${registerValues.day}`,
        country: registerValues.country,
        city: registerValues.city,
        streetAddress: registerValues.streetAddress,
        aptSuite: registerValues.aptSuite,
        state: registerValues.state,
        postalCode: registerValues.postalCode,
      }).then(async (data: UserRegisterResponse) => {
        if (data.isExistingCustomer == true) {
          setRegisterErrors({
            email: "Email already exists",
          });
          setEmailExistsError("1");
          return;
        }
        if (data.user.isVerified == false) {
          requestEmailVerification(registerValues.email).then((ver) => {
            setPage(2);
          });
        }
      });
    }
  };

  const verifyEmailClicked = async (code: string) => {
    let res = await verifyEmail({
      email: registerValues.email,
      otpCode: code,
    });
    if (res.isVerified == true) {
      logi();
    }
  };

  return (
    <>
      <BookingProgressBar
        percent={(page / 3) * 100}
        bikeName={
          isRegister == true ? "Register As New Rider" : "Register for booking"
        }
      />
      {page === 3 ? (
        <PTitle>Thank You For Registering As New Rider</PTitle>
      ) : null}

      {page === 1 ? (
        <div style={{ marginTop: "4rem" }}>
          <DivFormWrapper>
            <Box component="form">
              <PLabel>Rider Details</PLabel>
              <DivInputWrapper>
                <TextField
                  className="text-input"
                  label="First Name"
                  name="firstName"
                  variant="outlined"
                  required
                  value={registerValues?.firstName || ""}
                  onChange={handleInputChange}
                  error={Boolean(registerErrors.firstName)}
                  helperText={registerErrors.firstName}
                />
                <TextField
                  className="text-input"
                  label="Last Name"
                  name="lastName"
                  variant="outlined"
                  required
                  value={registerValues?.lastName || ""}
                  onChange={handleInputChange}
                  error={Boolean(registerErrors.lastName)}
                  helperText={registerErrors.lastName}
                />
              </DivInputWrapper>
              <DivInputWrapper>
                <TextField
                  className="text-input"
                  label="Email"
                  type="email"
                  name="email"
                  variant="outlined"
                  required
                  value={registerValues?.email || ""}
                  onChange={handleInputChange}
                  error={Boolean(registerErrors.email)}
                  helperText={
                    registerErrors.email
                      ? registerErrors.email
                      : "We will send a verification code on your email to verify it"
                  }
                />
              </DivInputWrapper>
              <DivInputWrapper>
                <TextField
                  className="text-input"
                  label="Password"
                  type="password"
                  name="password"
                  variant="outlined"
                  required
                  value={registerValues?.password || ""}
                  onChange={handleInputChange}
                  error={Boolean(registerErrors.password)}
                  helperText={
                    registerErrors.password ? registerErrors.email : ""
                  }
                />
              </DivInputWrapper>
              <DivInputWrapper>
                <TextField
                  className="text-input"
                  label="Phone Number"
                  name="phoneNumber"
                  variant="outlined"
                  required
                  value={registerValues?.phoneNumber || ""}
                  onChange={handleInputChange}
                  error={Boolean(registerErrors.phoneNumber)}
                  helperText={registerErrors.phoneNumber}
                />
              </DivInputWrapper>
              <PLabel>Date of Birth</PLabel>
              <DivInputWrapper>
                <SelectInput
                  className="text-input"
                  label="Month"
                  name="month"
                  value={registerValues?.month}
                  onChange={handleInputChange}
                  options={monthOptions}
                  error={Boolean(registerErrors.month)}
                  helperText={registerErrors.month}
                />
                <SelectInput
                  className="text-input"
                  label="Day"
                  name="day"
                  value={registerValues?.day}
                  onChange={handleInputChange}
                  options={dayOptions}
                  error={Boolean(registerErrors.day)}
                  helperText={registerErrors.day}
                />
                <SelectInput
                  className="text-input"
                  label="Year"
                  name="year"
                  value={registerValues?.year}
                  onChange={handleInputChange}
                  options={yearOptions}
                  error={Boolean(registerErrors.year)}
                  helperText={registerErrors.year}
                />
              </DivInputWrapper>
              <PErrorMsg>{birthdayError}</PErrorMsg>
              <PLabel>Home Address</PLabel>
              <DivInputWrapper>
                <SelectInput
                  className="text-input"
                  label="Country"
                  name="country"
                  value={registerValues?.country}
                  onChange={handleInputChange}
                  options={countryOptions}
                  error={Boolean(registerErrors.country)}
                  helperText={registerErrors.country}
                />
              </DivInputWrapper>

              <DivInputWrapper>
                <TextField
                  className="text-input"
                  label="Street Address"
                  name="streetAddress"
                  variant="outlined"
                  required
                  value={registerValues?.streetAddress || ""}
                  onChange={handleInputChange}
                  error={Boolean(registerErrors.streetAddress)}
                  helperText={registerErrors.streetAddress}
                />
                <TextField
                  className="text-input"
                  label="Apt.Suite (Optional)"
                  name="aptSuite"
                  variant="outlined"
                  value={registerValues?.aptSuite || ""}
                  onChange={handleInputChange}
                />
              </DivInputWrapper>
              <DivInputWrapper>
                <TextField
                  className="text-input"
                  label="City"
                  name="city"
                  variant="outlined"
                  required
                  value={registerValues?.city || ""}
                  onChange={handleInputChange}
                  error={Boolean(registerErrors.city)}
                  helperText={registerErrors.city}
                />
              </DivInputWrapper>
              <DivInputWrapper>
                <TextField
                  className="text-input"
                  label="State"
                  name="state"
                  variant="outlined"
                  value={registerValues?.state || ""}
                  onChange={handleInputChange}
                />
                <TextField
                  className="text-input"
                  label="Postal Code"
                  name="postalCode"
                  variant="outlined"
                  value={registerValues?.postalCode || ""}
                  onChange={handleInputChange}
                />
              </DivInputWrapper>
              {emailExistsError != "" ? (
                <PLabel style={{ color: "red" }}>
                  A rider with this email already exists, please{" "}
                  <Link href="/login" style={{ color: "blue" }}>
                    login
                  </Link>{" "}
                  or{" "}
                  <Link href="/forgotpassword" style={{ color: "blue" }}>
                    reset password
                  </Link>
                </PLabel>
              ) : null}
            </Box>
          </DivFormWrapper>
        </div>
      ) : null}
      {page === 2 ? (
        <RegisterVerifyEmail
          email={registerValues.email}
          callback={verifyEmailClicked}
        />
      ) : null}

      <DivActionBarContainer>
        {isRegister == true && page === 1 ? (
          <Button onClick={register} className="next-btn" variant="contained">
            Submit
          </Button>
        ) : null}
        {isRegister == true && page === 3 ? (
          <Button
            onClick={() => {
              router.push("/profile");
            }}
            className="next-btn"
            variant="contained"
          >
            Click here to view your portal
          </Button>
        ) : null}
      </DivActionBarContainer>
    </>
  );
}

export default BookingRegister;
