import { Alert, Slide, Snackbar } from "@mui/material";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetError } from "../redux/Slices/signUpSlice/signUpSlice";
import {
  SetSnackBar,
  removeSnackBar,
} from "../redux/Slices/SnackbarSlices/SnackbarSlice";

export const CustomSnackbar = (props) => {
  const { snackbarMessage, snackbarOpen, snackbarType } = useSelector(
    (state) => state.snackbar
  );
  const dispatch = useDispatch();

  const onCloseHandle = () => {
    dispatch(
      SetSnackBar({
        snackbarOpen: false,
        snackbarType: "",
        snackbarMessage: "",
      })
    );
  };

  useEffect(() => {
    return () => {
      dispatch(SetError());
    };
  });

  return (
    <Snackbar
      open={snackbarOpen}
      onClose={onCloseHandle}
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}>
      <Alert
        onClose={onCloseHandle}
        severity={snackbarType}
        sx={{ width: "100%" }}>
        {snackbarMessage}
      </Alert>
    </Snackbar>
  );
};
