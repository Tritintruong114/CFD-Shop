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
    window.document.body.classList.toggle("modal-open");
  };

  const handleCloseModal = (e) => {
    e?.stopPropagation();
    setShowModal("");
  };

  //UseEffect
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
        tokenMethod.set({ accessToken, refreshToken });

        //Get profile
      } else {
        message.error("Đăng nhập thất bại");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Handle Register Account
  const handleRegister = async (registerData, callback) => {
    const { name, email, password } = registerData;
    const payload = {
      firstName: name,
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
        navigate("/");
      } else {
        message.error("Đăng kí thất bại");
      }
    } catch (error) {
      // Promise.reject(error); //
      const status = error.response.statusText;

      if (status === ERROR.FORBIDDEN) {
        message.error("Địa chỉ email đã được sử dụng");
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
      handleLogout();
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

  return (
    <AuthContext.Provider
      value={{
        showModal,
        handleShowModal,
        handleCloseModal,
        handleLogin,
        handleRegister,
        handleLogout,
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
