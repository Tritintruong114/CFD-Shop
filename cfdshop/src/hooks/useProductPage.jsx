/* eslint-disable no-unused-vars */
import { useEffect, useMemo, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import useQuery from "./useQuery";
import { productService } from "../services/productService";
import queryString from "query-string";
import { SORT_OPTIONS } from "../config/general";
import useMutation from "./useMutation";

const PRODUCT_LIMIT = 9;

const useProductPage = () => {
  const { search } = useLocation();
  const queryObject = queryString.parse(search);
  console.log("queryObject", queryObject);

  const [_, setSearchParams] = useSearchParams();

  //Get all products
  // const {
  //   data: productsData,
  //   loading: productsLoading,
  //   error: productsError,
  //   refetch: refetchProducts,
  // } = useQuery((query) =>
  //   productService.getProducts(query || `?limit=${PRODUCT_LIMIT}`)
  // );
  const {
    data: productsData,
    loading: productsLoading,
    error: productsError,
    execute: fetchProducts,
  } = useMutation((query) =>
    productService.getProducts(query || `?limit=${PRODUCT_LIMIT}`)
  );

  const products = productsData?.products || [];
  const pagination = productsData?.pagination || {};

  const productListProps = {
    products,
    isLoading: productsLoading,
    isError: productsError,
  };

  //Get all categories
  const {
    data: categoriesData,
    loading: categoriesLoading,
    error: categoriesError,
    refetch: refetchCategories,
  } = useQuery(productService.getCategories);
  const categories = categoriesData?.products || [];
  //Useeffect
  useEffect(() => {
    fetchProducts(search, {});
  }, [search]);

  //Pagination props
  const onPagichange = (page) => {
    updateQueryString({ ...queryObject, page: page });
  };
  const updateQueryString = (queryObject) => {
    const newQueryObject = queryString.stringify({
      ...queryObject,
      limit: PRODUCT_LIMIT,
    });

    setSearchParams(new URLSearchParams(newQueryObject));
  };

  const activeSort = useMemo(() => {
    return (
      Object.values(SORT_OPTIONS).find(
        (option) =>
          option.queryObject.orderBy === queryObject.orderBy &&
          option.queryObject.order === queryObject.order
      )?.value || SORT_OPTIONS.popularity.value
    );
  }, [queryObject]);

  const onSortChange = (sortType) => {
    // console.log("sortType", sortType);
    const sortQueryObject = SORT_OPTIONS[sortType].queryObject;
    // console.log(sortQueryObject);

    if (sortQueryObject) {
      updateQueryString({ ...queryObject, ...sortQueryObject, page: 1 });
    }
  };

  //Update query String

  // const onCateFilterChange = (cateId, isChecked) => {
  //   updateQueryString({ ...queryObject, page: 1, category: cateId });
  // };
  const onCateFilterchange = (cateId, isChecked) => {
    let newCategory = Array.isArray(queryObject.category)
      ? [...queryObject.category, cateId]
      : [queryObject.category, cateId];
    if (!isChecked) {
      newCategory = newCategory.filter((item) => item !== cateId);
    }
    if (!cateId) {
      newCategory = [];
    }

    updateQueryString({ ...queryObject, page: 1, category: newCategory });
  };
  const handePriceFilterChange = (values) => {
    if (values.length === 2) {
      updateQueryString({
        ...queryObject,
        minPrice: values[0],
        maxPrice: values[1],
        page: 1,
      });
    }
  };
  const toolboxProps = {
    showNumb: products.length || 0,
    totalNumb: pagination.total || 0,
    activeSort,
    onSortChange,
  };

  const filterProps = {
    categories: categories || [],
    isLoading: categoriesLoading,
    isError: categoriesError,
    activeCategory: Array.isArray(queryObject.category)
      ? queryObject.category
      : [queryObject.category],
    currentPriceRange: [
      queryObject.minPrice || 0,
      queryObject.maxPrice || 1000,
    ],
    onCateFilterchange,
    handePriceFilterChange,
  };

  const pagiProps = {
    page: Number(pagination.page || queryObject.page || 1),
    limit: Number(pagination.limit || 0),
    total: Number(pagination.total || 0),
    onPagichange,
  };

  return {
    pagiProps,
    productListProps,
    toolboxProps,
    filterProps,
  };
};

export default useProductPage;
