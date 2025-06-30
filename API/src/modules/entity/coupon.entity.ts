import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import { BikeRentalOrder } from "./bike-rental-order.entity";
import { IntegerTransformer } from "src/core/transformer/integer-transformer";

@Entity({name: 'coupons'})
export class Coupon {
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
}