import * as React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { DivGeneralModalContainer, DivModalBox } from "./styles";

type Props = {
  children?: any;
  open: boolean;
  onClose: () => void;
};

function GeneralModal({ children, open, onClose }: Props) {
  return (
    <DivGeneralModalContainer open={open} onClose={onClose}>
      <DivModalBox>
        <RiCloseCircleLine className="close-icon" onClick={onClose} />
        {children}
      </DivModalBox>
    </DivGeneralModalContainer>
  );
}

export default GeneralModal;
