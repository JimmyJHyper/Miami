import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import UserTable from "./UserTable/UserTable";
import {
  DivBikeInsuranceTableContainer,
  DivInputWrapper,
  DivInsuranceListWrapper,
  H3Title,
} from "./styles";
import { User } from "@/types/admin/admin";
import { Button, Input, TextField } from "@mui/material";
import { useUser } from "@/providers/UsersProvider";
import { UserContextType } from "@/providers/types";
import SelectInput from "@/components/common/SelectInput";
import { dayOptions, monthOptions, yearOptions } from "@/constants/options";

interface BikesPageProps {
  users: User[];
  softDelete?: Function;
  hardDelete?: Function;
}

const UsersTable: React.FC<BikesPageProps> = ({
  users,
  softDelete = () => {},
  hardDelete = () => {},
}) => {
  const {
    emailFilter,
    emailSearchUser,
    nameSearchUser,
    nameFilter,
    phoneFilter,
    phoneSearchUser,
    birthdateFilter,
    birthdateSearchUser,
    filter,
    month,
    day,
    year,
    setMonth,
    setDay,
    setYear,
  } = useUser() as UserContextType;

  return (
    <DivBikeInsuranceTableContainer>
      <H3Title>Users</H3Title>
      <DivInsuranceListWrapper>
      <DivInputWrapper>
        <TextField
          style={{ marginInlineEnd: "10px",width:"55%" }}
          type="text"
          value={nameFilter}
          label="Name"
          onChange={(e) => nameSearchUser(e.target.value)}
        />
        <TextField
          style={{ marginInlineEnd: "10px",width:"55%" }}
          type="text"
          value={emailFilter}
          label="Email"
          onChange={(e) => emailSearchUser(e.target.value)}
        />
        <TextField
          style={{ marginInlineEnd: "10px",width:"55%" }}
          type="text"
          value={phoneFilter}
          label="Phone"
          onChange={(e) => phoneSearchUser(e.target.value)}
        />
        
          <SelectInput
            className="text-input"
            label="Month"
            name="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            options={monthOptions}
          />
          
          <SelectInput
            className="text-input"
            label="Day"
            name="day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            options={dayOptions}
          />
          <SelectInput
            className="text-input"
            label="Year"
            name="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            options={yearOptions}
          />
        </DivInputWrapper>

        <Button
          onClick={() => filter()}
          style={{ background: "black", color: "white" }}
        >
          Filter
        </Button>
        <UserTable
          softDelete={softDelete}
          users={users}
          hardDelete={hardDelete}
        />
      </DivInsuranceListWrapper>
    </DivBikeInsuranceTableContainer>
  );
};

export default UsersTable;
