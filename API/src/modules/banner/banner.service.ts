import { Injectable, NotFoundException } from '@nestjs/common';
import { environment } from '../../environments/environment';
import { HttpService } from '@nestjs/axios';
import { plainToInstance } from 'class-transformer';
import { BannerRepository } from './banner.repository';
import { BannerGetAllResponseDto } from 'src/shared/dtos/banner/banner-get-all-response.dto';
import {
  BannerCreateRequestDto,
  BannerDto,
} from 'src/shared/dtos/banner/banner-create-request.dto';
import { BannerUpdateRequestDto } from 'src/shared/dtos/banner/banner-update-request.dto';
import { BannerGetResponseDto } from 'src/shared/dtos/banner/banner-get-response.dto';
import { LockBannerRequest } from 'src/shared/dtos/banner/lock-banner-request';
import { FileSystemStoredFile } from 'nestjs-form-data';
import { MediaItem } from '../entity/media-item.entity';
import { CreateImageDto } from 'src/shared/dtos/media/media-create-request.dto';
import { uploadFormDataFileToS3 } from 'src/shared/utils/uploadFileToS3';
import { MediaItemRepository } from '../media-item/media-item.repository';
import { MediaItemService } from '../media-item/media-item.service';
import { Banner } from '../entity/banner.entity';
@Injectable()
export class BannerService {
  miamiBikeWpUrl = environment.wpJsonBaseUrl;

  constructor(
    private httpService: HttpService,
    private bannerRepository: BannerRepository,
    private mediaItemRepository: MediaItemRepository,
  ) {}

  async getAllBanners(): Promise<BannerGetAllResponseDto[]> {
    const banners = await this.bannerRepository.getAll();
    console.log(banners);

    if (!banners || banners?.length === 0) {
      return plainToInstance(BannerGetAllResponseDto, [], {
        excludeExtraneousValues: true,
      });
    }

    return plainToInstance(BannerGetAllResponseDto, banners, {
      excludeExtraneousValues: true,
    });
  }

  async createBanner(data: BannerCreateRequestDto) {
    console.log(data);

    const bannerDetail = JSON.parse(data.banner) as BannerDto;
    const imageFile = data.imageFile;
    const imageData = JSON.parse(data.imageData) as CreateImageDto;

    const smallImageFile = data.imageSmallFile;
    const smallImageData = JSON.parse(data.imageSmallData) as CreateImageDto;

    let newBanner: Banner | null = null;
    let banner: any = {};
    let isDone = false;
    if (imageFile && imageData) {
      const image = await this.createImage(imageData, imageFile);
      if (image) {
        banner = { ...bannerDetail, mediaItemId: image.imageMediaItem.id };
      }
    }

    if (smallImageFile && smallImageData) {
      const image = await this.createImage(smallImageData, smallImageFile);
      if (image) {
        banner = { ...banner, mediaSmallItemId: image.imageMediaItem.id };
        isDone = true;
      }
    }
    if (isDone) newBanner = await this.bannerRepository.createBanner(banner);
    return newBanner;
  }

  async updateBanner(bannerId: number, bannerData: BannerUpdateRequestDto) {
    const existingBanner = await this.bannerRepository.find(bannerId, {});

    if (!existingBanner) {
      throw new NotFoundException(`Banner with id ${bannerId} not found`);
    }
    const bannerDetail = JSON.parse(bannerData.banner) as BannerDto;
    if (bannerData.imageData && bannerData.imageFile) {
      const imageFile = bannerData.imageFile;
      const imageData = JSON.parse(bannerData.imageData) as CreateImageDto;
      const image = await this.createImage(imageData, imageFile);
      if (image) {
        existingBanner.mediaItemId = image.imageMediaItem.id;
      }
    }

    if (bannerData.imageSmallData && bannerData.imageSmallFile) {
      const imageFile = bannerData.imageSmallFile;
      const imageData = JSON.parse(bannerData.imageSmallData) as CreateImageDto;
      const image = await this.createImage(imageData, imageFile);
      if (image) {
        existingBanner.mediaSmallItemId = image.imageMediaItem.id;
      }
    }
    Object.assign(existingBanner, bannerDetail);
    await this.bannerRepository.saveBanner(existingBanner);
    return existingBanner;
  }

  async getDetailsById(id: number): Promise<BannerGetResponseDto> {
    const banner = await this.bannerRepository.find(id, {
      relations: ['mediaItem','mediaSmallItem'],
    });
    if (!banner) {
      throw new NotFoundException('Banner not found');
    }

    return plainToInstance(
      BannerGetResponseDto,
      { ...banner },
      {
        excludeExtraneousValues: true,
      },
    );
  }

  async lockBanner(
    bannerId: number,
    request: LockBannerRequest,
  ): Promise<number> {
    const lockResult = await this.bannerRepository.toggleEnabled(
      bannerId,
      request.type,
    );
    return lockResult.isEnabled == true ? 1 : 0;
  }

  async deleteBanner(bannerId: number): Promise<number> {
    const deleteResult = await this.bannerRepository.deleteById(bannerId);
    return deleteResult.affected;
  }

  async createImage(
    imagePayload: CreateImageDto,
    imageFile: FileSystemStoredFile,
  ) {
    let imageMediaItem: MediaItem = null;
    if (imagePayload) {
      const MediaItemData: CreateImageDto = imagePayload;
      const imageUploadedData = await uploadFormDataFileToS3({
        file: imageFile,
        fileName: MediaItemData.filename,
      });
      const {
        uploadedFileUrl: featuredImageUrl,
        fileSizeInKB: featuredImageSize,
      } = imageUploadedData;
      imageMediaItem = await this.mediaItemRepository.createMediaItem({
        ...MediaItemData,
        filesize: featuredImageSize,
        mediaUrl: featuredImageUrl,
        mimeType: imageFile['busBoyMimeType'],
      });
    }

    return {
      imageMediaItem,
    };
  }
}
