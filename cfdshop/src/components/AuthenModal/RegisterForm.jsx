import React, { Component, useState } from "react";
import { useForm } from "react-hook-form";
import { MESSAGE, REGEX } from "../../config/validate";
import Input from "../Input";
import { useDispatch, useSelector } from "react-redux";
import { handleRegister } from "../../slices/authSlice";
import ComponentLoading from "../ComponentLoading";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const _onSubmit = (data) => {
    if (data) {
      dispatch(handleRegister(data));
    }
  };

  return (
    <div
      style={{ position: "relative", zIndex: 1 }}
      className="tab-pane fade show active"
      id="register"
    >
      {loading.register === true && <ComponentLoading />}
      <form onSubmit={handleSubmit(_onSubmit)} action="#">
        <Input
          label="Email Address"
          name="email"
          required
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
          name="password"
          type="password"
          required
          {...register("password", {
            required: MESSAGE.required,
          })}
          error={errors?.password?.message || ""}
        />

        <div className="form-footer">
          <button type="submit" className="btn btn-outline-primary-2">
            <span>SIGN UP</span>
            <i className="icon-long-arrow-right" />
          </button>
          {/* <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="register-policy"
              required
            />
            <label className="custom-control-label" htmlFor="register-policy">
              I agree to the
              <a href="privacy-policy.html">privacy policy</a> *
            </label>
          </div> */}
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
