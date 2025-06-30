import { NextSeoProps } from "next-seo";
import HarleyDavidsonUltraInterceptorImage from '/public/images/bikes/harley-davidson-ultra-interceptor.webp';
import HarleyDavidsonUltraLimitedFLHTKImage from "/public/images/bikes/harley-davidson-ultra-limited-flhtk.webp";
import IndianRoadmasterGreenImage from '/public/images/bikes/indian-roadmaster-green.webp';
import HarleyDavidsonVrodMuscleImage from '/public/images/bikes/harely-davidson-v-rod-muscle.webp'
import HarleyDavidsonElectraGlideUltraClassicImage from "/public/images/bikes/harley-davidson-electra-glide-ultra-classic.webp";
import HarleyDavidsonStreetGlideFLHXImage from '/public/images/bikes/harley-davidson-street-glide-flhx.webp';
import IndianRoadmasterBlackImage from '/public/images/bikes/indian-roadmaster-black.webp';
import RoadKingRedImage from '/public/images/bikes/road-king-red.webp';
import HarleyDavidsonSportsterIron883BrownImage from '/public/images/bikes/harley-davidson-sportster-iron-883-brown.webp';
import HarleyDavidsonSportsterIronFortyEightImage from "/public/images/bikes/harley-davidson-sportster-iron-forty-eight.webp";
import HarleyDavidsonSportsterIron1200Image from "/public/images/bikes/harley-davidson-sportster-iron-1200.webp";
import SuzukiGsxS750Image from '/public/images/bikes/suzuki-gsx-s-750.webp';
import HarleyDavidsonSportsterIron883Image from '/public/images/bikes/harley-davidson-sportster-iron-883.webp';
import HarleyDavidsonSportsterIron883CustomImage from '/public/images/bikes/harley-davidson-sportster-iron-883-custom.webp';
import VespaScooterSprint50RedImage from '/public/images/bikes/vespa-scooter-sprint-50-red-scooter.webp';
import HarleyDavidsonSportsterXL883CustomImage from "/public/images/bikes/harley-davidson-sportster-xl-883C-custom.webp";
import BmwG310RImage from '/public/images/bikes/bmw-g310r.webp';
import YamahaR3Image from '/public/images/bikes/yamaha-r3.webp';
import VespaLX50RedImage from '/public/images/bikes/vespa-lx-50-red.webp';
import SuzukiTu250xImage from '/public/images/bikes/suzuki-tu250x.webp';
import VespaLX50YellowImage from '/public/images/bikes/vespa-lx-50-yellow.webp';
import ItalicaMini50ccImage from '/public/images/bikes/italica-mini-50cc.webp';
import ItalicaMini49ccScooterBlueImage from "/public/images/bikes/italica-mini-49cc-scooter-blue.webp";
import ItalicaAge50ccImage from '/public/images/bikes/italica-age-50cc.webp';
import VitacciBullet50ccImage from '/public/images/bikes/vitacci-bullet-50cc.webp';
import HondaRuckusImage from '/public/images/bikes/honda-ruckus.webp';
interface SingleBikeSEO {
  slug: string;
  seo: NextSeoProps;
}

