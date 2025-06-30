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
import { BikeInsurance, UpdateInsurancePayload } from "@/types";
import { useBooking } from "@/providers/BookingProvider";
import { BookingContextType } from "@/providers/types";
import { createBikeInsurance } from "@/apis/adminApis";
import { createAgeOptions, coverageTypes } from "@/constants/options";
import SelectInput from "@/components/common/SelectInput";
import CreatedInsurancePlanModal from "../CreatedInsurancePlanModal";


type Props = {
  open: boolean;
  onClose: () => void;
  bikeId: number;
};

function CreateInsurancePlanModal({ open, onClose, bikeId }: Props) {
  const { updateBikeInsuranceById } = useBooking() as BookingContextType;
  const [showModal, setShowModal] = useState(false);
  const [ageRange, setAgeRange] = useState<string>("25");
  const [coverageType, setCoverageType] = useState<string>("minimum");


  const [editedValues, setEditedValues] = useState({
    dailyRate: 0,
    deposit: 0,
    description: '',
    popUpDescription: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    key: string
  ) => {
    const { value } = e.target;
    let newValues = Object.assign(editedValues);
    newValues[key] = value;
    setEditedValues((prev) => ({ ...prev, ...newValues }));
  };

  const onSave = async () => {
    if (!editedValues.dailyRate || !editedValues.deposit) return;
    let minAge = 21;
    let maxAge = 25;
    if (Number(ageRange) == 35) {
      minAge = 26;
      maxAge = 35;
    }
    else if (Number(ageRange) == 999) {
      minAge = 36;
      maxAge = 999;
    }
    const updateBody: UpdateInsurancePayload = {
      type: coverageType,
      minAge: minAge,
      maxAge: maxAge,
      dailyRate: Number(editedValues.dailyRate),
      deposit: Number(editedValues.deposit),
      description: editedValues.description,
      popUpDescription: editedValues.popUpDescription,
    };

    await createBikeInsurance(updateBody, bikeId).then(res => {
      setShowModal(true);
      onClose();
    });

  };

  const closeModal = () => {
    onClose();
  };
  return (
    <>
      <GeneralModal open={open} onClose={closeModal}>
        <H3Title>Edit Insurance Plan</H3Title>
        <DivContentWrapper>
          <DivInputWrapper>
            <SelectInput
              className="text-input"
              label="Age Range"
              value={ageRange}
              onChange={(e) => setAgeRange(e.target.value)}
              options={createAgeOptions}
            />
          </DivInputWrapper>
          <DivInputWrapper>
            <SelectInput
              className="text-input"
              label="Type"
              value={coverageType}
              onChange={(e) => setCoverageType(e.target.value)}
              options={coverageTypes}
            />
          </DivInputWrapper>
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
      <CreatedInsurancePlanModal
        open={showModal}
        onClose={() => setShowModal(false)}
        bikeId={bikeId}
      />
    </>
  );
}

export default CreateInsurancePlanModal;
