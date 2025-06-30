import { useState } from "react";
import {
  AgreeingText,
  ClickButton,
  ContainerDiv,
  DivActionBarContainer,
  ErrorDiv,
  ForgotPasswordButton,
  H2Header,
  InputField,
  InputGroup,
  InputHeaderText,
  PParagraph,
  RememberLabel,
  RememberMeDiv,
} from "./styles";
import {
  requestEmailVerification,
  userLogin,
  verifyEmail,
} from "@/apis/usersApis";
import { Router, useRouter } from "next/router";
import { useUser } from "@/providers/UsersProvider";
import { UserContextType } from "@/providers/types";
import EmailVerificationModal from "../EmailVerificationModal/emailVerificationModal";
import ForgetPasswordModal from "../ForgetPasswordModal/forgetPasswordModal";
import { Button } from "@mui/material";

const LoginComponent = () => {
  const { setToken } = useUser() as UserContextType;
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const login = async () => {
    if (email.trim() == "" || password.trim() == "") {
      setError("Please Fill The required fields");
      return;
    }
    userLogin({
      username: email,
      password: password,
    }).then(async (isLogged) => {
      if (isLogged == true) {
        setToken(localStorage.getItem("SESSION_ID") ?? undefined);
        let bikeId = await localStorage.getItem("bikeId");

        if (bikeId != "" && bikeId != undefined && bikeId != null) {
          localStorage.removeItem("bikeId");
          router.push(`/booking?bikeId=${bikeId}`);
        } else {
          router.push("/profile");
        }
      } else if (
        isLogged != undefined &&
        isLogged.statusCode == 401 &&
        isLogged.message == "Email is not verified"
      ) {
        requestEmailVerification(email);
        localStorage.setItem("email", email);
        router.push("/emailverification");
      }
    });
  };

  const forgetPassword = () => {
    router.push('/forgotpassword')
  };
  return (
    <ContainerDiv>
      <H2Header>Returning Rider</H2Header>
      {/* <PParagraph>Sign in to speed up the checkout process.</PParagraph> */}
      <ErrorDiv>{error}</ErrorDiv>
      <InputGroup>
        <InputHeaderText>
          Email: <span>required</span>
        </InputHeaderText>
        <InputField
          type="email"
          value={email}
          onInput={(val) => setEmail(val.currentTarget.value)}
        />
      </InputGroup>

      <InputGroup>
        <InputHeaderText>
          Password: <span>required</span>
        </InputHeaderText>
        <InputField
          type="password"
          value={password}
          onInput={(val) => setPassword(val.currentTarget.value)}
        />
      </InputGroup>

      <RememberMeDiv>
        <InputGroup>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(val) => setRememberMe(val.currentTarget.checked)}
          />{" "}
          <RememberLabel htmlFor="">Remember me</RememberLabel>
        </InputGroup>
        <ForgotPasswordButton onClick={forgetPassword}>
          Forgot your password?
        </ForgotPasswordButton>
      </RememberMeDiv>
      <DivActionBarContainer>
        <Button onClick={login} className="next-btn" variant="contained">
          Sign In
        </Button>
      </DivActionBarContainer>
      <AgreeingText>
        By signing in, you are agreeing to our{" "}
        <span>
          <ForgotPasswordButton href="/terms-of-services" target="_blank">
            Terms of Use
          </ForgotPasswordButton>
        </span>{" "}
        and{" "}
        <span>
          <ForgotPasswordButton href="/privacy-policy" target="_blank">
            Privacy Policy
          </ForgotPasswordButton>
        </span>
        .
      </AgreeingText>
    </ContainerDiv>
  );
};

export default LoginComponent;
