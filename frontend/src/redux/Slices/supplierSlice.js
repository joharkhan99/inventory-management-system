import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  suppliers: [],
  error: "",
  response: "",
  editSupplier: null,
};

export const fetchSuppliers = createAsyncThunk(
  "supplier/fetchSuppliers",
  async () => {
    const request = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/supplier`
    );
    const response = await request.json();
    return response;
  }
);

export const addSupplier = createAsyncThunk(
  "supplier/addSupplier",
  async (data) => {
    const request = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/supplier`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          supplierName: data.supplierName,
          supplierAddress: data.supplierAddress,
        }),
      }
    );

    const response = await request.json();
    return response;
  }
);

export const deleteSupplier = createAsyncThunk(
  "supplier/deleteSupplier",
  async (data) => {
    const request = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/supplier/${data.supplierId}`,
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

export const updateSupplier = createAsyncThunk(
  "supplier/updateSupplier",
  async (data) => {
    const request = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/supplier/${data.supplierId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          supplierName: data.supplierName,
          supplierAddress: data.supplierAddress,
        }),
      }
    );

    const response = await request.json();
    return response;
  }
);

const supplierSlice = createSlice({
  name: "supplier",
  initialState,
  reducers: {
    setEditSupplier: (state, action) => {
      state.editSupplier = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addSupplier.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addSupplier.fulfilled, (state, action) => {
        state.loading = false;
        state.suppliers.push(action.payload.supplier);
        state.response = action.payload.message;
      })
      .addCase(addSupplier.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });

    builder
      .addCase(fetchSuppliers.fulfilled, (state, action) => {
        state.suppliers = action.payload;
      })
      .addCase(fetchSuppliers.rejected, (state, action) => {
        state.error = action.error.message;
      });

    builder
      .addCase(deleteSupplier.fulfilled, (state, action) => {
        state.response = action.payload.message;
        if (action.payload.hasError) return;
        state.suppliers = state.suppliers.filter(
          (supplier) =>
            supplier.supplierId !== action.payload.supplier.supplierId
        );
      })
      .addCase(deleteSupplier.rejected, (state, action) => {
        state.error = action.error.message;
      });

    builder
      .addCase(updateSupplier.fulfilled, (state, action) => {
        state.response = action.payload.message;
        if (action.payload.hasError) return;
        const index = state.suppliers.findIndex(
          (supplier) =>
            supplier.supplierId === action.payload.supplier.supplierId
        );
        state.suppliers[index] = action.payload.supplier;
      })
      .addCase(updateSupplier.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default supplierSlice.reducer;
export const { setEditSupplier } = supplierSlice.actions;
