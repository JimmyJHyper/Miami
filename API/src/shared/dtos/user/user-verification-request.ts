import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
} from 'class-validator';

export class UserVerificationRequest {
  @ApiProperty()
  @IsNotEmpty()
  userEmail: string;

}
