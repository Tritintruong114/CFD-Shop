import validate from "../ultils/validate";
import { useState } from "react";

const useForm = (initialValue, rules) => {
  const [form, setForm] = useState(initialValue);
  const [error, setError] = useState({});

  const register = (registerField) => {
    return {
      name: registerField,
      error: error[registerField],
      value: form[registerField] || "",
      onChange: (e) => setForm({ ...form, [registerField]: e.target.value }),
    };
  };

  const _validate = () => {
    const errorObject = validate(rules, form);
    setError(errorObject);
    return errorObject;
  };

  return {
    form,
    error,
    register,
    validate: _validate,
    setForm,
  };
};

export default useForm;
