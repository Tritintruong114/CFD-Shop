const CheckBox = ({ id, label, className, onChange, ...props }) => {
  return (
    <div className="custom-control custom-checkbox">
      <input
        type="checkbox"
        className="custom-control-input"
        id={id || "checkbox"}
        onChange={onChange}
        {...props}
      />
      <label className="custom-control-label" htmlFor={id || "checkbox"}>
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
