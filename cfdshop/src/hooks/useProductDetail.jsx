/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useRef } from "react";
import useQuery from "./useQuery";
import { productService } from "../services/productService";
import { useParams } from "react-router-dom";
import { message } from "antd";
import { handleAddCart } from "../store/reducers/cartReducer";
import { useDispatch } from "react-redux";

const useProducDetailPage = () => {
  const { slug } = useParams();
  const colorRef = useRef();
  const quantityRef = useRef();
  const dispatch = useDispatch();

  const { data: productDetailData } = useQuery(
    () => productService.getProductBySlug(slug),
    [slug]
  );

  const { id, name, description, shippingReturn, price, discount } =
    productDetailData || {};

  const { data: productDetailPreview } = useQuery(
    () => id && productService.getProductReview(id),
    [id]
  );

  const handleAddToCart = async () => {
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
    const addPayload = {
      addId: id,
      addColor: color,
      addQuanity: quantity,
      addPrice: price - discount,
    };

    try {
      const res = dispatch(handleAddCart(addPayload)).unwrap();
      if (res) {
        colorReset?.();
        quantityReset?.();
      }
    } catch (error) {
      console.log("error", error);
    }
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
    description,
    shippingReturn,
    reviews: productDetailPreview,
  };

  return {
    productName: name,
    productDetailTopProps,
    productDetailTabProps,
  };
};

export default useProducDetailPage;
