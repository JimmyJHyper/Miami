import { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { Alert } from "@mui/material";
import { ButtonSubmit, FormCheckout } from "./styles";
import { useBooking } from "@/providers/BookingProvider";
import {
  BookingContextType,
  CouponPercentageContextType,
  MarketingContextType,
  UserContextType,
} from "@/providers/types";
import { getDuration } from "@/utils/helpers";
import { OnCheckoutPayload, StripePaymentPayload } from "@/types";
import { PaymentMethod } from "@stripe/stripe-js";
import { stripeRefundPaymentApi } from "@/apis/bookingApis";
import { PLabel } from "../common/styles";
import { useMarketing } from "@/providers/MarketingProvider";
import { useUser } from "@/providers/UsersProvider";
import { useCouponPer } from "@/providers/GetCouponPercentageProvider";

const CheckoutForm = () => {
  const { selectedUser } = useUser() as UserContextType;
  const { selectedBike } = useMarketing() as MarketingContextType;
  const stripe = useStripe();
  const elements = useElements();
  const {couponPercentage,couponCode}=useCouponPer() as CouponPercentageContextType

  // Load error message from localStorage if it exists
  const [errorMessage, setErrorMessage] = useState<string>(
    localStorage.getItem("checkoutError") || ""
  );

  const {
    rentalDetails,
    stripePaymentData,
    verifiedOrder,
    orderId,
    completeOrder,
    stripePaymentOrder,
  } = useBooking() as BookingContextType;

  useEffect(() => {
    // Sync error message with local storage
    if (errorMessage) {
      localStorage.setItem("checkoutError", errorMessage);
    } else {
      localStorage.removeItem("checkoutError");
    }
  }, [errorMessage]);

  const triggerStripePayment = () => {
    const personName = `${selectedUser?.firstName ?? ""} ${
      selectedUser?.lastName ?? ""
    }`;
    const pickUpDay = `${rentalDetails.pickUpDate}: ${rentalDetails.pickUpTime}`;
    const dropOffDay = `${rentalDetails.dropOffDate}: ${rentalDetails.dropOffTime}`;
    const requestBody: StripePaymentPayload = {
      addOns: rentalDetails.addOns,
      bikeId: Number(selectedBike?.id),
      bikeInsuranceId: rentalDetails.insurancePlanId,
      bikePrice: Number(verifiedOrder?.dailyBikePrice),
      dropOffDate: rentalDetails.dropOffDate,
      dropOffTime: rentalDetails.dropOffTime,
      duration: getDuration(pickUpDay, dropOffDay) || 0,
      personName,
      pickUpDate: rentalDetails.pickUpDate,
      pickUpTime: rentalDetails.pickUpTime,
      roadAssistance: rentalDetails.roadAssistance,
      couponCode
      
    };

    stripePaymentOrder(requestBody, orderId);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        expand: ["payment_method"],
      },
      redirect: "if_required",
    });

    if (result.error) {
      let errorMsg = "";

      switch (result.error.decline_code) {
        case "insufficient_funds":
          errorMsg = "The payment failed due to insufficient funds.";
          break;
        default:
          errorMsg = result.error.message || "Unexpected Error!";
          break;
      }

      setErrorMessage(
        `${errorMsg} Please try a different payment method or contact your bank.`
      );
    } else {
      console.log(rentalDetails);
      const paymentIntent = result.paymentIntent;

      if (paymentIntent) {
        const paymentMethod = (paymentIntent.payment_method as PaymentMethod)
          ?.card;
        const cardBrand = paymentMethod?.brand;

        if (cardBrand === "amex") {
          setErrorMessage(
            "We do not accept American Express payments. Please use a different card."
          );

          await stripeRefundPaymentApi({
            intentId: paymentIntent.id,
          });

          triggerStripePayment();
          return;
        }
      } else {
        setErrorMessage("Payment could not be confirmed.");
        triggerStripePayment();
      }
      const pickUpDay = `${rentalDetails.pickUpDate}: ${rentalDetails.pickUpTime}`;
      const dropOffDay = `${rentalDetails.dropOffDate}: ${rentalDetails.dropOffTime}`;

      const requestBody: OnCheckoutPayload = {
        accessories: rentalDetails.addOns,
        dropOffDate: rentalDetails.dropOffDate,
        dropOffTime: rentalDetails.dropOffTime,
        duration: getDuration(pickUpDay, dropOffDay) || 0,
        insuranceName: rentalDetails.insuranceName,
        insurancePlanId: rentalDetails.insurancePlanId,
        pickUpDate: rentalDetails.pickUpDate,
        pickUpTime: rentalDetails.pickUpTime,
        roadAssistance: rentalDetails.roadAssistance,
        stripeCustomerId: stripePaymentData?.customer as string,
        stripePaymentId: stripePaymentData?.id as string,
        verificationCode: String(verifiedOrder?.verificationCode),
        couponCode:couponCode
      };

      completeOrder(requestBody, orderId);
    }
  };

  return (
    <>
      <FormCheckout onSubmit={handleSubmit}>
        {errorMessage && (
          <Alert
            style={{ marginBottom: "10px" }}
            severity="error"
            onClose={() => {
              setErrorMessage("");
            }}
          >
            {errorMessage}
          </Alert>
        )}
        <PLabel style={{ color: "red" }}>
          * We do not accept American Express payments.
        </PLabel>
        <PaymentElement />
        <ButtonSubmit disabled={!stripe}>Send reservation</ButtonSubmit>
      </FormCheckout>
    </>
  );
};

export default CheckoutForm;
