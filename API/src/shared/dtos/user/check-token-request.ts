import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CheckTokenRequest {
  @ApiProperty()
  @IsNotEmpty()
  token: string;
}
