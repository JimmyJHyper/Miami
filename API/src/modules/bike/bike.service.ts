import { Injectable, NotFoundException } from '@nestjs/common';
import { environment } from '../../environments/environment';
import { HttpService } from '@nestjs/axios';
import {
  BikeInsuranceResponseDto,
  InsuranceRequestDto,
  BikeForOrderResponse,
} from '../../shared/dtos';
import { plainToClass, plainToInstance } from 'class-transformer';
import { BikeRepository } from './bike.repository';
import { BikeResponse } from '../../shared/dtos/bike/bike-response.dto';
import { Bike } from '../entity/bike.entity';
import { BikeInsurancePlanService } from '../bike-insurance-plan/bike-insurance-plan.service';
import { FindConditions } from 'typeorm';
import { BikeGetAllResponseDto } from 'src/shared/dtos/bike/bike-get-all-response.dto';
import { BikeGetResponseDto } from 'src/shared/dtos/bike/bike-get-response.dto';
import { BikeStatus, InsuranceEnum, MediaSize } from '../../shared/common';
import { BikeCreateRequestDto } from 'src/shared/dtos/bike/bike-create-request.dto';
import { BikeOffDayService } from '../bike-off-day/bike-off-day.service';
import { BikeBasePriceService } from '../bike-base-price/bike-base-price.service';
import { RelatedBikeService } from '../related-bike/related-bike.service';
import { BikeUpdateRequestDto } from 'src/shared/dtos/bike/bike-update-request.dto';
import { BikeMediaItemService } from '../bike-media-item/bike-media-item.service';
import { BikePositionUpdateRequestDto } from 'src/shared/dtos/bike/bike-position-update.dto';
import { MediaItemService } from '../media-item/media-item.service';
import { seializeArray } from 'src/shared/utils/parseWpAttachmentMetadata';
import { log } from 'console';
import { BikeInsurancePlan } from '../entity/bike-insurance-plan.entity';
@Injectable()
export class BikeService {
  miamiBikeWpUrl = environment.wpJsonBaseUrl;

  constructor(
    private httpService: HttpService,
    private bikeRepository: BikeRepository,
    private bikeInsurancePlanService: BikeInsurancePlanService,
    private bikeOffDayService: BikeOffDayService,
    private bikeBasePriceService: BikeBasePriceService,
    private relatedBikeService: RelatedBikeService,
    private bikeMediaItemService: BikeMediaItemService,
  ) { }

  async findAll(
    where: FindConditions<Bike> = {},
    mediaSize?: MediaSize,
  ): Promise<Bike[]> {
    return await this.bikeRepository.findAll(where, mediaSize);
  }

  async getAllBikes(
    type_id?: number,
    brand_id?: number,
  ): Promise<BikeGetAllResponseDto[]> {
    const where: FindConditions<Bike> = {};
    if (type_id) where.typeId = type_id;
    if (brand_id) where.brandId = brand_id;
    where.status = BikeStatus.Publish;

    const bikes = await this.findAll(where, MediaSize.MediumLarge);
    if (!bikes || bikes?.length === 0) {
      throw new NotFoundException('Bikes not found');
    }

    return plainToInstance(BikeGetAllResponseDto, bikes, {
      excludeExtraneousValues: true,
    });
  }

  async getAllAdminBikes(): Promise<BikeGetAllResponseDto[]> {
    const bikes = await this.findAll();
    if (!bikes || bikes?.length === 0) {
      throw new NotFoundException('Bikes not found');
    }

    return plainToInstance(BikeGetAllResponseDto, bikes, {
      excludeExtraneousValues: true,
    });
  }



