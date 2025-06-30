import { ApiResponseProperty } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';
import { BaseResponseDto } from '..';
import { BikeBrand } from 'src/modules/entity/bike-brands.entity';
import { MediaItem } from 'src/modules/entity/media-item.entity';
import { Bike } from 'src/modules/entity/bike.entity';
import { parseWpAttachmentMetadata } from 'src/shared/utils/parseWpAttachmentMetadata';
import { BikeOffDay } from 'src/modules/entity/bike-off-day.entity';
import { BikeBasePrice } from 'src/modules/entity/bike-base-price.entity';
import { RelatedBike } from 'src/modules/entity/related-bike.entity';
import { Banner } from 'src/modules/entity/banner.entity';

export class BannerGetResponseDto extends BaseResponseDto {
  @ApiResponseProperty()
  @Expose()
  id: number;

  @ApiResponseProperty()
  @Expose()
  title: string;

  @ApiResponseProperty()
  @Expose()
  altText: string;

  @ApiResponseProperty()
  @Expose()
  url: string;

  @ApiResponseProperty()
  @Expose()
  isEnabled: boolean;

  @ApiResponseProperty()
  @Expose()
  positions: string;

  @ApiResponseProperty()
  @Expose()
  @Transform((banner: { obj: Banner }) => {
    return banner?.obj?.mediaItem;
  })
  mediaItem: MediaItem;

  @ApiResponseProperty()
  @Expose()
  @Transform((banner: { obj: Banner }) => {
    return banner?.obj?.mediaSmallItem;
  })
  mediaSmallItem: MediaItem;
}
