import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderStatusEnum } from '../../shared/common';
import { BikeRentalOrder } from '../entity/bike-rental-order.entity';
import { Coupon } from '../entity/coupon.entity';

@Injectable()
export class BikeRentalOrderRepository {
  constructor(
    @InjectRepository(BikeRentalOrder)
    private readonly bikeRentalRepository: Repository<BikeRentalOrder> ,
  ) {}

  async getBikeOrderById(id: number): Promise<BikeRentalOrder> {
    return this.bikeRentalRepository.findOne({
      where: { id },
      relations: ['accessories', 'user', 'bikeInsurancePlan'],
    });
  }

  async getBikeOrderByCodeAndEmail(
    code: string,
    email: string,
  ): Promise<BikeRentalOrder> {
    return this.bikeRentalRepository.findOne({
      where: { user: { email }, verificationCode: code },
      relations: ['user'],
    });
  }

  async getBikeOrderByVerificationCodeAndEmail(
    id: number,
    verificationCode: string,
    email: string,
  ): Promise<BikeRentalOrder> {
    return this.bikeRentalRepository.findOne({
      where: {
        id,
        verificationCode,
        status: OrderStatusEnum.INITIAL,
        user: { email },
      },
      relations: ['accessories', 'user'],
    });
  }

  async verifyOrder(orderId: number): Promise<BikeRentalOrder> {
    await this.bikeRentalRepository
      .createQueryBuilder()
      .update()
      .set({
        isVerified: true,
      })
      .where({ id: orderId })
      .execute();

    return this.bikeRentalRepository.findOne({
      where: { id: orderId },
      relations: ['accessories', 'user'],
    });
  }

  public async createInitialOrder(
    initialOrder: BikeRentalOrder,
  ): Promise<BikeRentalOrder> {
    return await this.bikeRentalRepository.save(initialOrder);
  }

  async updateOrder(updatedOrder: BikeRentalOrder) {
    await this.bikeRentalRepository.save(updatedOrder);
    return this.bikeRentalRepository.findOne({
      where: { id: updatedOrder.id },
      relations: ['accessories', 'user'],
    });
  }

  async updateOrderStatus(
    orderId: number,
    status: string,
  ): Promise<BikeRentalOrder> {
    let stat = await this.bikeRentalRepository
      .createQueryBuilder()
      .update()
      .set({
        status: status,
      })
      .where({ id: orderId })
      .execute();
    console.log(stat);

    return this.bikeRentalRepository.findOne({
      where: { id: orderId },
      relations: ['accessories', 'user'],
    });
  }

  async updateNewVerificationCode(
    orderId: number,
    code: string,
  ): Promise<BikeRentalOrder> {
    await this.bikeRentalRepository
      .createQueryBuilder()
      .update()
      .set({
        verificationCode: code,
      })
      .where({ id: orderId })
      .execute();

    return this.bikeRentalRepository.findOne({
      where: { id: orderId },
      relations: ['accessories', 'user'],
    });
  }

  /**
   * @param bikeId
   * @returns all requested order with pickup date current date - 1 day to address all timezone issue
   */
  async getBikeRequestedOrder(bikeId: number) {
    return this.bikeRentalRepository
      .createQueryBuilder('order')
      .where('order.bike_id = :bikeId', {
        bikeId,
      })
      .andWhere(
        'status = :status and DATE(drop_off_date) >= DATE(NOW() - INTERVAL 1 DAY)',
        {
          status: OrderStatusEnum.REQUESTED,
        },
      )
      .getMany();
  }

  async updateBikeIdFromWpId(id: number, wpId: number) {
    return await this.bikeRentalRepository
      .createQueryBuilder()
      .update()
      .set({ bikeId: id })
      .where({ bikeId: wpId })
      .execute();
  }

  async getAllOrdersByUserId(userId: number): Promise<BikeRentalOrder[]> {
    return this.bikeRentalRepository
      .createQueryBuilder('order')
      .innerJoinAndSelect('order.bike', 'bike')
      .leftJoinAndSelect('bike.featuredMediaItem', 'featuredMediaItem')
      .leftJoinAndSelect('bike.brand', 'brand')
      .leftJoinAndSelect('order.accessories', 'BikeAccessoryOrder')
      .where('order.user_id = :userId', { userId })
      .andWhere('order.status = :status', { status: 'requested' })
      .getMany();
  }
}
