import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { IntegerTransformer } from '../../core/transformer/integer-transformer';
import { OrderStatusEnum } from '../../shared/common';
import { BikeRentalBase } from './base.entity';
import { BikeAccessoryOrder } from './bike-accessory-order.entity';
import { BikeInsurancePlan } from './bike-insurance-plan.entity';
import { User } from './user.entity';
import { Bike } from './bike.entity';
import { integer } from 'aws-sdk/clients/cloudfront';

@Entity({ name: 'bike_rental_orders' })
export class BikeRentalOrder extends BikeRentalBase {
  @Column({
    nullable: false,
    name: 'bike_id',
  })
  bikeId: number;

  @Column({
    nullable: false,
    name: 'bike_model',
  })
  bikeModel: string;

  @Column({
    nullable: false,
    name: 'bike_brand',
  })
  bikeBrand: string;

  @Column({
    nullable: true,
    name: 'bike_image',
  })
  bikeImage: string;

  @Column({
    nullable: false,
    name: 'daily_price_bike',
    type: 'int',
    transformer: new IntegerTransformer(),
  })
  dailyBikePrice: number;

  @Column({
    nullable: false,
    name: 'order_total_amount',
    type: 'int',
    transformer: new IntegerTransformer(),
    default: 0,
  })
  orderTotalAmount: number;

  @Column({
    nullable: true,
    name: 'pick_up_date',
  })
  pickUpDate: string;

  @Column({
    nullable: true,
    name: 'pick_up_time',
  })
  pickUpTime: string;

  @Column({
    nullable: true,
    name: 'drop_off_date',
  })
  dropOffDate: string;

  @Column({
    nullable: true,
    name: 'drop_off_time',
  })
  dropOffTime: string;

  @Column({
    nullable: true,
    name: 'insurance_name',
  })
  insuranceName: string;

  @Column({
    nullable: false,
    name: 'road_assistance',
    default: false,
  })
  roadAssistance: boolean;

  @Column({
    type: 'enum',
    nullable: true,
    enum: OrderStatusEnum,
    default: OrderStatusEnum.INITIAL,
  })
  status: string;

  @Column({
    name: 'verification_code',
    nullable: false,
    length: 5,
  })
  verificationCode: string;

  @Column({
    name: 'is_verified',
    type: 'boolean',
    default: false,
  })
  isVerified: boolean;

  @Column({
    name: 'stripe_payment_id',
    nullable: true,
  })
  stripePaymentId: string;

  @Column({
    nullable: true,
    name: 'insurance_deposit',
    type: 'int',
    transformer: new IntegerTransformer(),
    default: 0,
  })
  insuranceDeposit: number;

  @Column({
    nullable: true,
    name: 'order_subtotal_amount',
    type: 'int',
    transformer: new IntegerTransformer(),
    default: 0,
  })
  orderSubTotalAmount: number;

  @Column({
    nullable: true,
    name: 'insurance_daily_rate',
    type: 'int',
    transformer: new IntegerTransformer(),
    default: 0,
  })
  insuranceDailyRate: number;

  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => BikeInsurancePlan, { nullable: true })
  @JoinColumn({ name: 'insurance_id' })
  bikeInsurancePlan: BikeInsurancePlan;

  @OneToMany(
    () => BikeAccessoryOrder,
    (accessory) => accessory.bikeRentalOrder,
    {
      cascade: ['insert'],
    },
  )
  accessories: BikeAccessoryOrder[];

  @ManyToOne(() => Bike, { nullable: true })
  @JoinColumn({ name: 'bike_id' })
  bike: Bike;
  // Where is the complete coupon discount amount stored?
  // The coupon discount amount is not stored in this entity.
  // There is no relation to the coupon check above how the bike is connected to the order Many to one relation is not defined
  @Column({
    nullable: true,
    name: 'coupon_id',
    
    default: null,
  })
  couponId: number | null;
  
  

}
