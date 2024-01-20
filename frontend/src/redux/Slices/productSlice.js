import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  products: [],
  error: "",
  response: "",
  editProduct: null,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const request = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/product`
    );
    const response = await request.json();
    return response;
  }
);

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (data) => {
    const request = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/product`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productName: data.name,
          productPrice: data.price,
          productCategory: data.category,
          productSupplier: data.supplier,
        }),
      }
    );

    const response = await request.json();
    return response;
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (data) => {
    const request = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/product/${data.productId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const response = await request.json();
    return response;
  }
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (data) => {
    const request = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/product/${data.productId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productName: data.name,
          productPrice: data.price,
          productCategory: data.category,
          productSupplier: data.supplier,
        }),
      }
    );

    const response = await request.json();
    return response;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setEditProduct: (state, action) => {
      state.editProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.hasError) {
          state.error = action.payload.message;
        } else {
          state.response = action.payload.message;
          state.products.push(action.payload.product);
        }
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });

    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.response = action.payload.message;
      if (action.payload.hasError) return;
      state.products = state.products.filter(
        (product) => product.productId !== action.payload.product.productId
      );
    });

    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.response = action.payload.message;
      console.log(action.payload.product);
      if (action.payload.hasError) return;
      state.products = state.products.map((product) => {
        if (product.productId === action.payload.product.productId) {
          return action.payload.product;
        }
        return product;
      });
    });
  },
});

export default productSlice.reducer;
export const { setEditProduct } = productSlice.actions;
