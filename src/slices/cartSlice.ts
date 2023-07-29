import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";
import { ProductType } from "../types/types";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart") as string)
  : { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {

      const item = action.payload;
      const existItem = state.cartItems.find((x:ProductType) => x._id === item._id);

      

      if (existItem) {
        state.cartItems = state.cartItems.map((x:ProductType) =>
          x._id === existItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      return updateCart(state, item);
    },
    removeFromCart : (state,action)=>{
      const item = action.payload;
      state.cartItems = state.cartItems.filter((x:ProductType) => x._id !== action.payload._id);
      return updateCart(state,item)
      
    
    }
  },
}); 
export const { addToCart,removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
