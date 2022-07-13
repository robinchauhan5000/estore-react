import React from "react";
import { useLocation } from "react-router-dom";

export default function ClothPageIndex() {
  const state = useLocation();

  console.log(state)

  console.log(state);
  return <div>ClothPageIndex</div>;
}
