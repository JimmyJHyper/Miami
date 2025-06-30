import PrivacyPolicy from "@/components/PrivacyPolicy";
import { MarketingLayout } from "@/layout/MarketingLayout";
import { useMarketing } from "@/providers/MarketingProvider";
import { MarketingContextType } from "@/providers/types";
import { Bike, BikeType, Brand } from "@/types";
import { NextSeo, NextSeoProps } from "next-seo";
import { useEffect } from 'react';
export { getStaticProps } from "@/lib/ssr/common";

interface IPrivacyPolicyPageProps {
  bikes: Bike[];
  brands: Brand[];
  bikeTypes: BikeType[];
}


const seo: NextSeoProps =  {
  canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/privacy-policy`,
  title: "Privacy Policy | Miami Motorcycle Rentals",
  description:
    `Your privacy is important to us. For any questions or concerns regarding your privacy, you may contact us at info@miamimotorcyclerentals.com.`,
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "privacy policy",
    },
  ],
  openGraph: {
    locale: "en_US",
    siteName: "Miami Motorcycle Rentals",
    title: "Privacy Policy | Miami Motorcycle Rentals",
    description:
      `Your privacy is important to us. For any questions or concerns regarding your privacy, you may contact us at info@miamimotorcyclerentals.com.`,
    images: [
      {
        url: "",
        alt: "privacy-policy",
        width: 1200,
        height: 627,
      },
    ],
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/privacy-policy`,
    type: "website",
  },
}
  

function Privacy({bikeTypes, bikes, brands}: IPrivacyPolicyPageProps) {

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
        <PrivacyPolicy />
      </MarketingLayout>
    </>
  );
}

export default Privacy;


