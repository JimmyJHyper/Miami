import { dateFormatString, dateTimeFormatString } from "@/constants/services";
import dayjs, { Dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import Router from "next/router";
import { ParsedUrlQueryInput } from "querystring";
import { getCouponByName } from "@/apis/couponsApis";
import { useState } from "react";
import { Coupon } from "@/types/admin/admin";
dayjs.extend(customParseFormat);

export const convertTitleToLink = (title: string) => {
  return title?.toLocaleLowerCase()?.replaceAll(" ", "-").replaceAll(":", "");
};

export const convertTitleToId = (title: string) => {
  return title.toLocaleLowerCase().replaceAll(" ", "_");
};

export const changePathWithoutRerender = (
  pathname: string,
  query: ParsedUrlQueryInput
) => {
  Router.push(
    {
      pathname,
      query,
    },
    undefined,
    { shallow: true }
  );
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const validEmail = (value: string) => {
  return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Email is not correct."
    : "";
};

export const validPhoneNumber = (value: string) => {
  return !value.match("[0-9]{10}") ? "Phone number is invalid." : "";
};

export const isBeforeSecondFromFirstDay = (
  firstDay: string = "",
  secondDay: string = ""
) => {
  return formattedDayjs(secondDay).isBefore(
    formattedDayjs(firstDay).add(10, "minute")
  );
};

export const isAfterSecondFromFirstDay = (
  firstDay: string = "",
  secondDay: string = ""
) => {
  return formattedDayjs(secondDay).isAfter(
    formattedDayjs(firstDay).subtract(10, "minute")
  );
};

export const isDateInRange = (date: Dayjs, day1: string, day2: string) => {
  return date.isBetween(day1, day2, "day", "[)");
};

export const getDuration = (upDay: string = "", offDay: string = "") => {
  console.log(formattedDayjs(offDay)
  .add(30, "minute")
  .diff(formattedDayjs(upDay), "hour") / 24);
  
  return Math.ceil(
    formattedDayjs(offDay)
      .add(30, "minute")
      .diff(formattedDayjs(upDay), "hour") / 24
  );
};

export const formattedDayjs = (date: string) => {
  return dayjs(date, dateTimeFormatString);
};

export const formattedDate = (date: string) => {
  return dayjs(date, dateFormatString);
};

export const getDiscountPrice = (duration: number, initialPrice: number, discounts: any,coupon=0) => {  
  if (discounts != undefined) {
    
    try {
      discounts = JSON.parse(discounts.discounts);
      if (duration === 2) return ((initialPrice * (1 - (discounts.two / 100)))*( 1-(coupon/100))).toFixed(2);
      if (duration === 3) return ((initialPrice * (1 - (discounts.three / 100)))*( 1-(coupon/100))).toFixed(2);
      if (duration === 4) return ((initialPrice * (1 - (discounts.four / 100)))*( 1-(coupon/100))).toFixed(2);
      if (duration > 4) return ((initialPrice * (1 - (discounts.five / 100)))* (1-(coupon/100))).toFixed(2);
    } catch (error) {
      try {
        discounts = JSON.parse(discounts.discounts);
      if (duration === 2) return ((initialPrice * (1 - (discounts.two / 100)))* (1-(coupon/100))).toFixed(2);
      if (duration === 3) return ((initialPrice * (1 - (discounts.three / 100)))* (1-(coupon/100))).toFixed(2);
      if (duration === 4) return ((initialPrice * (1 - (discounts.four / 100)))*( 1-(coupon/100))).toFixed(2);
      if (duration > 4) return ((initialPrice * (1 - (discounts.five / 100)))* (1-(coupon/100))).toFixed(2);
      } catch (error) {

      }
    }}
   


  return initialPrice*(1-(coupon/100));
};


export const replaceDepositInDescription = (
  description: string,
  deposit: number
) => {
  return description.replace("${deposit}", `$${deposit}`);
};

export const getCouponPercentage =async (code:string) =>{
const res = await getCouponByName(code)
return res.data as Coupon
}