/* eslint-disable no-useless-escape */
export const REGEX = {
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  phone: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
};
export const MESSAGE = {
  required: "This field is required",
  email: "Email is not valid",
  phone: "Phone is not valid",
};
