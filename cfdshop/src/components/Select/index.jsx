/* eslint-disable react/prop-types */

const Select = ({
  options = [],
  defaultValue,
  value,
  className,
  label,
  onChange,
}) => {
  return (
    <div className="toolbox-sort">
      <label htmlFor="sortby">{label}</label>
      <div className="select-custom">
        <select
          onChange={onChange}
          defaultValue={defaultValue}
          value={value}
          name="sortby"
          id="sortby"
          className="form-control"
        >
          {options.length > 0 &&
            options.map((option) => {
              return (
                <option key={option.value} value={option.value} selected>
                  {option.label}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
};

export default Select;
