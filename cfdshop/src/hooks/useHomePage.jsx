import React from "react";
import { productService } from "../services/productService";
import useQuery from "./useQuery";

const useHomePage = () => {
  const { data: productsData } = useQuery(productService.getProducts);
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
  return {
    /* These are the properties that are being returned by the `useHomePage` hook. Each property
  represents a set of data or functions that can be used in the home page component. */
    introProps,
    hotProductProps,
    // dealProps,
    // brandProps,
    // featuredProps,
    // serviceProps,
    // getDealProps,
  };
};

export default useHomePage;
