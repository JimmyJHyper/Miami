
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CouponGetAllResponseDto } from 'src/shared/dtos/coupon/coupon-get-all-response.dto';
import { Coupon } from '../entity/coupon.entity';
import { Repository } from 'typeorm';
import { CouponCreateDto } from 'src/shared/dtos/coupon/coupon-create.dto';

@Injectable()
export class CouponRepository {
  constructor(
    @InjectRepository(Coupon)
    private readonly couponRepository: Repository<Coupon>,
  ) {}

  async saveCoupon(coupon: CouponCreateDto): Promise<Coupon>
  {
   return this.couponRepository.save(coupon);
  }

  async getAll(): Promise<Coupon[]> {
    let coupons = await this.couponRepository
      .createQueryBuilder('coupon')
      
      .getMany();

    
    return coupons;
  }
async createCoupon(CouponData: CouponCreateDto): Promise<Coupon> {
    const coupon = this.couponRepository.create(CouponData);
     this.couponRepository.save(coupon);
     return coupon
  }
async deleteById(id: number) {

    return this.couponRepository.delete(id);
  }
  async find(id: number): Promise<Coupon> {
      return this.couponRepository.findOne(id);
    }
  async toggleEnabled(couponId: number, type: number) {
    await this.couponRepository
      .createQueryBuilder()
      .update()
      .set({
        activated: type == 1,
      })
      .where({ id: couponId })
      .execute();

    return this.couponRepository.findOne({
      where: { id: couponId },
    });
  }
  async byCode(code:string): Promise<Coupon> {
 const coupon =  this.couponRepository.findOne({
      where: { code: code,activated:true },

  })
 return coupon

}}