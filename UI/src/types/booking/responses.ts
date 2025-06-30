import { BikeInsurance } from ".";

export type BikeInsurancesResponse = {
  data: {
    id: number;
    insurances: BikeInsurance[];
  };
  status: number;
};

export type StripePaymentData = {
  id: string;
  customer: string;
  client_secret: string;
  currency: string;
  confirmation_method: string;
  created: number;
  description: string;
  amount: number;
  amount_capturable: number;
  amount_received: number;
};
