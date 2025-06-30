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





const CouponcreateDiv = () => {
  

  const [code, setCode] = useState<string | null>(null);
  const [percentage,setPercentage] = useState<number | null>(null)

  
  const handleSubmit = async (event: React.FormEvent) => {
     event.preventDefault();

    const obj = {
      code,
      percentage,
      activated:true
    };
    await createCoupon(obj)
      .then(() => {
        AlertMessage({ type: "success", message: "Done" });
      })
      .catch(() => {
        AlertMessage({ type: "error", message: "Failed" });
      });
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
              label="Percentage"
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
      <ButtonSubmit>Create</ButtonSubmit>
    </FormCheckout>
  );
};

export default CouponcreateDiv;
