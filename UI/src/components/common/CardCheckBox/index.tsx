import { Checkbox } from "@mui/material";
import React from "react";
import {
  DivCardCheckBoxContainer,
  DivHeaderBar,
  PTitle,
  SpanDescription,
} from "./styles";
import TooltipIcon from "../TooltipIcon";

type Props = {
  active?: boolean;
  title: string;
  subTitle: string;
  description: string;
  helpText?: string;
  onClick: () => void;
};

function CardCheckBox({
  active = false,
  title,
  subTitle,
  description,
  helpText,
  onClick,
}: Props) {
  return (
    <DivCardCheckBoxContainer active={active} onClick={onClick}>
      <DivHeaderBar>
        <PTitle>
          {title} <span>{subTitle}</span>
        </PTitle>
        <Checkbox disabled checked={active} />
      </DivHeaderBar>
      <SpanDescription>
        {description}
        {helpText ? <TooltipIcon tooptipText={helpText} /> : null}
      </SpanDescription>
    </DivCardCheckBoxContainer>
  );
}

export default CardCheckBox;
