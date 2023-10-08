import { Input } from "antd";
import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useForm } from "react-hook-form";

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
      <form action="#">
        <Input label="Email" name="email" required {...register("email")} />
        <Input
          label="Password"
          name="password"
          required
          {...register("password")}
        />

        <div className="form-footer">
          <button
            type="submit"
            className="btn btn-outline-primary-2"
            onClick={_onSubmit}
          >
            <span>SIGN UP</span>
            <i className="icon-long-arrow-right" />
          </button>
          <div className="custom-control custom-checkbox">
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
          </div>
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
