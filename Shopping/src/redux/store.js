import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Slice/ProductSlice";
import CartSlice from './Slice/CartSlice'

export const store = configureStore({
  //will be adding reducers as key in that add number of students
  reducer: {
    products: ProductReducer,
    cart: CartSlice
  },
});

export default store;
