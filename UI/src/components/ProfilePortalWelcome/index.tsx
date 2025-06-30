import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "@/providers/UsersProvider";
import { UserContextType } from "@/providers/types";
import { updateMyUserInfo, updateUserInfo } from "@/apis/usersApis";
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
} from "./styles";
import { FormControl, InputLabel, TextField } from "@mui/material";

const ProfilePortalWelcome = () => {
  const { selectedUser } = useUser() as UserContextType;

  
  return (
    <MainDiv>
      <Row>
        <HeaderParagraph>
          Welcome <span style={{fontWeight:'900',color:'black'}}>{selectedUser?.firstName}</span> To Motorcycle Rentals
        </HeaderParagraph>
      </Row>
      
    </MainDiv>
  );
};

export default ProfilePortalWelcome;
