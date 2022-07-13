import { createTheme } from "@mui/material";

import { blueGrey, indigo } from "@mui/material/colors";

const grenn = "#66bb6a";
const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[50],
    },
     
    action: {
      hover: indigo[200],
    },
  },
});

export default theme;
