export enum UserRole {
  ADMIN = 'administrator',
  CUSTOMER = 'customer',
}

export enum InsuranceEnum {
  MINIMUM = 'minimum',
  STANDARD = 'standard',
  PREMIUM = 'premium',
}

export enum OrderStatusEnum {
  INITIAL = 'initial',
  REQUESTED = 'requested',
  ON_CHECKOUT = 'on_checkout',
  APPROVED = 'approved',
  IN_PROGRESS = 'in_progress',
  cancelled = 'cancelled',
  completed = 'completed',
}

export enum BikeStatus {
  Publish = 'publish',
  Draft = 'draft',
}

export enum MediaSize {
  Large = 'large',
  Medium = 'medium',
  Thumbnail = 'thumbnail',
  MediumLarge = 'medium_large',
  XL = '1536x1536',
  PostMain = 'et-pb-post-main-image',
  PostMainFullWidth = 'et-pb-post-main-image-fullwidth',
  Portfolio = 'et-pb-portfolio-image',
  PortfolioModule = 'et-pb-portfolio-module-image',
  PortfolioSingle = 'et-pb-portfolio-image-single',
  Gallery = 'et-pb-gallery-module-image-portrait',
  Desktop = 'et-pb-image--responsive--desktop',
  Tablet = 'et-pb-image--responsive--tablet',
  Phone = 'et-pb-image--responsive--phone',
}

export const MediaDimension = {
  Large: {
    mediaSize: MediaSize.Large,
    width: 1024,
    height: 640,
  },
  Medium: {
    mediaSize: MediaSize.Medium,
    width: 300,
    height: 200,
  },
  MediumLarge: {
    mediaSize: MediaSize.MediumLarge,
    width: 768,
    height: 480,
  },
  Thumbnail: {
    MediaSize: MediaSize.Thumbnail,
    width: 150,
    height: 150,
  },
  XL: {
    MediaSize: MediaSize.XL,
    width: 1536,
    height: 960,
  },
  PostMain: {
    MediaSize: MediaSize.PostMain,
    width: 450,
    height: 250,
  },
  PostMainFullWidth: {
    MediaSize: MediaSize.PostMainFullWidth,
    width: 1080,
    height: 675,
  },
  Portfolio: {
    MediaSize: MediaSize.Portfolio,
    width: 400,
    height: 284,
  },
  PortfolioModule: {
    MediaSize: MediaSize.PortfolioModule,
    width: 510,
    height: 382,
  },
  PortfolioSingle: {
    MediaSize: MediaSize.PortfolioSingle,
    width: 1080,
    height: 675,
  },
  Gallery: {
    MediaSize: MediaSize.Gallery,
    width: 400,
    height: 516,
  },
  Desktop: {
    MediaSize: MediaSize.Desktop,
    width: 1280,
    height: 720,
  },
  Tablet: {
    MediaSize: MediaSize.Tablet,
    width: 980,
    height: 551,
  },
  Phone: {
    MediaSize: MediaSize.Phone,
    width: 480,
    height: 270,
  },
};
