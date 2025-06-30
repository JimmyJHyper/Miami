import BlogBanner from "@/components/BlogBanner";
import BlogDetail from "@/components/BlogDetail";
import BlogHeader from "@/components/BlogHeader";
import BlogPagination from "@/components/BlogPagination";
import CommentForm from "@/components/CommentForm";
import { blogs } from "@/constants/blogs";
import { MarketingLayout } from "@/layout/MarketingLayout";
import { getStaticPropsCommon } from "@/lib/ssr/common";
import { useMarketing } from "@/providers/MarketingProvider";
import { MarketingContextType } from "@/providers/types";
import { Bike, BikeType, Blog, Brand } from "@/types";
import { convertTitleToLink } from "@/utils/helpers";
import type {
  GetStaticPaths,
  GetStaticProps
} from 'next';
import { NextSeo } from "next-seo";
import { useEffect } from 'react';


interface IBlogDetailPageProps {
  blog: Blog;
  bikes: Bike[];
  brands: Brand[];
  bikeTypes: BikeType[];
}

function BlogDetailPage({ blog, bikeTypes, bikes, brands }: IBlogDetailPageProps) {
  
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
    <NextSeo  {...blog.seo}/>
    <MarketingLayout>
      <BlogBanner bgImg={blog?.image?.src} />
      <BlogHeader
        category={blog?.category}
        title={blog?.title}
        date={blog?.updatedAt}
      />
      <BlogDetail contents={blog?.contents} />
      <BlogPagination />
      <CommentForm />
    </MarketingLayout>
    </>
  );
}

export default BlogDetailPage;


export const getStaticProps: GetStaticProps = async (context) => {

  try {
    const blogSlug = context.params?.blogTitle;
    const currentBlog = blogs.find(
      (blog) => convertTitleToLink(blog.title) === blogSlug
    );

    const staticPropsResponse = await getStaticPropsCommon(context) as unknown as {props: Omit<IBlogDetailPageProps, 'blog'>};

    if(!currentBlog) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        ...staticPropsResponse?.props as unknown as IBlogDetailPageProps,
        blog: currentBlog,
      },
      revalidate: 10
    }
  } catch {
    return {
      notFound: true
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogPaths = blogs.map(blog => ({params: { blogTitle: `/${convertTitleToLink(blog.title)}` }}));
  return {
    paths: [...blogPaths],
    fallback: 'blocking',
  }
}
