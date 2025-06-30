import React, { useEffect } from "react";
import CardCheckBox from "@/components/common/CardCheckBox";
import { DivFormWrapper, PTitle } from "../common/styles";
import { CardOption, RentalDetails } from "@/types";
import { useBooking } from "@/providers/BookingProvider";
import { BookingContextType } from "@/providers/types";
import dayjs from "dayjs";
import { replaceDepositInDescription } from "@/utils/helpers";
import { PErrorMsg } from "./styles";

function SelectDamageCoverage() {
  const {
    rentalDetails,
    setRentalDetails,
    bikeInsurances,
    verifiedOrder,
    damageCoverageError,
    setDamageCoverageError,
  } = useBooking() as BookingContextType;
  const userAge = dayjs().diff(dayjs(verifiedOrder?.dateOfBirth), "year");
  const valuableInsurances = bikeInsurances
    ?.filter(
      (insurance) => insurance.minAge <= userAge && insurance.maxAge >= userAge
    )
    .sort((a, b) => b.dailyRate - a.dailyRate);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCardSelect = (option: CardOption) => {
    let newValues: RentalDetails = Object.assign(rentalDetails);
    newValues.insuranceName = option.title.toLocaleLowerCase();
    newValues.insurancePlanId = option?.id!;
    setRentalDetails((prev) => ({ ...prev, ...newValues }));
    setDamageCoverageError("");
  };

  const damageCoverageOptions: CardOption[] | undefined =
    valuableInsurances?.map((insurance) => {
      return {
        id: insurance.id,
        title: insurance.type,
        subTitle: `$${insurance.dailyRate} / Day Charge`,
        description: replaceDepositInDescription(
          insurance.description,
          insurance.deposit
        ),
        helpText: replaceDepositInDescription(
          insurance.popUpDescription,
          insurance.deposit
        ),
      };
    });

  return (
    <>
      <PTitle>Select your Damage Coverage to continue</PTitle>
      <DivFormWrapper>
        {damageCoverageOptions?.map((option) => (
          <CardCheckBox
            key={option?.id}
            title={option.title}
            subTitle={option.subTitle}
            description={option.description}
            helpText={option.helpText}
            onClick={() => handleCardSelect(option)}
            active={rentalDetails.insurancePlanId === option.id}
          />
        ))}

        {damageCoverageError && <PErrorMsg>{damageCoverageError}</PErrorMsg>}
      </DivFormWrapper>
    </>
  );
}

export default SelectDamageCoverage;
