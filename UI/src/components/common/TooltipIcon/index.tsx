import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { IconWrapper } from "./styles";
import { Tooltip, TooltipProps, styled, tooltipClasses } from "@mui/material";

type Props = {
  tooptipText: string | undefined;
};

const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 230,
    lineHeight: 1.5,
    fontSize: "0.8rem",
  },
});

function TooltipIcon({ tooptipText }: Props) {
  return (
    <CustomWidthTooltip leaveDelay={800} title={tooptipText}>
      <IconWrapper>
        <FaQuestionCircle />
      </IconWrapper>
    </CustomWidthTooltip>
  );
}

export default TooltipIcon;
