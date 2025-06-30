import React, { useContext, useEffect, useState } from "react";
import { UserContextType } from "./types";
import { AllUsersResponse, UserResponse } from "@/types";

import { checkToken, getAllUsersApi, getuserByIdApi } from "@/apis/usersApis";
import { User } from "@/types/admin/admin";
import dayjs from "dayjs";

const UserContext = React.createContext<UserContextType | null>(null);

export function useUser() {
  return useContext(UserContext);
}

type Props = {
  children: any;
};

export function UserProvider({ children }: Props) {
  const [selectedUserId, setSelectedUserId] = useState(0);
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);
  const [token, setToken] = useState<string | undefined>(undefined);
  const [emailFilter, setEmailFilter] = useState<string>("");
  const [phoneFilter, setPhoneFilter] = useState<string>("");
  const [nameFilter, setNameFilter] = useState<string>("");
  const [birthdateFilter, setBirthdateFilter] = useState<string>("");
  const [month, setMonth] = useState<string | undefined>("");
  const [day, setDay] = useState<string | undefined>("");
  const [year, setYear] = useState<string | undefined>("");

  const [originalsAllUsers, setOriginalsAllUsers] = useState<
    User[] | undefined
  >(undefined);
  const [allUsers, setAllUsers] = useState<User[] | undefined>(undefined);

  const [isGetAllUsersLoading, setIsGetAllUsersLoading] = useState(true);

  const getAllUsers = () => {
    setIsGetAllUsersLoading(true);
    getAllUsersApi()
      .then((res: AllUsersResponse) => {
        setAllUsers(res.data);
        setOriginalsAllUsers(res.data);
        setIsGetAllUsersLoading(false);
      })
      .catch((err) => {
        setIsGetAllUsersLoading(false);
      });
  };

  const validateToken = () => {
    if (token != undefined)
      checkToken().then((valid) => {
        if (valid !== undefined && valid.data != false) {
          setToken(localStorage.getItem("SESSION_ID") ?? undefined);
          setSelectedUserId(valid.data.userId);
          setSelectedUser;
        } else {
          localStorage.clear();
          setToken(undefined);
          setSelectedUserId(0);
          setSelectedUser(undefined);
        }
      });
  };

  const getUserById = (id: number) => {
    getuserByIdApi(id)
      .then((res: UserResponse) => setSelectedUser(res.data))
      .catch((err) => {});
  };
  const filter = () => {
    let users = originalsAllUsers?.filter((el) => {
      const emailMatches =
        emailFilter?.trim() != ""
          ? el.email
              .toLowerCase()
              .trim()
              .includes(emailFilter.toLowerCase().trim())
          : true;
      const nameMatches =
        nameFilter?.trim() != ""
          ? (el.firstName + " " + el.lastName)
              .toLowerCase()
              .trim()
              .includes(nameFilter.toLowerCase().trim())
          : true;
      const phoneMatches =
        phoneFilter?.trim() != ""
          ? el.phoneNumber.includes(phoneFilter.trim())
          : true;
      const targetDate =
        day && month && year
          ? dayjs(
              `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(
                2,
                "0"
              )}`
            ).format("YYYY-MM-DD")
          : null;

      let birthdateMatches: any = true;

      if (day != "" || month != "" || year != "") {
        birthdateMatches =
          el.dateOfBirth &&
          // Full date match if all parts are provided
          ((day && month && year && el.dateOfBirth === targetDate) ||
            // Month and year match if only month and year are provided
            (!day &&
              month &&
              year &&
              el.dateOfBirth.startsWith(
                `${year}-${String(month).padStart(2, "0")}`
              )) ||
            // Day and year match if only day and year are provided
            (day &&
              !month &&
              year &&
              el.dateOfBirth.startsWith(`${year}`) &&
              el.dateOfBirth.slice(8, 10) === String(day).padStart(2, "0")) ||
            // Day and month match if only day and month are provided
            (day &&
              month &&
              !year &&
              el.dateOfBirth.slice(5, 7) === String(month).padStart(2, "0") &&
              el.dateOfBirth.slice(8, 10) === String(day).padStart(2, "0")) ||
            // Only year match if only year is provided
            (!day &&
              !month &&
              year &&
              el.dateOfBirth.startsWith(String(year))) ||
            // Only month match if only month is provided
            (!day &&
              month &&
              !year &&
              el.dateOfBirth.slice(5, 7) === String(month).padStart(2, "0")) ||
            // Only day match if only day is provided
            (day &&
              !month &&
              !year &&
              el.dateOfBirth.slice(8, 10) === String(day).padStart(2, "0")));
      }
      return emailMatches && nameMatches && phoneMatches && birthdateMatches;
    });

    setAllUsers(users);
  };
  const filterEmail = () => {
    let users = allUsers?.filter((el) => el.email.includes(emailFilter ?? ""));
    setAllUsers(users);
  };
  const filterName = () => {
    let users = allUsers?.filter((el) =>
      (el.firstName + " " + el.lastName).includes(nameFilter ?? "")
    );
    setAllUsers(users);
  };
  const filterPhone = () => {
    let users = allUsers?.filter((el) =>
      el.phoneNumber.includes(phoneFilter ?? "")
    );
    setAllUsers(users);
  };
  const filterBirthdate = () => {
    let users = allUsers?.filter((el) =>
      el.dateOfBirth.includes(birthdateFilter ?? "")
    );
    setAllUsers(users);
  };

  const emailSearchUser = (email: string) => {
    setEmailFilter(email);
  };
  const nameSearchUser = (name: string) => {
    setNameFilter(name);
  };
  const phoneSearchUser = (phone: string) => {
    setPhoneFilter(phone);
  };
  const birthdateSearchUser = (birthdate: string) => {
    setBirthdateFilter(birthdate);
  };

  useEffect(() => {
    if (selectedUserId != 0) {
      getUserById(selectedUserId);
    }

    return () => {};
  }, [selectedUserId]);

  useEffect(() => {
    if (token != undefined) {
      validateToken();
    } else {
      let tok = localStorage.getItem("SESSION_ID");
      setToken(tok ?? undefined);
    }
    return () => {};
  }, [token]);

  const value: UserContextType = {
    selectedUserId,
    setSelectedUserId,
    selectedUser,
    allUsers,
    getAllUsers,
    setIsGetAllUsersLoading,
    setAllUsers,
    getUserById,
    token,
    setToken,
    validateToken,
    isGetAllUsersLoading,
    emailSearchUser,
    emailFilter,
    nameSearchUser,
    nameFilter,
    phoneSearchUser,
    phoneFilter,
    birthdateSearchUser,
    birthdateFilter,
    filter,
    month,
    day,
    year,
    setMonth,
    setDay,
    setYear,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
