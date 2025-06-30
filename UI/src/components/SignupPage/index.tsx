import React, { useEffect } from "react";

import { useRouter } from "next/router";
import { useUser } from "@/providers/UsersProvider";
import { UserContextType } from "@/providers/types";
import BookingRegister from "../BookingWizard/BookingRegister";
import noAuth from "@/hocs/noAuth";

const SignupPage = () => {
    const router  = useRouter();
   
  return (
    <BookingRegister />
  );
};

export default noAuth(SignupPage);
