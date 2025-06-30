import { Module } from '@nestjs/common';
import { BannerService } from './banner.service';
import { BannerController } from './banner.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BannerRepository } from './banner.repository';
import { Banner } from '../entity/banner.entity';
import { MediaItemRepository } from '../media-item/media-item.repository';
import { MediaItemModule } from '../media-item/media-item.module';
import { MediaItemService } from '../media-item/media-item.service';
import { NestjsFormDataModule } from 'nestjs-form-data';
@Module({
  imports: [
    HttpModule,
    MediaItemModule,
    NestjsFormDataModule,
    TypeOrmModule.forFeature([Banner]),
  ],
  providers: [BannerService, BannerRepository],
  controllers: [BannerController],
  exports: [BannerService],
})
export class BannerModule {}
