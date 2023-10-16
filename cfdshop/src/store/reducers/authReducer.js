/* eslint-disable no-useless-catch */
import { LOCAL_STORAGE } from "../../config/localStorage";
import { authService } from "../../services/authServices";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { tokenMethod } from "../../ultils";

const initialState = {
  profile: null,
};

export const login = createAsyncThunk(
  "auth/login",

  async (payload, thunkApi) => {
    try {
      const loginRes = await authService.login(payload);
      const { token: accessToken, refreshToken } = loginRes?.data?.data || {};

      tokenMethod.set({ accessToken, refreshToken });

      const profileRes = await authService.getProfile();

      thunkApi.dispatch(setUser(profileRes?.data?.data));

      return profileRes?.data?.data;
    } catch (error) {
      throw error;
    }
  }
);

// export const getProfile = createAsyncThunk(
//   "auth/getprofile",
//   async (payload, thunkApi) => {
//     try {
//       const res = authService.getProfile();
//       console.log("res", res);
//     } catch (error) {
//       throw error;
//     }
//   }
// );

export const { reducer: authReducer, actions: authActions } = createSlice({
  initialState,

  name: "auth",

  reducers: {
    logout: (state) => {
      localStorage.removeItem(LOCAL_STORAGE.token);
      localStorage.removeItem(LOCAL_STORAGE.refreshToken);
      state.profile = null;
    },
    setUser: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { logout, setUser } = authActions;
