import { configureStore } from "@reduxjs/toolkit";
import RestaurantSlice from "./reducers/RestaurantSlice";
import CartSlice from "./reducers/CartSlice";
import AuthSlice from "./reducers/AuthSlice";

export const store = configureStore({
  reducer: {
    cart: CartSlice,
    restaurant: RestaurantSlice,
    auth: AuthSlice,
  },
});
