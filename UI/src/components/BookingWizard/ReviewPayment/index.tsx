import React, { useEffect, useState } from "react";
import { MdPersonOutline } from "react-icons/md";
import { TbCalendarTime } from "react-icons/tb";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import TermsOfServiceModal from "../TermsOfServiceModal";
import RentalPolicyModal from "../RentalPolicyModal";
import PrivacyPolicyModal from "../PrivacyPolicyModal";
import DiscountDetailsModal from "../DiscountDetailsModal";
import { useBooking } from "@/providers/BookingProvider";
import { BookingContextType } from "@/providers/types";
import dayjs from "dayjs";
import { formattedDayjs, getDiscountPrice, getDuration } from "@/utils/helpers";
import { DivFormWrapper, Divider, PTitle } from "../common/styles";
import {
  CheckboxLabel,
  DivCheckoutFormOverlay,
  DivInfoWrapper,
  DivPaymentWrapper,
  DivPriceBar,
  PDescription,
  PSectionTitle,
  SpanAlert,
} from "./styles";
import { PriceItem } from "@/types";
import CheckoutForm from "../CheckoutForm";
import {
  contactNumber,
  dateTimeFormatString,
  pickUpLocation,
} from "@/constants/services";
import { useCouponPer } from "@/providers/GetCouponPercentageProvider";
import { CouponPercentageContextType } from "@/providers/types";

const stripePublicKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || "";
const stripePromise = loadStripe(stripePublicKey);

