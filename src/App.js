import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import StoreAppBar from "./components/StoreAppBar";
import SignUp from "./pages/SignUp";
import ClothPage from "./pages/cloths/ClothPage";
import SignIn from "./pages/SignIn";
import { CustomSnackbar } from "./components/CustomSnackbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { TabbarTask } from "./TabbarTask";
import { PhotoList } from "./PhotoList";

export const PhotoContext = React.createContext();

function App() {
  return (
    <div>
      <TabbarTask />

      <PhotoContext.Provider
        value={{
          photos: [{ title: "Image 1", imgSrc: "" }],
          fetch: () => {},
        }}>
        <PhotoList />
      </PhotoContext.Provider>
    </div>
  );
}

export default App;

{
  /* <CustomSnackbar />
      <BrowserRouter>
        <StoreAppBar />
        <Routes>
          <Route path='/*' element={<HomePage />} />
          <Route path='/cloth/*' element={<ClothPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/signIn' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div> */
}
