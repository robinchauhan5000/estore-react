import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  snackbarOpen: false,
  snackbarType: "success",
  snackbarMessage: "",
};

export const SnackBarSlice = createSlice({
  name: "SnackBarSlice",
  initialState: initialState,
  reducers: {
    SetSnackBar(state, action) {
        state.snackbarType = action.payload.snackbarType;
        state.snackbarMessage = action.payload.snackbarMessage;
        state.snackbarOpen = action.payload.snackbarOpen;
    },
    removeSnackBar(state) {
        state.snackbarType = '';
        state.snackbarMessage = '';
        state.snackbarOpen = false;
    },
  },
});

export default SnackBarSlice.reducer;

export const { SetSnackBar, removeSnackBar } = SnackBarSlice.actions;
