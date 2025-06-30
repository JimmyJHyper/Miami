import TermsOfServices from "@/components/TermsOfServices";
import { MarketingLayout } from "@/layout/MarketingLayout";
import { useMarketing } from "@/providers/MarketingProvider";
import { MarketingContextType } from "@/providers/types";
import { Bike, BikeType, Brand } from "@/types";
import { NextSeo, NextSeoProps } from "next-seo";
import { useEffect } from 'react';
export { getStaticProps } from "@/lib/ssr/common";


interface ITermsOfServicesPageProps {
  bikes: Bike[];
  brands: Brand[];
  bikeTypes: BikeType[];
}


const seo: NextSeoProps =  {
  canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/terms-of-services`,
  title: "Miami Motorcycle Rentals Terms of Service and All Policies",
  description:
    `Please review the following terms prior to application to use the Miami Motorcycle Rentals service as a “Renter.” Call us for assistance.`,
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "terms of service",
    },
  ],
  openGraph: {
    locale: "en_US",
    siteName: "Miami Motorcycle Rentals",
    title: "Miami Motorcycle Rentals Terms of Service and All Policies",
    description:
      `Please review the following terms prior to application to use the Miami Motorcycle Rentals service as a “Renter.” Call us for assistance.`,
    images: [
      {
        url: "",
        alt: "terms-of-services",
        width: 1200,
        height: 627,
      },
    ],
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/terms-of-services`,
    type: "website",
  },
}
  

function Terms({bikeTypes, bikes, brands}: ITermsOfServicesPageProps) {

  const {
    setAllBikes,
    setAllBrands,
    setAllBikeTypes
  } = useMarketing() as MarketingContextType;

  useEffect(() => {
    setAllBikes(bikes);
    setAllBrands(brands);
    setAllBikeTypes(bikeTypes);
  }, []);

  return (
    <>
      <NextSeo {...seo} /> 
      <MarketingLayout>
        <TermsOfServices />
      </MarketingLayout>
    </>
  );
}

export default Terms;
