import { Type } from 'class-transformer';
import {
  IsString,
  MaxLength,
  IsNotEmpty,
  ValidateNested,
  IsEmpty,
  IsOptional,
} from 'class-validator';
import {
  FileSystemStoredFile,
  HasMimeType,
  IsFile,
  MaxFileSize,
} from 'nestjs-form-data';
import { CreateImageDto } from '../media/media-create-request.dto';
import { Optional } from '@nestjs/common';

export class BannerDto {
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  title: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  altText: string;

  @IsString()
  @MaxLength(255)
  @IsOptional()
  url: string;

  @IsString()
  @Optional()
  positions: string;
}

export class BannerCreateRequestDto {
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
