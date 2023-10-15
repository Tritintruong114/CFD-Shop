import React, { useState } from "react";
import { productService } from "../services/productService";
import useQuery from "./useQuery";
import { pageService } from "../services/pageService";

const useHomePage = () => {
  const { data: productsData } = useQuery(productService.getProducts);
  const [selectedCateSlug, setSelectedCateSlug] = useState("all");
  const products = productsData?.products || [];

  // FeaturedProducts
  const featuredProducts =
    products?.filter((product) => product.featured) || [];

  // OnSaleProducts
  const onSaleProducts = products?.filter((product) => product.onSale) || [];

  // TopRatedProducts
  const topRatedProducts =
    products?.filter((product) => product.topRated) || [];

  // HotProductSection
  const hotProductProps = {
    featuredProducts,
    onSaleProducts,
    topRatedProducts,
  };

  // IntroProducts
  const introProducts = featuredProducts.slice(0, 3);
  const introProps = {
    introProducts,
  };
  // DealProducts
  const dealProducts = onSaleProducts.filter((product) => product.discount > 0);
  const dealProps = {
    dealProducts,
  };
  const { data: homeData } = useQuery(() =>
    pageService.getPageDataByName("home")
  );
  const brands = homeData?.data?.brands || [];
  const brandProps = {
    brands,
  };

  // FeaturedProducts
  const { data: categoriesData } = useQuery(productService.getCategories);
  const categories = categoriesData?.products || [];

  const featureProducts =
    selectedCateSlug === "all"
      ? [...(products || [])]
      : products?.filter(
          (product) => product?.category?.slug === selectedCateSlug
        );
  const featuredProps = {
    categories: [{ name: "All", slug: "all" }, ...categories],
    featureProducts,
    selectedCateSlug,
    handleSelectCate: (slug) => setSelectedCateSlug(slug),
  };
  return {
    /* These are the properties that are being returned by the `useHomePage` hook. Each property
  represents a set of data or functions that can be used in the home page component. */
    introProps,
    hotProductProps,
    dealProps,
    brandProps,
    featuredProps,
    // serviceProps,
    // getDealProps,
  };
};

export default useHomePage;
