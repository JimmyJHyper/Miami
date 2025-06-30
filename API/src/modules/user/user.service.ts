import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { plainToClass, plainToInstance } from 'class-transformer';
import { isArray } from 'class-validator';
import { Transactional } from 'typeorm-transactional-cls-hooked';
import {
  InitialBikeRentalRequest,
  UpdateUserDetailsRequest,
  UserDetailsResponseDto,
  UserResponse,
  VerifyAccountRequest,
} from '../../shared/dtos';
import { comparePasswords, generateVerificationCode } from '../../shared/utils';
import { AuthErrorMessageCodes } from '../auth/auth-error-message-codes';
import { User } from '../entity/user.entity';
import { UserDetails } from './interfaces/user-details';
import { UserErrorMessageCodes } from './user-error-message-codes';
import { UserRepository } from './user.repository';
import { CreateUserRequest } from 'src/shared/dtos/user/create-user-request.dto';
import { hashPassword } from 'src/shared/common/password';
import { UpdatePasswordRequest } from 'src/shared/dtos/user/update-password-request';
import { RequestResetPasswordRequest } from 'src/shared/dtos/user/request-reset-password-request';
import { LockUserRequest } from 'src/shared/dtos/user/lock-user-request';
import { UpdateUserNoVerificationrequest } from 'src/shared/dtos/user/updateUserNoVerificationrequest.dto';
import { MailService } from '../mail/mail.service';
import { VerifyCodeResetPasswordRequest } from 'src/shared/dtos/user/verify-code-reset-password-request';
import { ResetPasswordRequest } from 'src/shared/dtos/user/reset-password-request';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    private userRepository: UserRepository,
    private mailService: MailService,
  ) {}

  public async getAuthenticatedUser(
    username: string,
    pass: string,
  ): Promise<User> {
    const user = await this.findByUsername(username);
    if (!user) {
      throw new NotFoundException(UserErrorMessageCodes.USER_NOT_FOUND);
    }

    const areEqual = await comparePasswords(user.password, pass);
    if (!areEqual) {
      throw new UnauthorizedException(
        AuthErrorMessageCodes.INVALID_CREDENTIALS,
      );
    }
    return user;
  }

  async findByUsername(username: string): Promise<User> {
    return await this.userRepository.findByEmail(username);
  }

  public async getCurrentUserById(
    userId: number,
  ): Promise<UserDetailsResponseDto> {
    const currentUser = await this.userRepository.findByUserId(userId);

    if (!currentUser) {
      throw new BadRequestException(UserErrorMessageCodes.USER_NOT_FOUND);
    }

    return plainToInstance(UserDetailsResponseDto, currentUser, {
      excludeExtraneousValues: true,
    });
  }

  async verifyAccount(request: VerifyAccountRequest): Promise<UserResponse> {
    this.logger.log(`Verifying account with email: ${request.email}`);

    const user = await this.userRepository.findByEmailAndOtp(
      request.email,
      request.otpCode,
    );

    if (!user) {
      throw new NotFoundException(
        `User not found with email ${request.email} and opt ${request.otpCode}`,
      );
    }

    if (user.isVerified) {
      return plainToClass(UserResponse, user, {
        excludeExtraneousValues: true,
      });
    }

    const updatedUser = await this.userRepository.verifyAccount(user.id);

    return plainToClass(UserResponse, updatedUser, {
      excludeExtraneousValues: true,
    });
  }

  @Transactional()
  async createUpdateUserFromBikeRequest(
    body: InitialBikeRentalRequest,
  ): Promise<UserDetails> {
    this.logger.log(`Creating User  details`, body);
    const existingUser = await this.userRepository.findByEmail(body.email);

    if (existingUser) {
      const updatedUser = await this.userRepository.updateDetails(
        existingUser.id,
        {
          firstName: body.firstName,
          lastName: body.lastName,
          dateOfBirth: body.dateOfBirth,
          streetAddress: body.streetAddress,
          aptSuite: body.aptSuite,
          state: body.state || '',
          city: body.city,
          country: body.country,
          postalCode: body.postalCode || '',
          phoneNumber: body.phoneNumber,
          email: body.email,
          password: body.password ?? '',
        },
      );
      return {
        isExistingCustomer: true,
        user: updatedUser,
      };
    }

    const newUser = await this.buildUserDetailsFromBikeRequest({
      ...body,
      state: body.state || '',
      postalCode: body.postalCode || '',
    });
    const user = await this.userRepository.saveUser(newUser);
    return {
      isExistingCustomer: false,
      user,
    };
  }

  async updateUserDetails(
    userId: number,
    request: UpdateUserDetailsRequest | UpdateUserNoVerificationrequest,
    shouldVerify: boolean,
  ): Promise<UserResponse> {
    // const user = req
    const userWithOrderList = await this.userRepository.findByUserId(userId);

    if (!userWithOrderList) {
      throw new NotFoundException('User not found');
    }

    // if (
    //   !isArray(userWithOrderList.orders) ||
    //   userWithOrderList.orders.length === 0
    // ) {
    //   throw new UnprocessableEntityException('No orders found');
    // }

    // if (shouldVerify == true) {
    //   const orderByVerificationCode = userWithOrderList.orders.find(
    //     (order) => order.verificationCode === request.verificationCode,
    //   );

    //   if (!orderByVerificationCode) {
    //     throw new UnauthorizedException('Verification code does not exists');
    //   }
    // }
    if (request.currentPassword && request.password) {
      if (
        !(await comparePasswords(
          userWithOrderList.password,
          request.currentPassword,
        ))
      ) {
        request.password = undefined;
      }
    }

    const updatedCustomer = await this.userRepository.updateDetails(
      userId,
      request,
    );

    return plainToClass(UserResponse, updatedCustomer, {
      excludeExtraneousValues: true,
    });
  }

  async attachStripeCustomerId(userId: number, stripeCustomerId: string) {
    await this.userRepository.attachStripeId(userId, stripeCustomerId);
  }

  private async buildUserDetailsFromBikeRequest(
    request: InitialBikeRentalRequest,
  ): Promise<User> {
    const user = new User();

    user.firstName = request.firstName;
    user.lastName = request.lastName;
    user.email = request.email.toLowerCase();
    user.password = await hashPassword(request.password);
    user.phoneNumber = request.phoneNumber;
    user.dateOfBirth = request.dateOfBirth;
    user.country = request.country;
    user.city = request.city;
    user.streetAddress = request.streetAddress;
    user.aptSuite = request.aptSuite;
    user.state = request.state;
    user.postalCode = request.postalCode;
    return user;
  }

  private async buildUserDetailsFromRegister(
    request: CreateUserRequest,
  ): Promise<User> {
    const user = new User();

    user.firstName = request.firstName;
    user.lastName = request.lastName;
    user.email = request.email.toLowerCase();
    user.phoneNumber = request.phoneNumber;
    user.dateOfBirth = request.dateOfBirth;
    user.country = request.country;
    user.city = request.city;
    user.streetAddress = request.streetAddress;
    user.aptSuite = request.aptSuite;
    user.state = request.state;
    user.postalCode = request.postalCode;
    user.password = await hashPassword(request.password);
    return user;
  }

  @Transactional()
  async createUserDetails(body: CreateUserRequest): Promise<UserDetails> {
    this.logger.log(`Creating User  details`, body);
    const existingUser = await this.userRepository.findByEmail(body.email);

    if (existingUser) {
      return {
        isExistingCustomer: true,
        user: existingUser,
      };
      this.logger.log(`existing: `, existingUser);
      const updatedUser = await this.userRepository.updateDetails(
        existingUser.id,
        {
          firstName: body.firstName,
          lastName: body.lastName,
          dateOfBirth: body.dateOfBirth,
          streetAddress: body.streetAddress,
          aptSuite: body.aptSuite,
          state: body.state || '',
          city: body.city,
          country: body.country,
          postalCode: body.postalCode || '',
          phoneNumber: body.phoneNumber,
          email: body.email,
          password: body.password,
        },
      );
      if (existingUser.isVerified == false)
        await this.sendVerificationCode(updatedUser.id);
      return {
        isExistingCustomer: true,
        user: updatedUser,
      };
    }

    const newUser = await this.buildUserDetailsFromRegister({
      ...body,
      state: body.state || '',
      postalCode: body.postalCode || '',
    });
    const user = await this.userRepository.saveUser(newUser);
    return {
      isExistingCustomer: false,
      user,
    };
  }
  async getUserDetails(userId: number): Promise<UserResponse> {
    const user = await this.userRepository.findByUserId(userId);

    if (!user) {
      throw new NotFoundException('User not found');
    }
    return plainToClass(UserResponse, user, {
      excludeExtraneousValues: true,
    });
  }

  async getAllUserDetails(): Promise<UserResponse[]> {
    const users = await this.userRepository.allUsers();
    let UserResponses: UserResponse[] = [];
    users.forEach((element) => {
      UserResponses.push(
        plainToClass(UserResponse, element, {
          excludeExtraneousValues: true,
        }),
      );
    });
    return UserResponses;
  }

  async deleteUser(userId: number): Promise<number> {
    const deleteResult = await this.userRepository.deleteById(userId);
    return deleteResult.affected;
  }

  async lockUser(userId: number, request: LockUserRequest): Promise<number> {
    const lockResult = await this.userRepository.toggleLock(
      userId,
      request.type,
    );
    return lockResult.isLocked == true ? 1 : 0;
  }

  async updateUserPassword(
    userId: number,
    body: UpdatePasswordRequest,
  ): Promise<boolean> {
    const existingUser = await this.userRepository.findByUserId(userId);

    if (existingUser) {
      const updatedUser = await this.userRepository.updatePassword(
        userId,
        body.password,
      );
      return true;
    }
    return false;
  }

  async requestVerificationEmailCode(userEmail: string) {
    const bikeOrder = await this.userRepository.findByUserId;
    let user = await this.userRepository.findByEmail(userEmail);
    if (user) {
      await this.sendVerificationCode(user.id);
    }
    return true;
  }

  async sendVerificationCode(userId: number) {
    let code = generateVerificationCode(4);
    const updatedUser = await this.userRepository.setVerificationCode(
      userId,
      code,
    );
    await this.mailService.sendVerifyEmail(updatedUser);
    return true;
  }

  async sendResetCide(userId: number) {
    const bikeOrder = await this.userRepository.findByUserId;

    let code = generateVerificationCode(5);
    const updatedUser = await this.userRepository.setResetCode(userId, code);

    return 1;
  }

  async resetUserPassword(body: ResetPasswordRequest): Promise<boolean> {
    const existingUser = await this.userRepository.findByEmail(body.email);

    if (existingUser) {
      if (existingUser.verificationCode == body.code) {
        const updatedUser = await this.userRepository.updatePassword(
          existingUser.id,
          body.password,
        );
        return true;
      }
      return false;
    }
    return false;
  }

  async verifyResetPasswordCode(body: VerifyCodeResetPasswordRequest): Promise<boolean> {
    const existingUser = await this.userRepository.findByEmail(body.email);

    if (existingUser) {
      if (existingUser.verificationCode == body.code) {
        return true;
      }
      return false;
    }
    return false;
  }

  async sendResetCode(request: RequestResetPasswordRequest) {
    const user = await this.userRepository.findByEmail(request.email);
    let code = generateVerificationCode(5);
    const updatedUser = await this.userRepository.setResetCode(user.id, code);
    return 1;
  }
}
