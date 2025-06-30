import { blogs } from "@/constants/blogs";
import { Bike, Brand } from "@/types";
import { convertTitleToLink } from "@/utils/helpers";
import { GetServerSideProps } from "next";

const SITE_URL = process.env.SITE_URL;

function generateSiteMap(bikes: Bike[], brands: Brand[]) {
  const brandLinks = brands.map((brand) => {
    const convertedBrandSlugs = `${convertTitleToLink(brand.name).replace(
      "cycles",
      "cycle"
    )}-rental-miami`;
    return `${SITE_URL}/${convertedBrandSlugs}`;
  });

  const blogsLinks = blogs.map(
    (blog) => `${SITE_URL}/blog/${convertTitleToLink(blog.title)}`
  );

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
        <loc>${SITE_URL}</loc>
     </url>
     <url>
        <loc>${SITE_URL}/motorcycle-rental</loc>
     </url>
     <url>
           <loc>${SITE_URL}/terms-of-services</loc>
     </url>
     <url>
           <loc>${SITE_URL}/privacy-policy</loc>
     </url>
     <url>
           <loc>${SITE_URL}/login</loc>
     </url>
     ${bikes
       .map((bike) => {
         return `
       <url>
           <loc>${SITE_URL}/motorcycle-rental/${bike.slug}</loc>
       </url>
     `;
       })
       .join("")}
       
      ${brandLinks
        .map(
          (brand) =>
            `
            <url>
                <loc>${brand}</loc>
            </url>
          `
        )
        .join("")}
     <url>
        <loc>${SITE_URL}/blog</loc>
     </url>
      ${blogsLinks
        .map(
          (blog) =>
            `
            <url>
                <loc>${blog}</loc>
            </url>
          `
        )
        .join("")}
   </urlset>
 `;
}

const SiteMap = () => {
 // getServerSideProps will do the heavy lifting
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  try {
    // We make an API call to gather the URLs for our site
    const bikesUrl = `${process.env.BASE_API_URL}/bikes`;
    const brandsUrl = `${process.env.BASE_API_URL}/brands`;

    const [bikeRawResponse, brandsRawResponse] = await Promise.all([
      fetch(bikesUrl),
      fetch(brandsUrl),
    ]);

    const [bikeData, brandsData] = await Promise.all([
      bikeRawResponse.json(),
      brandsRawResponse.json(),
    ]);

    const allBikes = bikeData.data as Bike[];
    const allBrands = brandsData.data as Brand[];

    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(allBikes, allBrands);

    res.setHeader("Content-Type", "text/xml");
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
      props: {},
    };
  } catch (error) {
    return {
      // notFound: true,
      props: {
        sitemap: {}
      }
    };
  }
};

export default SiteMap;
