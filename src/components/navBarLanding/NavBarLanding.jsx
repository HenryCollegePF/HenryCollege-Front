import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";

const NavBarLanding = () => {
  return (
    <AppBar position="fixed" color="secondary" sx={{ textDecoration: "none", "& a": { textDecoration: "none" } }}>
      <Toolbar sx={{ ml: { xs: 2, sm: 6 } }}>
        <img
          style={{ width: "120px" }}
          src="https://assets.soyhenry.com/henry-landing/assets/Henry/logo.png"
          alt="logo"
        />
        <Typography variant="h6" sx={{ marginLeft: { xs: "10px", sm: "3%" } }}>
          <Link to={"/henrycollege"}>
            <Button
              sx={{
                mr: 2,
                bgcolor: "primary.main", // use primary color for background
                "&:hover": {
                  bgcolor: "tertiary.main",
                  color: "tertiary.contrastText", // use tertiary contrast color on hover
                },
                color: "primary.contrastText", // use primary contrast color for text
              }}
              color="primary"
            >
              Henry College
            </Button>
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarLanding;
