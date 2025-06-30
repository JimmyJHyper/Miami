import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  UpdateUserDetailsRequest,
  UserResponse,
  VerifyAccountRequest,
} from '../../shared/dtos';
import { UserService } from './user.service';
import { CreateUserRequest } from 'src/shared/dtos/user/create-user-request.dto';
import { UserDetails } from './interfaces/user-details';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { RolesGuard } from 'src/guards/role.guard';
import { Roles } from 'src/decorators/roles';
import { Role } from 'src/enums/role.enum';
import { UpdatePasswordRequest } from 'src/shared/dtos/user/update-password-request';
import { RequestResetPasswordRequest } from 'src/shared/dtos/user/request-reset-password-request';
import { LockUserRequest } from 'src/shared/dtos/user/lock-user-request';
import { UpdateUserNoVerificationrequest } from 'src/shared/dtos/user/updateUserNoVerificationrequest.dto';
import { UserVerificationRequest } from 'src/shared/dtos/user/user-verification-request';
import { VerifyCodeResetPasswordRequest } from 'src/shared/dtos/user/verify-code-reset-password-request';
import { ResetPasswordRequest } from 'src/shared/dtos/user/reset-password-request';

@Controller('user')
@ApiTags('User Controller')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiResponse({ status: HttpStatus.OK, type: UserResponse })
  @ApiOperation({
    summary: 'Get customer details',
  })
  public async getCustomer(@Param('id') id: number): Promise<UserResponse> {
    return this.userService.getUserDetails(id);
  }

  @Get('/users/all')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Administrator)
  @ApiBearerAuth('access-token')
  @ApiResponse({ status: HttpStatus.OK, type: UserResponse })
  @ApiOperation({
    summary: 'Get customer details',
  })
  public async getAllCustomers(): Promise<UserResponse[]> {
    return this.userService.getAllUserDetails();
  }

  @Patch('/verify')
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: VerifyAccountRequest })
  @ApiResponse({ status: HttpStatus.OK, type: UserResponse })
  @ApiOperation({ summary: 'Verify account' })
  async verifyAccount(@Body() request: VerifyAccountRequest) {
    return this.userService.verifyAccount(request);
  }

  @Patch('/request-reset-password')
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: VerifyAccountRequest })
  @ApiResponse({ status: HttpStatus.OK, type: UserResponse })
  @ApiOperation({ summary: 'Verify account' })
  async requestResetPassword(@Body() request: RequestResetPasswordRequest) {
    return this.userService.sendResetCode(request);
  }

  @Patch('/reset-password')
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: ResetPasswordRequest })
  @ApiResponse({ status: HttpStatus.OK, type: UserResponse })
  @ApiOperation({ summary: 'Reset Password' })
  async resetPassword(@Body() request: ResetPasswordRequest) {
    return this.userService.resetUserPassword(request);
  }

  @Patch('/verify-reset-password-code')
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: VerifyCodeResetPasswordRequest })
  @ApiResponse({ status: HttpStatus.OK, type: UserResponse })
  @ApiOperation({ summary: 'Reset Password' })
  async verifyResetPasswordCode(@Body() request: VerifyCodeResetPasswordRequest) {
    return this.userService.verifyResetPasswordCode(request);
  }

  @Patch('/updateUserDetails/:id')
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: UpdateUserDetailsRequest })
  @ApiResponse({ status: HttpStatus.OK, type: UserResponse })
  @ApiOperation({
    summary: 'Update customer details',
  })
  public async updateUserDetails(
    @Param('id') id: number,
    @Body() body: UpdateUserNoVerificationrequest,
  ): Promise<UserResponse> {
    return this.userService.updateUserDetails(id, body, false);
  }

  @Patch('/updateMyUserDetails')
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: UpdateUserDetailsRequest })
  @ApiResponse({ status: HttpStatus.OK, type: UserResponse })
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: 'Update customer details',
  })
  public async updateMyUserDetails(
    @Body() body: UpdateUserNoVerificationrequest,
    @Request() req,
  ): Promise<UserResponse> {
    let userId = req.user.userId;
    return this.userService.updateUserDetails(userId, body, false);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: UpdateUserDetailsRequest })
  @ApiResponse({ status: HttpStatus.OK, type: UserResponse })
  @ApiOperation({
    summary: 'Update customer details',
  })
  public async updateCustomerDetails(
    @Param('id') id: number,
    @Body() body: UpdateUserDetailsRequest,
  ): Promise<UserResponse> {
    return this.userService.updateUserDetails(id, body, true);
  }

  @Post('/create')
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: CreateUserRequest })
  @ApiResponse({ status: HttpStatus.OK, type: UserResponse })
  @ApiOperation({
    summary: 'Create customer details',
  })
  public async addNEwCustomer(
    @Body() body: CreateUserRequest,
  ): Promise<UserDetails> {
    return this.userService.createUserDetails(body);
  }

  @Post('/sendVerificationCode')
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: CreateUserRequest })
  @ApiResponse({ status: HttpStatus.OK, type: UserResponse })
  @ApiOperation({
    summary: 'Create customer details',
  })
  public async sendVerificationCode(
    @Body() body: UserVerificationRequest,
  ): Promise<boolean> {
    return this.userService.requestVerificationEmailCode(body.userEmail);
  }

  @Delete('/delete/:id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Administrator)
  @ApiBearerAuth('access-token')
  @ApiResponse({ status: HttpStatus.OK, type: UserResponse })
  @ApiOperation({
    summary: 'Get customer details',
  })
  public async deleteUser(@Param('id') id: number): Promise<number> {
    return this.userService.deleteUser(id);
  }

  @Delete('/lock/:id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Administrator)
  @ApiBearerAuth('access-token')
  @ApiResponse({ status: HttpStatus.OK, type: UserResponse })
  @ApiOperation({
    summary: 'Get customer details',
  })
  public async lockUser(
    @Body() body: LockUserRequest,
    @Param('id') id: number,
  ): Promise<number> {
    return this.userService.lockUser(id, body);
  }

  @Post('/password/:id')
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: UpdateUserDetailsRequest })
  @ApiResponse({ status: HttpStatus.OK, type: UserResponse })
  @ApiOperation({
    summary: 'Update customer details',
  })
  public async updatePassword(
    @Param('id') id: number,
    @Body() body: UpdatePasswordRequest,
  ): Promise<boolean> {
    return this.userService.updateUserPassword(id, body);
  }
}
