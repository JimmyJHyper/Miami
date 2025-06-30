import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, MaxLength, MinLength } from 'class-validator';

export class OrderRequest {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  orderId: number;

}
