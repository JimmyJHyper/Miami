import React from "react";
import { NextSeo } from "next-seo";
import { DivHeaderWrapper, H1Title } from "./styles";
import NavBar from "../NavBar";
import NotificationBar from "../NotificationBar";

function RentalBanner() {

  return (
    <>

      <DivHeaderWrapper>
        <H1Title>Motorcycle Rentals In Miami</H1Title>
      </DivHeaderWrapper>
      <NotificationBar />
      <NavBar nextLinks={["Motorcycle Rental"]} />
    </>
  );
}

export default RentalBanner;
