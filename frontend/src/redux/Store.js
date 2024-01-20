import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./Slices/categorySlice";
import supplierReducer from "./Slices/supplierSlice";
import productReducer from "./Slices/productSlice";

export const Store = configureStore({
  reducer: {
    category: categoryReducer,
    supplier: supplierReducer,
    product: productReducer,
  },
});
