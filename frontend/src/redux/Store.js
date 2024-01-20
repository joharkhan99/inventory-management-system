import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./Slices/categorySlice";

export const Store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});
