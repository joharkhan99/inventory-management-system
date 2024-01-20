import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  categories: [],
  error: "",
  response: "",
};

export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async () => {
    const request = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/category`
    );
    const response = await request.json();
    return response;
  }
);

export const addCategory = createAsyncThunk(
  "category/addCategory",
  async (data) => {
    const request = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/category`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ categoryName: data.categoryName }),
      }
    );

    const response = await request.json();
    return response;
  }
);

export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async (data) => {
    const request = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/category/${data.categoryId}`,
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

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    clearResponse: (state) => {
      state.response = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.categories.push(action.payload.category);
      state.response = action.payload.message;
    });
    builder.addCase(addCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.error = action.error.message;
      });

    builder
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.response = action.payload.message;
        state.categories = state.categories.filter(
          (category) =>
            category.categoryId !== action.payload.category.categoryId
        );
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;
export const { clearResponse } = categorySlice.actions;
