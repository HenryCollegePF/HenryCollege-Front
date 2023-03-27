import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";

const NavBarLanding = () => {
  return (
    <AppBar position="fixed" sx={{ bgcolor: "#fafafa" }}>
      <Toolbar sx={{ ml: 6 }}>
        <img
          style={{ width: "120px" }}
          src="https://assets.soyhenry.com/henry-landing/assets/Henry/logo.png"
          alt="logo"
        />
        <Typography variant="h6" sx={{ marginLeft: "3%" }}>
          <Link to={"/henrycollege"}>
            <Button
              sx={{
                mr: 2,
                bgcolor: "#212121",
                "&:hover": {
                  bgcolor: "#F0F0F0",
                  color: "#000000",
                },
                color: "#fffde7",
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
