import { TextField } from "@mui/material";
import React, { useState } from "react";
import {
  ButtonLogin,
  DivInputWrapper,
  DivLoginFormContainer,
  H3Title,
  PDescription,
  PError,
} from "./styles";
import { loginApi } from "@/apis/adminApis";
import Router from "next/router";
import { useMarketing } from "@/providers/MarketingProvider";
import { MarketingContextType } from "@/providers/types";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { selectedBikeId } = useMarketing() as MarketingContextType;
  const onLogin = () => {
    loginApi({ username, password })
      .then((res) => {
        if (
          res.data.userDetails.isVerified &&
          res.data.userDetails.role === "administrator"
        ) {
          localStorage.setItem("SESSION_ID", res.data.token);
          Router.push(`/admin/bikes`);
        } else {
          setError("Incorrect UserInfo provided.");
          localStorage.clear();
        }
      })
      .catch((err) => {
        setError(err.message);
        localStorage.clear();
      });
  };

  return (
    <DivLoginFormContainer>
      <H3Title>Login</H3Title>
      <PDescription>Enter email & password to login</PDescription>

      <DivInputWrapper>
        <TextField
          className="text-input"
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </DivInputWrapper>
      <DivInputWrapper>
        <TextField
          className="text-input"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </DivInputWrapper>

      {error ? <PError>{error}</PError> : null}

      <ButtonLogin onClick={onLogin}>Login</ButtonLogin>
    </DivLoginFormContainer>
  );
}

export default LoginForm;
