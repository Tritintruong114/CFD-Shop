import { STORAGE } from "./storage";
import Cookies from "js-cookie";

export const localToken = {
  get: () => JSON.parse(localStorage.getItem(STORAGE.token)),
  set: (token) => localStorage.setItem(STORAGE.token, JSON.stringify(token)),
  remove: () => localStorage.removeItem(STORAGE.token),
};

export const cookieToken = {
  get: () =>
    JSON.parse(
      Cookies.get(STORAGE.token) === undefined
        ? null
        : Cookies.get(STORAGE.token)
    ),
  set: (token) => Cookies.set(STORAGE.token, JSON.stringify(token)),
  remove: () => Cookies.remove(STORAGE.token),
};

const tokenMethod = {
  get: () => {
    // return cookieToken.get();
    return localToken.get();
  },
  set: (token) => {
    // return cookieToken.set(token);
    return localToken.set(token);
  },
  remove: () => {
    // return cookieToken.remove();
    return localToken.remove();
  },
};

export default tokenMethod;
