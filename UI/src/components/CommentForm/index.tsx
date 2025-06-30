import React from "react";
import {
  ButtonSubmit,
  DivButtonWrapper,
  DivCommentFormContainer,
  H3Title,
  InputForm,
  PDescription,
  TextInputForm,
} from "./styles";
import { Checkbox, FormControlLabel } from "@mui/material";

function CommentForm() {
  return (
    <DivCommentFormContainer>
      <H3Title>Submit a Comment</H3Title>
      <PDescription>
        Your email address will not be published. Required fields are marked *
      </PDescription>
      <TextInputForm placeholder="Comment *" />
      <InputForm placeholder="Name *" />
      <InputForm placeholder="Email *" />
      <FormControlLabel
        control={<Checkbox />}
        label="Save my name, email, and website in this browser for the next time I comment."
      />
      <DivButtonWrapper>
        <ButtonSubmit>Submit Comment</ButtonSubmit>
      </DivButtonWrapper>
    </DivCommentFormContainer>
  );
}

export default CommentForm;
