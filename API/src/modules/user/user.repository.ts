import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { UpdateUserDetailsRequest } from '../../shared/dtos';
import { User } from '../entity/user.entity';
import { hashPassword } from 'src/shared/common/password';
import { MailService } from '../mail/mail.service';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async findByUserId(userId: number): Promise<User> {
    return this.usersRepository.findOne({
      where: { id: userId },
      relations: ['orders'],
    });
  }

  async allUsers(): Promise<User[]> {
    return this.usersRepository.createQueryBuilder('bike').getMany();
  }

  async findByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({
      where: { email },
    });
  }

  async findByEmailAndOtp(email: string, otpCode: string): Promise<User> {
    return this.usersRepository.findOne({
      where: { verificationCode: otpCode, email: email },
    });
  }

  async verifyAccount(userId: number): Promise<User> {
    await this.usersRepository
      .createQueryBuilder()
      .update()
      .set({
        isVerified: true,
      })
      .where({ id: userId })
      .execute();

    return this.usersRepository.findOne({
      where: { id: userId },
    });
  }

  async attachStripeId(userId: number, stripeCustomerId: string) {
    await this.usersRepository
      .createQueryBuilder()
      .update()
      .set({
        stripeCustomerId,
      })
      .where({ id: userId })
      .execute();
  }

  async updateDetails(
    userId: number,
    request:
      | Omit<UpdateUserDetailsRequest, 'verificationCode'>
      | UpdateUserDetailsRequest,
  ) {
    let obj:Partial<UpdateUserDetailsRequest> = {
      firstName: request.firstName,
      lastName: request.lastName,
      dateOfBirth: request.dateOfBirth,
      streetAddress: request.streetAddress,
      aptSuite: request.aptSuite,
      state: request.state,
      city: request.city,
      country: request.country,
      postalCode: request.postalCode,
      phoneNumber: request.phoneNumber,
    };
    if (request.password != undefined && request.password != ''&& request.password != null) {
      obj.password = await hashPassword(request.password);
    }
    await this.usersRepository
      .createQueryBuilder()
      .update()
      .set(obj)
      .where({ id: userId })
      .execute();

    return this.usersRepository.findOne({
      where: { id: userId },
    });
  }

  async toggleLock(userId: number, type: number) {
    await this.usersRepository
      .createQueryBuilder()
      .update()
      .set({
        isLocked: type == 1,
      })
      .where({ id: userId })
      .execute();

    return this.usersRepository.findOne({
      where: { id: userId },
    });
  }

  async saveUser(user: User): Promise<User> {
    return await this.usersRepository.save(this.usersRepository.create(user));
  }

  async deleteById(userId: number): Promise<DeleteResult> {
    return await this.usersRepository.delete(userId);
  }

  async updatePassword(userId: number, password: string) {
    let user = await this.usersRepository.findOne({
      where: { id: userId },
    });

    await this.usersRepository
      .createQueryBuilder()
      .update()
      .set({
        password: await hashPassword(password),
        isVerified: true,
      })
      .where({ id: userId })
      .execute();

    return this.usersRepository.findOne({
      where: { id: userId },
    });
  }

  async setResetCode(userId: number, resetCode: string) {
    let user = await this.usersRepository.findOne({
      where: { id: userId },
    });

    await this.usersRepository
      .createQueryBuilder()
      .update()
      .set({
        resetCode: resetCode,
      })
      .where({ id: userId })
      .execute();

    return this.usersRepository.findOne({
      where: { id: userId },
    });
  }

  async setVerificationCode(userId: number, resetCode: string) {
    let user = await this.usersRepository.findOne({
      where: { id: userId },
    });

    await this.usersRepository
      .createQueryBuilder()
      .update()
      .set({
        verificationCode: resetCode,
      })
      .where({ id: userId })
      .execute();

    return await this.usersRepository.findOne({
      where: { id: userId },
    });
  }
}