  async getDetailsById(id: number): Promise<BikeGetResponseDto> {
    const bike = await this.bikeRepository.find(id, {
      relations: [
        'brand',
        'featuredMediaItem',
        'featuredMediaItem.transformedMediaItems',
        'bikeOffDays',
        'bikeBasePrices',
        'relatedBikes',
      ],
    });
    if (!bike) {
      throw new NotFoundException('Bike not found');
    }

    const bikeWithRelatedBikes = await this.bikeRepository.findRelatedBikes(
      bike.id,
    );

    return plainToInstance(
      BikeGetResponseDto,
      { ...bike, relatedBikes: bikeWithRelatedBikes.relatedBikes },
      {
        excludeExtraneousValues: true,
      },
    );
  }

  async getBikeWithInsurancesById(id: number): Promise<BikeResponse> {
    const bike = this.getWithInsuranceById(id);

    return plainToClass(BikeResponse, bike, {
      excludeExtraneousValues: true,
    });
  }

  async getMediaItemsById(id: number) {
    const bike = await this.bikeRepository.getMediaItemsById(id);
    if (!bike) {
      throw new NotFoundException('Bike not found');
    }

    return (
      bike.mediaItems.map((mediaItem) => {
        return {
          ...mediaItem,
          mediaUrl: mediaItem.mediaUrl.replace(
            /^(https?:\/\/[^\/]*)(.*)$/,
            `${process.env.CLOUDFRONT_BASE_URL}$2`,
          ),
        };
      }) || []
    );
  }

  async getBikeDetailsForOrder(id: number): Promise<BikeForOrderResponse> {
    // const url = `${this.miamiBikeWpUrl}/wp-json/wp/v2/motorcycle-rental/${wpId}`;
    // const { data } = await firstValueFrom(this.httpService.get(url));
    const bike = this.getDetailsById(id);
    return plainToClass(BikeForOrderResponse, bike, {
      excludeExtraneousValues: true,
    });
  }

  async updateBikeInsurance(
    bikeId: number,
    insuranceId: number,
    insuranceRequest: InsuranceRequestDto,
  ): Promise<BikeInsuranceResponseDto> {
    const bike = await this.getWithInsuranceById(bikeId);

    const insurancePlan = bike.insurances.find(
      (data) => data.id === +insuranceId,
    );

    const updatedInsurance =
      await this.bikeInsurancePlanService.updateInsurance(
        insuranceRequest,
        insurancePlan,
        bike.id,
      );

    return plainToClass(BikeInsuranceResponseDto, updatedInsurance, {
      excludeExtraneousValues: true,
    });
  }

  async createBikeInsurance(
    bikeId: number,
    insuranceRequest: InsuranceRequestDto,
  ): Promise<BikeInsuranceResponseDto> {

    const bike = await this.bikeRepository.find(bikeId, {});
    const updatedInsurance =
      await this.bikeInsurancePlanService.createInsurancePlan(
        {
          maxAge: insuranceRequest.maxAge,
          minAge: insuranceRequest.minAge,
          type: insuranceRequest.type,
          dailyRate: insuranceRequest.dailyRate,
          deposit: insuranceRequest.deposit,
          description: insuranceRequest.description,
          popUpDescription: insuranceRequest.popUpDescription,
          bike: bike
        }
      );

    return plainToClass(BikeInsuranceResponseDto, updatedInsurance, {
      excludeExtraneousValues: true,
    });
  }

  async getWithInsuranceById(id: number): Promise<Bike> {
    const bike = await this.bikeRepository.find(id, {
      relations: ['insurances'],
    });
    if (!bike) {
      throw new NotFoundException('Bike not found');
    }

    return bike;
  }

