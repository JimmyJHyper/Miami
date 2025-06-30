import React, { useEffect, useState } from "react";
import { DivFormWrapper, PTitle } from "../common/styles";
import CardCheckBox from "@/components/common/CardCheckBox";
import { ButtonDetail, DivDiscountWrapper, ImgIcon } from "./styles";
import RoadsideAssistanceModal from "../RoadsideAssistanceModal";
import { useBooking } from "@/providers/BookingProvider";
import { BookingContextType } from "@/providers/types";
import { RentalDetails } from "@/types";

function SelectRoadsideAssistance() {
  const { rentalDetails, setRentalDetails } =
    useBooking() as BookingContextType;
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCardSelect = () => {
    let newValues: RentalDetails = Object.assign(rentalDetails);
    newValues.roadAssistance = !newValues.roadAssistance;
    setRentalDetails((prev) => ({ ...prev, ...newValues }));
  };
  return (
    <>
      <PTitle>Select Roadside Assistance (Optional)</PTitle>
      <DivFormWrapper>
        <CardCheckBox
          title="Roadside Assistance "
          subTitle="$12 / Day Charge"
          description="For added peace of mind."
          onClick={handleCardSelect}
          active={rentalDetails.roadAssistance}
        />

        <DivDiscountWrapper>
          <ImgIcon src="/images/discount_details_icon.svg" alt="icon" />
          <div>
            <ButtonDetail onClick={() => setShowModal(true)}>
              Please click for more details
            </ButtonDetail>
          </div>
        </DivDiscountWrapper>
      </DivFormWrapper>

      <RoadsideAssistanceModal
        open={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}

export default SelectRoadsideAssistance;
