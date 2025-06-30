import GeneralModal from "@/components/common/GeneralModal";
import React from "react";
import { H3Title, PDescription, PInformText } from "./styles";
import { roadsideAssistanceInformTexts } from "@/constants/modalConsts";

type Props = {
  open: boolean;
  onClose: () => void;
};

function RoadsideAssistanceModal({ open, onClose }: Props) {
  return (
    <GeneralModal open={open} onClose={onClose}>
      <H3Title>Roadside assistance information</H3Title>
      <PDescription>For added peace of mind</PDescription>

      {roadsideAssistanceInformTexts.map((informText, idx) => (
        <PInformText key={idx}>{informText}</PInformText>
      ))}
    </GeneralModal>
  );
}

export default RoadsideAssistanceModal;