  async createBike(bikeData: BikeCreateRequestDto) {
    const bikeDetail = bikeData.bike;
    const newBike = await this.bikeRepository.createBike({
      ...bikeDetail,
      wpBikeId: 0,
      seoTitle: '',
      seoDescription: '',
    });

    const galleryImageIds = bikeData.galleryImageIds;
    const offDaysData = bikeData.offDays;
    const basePricesData = bikeData.basePrices;
    const relatedBikesData = bikeData.relatedBikes ?? [];
    const insurancesData = bikeData.insurancePlans;

    for (const imageId of galleryImageIds) {
      await this.bikeMediaItemService.createBikeMediaItem({
        bikeId: newBike.id,
        mediaItemId: imageId,
      });
    }

    for (const offDayData of offDaysData) {
      await this.bikeOffDayService.createBikeOffDay({
        ...offDayData,
        bike: newBike,
      });
    }

    for (const basePriceData of basePricesData) {
      await this.bikeBasePriceService.createBikeBasePrice({
        ...basePriceData,
        bike: newBike,
      });
    }

    for (const insuranceData of insurancesData) {
      await this.bikeInsurancePlanService.createInsurancePlan({
        ...insuranceData,
        bike: newBike,
      });
    }

    for (const relatedBikeData of relatedBikesData) {
      await this.relatedBikeService.createRelatedBike({
        bikeId: newBike.id,
        relatedBikeId: relatedBikeData.relatedBikeId,
      });
    }

    return newBike;
  }

  async updateBike(bikeId: number, bikeData: BikeUpdateRequestDto) {
    // Find existing bike
    const existingBike = await this.bikeRepository.find(bikeId, {});

    if (!existingBike) {
      throw new NotFoundException(`Bike with id ${bikeId} not found`);
    }
    // Update bike details
    Object.assign(existingBike, bikeData.bike);
    await this.bikeRepository.saveBike(existingBike);

    // Update related entities

    // Update bikeMediaItems: should send full galleryIds(updated&not updated) or blank array if no updates
    const galleryImageIds = bikeData.galleryImageIds;
    if (galleryImageIds.length) {
      // Delete old bike-media-item records
      await this.bikeMediaItemService.deleteByBikeId(bikeId);
      // Create new bike-media-item records
      for (const imageId of galleryImageIds) {
        await this.bikeMediaItemService.createBikeMediaItem({
          bikeId,
          mediaItemId: imageId,
        });
      }
    }

    // Update off-days
    if (bikeData.offDays.length) {
      await this.bikeOffDayService.deleteByBikeId(bikeId);

      for (const offDayData of bikeData.offDays) {
        await this.bikeOffDayService.createBikeOffDay({
          ...offDayData,
          bike: existingBike,
        });
      }
    }

    // Update base prices
    if (bikeData.basePrices.length) {
      await this.bikeBasePriceService.deleteByBikeId(bikeId);

      for (const basePriceData of bikeData.basePrices) {
        await this.bikeBasePriceService.createBikeBasePrice({
          ...basePriceData,
          bike: existingBike,
        });
      }
    }

    // Update insurance plans
    for (const insuranceData of bikeData.insurancePlans) {
      if (insuranceData.id) {
        await this.bikeInsurancePlanService.updateInsurancePlan(
          insuranceData.id,
          {
            ...insuranceData,
            bike: existingBike,
          },
        );
      } else {
        await this.bikeInsurancePlanService.createInsurancePlan({
          ...insuranceData,
          bike: existingBike,
        });
      }
    }

    // Update related bikes
    if (bikeData.relatedBikes.length) {
      await this.relatedBikeService.deleteByBikeId(bikeId);

      for (const relatedBikeData of bikeData.relatedBikes) {
        await this.relatedBikeService.createRelatedBike({
          ...relatedBikeData,
          bikeId: existingBike.id,
        });
      }
    }

    return existingBike;
  }

  async updateBikePositions(bikePositions: BikePositionUpdateRequestDto[]) {
    const updatedRecords = await Promise.all(
      bikePositions.map(async (bikePosition) => {
        const bike = await this.bikeRepository.find(bikePosition.bikeId, {});
        bike.position = bikePosition.position;
        return this.bikeRepository.saveBike(bike);
      }),
    );
    return {
      message: 'Positions updated successfully',
      data: {
        updatedRecords: updatedRecords.length,
      },
    };
  }

