import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { FetchProduct } from "../redux/Slices/FetchProduct/FetchProductSlice";
 import ProductDetailed from "./ProductDetailed";
import ProductIndexed from "./ProductIndexed";

export default function HomePage() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.products.products;
  });

  useEffect(() => {
    dispatch(FetchProduct());
  }, [dispatch]);


  return (
    <div>
      <Routes>
        <Route path='/' element={<ProductIndexed products={state} />} />
        <Route path='/:id' element={<ProductDetailed />} />
      </Routes>
    </div>
  );
}
