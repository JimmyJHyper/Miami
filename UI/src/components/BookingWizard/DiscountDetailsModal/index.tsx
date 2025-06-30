import GeneralModal from "@/components/common/GeneralModal";
import React from "react";
import { DivPricingWrapper, H3Title, PDescription } from "./styles";
import { json } from "stream/consumers";

type Props = {
  open: boolean;
  onClose: () => void;
  bikePrice: number | undefined;
  discountPrices: any | undefined;
  
};

function DiscountDetailsModal({ open, onClose, bikePrice, discountPrices}: Props) {
  let discounts: ({
    label: string;
    value: number | undefined;
  } | {
    label: string;
    value: string;
  })[] = [];
  
  if (discountPrices != undefined) {
    let newPrices:any ={};
    try {
      newPrices = JSON.parse(discountPrices.discounts);
    } catch (error) {      
      newPrices = JSON.parse(discountPrices);
    }
    

    discounts = [
      {
        label: "1 Day",
        value: bikePrice,
      },
      {
        label: `2 Days (${newPrices.two}% discount)`,
        value: (bikePrice! * (1-(newPrices.two / 100))).toFixed(2),
      },
      {
        label: `3 Days (${newPrices.three}% discount)`,
        value: (bikePrice! * (1-(newPrices.three / 100))).toFixed(2),
      },
      {
        label: `4 Days (${newPrices.four}% discount)`,
        value: (bikePrice! * (1-(newPrices.four / 100))).toFixed(2),
      },
      {
        label: `+5 Days (${newPrices.five}% discount)`,
        value: (bikePrice! * (1-(newPrices.five / 100))).toFixed(2),
      },
    ];
  }

  return (
    <GeneralModal open={open} onClose={onClose}>
      <H3Title>Discount Details</H3Title>
      <PDescription>
        The longer your trip the greater your discount!
      </PDescription>

      <DivPricingWrapper className="pricing-header">
        <span>Rental Days (24-hour periods)</span>
        <span>Daily Rates</span>
      </DivPricingWrapper>

      {discounts.map((discount, idx) => (
        <DivPricingWrapper key={idx}>
          <span>{discount.label}</span>
          <span>${discount.value} / Day</span>
        </DivPricingWrapper>
      ))}
    </GeneralModal>
  );
}

export default DiscountDetailsModal;
