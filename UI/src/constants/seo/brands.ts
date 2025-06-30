import { NextSeoProps } from "next-seo";

import BMWG310RImage from '/public/images/bikes/bmw-g310r.webp'
import RoadKingRedImage from '/public/images/bikes/road-king-red.webp'
import SuzukiGSXS750Image from '/public/images/bikes/suzuki-gsx-s-750.webp'
import HondaRuckusImage from '/public/images/bikes/honda-ruckus.webp'
import IndianRoadmasterGreenImage from '/public/images/bikes/indian-roadmaster-green.webp'
import YamahaR3Image from '/public/images/bikes/yamaha-r3.webp'

interface SingleBrandSEO {
  slug: string;
  seo: NextSeoProps;
}

export const brandsSeo: SingleBrandSEO[] = [
  {
    slug: "bmw-motorcycle-rental-miami",
    seo: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/bmw-motorcycle-rental-miami`,
      title: "BMW Motorcycle Rentals In Miami FL | Book Online Instantly",
      description:
        "Explore our BMW Motorcycle Rentals available in Miami Florida. We offer rental rates as low as $52/day. Very easy online booking. ",
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "bmw motorcycle rental, rent a bmw motorcycle, rent bmw motorcycle, bmw motorcycle rentals near me, bmw motorcycle rental near me ",
        },
      ],
      openGraph: {
        locale: "en_US",
        siteName: "Miami Motorcycle Rentals",
        title: "BMW Motorcycle Rentals In Miami FL | Book Online Instantly",
        description:
          "Explore our BMW Motorcycle Rentals available in Miami Florida. We offer rental rates as low as $52/day. Very easy online booking. ",
        images: [
          {
            url: BMWG310RImage.src,
            alt: "bmw-motorcycle-rental",
            width: 1200,
            height: 627,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/bmw-motorcycle-rental-miami`,
        type: "website",
      },
    },
  },
  {
    slug: "harley-davidson-rental-miami",
    seo: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/harley-davidson-rental-miami`,
      title: "Harley Davidson Rentals In Miami FL | Book Online Instantly",
      description:
        "Explore our Harley Rentals in Miami Florida. Well maintained and ready to ride with rates as low as $52/day. Easy online booking. ",
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "harley rentals, rent a harley, harley rental near me, rent harley davidson, harley rentals in miami, rent a harley in miami",
        },
      ],
      openGraph: {
        locale: "en_US",
        siteName: "Miami Motorcycle Rentals",
        title: "Harley Davidson Rentals In Miami FL | Book Online Instantly",
        description:
          "Explore our Harley Rentals in Miami Florida. Well maintained and ready to ride with rates as low as $52/day. Easy online booking. ",
        images: [
          {
            url: RoadKingRedImage.src,
            alt: "harley-rentals",
            width: 1200,
            height: 627,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/harley-davidson-rental-miami`,
        type: "website",
      },
    },
  },
  {
    slug: "ducati-motorcycle-rental-miami",
    seo: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/ducati-motorcycle-rental-miami`,
      title: "Ducati Motorcycle Rentals In Miami FL | Book Online Instantly",
      description:
        "Explore our Ducati Rentals in Miami Florida. Each Ducati Rental is well maintained with rates as low as $95/day. Bikes are coming soon. ",
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "ducati rental, rent a ducati, ducati miami, ducati rental near me, rent ducati, ducati rentals in miami, rent a ducati in miami",
        },
      ],
      openGraph: {
        locale: "en_US",
        siteName: "Miami Motorcycle Rentals",
        title: "Ducati Motorcycle Rentals In Miami FL | Book Online Instantly",
        description:
          "Explore our Ducati Rentals in Miami Florida. Each Ducati Rental is well maintained with rates as low as $95/day. Bikes are coming soon. ",
        images: [
          {
            url: "",
            alt: "duacti-rentals",
            width: 1200,
            height: 627,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/ducati-motorcycle-rental-miami`,
        type: "website",
      },
    },
  },
  {
    slug: "suzuki-motorcycle-rental-miami",
    seo: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/suzuki-motorcycle-rental-miami`,
      title: "Suzuki Motorcycle Rentals In Miami FL | Book Online Instantly",
      description:
        "Explore our Suzuki Motorcycle Rentals in Miami Florida. Choose from various Suzuki Motorcycles with rates as low as $44/day. Easy online booking.",
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "suzuki motorcycle rental, suzuki motorcycle rentals, suzuki rental, rent a suzuki motorcycle, suzuki motorcycle rental near me, rent suzuki motorcycles, suzuki motorcycle rentals in miami, rent a suzuki motorcycle in miami",
        },
      ],
      openGraph: {
        locale: "en_US",
        siteName: "Miami Motorcycle Rentals",
        title: "Suzuki Motorcycle Rentals In Miami FL | Book Online Instantly",
        description:
          "Explore our Suzuki Motorcycle Rentals in Miami Florida. Choose from various Suzuki Motorcycles with rates as low as $44/day. Easy online booking.",
        images: [
          {
            url: SuzukiGSXS750Image.src,
            alt: "suzuki-motorcycle-rentals",
            width: 1200,
            height: 627,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/suzuki-motorcycle-rental-miami`,
        type: "website",
      },
    },
  },
  {
    slug: "honda-motorcycle-rental-miami",
    seo: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/honda-motorcycle-rental-miami`,
      title: "Honda Motorcycle Rentals In Miami FL | Book Online Instantly",
      description:
        "Explore our Honda Motorcycle Rentals in Miami Florida. Choose from well-maintained Honda motorcycles with rates as low as $40/day. ",
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "rent a honda motorcycle in miami, miami honda motorcycles, honda motorcycle rental near me, honda motorcycle rental, rent honda motorcycle",
        },
      ],
      openGraph: {
        locale: "en_US",
        siteName: "Miami Motorcycle Rentals",
        title: "Honda Motorcycle Rentals In Miami FL | Book Online Instantly",
        description:
          "Explore our Honda Motorcycle Rentals in Miami Florida. Choose from well-maintained Honda motorcycles with rates as low as $40/day. ",
        images: [
          {
            url: HondaRuckusImage.src,
            alt: "honda-motorcycle-rentals",
            width: 1200,
            height: 627,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/honda-motorcycle-rental-miami`,
        type: "website",
      },
    },
  },
  {
    slug: "indian-motorcycle-rental-miami",
    seo: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/indian-motorcycle-rental-miami`,
      title: "Indian Motorcycle Rentals In Miami FL | Book Online Instantly",
      description:
        "Explore our Indian Motorcycle Rentals in Miami Florida. Choose an Indian Motorcycle that fits your biker style. Rates as low as $101/day.",
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "indian motorcycle rental, indian motorcycle rentals, rent indian motorcycle, rent an indian motorcycle miami, indian motorcycles miami",
        },
      ],
      openGraph: {
        locale: "en_US",
        siteName: "Miami Motorcycle Rentals",
        title: "Indian Motorcycle Rentals In Miami FL | Book Online Instantly",
        description:
          "Explore our Indian Motorcycle Rentals in Miami Florida. Choose an Indian Motorcycle that fits your biker style. Rates as low as $101/day.",
        images: [
          {
            url: IndianRoadmasterGreenImage.src,
            alt: "indian-motorcycle-rentals",
            width: 1200,
            height: 627,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/indian-motorcycle-rental-miami`,
        type: "website",
      },
    },
  },
  {
    slug: "yamaha-motorcycle-rental-miami",
    seo: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/yamaha-motorcycle-rental-miami`,
      title: "Yamaha Motorcycle Rentals In Miami FL | Book Online Instantly",
      description:
        "Explore our Yamaha Motorcycle Rentals in Miami Florida. Choose from well-maintained and reliable Yamaha Motorcycles for as low as $48/day.",
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "yamaha motorcycles rental, yamaha motorcycle rental near me, rent a yamaha motorcycle, yamaha motorcycles miami fl, rent yamaha motorcycle, yamaha motorcycles miami",
        },
      ],
      openGraph: {
        locale: "en_US",
        siteName: "Miami Motorcycle Rentals",
        title: "Yamaha Motorcycle Rentals In Miami FL | Book Online Instantly",
        description:
          "Explore our Yamaha Motorcycle Rentals in Miami Florida. Choose from well-maintained and reliable Yamaha Motorcycles for as low as $48/day.",
        images: [
          {
            url: YamahaR3Image.src,
            alt: "yamaha-motorcycle-rentals",
            width: 1200,
            height: 627,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/yamaha-motorcycle-rental-miami`,
        type: "website",
      },
    },
  },
];