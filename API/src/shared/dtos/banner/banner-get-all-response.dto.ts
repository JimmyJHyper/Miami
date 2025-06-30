import { ApiResponseProperty } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';
import { BaseResponseDto } from '..';
import { Banner } from 'src/modules/entity/banner.entity';
import { MediaItem } from 'src/modules/entity/media-item.entity';

export class BannerGetAllResponseDto extends BaseResponseDto {
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
