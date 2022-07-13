import { useTheme } from "@emotion/react";
import {
  Button,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import StyledTextField from "../components/CommonTextField";

import {
  SetError,
  signUpWithEmailPass,
} from "../redux/Slices/signUpSlice/signUpSlice";
import {
  removeSnackBar,
  SetSnackBar,
} from "../redux/Slices/SnackbarSlices/SnackbarSlice";

export default function SignUp() {
  const [values, setValues] = useState({});

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const state = useSelector((state) => state.signUp);

  function submitData() {
    dispatch(
      signUpWithEmailPass({ email: values.email, password: values.password })
    );
  }

  function handleSnackbar(message, type) {
    dispatch(
      SetSnackBar({
        snackbarOpen: true,
        snackbarType: type,
        snackbarMessage: message,
      })
    );
  }
  const theme = useTheme();

  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(state.user).length !== 0) {
      handleSnackbar("You have been Logged in.", "success");

      navigate("/");
    }
    if (state.error) {
      handleSnackbar(state.error, "error");
    }

      
  }, [state]);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10px",
      }}>
      <Stack
        justifyContent='space-between'
        alignItems='center'
        sx={{
          boxShadow: theme.shadows[20],
          width: "60%",
          height: "80%",
          padding: "20px 90px",
        }}>
        <Typography variant='h4' fontWeight='700'>
          Register
        </Typography>
        <Box
          sx={{
            justifyContent: "space-evenly",
          }}>
          <form>
            <StyledTextField
              label='Full Name'
              type='text'
              name='fullName'
              onChange={handleInputChange}
              fullWidth></StyledTextField>

            <StyledTextField
              label='Email'
              name='email'
              fullWidth
              onChange={handleInputChange}></StyledTextField>
            <StyledTextField
              label='Password'
              name='password'
              fullWidth
              onChange={handleInputChange}></StyledTextField>
            <StyledTextField
              label='Address'
              name='address'
              fullWidth
              onChange={handleInputChange}></StyledTextField>
            <StyledTextField
              label='Pin Code'
              name='pinCode'
              fullWidth
              onChange={handleInputChange}></StyledTextField>
            <StyledTextField
              label='Mobile Number'
              name='mobileNumber'
              fullWidth
              onChange={handleInputChange}></StyledTextField>
          </form>
        </Box>

        <Button
          type='submit'
          variant='contained'
          color='secondary'
          onClick={() => {
            submitData();
          }}
          sx={{ margin: "20px", color: "white" }}>
          {state.loading ? <CircularProgress /> : "Sign Up"}
        </Button>
        <Typography>If you have an account</Typography>

        <Link to='/signIn'>
          <Button
            variant='text'
            type='submit'
            sx={{ margin: "20px", color: "black" }}>
            Login
          </Button>
        </Link>
      </Stack>
    </Container>
  );
}
