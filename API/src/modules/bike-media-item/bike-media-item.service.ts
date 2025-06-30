import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BikeMediaItem } from '../entity/bike-media-item.entity';

@Injectable()
export class BikeMediaItemService {
  constructor(
    @InjectRepository(BikeMediaItem)
    private bikeMediaItemRepository: Repository<BikeMediaItem>,
  ) {}

  async createBikeMediaItem(bikeMediaItemData: {
    bikeId: number;
    mediaItemId: number;
  }): Promise<BikeMediaItem> {
    const bikeMediaItem =
      this.bikeMediaItemRepository.create(bikeMediaItemData);
    await this.bikeMediaItemRepository.save(bikeMediaItem);
    return bikeMediaItem;
  }

  async deleteByBikeId(bikeId: number) {
    await this.bikeMediaItemRepository.delete({ bikeId });
  }

  async deleteByMediaId(mediaItemId: number) {
    
    await this.bikeMediaItemRepository.delete({ mediaItemId });
  }

  async updateAltImage(mediaItemId:number){
    let mediaItem= await this.bikeMediaItemRepository.findOne(mediaItemId);

  }
}
