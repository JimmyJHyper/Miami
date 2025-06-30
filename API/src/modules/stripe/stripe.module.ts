import { Module } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { StripeController } from './stripe.controller';
import { HttpModule } from '@nestjs/axios';
import { BikeModule } from '../bike/bike.module';
import { BikeInsurancePlanModule } from '../bike-insurance-plan/bike-insurance-plan.module';
import { BikeRentalOrderModule } from '../bike-rental-order/bike-rental-order.module';
import { CouponService } from '../coupon/coupon.service';
import { CouponModule } from '../coupon/coupon.module';
import { CouponRepository } from '../coupon/coupon.repository';

@Module({
  imports: [
    HttpModule,
    BikeModule,
    BikeRentalOrderModule,
    BikeInsurancePlanModule,
    CouponModule,
    
  ],
  providers: [StripeService,],
  controllers: [StripeController],
  exports: [StripeService],
})
export class StripeModule {}
