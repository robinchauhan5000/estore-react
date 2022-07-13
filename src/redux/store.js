import { configureStore } from "@reduxjs/toolkit";
import FetchProductSlice from "./Slices/FetchProduct/FetchProductSlice";
import { signUpSliceReducer } from "./Slices/signUpSlice/signUpSlice";
import SnackBarSlice from "./Slices/SnackbarSlices/SnackbarSlice";

const rootStore = configureStore({
  reducer: {
    signUp: signUpSliceReducer,
    products: FetchProductSlice,
    snackbar: SnackBarSlice,
  },
});

export default rootStore;
