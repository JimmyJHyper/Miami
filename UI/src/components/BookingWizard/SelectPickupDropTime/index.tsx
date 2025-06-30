import React, { useEffect, useState } from "react";
import { Box, SelectChangeEvent } from "@mui/material";
import DiscountDetailsModal from "../DiscountDetailsModal";
import SelectInput from "@/components/common/SelectInput";
import { timeOptions } from "@/constants/options";
import DatePicker from "@/components/common/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { useBooking } from "@/providers/BookingProvider";
import { getCouponByName } from "@/apis/couponsApis";
import { CouponPercentageContextType } from "@/providers/types";
import { useCouponPer ,CouponPercentageProvider } from "@/providers/GetCouponPercentageProvider";
import { getCouponPercentage } from '@/utils/helpers';
import { BookingContextType } from "@/providers/types";
import {
  ButtonDetail,
  DivDiscountInfoWrapper,
  DivDiscountWrapper,
  ImgIcon,
  PDescription,
  SpanCurrentPrice,
  SpanHelp,
  SpanLastPrice,
} from "./styles";
import {
  DivFormWrapper,
  DivInputWrapper,
  PLabel,
  PTitle,
  CLabel
} from "../common/styles";
import {
  formattedDate,
  formattedDayjs,
  getDiscountPrice,
  getDuration,
  isAfterSecondFromFirstDay,
  isBeforeSecondFromFirstDay,
  isDateInRange,
  
} from "@/utils/helpers";
import { RentalDetails } from "@/types";
import { dateFormatString, dateTimeFormatString } from "@/constants/services";
import { Margin } from "@mui/icons-material";
import styled from 'styled-components';

dayjs.extend(isBetween);
type Coupon = {
  code: string,
  isActivated:boolean,
  percentage:number,
}



