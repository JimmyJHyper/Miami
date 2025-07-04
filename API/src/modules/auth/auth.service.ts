import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { comparePasswords } from '../../shared/utils';

import { User } from '../entity/user.entity';
import { UserService } from '../user/user.service';

import { UserErrorMessageCodes } from '../user/user-error-message-codes';
import { AuthErrorMessageCodes } from './auth-error-message-codes';
import { AuthTokenPayload, UserDetailsResponseDto } from '../../shared/dtos';
import { CheckTokenRequest } from 'src/shared/dtos/user/check-token-request';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  public async getAuthenticatedUser(
    username: string,
    pass: string,
  ): Promise<User> {
    const user = await this.userService.getAuthenticatedUser(username, pass);

    if (!user) {
      throw new NotFoundException(UserErrorMessageCodes.USER_NOT_FOUND);
    }

    const areEqual = await comparePasswords(user.password, pass);
    if (!areEqual) {
      throw new UnauthorizedException(
        AuthErrorMessageCodes.INVALID_CREDENTIALS,
      );
    }

    if (!user.isVerified) {
      throw new UnauthorizedException(
        UserErrorMessageCodes.USER_EMAIL_NOT_VERIFIED,
      );
    }

    return user;
  }

  public async login(user: User) {    
    const payload: AuthTokenPayload = {
      userId: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
    };
    const token = this.jwtService.sign(payload);
    const userDetails = await this.getCurrentUserById(user.id);
    
    return {
      token,
      userDetails,
    };
  }

  public async getCurrentUserById(
    userId: number,
  ): Promise<UserDetailsResponseDto> {
    return await this.userService.getCurrentUserById(userId);
  }

  public async validateToken(request: CheckTokenRequest): Promise<{
    userId: number,
    firstName: string,
    lastName: string,
    role: string,
    iat: number,
    exp: number
  } | false> {
    
    try {
      const payload = this.jwtService.verify(request.token);
      return payload;
    } catch (err) {
      return false;
      throw new UnauthorizedException('Invalid token');
    }
  }
}
