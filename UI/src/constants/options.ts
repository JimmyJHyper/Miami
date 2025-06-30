import {
  BikeRentalAddOnCategory,
  CardOption,
  GearTypes,
  Options,
} from "@/types";
import { countries } from "./countries";

export const monthOptions: Options[] = [
  {
    label: "January",
    value: 1,
  },
  {
    label: "February",
    value: 2,
  },
  {
    label: "March",
    value: 3,
  },
  {
    label: "April",
    value: 4,
  },
  {
    label: "May",
    value: 5,
  },
  {
    label: "June",
    value: 6,
  },
  {
    label: "July",
    value: 7,
  },
  {
    label: "August",
    value: 8,
  },
  {
    label: "September",
    value: 9,
  },
  {
    label: "October",
    value: 10,
  },
  {
    label: "November",
    value: 11,
  },
  {
    label: "December",
    value: 12,
  },
];

export const valuableTimes = [
  "8:00 AM",
  "8:30 AM",
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
];

export const timeOptions = valuableTimes.map((time) => ({
  label: time,
  value: time,
  valid: true,
}));

export const dayOptions: Options[] = Array(31)
  .fill(null)
  .map((_, index) => ({ label: `${index + 1}`, value: index + 1 }));

const startYear = 1930;
const currentYear = new Date().getFullYear();
const yearsLength = currentYear - startYear;

export const yearOptions: Options[] = Array(yearsLength)
  .fill(startYear)
  .map((value, index) => ({ label: `${value + index}`, value: value + index }))
  .sort((a, b) => b.value - a.value);

export const countryOptions: Options[] = countries.map((country) => ({
  label: country.name,
  value: country.name,
}));

export const ageOptions: Options[] = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "21 - 25",
    value: 25,
  },
  {
    label: "26 - 35",
    value: 35,
  },
  {
    label: "36 Above",
    value: 999,
  },
];

export const createAgeOptions: Options[] = [

  {
    label: "21 - 25",
    value: 25,
  },
  {
    label: "26 - 35",
    value: 35,
  },
  {
    label: "36 Above",
    value: 999,
  },
];

export const coverageTypes: Options[] = [
  {
    label: "Minimum",
    value: "minimum",
  },
  {
    label: "Standard",
    value: "standard",
  },
  {
    label: "Premium",
    value: "premium",
  },
];

export const addonCategories: BikeRentalAddOnCategory[] = [
  {
    title: "Upgrade To Unlimited Travel Miles ",
    addOns: [
      {
        type: GearTypes.UNLIMITED_MILES,
        title: "Unlimited Miles",
        pricePerDay: 100,
      },
    ],
    description: "This upgrade will give you unlimited travel miles for this booking.",
    unit:null
  },
  {
    title: "Helmet Rentals",
    addOns: [
      {
        type: GearTypes.DRIVER_HELMET,
        title: "Driver Helmet",
        pricePerDay: 15,
      },
      {
        type: GearTypes.PASSENGER_HELMET,
        title: "Passenger Helmet",
        pricePerDay: 15,
      },
    ],
    description: "Full, open and half helmets of various sizes available.",
    unit:'Day',
  },
  {
    title: "Jacket Rentals",
    addOns: [
      {
        type: GearTypes.DRIVER_JACKET,
        title: "Driver Jacket",
        pricePerDay: 25,
      },
      {
        type: GearTypes.PASSENGER_JACKET,
        title: "Passenger Jacket",
        pricePerDay: 25,
      },
    ],
    description: "Leather and mesh jackets of various sizes available.",
    unit:'Day',
  },
  {
    title: "Vest Rentals",
    addOns: [
      {
        type: GearTypes.DRIVER_VEST,
        title: "Driver Vest",
        pricePerDay: 20,
      },
      {
        type: GearTypes.PASSENGER_VEST,
        title: "Passenger Vest",
        pricePerDay: 20,
      },
    ],
    description: "Vests of various sizes available.",
    unit:'Day',
  },
  {
    title: "Glove Rentals",
    addOns: [
      {
        type: GearTypes.DRIVER_GLOVES,
        title: "Driver Gloves",
        pricePerDay: 5,
      },
      {
        type: GearTypes.PASSENGER_GLOVES,
        title: "Passenger Gloves",
        pricePerDay: 5,
      },
    ],
    description: "Gloves of various sizes available.",
    unit:'Day',
  },
  {
    title: "Accessory Rentals",
    addOns: [
      {
        type: GearTypes.PHONE_MOUNT,
        title: "Phone Mount",
        pricePerDay: 5,
      },
      {
        type: GearTypes.PASSENGER_SEAT,
        title: "Passenger Seat",
        pricePerDay: 10,
      },
    ],
    unit:'Day',
  },
];

export const errorLabels = {
  firstName: "First name",
  lastName: "Last name",
  email: "Email",
  phoneNumber: "Phone number",
  month: "Month date of birth",
  day: "Day date of birth",
  year: "Year date of birth",
  country: "Country",
  streetAddress: "Street address",
  city: "City",
};

export const defaultRegisterValues = {
  bikeId: 0,
  firstName: "",
  lastName: "",
  email: "",
  password:"",
  phoneNumber: "",
  day: "",
  month: "",
  year: "",
  country: "",
  city: "",
  streetAddress: "",
  aptSuite: "",
  state: "",
  postalCode: "",
};

export const defaultRentalDetails = {
  addOns: [],
  dropOffDate: "",
  dropOffTime: "",
  duration: 0,
  insuranceName: "",
  insurancePlanId: 0,
  pickUpDate: "",
  pickUpTime: "",
  roadAssistance: false,
  couponName:""
};
