import {
  Row,
  Col,
  DivInputWrapper,
  FormCheckout,
  ButtonSubmit,
} from "./styles";
import { Input, TextField } from "@mui/material";
import { useEffect, useState } from "react";



import AlertMessage from "@/components/Alerts/AlertMessage";
import { createCoupon } from "@/apis/couponsApis";
import { Coupon } from "@/types/admin/admin";
import { useCoupon } from "@/providers/CouponsProvider";
import { CouponContextType } from "@/providers/types";
import { updateCoupon } from "@/apis/couponsApis";
import { useRouter } from "next/router";

interface CouponTableProps {
  coupon?: Coupon;
}

const CouponEditDiv: React.FC<CouponTableProps> = ({ coupon }) => {
 

  const [code, setCode] = useState<string | null>(null);
  const [percentage, setPercentage] = useState<number | null>(null);
  const router = useRouter()

  useEffect(() => {
    
    if (coupon !== undefined) {
      setCode(coupon.code || ""); // Ensure it's not null or undefined
      setPercentage(coupon.percentage || 0);
      
    }
    
  }, [coupon]); // Make sure to include dependencies for useEffect

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const obj = {
      code,
      percentage,
      activated:true
      
    };
    if (coupon){
      await updateCoupon(Number(coupon.id), obj)
        .then((res) => {})
        .catch((error) => {
          AlertMessage({
            type: "error",
            message: "Failed",
          });
        });
      }

     
  };


  return (
    <FormCheckout onSubmit={handleSubmit}>
     
      
     
      <Row>
        <Col>
          <DivInputWrapper>
            <TextField
              className="text-input"
              label="Code"
              variant="outlined"
              type="text"
              value={code || ""}
              onChange={(e) => setCode(e.target.value)}
              required
            />
          </DivInputWrapper>
        </Col>
        <TextField
              className="text-input"
              label="Code"
              variant="outlined"
              type="text"
              value={percentage || ""}
              onChange={(e) => setPercentage(+e.target.value)}
              required
            />
        <Col>
        <DivInputWrapper>
             
        </DivInputWrapper>
        </Col>
       
      </Row>
      <ButtonSubmit type="submit">Update</ButtonSubmit>
    </FormCheckout>
  );
};

export default CouponEditDiv;
