import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./Slices/categorySlice";
import supplierReducer from "./Slices/supplierSlice";

export const Store = configureStore({
  reducer: {
    category: categoryReducer,
    supplier: supplierReducer,
  },
});