  async updateBikeInfos(bikeId: number, bikeInfo: any) {
    const bike = await this.bikeRepository.find(bikeId, {});

    bike.model = bikeInfo.model;
    bike.slug = bikeInfo.slug;
    bike.brandId = bikeInfo.brandId;
    bike.highlights = bikeInfo.highlights;
    bike.description = bikeInfo.description;
    bike.distanceIncluded = bikeInfo.distanceIncluded;
    bike.features = bikeInfo.features;
    bike.extras = bikeInfo.extras;
    bike.name = bikeInfo.name
    // bike.seoTitle = bikeInfo.seoTitle
    // bike.seoDescription = bikeInfo.seoDescription
    bike.typeId = bikeInfo.typeId
    this.relatedBikeService.deleteByBikeId(bike.id);
    bikeInfo.relatedBikesId ? bikeInfo.relatedBikesId.forEach(element => {
      this.relatedBikeService.createRelatedBike({ bikeId: bike.id, relatedBikeId: element })
    }) : null;
    // bike.wpBikeId = bikeInfo.wpBikeId
    return this.bikeRepository.saveBike(bike);
  }


  async createBikeInfo(bikeInfo: any) {
    await this.bikeRepository.createBike({ ...bikeInfo, wpBikeId: 0, is_deleted: 1, status: 'draft' }).then(bike => {
      bikeInfo.relatedBikesId ? bikeInfo.relatedBikesId.forEach(element => {
        this.relatedBikeService.createRelatedBike({ bikeId: bike.id, relatedBikeId: element })
      }) : null;
    });


  }

  async changeBasePrice(bikeId: number, basePrice: any) {
    const bike = await this.bikeRepository.find(bikeId, {});
    bike.regularPrice = basePrice.regularPrice;
    bike.discountPrice =
      Number((basePrice.regularPrice -
        basePrice.regularPrice * (basePrice.discountPercentage / 100)).toFixed(2));
    return this.bikeRepository.saveBike(bike);
  }


  async deleteCarouselImage(id: number) {
    await this.bikeMediaItemService.deleteByMediaId(id);
    return 'okay';
  }

  async deleteBike(id: number) {
    await this.bikeRepository.deleteById(id);
    return 'okay';
  }

  async deleteInsurance(id:number){
    await this.bikeInsurancePlanService.deleteById(id);
    return 'okay';
  }

  async updateBikeMainImage(bikeId: number, imgId: any) {
    const bike = await this.bikeRepository.find(bikeId, {});
    bike.featuredMediaItemId = imgId;
    return this.bikeRepository.saveBike(bike);
  }

  async updateCarouselBikeImages(bikeId: number, imgId: any) {
    await this.bikeMediaItemService.createBikeMediaItem({ bikeId: bikeId, mediaItemId: imgId })
    return 'okay';
  }

  async getDiscountPrices(id: number) {
    const bike = await this.bikeRepository.find(id, {});
    return bike.discountPercentage;
  }

  async updateBikeDiscounts(id: number, body: any) {
    const bike = await this.bikeRepository.find(id, {});
    bike.discountPercentage = body.discountPercentage
    return this.bikeRepository.saveBike(bike);
  }

  async softDeleteBike(id: number, type: number) {
    const bike = await this.bikeRepository.find(id, {});
    bike.is_deleted = 1 - type;
    bike.status = type == 1 ? 'publish' : 'draft';
    return this.bikeRepository.saveBike(bike);
  }

  async setBikeSEO(id: number, body: any) {
    const bike = await this.bikeRepository.find(id, {});

    bike.seoTitle = body.seoTitle;
    bike.seoDescription = body.seoDescription;
    bike.ogTitle = body.ogTitle;
    bike.ogDescription = body.ogDescription;
    // bike.ogAltImage = body.ogAltImage;
    bike.canonical = body.canonical;
    bike.keywords = body.keywords;
    // bike.ogImage = body.ogImage;
    return this.bikeRepository.saveBike(bike);
  }

}
