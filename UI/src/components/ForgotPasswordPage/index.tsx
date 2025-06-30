import React, { useEffect, useState } from "react";
import {
  confirmForgetPassword,
  requestCodeVerification,
  requestEmailVerification,
} from "@/apis/usersApis";
import BookingProgressBar from "../BookingWizard/BookingProgressBar";
import { Box, Button, TextField } from "@mui/material";

import { DivActionBarContainer } from "../BookingWizard/ActionBar/styles";
import { DivFormWrapper } from "@/components/BookingWizard/common/styles";
import {
  ButtonResend,
  FormWrapper,
  PDescription,
} from "../BookingWizard/RegisterVerifyEmail/styles";
import { ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/router";
import Link from "next/link";
import { useBooking } from "@/providers/BookingProvider";
import { BookingContextType } from "@/providers/types";
import { ButtonSubmit, PTitle, RouteButton } from "./styles";
const ForgotPasswordPage = () => {
  const { resendCodeSuccess } = useBooking() as BookingContextType;
  const [resendCounter, setResendCounter] = useState(0);
  const disableResend = Boolean(resendCodeSuccess && resendCounter);
  useEffect(() => {
    const timerId =
      resendCounter > 0
        ? setInterval(() => setResendCounter(resendCounter - 1), 1000)
        : "";
    return () => clearInterval(timerId);
  }, [resendCounter]);
  const onResendCode = async () => {
    setResendCounter(60);
    await requestEmailVerification(email);
  };
  const router = useRouter();

  const [page, setPage] = useState(1);
  const [email, setEmail] = useState("");
  const [pageMessage, setPageMessage] = useState("Please Verify Your Email");
  const [emailError, setEmailError] = useState(false);
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const emailInputHandler = (m: string) => {
    setEmail(m);
  };
  const codeInputHandler = (m: string) => {
    setCode(m);
  };
  const passwordInputHandler = (m: string) => {
    setPassword(m);
  };

  const login = () => {
    router.push("/login");
  };

  const onBack = () => {
    setPage(1);
  };

  const sendCode = async () => {
    setErrorMessage("");
    try {
      if (email == "") {
        setEmailError(true);
        return;
      }
      requestEmailVerification(email);
      setPage(2);
    } catch (error) {
      setErrorMessage("Could not resend verification code.");
    }
  };

  const verifyCode = async () => {
    setErrorMessage("");
    try {
      if (code == "") {
        setCodeError(true);
        return;
      }
      let res = await requestCodeVerification(email, code);
      if (res.data == true) {
        setPage(3);
      } else {
        setErrorMessage("Code not valid.");
      }
    } catch (error) {
      setErrorMessage("Code error.");
    }
  };
  const resetPassword = async () => {
    if (password == "") {
      setPasswordError(true);
      return;
    }
    let res = await confirmForgetPassword(email, code, password);
    if (res.data) {
      if (res.data === true && res.status === 200) {
        setPageMessage("You have succesfully updated your password")
        setPage(4);
      } else {
        setErrorMessage("Email or Code not valid.");
      }
    } else if (res.statusCode && res.statusCode === 400 && res.message) {
      setErrorMessage("Error Happened...");
    } else {
      setErrorMessage("Error Happened...");
    }
  };
  return (
    <>
      <BookingProgressBar
        percent={(page / 4) * 100}
        bikeName={"Reset Password"}
      />
      <PTitle>{pageMessage}</PTitle>
      <DivFormWrapper>
        <p>{errorMessage}</p>
        {page === 1 ? (
          <Box component="form">
            <PDescription>Please Enter Your Email.</PDescription>

            <FormWrapper>
              <TextField
                className="form-field"
                label="Type email"
                variant="outlined"
                error={emailError}
                value={email}
                onChange={(e) => emailInputHandler(e.target.value)}
                helperText={"Email required"}
              />
              <ButtonSubmit onClick={sendCode} className="next-btn">
                Continue
              </ButtonSubmit>
            </FormWrapper>
          </Box>
        ) : null}
        {page === 2 ? (
          <Box component="form">
            <PDescription>
              A 4-digit verification code has been sent to your email {email}.
              to verify, please enter the code below.
            </PDescription>

            <FormWrapper>
              <TextField
                className="form-field"
                label="Enter email code"
                variant="outlined"
                required
                error={codeError}
                value={code}
                onChange={(e) => codeInputHandler(e.target.value)}
                helperText={"Code required"}
              />

              <ButtonSubmit type="button" onClick={verifyCode} className="next-btn">
                Submit
              </ButtonSubmit>
              <ButtonResend
                type="button"
                disabled={disableResend}
                className="form-field"
                onClick={onResendCode}
              >
                Resend Code {disableResend ? `(${resendCounter})` : ""}
              </ButtonResend>
            </FormWrapper>
          </Box>
        ) : null}
        {page === 3 ? (
          <Box component="form">
            <FormWrapper>
              <TextField
                type="password"
                className="form-field"
                label="Enter new password"
                variant="outlined"
                
                error={passwordError}
                value={password}
                onChange={(e) => passwordInputHandler(e.target.value)}
                helperText={"Enter new password"}
              />
              <ButtonSubmit type="button" onClick={resetPassword} className="next-btn">
                Reset Password
              </ButtonSubmit>
            </FormWrapper>
          </Box>
        ) : null}
        {page === 4 ? (
          <Box component="form">
            
            <FormWrapper>
              <RouteButton type="button" href="/login" className="next-btn">
                Login
              </RouteButton>
            </FormWrapper>
          </Box>
        ) : null}
      </DivFormWrapper>
      <DivActionBarContainer>
        {page === 2 ? (
          <div>
            <Button
              onClick={onBack}
              className="back-btn"
              variant="outlined"
              startIcon={<ArrowBack />}
            >
              Back
            </Button>
          </div>
        ) : null}
      </DivActionBarContainer>
    </>
  );
};

export default ForgotPasswordPage;
