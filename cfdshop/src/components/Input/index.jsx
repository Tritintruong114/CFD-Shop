/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Input = ({
  label,
  required,
  error,
  renderInput = undefined,
  ...rest
}) => {
  return (
    <div className="form-group">
      <label className="label">
        {label} {required && <span>*</span>}
      </label>
      {renderInput?.({ ...rest, error }) || (
        <input
          type="text"
          {...rest}
          defaultValue
          className={`form__input ${error ? "formerror" : ""}`}
        />
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Input;
