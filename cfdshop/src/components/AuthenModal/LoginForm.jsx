import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { MESSAGE, REGEX } from "../../config/validate";
import { useAuthContext } from "../../context/AuthContext";
import Input from "../Input";
import { handleLogin } from "../../slices/authSlice";
import ComponentLoading from "../ComponentLoading";
const LoginForm = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const _onSubmit = (data) => {
    if (data) {
      dispatch(handleLogin(data));
    }
  };

  return (
    <div
      style={{ position: "relative", zIndex: 1 }}
      className="tab-pane fade show active"
      id="signin"
    >
      {loading.login === true && <ComponentLoading />}
      <form autoComplete="off" onSubmit={handleSubmit(_onSubmit)} action="#">
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
