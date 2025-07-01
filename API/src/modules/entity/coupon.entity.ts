import { Column, Entity,  PrimaryGeneratedColumn} from "typeorm";
import { OneToMany } from "typeorm";
import { BikeRentalOrder } from "./bike-rental-order.entity";
import { IntegerTransformer } from "src/core/transformer/integer-transformer";
import { BikeRentalBase } from "./base.entity";
@Entity({name: 'coupons'})
// check the banner entity class to get the created_at and updated "extends BikeRentalBase" and register them in the database
export class Coupon extends BikeRentalBase {
@PrimaryGeneratedColumn()
id:number;

@Column({
    name: 'code',
nullable: false,


})
code:string;
@Column({
    name: 'percentage',
nullable: false,
type: "int",
transformer: new IntegerTransformer(),

})
percentage:number;
@Column({
    name: 'activated',
nullable: false,
default: false,

})
activated:boolean;

@OneToMany(() => BikeRentalOrder, (rentalOrder) => rentalOrder.coupon)
  rentalOrders?: BikeRentalOrder[];
//There is no relation to the order check how the bike entity is connected to the order Many to one relation is not defined
}