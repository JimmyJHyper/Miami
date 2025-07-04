import {
  Body,
  Controller,
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
  InitialBikeOrderResponse,
  InitialBikeRentalRequest,
  UpdateBikeOrderResponse,
  UpdateBikeRentalRequest,
  VerifyOrderRequest,
} from '../../shared/dtos';
import { RequestedOrderDatesResponseDto } from '../../shared/dtos/bike-rental-order/requested-order-dates.dto';
import { BikeRentalOrderService } from './bike-rental-order.service';
import { OrderRequest } from 'src/shared/dtos/bike-rental-order/order-request.dto copy';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { BikeRentalOrder } from '../entity/bike-rental-order.entity';

@Controller('bike-rental-order')
@ApiTags('Bike Rental Order Controller')
export class BikeRentalOrderController {
  constructor(private bikeRentalService: BikeRentalOrderService,
    
   ) {}

  @Post('/initial')
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({ type: InitialBikeRentalRequest })
  @ApiResponse({ status: HttpStatus.CREATED, type: InitialBikeOrderResponse })
  @ApiOperation({
    summary: 'Creating initial bike rental order, user details ',
  })
  public async initialOrder(
    @Body() body: InitialBikeRentalRequest,
  ): Promise<InitialBikeOrderResponse> {
    return this.bikeRentalService.initialOrder(body);
  }

  @Get('/:bikeId/requested')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, type: RequestedOrderDatesResponseDto })
  @ApiOperation({
    summary: 'Get all bike order with REQUESTED status',
  })
  public async bikeRequestedOrder(
    @Param('bikeId') bikeId: number,
  ): Promise<Array<RequestedOrderDatesResponseDto>> {
    return this.bikeRentalService.getBikeRequestedOrder(bikeId);
  }

  @Patch('/:orderId/verify-order')
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: VerifyOrderRequest })
  @ApiResponse({ status: HttpStatus.OK, type: UpdateBikeOrderResponse })
  @ApiOperation({ summary: 'Verify bike order' })
  async verifyOrder(
    @Param('orderId') orderId: number,
    @Body() request: OrderRequest,
  ): Promise<UpdateBikeOrderResponse> {
    return this.bikeRentalService.getOrder(request);
  }
  // @Patch('/:orderId/verify-order')
  // @HttpCode(HttpStatus.OK)
  // @ApiBody({ type: VerifyOrderRequest })
  // @ApiResponse({ status: HttpStatus.OK, type: UpdateBikeOrderResponse })
  // @ApiOperation({ summary: 'Verify bike order' })
  // async verifyOrder(
  //   @Param('orderId') orderId: number,
  //   @Body() request: VerifyOrderRequest,
  // ): Promise<UpdateBikeOrderResponse> {
  //   return this.bikeRentalService.verifyOrder(orderId, request);
  // }

  @Patch('/:orderId/on-checkout')
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: UpdateBikeRentalRequest })
  @ApiResponse({ status: HttpStatus.OK, type: UpdateBikeOrderResponse })
  @ApiOperation({
    summary: 'Update bike order form on checkout',
  })
  public async updateOrderOnCheckout(
    @Param('orderId') orderId: number,
    @Body() body: UpdateBikeRentalRequest,
  ): Promise<UpdateBikeOrderResponse> {
    return this.bikeRentalService.updateOrderOnCheckout(orderId, body);
  }

  @Patch('/:orderId/complete-order')
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: UpdateBikeRentalRequest })
  @ApiResponse({ status: HttpStatus.OK, type: UpdateBikeOrderResponse })
  @ApiOperation({
    summary: 'Update order to requested and send email notification',
  })
  public async updateOrder(
    @Param('orderId') orderId: number,
    @Body() body: UpdateBikeRentalRequest,
  ): Promise<UpdateBikeOrderResponse> {
    return this.bikeRentalService.updateOrder(orderId, body);
  }

  @Post('/:orderId/resend-code')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK })
  @ApiOperation({
    summary: 'Resend verification code',
  })
  public async resendVerificationCode(@Param('orderId') orderId: number) {
    return this.bikeRentalService.resendVerificationCode(orderId);
  }

  // @Post('/migrationUpdate')
  @HttpCode(HttpStatus.OK)
  public async updateBikeId() {
    return this.bikeRentalService.updateBikeId();
  }

  @Post('/myOrders')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiResponse({ status: HttpStatus.OK, type: BikeRentalOrder })
  @ApiOperation({
    summary: 'Get customer details',
  })
  public async getMyOrders(@Request() req): Promise<BikeRentalOrder[]> {
    let userId = req.user.userId;
    return this.bikeRentalService.getMyOrders(userId);
  }
}
