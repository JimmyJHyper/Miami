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
import { BikeService } from './bike.service';
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

@Controller('bikes')
@ApiTags('Bike Controller')
export class BikeController {
  constructor(private bikeService: BikeService) { }

  @Get('/')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, type: [BikeGetAllResponseDto] })
  @ApiOperation({ summary: 'Get all bikes' })
  public async getAll(
    @Query() params: GetAllBikesRequestDto,
  ): Promise<BikeGetAllResponseDto[]> {
    const { type_id, brand_id } = params;
    return this.bikeService.getAllBikes(type_id, brand_id);
  }

  @Get('/AdminBikes')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, type: [BikeGetAllResponseDto] })
  @ApiOperation({ summary: 'Get all bikes' })
  public async getAdminAll(
    @Query() params: GetAllBikesRequestDto,
  ): Promise<BikeGetAllResponseDto[]> {
    return this.bikeService.getAllAdminBikes();
  }



  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, type: BikeGetResponseDto })
  @ApiOperation({ summary: 'Get bike details' })
  public async getById(@Param('id') id: number): Promise<BikeGetResponseDto> {
    return this.bikeService.getDetailsById(id);
  }

  @Get('/:id/insurances')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, type: BikeResponse })
  @ApiOperation({ summary: 'Get a bike details with insurances' })
  public async getWithInsurancesById(
    @Param('id') id: number,
  ): Promise<BikeResponse> {
    return this.bikeService.getBikeWithInsurancesById(id);
  }

  @Get('/:id/media_items')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get a bike Media Items' })
  public async getMediaItemsById(@Param('id') id: number) {
    return this.bikeService.getMediaItemsById(id);
  }

  @Patch('/:bikeId/update_bike_info')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiResponse({ status: HttpStatus.OK, type: any })
  @ApiOperation({
    summary: 'Patch a bike Info',
  })
  public async UpdateBikeInfo(
    @Param('bikeId') bikeId: number,
    @Body() bike: any,
  ): Promise<BikeUpdateRequestDto> {
    return this.bikeService.updateBikeInfos(bikeId, bike);
  }

  @Patch('/:bikeId/insurance/:insuranceId')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiBody({ type: InsuranceRequestDto })
  @ApiResponse({ status: HttpStatus.OK, type: BikeInsuranceResponseDto })
  @ApiOperation({
    summary: 'Patch a bike insurance by bike id',
  })
  public async updateBikeInsurance(
    @Param('bikeId') bikeId: number,
    @Param('insuranceId') insuranceId: number,
    @Body() insurance: InsuranceRequestDto,
  ): Promise<BikeInsuranceResponseDto> {
    return this.bikeService.updateBikeInsurance(bikeId, insuranceId, insurance);
  }

  @Post('/:bikeId/insurance/')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiBody({ type: InsuranceRequestDto })
  @ApiResponse({ status: HttpStatus.OK, type: BikeInsuranceResponseDto })
  @ApiOperation({
    summary: 'Create a bike insurance by bike id',
  })
  public async createBikeInsurance(
    @Param('bikeId') bikeId: number,
    @Body() insurance: InsuranceRequestDto,
  ): Promise<BikeInsuranceResponseDto> {
    return this.bikeService.createBikeInsurance(bikeId, insurance);
  }

  @Delete('/insurance/delete/:id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiResponse({ status: HttpStatus.OK })
  @ApiOperation({ summary: 'Delete Insurance' })
  public async deleteInsurance(@Param('id') id: number) {
    return this.bikeService.deleteInsurance(id);
  }
  
  @Delete('/hard/delete/:id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiResponse({ status: HttpStatus.OK })
  @ApiOperation({ summary: 'Delete Insurance' })
  public async hardDeleteBike(@Param('id') id: number) {
    return this.bikeService.deleteBike(id);
  }

  @Post('/create')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiBody({ type: BikeCreateRequestDto })
  @ApiResponse({ status: HttpStatus.OK, type: Bike })
  @ApiOperation({
    summary: 'Patch a bike insurance by bike id',
  })
  public async createBike(@Body() body: BikeCreateRequestDto): Promise<Bike> {
    return this.bikeService.createBike(body);
  }

  @Put('/:id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiBody({ type: BikeUpdateRequestDto })
  @ApiResponse({ status: HttpStatus.OK, type: Bike })
  @ApiOperation({ summary: 'Update a bike by id' })
  public async updateBike(
    @Param('id') id: number,
    @Body() bikeData: BikeUpdateRequestDto,
  ): Promise<Bike> {
    return this.bikeService.updateBike(id, bikeData);
  }

  @Put('/position/update')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiBody({ type: [BikePositionUpdateRequestDto] })
  @ApiResponse({ status: HttpStatus.OK })
  @ApiOperation({ summary: 'Update bike positions' })
  public async updateBikePositions(
    @Body() bikePositions: BikePositionUpdateRequestDto[],
  ) {
    return this.bikeService.updateBikePositions(bikePositions);
  }

  @Patch('/:bikeId/change_base_price')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiResponse({ status: HttpStatus.OK })
  @ApiOperation({ summary: 'Change Base Price' })
  public async changeBasePrice(@Param('bikeId') bikeId: number, @Body() basePrice: any) {
    return this.bikeService.changeBasePrice(bikeId, basePrice);
  }

  @Patch('/:bikeId/update_bike_info')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiResponse({ status: HttpStatus.OK })
  @ApiOperation({ summary: 'Change Base Price' })
  public async updateBikeInfo(@Param('bikeId') bikeId: number, @Body() bike: any) {
    return this.bikeService.updateBikeInfos(bikeId, bike);
  }

  @Post('/create_new_bike')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiResponse({ status: HttpStatus.OK })
  @ApiOperation({ summary: 'Change Base Price' })
  public async createBikeInfo(@Body() bike: any) {
    return this.bikeService.createBikeInfo(bike);
  }

  @Delete('/:id/deleteCarouselImage')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiResponse({ status: HttpStatus.OK })
  @ApiOperation({ summary: 'Delete Carousel Image' })
  public async deleteCarouselImage(@Param('id') id: number) {

    return this.bikeService.deleteCarouselImage(id);
  }

  @Patch('/:id/uploadCarouselImage')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiResponse({ status: HttpStatus.OK })
  @ApiOperation({ summary: 'Delete Carousel Image' })
  public async uploadCarouselImage(@Param('id') id: number) {
  }

  @Patch('/:id/:imgId/setBikeImageMainId')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiResponse({ status: HttpStatus.OK })
  @ApiOperation({ summary: 'Delete Carousel Image' })
  public async updateMainBikeImage(@Param('id') id: number, @Param('imgId') imgId: number) {
    return this.bikeService.updateBikeMainImage(id, imgId)
  }

  @Patch('/:id/:imgId/setBikeCarouselImageId')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiResponse({ status: HttpStatus.OK })
  @ApiOperation({ summary: 'Delete Carousel Image' })
  public async updateCarouselBikeImages(@Param('id') id: number, @Param('imgId') imgId: number) {
    return this.bikeService.updateCarouselBikeImages(id, imgId)
  }



  @Get('/:id/getDiscountPrices')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK })
  @ApiOperation({ summary: 'Delete Carousel Image' })
  public async getDiscountPrices(@Param('id') id: number) {
    return this.bikeService.getDiscountPrices(id)
  }

  @Patch('/:id/updateBikeDiscounts')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiBody({ type: any })
  @ApiResponse({ status: HttpStatus.OK })
  @ApiOperation({ summary: 'Delete Carousel Image' })
  public async updateBikeDiscounts(@Param('id') id: number, @Body() discountPercentage: any) {
    return this.bikeService.updateBikeDiscounts(id, discountPercentage)
  }

  @Delete('/:id/delete')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @ApiBody({ type: any })
  @ApiBearerAuth('access-token')
  @ApiResponse({ status: HttpStatus.OK })
  @ApiOperation({ summary: 'Delete Carousel Image' })
  public async softDeleteBike(@Param('id') id: number, @Body() body: any) {
    return this.bikeService.softDeleteBike(id, body.type)
  }

  @Patch('/:id/updateBikeSEO')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiBody({ type: any })
  @ApiResponse({ status: HttpStatus.OK })
  @ApiOperation({ summary: 'Delete Carousel Image' })
  public async updateBikeSEO(@Param('id') id: number, @Body() body: any) {
    return this.bikeService.setBikeSEO(id, body)
  }
}
