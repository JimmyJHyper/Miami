import React, { SyntheticEvent, useEffect } from "react";
import { DivFormWrapper, Divider, PTitle } from "../common/styles";
import { Checkbox, FormControlLabel } from "@mui/material";
import { DivCheckBoxBar, PDescription, PSubTitle, SpanPrice } from "./styles";
import { addonCategories } from "@/constants/options";
import { GearTypes, RentalDetails } from "@/types";
import { useBooking } from "@/providers/BookingProvider";
import { BookingContextType } from "@/providers/types";

function SelectGearAccessory() {
  const { rentalDetails, setRentalDetails } =
    useBooking() as BookingContextType;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCheckAddon = (
    e: SyntheticEvent<Element, Event>,
    gearType: GearTypes
  ) => {
    const { checked } = e.target as HTMLInputElement;
    let newValues: RentalDetails = Object.assign(rentalDetails);

    newValues.addOns = newValues.addOns.filter((item) => item !== gearType);
    if (checked) {
      newValues.addOns.push(gearType);
    }

    setRentalDetails((prev) => ({ ...prev, ...newValues }));
  };

  return (
    <>
      <PTitle>Select Gear & Accessory Add-ons</PTitle>
      <DivFormWrapper>
        {addonCategories.map((category, idx) => (
          <div key={idx} className="addon-card">
            <PSubTitle>{category.title}</PSubTitle>
            {category.addOns.map((addOn) => (
              <DivCheckBoxBar key={addOn.type}>
                <FormControlLabel
                  checked={rentalDetails.addOns.includes(addOn.type)}
                  onChange={(e) => handleCheckAddon(e, addOn.type)}
                  control={<Checkbox />}
                  label={addOn.title}
                />
                <SpanPrice>${addOn.pricePerDay}{category.unit != null ? (' / ' + category.unit) : ''}</SpanPrice>
              </DivCheckBoxBar>
            ))}

            {category.description ? (
              <PDescription>* {category.description}</PDescription>
            ) : null}
            <Divider />
          </div>
        ))}
      </DivFormWrapper>
    </>
  );
}

export default SelectGearAccessory;
