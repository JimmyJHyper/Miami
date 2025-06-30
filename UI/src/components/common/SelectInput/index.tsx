// Import necessary components and types
import { Options } from "@/types";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { useState } from "react";

// Define the Props type
type Props = {
  value: any | string[] | undefined;
  name?: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  options: Options[];
  label: string;
  className: string;
  error?: boolean;
  helperText?: string;
  multiple?: boolean;
  is_required?: boolean;
  autoWidth?: boolean;
  fixedLeft?: boolean;
  maxHeight?: number | string;
};

// SelectInput component
function SelectInput(props: Props) {
  const {
    className,
    label,
    options,
    value,
    name,
    onChange,
    error,
    helperText,
    multiple,
    is_required = false,
    maxHeight = 400,
    autoWidth = false,
    fixedLeft=false
  } = props;
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const menuLeftOrigin = {
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
  };

  return (
    <>
      <FormControl required className={className}>
        <InputLabel id={`controlled-open-select-${label}`}>{label}</InputLabel>
        <Select
          multiple={multiple}
          labelId={`controlled-open-select-${label}`}
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={value || (multiple ? [] : "")}
          name={name}
          label={label}
          onChange={onChange}
          MenuProps={{
            PaperProps: { sx: { maxHeight: maxHeight } },
            ...(fixedLeft && {
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left",
              },
              transformOrigin: {
                vertical: "top",
                horizontal: "left",
              },
            }),
          }}
          error={error}
          required={is_required}
          autoWidth={autoWidth}
        >
          {/* Default option for clearing selection when multiple is false */}
          {!multiple && (
            <MenuItem
              value="" // use an empty string or another appropriate value
            >
              Clear Selection
            </MenuItem>
          )}

          {/* Options */}
          {options.map((option, idx) => (
            <MenuItem
              key={idx}
              value={option.value}
              disabled={option.valid === false}
              className={`${option.valid === true && "Mui-valid"} ${
                option.valid === false && "Mui-invalid"
              }`}
              sx={{
                "&.MuiMenuItem-root.Mui-disabled.Mui-invalid": {
                  color: "red",
                  opacity: 1,
                },
                "&.MuiMenuItem-root.Mui-valid": {
                  color: "green",
                },
              }}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText error={error}>{helperText}</FormHelperText>
      </FormControl>
    </>
  );
}

export default SelectInput;
