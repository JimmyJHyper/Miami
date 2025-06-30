import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
} from 'class-validator';

export class LockUserRequest {
  @ApiProperty()
  @IsNotEmpty()
  type: number;

}
