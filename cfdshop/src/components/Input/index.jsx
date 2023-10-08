/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { forwardRef } from "react";

const Input = (
  { label, required, error, name, renderInput = undefined, ...rest },
  ref
) => {
  return (
    <div className="form-group">
      <label htmlFor={label} className={`register-${name}`}>
        {label} {required && <span>*</span>}
      </label>
      {renderInput?.({ ...rest, error }) || (
        <input
          name={name}
          id={name}
          ref={ref}
          type="text"
          {...rest}
          className={`form-control ${error ? "input-error" : ""}`}
        />
      )}
      {error && <p className="form-error">{error}</p>}
    </div>
  );
};

export default forwardRef(Input);
