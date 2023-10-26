/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useRef } from "react";
import useQuery from "./useQuery";
import { productService } from "../services/productService";
import { useParams } from "react-router-dom";
import { message } from "antd";

const useProducDetailPage = () => {
  const { slug } = useParams();
  const colorRef = useRef();
  const quantityRef = useRef();

  const { data: productDetailData } = useQuery(
    () => productService.getProductBySlug(slug),
    [slug]
  );

  const { id, name, describtion, shippingReturn } = productDetailData || {};

  const { data: productDetailPreview } = useQuery(
    () => id && productService.getProductReview(id),
    [id]
  );

  const handleAddToCart = () => {
    const { value: color, reset: colorReset } = colorRef.current || {};
    const { value: quantity, reset: quantityReset } = quantityRef.current || {};

    if (!color) {
      message.error("Please choose color");
      return;
    } else if (isNaN(quantity) && quantity < 1) {
      message.error("Quanity must be greater than 1");
      return;
    }
    //Call API add to card

    colorReset?.();
    quantityReset?.();
  };

  const handleAddToWhislist = () => {
    console.log("Add whislist");
  };

  const productDetailTopProps = {
    ...productDetailData,
    reviews: productDetailPreview,
    handleAddToWhislist,
    handleAddToCart,
    colorRef,
    quantityRef,
  };

  const productDetailTabProps = {
    describtion,
    shippingReturn,
    review: productDetailPreview,
  };

  return {
    productName: name,
    productDetailTopProps,
    productDetailTabProps,
  };
};

export default useProducDetailPage;
