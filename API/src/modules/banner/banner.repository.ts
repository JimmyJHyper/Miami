import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Banner } from '../entity/banner.entity';
import { MediaItem } from '../entity/media-item.entity';

@Injectable()
export class BannerRepository {
  constructor(
    @InjectRepository(Banner)
    private readonly bannerRepository: Repository<Banner>,
  ) {}

  async getbannerDetailsByWordpressId(id: number): Promise<Banner> {
    return this.bannerRepository.findOne({
      where: {
        wpbannerId: id,
      },
      relations: ['insurances'],
    });
  }

  async getAll(): Promise<Banner[]> {
    let banners = await this.bannerRepository
      .createQueryBuilder('banner')
      .leftJoinAndSelect('banner.mediaItem', 'mediaItem')
      .leftJoinAndSelect('banner.mediaSmallItem', 'mediaSmallItem') 
      .getMany();

    console.log(banners);
    return banners;
  }

  async find(id: number, options: { relations?: string[] }): Promise<Banner> {
    return this.bannerRepository.findOne(id, options);
  }

  async createEmptybanner(banner: any) {
    return this.bannerRepository.create(banner);
  }

  async findRelatedbanners(bannerId: number) {
    return this.bannerRepository.findOne(bannerId, {
      relations: [
        'relatedbanners',
        'relatedbanners.relatedbanner',
        'relatedbanners.relatedbanner.featuredMediaItem',
        'relatedbanners.relatedbanner.brand',
        'bannersRelatedTo',
        'bannersRelatedTo.banner',
      ],
    });
  }

  async getMediaItemsById(id: number) {
    return this.bannerRepository.findOne(id, { relations: ['mediaItems'] });
  }

  async deleteById(id: number) {
    return this.bannerRepository.delete(id);
  }

  async createBanner(bannerData: Partial<Banner>): Promise<Banner> {
    const banner = this.bannerRepository.create(bannerData);
    return this.bannerRepository.save(banner);
  }

  async saveBanner(bannerData: Banner) {
    return await this.bannerRepository.save(bannerData);
  }

  async toggleEnabled(bannerId: number, type: number) {
    await this.bannerRepository
      .createQueryBuilder()
      .update()
      .set({
        isEnabled: type == 1,
      })
      .where({ id: bannerId })
      .execute();

    return this.bannerRepository.findOne({
      where: { id: bannerId },
    });
  }
}
