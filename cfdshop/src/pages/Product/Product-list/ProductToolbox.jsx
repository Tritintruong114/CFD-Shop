import React from "react";

const ProductToolbox = () => {
  return (
    <div className="toolbox">
      <div className="toolbox-left">
        <div className="toolbox-info">
          {" "}
          Showing <span>9 of 56</span> Products{" "}
        </div>
      </div>
      <div className="toolbox-right">
        <div className="toolbox-sort">
          <label htmlFor="sortby">Sort by:</label>
          <div className="select-custom">
            <select name="sortby" id="sortby" className="form-control">
              <option value="popularity" selected>
                Most Popular
              </option>
              <option value="pricelow">Price Low to High</option>
              <option value="pricehight">Price Hight to Low </option>
              <option value="newest">Newest</option>
              <option value="rating">Most Rated</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductToolbox;
