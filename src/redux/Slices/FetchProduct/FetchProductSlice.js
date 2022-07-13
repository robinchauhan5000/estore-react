import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

const dataBase = collection(db, "products");

export const FetchProduct = createAsyncThunk("fetchedProduct", async () => {
  try {
    const products = await getDocs(dataBase).then((data) =>
      data.docs.map((product) => product.data())
    );

    return products;
  } catch (error) {
    return error;
  }
});

export const fetchSingleProduct = createAsyncThunk(
  "fetchSingleProduct",
  async (id) => {
    try {
      const searchQuery = query(dataBase, where("id", "==", id));

      const value = (await getDocs(searchQuery)).docs.map((product) =>
        product.data()
      );

      console.log('value for single product');
      console.log(value);
      return value;
    } catch (error) {
      console.log("error for single product");
      return error.message;
    }
  }
);

const initialState = {
  loading: false,
  products: [],
  queryProduct: [],
  error: "",
};

const FetchSlice = createSlice({
  name: "fetchSlice",
  initialState: initialState,
  reducers: {
    removingQueryProduct(state) {
      state.queryProduct = [];
    },
  },
  extraReducers: {
    [FetchProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [FetchProduct.fulfilled]: (state, action) => {
      if (action.payload.length !== 0) {
        state.loading = false;
        state.products = action.payload;
      }
    },
    [FetchProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [fetchSingleProduct.pending]: (state) => {
      state.loading = true;
    },
    [fetchSingleProduct.fulfilled]: (state, action) => {
      if (action.message) {
        state.loading = false;
        state.error = action.payload;
      } else {
        state.queryProduct = action.payload;
        state.loading = false;
      }
    },
    [fetchSingleProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {removingQueryProduct} = FetchSlice.actions;

export default FetchSlice.reducer;
