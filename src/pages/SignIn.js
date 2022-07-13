import { useTheme } from "@emotion/react";
import { validateArgCount } from "@firebase/util";
import {
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import StyledTextField from "../components/CommonTextField";
import useValidation from "../hooks/useValidation";
import { loggedInWithEmailPass } from "../redux/Slices/signUpSlice/signUpSlice";

export default function SignIn() {
  const [values, setValues] = useState({});

  const theme = useTheme();

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const state = useSelector(({ signUp }) => {
    return signUp;
  });

  function submitData(event) {
    event.preventDefault();
    dispatch(
      loggedInWithEmailPass({
        email: values.email,
        password: values.password,
      })
    );
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(state.user).length !== 0) {
      navigate("/");
    }
  }, [navigate, state]);

  const [valiDationError, setValiDationError] = useState({
    emailError: "",
    passwordError: "",
  });

  let validate = (name, value) => {
    switch (name) {
      case "email":
        const pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$";
        const result = new RegExp(pattern).test(value);

        if (result === false) {
          setValiDationError({
            ...valiDationError,
            emailError: "Please enter correct emails",
          });
        } else {
          setValiDationError({ ...valiDationError, emailError: "" });
        }
        break;
      case "password":
        if (value.length < 0) {
          setValiDationError({
            ...valiDationError,
            passwordError: "Please enter the password",
          });
        } else {
          setValiDationError({ ...valiDationError, passwordError: "" });
        }

      default:
        break;
    }
  };

  const { handleOnChange, stateB } = useValidation({
    validator: validate,
  });

  console.log(valiDationError);
  return (
    <>
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
            Sign In
          </Typography>
          <Box
            sx={{
              justifyContent: "space-evenly",
            }}>
            <form>
              <StyledTextField
                label='Email'
                name='email'
                fullWidth
                error={valiDationError.emailError ? true : false}
                helperText={valiDationError.emailError}
                onChange={handleOnChange}></StyledTextField>
              <StyledTextField
                label='Password'
                name='password'
                fullWidth
                error={valiDationError.passwordError ? true : false}
                helperText={valiDationError.passwordError}
                onChange={handleOnChange}></StyledTextField>
            </form>
          </Box>

          <Button
            type='submit'
            variant='contained'
            color='secondary'
            disabled={false}
            onClick={(e) => {
              console.log(stateB);
              console.log(stateB.password);
              if (stateB.email === "") {
                setValiDationError({
                  emailError: "Email can't be empty",
                  passwordError: "Password can't be empty",
                });
              } else if (stateB.email === "") {
                setValiDationError({
                  ...valiDationError,
                  emailError: "Email can't be empty",
                });
              } else if (stateB.password === "") {
                setValiDationError({
                  ...valiDationError,
                  passwordError: "Password can't be empty",
                });
              } else {
                submitData(e);
              }
            }}
            sx={{ margin: "20px", color: "white" }}>
            {state.loading ? <CircularProgress /> : "Login"}
          </Button>
          <Typography>If you have an account</Typography>
          <Button
            onClick={() => navigate("/signUp")}
            color='primary'
            variant='text'
            type='submit'
            sx={{ margin: "20px", color: "black" }}>
            Sign Up
          </Button>
        </Stack>
      </Container>
    </>
  );
}
