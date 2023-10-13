import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex !== -1) {
        state.cart[itemIndex].quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex !== -1) {
        if (state.cart[itemIndex].quantity === 1) {
          state.cart.splice(itemIndex, 1);
        } else {
          state.cart[itemIndex].quantity--;
        }
      }
    },
    removeItem: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cart[itemIndex]) {
        state.cart.splice(itemIndex, 1);
      }
    },
    emptyCart: (state, action) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, emptyCart, removeItem } =
  cartSlice.actions;

export const selectCartItems = (store) => store.cart.cart;

export default cartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   cart: [],
// };

// const cartSlice = createSlice({
//   name: "Cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const itemInCart = state.cart.find(
//         (item) => item.id == action.payload.id
//       );
//       if (itemInCart) {
//         itemInCart.quantity++;
//       } else {
//         state.cart.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     removeFromCart: (state, action) => {
//       const removeFromCart = state.cart.filter(
//         (item) => item.id !== action.payload.id
//       );
//       const itemInCart = state.cart.find(
//         (item) => item.id == action.payload.id
//       );
//       if (removeFromCart.quantity == 1) {
//         state.cart = removeFromCart;
//       } else {
//         itemInCart.quantity--;
//       }
//     },
//     emptyCart: (state, action) => {
//       state.cart = [];
//     },
//   },
// });

// export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

// export default cartSlice.reducer;
