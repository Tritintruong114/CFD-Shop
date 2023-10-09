import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useForm } from "react-hook-form";
import { MESSAGE, REGEX } from "../../config/validate";
import Input from "../Input";

const RegisterForm = () => {
  const { handleRegister } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const _onSubmit = (data) => {
    if (data) {
      setLoading(true);
      handleRegister?.(data, () => {
        setTimeout(() => {
          setLoading(false);
        }, 300);
      });
    }
  };

  return (
    <div
      className="tab-pane fade"
      id="register"
      role="tabpanel"
      aria-labelledby="register-tab"
    >
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
      {/* <div className="form-choice">
                        <p className="text-center">or sign in with</p>
                        <div className="row">
                          <div className="col-sm-6">
                            <a href="#" className="btn btn-login btn-g">
                              <i className="icon-google" />
                              Login With Google
                            </a>
                          </div>
                          <div className="col-sm-6">
                            <a href="#" className="btn btn-login  btn-f">
                              <i className="icon-facebook-f" />
                              Login With Facebook
                            </a>
                          </div>
                        </div>
                      </div> */}
    </div>
  );
};

export default RegisterForm;
