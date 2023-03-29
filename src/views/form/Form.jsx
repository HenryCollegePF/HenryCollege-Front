import {
  Grid,
  TextField,
  Box,
  Card,
  CardContent,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { Link } from "react-router-dom";
import { loginUser } from "../../redux/store/slices/users/getAllUsers";
import { useDispatch } from "react-redux";
import { VisibilityOff } from "@mui/icons-material";
import { Visibility } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Login from "../../components/logIn/LogIn";

function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
    navigate("/henrycollege/courses");
  };

  // *******Esto es de MUI para hacer visible la contraseña ***************
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }; // ********************************************************************

  return (
    <Box my={5}>
      <Grid
        container
        direction="row"
        spacing={2}
        sx={{
          display: "flex",
          m: "2rem",
          width: "100%",
          justifyContent: "center",
          mt: "2rem",
        }}
      >
        <Card>
          <CardContent>
            <Grid item xs={12} sm={12} md={20} lg={20} xl={20}>
              <TextField
                name="email"
                value={formData.email}
                onChange={handleOnChange}
                error={false}
                label="Correo electrónico"
                type="text"
                margin="dense"
                fullWidth
                sx={{ width: 300 }}
                color="tertiary"
              />
            </Grid>
            <FormControl
              sx={{ m: 1, width: 300 }}
              color="tertiary"
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Contraseña
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleOnChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Contraseña"
              />
            </FormControl>

            <Box sx={{ "& > button": { m: 1, mt: "1rem" } }}>
              <LoadingButton
                variant="contained"
                type="submit"
                onClick={handleSubmit}
                loading={loading}
                disabled={!loading ? false : true}
                style={{ width: 300 }}
                sx={{
                  mr: 2,
                  bgcolor: "#ffff00",
                  "&:hover": {
                    bgcolor: "#F0F0F0",
                    color: "#000000",
                  },
                  color: "#212121",
                }}
                color="tertiary"
              >
                Iniciar Sesión
              </LoadingButton>
            </Box>

            <Box sx={{ "& > button": { m: 1 } }}>
              <Link to="/henrycollege/registrarse">
                <Button
                  variant="contained"
                  type="submit"
                  style={{ width: 300 }}
                  sx={{
                    marginY: 2,
                    bgcolor: "#212121",
                    "&:hover": {
                      bgcolor: "#F0F0F0",
                      color: "#000000",
                    },
                    color: "#fffde7",
                  }}
                  color="tertiary"
                >
                  Registrarse
                </Button>
              </Link>
            </Box>

            <Box sx={{ "& > button": { m: 1, mt: "1rem" } }}>
              <Login />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
}

export default Form;
