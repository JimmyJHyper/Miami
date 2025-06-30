"use client";
import LoginPage from "@/components/LoginPage";
import { MarketingLayout } from "@/layout/MarketingLayout";
import { NextSeo, NextSeoProps } from "next-seo";
import LogoImage from "/public/logo.png";

const seo: NextSeoProps = {
  canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/login`,
  title: "Login Or Become A New Rider At Miami Motorcycle Rentals.",
  description:
    "Login to Miami Motorcycle Rentals or become a new rider today.",
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "miami motorcycle rentals login, login to miami motorcycle rentals",
    },
  ],

  openGraph: {
    locale: "en_US",
    siteName: "Miami Motorcycle Rentals",
    title: "Login Or Become A New Rider At Miami Motorcycle Rentals.",
    description:
      "Login to Miami Motorcycle Rentals or become a new rider today.",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/login`,
    images: [
      {
        url: LogoImage.src,
        alt: "login-to-miami-motorcycle-rentals",
        width: 500,
        height: 500,
      },
    ],
  },
};
export default function Login() {
  return (
    <>
      <NextSeo {...seo} />
      <MarketingLayout>
        <LoginPage />
      </MarketingLayout>
    </>
  );
}