function ReviewPayment(discounts: any) {
  const { verifiedOrder, rentalDetails, checkoutOrderData, stripePaymentData } =
    useBooking() as BookingContextType;
  const [showDiscountDetailsModal, setShowDiscountDetailsModal] =
    useState(false);
    const{couponPercentage,couponFound,couponCode} = useCouponPer() as CouponPercentageContextType
  const [showTOSModal, setShowTOSModal] = useState(false);
  const [showRentalPolicyModal, setShowRentalPolicyModal] = useState(false);
  const [showPrivatePolicyModal, setShowPrivatePolicyModal] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(false);
  const pickUpDay = `${rentalDetails.pickUpDate}: ${rentalDetails.pickUpTime}`;
  const dropOffDay = `${rentalDetails.dropOffDate}: ${rentalDetails.dropOffTime}`;
  const pickUpDateTime = formattedDayjs(pickUpDay).format(dateTimeFormatString);
  const dropOffDateTime =
    formattedDayjs(dropOffDay).format(dateTimeFormatString);
  const duration = getDuration(pickUpDay, dropOffDay) || 0;
  const discountPrice = getDiscountPrice(
    duration,
    Number(checkoutOrderData?.dailyBikePrice),
    discounts,couponPercentage
  );

  const bikePrice = {
    label: `$${discountPrice} x ${duration} Days`,
    value: Number(discountPrice) * duration,
    buttonText: "Discount Details",
    buttonAction: () => setShowDiscountDetailsModal(true),
  };
  const damageCoveragePrice = {
    label: `${checkoutOrderData?.insuranceName} : $${checkoutOrderData?.insuranceDailyRate} x ${duration} Days`,
    value: Number(checkoutOrderData?.insuranceDailyRate) * duration,
    description: `($${checkoutOrderData?.insuranceDeposit} Deductible)`,
  };
  const roadAssistancePrice = {
    label: `$12 x ${duration} Days`,
    value: (checkoutOrderData?.roadAssistance ? 12 : 0) * duration,
  };

  const addOnsPrices = checkoutOrderData?.accessories.map((accessory) => {
    if (accessory.name == 'Unlimited Miles') {
      return {
        label: `${accessory.name} ($${accessory.price})`,
        value: accessory.price,
      };
    }
    else {
      return {
        label: `${accessory.name}` + ` ($${accessory.price} x ${duration} Days)`,
        value: accessory.price * duration,
      };
    }

  });
  const addOnValues = addOnsPrices?.map((price) => price.value) || [];
  const subTotal =
    bikePrice.value +
    damageCoveragePrice.value +
    roadAssistancePrice.value +
    addOnValues?.reduce((a, b) => a + b, 0);
  const subTotalPrice = {
    label: "Sub Total",
    value: subTotal,
  };
  const salesTaxPrice = {
    label: "Sales Tax 7%",
    value: subTotal * 0.07,
  };
  const totalPrice = {
    label: "Trip Total",
    value: subTotalPrice.value + salesTaxPrice.value,
    hasMargin: true,
  };
  const temporaryAuthorizationPrice = {
    label: "Temporary Authorization",
    value: Number(checkoutOrderData?.insuranceDeposit),
    hasMargin: true,
  };

  const stripeOptions = {
    clientSecret: stripePaymentData?.client_secret || "",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const displayPriceBar = (priceItem: PriceItem) => {
    const isTemp = priceItem.label.includes("Temporary");
    const priceValue = `$${parseFloat(String(priceItem.value)).toFixed(2)}`;
    return (
      <DivPriceBar key={priceItem.label} hasMargin={priceItem.hasMargin}>
        <p>
          {isTemp ? <span>{priceItem.label}</span> : priceItem.label}

          {priceItem?.buttonText ? (
            <button onClick={priceItem?.buttonAction}>
              {priceItem.buttonText}
            </button>
          ) : null}
          {priceItem.description ? (
            <>
              <br />
              <span>{priceItem.description}</span>
            </>
          ) : null}
        </p>
        <p>{isTemp ? <span>{priceValue}</span> : priceValue}</p>
      </DivPriceBar>
    );
  };

  return (
    <>
      <PTitle>Review & Pay</PTitle>
      <DivFormWrapper>
        <div>
          <PSectionTitle>
            <MdPersonOutline className="section-icon" />
            <span>Personal info and home address</span>
          </PSectionTitle>
          <DivInfoWrapper>
            <span>
              {checkoutOrderData?.firstName} {checkoutOrderData?.lastName}
            </span>
            <span>
              {checkoutOrderData?.email}{" "}
              {verifiedOrder?.isVerified ? (
                <strong>(Verified)</strong>
              ) : (
                "(Not Verified)"
              )}
            </span>
            <span>{checkoutOrderData?.phoneNumber}</span>
          </DivInfoWrapper>
          <DivInfoWrapper>
            <p className="info-label">Date of birth</p>
            <span>
              {dayjs(String(verifiedOrder?.dateOfBirth)).format("MMM DD, YYYY")}{" "}
              ({dayjs().diff(String(verifiedOrder?.dateOfBirth), "year")} Years
              old)
            </span>
          </DivInfoWrapper>
          <DivInfoWrapper>
            <p className="info-label">Home address</p>
            <span>
              {checkoutOrderData?.streetAddress} {checkoutOrderData?.city},{" "}
              {checkoutOrderData?.postalCode} , {checkoutOrderData?.state}
            </span>
            <span>{checkoutOrderData?.country}</span>
          </DivInfoWrapper>
          <Divider />
        </div>

        <div>
          <PSectionTitle>
            <TbCalendarTime className="section-icon" />
            <span>Pickup & Drop-off Date & Time</span>
          </PSectionTitle>
          <DivInfoWrapper>
            <p>
              {pickUpDateTime} - {dropOffDateTime}
            </p>
          </DivInfoWrapper>
          <DivInfoWrapper>
            <p>Pickup Location: {pickUpLocation}</p>
          </DivInfoWrapper>
          <DivInfoWrapper>
            <p>Our Contact: {contactNumber}</p>
          </DivInfoWrapper>
          <SpanAlert>Please be on time for your appointment</SpanAlert>
          <Divider />
        </div>
        <div>
          <PSectionTitle>Price breakdown</PSectionTitle>
          {displayPriceBar(bikePrice)}
          {couponFound && couponPercentage>0?(<p>{couponCode} Coupon Saved {couponPercentage}%</p>):null}
          <PSectionTitle>Damage Coverage</PSectionTitle>
          {displayPriceBar(damageCoveragePrice)}
          {roadAssistancePrice.value ? (
            <>
              <PSectionTitle>Roadside Assistance</PSectionTitle>
              {displayPriceBar(roadAssistancePrice)}
            </>
          ) : null}
          {addOnsPrices?.length ? (
            <>
              <PSectionTitle>Add-ons</PSectionTitle>
              {addOnsPrices?.map((addOnPrice) => displayPriceBar(addOnPrice))}
            </>
          ) : null}
          <Divider />
        </div>
        <div>
          {displayPriceBar(subTotalPrice)}
          {displayPriceBar(salesTaxPrice)}
          {displayPriceBar(totalPrice)}
          {displayPriceBar(temporaryAuthorizationPrice)}
          <PDescription>
            *A Temporary Authorization (Hold) for $
            {temporaryAuthorizationPrice.value} will be placed on your card to
            confirm funds availability in case of damage (insurance deductible).
          </PDescription>
          <PDescription>
            *For reservations more than 7 days in advance, the temporary hold
            will be released immediately when the reservation request is
            approved. The temporary hold will then be placed on the pick-up
            date.
          </PDescription>
          <Divider />
        </div>
        <div>
          <FormControlLabel
            checked={agreePolicy}
            onChange={() => setAgreePolicy(!agreePolicy)}
            control={<Checkbox />}
            label={
              <CheckboxLabel>
                I have read and agree to the{" "}
                <button onClick={() => setShowTOSModal(true)}>
                  terms and conditions{" "}
                </button>
                ,{" "}
                <button onClick={() => setShowRentalPolicyModal(true)}>
                  rental policy
                </button>{" "}
                and{" "}
                <button onClick={() => setShowPrivatePolicyModal(true)}>
                  privacy policy
                </button>
              </CheckboxLabel>
            }
          />
          <Divider />
        </div>
        <DivPaymentWrapper>
          {!agreePolicy && (
            <DivCheckoutFormOverlay>
              please check the agreement checkbox
            </DivCheckoutFormOverlay>
          )}
          {stripePaymentData?.client_secret && (
            <Elements stripe={stripePromise} options={stripeOptions}>
              <CheckoutForm />
            </Elements>
          )}
        </DivPaymentWrapper>
      </DivFormWrapper>
      <TermsOfServiceModal
        open={showTOSModal}
        onClose={() => setShowTOSModal(false)}
      />
      <RentalPolicyModal
        open={showRentalPolicyModal}
        onClose={() => setShowRentalPolicyModal(false)}
      />
      <PrivacyPolicyModal
        open={showPrivatePolicyModal}
        onClose={() => setShowPrivatePolicyModal(false)}
      />
      <DiscountDetailsModal
        open={showDiscountDetailsModal}
        onClose={() => setShowDiscountDetailsModal(false)}
        bikePrice={verifiedOrder?.dailyBikePrice}
        discountPrices={discounts}
      />
    </>
  );
}

export default ReviewPayment;
