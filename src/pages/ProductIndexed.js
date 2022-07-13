import styled from "@emotion/styled";
import { Backdrop, CircularProgress, Grid, Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const GridWay = styled("div")(({ theme }) => ({
  display: "grid",
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "0.2fr 0.2fr 0.2fr 0.2fr",
  },
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "0.3fr 0.3fr ",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "0.6fr ",
  },
  justifyContent: "space-evenly",
  alignContent: "center",
  columnGap: "20px",
}));

export default function ProductIndexed({ products }) {

  console.log(products,"products")
  return (
    <GridWay
      container
      direction='row'
      justifyContent='center'
      alignItems='center'
      sx={{ backgroundColor: "blue" }}>
      {products.length <= 0 ? (
        <Backdrop
          open={true}
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <CircularProgress />
        </Backdrop>
      ) : (
        products.map((product) => {
           return (
            <Link key={product.id} to={product.id}>
              <ProductCard product={product} />
            </Link>
          );
        })
      )}
    </GridWay>
  );
}
