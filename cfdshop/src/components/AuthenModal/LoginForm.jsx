import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useForm } from "react-hook-form";
import Input from "../Input";
import { MESSAGE, REGEX } from "../../config/validate";
const LoginForm = () => {
  const { handleLogin } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const _onSubmit = (data) => {
    if (data) {
      setLoading(true);
      handleLogin?.(data, () => {
        setTimeout(() => {
          setLoading(false);
        }, 300);
      });
    }
  };

  return (
    <div className="tab-pane fade show active" id="signin">
      <form onSubmit={handleSubmit(_onSubmit)} action="#">
        <Input
          label="Username or Emaill Address"
          required
          name="email"
          {...register("email", {
            required: MESSAGE.required,
            pattern: {
              value: REGEX.email,
              message: MESSAGE.email,
            },
          })}
          error={errors?.email?.message || ""}
        />
        <Input
          label="Password"
          required
          type="password"
          name="password"
          {...register("password", {
            required: MESSAGE.required,
          })}
          error={errors?.password?.message || ""}
        />

        <div className="form-footer">
          <button type="submit" className="btn btn-outline-primary-2">
            <span>LOG IN</span>
            <i className="icon-long-arrow-right" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
