import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurant: null,
};

const restaurantSlice = createSlice({
  name: "Restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (store) => store.restaurant.restaurant;

export default restaurantSlice.reducer;
