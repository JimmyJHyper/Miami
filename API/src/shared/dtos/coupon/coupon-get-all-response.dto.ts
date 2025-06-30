import { Expose } from 'class-transformer';
import { BikeRentalBase } from "src/modules/entity/base.entity";
import { ApiResponseProperty } from "@nestjs/swagger";

export class CouponGetAllResponseDto{
  @ApiResponseProperty()
  @Expose()
  "id": number;
  @ApiResponseProperty()
  @Expose()
  "code": string;
  @ApiResponseProperty()
  @Expose()
  "percentage": number;
  @ApiResponseProperty()
  @Expose()
  "activated": boolean
}