import Link from "next/link";
import {
  StyledTable,
  StyledTableCell,
  DivInputWrapper,
  ButtonSave,
} from "./styles";
import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { log } from "console";
import { updateBasePrice } from "@/apis/adminApis";
import AlertMessage from "@/components/Alerts/AlertMessage";
import { useAdmin } from "@/providers/AdminProviders";
import { BasePricePayload } from "@/types/admin/admin";
import { AdminContextType } from "@/providers/types";

type Bike = {
  id: number;
  name: string;
  regularPrice: number;
};

interface BasePricesTableProps {
  bikes: Bike[];
  discountPercentage: number;
  onDiscountPercentageChange: (discountPercentage: number) => void;
}

const BasePricesTable: React.FC<BasePricesTableProps> = ({
  bikes,
  discountPercentage,
  onDiscountPercentageChange,
}) => {
  const [basePrices, setBasePrices] = useState(
    bikes.map((bike) => {
      return bike.regularPrice;
    })
  );
  const [alert, setAlert] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    if (basePrices.length <= 0) {
      setBasePrices(bikes.map((bike) => bike.regularPrice));
    }
  }, [bikes]);

  const handleBasePriceChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const newBasePrices = [...basePrices];
    newBasePrices[index] = Number(e.target.value);
    setBasePrices(newBasePrices);
  };

  const onSave = async (bikeId: number, basePrice: number) => {
    const updateBody: BasePricePayload = {
      regularPrice: basePrice,
      discountPercentage: discountPercentage,
    };
    try {
      await updateBasePrice(bikeId, updateBody);
      AlertMessage({
        type: "success",
        message: "Done",
      });
    } catch (error) {
      AlertMessage({
        type: "error",
        message: "Failed",
      });
    }
  };

  return (
    <div>
      <div>
        <DivInputWrapper>
          <TextField
            className="text-input"
            label="Discount Percentage"
            variant="outlined"
            type="number"
            value={discountPercentage}
            onChange={(e) => onDiscountPercentageChange(Number(e.target.value))}
          />
        </DivInputWrapper>
      </div>
      <StyledTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Base Price</th>
            <th>Discount Price</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {bikes.map((bike, index) => {
            return (
              <tr key={bike.id}>
                <StyledTableCell>{bike.id}</StyledTableCell>
                <StyledTableCell>{bike.name}</StyledTableCell>
                <StyledTableCell>
                  <TextField
                    className="text-input"
                    label="Daily Rate"
                    variant="outlined"
                    type="number"
                    value={basePrices[index]}
                    onChange={(e) => handleBasePriceChange(e, index)}
                  />
                </StyledTableCell>
                <StyledTableCell>
                  <TextField
                    className="text-input"
                    label="Discount Price"
                    variant="outlined"
                    type="number"
                    value={Number(
                      basePrices[index] -
                        basePrices[index] * (discountPercentage / 100)
                    ).toFixed(2)}
                  />
                </StyledTableCell>
                <ButtonSave onClick={() => onSave(bike.id, basePrices[index])}>
                  Save
                </ButtonSave>
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    </div>
  );
};

export default BasePricesTable;
