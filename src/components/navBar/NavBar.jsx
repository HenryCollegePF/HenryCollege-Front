import { Switch } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import { logout } from "../../redux/store/slices/users/getAllUsers";
import { useDispatch } from "react-redux";
import { removeSubscription } from "../../redux/store/slices/payment/paymentSlice";
import darkModeLogo from "../../assets/images/logoHenryBlanco.jpg";
import lightModeLogo from "../../assets/images/ISOLOGO_HENRY_BLACK.png";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
// import Profile from "../../views/profile/Profile";

const settings = ["Profile", "Logout"];

const NavBar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [darkMode, setDarkMode] = React.useState(false);

  const logoSrc = theme.palette.mode === "light" ? lightModeLogo : darkModeLogo;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logoutfirebase = () => {
    signOut(auth);
  };

  const handlerLogout = () => {
    dispatch(removeSubscription());
    dispatch(logout());
    logoutfirebase();
    navigate("/henrycollege");
  };

  const handlerProfile = () => {
    navigate("/profile");
  };

  return (
    <AppBar
      position="fixed"
      color="secondary"
      sx={{ textDecoration: "none", "& a": { textDecoration: "none" } }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center">
          <Link to="/henrycollege">
            <img style={{ width: "45px" }} src={logoSrc} alt="logo" />
          </Link>
          <Link to="/henrycollege">
            <Typography
              color={theme.palette.mode === "dark" ? "white" : "black"}
              variant="h6"
              sx={{ flexGrow: 1 }}
            >
              | College
            </Typography>
          </Link>
        </Box>
        <Box display="flex" alignItems="center">
          <Link to={"/"} color="inherit">
            <Button
              sx={{
                textDecoration: "none",
                mr: 1,
                color: "black",
                bgcolor: "#f5f5f5",
                "@media (min-width:600px)": {
                  mr: 2,
                },
              }}
              color="inherit"
            >
              Henry
            </Button>
          </Link>

          <Link to={"/henrycollege/courses"} color="inherit">
            <Button
              sx={{
                mr: 1,
                color: "black",
                bgcolor: "#f5f5f5",
                "@media (min-width:600px)": {
                  mr: 2,
                },
              }}
              color="inherit"
            >
              Cursos
            </Button>
          </Link>

          <Link to={"/henrycollege/nosotros"} color="inherit">
            <Button
              sx={{
                mr: 1,
                color: "black",
                bgcolor: "#f5f5f5",
                "@media (min-width:600px)": {
                  mr: 2,
                },
              }}
              color="inherit"
            >
              Nosotros
            </Button>
          </Link>

          <Link to={"/henrycollege/registrarse"}>
            <Button
              sx={{
                mr: 1,
                bgcolor: "#ffff00",
                "&:hover": {
                  bgcolor: "#F0F0F0",
                  color: "#000000",
                },
                color: "#212121",
                "@media (min-width:600px)": {
                  mr: 2,
                },
              }}
              variant="contained"
            >
              Crear Cuenta
            </Button>
          </Link>

          <Link to={"/henrycollege/iniciarsesion"}>
            <Button
              sx={{
                mr: 1,
                bgcolor: "#212121",
                "&:hover": {
                  bgcolor: "#F0F0F0",
                  color: "#000000",
                },
                color: "#fffde7",
                "@media (min-width:600px)": {
                  mr: 2,
                },
              }}
              variant="contained"
            >
              Iniciar sesión
            </Button>
          </Link>
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                alt="Remy Sharp"
                // src="/static/images/avatar/2.jpg"
              />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
           <MenuItem key="Profile" onClick={handleCloseUserMenu}>
                <Typography textAlign="center" onClick={handlerProfile}>
                Profile
                </Typography>
              </MenuItem>

              <MenuItem key="Logout" onClick={handleCloseUserMenu}>
                <Typography textAlign="center" onClick={handlerLogout}>
                  Logout
                </Typography>
              </MenuItem>
          </Menu>
        </Box>
        {/* <Profile/> */}
        <Switch
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          sx={{ ml: 2 }}
        />
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
