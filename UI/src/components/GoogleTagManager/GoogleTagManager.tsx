//components/GoogleAnalytics.tsx
import Script from 'next/script';
import { memo } from 'react';
const TRACKING_ID = process.env.NEXT_PUBLIC_GA4_TRACKING_ID || '';
const GoogleAnalytics = () => {
  if (!TRACKING_ID) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`}
        strategy="afterInteractive"
      ></Script>
      {/* 👇 gtag function definition. notice that we don't send page views at this point.  */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${TRACKING_ID}');
          `}
      </Script>
    </>
  );
};
export default memo(GoogleAnalytics);
