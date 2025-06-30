import { IsOptional, IsInt, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { BannerDto } from './banner-create-request.dto';
import { FileSystemStoredFile, HasMimeType, IsFile, MaxFileSize } from 'nestjs-form-data';

export class BannerUpdateDto extends BannerDto {
  @IsOptional()
  @IsInt()
  id?: number;
}

export class BannerUpdateRequestDto {
  @IsOptional()
  banner: any;

  @IsOptional()
  @IsFile()
  @MaxFileSize(1e6)
  imageFile?: FileSystemStoredFile;

  @IsOptional()
  imageData?: any;

  @IsOptional()
  @IsFile()
  @MaxFileSize(1e6)
  imageSmallFile?: FileSystemStoredFile;

  @IsOptional()
  imageSmallData?: any;
}
