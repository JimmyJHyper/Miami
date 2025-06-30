export type BikeInsurance = {
  dailyRate: number;
  deposit: number;
  description: string;
  id: number;
  maxAge: number;
  minAge: number;
  popUpDescription: string;
  type: string;
};

export type RegisterValues = {
  bikeId: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  day: string;
  month: string;
  year: string;
  country: string;
  city: string;
  streetAddress: string;
  aptSuite: string;
  state: string;
  postalCode: string;
};

export type RentalDetails = {
  addOns: number[];
  dropOffDate: string;
  dropOffTime: string;
  duration: number;
  insuranceName: string;
  insurancePlanId: number;
  pickUpDate: string;
  pickUpTime: string;
  roadAssistance: boolean;
 
};

export enum GearTypes {
  DRIVER_HELMET,
  PASSENGER_HELMET,
  DRIVER_JACKET,
  PASSENGER_JACKET,
  DRIVER_VEST,
  PASSENGER_VEST,
  DRIVER_GLOVES,
  PASSENGER_GLOVES,
  PHONE_MOUNT,
  PASSENGER_SEAT,
  UNLIMITED_MILES,
}

export type BikeRentalAddOn = {
  type: GearTypes;
  title: string;
  pricePerDay: number;
};

export type BikeRentalAddOnCategory = {
  title: string;
  description?: string;
  addOns: BikeRentalAddOn[];
  unit?: string | null;
};

export type VerifiedOrder = {
  id: number;
  bikeBrand: string;
  bikeId: number;
  bikeImage: string;
  bikeModel: string;
  dailyBikePrice: number;
  dateOfBirth: string;
  isVerified: boolean;
  status: string;
  userId: number;
  verificationCode: string;
};

export type Accessory = {
  id: number;
  name: string;
  price: number;
  isUnlimited?: boolean;
};

export type CheckoutOrderData = {
  accessories: Accessory[];
  aptSuite: string;
  bikeBrand: string;
  bikeId: number;
  bikeImage: string;
  bikeModel: string;
  city: string;
  country: string;
  dailyBikePrice: number;
  dateOfBirth: string;
  dropOffDate: string;
  dropOffTime: string;
  email: string;
  firstName: string;
  id: number;
  insuranceDailyRate: number;
  insuranceDeposit: number;
  insuranceName: string;
  isVerified: boolean;
  lastName: string;
  orderTotalAmount: number;
  phoneNumber: string;
  pickUpDate: string;
  pickUpTime: string;
  postalCode: string;
  roadAssistance: boolean;
  state: string;
  status: string;
  streetAddress: string;
  userId: number;
  verificationCode: string;
};

export type PriceItem = {
  label: string;
  value: number;
  buttonText?: string;
  buttonAction?: () => void;
  description?: string;
  hasMargin?: boolean;
};

export type BookedDate = {
  dropOffDate: string;
  dropOffTime: string;
  pickUpDate: string;
  pickUpTime: string;
};
