/* eslint-disable react/prop-types */
import React from "react";
import { SORT_OPTIONS } from "../../../config/general";
import Select from "../../../components/Select";

const ProductToolbox = ({ showNumb, totalNumb, activeSort, onSortChange }) => {
  const onSelectChange = (e) => {
    onSortChange?.(e.target.value);
  };
  return (
    <div className="toolbox">
      <div className="toolbox-left">
        <div className="toolbox-info">
          {" "}
          Showing{" "}
          <span>
            {showNumb || 0} of {totalNumb || 0}
          </span>{" "}
          Products{" "}
        </div>
      </div>
      <div className="toolbox-right">
        <Select
          label="Sort by:"
          className="toolbox-sort"
          value={activeSort}
          defaultValue={SORT_OPTIONS.popularity.value}
          options={[
            SORT_OPTIONS.popularity,
            SORT_OPTIONS.pricelow,
            SORT_OPTIONS.pricehight,
            SORT_OPTIONS.newest,
            SORT_OPTIONS.rating,
          ]}
          onChange={onSelectChange}
        />
      </div>
    </div>
  );
};

export default ProductToolbox;
