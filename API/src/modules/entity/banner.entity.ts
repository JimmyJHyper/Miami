import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BikeRentalBase } from './base.entity';
import { MediaItem } from './media-item.entity';

@Entity({ name: 'banners' })
export class Banner extends BikeRentalBase {
  @Column({
    nullable: false,
    name: 'title',
  })
  title: string;

  @Column({
    nullable: false,
    name: 'alt_text',
  })
  altText: string;

  @Column({
    nullable: true,
    name: 'url',
  })
  url: string;

  @Column({
    nullable: true,
    name: 'positions',
  })
  positions: string;

  @Column({
    nullable: false,
    name: 'is_enabled',
    default: false,
  })
  isEnabled: boolean;

  @Column({
    nullable: true,
    name: 'media_item_id',
  })
  mediaItemId: number;

  @Column({
    nullable: true,
    name: 'small_media_item_id',
  })
  mediaSmallItemId: number;

  @ManyToOne(() => MediaItem)
  @JoinColumn({ name: 'media_item_id' })
  mediaItem: MediaItem;

  @ManyToOne(() => MediaItem)
  @JoinColumn({ name: 'small_media_item_id' })
  mediaSmallItem: MediaItem;
}
