import { Module } from '@nestjs/common';
import { CouponController } from './coupon.controller';
import { CouponService } from './coupon.service';
import { CouponRepository } from './coupon.repository';
import { Coupon } from '../entity/coupon.entity';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MediaItemModule } from '../media-item/media-item.module';


import { NestjsFormDataModule } from 'nestjs-form-data';
@Module({
  imports:[TypeOrmModule.forFeature([Coupon]),HttpModule,
      MediaItemModule,
      NestjsFormDataModule,],
  controllers: [CouponController],
  providers: [CouponService,  CouponRepository],
  exports: [CouponService,HttpModule,
      MediaItemModule,
      NestjsFormDataModule,]
})
export class CouponModule {}
