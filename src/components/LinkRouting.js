import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const LinkRouting = styled(NavLink)(({ theme }) => ({
  fontFamily: "monospace",
  fontWeight: 700,
  textDecoration: "none",

  color: theme.palette.common.black,
  // "&:hover": {
  //   backgroundColor: theme.palette.action.hover,
  //   borderRadius: "20%",
  //   padding: "5px",
  //   color: theme.palette.common.white,
  // },
}));

export default LinkRouting;
