import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { width } from "@mui/system";
import React from "react";

const Carosual = styled("div")((props) => ({
  width: "50%",
  height: "60%",
  img: {
    background: props.img,
    height: "100%",
    width: "100%",
  },
}));

export default Carosual;
