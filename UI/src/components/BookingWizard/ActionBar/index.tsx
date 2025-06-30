import React from "react";
import { DivActionBarContainer } from "./styles";
import { Button } from "@mui/material";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import { useBooking } from "@/providers/BookingProvider";
import { BookingContextType } from "@/providers/types";

type Props = {
  onNext: () => void;
  onBack: () => void;
};

function ActionBar({ onNext, onBack }: Props) {
  const { bookingStep } = useBooking() as BookingContextType;
  const showBack = bookingStep > 1;
  const showNext = bookingStep < 5 ;

  return (
    <DivActionBarContainer>
      {showBack ? (
        <Button
          onClick={onBack}
          className="back-btn"
          variant="outlined"
          startIcon={<ArrowBack />}
        >
          Back
        </Button>
      ) : null}
      {showNext ? (
        <Button
          onClick={onNext}
          className="next-btn"
          variant="contained"
          endIcon={<ArrowForward />}
        >
          Next
        </Button>
      ) : null}
    </DivActionBarContainer>
  );
}

export default ActionBar;
