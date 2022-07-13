import {
  AppBar,
  Box,
 
  Menu,
  MenuItem,
  Stack,
   
 
  Toolbar,
   
 
  Typography,
 
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import LinkRouting from "./LinkRouting";

export default function StoreAppBar() {
  const [anchorEl, setAnchorEl] = useState();
  const [mouseOverMenu, setMouseOverMenu] = useState(false);
  const open = Boolean(anchorEl);

  const user = useSelector((state) => state.signUp.user);

 

  function isUserLoggedIn() {
    return Object.keys(user).length === 0;
  }

  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseOnOver = () => {
    if (mouseOverMenu === false) {
      setAnchorEl(null);
    }
  };

  const enterMenuHandle = () => {
     setMouseOverMenu(true);
  };

  const leaveMenuHandle = () => {
    setMouseOverMenu(false);
    setAnchorEl(null);
  };

  return (
    <AppBar position='static' elevation={0}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100px",
        }}>
        <Toolbar disableGutters>
          <Typography
            variant='h4'
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",

              textDecoration: "none",
            }}>
            EStore
          </Typography>
        </Toolbar>

        <Stack direction='row' spacing={3}>
          <LinkRouting to='/'>
            <Typography variant='h6' fontSize='1em'>
              Home
            </Typography>
          </LinkRouting>

          <Box
            onMouseOver={handleClick}
            sx={{
              color: "black",
              textTransform: "none",
              cursor: "pointer",
              zIndex: "1301",
            }}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup='true'
            aria-expanded={open ? "true" : undefined}>
            <Typography variant='h6' fontSize='1em'>
              Cloths
            </Typography>
          </Box>

          <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={leaveMenuHandle}
            MenuListProps={{
              "aria-labelledby": "basic-button",
              onMouseLeave: leaveMenuHandle,
            }}>
            <LinkRouting to='/cloth' state={{ type: "men" }}>
              <MenuItem onClick={handleClose}>Men</MenuItem>
            </LinkRouting>
            <LinkRouting to='/cloth' state={{ type: "women" }}>
              <MenuItem onClick={handleClose}>Women</MenuItem>
            </LinkRouting>
            <LinkRouting to='/cloth' state={{ type: "kids" }}>
              <MenuItem onClick={handleClose}>Kids</MenuItem>
            </LinkRouting>
          </Menu>

          {isUserLoggedIn() && (
            <LinkRouting to='/signIn'>
              <Typography variant='h6' fontSize='1em'>
                Login
              </Typography>
            </LinkRouting>
          )}
        </Stack>
      </Container>
    </AppBar>
  );
}
