/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { PATHS } from "../../../config/path";
import ProductImages from "../../../components/ProductImg";
import { formatCurrency } from "../../../ultils/formatCurrency";
import { transformNumberToPercent } from "../../../ultils/tranferNumberToPercent";
import ProductColor from "./ProductColor";
import ProductQuanity from "./ProductQuanity";
import { Link } from "react-router-dom";
import ShareLink from "../../../components/SharedLink";

const ProductDetailTop = ({
  images,
  name,
  rating,
  reviews,
  price,
  description,
  color,
  category,
  stock,
  colorRef,
  quantityRef,
  handleAddToCart,
  handleAddToWishlist,
}) => {
  const pathUrl = window.location.href;
  const categoryPath =
    category?.id && PATHS.PRODUCTS + `?category=${category?.id}`;
  const _onAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleAddToCart?.();
  };

  const _onAddToWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleAddToWishlist?.();
  };
  return (
    <div className="product-details-top">
      <div className="row">
        <div className="col-md-6">
          <ProductImages images={images} />
        </div>
        <div className="col-md-6">
          <div className="product-details">
            <h1 className="product-title">{name}</h1>
            <div className="ratings-container">
              <div className="ratings">
                <div
                  className="ratings-val"
                  style={{ width: `${transformNumberToPercent(rating)}%` }}
                />
              </div>
              <a
                className="ratings-text"
                href="#product-review-link"
                id="review-link"
              >
                ( {reviews?.length} Reviews )
              </a>
            </div>
            <div className="product-price"> ${formatCurrency(price)} </div>
            <div
              className="product-content"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <div className="details-filter-row details-row-size">
              <label>Color:</label>
              <ProductColor ref={colorRef} colors={color} />
            </div>
            <div className="details-filter-row details-row-size">
              <label htmlFor="qty">Qty:</label>
              <ProductQuanity max={stock} ref={quantityRef} />
            </div>
            <div className="product-details-action">
              <a onClick={_onAddToCart} className="btn-product btn-cart">
                <span>add to cart</span>
              </a>
              <div className="details-action-wrapper">
                <a
                  onClick={_onAddToWishlist}
                  className="btn-product btn-wishlist"
                  title="Wishlist"
                >
                  <span>Add to Wishlist</span>
                </a>
              </div>
            </div>
            <div className="product-details-footer">
              <div className="product-cat">
                <span>Category:</span>
                <Link to={categoryPath}>{category?.name}</Link>
              </div>
              <div className="social-icons social-icons-sm">
                <span className="social-label">Share:</span>
                <ShareLink title={"Facebook"} path={pathUrl}>
                  <i className="icon-facebook-f" />
                </ShareLink>
                <ShareLink type="twitter" title={"Twitter"} path={pathUrl}>
                  <i className="icon-twitter" />
                </ShareLink>
                <ShareLink type="instagram" title={"Instagram"} path={pathUrl}>
                  <i className="icon-instagram" />
                </ShareLink>
                <ShareLink type="pinterest" title={"Pinterest"} path={pathUrl}>
                  <i className="icon-pinterest" />
                </ShareLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailTop;
