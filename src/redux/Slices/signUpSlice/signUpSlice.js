import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../../firebase/firebase";

export const signUpWithEmailPass = createAsyncThunk(
  "signUp",
  async (userValues) => {
    try {
      return await createUserWithEmailAndPassword(
        auth,
        userValues.email,
        userValues.password
      ).then((user) => {
        if (user.user.uid) {
          const userCollection = collection(db, "users");
          const colloectionData = {
            ...userValues,
            uid: user.user.uid,
            cart: [],
            orders: [],
          };
          addDoc(userCollection, colloectionData).then((doc) => {});
        }
        return user.user;
      });
    } catch (error) {
      return error;
    }
  }
);

export const loggedInWithEmailPass = createAsyncThunk(
  "user/login",
  async (values) => {
    try {
      return await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      ).then((user) => {
        console.log("first");
        console.log(user);
        if (user.user.uid !== null) {
          console.log(user.user);
          return user.user;
        }
      });
    } catch (error) {
      return JSON.parse(error.code);
    }
  }
);

const initialState = {
  user: {},
  error: "",
  loading: false,
};

const signUpSlice = createSlice({
  name: "SignUpSlice",
  initialState: initialState,
  reducers: {
    SetError(state) {
      state.error = "";
    },
  },
  extraReducers: {
    [signUpWithEmailPass.pending]: (state, action) => {
      state.loading = true;
    },
    [signUpWithEmailPass.fulfilled]: (state, action) => {
      if (action.payload.uid) {
        state.user = action.payload;
        state.loading = false;
      } else {
        state.error = action.payload.code;
        state.loading = false;
      }
    },
    [signUpWithEmailPass.rejected]: (state, action) => {
      state.error = action.payload;
    },

    [loggedInWithEmailPass.pending]: (state, action) => {
      state.loading = true;
    },
    [loggedInWithEmailPass.fulfilled]: (state, action) => {
      console.log(action.payload.uid);
      console.log("action.payload");
      if (action.payload.uid) {
        state.user = action.payload;
        state.error = "";
        state.loading = false;
      } else {
        state.error = action.payload;
        state.loading = false;
      }
    },
    [loggedInWithEmailPass.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const signUpSliceReducer = signUpSlice.reducer;

export const { SetError } = signUpSlice.actions;
