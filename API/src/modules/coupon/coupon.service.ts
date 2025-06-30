import { Injectable } from '@nestjs/common';
import { CouponRepository } from './coupon.repository';
import { plainToInstance } from 'class-transformer';
import {  CouponGetAllResponseDto } from 'src/shared/dtos/coupon/coupon-get-all-response.dto';
import { CouponCreateDto } from 'src/shared/dtos/coupon/coupon-create.dto';
import { CouponUpdateDto } from 'src/shared/dtos/coupon/coupon-update.dto';
import { NotFoundException } from '@nestjs/common';
import { LockBannerRequest } from 'src/shared/dtos/banner/lock-banner-request';
import { Coupon } from '../entity/coupon.entity';
import { empty } from 'rxjs';
const emptyCoupon:Coupon = {
  id:null,
  percentage:0,
  activated:false,
  code:""
}
@Injectable()
export class CouponService {
constructor(private couponRepository: CouponRepository){}


async GetAllCoupons(): Promise<CouponGetAllResponseDto[]> {
    const coupons = await this.couponRepository.getAll();
if (!coupons || coupons?.length === 0) {
      return plainToInstance(CouponGetAllResponseDto, [], {
        excludeExtraneousValues: true,
      });
    }

    return plainToInstance(CouponGetAllResponseDto, coupons, {
      excludeExtraneousValues: true,
    });
}
async createCoupon(data: CouponCreateDto) {
   

    

    let newCoupon: Coupon | null = null;
    let Coupon: any = data;
    
  
    newCoupon = await this.couponRepository.createCoupon(Coupon);
    return newCoupon;
  }
async deleteCoupon(CouponId: number): Promise<number> {
    const deleteResult = await this.couponRepository.deleteById(CouponId);
    return deleteResult.affected;
  }
async getDetailsById(id: number): Promise<CouponGetAllResponseDto> {
    const coupon = await this.couponRepository.find(id)
    if (!coupon) {
      throw new NotFoundException('Coupon not found');
    }

    return plainToInstance(
      CouponGetAllResponseDto,
      { ...coupon },
      {
        excludeExtraneousValues: true,
      },
    );
  }

async couponUpdate(CouponId: number, couponData: Partial<Coupon>)
{
  const existingCoupon = await this.couponRepository.find(CouponId);
  
      if (!existingCoupon) {
        throw new NotFoundException(`coupon with id ${CouponId} not found`);
      }
       console.log("coupondata:" +couponData.code)
      console.log("before:" +existingCoupon.code)
      
        
      Object.assign(existingCoupon, couponData);
      await this.couponRepository.saveCoupon(existingCoupon);
      console.log("after:" +existingCoupon.code)
      return existingCoupon;


}
async lockCoupon(
    bannerId: number,
    request: LockBannerRequest,
  ): Promise<number> {
    const lockResult = await this.couponRepository.toggleEnabled(
      bannerId,
      request.type,
    );
    return lockResult.activated == true ? 1 : 0;
  }
  async byCode(code:string): Promise<Coupon>{
    const selectedCoupon = await this.couponRepository.byCode(code)
    if(!selectedCoupon){  return emptyCoupon }
    return selectedCoupon
  }

}

