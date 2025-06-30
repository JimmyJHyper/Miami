import React, { useEffect, useState } from "react";
import { DivFormWrapper, PTitle } from "../common/styles";
import {
  ButtonResend,
  ButtonSubmit,
  FormWrapper,
  PDescription,
} from "./styles";
import { TextField } from "@mui/material";
import { useBooking } from "@/providers/BookingProvider";
import { BookingContextType } from "@/providers/types";
import { VerifyOrderPayload } from "@/types";

function VerifyEmail() {
  const {
    verifyOrder,
    registerValues,
    orderId,
    resendCode,
    verifyCodeError,
    setVerifyCodeError,
    resendCodeSuccess,
  } = useBooking() as BookingContextType;
  const [emailCode, setEmailCode] = useState("");
  const [resendCounter, setResendCounter] = useState(0);
  const disableResend = Boolean(resendCodeSuccess && resendCounter);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timerId =
      resendCounter > 0
        ? setInterval(() => setResendCounter(resendCounter - 1), 1000)
        : "";
    return () => clearInterval(timerId);
  }, [resendCounter]);

  const validateCodeValue = (value: string) => {
    if (value === "") {
      setVerifyCodeError("Email code is required.");
      return true;
    }
    if (!Number(value)) {
      setVerifyCodeError(
        "Verification code should contain numeric numbers only."
      );
      return true;
    }
    if (String(value).length > 5) {
      setVerifyCodeError("The code should contain maximum of 5 digits.");
      return true;
    }
    if (String(value).length < 5) {
      setVerifyCodeError("The code should contain minimum of 5 digits.");
      return true;
    }
    setVerifyCodeError("");
    return false;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    let { value } = e.target;
    validateCodeValue(value);
    setEmailCode(value);
  };

  const onSubmit = () => {
    if (verifyCodeError) return;
    const requestBody: VerifyOrderPayload = {
      email: registerValues.email,
      verificationCode: emailCode as string,
    };
    // verifyOrder(requestBody, orderId);
  };

  const onResendCode = () => {
    setResendCounter(60);
    resendCode(orderId);
  };

  return (
    <>
      <PTitle>Please Verify Your Email</PTitle>
      <DivFormWrapper>
        <PDescription>
          A 5-digit verification code has been sent to your email{" "}
          {registerValues.email}. Please enter the code below to verify.
        </PDescription>

        <FormWrapper>
          <TextField
            className="form-field"
            label="Enter email code"
            variant="outlined"
            required
            error={Boolean(verifyCodeError)}
            value={emailCode}
            onChange={handleChange}
            helperText={verifyCodeError}
          />
          <ButtonSubmit className="form-field" onClick={onSubmit}>
            Submit
          </ButtonSubmit>
          <ButtonResend
            disabled={disableResend}
            className="form-field"
            onClick={onResendCode}
          >
            Resend Code {disableResend ? `(${resendCounter})` : ""}
          </ButtonResend>
        </FormWrapper>
      </DivFormWrapper>
    </>
  );
}

export default VerifyEmail;
