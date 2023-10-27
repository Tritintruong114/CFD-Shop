/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cartServices } from "../../services/cartService";
import { message } from "antd";

const initialState = {
  cartInfo: {},
  cartLoading: false,
};
export const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    updateCacheCart: (state, action) => {
      state.cartInfo = action.payload || state.cartInfo;
    },
    clearCart: (state) => {
      state.cartInfo = {};
    },
  },

  extraReducers: (builder) => {
    //Get cart
    builder
      .addCase(handleGetCart.pending, (state) => {
        state.cartLoading = true;
      })
      .addCase(handleGetCart.fulfilled, (state, action) => {
        state.cartInfo = action.payload;
        state.cartLoading = false;
      })
      .addCase(handleGetCart.rejected, (state) => {
        state.cartLoading = true;
        state.cartInfo = {};
      })
      .addCase(handleAddCart.pending, (state) => {
        state.cartLoading = true;
      })
      .addCase(handleAddCart.fulfilled, (state) => {
        state.cartLoading = false;
      })
      .addCase(handleAddCart.rejected, (state) => {
        state.cartLoading = true;
      });
  },
});
const { actions, reducers: cartReducer } = cartSlice;

export const { updateCacheCart, clearCart } = actions;

export default cartReducer;
const handleGetCart = createAsyncThunk("cart/get", async (_, thunkApi) => {
  try {
    const cartRes = await cartServices.getCart();
    return cartRes?.data.data;
  } catch (error) {
    thunkApi.rejectWithValue(error);
  }
});

const handleAddCart = createAsyncThunk(
  "cart/add",
  async (actionPayload, thunkApi) => {
    try {
      const { addId, addColor, addQuanity, addPrice } = actionPayload;

      const { cartInfo } = thunkApi.getState()?.cart || {};
      let addPayload = {};

      // Nen them dau cham hoi de check case undefined khong bi loi
      if (cartInfo?.id) {
        const matchIndex = cartInfo?.product?.findIndex(
          (product) => product.id === addId
        );
        const newProduct = cartInfo?.product?.map((product) => {
          return product.id;
        });
      } else {
        addPayload = {
          product: [addId],
          variant: [addColor],
          quantity: [addQuanity],
          totalProduct: [addPrice * addQuanity],
          subTotal: addPrice * addQuanity,
          total: addPrice * addQuanity,
          discount: 0,
          paymentMethod: "",
        };
      }

      const cartRes = await cartServices.updateCart(addPayload);

      thunkApi.dispatch(handleGetCart());
      message.success("Add to cart success");
      return cartRes?.data.data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
      message.error("Add to cart fail");
    }
  }
);

export { handleAddCart, handleGetCart };
