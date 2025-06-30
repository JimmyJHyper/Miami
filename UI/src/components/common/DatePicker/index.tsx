import React, { useState } from "react";
import { MobileDatePicker, PickersActionBarProps } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import {
  ButtonClose,
  ButtonConfirm,
  DivActionBar,
  DivDatePickerContainer,
} from "./styles";
import { InputAdornment } from "@mui/material";
import { IoMdCalendar } from "react-icons/io";

function ActionList(props: PickersActionBarProps) {
  const { onAccept, onCancel } = props;

  return (
    <DivActionBar className="MuiPickersLayout-actionBar">
      <ButtonClose onClick={onCancel}>Close</ButtonClose>
      <ButtonConfirm onClick={onAccept}>Confirm</ButtonConfirm>
    </DivActionBar>
  );
}

type Props = {
  className?: string | undefined;
  onChange: (value: Dayjs | null) => void;
  value: Dayjs | null | undefined;
  disableDates: (date: Dayjs) => boolean;
};

function DatePicker({ className, onChange, value, disableDates }: Props) {
  const [disableMonth, setDisableMonth] = useState(false);

  const onMonthChange = (month: Dayjs) => {
    const now = dayjs();
    const isBefore = dayjs(month).isBefore(now);
    setDisableMonth(isBefore);
  };

  return (
    <DivDatePickerContainer className={className}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
        <MobileDatePicker
          autoFocus={false}
          disableFuture={false}
          disableHighlightToday
          className="picker-input"
          label="Date"
          shouldDisableDate={disableDates}
          onMonthChange={onMonthChange}
          value={value}
          onChange={onChange}
          slots={{
            actionBar: ActionList,
          }}
          slotProps={{
            toolbar: {
              hidden: true,
            },
            previousIconButton: {
              disabled: disableMonth,
            },
            day: {
              sx: {
                color: "green",
                "&.Mui-disabled": {
                  color: "red",
                },
                "&.MuiPickersDay-today": {
                  border: "none",
                },
                "&.Mui-selected": {
                  backgroundColor: "#59cb52",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "#59cb52",
                },
                "&.MuiPickersDay-root:focus": {
                  backgroundColor: "#59cb52",
                },
                "&.MuiPickersDay-root:not(.Mui-selected):focus": {
                  backgroundColor: "transparent",
                },
              },
            },
            textField: {
              InputProps: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IoMdCalendar />
                  </InputAdornment>
                ),
              },
            },
          }}
          sx={{
            "& .MuiInputLabel-root.Mui-error": {
              color: "gray",
            },
            "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "gray",
              },
          }}
        />
      </LocalizationProvider>
    </DivDatePickerContainer>
  );
}

export default DatePicker;
