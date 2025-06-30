import React, { useEffect } from "react";
import {
  ButtonContinue,
  DivBookingBarContainer,
  DivButtonWrapper,
  DivPrice,
} from "./styles";
import { Bike } from "@/types";
import Router from "next/router";
import { useBooking } from "@/providers/BookingProvider";
import { BookingContextType, UserContextType } from "@/providers/types";
import { useUser } from "@/providers/UsersProvider";

type Props = {
  bike: Bike | undefined;
};

function BookingBar({ bike }: Props) {
  const { setToken, token } = useUser() as UserContextType;
  const { initializeBooking } = useBooking() as BookingContextType;
  let shouldRegister: boolean = false;
 const checkTokenHere = () => {
    if (token != undefined) {
      shouldRegister = false;
    } else {
      shouldRegister = true;
    }
  };

  const bookingLink = `/booking?bikeId=${bike?.id}`;
  const onContinue = () => {
    checkTokenHere();
    if (shouldRegister == true) {
      let bikeIdS = bike?.id;
      localStorage.setItem("bikeId", bikeIdS ? bikeIdS!.toString() : "");
      Router.push('/login')
    } else {
      Router.push(bookingLink);
      initializeBooking();
    }
  };

  return (
    <DivBookingBarContainer>
      <DivPrice>${bike?.discountPrice.toFixed(2)}/Day</DivPrice>
      <DivButtonWrapper>
        <ButtonContinue onClick={onContinue}>Continue</ButtonContinue>
      </DivButtonWrapper>
    </DivBookingBarContainer>
  );
}

export default BookingBar;
