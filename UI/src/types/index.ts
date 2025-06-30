export * from "./booking";
export * from "./booking/payloads";
export * from "./booking/responses";
export * from "./marketing";
export * from "./marketing/responses";


export type Options = {
  label: string;
  value: string | number;
  valid?: boolean;
};

export type CardOption = {
  id?: number;
  title: string;
  subTitle: string;
  description: string;
  helpText?: string;
};
