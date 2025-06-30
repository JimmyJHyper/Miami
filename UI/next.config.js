const BASE_API_URL = `${process.env.BASE_API_URL}/`;

const providersCSP = {
  stripe: `https://connect-js.stripe.com https://js.stripe.com https://api.stripe.com https://checkout.stripe.com`,
};

const CSPBaseScriptSrc = `'self' 'unsafe-eval' 'unsafe-inline' ${providersCSP.stripe} ${BASE_API_URL} google-analytics.com https://ssl.google-analytics.com www.google-analytics.com tagmanager.google.com maps.googleapis.com googletagmanager.com www.googletagmanager.com stats.g.doubleclick.net https://*.hotjar.com blob:`;
const CSPBaseChildSrc = `'self' ${providersCSP.stripe} ${BASE_API_URL}`;
const CSPBaseStyleSrc = `'self' ${BASE_API_URL} tagmanager.google.com fonts.googleapis.com ${providersCSP.stripe} https://google.com https://*.hotjar.com 'unsafe-inline'`;
const CSPBaseFontSrc = `'self' ${BASE_API_URL} ${providersCSP.stripe} data: fonts.gstatic.com https://*.hotjar.com`;
const CSPBaseImageSrc = `'self' ${BASE_API_URL} ${providersCSP.stripe} d1oi5m316zaa67.cloudfront.net https://placehold.co  www.google.com miami-bike-rentals-staging.s3.us-east-1.amazonaws.com miami-bike-rentals-prod.s3.us-east-1.amazonaws.com www.miamimotorcyclerentals.com lh3.googleusercontent.com lh6.googleusercontent.com lh5.googleusercontent.com cdn.trustindex.io data: geo0.ggpht.com geo1.ggpht.com geo2.ggpht.com geo3.ggpht.com lh3.ggpht.com lh4.ggpht.com lh5.ggpht.com lh6.ggpht.com www.google-analytics.com https://www.google.com/ads/ga-audiences https://cbks0.googleapis.com https://khms0.googleapis.com https://khms1.googleapis.com maps.googleapis.com www.googletagmanager.com maps.gstatic.com ssl.gstatic.com www.gstatic.com stats.g.doubleclick.net/r/ *.google.com *.doubleclick.net *.googleadservices.net d1mk2t48d6xne6.cloudfront.net https://*.hotjar.com data: https:`;
const CSPBaseConnectSrc = `'self' ${BASE_API_URL} ${providersCSP.stripe} https://stats.g.doubleclick.net www.google-analytics.com https://analytics.google.com  https://ampcid.google.com https://stats.g.doubleclick.net/j/collect https://*.hotjar.com https://*.hotjar.io wss://*.hotjar.com`;
const CSPBaseObjectSrc = `'self' ${BASE_API_URL} ${providersCSP.stripe}`;
const CSPBaseFrameSrc = `'self' ${BASE_API_URL} ${providersCSP.stripe} www.googletagmanager.com https://maps.google.com/ www.maps.google.com www.google.com`;

const ContentSecurityPolicy = `
    script-src ${CSPBaseScriptSrc};
    child-src ${CSPBaseChildSrc};
    style-src ${CSPBaseStyleSrc};
    font-src ${CSPBaseFontSrc};
    img-src ${CSPBaseImageSrc};
    connect-src ${CSPBaseConnectSrc};
    object-src ${CSPBaseObjectSrc};
    frame-src ${CSPBaseFrameSrc} ;
`;

const securityHeaders = [
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
];

const cacheControlHeaders = [
  {
    key: "Cache-Control",
    value: "s-maxage=31536000, stale-while-revalidate",
  },
];

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "miami-bike-rentals-staging.s3.us-east-1.amazonaws.com",
      "miami-bike-rentals-prod.s3.us-east-1.amazonaws.com",
      "miami-bike-rentals-prod.s3.amazonaws.com",
      "miami-bike-rentals-staging.s3.amazonaws.com",
      "www.miamimotorcyclerentals.com",
      "lh3.googleusercontent.com",
      "lh6.googleusercontent.com",
      "lh5.googleusercontent.com",
      "d1mk2t48d6xne6.cloudfront.net",
      "d1oi5m316zaa67.cloudfront.net",
      "placehold.co",
    ],
  },
  compiler: {
    styledComponents: true,
  },
  generateBuildId: async () => {
    if (process.env.BUILD_ID) {
      return process.env.BUILD_ID;
    } else {
      return `${new Date().getTime()}`;
    }
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [...securityHeaders, ...cacheControlHeaders],
      },
      {
        source: "/privacy-policy",
        headers: [...securityHeaders, ...cacheControlHeaders],
      },
      {
        source: "/terms-of-services",
        headers: [...securityHeaders, ...cacheControlHeaders],
      },
      {
        source: "/:brandName",
        headers: [...securityHeaders, ...cacheControlHeaders],
      },
      {
        source: "/blog",
        headers: [...securityHeaders, ...cacheControlHeaders],
      },
      {
        source: "/blog/:blogTitle",
        headers: [...securityHeaders, ...cacheControlHeaders],
      },
      {
        source: "/motorcycle-rental",
        headers: [...securityHeaders, ...cacheControlHeaders],
      },
      {
        source: "/motorcycle-rental/:bikeName",
        headers: [...securityHeaders, ...cacheControlHeaders],
      },
    ];
  },
  experimental: {
    legacyBrowsers: false,
  },
  async redirects() {
    return [
      {
        source: "/daytona-bike-week-2023-get-involved-with-one-of-our-bikes",
        destination:
          "/blog/daytona-bike-week-2023-get-involved-with-one-of-our-bikes",
        permanent: true,
      },
      {
        source: "/the-ultimate-guide-to-motorcycle-trails-near-miami",
        destination: "/blog/the-ultimate-guide-to-motorcycle-trails-near-miami",
        permanent: true,
      },
      {
        source: "/miami-motorcycle-rentals-terms-of-service-and-all-policies",
        destination: "/terms-of-services",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
