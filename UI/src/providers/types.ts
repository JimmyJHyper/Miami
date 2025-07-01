import {
  Bike,
  BikeInsurance,
  BikeType,
  Brand,
  CheckoutOrderData,
  InitialOrderPayload,
  MediaItem,
  OnCheckoutPayload,
  OrderPayload,
  RegisterValues,
  RentalDetails,
  StripePaymentData,
  StripePaymentPayload,
  UpdateInsurancePayload,
  VerifiedOrder,
  VerifyOrderPayload,
} from "@/types";
import { Banner, BasePricePayload, User, Coupon } from "@/types/admin/admin";
import { BookedDate } from "@/types/booking";

export type BookingContextType = {
  bookingStep: number;
  setBookingStep: React.Dispatch<React.SetStateAction<number>>;
  registerValues: RegisterValues;
  setRegisterValues: React.Dispatch<React.SetStateAction<RegisterValues>>;
  registerErrors: Record<string, string>;
  setRegisterErrors: React.Dispatch<
    React.SetStateAction<Record<string, string>>
  >;
  validateRegisterValues: (name: string, value: string) => void;
  hasRegisterError: () => boolean;
  rentalDetails: RentalDetails;
  setRentalDetails: React.Dispatch<React.SetStateAction<RentalDetails>>;
  bikeInsurances: BikeInsurance[] | undefined;
  setBikeInsurances: React.Dispatch<
    React.SetStateAction<BikeInsurance[] | undefined>
  >;
  getBikeInsurances: (bikeId: number) => void;
  updatedInsurance: BikeInsurance | undefined;
  updateBikeInsuranceById: (
    body: UpdateInsurancePayload,
    bikeId: number,
    insuranceId: number
  ) => void;
  orderId: number;
  initialOrder: (body: InitialOrderPayload, canMoveNext: boolean) => void;
  verifiedOrder: VerifiedOrder | undefined;
  setVerifiedOrder: React.Dispatch<
    React.SetStateAction<VerifiedOrder | undefined>
  >;
  verifyCodeError: string;
  setVerifyCodeError: React.Dispatch<React.SetStateAction<string>>;
  verifyOrder: (body: OrderPayload) => void;
  // verifyOrder: (body: VerifyOrderPayload, orderId: number) => void;
  isVerified: boolean;
  setIsVerified: React.Dispatch<React.SetStateAction<boolean>>;
  resendCodeSuccess: boolean;
  resendCode: (orderId: number) => void;
  stripePaymentOrder: (body: StripePaymentPayload, orderId: number) => void;
  onCheckout: (body: OnCheckoutPayload, orderId: number) => void;
  stripePaymentData: StripePaymentData | undefined;
  checkoutOrderData: CheckoutOrderData | undefined;
  completeOrder: (body: OnCheckoutPayload, orderId: number) => void;
  birthdayError: string;
  validateBirthday: () => void;
  validateAll: () => void;
  damageCoverageError: string;
  setDamageCoverageError: React.Dispatch<React.SetStateAction<string>>;
  pickUpTimeError: boolean;
  setPickUpTimeError: React.Dispatch<React.SetStateAction<boolean>>;
  dropOffTimeError: boolean;
  setDropOffTimeError: React.Dispatch<React.SetStateAction<boolean>>;
  initializeBooking: () => void;
  bikeBookedDates: BookedDate[] | undefined;
  getBikeBookedDates: (bikeId: number) => void;
  bikeBookedDiscounts: any | undefined;
  getBikeBookedDiscounts: (bikeId: number) => void;
};

