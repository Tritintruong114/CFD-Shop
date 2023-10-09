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
    return axiosInstance.get(`/customer/profiles`);
  },
  getDataProvince() {
    return axiosInstance.get(`/provinces`);
  },
  getDataDistrict(id) {
    return axiosInstance.get(`/districts?province=${id}`);
  },
  getDataWard(id) {
    return axiosInstance.get(`/wards?district=${id}`);
  },

  updateProfile(payload = {}) {
    return axiosInstance.put(`/customer/profiles`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  getOrderMe() {
    return axiosInstance.get(`/orders/me`);
  },
  review(payload = {}) {
    return axiosInstance.get(`/reviews`, payload);
  },
};
