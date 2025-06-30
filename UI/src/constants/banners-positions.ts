import { Options } from "@/types";

export const bannersPositions = [
  {
    label: "Home Page",
    options: [
      {
        label: "Option 1",
        is_available: true,
        value: "home_page_option1",
      },
      {
        label: "Option 2",
        is_available: true,
        value: "home_page_option2",
      },
      {
        label: "Option 3",
        is_available: true,
        value: "home_page_option3",
      },
      {
        label: "Option 4",
        is_available: true,
        value: "home_page_option4",
      },
      {
        label: "Option 5",
        is_available: true,
        value: "home_page_option5",
      },
    ],
  },
  {
    label: "Bike Brand Pages",
    options: [
      {
        label: "BMW Motorcycle Rentals",
        is_available: true,
        value: "bmw-motorcycle-rental-miami",
      },
      {
        label: "Harley-Davidson Rentals",
        is_available: true,
        value: "harley-davidson-rental-miami",
      },
      {
        label: "Ducati Motorcycle Rentals",
        is_available: true,
        value: "ducati-motorcycle-rental-miami",
      },
      {
        label: "Suzuki Motorcycle Rentals",
        is_available: true,
        value: "suzuki-motorcycle-rental-miami",
      },
      {
        label: "Honda Motorcycle Rentals",
        is_available: true,
        value: "honda-motorcycle-rental-miami",
      },
      {
        label: "Indian Motorcycle Rentals",
        is_available: true,
        value: "indian-motorcycle-rental-miami",
      },
      {
        label: "Yamaha Motorcycle Rentals",
        is_available: true,
        value: "yamaha-motorcycle-rental-miami",
      },
    ],
  },
  {
    label: "All Our Bike Page",
    options: [
      {
        label: "Option 1",
        is_available: true,
        value: "all_our_bike_option1",
      },
      {
        label: "Option 2",
        is_available: true,
        value: "all_our_bike_option2",
      },
      {
        label: "Option 3",
        is_available: true,
        value: "all_our_bike_option3",
      },
    ],
  },
  {
    label: "Blog Archive Page",
    options: [
      {
        label: "Option 1",
        is_available: true,
        value: "blog_archive_option1",
      },
    ],
  },
];

export const getBannerPositions = (usedPositions: string[]) => {
  let bannersPositionsMapped: Options[] = [];
  bannersPositions.forEach((bannerPosition) => {
    bannersPositionsMapped.push({
      label: bannerPosition.label,
      value: "",
      valid: false,
    });
    bannerPosition.options.forEach((option) => {
      const used = usedPositions
        ? usedPositions.find((p) => p === option.value) === undefined
        : false;
      bannersPositionsMapped.push({
        label: bannerPosition.label + " " + option.label,
        value: option.value,
        valid: used,
      });
    });
  });
  return bannersPositionsMapped;
};
