import GeneralModal from "@/components/common/GeneralModal";
import React from "react";
import { ButtonDone, DivContentWrapper, H1Title, ImgUpdated } from "./styles";
import { useBooking } from "@/providers/BookingProvider";
import { BookingContextType } from "@/providers/types";

type Props = {
  open: boolean;
  onClose: () => void;
  bikeId: number;
};
function CreatedInsurancePlanModal({ open, onClose, bikeId }: Props) {
  const { updatedInsurance, getBikeInsurances } =
    useBooking() as BookingContextType;

  const headerText = "Insurance plan Created!";

  const handleDone = () => {
    if (!updatedInsurance) {
      onClose();
      return;
    }

    getBikeInsurances(bikeId);
    onClose();
  };

  return (
    <GeneralModal open={open} onClose={onClose}>
      <DivContentWrapper>
        <ImgUpdated src="/images/updated_icon.svg" alt="updated_icon" />
        <H1Title>{headerText}</H1Title>
        <ButtonDone onClick={handleDone}>Done</ButtonDone>
      </DivContentWrapper>
    </GeneralModal>
  );
}

export default CreatedInsurancePlanModal;
