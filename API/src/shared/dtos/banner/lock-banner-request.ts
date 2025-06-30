import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
} from 'class-validator';

export class LockBannerRequest {
  @ApiProperty()
  @IsNotEmpty()
  type: number;

}
