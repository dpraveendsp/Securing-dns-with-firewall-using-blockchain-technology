import {
  AppBar,
  Button,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <CssBaseline>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            sx={{
              textDecoration: "none",
              color: "white",
            }}
            component={Link}
            to="/"
            variant="h6"
          >
            Blockchain DNS
          </Typography>
          <Button
            sx={{
              backgroundColor: "white",
              color: "black",
              ":hover": { color: "white", backgroundColor: "green" },
            }}
            component={Link}
            to="/searchurl"
            variant="contained"
          >
            Search URL
          </Button>
          <Button
            component={Link}
            to="/login"
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "black",
              ":hover": { color: "white", backgroundColor: "green" },
            }}
            // sx={{ backgroundColor: "#1976d2", color: "white" }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </CssBaseline>
  );
};

export default Navbar;