export const bikesSeo: SingleBikeSEO[] = [
  {
    slug: "rent-a-harley-davidson-ultra-interceptor",
    seo: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-ultra-interceptor`,
      title:
        "Rent A Harley Davidson Ultra Glide Interceptor In Miami FL | $120 / 24hr",
      description:
        "Rent A Harley Davidson Ultra Glide Interceptor Fully Loaded & With USB Phone Charging For As Low As $120 Per 24 Hours.",
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "harley davidson ultra glide interceptor, harley davidson motorcycle, rent a harley davidson ultra glide interceptor",
        },
      ],
      openGraph: {
        locale: "en_US",
        siteName: "Miami Motorcycle Rentals",
        title:
          "Rent A Harley Davidson Ultra Glide Interceptor In Miami FL | $120 / 24hr",
        description:
          "Rent A Harley Davidson Ultra Glide Interceptor Fully Loaded & With USB Phone Charging For As Low As $120 Per 24 Hours.",
        images: [
          {
            url: HarleyDavidsonUltraInterceptorImage.src,
            alt: "rent-a-harley-davidson-ultra-interceptor",
            width: 1200,
            height: 627,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-ultra-interceptor`,
        type: "website",
      },
    },
  },
  {
    slug: "rent-a-harley-davidson-ultra-limited-flhtk",
    seo: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-ultra-limited-flhtk`,
      title: "Rent A Harley Ultra Glide Limited In Miami FL | $112 /24hr",
      description:
        "Rent A Harley Davidson Ultra Glide Limited FLHTK Fully Loaded & With Premium Mustang Seats For As Low As $112 Per 24 Hours.",
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "harley davidson ultra glide limited, harley davidson motorcycle, rent a harley davidson ultra glide limited",
        },
      ],
      openGraph: {
        locale: "en_US",
        siteName: "Miami Motorcycle Rentals",
        title: "Rent A Harley Ultra Glide Limited In Miami FL | $112 /24hr",
        description:
          "Rent A Harley Davidson Ultra Glide Limited FLHTK Fully Loaded & With Premium Mustang Seats For As Low As $112 Per 24 Hours.",
        images: [
          {
            url: HarleyDavidsonUltraLimitedFLHTKImage.src,
            alt: "rent-a-harley-davidson-ultra-limited-flhtk",
            width: 1200,
            height: 627,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-ultra-limited-flhtk`,
        type: "website",
      },
    },
  },
  {
    slug: "rent-a-harley-davidson-v-rod-muscle",
    seo: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-v-rod-muscle`,
      title: "Rent A Harley Davidson V Rod Muscle In Miami FL | $106 /24hr",
      description:
        "Rent A Harley Davidson V Rod Muscle Built For Riders Who Want A Little Extra Horsepower For As Low As $106 Per 24 Hours.",
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "harley davidson v rod muscle, harley davidson motorcycle, rent a harley davidson v rod muscle",
        },
      ],
      openGraph: {
        locale: "en_US",
        siteName: "Miami Motorcycle Rentals",
        title: "Rent A Harley Davidson V Rod Muscle In Miami FL | $106 /24hr",
        description:
          "Rent A Harley Davidson V Rod Muscle Built For Riders Who Want A Little Extra Horsepower For As Low As $106 Per 24 Hours.",
        images: [
          {
            url: HarleyDavidsonVrodMuscleImage.src,
            alt: "rent-a-harley-davidson-v-rod-muscle",
            width: 1200,
            height: 627,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-v-rod-muscle`,
        type: "website",
      },
    },
  },
  {
    slug: "rent-a-harley-davidson-electra-glide-ultra-classic",
    seo: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-electra-glide-ultra-classic`,
      title:
        "Rent A Harley Davidson Electra Glide Ultra Classic In Miami | $104 /24hr",
      description:
        "Rent A Harley Davidson Electra Glide Ultra Classic With Pearl White Paint And USB Chargers For As Low As $104 Per 24 Hours.",
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "harley davidson electra glide ultra classic, harley davidson motorcycle, rent a harley davidson electra glide ultra classic",
        },
      ],
      openGraph: {
        locale: "en_US",
        siteName: "Miami Motorcycle Rentals",
        title:
          "Rent A Harley Davidson Electra Glide Ultra Classic In Miami | $104 /24hr",
        description:
          "Rent A Harley Davidson Electra Glide Ultra Classic With Pearl White Paint And USB Chargers For As Low As $104 Per 24 Hours.",
        images: [
          {
            url: HarleyDavidsonElectraGlideUltraClassicImage.src,
            alt: "rent-a-harley-davidson-electra-glide-ultra-classic",
            width: 1200,
            height: 627,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-electra-glide-ultra-classic`,
        type: "website",
      },
    },
  },
  {
    slug: "rent-a-harley-davidson-street-glide-flhx-metallic-blue",
    seo: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-street-glide-flhx-metallic-blue`,
      title:
        "Rent A Harley Davidson Street Glide FLHX In Miami FL | $104 /24hr",
      description:
        "Rent A Harley Davidson Street Glide FLHX With Metallic Blue Paint And Optional Back Rest For As Low As $104 Per 24 Hours.",
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "harley davidson street glide flhx, harley davidson motorcycle, rent a harley davidson street glide flhx",
        },
      ],
      openGraph: {
        locale: "en_US",
        siteName: "Miami Motorcycle Rentals",
        title:
          "Rent A Harley Davidson Street Glide FLHX In Miami FL | $104 /24hr",
        description:
          "Rent A Harley Davidson Street Glide FLHX With Metallic Blue Paint And Optional Back Rest For As Low As $104 Per 24 Hours.",
        images: [
          {
            url: HarleyDavidsonStreetGlideFLHXImage.src,
            alt: "rent-a-harley-davidson-street-glide-flhx-metallic-blue",
            width: 1200,
            height: 627,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-street-glide-flhx-metallic-blue`,
        type: "website",
      },
    },
  },
  {
    slug: "rent-a-harley-davidson-road-king-red",
    seo: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-road-king-red`,
      title: "Rent A Harley-Davidson Road King In Miami FL | As Low As $101",
      description:
        "Rent A Harley-Davidson Road King With Beautiful Fire Engine Red And Black Two-Tone Paint Scheme For As Low As $101 Per 24 Hours.",
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "harley davidson street glide flhx, harley davidson motorcycle, rent a harley davidson street glide flhx",
        },
      ],
      openGraph: {
        locale: "en_US",
        siteName: "Miami Motorcycle Rentals",
        title: "Rent A Harley-Davidson Road King In Miami FL | As Low As $101",
        description:
          "Rent A Harley-Davidson Road King With Beautiful Fire Engine Red And Black Two-Tone Paint Scheme For As Low As $101 Per 24 Hours.",
        images: [
          {
            url: RoadKingRedImage.src,
            alt: "rent-a-harley-davidson-road-king-red",
            width: 1200,
            height: 627,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-road-king-red`,
        type: "website",
      },
    },
  },
  {
    slug: "rent-a-harley-davidson-sportster-iron-883-brown",
    seo: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-sportster-iron-883-brown`,
      title:
        "Rent A Sportster Iron 883 | 24 Hours $79 | Harley-Davidson Rentals",
      description:
        "Rent A Harley-Davidson Sportster Iron 883 For As Low As $79 Per 24 Hours At Miami Motorcycle Rentals Today.",
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "harley davidson sportster iron 883 brown, harley davidson motorcycle, rent a harley davidson sportster iron 883 brown",
        },
      ],
      openGraph: {
        locale: "en_US",
        siteName: "Miami Motorcycle Rentals",
        title:
          "Rent A Sportster Iron 883 | 24 Hours $79 | Harley-Davidson Rentals",
        description:
          "Rent A Harley-Davidson Sportster Iron 883 For As Low As $79 Per 24 Hours At Miami Motorcycle Rentals Today.",
        images: [
          {
            url: HarleyDavidsonSportsterIron883BrownImage.src,
            alt: "rent-a-harley-davidson-sportster-iron-883-brown",
            width: 1200,
            height: 627,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-sportster-iron-883-brown`,
        type: "website",
      },
    },
  },
  {
    slug: "rent-a-harley-davidson-sportster-iron-forty-eight",
    seo: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-sportster-iron-forty-eight`,
      title: "Rent A Sportster Forty Eight | Harley Rental In Miami",
      description:
        "Rent A Harley-Davidson Sportster Forty Eight For As Low As $68 Per 24 Hours At Miami Motorcycle Rentals. Fast & Easy Online Booking.",
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "harley davidson sportster forty eight, harley davidson motorcycle, rent a harley davidson sportster forty eight",
        },
      ],
      openGraph: {
        locale: "en_US",
        siteName: "Miami Motorcycle Rentals",
        title: "Rent A Sportster Forty Eight | Harley Rental In Miami",
        description:
          "Rent A Harley-Davidson Sportster Forty Eight For As Low As $68 Per 24 Hours At Miami Motorcycle Rentals. Fast & Easy Online Booking.",
        images: [
          {
            url: HarleyDavidsonSportsterIronFortyEightImage.src,
            alt: "rent-a-harley-davidson-sportster-iron-forty-eight",
            width: 1200,
            height: 627,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-sportster-iron-forty-eight`,
        type: "website",
      },
    },
  },
  {
    slug: "rent-a-harley-davidson-sportster-iron-1200",
    seo: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-sportster-iron-1200`,
      title: "Rent A Sportster Iron 1200 | Harley-Davidson Rentals",
      description:
        "Rent A Harley-Davidson Sportster Iron 1200 For As Low As $64 Per 24 Hours At Miami Motorcycle Rentals Today.",
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "harley davidson sportster iron 1200, harley davidson motorcycle, rent a harley davidson sportster iron 1200",
        },
      ],
      openGraph: {
        locale: "en_US",
        siteName: "Miami Motorcycle Rentals",
        title: "Rent A Sportster Iron 1200 | Harley-Davidson Rentals",
        description:
          "Rent A Harley-Davidson Sportster Iron 1200 For As Low As $64 Per 24 Hours At Miami Motorcycle Rentals Today.",
        images: [
          {
            url: HarleyDavidsonSportsterIron1200Image.src,
            alt: "rent-a-harley-davidson-sportster-iron-1200",
            width: 1200,
            height: 627,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-sportster-iron-1200`,
        type: "website",
      },
    },
  },
  {
    slug: "rent-a-harley-davidson-sportster-iron-883",
    seo: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-sportster-iron-883`,
      title: "Rent A Sportster Iron 883 | Harley-Davidson Rentals | $56/24hr ",
      description:
        "Rent A Harley-Davidson Sportster Iron 883 For As Low As $56 Per 24 Hours At Miami Motorcycle Rentals Today.",
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "harley davidson sportster iron 883 black, harley davidson motorcycle, rent a harley davidson sportster iron 883 black",
        },
      ],
      openGraph: {
        locale: "en_US",
        siteName: "Miami Motorcycle Rentals",
        title:
          "Rent A Sportster Iron 883 | Harley-Davidson Rentals | $56/24hr ",
        description:
          "Rent A Harley-Davidson Sportster Iron 883 For As Low As $56 Per 24 Hours At Miami Motorcycle Rentals Today.",
        images: [
          {
            url: HarleyDavidsonSportsterIron883Image.src,
            alt: "rent-a-harley-davidson-sportster-iron-883",
            width: 1200,
            height: 627,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-sportster-iron-883`,
        type: "website",
      },
    },
  },
  {
    slug: "rent-a-harley-davidson-sportster-iron-883-custom",
    seo: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-sportster-iron-883-custom`,
      title: "Rent A Harley Sportster Iron 883 | Harley-Davidson Rentals",
      description:
        "Rent A Custom Harley-Davidson Sportster Iron 883 For As Low As $54 Per 24 Hours At Miami Motorcycle Rentals Today.",
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "harley davidson sportster iron 883 custom, harley davidson motorcycle, rent a harley davidson sportster iron 883 custom",
        },
      ],
      openGraph: {
        locale: "en_US",
        siteName: "Miami Motorcycle Rentals",
        title: "Rent A Harley Sportster Iron 883 | Harley-Davidson Rentals",
        description:
          "Rent A Custom Harley-Davidson Sportster Iron 883 For As Low As $54 Per 24 Hours At Miami Motorcycle Rentals Today.",
        images: [
          {
            url: HarleyDavidsonSportsterIron883CustomImage.src,
            alt: "rent-a-harley-davidson-sportster-iron-883-custom",
            width: 1200,
            height: 627,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-sportster-iron-883-custom`,
        type: "website",
      },
    },
  },
  {
    slug: "rent-a-indian-roadmaster-green",
    seo: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-indian-roadmaster-green`,
      title: "Rent A Roadmaster Green | Indian Motorcycle Rentals",
      description:
        "Rent A Green Indian Roadmaster For As Low As $106 Per 24 Hours At Miami Motorcycle Rentals. Fast & Easy Online Booking.",
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "indian roadmaster motorcycle rental, indian motorcycle, rent a indian motorcycle",
        },
      ],
      openGraph: {
        locale: "en_US",
        siteName: "Miami Motorcycle Rentals",
        title: "Rent A Roadmaster Green | Indian Motorcycle Rentals",
        description:
          "Rent A Green Indian Roadmaster For As Low As $106 Per 24 Hours At Miami Motorcycle Rentals. Fast & Easy Online Booking.",
        images: [
          {
            url: IndianRoadmasterGreenImage.src,
            alt: "rent-a-indian-roadmaster-green",
            width: 1200,
            height: 627,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-indian-roadmaster-green`,
        type: "website",
      },
    },
  },
  {
    slug: "rent-a-indian-roadmaster-black",
    seo: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-indian-roadmaster-black`,
      title: "Rent A Indian Roadmaster | Indian Motorcycle For Rent",
      description:
        "Rent A Black Indian Roadmaster For As Low As $101 Per 24 Hours At Miami Motorcycle Rentals. Fast & Easy Online Booking.",
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "indian roadmaster motorcycle rental, indian motorcycle, rent a indian motorcycle",
        },
      ],
      openGraph: {
        locale: "en_US",
        siteName: "Miami Motorcycle Rentals",
        title: "Rent A Indian Roadmaster | Indian Motorcycle For Rent",
        description:
          "Rent A Black Indian Roadmaster For As Low As $101 Per 24 Hours At Miami Motorcycle Rentals. Fast & Easy Online Booking.",
        images: [
          {
            url: IndianRoadmasterBlackImage.src,
            alt: "rent-a-indian-roadmaster-black",
            width: 1200,
            height: 627,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-indian-roadmaster-black`,
        type: "website",
      },
    },
  },
  {
    slug: "rent-a-harley-davidson-sportster-xl-883c-custom",
    seo: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-sportster-xl-883c-custom`,
      title:
        "Rent A Harley Davidson Sportster XL 883C In Miami FL | $52 / 24hr",
      description:
        "Rent A Harley Davidson Sportster XL 883C With Vance & Hines Performance Exhaust System For As Low As $52 Per 24 Hours.",
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "harley davidson sportster xl 883c custom, harley davidson motorcycle, rent a harley davidson sportster xl 883c custom",
        },
      ],
      openGraph: {
        locale: "en_US",
        siteName: "Miami Motorcycle Rentals",
        title:
          "Rent A Harley Davidson Sportster XL 883C In Miami FL | $52 / 24hr",
        description:
          "Rent A Harley Davidson Sportster XL 883C With Vance & Hines Performance Exhaust System For As Low As $52 Per 24 Hours.",
        images: [
          {
            url: HarleyDavidsonSportsterXL883CustomImage.src,
            alt: "rent-a-harley-davidson-sportster-xl-883c-custom",
            width: 1200,
            height: 627,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-harley-davidson-sportster-xl-883c-custom`,
        type: "website",
      },
    },
  },
  {
    slug: "rent-a-suzuki-gsx-s-750",
    seo: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-suzuki-gsx-s-750`,
      title: "Rent A Suzuki GSX-S 750 | Suzuki Motorcycle Rentals Miami",
      description:
        "Rent A Suzuki GSX-S 750 Naked Motorcycle In Miami For As Low As $60 Per 24 Hours. Fast & Affordable At Miami Motorcycle Rentals.",
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "suzuki gsxs 750 motorcycle rental, suzuki motorcycle, rent a suzuki naked motorcycle",
        },
      ],
      openGraph: {
        locale: "en_US",
        siteName: "Miami Motorcycle Rentals",
        title: "Rent A Suzuki GSX-S 750 | Suzuki Motorcycle Rentals Miami",
        description:
          "Rent A Suzuki GSX-S 750 Naked Motorcycle In Miami For As Low As $60 Per 24 Hours. Fast & Affordable At Miami Motorcycle Rentals.",
        images: [
          {
            url: SuzukiGsxS750Image.src,
            alt: "rent-a-suzuki-gsx-s-750",
            width: 1200,
            height: 627,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-suzuki-gsx-s-750`,
        type: "website",
      },
    },
  },
  {
    slug: "rent-a-suzuki-tu250x",
    seo: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-suzuki-tu250x`,
      title: "Rent A TU250X | Suzuki Motorcycle Rentals In Miami",
      description:
        "Rent A Suzuki TU250X In Miami For As Low As $44 Per 24 Hours At Miami Motorcycle Rentals. Fast, Easy, And Affordable Motorcycle Rentals.",
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "suzuki tu250x motorcycle rental, suzuki motorcycle, rent a suzuki motorcycle",
        },
      ],
      openGraph: {
        locale: "en_US",
        siteName: "Miami Motorcycle Rentals",
        title: "Rent A TU250X | Suzuki Motorcycle Rentals In Miami",
        description:
          "Rent A Suzuki TU250X In Miami For As Low As $44 Per 24 Hours At Miami Motorcycle Rentals. Fast, Easy, And Affordable Motorcycle Rentals.",
        images: [
          {
            url: SuzukiTu250xImage.src,
            alt: "rent-a-suzuki-tu250x",
            width: 1200,
            height: 627,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-suzuki-tu250x`,
        type: "website",
      },
    },
  },
  {
    slug: "rent-a-yamaha-r3",
    seo: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-yamaha-r3`,
      title: "Rent A Yamaha R3 | Yamaha Motorcycle Rentals In Miami",
      description:
        "Rent A Yamaha Motorcycle In Miami For As Low As $48 Per 24 Hours At Miami Motorcycle Rentals. Fast & Affordable Motorcycle Rentals.",
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "yamaha r3 motorcycle rental, yamaha motorcycle, rent a yamaha r3 motorcycle",
        },
      ],
      openGraph: {
        locale: "en_US",
        siteName: "Miami Motorcycle Rentals",
        title: "Rent A Yamaha R3 | Yamaha Motorcycle Rentals In Miami",
        description:
          "Rent A Yamaha Motorcycle In Miami For As Low As $48 Per 24 Hours At Miami Motorcycle Rentals. Fast & Affordable Motorcycle Rentals.",
        images: [
          {
            url: YamahaR3Image.src,
            alt: "rent-a-yamaha-r3",
            width: 1200,
            height: 627,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-yamaha-r3`,
        type: "website",
      },
    },
  },
  {
    slug: "rent-a-bmw-g310r",
    seo: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-bmw-g310r`,
      title: "BMW Motorcycle Rental Miami I Book Online Instantly",
      description:
        "Want to rent a BMW Motorcycle in Miami, FL? We offer fast, easy, and affordable BMW motorcycle rentals in Miami.",
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "bmw g310r motorcycle rental, bmw motorcycle, rent a bmw g310r motorcycle",
        },
      ],
      openGraph: {
        locale: "en_US",
        siteName: "Miami Motorcycle Rentals",
        title: "BMW Motorcycle Rental Miami I Book Online Instantly",
        description:
          "Want to rent a BMW Motorcycle in Miami, FL? We offer fast, easy, and affordable BMW motorcycle rentals in Miami.",
        images: [
          {
            url: BmwG310RImage.src,
            alt: "rent-a-bmw-g310r",
            width: 1200,
            height: 627,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-bmw-g310r`,
        type: "website",
      },
    },
  },
  {
    slug: "rent-a-honda-ruckus",
    seo: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-honda-ruckus`,
      title: "Rent A Honda Ruckus | Honda Motorcycle Rentals In Miami, FL",
      description:
        "Rent A Honda Ruckus For As Low As $40 Per 24 Hours At Miami Motorcycle Rentals. Fast & Easy Online Booking.",
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "honda ruckus motorcycle rental, honda motorcycle, rent a honda ruckus motorcycle",
        },
      ],
      openGraph: {
        locale: "en_US",
        siteName: "Miami Motorcycle Rentals",
        title: "Rent A Honda Ruckus | Honda Motorcycle Rentals In Miami, FL",
        description:
          "Rent A Honda Ruckus For As Low As $40 Per 24 Hours At Miami Motorcycle Rentals. Fast & Easy Online Booking.",
        images: [
          {
            url: HondaRuckusImage.src,
            alt: "rent-a-honda-ruckus",
            width: 1200,
            height: 627,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-honda-ruckus`,
        type: "website",
      },
    },
  },
  {
    slug: "rent-a-vitacci-bullet-50cc",
    seo: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-vitacci-bullet-50cc`,
      title: "Rent A Vitacci Bullet 49cc | Scooter Rentals In Miami, FL",
      description:
        "Rent A Vitacci Bullet 49cc For As Low As $40 Per 24 Hours At Miami Motorcycle Rentals. Fast & Easy Online Booking.",
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "vitacci bullet motorcycle rental, vitacci motorcycle, rent a vitacci bullet 49cc motorcycle",
        },
      ],
      openGraph: {
        locale: "en_US",
        siteName: "Miami Motorcycle Rentals",
        title: "Rent A Vitacci Bullet 49cc | Scooter Rentals In Miami, FL",
        description:
          "Rent A Vitacci Bullet 49cc For As Low As $40 Per 24 Hours At Miami Motorcycle Rentals. Fast & Easy Online Booking.",
        images: [
          {
            url: VitacciBullet50ccImage.src,
            alt: "rent-a-vitacci-bullet-50cc",
            width: 1200,
            height: 627,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-vitacci-bullet-50cc`,
        type: "website",
      },
    },
  },
  {
    slug: "rent-a-vespa-sprint-50-red",
    seo: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-vespa-sprint-50-red`,
      title:
        "Rent A Vespa Sprint 50 Scooter | Vespa Scooter Rental In Miami, FL",
      description:
        "Rent A Vespa Sprint 50 in Red For As Low As $52 Per 24 Hours At Miami Motorcycle Rentals. Fast & Easy Online Booking.",
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "vespa motorcycle rental, vespa motorcycle, rent a vespa sprint 50 motorcycle",
        },
      ],
      openGraph: {
        locale: "en_US",
        siteName: "Miami Motorcycle Rentals",
        title:
          "Rent A Vespa Sprint 50 Scooter | Vespa Scooter Rental In Miami, FL",
        description:
          "Rent A Vespa Sprint 50 in Red For As Low As $52 Per 24 Hours At Miami Motorcycle Rentals. Fast & Easy Online Booking.",
        images: [
          {
            url: VespaScooterSprint50RedImage.src,
            alt: "rent-a-vespa-sprint-50-red",
            width: 1200,
            height: 627,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-vespa-sprint-50-red`,
        type: "website",
      },
    },
  },
  {
    slug: "rent-a-vespa-lx-50-red",
    seo: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-vespa-lx-50-red`,
      title: "Rent A Vespa LX 50 | Vespa Motorcycle Rentals In Miami, FL",
      description:
        "Rent A Vespa LX 50 in Red For As Low As $44 Per 24 Hours At Miami Motorcycle Rentals. Fast & Easy Online Booking.",
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "vespa motorcycle rental, vespa motorcycle, rent a vespa lx 50 motorcycle red",
        },
      ],
      openGraph: {
        locale: "en_US",
        siteName: "Miami Motorcycle Rentals",
        title: "Rent A Vespa LX 50 | Vespa Motorcycle Rentals In Miami, FL",
        description:
          "Rent A Vespa LX 50 in Red For As Low As $44 Per 24 Hours At Miami Motorcycle Rentals. Fast & Easy Online Booking.",
        images: [
          {
            url: VespaLX50RedImage.src,
            alt: "rent-a-vespa-lx-50-red",
            width: 1200,
            height: 627,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-vespa-lx-50-red`,
        type: "website",
      },
    },
  },
  {
    slug: "rent-a-vespa-lx-50-yellow",
    seo: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-vespa-lx-50-yellow`,
      title:
        "Rent A Vespa LX 50 in Yellow | Vespa Motorcycle Rentals In Miami, FL",
      description:
        "Rent A Vespa LX 50 in Yellow For As Low As $44 Per 24 Hours At Miami Motorcycle Rentals. Fast & Easy Online Booking.",
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "vespa motorcycle rental, vespa motorcycle, rent a vespa lx 50 motorcycle yellow",
        },
      ],
      openGraph: {
        locale: "en_US",
        siteName: "Miami Motorcycle Rentals",
        title:
          "Rent A Vespa LX 50 in Yellow | Vespa Motorcycle Rentals In Miami, FL",
        description:
          "Rent A Vespa LX 50 in Yellow For As Low As $44 Per 24 Hours At Miami Motorcycle Rentals. Fast & Easy Online Booking.",
        images: [
          {
            url: VespaLX50YellowImage.src,
            alt: "rent-a-vespa-lx-50-yellow",
            width: 1200,
            height: 627,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-vespa-lx-50-yellow`,
        type: "website",
      },
    },
  },
  {
    slug: "rent-a-italica-mini-50cc",
    seo: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-italica-mini-50cc`,
      title: "Rent A Italica MINI 49cc | 49cc Scooter Rentals Miami",
      description:
        "Rent A Italica MINI 49cc In Miami For As Low As $40 Per 24 Hours At Miami Motorcycle Rentals. No Motorcycle License is Needed To Rent.",
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "italica mini motorcycle rental, Italica motorcycle, rent a italica mini 50cc motorcycle yellow",
        },
      ],
      openGraph: {
        locale: "en_US",
        siteName: "Miami Motorcycle Rentals",
        title: "Rent A Italica MINI 49cc | 49cc Scooter Rentals Miami",
        description:
          "Rent A Italica MINI 49cc In Miami For As Low As $40 Per 24 Hours At Miami Motorcycle Rentals. No Motorcycle License is Needed To Rent.",
        images: [
          {
            url: ItalicaMini50ccImage.src,
            alt: "rent-a-italica-mini-50cc",
            width: 1200,
            height: 627,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-italica-mini-50cc`,
        type: "website",
      },
    },
  },
  {
    slug: "rent-a-italica-mini-49cc-scooter-blue",
    seo: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-italica-mini-49cc-scooter-blue`,
      title:
        "Rent A Italica Mini 49cc Scooter In Blue | Miami Motorcycle Rentals",
      description:
        "Rent A Blue Italica Mini 49cc Scooter In Miami For As Low As $40 Per 24 Hours At Miami Motorcycle Rentals. Must have a motorcycle license.",
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "italica mini motorcycle rental, Italica motorcycle, rent a italica mini 49cc motorcycle blue",
        },
      ],
      openGraph: {
        locale: "en_US",
        siteName: "Miami Motorcycle Rentals",
        title:
          "Rent A Italica Mini 49cc Scooter In Blue | Miami Motorcycle Rentals",
        description:
          "Rent A Blue Italica Mini 49cc Scooter In Miami For As Low As $40 Per 24 Hours At Miami Motorcycle Rentals. Must have a motorcycle license.",
        images: [
          {
            url: ItalicaMini49ccScooterBlueImage.src,
            alt: "rent-a-italica-mini-49cc-scooter-blue",
            width: 1200,
            height: 627,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-italica-mini-49cc-scooter-blue`,
        type: "website",
      },
    },
  },
  {
    slug: "rent-a-italica-age-50cc",
    seo: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-italica-age-50cc`,
      title: "Rent A Italica Age 49cc | Low Cost Scooter Rentals in Miami, FL",
      description:
        "Rent A Italica Age 49cc In Miami For As Low As $40 Per 24 Hours At Miami Motorcycle Rentals. No Motorcycle License is Needed To Rent.",
      additionalMetaTags: [
        {
          name: "keywords",
          content:
            "italica age motorcycle rental, Italica motorcycle, rent a italica age 50 motorcycle red",
        },
      ],
      openGraph: {
        locale: "en_US",
        siteName: "Miami Motorcycle Rentals",
        title:
          "Rent A Italica Age 49cc | Low Cost Scooter Rentals in Miami, FL",
        description:
          "Rent A Italica Age 49cc In Miami For As Low As $40 Per 24 Hours At Miami Motorcycle Rentals. No Motorcycle License is Needed To Rent.",
        images: [
          {
            url: ItalicaAge50ccImage.src,
            alt: "rent-a-italica-age-50cc",
            width: 1200,
            height: 627,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/motorcycle-rental/rent-a-italica-age-50cc`,
        type: "website",
      },
    },
  },
];