export type MarketingContextType = {
  selectedBlogTitle: string;
  setSelectedBlogTitle: React.Dispatch<React.SetStateAction<string>>;
  screenSize: {
    width: number;
    height: number;
  };
  allBikes: Bike[] | undefined;
  selectedBikeId: number;
  setSelectedBikeId: React.Dispatch<React.SetStateAction<number>>;
  selectedBike: Bike | undefined;
  selectedBikeMediaItems: MediaItem[] | undefined;
  allBikeTypes: BikeType[] | undefined;
  allBrands: Brand[] | undefined;
  selectedBikeTypeId: number;
  setSelectedBikeTypeId: React.Dispatch<React.SetStateAction<number>>;
  bikesByType: Bike[] | undefined;
  bikesByBrand: Bike[] | undefined;
  getAllBikes: () => void;
  getAllBikesAdmin: () => void;
  getAllBikeTypes: () => void;
  getAllBrands: () => void;
  getBikeById: (id: number) => void;
  isGetAllBikesLoading: boolean;
  setAllBrands: React.Dispatch<React.SetStateAction<Brand[] | undefined>>;
  setAllBikes: React.Dispatch<React.SetStateAction<Bike[] | undefined>>;
  setAllBikeTypes: React.Dispatch<React.SetStateAction<BikeType[] | undefined>>;
  getAllAdminBrands: () => void;
};

export type AdminContextType = {
  updateBasePriceById: (bikeId: number, body: BasePricePayload) => void;
};

export type sweetAlertContextType = {
  type: "success" | "error";
  message: string;
};

export type UserContextType = {
  selectedUserId: number;
  setSelectedUserId: React.Dispatch<React.SetStateAction<number>>;
  selectedUser: User | undefined;
  token: string | undefined;
  emailFilter: string | undefined;
  nameFilter: string | undefined;
  phoneFilter: string | undefined;
  month: string | undefined;
  day: string | undefined;
  year: string | undefined;
  birthdateFilter: string | undefined;
  setToken: React.Dispatch<React.SetStateAction<string | undefined>>;
  setMonth: React.Dispatch<React.SetStateAction<string | undefined>>;
  setDay: React.Dispatch<React.SetStateAction<string | undefined>>;
  setYear: React.Dispatch<React.SetStateAction<string | undefined>>;
  allUsers: User[] | undefined;
  getAllUsers: () => void;
  emailSearchUser: (email: string) => void;
  nameSearchUser: (name: string) => void;
  phoneSearchUser: (phone: string) => void;
  birthdateSearchUser: (birthdate: string) => void;
  filter: () => void;
  getUserById: (id: number) => void;
  setIsGetAllUsersLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setAllUsers: React.Dispatch<React.SetStateAction<User[] | undefined>>;
  validateToken: () => void;
  isGetAllUsersLoading: boolean;
};

export type BannerContextType = {
  selectedBannerId: number;
  setSelectedBannerId: React.Dispatch<React.SetStateAction<number>>;
  usedPositions: string[];
  selectedBanner: Banner | undefined;
  allBanners: Banner[] | undefined;
  getAllBanners: () => void;
  getBannerById: (id: number) => void;
  setIsGetAllBannersLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setAllBanners: React.Dispatch<React.SetStateAction<Banner[] | undefined>>;
  isGetAllBannersLoading: boolean;
};
export type CouponContextType = {
  selectedCouponId: number;
  setSelectedCouponId: React.Dispatch<React.SetStateAction<number>>;
  selectedCoupon: Coupon | undefined;
  allCoupons: Coupon[] | undefined;
  getAllCoupons: () => void;
  getCouponById: (id: number) => void;
  setIsGetAllCouponsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setAllCoupons: React.Dispatch<React.SetStateAction<Coupon[] | undefined>>;
  isGetAllCouponsLoading: boolean;
};
export type CouponPercentageContextType = {
  couponCode: string;
  setCouponCode: React.Dispatch<React.SetStateAction<string>>;
  couponPercentage: number;
  setCouponPercentage: React.Dispatch<React.SetStateAction<number>>;
  couponInput: string;
  setCouponInput: React.Dispatch<React.SetStateAction<string>>;
  couponFound: boolean;
  setCouponFound: React.Dispatch<React.SetStateAction<boolean>>;
};
