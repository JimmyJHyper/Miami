import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../../guards/jwt-auth.guard';
import {
  BikeInsuranceResponseDto,
  InsuranceRequestDto,
} from '../../shared/dtos';
import { BannerService } from './banner.service';
import { GetAllBikesRequestDto } from 'src/shared/dtos/bike/bike-get-all-request.dto';
import { BikeGetAllResponseDto } from 'src/shared/dtos/bike/bike-get-all-response.dto';
import { BikeGetResponseDto } from 'src/shared/dtos/bike/bike-get-response.dto';
import { BikeResponse } from 'src/shared/dtos/bike/bike-response.dto';
import {
  BikeCreateRequestDto,
  BikeDto,
} from 'src/shared/dtos/bike/bike-create-request.dto';
import { Bike } from '../entity/bike.entity';
import { BikeUpdateRequestDto } from 'src/shared/dtos/bike/bike-update-request.dto';
import { BikePositionUpdateRequestDto } from 'src/shared/dtos/bike/bike-position-update.dto';
import { any } from 'joi';
import { BannerGetAllResponseDto } from 'src/shared/dtos/banner/banner-get-all-response.dto';
import { RolesGuard } from 'src/guards/role.guard';
import { BannerCreateRequestDto } from 'src/shared/dtos/banner/banner-create-request.dto';
import { Banner } from '../entity/banner.entity';
import { BannerUpdateRequestDto } from 'src/shared/dtos/banner/banner-update-request.dto';
import { BannerGetResponseDto } from 'src/shared/dtos/banner/banner-get-response.dto';
import { Roles } from 'src/decorators/roles';
import { Role } from 'src/enums/role.enum';
import { LockBannerRequest } from 'src/shared/dtos/banner/lock-banner-request';
import { FileSystemStoredFile, FormDataRequest } from 'nestjs-form-data';

@Controller('banners')
@ApiTags('Banner Controller')
export class BannerController {
  constructor(private bannerService: BannerService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, type: [BannerGetAllResponseDto] })
  @ApiOperation({ summary: 'Get all banners' })
  public async getAll(): Promise<BannerGetAllResponseDto[]> {
    return this.bannerService.getAllBanners();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, type: BannerGetResponseDto })
  @ApiOperation({ summary: 'Get banner details' })
  public async getById(@Param('id') id: number): Promise<BannerGetResponseDto> {
    return this.bannerService.getDetailsById(id);
  }

  @Post('/create')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth('access-token')
  @FormDataRequest({ storage: FileSystemStoredFile })
  @ApiBody({ type: BannerCreateRequestDto })
  @ApiResponse({ status: HttpStatus.OK, type: Bike })
  @ApiOperation({
    summary: 'Create new Banner',
  })
  public async createBanner(
    @Body() body: BannerCreateRequestDto,
  ): Promise<Banner> {
    return this.bannerService.createBanner(body);
  }

  @Put('/:id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth('access-token')
  @FormDataRequest({ storage: FileSystemStoredFile })
  @ApiBody({ type: BannerUpdateRequestDto })
  @ApiResponse({ status: HttpStatus.OK, type: Bike })
  @ApiOperation({ summary: 'Update a banner by id' })
  public async updateBanner(
    @Param('id') id: number,
    @Body() bannerData: BannerUpdateRequestDto,
  ): Promise<Banner> {
    return this.bannerService.updateBanner(id, bannerData);
  }

  @Delete('/lock/:id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Administrator)
  @ApiBearerAuth('access-token')
  @ApiResponse({ status: HttpStatus.OK })
  @ApiOperation({
    summary: 'lock banner',
  })
  public async lockBanner(
    @Body() body: LockBannerRequest,
    @Param('id') id: number,
  ): Promise<number> {
    return this.bannerService.lockBanner(id, body);
  }

  @Delete('/delete/:id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Administrator)
  @ApiBearerAuth('access-token')
  @ApiResponse({ status: HttpStatus.OK })
  @ApiOperation({
    summary: 'Delete banner',
  })
  public async deleteBanner(@Param('id') id: number): Promise<number> {
    return this.bannerService.deleteBanner(id);
  }
}
