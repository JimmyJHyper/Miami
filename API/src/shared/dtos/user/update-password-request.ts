import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class UpdatePasswordRequest {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(8, {
    message: 'Password must be more than or equal to 8 characters',
  })
  password: string;
}
