import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  // const { toggleDarkMode, isDarkMode } = props;

  // const handleToggleDarkMode = () => {
  //   toggleDarkMode();
  // };
  return (
    <AppBar position="fixed" color="secondary">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center">
          <Link to="/henrycollege">
            <img
              style={{ width: "45px" }}
              src="https://assets.soyhenry.com/logos/ISOLOGO_HENRY_BLACK.png"
              alt="logo"
            />
          </Link>
          <Link to="/henrycollege">
            <Typography color="black" variant="h6" sx={{ flexGrow: 1 }}>
              | College
            </Typography>
          </Link>
        </Box>
        <Box display="flex" alignItems="center">
          <Link to={"/"} color="inherit">
            <Button
              sx={{ mr: 2, color: "black", bgcolor: "#f5f5f5" }}
              color="inherit"
            >
              Henry
            </Button>
          </Link>

          <Link to={"/henrycollege/courses"} color="inherit">
            <Button
              sx={{ mr: 2, color: "black", bgcolor: "#f5f5f5" }}
              color="inherit"
            >
              Cursos
            </Button>
          </Link>

          <Link to={"/henrycollege/nosotros"} color="inherit">
            <Button
              sx={{ mr: 2, color: "black", bgcolor: "#f5f5f5" }}
              color="inherit"
            >
              Nosotros
            </Button>
          </Link>

          <Link to={"/dashboard"} color="inherit">
            <Button
              sx={{ mr: 2, color: "black", bgcolor: "#f5f5f5" }}
              color="inherit"
            >
              Dashboard
            </Button>
          </Link>
          <Link to={"/henrycollege/registrarse"}>
            <Button
              sx={{
                mr: 2,
                bgcolor: "#ffff00",
                "&:hover": {
                  bgcolor: "#F0F0F0",
                  color: "#000000",
                },
                color: "#212121",
              }}
              variant="contained"
            >
              Crear Cuenta
            </Button>
          </Link>

          <Link to={"/henrycollege/iniciarsesion"}>
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
              variant="contained"
            >
              Iniciar sesión
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
