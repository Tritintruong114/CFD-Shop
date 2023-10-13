import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useForm } from "react-hook-form";
import Input from "../Input";
import { MESSAGE, REGEX } from "../../config/validate";
import { login, setUser } from "../../store/reducers/authReducer";
import { useDispatch } from "react-redux";
const LoginForm = () => {
  const { handleCloseModal } = useAuthContext();

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const _onSubmit = (data) => {
    if (data) {
      setLoading(true);
      dispatch(login(data));

      setTimeout(() => {
        handleCloseModal();
      }, 300);
    }
  };

  return (
    <div className="tab-pane fade show active" id="signin">
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
