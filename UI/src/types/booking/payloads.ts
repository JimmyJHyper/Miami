import { Dayjs } from "dayjs";

export type UpdateInsurancePayload = {
  type: string | undefined;
  minAge: number | undefined;
  maxAge: number | undefined;
  dailyRate: number | undefined;
  deposit: number | undefined;
  description: string | undefined;
  popUpDescription: string | undefined;
};

export type InitialOrderPayload = {
  bikeId: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  country: string;
  city: string;
  streetAddress: string;
  aptSuite: string;
  state: string;
  postalCode: string;
  
  
  
};

export type VerifyOrderPayload = {
  email: string;
  verificationCode: string;
};

export type OrderPayload = {
  orderId: number;
};

export type OnCheckoutPayload = {
  accessories: number[];
  dropOffDate: string;
  dropOffTime: string;
  duration: number;
  insuranceName: string;
  insurancePlanId: number;
  pickUpDate: string;
  pickUpTime: string;
  roadAssistance: boolean;
  stripeCustomerId: string;
  stripePaymentId: string;
  verificationCode: string;
  couponCode:string;
  
};

export type StripePaymentPayload = {
  addOns: number[];
  bikeId: number;
  bikeInsuranceId: number;
  bikePrice: number;
  dropOffDate: string;
  dropOffTime: string;
  duration: number;
  personName: string;
  pickUpDate: string;
  pickUpTime: string;
  roadAssistance: boolean;
  couponCode:string;
  
  
  
};

export type StripeRefundPaymentPayload = {
  intentId: string;
  
};

