import React, { useEffect, useState } from "react";
import RegisterVerifyEmail from "../BookingWizard/RegisterVerifyEmail";
import { verifyEmail } from "@/apis/usersApis";
import BookingProgressBar from "../BookingWizard/BookingProgressBar";
import { Box } from "@mui/material";
import { DivFormWrapper } from "../BookingWizard/common/styles";
import Link from "next/link";

const EmailVerificationPage = ({ email }: { email: string }) => {
  const [page, setPage] = useState(1);

  const verify = async (code: string) => {
    let res = await verifyEmail({
      email: email,
      otpCode: code,
    });
    if (res.isVerified == true) {
      setPage(2);
    }
  };

  return (
    <>
      <BookingProgressBar
        percent={(page / 2) * 100}
        bikeName={"Please Verify your email"}
      />
      <div style={{ marginTop: "5rem" }}></div>
      <DivFormWrapper>
        {page == 1 ? (
          <Box component="form">
            <RegisterVerifyEmail
              email={email}
              callback={verify}
            ></RegisterVerifyEmail>
          </Box>
        ) : (
          <div>
            <h1>Thank you for verifying your email</h1>

            <h3>
              <Link
                href="/login"
                className="next-btn"
                style={{ textAlign: "center" }}
              >
                Click here to login
              </Link>
            </h3>
          </div>
        )}
      </DivFormWrapper>
    </>
  );
};

export default EmailVerificationPage;
