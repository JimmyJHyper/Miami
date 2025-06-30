import React, { useEffect, useState } from "react";
import GeneralModal from "../../common/GeneralModal";
import {
  ButtonSave,
  DivContentWrapper,
  DivInputWrapper,
  H3Title,
  PDescription,
} from "./styles";
import { TextField } from "@mui/material";
import UpdatedInsurancePlanModal from "../UpdatedInsurancePlanModal";
import { BikeInsurance, UpdateInsurancePayload } from "@/types";
import { useBooking } from "@/providers/BookingProvider";
import { BookingContextType } from "@/providers/types";

type Props = {
  open: boolean;
  onClose: () => void;
  insurance: BikeInsurance | undefined;
  bikeId: number;
};

function EditInsurancePlanModal({ open, onClose, insurance, bikeId }: Props) {
  const { updateBikeInsuranceById } = useBooking() as BookingContextType;
  const [showModal, setShowModal] = useState(false);
  const [editedValues, setEditedValues] = useState({
    dailyRate: insurance?.dailyRate,
    deposit: insurance?.deposit,
    description: insurance?.description,
    popUpDescription: insurance?.popUpDescription,
  });

  const initializeValues = () => {
    setEditedValues({
      dailyRate: insurance?.dailyRate,
      deposit: insurance?.deposit,
      description: insurance?.description,
      popUpDescription: insurance?.popUpDescription,
    });
  };

  useEffect(() => {
    initializeValues();
  }, [insurance]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    key: string
  ) => {
    const { value } = e.target;
    let newValues = Object.assign(editedValues);
    newValues[key] = value;
    setEditedValues((prev) => ({ ...prev, ...newValues }));
  };

  const onSave = () => {
    if (!editedValues.dailyRate || !editedValues.deposit) return;
    const insuranceId = insurance?.id || 0;
    const updateBody: UpdateInsurancePayload = {
      type: insurance?.type,
      minAge: insurance?.minAge,
      maxAge: insurance?.maxAge,
      dailyRate: Number(editedValues.dailyRate),
      deposit: Number(editedValues.deposit),
      description: editedValues.description,
      popUpDescription: editedValues.popUpDescription,
    };

    updateBikeInsuranceById(updateBody, bikeId, insuranceId);
    setShowModal(true);
    onClose();
  };

  const closeModal = () => {
    initializeValues();
    onClose();
  };
  return (
    <>
      <GeneralModal open={open} onClose={closeModal}>
        <H3Title>Edit Insurance Plan</H3Title>
        <DivContentWrapper>
          <PDescription>
            Age Range: {insurance?.minAge} - {insurance?.maxAge}
          </PDescription>
          <PDescription>Coverage Type: {insurance?.type} Coverage</PDescription>
          <DivInputWrapper>
            <TextField
              className="text-input"
              label="Daily Rate"
              variant="outlined"
              required
              error={Boolean(!editedValues?.dailyRate)}
              type="number"
              value={editedValues?.dailyRate || ""}
              onChange={(e) => handleInputChange(e, "dailyRate")}
            />
          </DivInputWrapper>
          <DivInputWrapper>
            <TextField
              className="text-input"
              label="Deposit"
              variant="outlined"
              required
              error={Boolean(!editedValues?.deposit)}
              type="number"
              value={editedValues?.deposit || ""}
              onChange={(e) => handleInputChange(e, "deposit")}
            />
          </DivInputWrapper>
          <DivInputWrapper>
            <textarea
              className="text-input"
              value={editedValues?.description || ""}
              onChange={(e) => handleInputChange(e, "description")}
            />
          </DivInputWrapper>
          <DivInputWrapper>
            <textarea
              className="text-input"
              value={editedValues?.popUpDescription || ""}
              onChange={(e) => handleInputChange(e, "popUpDescription")}
            />
          </DivInputWrapper>

          <ButtonSave onClick={onSave}>Save</ButtonSave>
        </DivContentWrapper>
      </GeneralModal>
      <UpdatedInsurancePlanModal
        open={showModal}
        onClose={() => setShowModal(false)}
        bikeId={bikeId}
      />
    </>
  );
}

export default EditInsurancePlanModal;
