import React from "react";
import {
  ButtonReset,
  DivButtonWrapper,
  DivInputWrapper,
  DivTypeFilterContainer,
  PLabel,
} from "./styles";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useMarketing } from "@/providers/MarketingProvider";
import { MarketingContextType } from "@/providers/types";
import { changePathWithoutRerender } from "@/utils/helpers";

function TypeFilter() {
  const { allBikeTypes, selectedBikeTypeId, setSelectedBikeTypeId } =
    useMarketing() as MarketingContextType;

  const bikeTypes = allBikeTypes || [];

  const typeOptions = [
    { label: "-- Select Option --", value: 0 },
    ...bikeTypes.map((type) => ({ label: type.name, value: type.id })),
  ];

  const handleChange = (event: SelectChangeEvent) => {
    const value = Number(event.target.value);
    const selectedType = bikeTypes.find((type) => type.id === value);
    setSelectedBikeTypeId(value);
    const query = value !== 0 ? { typeOfMotorcycle: selectedType?.slug } : {};
    changePathWithoutRerender("/motorcycle-rental", query);
  };

  const handleReset = () => {
    setSelectedBikeTypeId(0);
    changePathWithoutRerender("/motorcycle-rental", {});
  };
  return (
    <DivTypeFilterContainer>
      <PLabel>Type Of Motorcycle</PLabel>
      <DivInputWrapper>
        <Select
          className="select-input"
          value={String(selectedBikeTypeId)}
          onChange={handleChange}
        >
          {typeOptions?.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </DivInputWrapper>
      <DivButtonWrapper>
        <ButtonReset onClick={handleReset}>
          <span>Reset</span>
          <HiOutlineArrowNarrowRight className="btn-icon" />
        </ButtonReset>
      </DivButtonWrapper>
    </DivTypeFilterContainer>
  );
}

export default TypeFilter;
