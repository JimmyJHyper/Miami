import React, { useEffect } from "react";

import {
  ContainerDiv,
  H2Header,
  LeftDiv,
  PParagraph,
  RightDiv,
  SeperatedDiv,
  ClickButton,
  InputHeaderText,
  InputField,
  InputGroup,
  RememberMeDiv,
  RememberLabel,
  ForgotPasswordButton,
  AgreeingText,
  DivActionBarContainer,
} from "./styles";
import LoginComponent from "./loginComponent";
import { useRouter } from "next/router";
import { useUser } from "@/providers/UsersProvider";
import { UserContextType } from "@/providers/types";
import noAuth from "@/hocs/noAuth";
import { Button } from "@mui/material";

const LoginPage = () => {
  const router = useRouter();
  const { token } = useUser() as UserContextType;

  const signup = () => {
    router.push("/signup");
  };
  return (
    <SeperatedDiv>
      <LeftDiv>
        <ContainerDiv>
          <H2Header>New Rider</H2Header>
          {/* <PParagraph>
            Create new account and you will have an opportunity to crate an
            account at the end if one does not already exist for you
          </PParagraph> */}
          <DivActionBarContainer>
            <Button onClick={signup} className="next-btn" variant="contained">
              Continue as New Rider
            </Button>
          </DivActionBarContainer>
        </ContainerDiv>
      </LeftDiv>

      <RightDiv>
        <LoginComponent />
      </RightDiv>
    </SeperatedDiv>
  );
};

export default noAuth(LoginPage);
