/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import useQuery from "./useQuery";
import { productService } from "../services/productService";

const PRODUCT_LIMIT = 9;
const useProductPage = () => {
  const { search } = useLocation();
  const query = queryString.parse(search);

  const [_, setSearchParams] = useSearchParams();

  //Get all products
  const {
    data: productsData,
    loading: productsLoading,
    error: productsError,
    refetch: refetchProducts,
  } = useQuery((query) =>
    productService.getProducts(query || `?limit=${PRODUCT_LIMIT}`)
  );

  const products = productsData?.products || [];
  const pagination = productsData?.pagination || {};

  //Get all categories
  const {
    data: categoriesData,
    loading: categoriesLoading,
    error: categoriesError,
    refetch: refetchCategories,
  } = useQuery(() => productService.getCategories);

  const categories = categoriesData?.products || [];

  //Useeffect
  useEffect(() => {
    refetchProducts?.(search);
  }, [search]);

  //Product list props
  const productListProps = {
    products,
    isLoading: productsLoading,
    isError: productsError,
  };
};
