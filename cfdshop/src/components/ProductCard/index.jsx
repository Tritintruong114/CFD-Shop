import React from "react";
import { styled } from "styled-components";
import { Empty } from "antd";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../ultils/formatCurrency";
import { PATHS } from "../../config/path";

const ProductCard = ({ product }) => {
  const { id, slug, title, price, rating, images, discount } = product || {};
  const productPath = PATHS.PRODUCTS + `/${slug}`;

  const _onAddToCart = (e) => {
    e?.preventDefault();
    // Xử lý sau
  };
  const ImageWrapper = styled.div`
    width: 100%;
    height: 315px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #c1c1c1;
  `;

  return (
    <div className="product product-2">
      <figure className="product-media">
        {/* Cố định height hình ảnh để tránh tình trạng kích thước ảnh không đồng bo65 */}
        <Link to={productPath} style={{ height: 275 }}>
          {images?.length > 0 ? (
            <img
              src={images[0]}
              alt="Product image"
              className="product-image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <ImageWrapper>
              <Empty
                description=""
                // props này mặc định của Antd Empty, dùng để thay đổi ảnh của Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
              />
            </ImageWrapper>
          )}
        </Link>
        <div className="product-action-vertical">
          <a href="#" className="btn-product-icon btn-wishlist btn-expandable">
            <span>add to wishlist</span>
          </a>
        </div>
        <div className="product-action product-action-dark">
          <a
            role="button"
            className="btn-product btn-cart"
            title="Add to cart"
            onClick={_onAddToCart}
          >
            <span>add to cart</span>
          </a>
        </div>
      </figure>
      <div className="product-body">
        <h3 className="product-title">
          <Link to={productPath}>{title || ""}</Link>
        </h3>
        <div className="product-price">
          {discount ? (
            <>
              <span className="new-price">
                ${formatCurrency(price - discount)}
              </span>
              <span className="old-price">Was ${formatCurrency(price)}</span>{" "}
            </>
          ) : (
            <>${formatCurrency(price || 0)}</>
          )}
        </div>
        <div className="ratings-container">
          <div className="ratings">
            <div
              className="ratings-val"
              style={{
                width: `${(rating || 0) * 20}%`,
              }}
            />
          </div>
          <span className="ratings-text">( {rating} Reviews )</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
