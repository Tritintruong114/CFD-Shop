/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { authService } from "../services/authServices";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

import { ERROR, tokenMethod } from "../ultils";
import { MODAL_TYPE } from "../config";
import { PATHS } from "../config/path";

const AuthContext = createContext({});

const AuthcontextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState("");
  const [profile, setProfile] = useState({});
  const [isShowModal, setIsShowModal] = useState(false);

  const navigate = useNavigate();
  //Show modal
  const handleShowModal = (modalType) => {
    setIsShowModal(true);
    setShowModal(modalType || "");
    window.document.body.classList.add("modal-open");
  };

  const handleCloseModal = (e) => {
    e?.stopPropagation();
    e?.preventDefault();
    setShowModal("");
    setIsShowModal(false);
    window.document.body.classList.remove("modal-open");
  };

  //UseEffectDa
  useEffect(() => {
    const accessToken = !!tokenMethod.get()?.accessToken;
    if (accessToken) {
      console.log("Test");
    }
  }, []);

  //Login API
  const handleLogin = async (loginData, callback) => {
    const payload = { ...loginData };

    try {
      const res = await authService.login(payload);
      if (res?.data?.data) {
        const { token: accessToken, refreshToken } = res.data.data || {};
        //Save token

        //Close modal & success nofication
        message.success("Đăng nhập thành công");
        navigate(PATHS.HOME);
        handleCloseModal();
        tokenMethod.set({ accessToken, refreshToken });
        handleGetProfile();
      } else {
        message.error("Đăng nhập thất bại");
      }
    } catch (error) {
      let errorStatus = error.response.status;
      let errorMessage = error.response.data.message;
      if (errorStatus === 404) {
        message.error(errorMessage);
      }
    }
  };

  //Handle Register Account

  const handleRegister = async (registerData, callback) => {
    const { email, password } = registerData;

    const payload = {
      firstName: email,
      lastName: "",
      email,
      password,
    };

    try {
      const res = await authService.register(payload);
      if (res?.data?.data?.id) {
        handleLogin({
          email,
          password,
        });

        message.success("Đăng kí thành công");
        navigate(PATHS.HOME);
      } else {
        message.error("Đăng kí thất bại");
      }
    } catch (error) {
      const status = error.response.data.statusCode;
      console.log(status);

      if (status === ERROR.FORBIDDEN) {
        message.error("Địa chỉ email đã được sử dụng", { zIndexPopup: 1060 });
        handleShowModal(MODAL_TYPE.register);
      }
      if (status === ERROR.PASSWORDSHORT) {
        message.error("Mật khẩu phải đủ 6 kí tự", { zIndexPopup: 1060 });
        handleShowModal(MODAL_TYPE.register);
      }
    }
  };
  //handle Logout
  const handleLogout = () => {
    tokenMethod.remove();
    navigate(PATHS.HOME);
    message.success("Tài khoản đã đăng xuất");
  };

  const handleGetProfile = async () => {
    try {
      const res = await authService.getProfile();

      if (res?.data.data) {
        setProfile(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const handleGetProfileCourses = async () => {
  //   try {
  //     const res = await orderService.getCourseHistories();

  //     const paymentData = res?.data?.data?.orders || [];

  //     setPaymentInfo(paymentData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleGetProfilePayment = async () => {
  //   try {
  //     const res = await orderService.getPaymentHistories();

  //     const ordersCoures = res?.data?.data?.orders || [];
  //     setCourseInfo(ordersCoures);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleUpdateProfile = async (updateData) => {
  //   const { firstName, email, phone, facebookUrl, website, introduce } =
  //     updateData;
  //   const payload = {
  //     firstName,
  //     lastName: "",
  //     email,
  //     facebookUrl,
  //     website,
  //     introduce,
  //     phone,
  //   };

  //   const res = await authService.updateProfile(payload);
  //   console.log(res);
  // };
  //Provider

  const handleUpdataProfile = (updateDate, callback) => {
    const { name, phone, email, address } = updateDate;

    const payload = {
      // Required
      firstName: name,
      lastName: "",
      phone,

      // No Required
      facebookUrl: "",
      website: "",
      introduce: "",
      birthday: "",
      street: "",
      province: "",
      district: "",
      ward: "",
      password: "",
      newPassword: "",
      image: "",
    };

    try {
      const res = authService.updateProfile(payload);
      if (res?.data?.data) {
        message.success("Cập nhật thành công");
        handleGetProfile();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        showModal,
        handleShowModal,
        handleCloseModal,
        handleLogin,
        handleRegister,
        handleGetProfile,
        handleLogout,
        handleUpdataProfile,
        profile,
        isShowModal,
        setIsShowModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthcontextProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(AuthContext);
