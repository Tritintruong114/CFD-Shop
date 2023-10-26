/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { styled } from "styled-components";
const InputNumberStyle = styled.input`
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    display: none;
    margin: 0;
  }

  -moz-appearance: textfield;
`;
const ProductQuanity = (
  {
    className,
    defaultValue,
    min = 1,
    max = 10,
    step = 1,
    onChange,
    ...inputProps
  },
  ref
) => {
  const [currentQuantity, setCurrentQuantity] = useState(defaultValue ?? 1);
  useImperativeHandle(ref, () => {
    return {
      value: currentQuantity,
      reset: () => setCurrentQuantity(1),
    };
  });

  const _onDecrease = () => {
    const value = _modifyValue(Number(currentQuantity) - Number(step));
    setCurrentQuantity(value);
  };
  const _onIncrease = () => {
    const value = _modifyValue(Number(currentQuantity) + Number(step));
    setCurrentQuantity(value);
  };
  const _onInputChange = (e) => {
    setCurrentQuantity(_modifyValue(Number(e.target.value)));
  };

  const _modifyValue = (value) => {
    if (value > max) {
      //neu input > max tra ve max
      return max;
    } else if (value < min) {
      //neu input > max tra ve min
      return min;
    } else {
      return value;
    }
  };

  useEffect(() => {
    onChange?.(currentQuantity);
  }, [currentQuantity]);

  return (
    <div className="product-details-quantity">
      <div className="input-group input-spinner">
        <div className="input-group-prepend">
          <button
            onClick={_onDecrease}
            className="btn btn-decrement btn-spinner"
          >
            <i className="icon-minus" />
          </button>
        </div>
        <InputNumberStyle
          type="number"
          className="form-control"
          style={{ textAlign: "center" }}
          value={currentQuantity}
          onChange={_onInputChange}
          max={max}
          {...inputProps}
        />
        <div className="input-group-append">
          <button
            onClick={_onIncrease}
            style={{ minWidth: 26 }}
            className="btn btn-increment btn-spinner"
            type="button"
          >
            <i className="icon-plus" />
          </button>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default forwardRef(ProductQuanity);
