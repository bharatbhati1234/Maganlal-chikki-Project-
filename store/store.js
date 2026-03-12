import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cart.slice";
import toastReducer from "./slice/toast.slice";
import wishlistReducer from "./slice/wishlist.slice";
import searchReducer from "./slice/search.slice";




export const store = configureStore({
  reducer: {
    cart: cartReducer,
    toast: toastReducer,
    wishlist: wishlistReducer,
    search: searchReducer

  },
});