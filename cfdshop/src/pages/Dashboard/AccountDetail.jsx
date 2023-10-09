/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import { MESSAGE, REGEX } from "../../config/validate";
import { useAuthContext } from "../../context/AuthContext";
const AccountDetail = ({ email }) => {
  const { handleGetProfile, handleUpdataProfile } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const _onSubmit = (data) => {
    console.log(data);

    handleUpdataProfile(data);
  };

  useEffect(() => {
    handleGetProfile();
  }, []);

  return (
    <div
      className="tab-pane fade show active"
      id="tab-account"
      role="tabpanel"
      aria-labelledby="tab-account-link"
    >
      <form onSubmit={handleSubmit(_onSubmit)} className="account-form">
        <div className="row">
          <div className="col-sm-6">
            <Input
              label="Name"
              name="name"
              required
              {...register("name", {
                required: MESSAGE.required,
              })}
              error={errors?.name?.message || ""}
            />
          </div>
          <div className="col-sm-6">
            <Input
              label="Email Address"
              name="email"
              required
              value={email}
              defaultValue={email}
              {...register("email", {
                required: MESSAGE.required,
                pattern: {
                  value: REGEX.email,
                  message: MESSAGE.email,
                },
              })}
              error={errors?.email?.message || ""}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <Input
              label="Phone number"
              name="phone"
              required
              {...register("phone", {
                required: MESSAGE.required,
                pattern: {
                  value: REGEX.phone,
                  message: MESSAGE.email,
                },
              })}
              error={errors?.phone?.message || ""}
            />
          </div>
          {/* <div className="col-sm-6">
            <label>Ngày sinh *</label>
            <input type="date" className="form-control" required />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <label>Province/City *</label>
            <div className="select-custom">
              <select
                className="form-control form-select"
                id="city"
                aria-label="Default select example"
              >
                <option selected />
              </select>
            </div>
          </div>
          <div className="col-sm-4">
            <label>District/Town *</label>
            <div className="select-custom">
              <select className="form-control form-select" id="district">
                <option selected />
              </select>
            </div>
          </div>
          <div className="col-sm-4">
            <label>Ward *</label>
            <div className="select-custom">
              <select className="form-control form-select" id="ward">
                <option selected />
              </select>
            </div>
          </div> */}
        </div>
        <Input
          required
          label="Address "
          name="street"
          {...register("street", {
            required: MESSAGE.required,
          })}
          error={errors?.street?.message || ""}
        />
        <Input
          label="Current Password"
          type="password"
          defaultValue="123123123"
        />
        <Input label="New Password" type="password" />
        <Input label="Confirm Password" type="password" />

        <button type="submit" className="btn btn-outline-primary-2">
          <span>SAVE CHANGES</span>
          <i className="icon-long-arrow-right" />
        </button>
      </form>
    </div>
  );
};

export default AccountDetail;
