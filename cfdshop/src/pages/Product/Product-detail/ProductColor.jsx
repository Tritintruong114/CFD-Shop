/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { forwardRef, useImperativeHandle, useState } from "react";

const ProductColor = ({ colors, defaultColor, onChange }, ref) => {
  const [selectColor, setSelectColor] = useState(defaultColor);

  useImperativeHandle(ref, () => {
    return {
      value: selectColor,
      reset: () => setSelectColor(defaultColor),
    };
  });

  const _onColorChange = (e, color) => {
    e.stopPropagation();
    setSelectColor(color);
    onChange?.(color);
  };
  return (
    <div className="product-nav product-nav-dots">
      {colors?.map((color, index) => {
        return (
          <div
            key={index}
            onClick={(e) => _onColorChange(e, color)}
            className={`product-nav-item  ${
              selectColor === color ? "active" : ""
            }`}
            style={{ background: `${color}` }}
          >
            <span className="sr-only">{color}</span>
          </div>
        );
      })}
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default forwardRef(ProductColor);
