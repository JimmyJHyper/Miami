import React from "react";
import { DivBookingProgressBarContainer, PTitle } from "./styles";
import { LinearProgress } from "@mui/material";

type Props = {
  percent: number;
  bikeName: string | undefined;
};

function BookingProgressBar({ percent = 0, bikeName }: Props) {
  return (
    <DivBookingProgressBarContainer>
      <PTitle>{bikeName}</PTitle>
      <LinearProgress variant="determinate" color="secondary" value={percent} />
    </DivBookingProgressBarContainer>
  );
}

export default BookingProgressBar;
