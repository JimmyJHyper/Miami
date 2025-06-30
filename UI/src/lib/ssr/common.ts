import { Bike, BikeType, Brand } from "@/types";
import { GetStaticProps } from "next";

interface StaticPropsCommonResponse {
    bikes: Bike[];
    brands: Brand[];
    bikeTypes: BikeType[];
}

export const getStaticPropsCommon: GetStaticProps<StaticPropsCommonResponse> = async (
  _context
) => {
  const bikesUrl = `${process.env.BASE_API_URL}/bikes`;
  const brandsUrl = `${process.env.BASE_API_URL}/brands`;
  const bikeTypesUrl = `${process.env.BASE_API_URL}/types`;

  const [bikeRawResponse, brandsRawResponse, bikeTypesRawResponse] =
    await Promise.all([fetch(bikesUrl), fetch(brandsUrl), fetch(bikeTypesUrl)]);

  const [bikeData, brandsData, bikeTypesData] = await Promise.all([
    bikeRawResponse.status != 404?  bikeRawResponse.json():null,
    brandsRawResponse.json(),
    bikeTypesRawResponse.json(),
  ]);

  const allBikes = bikeData!=null?bikeData.data as Bike[]:[];
  const allBrands = brandsData.data as Brand[];
  const allBikeTypes = bikeTypesData.data as BikeType[];

  return {
    props: {
      bikes: allBikes,
      brands: allBrands,
      bikeTypes: allBikeTypes,
    },
    revalidate: 100,
  };
};


export const getStaticProps: GetStaticProps = async (_context) => {
  try {
    return getStaticPropsCommon(_context);
  } catch {
    return {
      notFound: true,
    };
  }
};