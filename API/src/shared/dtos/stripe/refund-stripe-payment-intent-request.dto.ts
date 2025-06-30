import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { GearTypes } from '../../../shared/calculations';

export class RefundStripePaymentIntentRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  intentId: string;
}
