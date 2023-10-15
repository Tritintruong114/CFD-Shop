import axiosInstance from "../ultils/axiosInstance";

export const pageService = {
  getPageData(query) {
    return axiosInstance.get(`/pages${query}`);
  },
  getPageDataByName(name, query = "") {
    return axiosInstance.get(`/pages/${name}${query}`);
  },
};
