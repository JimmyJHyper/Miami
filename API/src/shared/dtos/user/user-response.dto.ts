import { ApiResponseProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { BaseResponseDto } from '..';

export class UserResponse extends BaseResponseDto {
  @ApiResponseProperty()
  @Expose()
  isVerified: boolean;

  @ApiResponseProperty()
  @Expose()
  firstName: string;

  @ApiResponseProperty()
  @Expose()
  lastName!: string;

  @ApiResponseProperty()
  @Expose()
  email!: string;

  @ApiResponseProperty()
  @Expose()
  phoneNumber!: string;

  @ApiResponseProperty()
  @Expose()
  dateOfBirth!: string;

  @ApiResponseProperty()
  @Expose()
  country!: string;

  @ApiResponseProperty()
  @Expose()
  city!: string;
  
  @ApiResponseProperty()
  @Expose()
  aptSuite!: string;
  
  @ApiResponseProperty()
  @Expose()
  streetAddress!: string;

  @ApiResponseProperty()
  @Expose()
  street!: string;

  @ApiResponseProperty()
  @Expose()
  houseNumber!: string;

  @ApiResponseProperty()
  @Expose()
  state!: string;

  @ApiResponseProperty()
  @Expose()
  postalCode!: string;

  @ApiResponseProperty()
  @Expose()
  role!: string;

  @ApiResponseProperty()
  @Expose()
  isLocked: string;
}
