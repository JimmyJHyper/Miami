import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { BikeRentalOrder } from '../entity/bike-rental-order.entity';
import { MailService } from '../mail/mail.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, BikeRentalOrder])],
  providers: [UserService, UserRepository,MailService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
