import GoogleTagManager from "@/components/GoogleTagManager";
import ProvidersWrapper from "@/providers/ProvidersWrapper";
import Theme from "@/styles/theme";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import ReactGA from "react-ga";
import React from 'react';
import 'react-quill/dist/quill.snow.css'

// Initialize Google Analytics
ReactGA.initialize("UA-139221154-3");

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Log initial pageview
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);

    // Log pageview on route change
    const handleRouteChange = (url: string) => {
      ReactGA.set({ page: url });
      ReactGA.pageview(url);
    };

    // Bind the event listener
    router.events.on("routeChangeComplete", handleRouteChange);

    // Unbind the event listener on unmount
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Theme>
      <ProvidersWrapper>
        <Head>
          {/* Hotjar Tracking Code */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3547777,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
              `,
            }}
          />
          {/* End of Hotjar Tracking Code */}
        </Head>
        <Component {...pageProps} />
        <GoogleTagManager />
      </ProvidersWrapper>
    </Theme>
  );
}
