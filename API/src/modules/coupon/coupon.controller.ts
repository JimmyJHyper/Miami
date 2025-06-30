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
import { Roles } from 'src/decorators/roles';
import { Role } from 'src/enums/role.enum';
import { JwtAuthGuard } from '../../guards/jwt-auth.guard';
import { CouponService } from './coupon.service';
import { CouponGetAllResponseDto } from 'src/shared/dtos/coupon/coupon-get-all-response.dto';
import { CouponCreateDto } from 'src/shared/dtos/coupon/coupon-create.dto';
import { Coupon } from '../entity/coupon.entity';
import { CouponUpdateDto } from 'src/shared/dtos/coupon/coupon-update.dto';
import { FormDataRequest, FileSystemStoredFile } from 'nestjs-form-data';
import { RolesGuard } from 'src/guards/role.guard';
import { LockBannerRequest } from 'src/shared/dtos/banner/lock-banner-request';

@Controller('coupon')
export class CouponController {
constructor(private couponservice: CouponService) {}

@Get("/getByCode/:code")
public async getByCode(@Param("code") code: string): Promise<Coupon>{
  return this.couponservice.byCode(code)
}

@Get('/')
@HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, type: CouponGetAllResponseDto })
  @ApiOperation({ summary: 'Get coupon details' })
public async getAll(): Promise<CouponGetAllResponseDto[]> {
    return this.couponservice.GetAllCoupons()
  }
@HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth('access-token')
  @FormDataRequest({ storage: FileSystemStoredFile })
  @ApiBody({ type: CouponCreateDto })
  @ApiResponse({ status: HttpStatus.OK, type: Coupon })
  @ApiOperation({
    summary: 'Create new Coupon',
  })


  @Post('/create')
  @HttpCode(HttpStatus.OK)
 @UseGuards(JwtAuthGuard,RolesGuard)
  @ApiBearerAuth('access-token')
 
  
   @ApiResponse({ status: HttpStatus.OK, type: Coupon })
   @ApiOperation({ summary: 'Update a coupon by id' })
   @HttpCode(HttpStatus.OK)
  public async post(@Body() coupon: CouponCreateDto ) : Promise<CouponCreateDto> 
  {
return this.couponservice.createCoupon(coupon)
  }

  @Delete("/delete/:id")
  @HttpCode(HttpStatus.OK)
 // @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Administrator)
  @ApiBearerAuth('access-token')
  @ApiResponse({ status: HttpStatus.OK })
  @ApiOperation({
    summary: 'lock banner',
  })
  public async delete(@Param('id') id:number): Promise<number>{
    return this.couponservice.deleteCoupon(id)
  }
  @Get('/:id')
    public async getById(@Param('id') id: number): Promise<CouponGetAllResponseDto> {
      return this.couponservice.getDetailsById(id);
    }
@Put('/:id')
@HttpCode(HttpStatus.OK)
  @UseGuards(RolesGuard)
  @ApiBearerAuth('access-token')
  
  @ApiBody({ type: CouponCreateDto })
  @ApiResponse({ status: HttpStatus.OK, type: Coupon })
  @ApiOperation({ summary: 'Update a coupon by id' })
  @HttpCode(HttpStatus.OK)
  public async updateCoupon(
    @Param('id') id: number,
    @Body() couponData: Partial<Coupon>,
  ): Promise<Coupon> {
    console.log(couponData)
    return this.couponservice.couponUpdate(id, couponData);
  }
  @Delete('/lock/:id')
    @HttpCode(HttpStatus.OK)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Administrator)
    @ApiBearerAuth('access-token')
    @ApiResponse({ status: HttpStatus.OK })
    @ApiOperation({
      summary: 'lock Coupon',
    })
    public async lockBanner(
    @Body() body: LockBannerRequest,
    @Param('id') id: number,
  ): Promise<number> {
    return this.couponservice.lockCoupon(id, body);
  }

}
