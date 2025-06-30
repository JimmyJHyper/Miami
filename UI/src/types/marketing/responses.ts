import { Bike, BikeType, Brand, MediaItem } from ".";
import { Banner, Coupon, User } from "../admin/admin";

export type AllBikesResponse = {
  data: Bike[];
  status: number;
};

export type BikeResponse = {
  data: Bike;
  status: number;
};

export type BikeMediaItemsResponse = {
  data: MediaItem[];
  status: number;
};

export type AllTypesResponse = {
  data: BikeType[];
  status: number;
};

export type AllBrandsResponse = {
  data: Brand[];
  status: number;
};

export type AllUsersResponse = {
  data: User[];
  status: number;
};

export type UserResponse = {
  data: User;
  status: number;
};

export type AllBannersResponse = {
  data: Banner[];
  status: number;
};

export type BannerResponse = {
  data: Banner;
  status: number;
};
export type AllCouponsResponse = {
  data: Coupon[];
  status: number;
};

export type CouponResponse = {
  data: Coupon;
  status: number;
};

