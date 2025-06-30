import { MediaItem } from "../marketing";

export type BasePricePayload = {
  regularPrice: number;
  discountPercentage: number;
};

export type User = {
  id: number;
  isVerified: boolean;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  country: string;
  state: string;
  postalCode: string;
  role: string;
  isLocked: boolean;
  city: string;
  streetAddress: string;
  aptSuit: string;
};

export type UserRegisterResponse = {
  user: User;
  isExistingCustomer: boolean;
};

export type Banner = {
  id: number;
  isEnabled: boolean;
  title: string;
  url?: string;
  altText: string;
  positions: string[];
  mediaItem: MediaItem;
  mediaMediumItem: MediaItem;
  mediaSmallItem: MediaItem;
};
export type Coupon = {
id:number;
code:string;
percentage:number;
activated:boolean;
}



export type CouponeCreate = {
code:string;
percentage:number;
activated:boolean;
}
