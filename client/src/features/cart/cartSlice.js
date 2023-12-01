import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  tableNumber: 1,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter(({ id }) => id !== action.payload);
    },
    increaseQuantity(state, action) {
      const item = state.cart.find(({ id }) => id === action.payload);
      item.quantity++;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find(({ id }) => id === action.payload);
      item.quantity--;
      item.totalPrice = item.unitPrice * item.quantity;
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
    setTableNumber(state, action) {
      state.tableNumber = action.payload;
    },
    resetTableNumber(state) {
      state.tableNumber = 0;
    },
  },
});

export const {
  addItem,
  clearCart,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  setTableNumber,
  resetTableNumber,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((acc, cur) => acc + cur.totalPrice, 0) || 0;

export const getTableNumber = (state) => state.cart.tableNumber;
