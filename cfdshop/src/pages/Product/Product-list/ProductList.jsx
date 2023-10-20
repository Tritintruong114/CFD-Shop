/* eslint-disable react/prop-types */
import React from "react";
import ProductCard from "../../../components/ProductCard";

const ProductList = ({ isLoading, isError, products }) => {
  if ((!isLoading && products?.lenght < 1) || isError) {
    return (
      <div className="products mb-3">
        <div className="row justify-content-center">There is no products</div>
      </div>
    );
  }
  return (
    <div className="products mb-3">
      <div className="row justify-content-center">
        {products?.map((product, index) => {
          return (
            <div key={product.id || index} className="col-6 col-md-4 col-lg-4">
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
