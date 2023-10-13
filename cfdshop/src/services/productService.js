import axiosInstance from "../ultils/axiosInstance";
export const productService = {
  getProducts() {
    return axiosInstance.get("/products");
  },
  getProductBySlug(slug) {
    return axiosInstance.get(`/products/${slug}`);
  },
  getCategories() {
    return axiosInstance.get("/products-categories");
  },
  getCategoryBySlug(slug) {
    return axiosInstance.get(`/products-categories/${slug}`);
  },
};
