import {
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateStripePaymentIntentRequestDto } from '../../shared/dtos';
import { BikeService } from '../bike/bike.service';
import { StripeService } from './stripe.service';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { RefundStripePaymentIntentRequestDto } from 'src/shared/dtos/stripe/refund-stripe-payment-intent-request.dto';
import { boolean } from 'joi';

@Controller('stripe')
@ApiTags('Stripe Controller')
export class StripeController {
  constructor(
    private stripeService: StripeService,
    private bikeService: BikeService,
  ) {}

  @Post('/refund')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiResponse({ status: HttpStatus.OK, type: boolean })
  @ApiBody({ type: RefundStripePaymentIntentRequestDto })
  @ApiOperation({
    summary: 'Get customer details',
  })
  public async refunds(@Body() body: RefundStripePaymentIntentRequestDto): Promise<boolean> {
    let intentId = body.intentId;
    return await this.stripeService.refundPaymentIntent(intentId);
  }

  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: CreateStripePaymentIntentRequestDto })
  @ApiResponse({ status: HttpStatus.OK })
  @ApiOperation({
    summary: 'Creation of stripe payment intent',
  })
  @Post('/:orderId')
  public async createPaymentIntent(
    @Param('orderId') id: number,
    @Body() body: CreateStripePaymentIntentRequestDto,
  ) {
    const bikeDetails = await this.bikeService.getBikeDetailsForOrder(
      body.bikeId,
    );

    return await this.stripeService.createPaymentIntent(id, body, bikeDetails);
  }


}
