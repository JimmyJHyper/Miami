import Footer from "@/components/Footer";
import { RiArrowUpSLine } from "react-icons/ri";
import ScrollToTop from "react-scroll-to-top";
import { DivMarketingLayoutContainer } from "./styles";

import dynamic from 'next/dynamic';
import styles from './MarketingLayout.module.css';
import React from "react";
import { Brand } from "@/types";

const Header = dynamic(() => import('@/components/Header'));
const MobileHeader = dynamic(() => import("@/components/MobileHeader"));

interface MarketingLayoutProps {
  children: React.ReactNode;
  allBrands?: Brand[];
}

export const MarketingLayout = ({ children, allBrands }: MarketingLayoutProps) => {
  return (
    <DivMarketingLayoutContainer>
      <div className={`${styles.marketingMobileContainer}`}>
        <MobileHeader />
      </div>
      <div className={`${styles.marketingPCContainer}`}>
        <Header />
      </div>
      <main>{children}</main>
      <Footer allBrands={allBrands} />
      <ScrollToTop smooth top={300} component={<RiArrowUpSLine />} />
    </DivMarketingLayoutContainer>
  );
};
