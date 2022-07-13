import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ProductDetailed from "../ProductDetailed";
import ProductIndexed from "../ProductIndexed";

export default function ClothPage() {
  const state = useLocation();

  console.log(state);
  return (
    <div>
      <Routes>
        <Route path='/cloth' element={<ProductIndexed />} />
        <Route path=':id' element={<ProductDetailed />} />
      </Routes>
    </div>
  );
}
