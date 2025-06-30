import styled from "styled-components";
import { Modal, Box } from "@mui/material";

export const DivGeneralModalContainer = styled(Modal)`
  background: ${({ theme }) => theme.colors.modalOverlay};
  .MuiBackdrop-root {
    background-color: transparent;
  }
`;
export const DivModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 630px;
  min-height: 200px;
  max-height: 600px;
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.white};
  border-top: solid 7px ${({ theme }) => theme.colors.pink};
  border-radius: 5px;
  padding: 1rem;
  padding-top: 1.5rem;

  .close-icon {
    position: absolute;
    top: 0.7rem;
    right: 1rem;
    color: ${({ theme }) => theme.colors.wizardBlack};
    font-size: 2.3rem;
    font-weight: 700;
    cursor: pointer;
  }
`;
