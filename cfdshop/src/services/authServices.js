// services/authService.js
import axiosInstance from "../ultils/axiosInstance";
import tokenMethod from "../ultils/token";

export const authService = {
  login(payload = {}) {
    return axiosInstance.post(`/customer/login`, payload);
  },
  register(payload = {}) {
    return axiosInstance.post(`/customer/register`, payload);
  },
  getProfile() {
    return axiosInstance.get(`/customer/profiles`, {
      headers: {
        Authorization: `Bearer ${tokenMethod.get()?.accessToken}`,
      },
    });
  },
  updateProfile(payload = {}) {
    return axiosInstance.put(`/customer/profiles`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