function SelectPickupDropTime(discounts:any) {
  const [couponAdded,setCouponAdded] = useState(false)
  const[lastCI,setLastCI] = useState("")
  const [savedPriceCoupon,setSavedPriceCoupon] = useState("")
  const [discountTotalCoupon,setDiscountTotalCoupon] = useState("")
  const [Coupon,setCoupon] = useState<Coupon | undefined>(undefined)
  const [CouponDiscount,setCouponDiscount] = useState<number | undefined>(0)
  const {
    rentalDetails,
    setRentalDetails,
    verifiedOrder,
    pickUpTimeError,
    dropOffTimeError,
    setPickUpTimeError,
    setDropOffTimeError,
    bikeBookedDates,
  } = useBooking() as BookingContextType;
  const [showModal, setShowModal] = useState(false);
  const today = dayjs().add(1, "hour").format(dateTimeFormatString);
  const pickUpDay = `${rentalDetails.pickUpDate}: ${rentalDetails.pickUpTime}`;
  const dropOffDay = `${rentalDetails.dropOffDate}: ${rentalDetails.dropOffTime}`;


const [coupontextInput,setCoupontextInput] = useState("")
const [couponadd,setCouponadd] = useState(false)
const {couponCode,couponPercentage,setCouponInput,couponFound,setCouponFound} = useCouponPer() as CouponPercentageContextType

  useEffect(() => {setCouponFound(false)
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    validateDropOffTime();
  }, [rentalDetails]);

  const invalidPickUpTime = (optionDay: string) => {
    return (
      isBeforeSecondFromFirstDay(
        dayjs().format(dateTimeFormatString),
        optionDay
      ) ||
      Boolean(
        bikeBookedDates?.some(
          (bookedDate) =>
            isAfterSecondFromFirstDay(
              formattedDayjs(
                `${bookedDate.pickUpDate}: ${bookedDate.pickUpTime}`
              )
                .subtract(30, "minute")
                .format(dateTimeFormatString),
              optionDay
            ) &&
            isBeforeSecondFromFirstDay(
              formattedDayjs(
                `${bookedDate.dropOffDate}: ${bookedDate.dropOffTime}`
              )
                .add(30, "minute")
                .format(dateTimeFormatString),
              optionDay
            )
        )
      )
    );
  };

  const invalidDropOffTime = (optionDay: string) => {
    return (
      invalidPickUpTime(optionDay) ||
      Boolean(
        bikeBookedDates?.some(
          (bookedDate) =>
            isAfterSecondFromFirstDay(
              `${rentalDetails.pickUpDate}: ${rentalDetails.pickUpTime}`,
              `${bookedDate.dropOffDate}: ${bookedDate.dropOffTime}`
            ) &&
            isBeforeSecondFromFirstDay(
              optionDay,
              `${bookedDate.dropOffDate}: ${bookedDate.dropOffTime}`
            )
        )
      )
    );
  };

  const isValidPickUpDay = (date: string) => {
    const newOptions = timeOptions.map((option) => {
      let newOption = { ...option };
      const optionDay = `${date}: ${option.value}`;

      newOption.valid = true;

      if (!dayjs(date).isValid()) {
        newOption.valid = false;
      } else if (invalidPickUpTime(optionDay)) {
        newOption.valid = false;
      }
      return newOption;
    });

    return Boolean(newOptions.filter((option) => option.valid).length);
  };

  const isValidDropOffDay = (date: string) => {
    const newOptions = timeOptions.map((option) => {
      let newOption = { ...option };
      const optionDay = `${date}: ${option.value}`;

      newOption.valid = true;

      if (!dayjs(date).isValid()) {
        newOption.valid = false;
      } else if (invalidDropOffTime(optionDay)) {
        newOption.valid = false;
      } else if (isBeforeSecondFromFirstDay(pickUpDay, optionDay)) {
        newOption.valid = false;
      }
      return newOption;
    });

    return Boolean(newOptions.filter((option) => option.valid).length);
  };

  const validateDropOffTime = () => {
    let newValues: RentalDetails = Object.assign(rentalDetails);
    if (
      isBeforeSecondFromFirstDay(pickUpDay, dropOffDay) ||
      formattedDate(dropOffDay).isBefore(formattedDate(pickUpDay), "day")
    ) {
      newValues.dropOffTime = "";
      if (
        formattedDate(dropOffDay).isBefore(formattedDate(pickUpDay), "day") ||
        !isValidDropOffDay(rentalDetails.dropOffDate)
      )
        newValues.dropOffDate = "";
      setRentalDetails((prev) => ({ ...prev, ...newValues }));
    } else if (invalidDropOffTime(dropOffDay)) {
      newValues.dropOffDate = "";
      newValues.dropOffTime = "";
      setRentalDetails((prev) => ({ ...prev, ...newValues }));
    }
  };

  const pickUpTimeOptions = timeOptions.map((option) => {
    let newOption = { ...option };
    const optionDay = `${rentalDetails.pickUpDate}: ${option.value}`;

    newOption.valid = true;

    if (!dayjs(rentalDetails.pickUpDate).isValid()) {
      newOption.valid = false;
    } else if (isBeforeSecondFromFirstDay(today, optionDay)) {
      newOption.valid = false;
    } else if (invalidPickUpTime(optionDay)) {
      newOption.valid = false;
    }
    return newOption;
  });

  const dropOffTimeOptions = timeOptions.map((option) => {
    let newOption = { ...option };
    const optionDay = `${rentalDetails.dropOffDate}: ${option.value}`;
    newOption.valid = true;
    if (
      !rentalDetails.pickUpTime ||
      !dayjs(rentalDetails.dropOffDate).isValid()
    ) {
      newOption.valid = false;
    } else if (isBeforeSecondFromFirstDay(pickUpDay, optionDay)) {
      newOption.valid = false;
    } else if (invalidDropOffTime(optionDay)) {
      newOption.valid = false;
    }
    return newOption;
  });

  const pickUpDiableDates = (date: Dayjs) => {
    const disableFromDay = dayjs().subtract(1, "day");
    let shouldDisable = false;

    if (!isValidPickUpDay(date.format(dateFormatString))) {
      shouldDisable = true;
    }

    if (
      isBeforeSecondFromFirstDay(
        disableFromDay?.format(dateFormatString),
        date.format(dateFormatString)
        
      )
    ) {
      shouldDisable = true;
    }

    return (
      shouldDisable ||
      Boolean(
        bikeBookedDates?.some((bookedDate) =>
          isDateInRange(date, bookedDate.pickUpDate, bookedDate.dropOffDate)
        )
      )
    );
  };

  const dropOffDiableDates = (date: Dayjs) => {
    const disableFromDay = formattedDayjs(pickUpDay).day()
      ? formattedDayjs(pickUpDay).subtract(1, "day")
      : dayjs().subtract(1, "day");
    let shouldDisable = false;

    if (!isValidDropOffDay(date.format(dateFormatString))) {
      shouldDisable = true;
    }

    if (
      isBeforeSecondFromFirstDay(
        disableFromDay?.format(dateFormatString),
        date.format(dateFormatString)
      )
    ) {
      shouldDisable = true;
    }

    return shouldDisable;
  };

  const handleDateChange = (value: Dayjs | null, key: string) => {
    let newValues = Object.assign(rentalDetails);
    const date = dayjs(value).format(dateFormatString);
    newValues[key] = date;
    if (key === "pickUpDate") newValues.pickUpTime = "";
    if (key === "dropOffDate") newValues.dropOffTime = "";
    setRentalDetails((prev) => ({ ...prev, ...newValues }));
  };

  const handleTimeChange = (e: SelectChangeEvent<string>, key: string) => {
    
    const { value } = e.target;
    let newValues = Object.assign(rentalDetails);
    newValues[key] = value;
    setRentalDetails((prev) => ({ ...prev, ...newValues }));
    if (key === "pickUpTime") setPickUpTimeError(false);
    if (key === "dropOffTime") setDropOffTimeError(false);
  };

  const duration = getDuration(pickUpDay, dropOffDay) || 0;

  const discountPrice = getDiscountPrice(
    duration,
    Number(verifiedOrder?.dailyBikePrice),
    discounts,
    couponPercentage
  );
  
  const totalPrice = parseFloat(
    String(Number(verifiedOrder?.dailyBikePrice) * duration)
  ).toFixed(2);
  const discountTotal = parseFloat(
    String(Number(discountPrice) * duration)
  ).toFixed(2);
  const savedPrice= parseFloat(
    String(Number(totalPrice) - Number(discountTotal))
  ).toFixed(2);

  
 

  const handleCouponChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  { 
    setCoupontextInput(e.target.value)
    
};
  function addCoupon()
  {

 setCouponInput(coupontextInput)
 
 setCouponadd(true)

      }
      
  
  
  
useEffect(()=>{
  if 
  (couponPercentage > 0 ){
  setCouponFound(true)}
},[couponPercentage])
  

console.log("coupon %=",couponPercentage)
  return (
    <>
      <PTitle>Select your Pickup Date/Time and Drop off Date/Time</PTitle>
      <DivFormWrapper>
        <Box component="form">
          <PLabel>Pick-up date & time</PLabel>
          <DivInputWrapper>
            <DatePicker
              className="text-input"
              onChange={(value) => handleDateChange(value, "pickUpDate")}
              value={
                rentalDetails.pickUpDate
                  ? dayjs(rentalDetails.pickUpDate)
                  : null
              }
              disableDates={pickUpDiableDates}
            />
            <SelectInput
              className="text-input"
              label="Time"
              value={rentalDetails.pickUpTime}
              error={pickUpTimeError}
              onChange={(e) => handleTimeChange(e, "pickUpTime")}
              options={pickUpTimeOptions}
            />
          </DivInputWrapper>
          <PLabel>Return date & time</PLabel>
          <DivInputWrapper>
            <DatePicker
              className="text-input"
              onChange={(value) => handleDateChange(value, "dropOffDate")}
              value={
                rentalDetails.dropOffDate
                  ? dayjs(rentalDetails.dropOffDate)
                  : null
              }
              disableDates={dropOffDiableDates}
            />
            <SelectInput
              className="text-input"
              label="Time"
              value={rentalDetails.dropOffTime}
              error={dropOffTimeError}
              onChange={(e) => handleTimeChange(e, "dropOffTime")}
              options={dropOffTimeOptions}
            />
          </DivInputWrapper>
        </Box>

        <DivDiscountWrapper>
          <ImgIcon src="/images/discount_details_icon.svg" alt="icon" />
          <div>
            <PDescription>
              You get discount when you book for more than 1 day.
            </PDescription>
            <ButtonDetail onClick={() => setShowModal(true)}>
              View Discount Details
            </ButtonDetail>
          </div>
        </DivDiscountWrapper>

        <DivDiscountInfoWrapper>
          {duration > 0? (
            
            <div>
              <SpanCurrentPrice>
                ${discountPrice} x {duration} Days
          </SpanCurrentPrice>
<SpanHelp>(You saved ${savedPrice})</SpanHelp>
          
          
            {duration <= 0?(
          <div>
            <SpanCurrentPrice>
              Bike price per day: ${discountPrice}
            </SpanCurrentPrice>
            </div>):null}
            </div>) : null}
          
          {duration > 0 ? (
            <div>
              <SpanLastPrice> ${totalPrice} </SpanLastPrice>
              <SpanCurrentPrice>${discountTotal}</SpanCurrentPrice>
              </div>) :null
           }
          <div>
            { duration >  0? (couponPercentage ==0?(<div><PLabel style={{marginBottom: "0"}}> Add Coupon:</PLabel> 
        <div>
          <input type="text" onChange={handleCouponChange} style={{ width: "10rem", fontSize: "1.5rem"}} />
          </div>
          <button type="submit" onClick={addCoupon} style={{margin:"0.5rem" , padding: "0.5rem", backgroundColor:"#59cb52", color: "white", fontSize: "20px", borderRadius: "5px", boxShadow: "full"  }} > Add</button>
          { couponPercentage ==0 && couponadd ? ((<h4 style={{color:"red"}}>Coupon Not Found!</h4>)):null}
{  couponPercentage != 0? (<h4>coupon saved:{couponPercentage}%</h4>): null}
          </div>): <h4>coupon added and saved:{couponPercentage}% !</h4>) : null  
            }
            </div>
    <div/>

        </DivDiscountInfoWrapper>
        
        
      </DivFormWrapper>

      <DiscountDetailsModal
        open={showModal}
        onClose={() => setShowModal(false)}
        bikePrice={verifiedOrder?.dailyBikePrice}
        discountPrices={discounts}
      />
    </>
  );
}



export default SelectPickupDropTime;
