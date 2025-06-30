import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
} from 'class-validator';

export class RequestResetPasswordRequest {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

}
