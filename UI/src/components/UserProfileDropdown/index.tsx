import React, { useState, useEffect } from "react";
import {
  DivNavDropdownContainer,
  DropDownBtn,
  DropdownItem,
  DropdownList,
} from "./styles";
import Link from "next/link";
import { useUser } from "@/providers/UsersProvider";
import { UserContextType } from "@/providers/types";
import { useRouter } from "next/router";

function UserProfileNav() {
  const { token, setToken, setSelectedUserId } = useUser() as UserContextType;
  const router = useRouter();

  const logout = () => {
    localStorage.clear();
    setToken(undefined);
    setSelectedUserId(0);
    router.push("/");
  };

  const profile = () => {
    router.push("/profile");
  };
  return (
    <>
      {token != undefined ? (
        <DivNavDropdownContainer>
          <DropDownBtn></DropDownBtn>
          <DropdownList>
            <DropdownItem onClick={profile}>Profile</DropdownItem>
            <DropdownItem onClick={logout}>Logout</DropdownItem>
          </DropdownList>
        </DivNavDropdownContainer>
      ) : (
        <Link href="/login">
          <span>Login</span>
        </Link>
      )}
    </>
  );
}

export default UserProfileNav;
