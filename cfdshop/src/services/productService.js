import axiosInstance from "../ultils/axiosInstance";

export const productService = {
  getProducts(queryString = "") {
    return axiosInstance.get(`/products${queryString}`);
  },
  getProductBySlug(slug = "") {
    return axiosInstance.get(`/products/${slug}`);
  },
  getCategories() {
    return axiosInstance.get("/product-categories");
  },
  getCategoryBySlug(slug = "") {
    return axiosInstance.get(`/product-categories/${slug}`);
  },
  getProductReview(id = "", query = "") {
    return axiosInstance.get(`/reviews/product/${id}${query}`);
  },
};
