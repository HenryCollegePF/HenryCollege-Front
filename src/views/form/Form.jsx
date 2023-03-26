import {
  Grid,
  TextField,
  Box,
  Card,
  CardContent,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  IconButton,
  Button,
} from "@mui/material";
import styles from "./Form.module.css";
import React, { useEffect, useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import axios from 'axios';
import { setAuthToken } from "../../utils/auth";

function Form() {
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

  // const handleOnChange = (e) => {
  //   // console.log([e.target.name], e.target.value)
  //   setFormData({...formData, [e.target.name]: e.target.value});
  // }

  const handleSubmit = async () => {
    const { data } = await axios.post('http://localhost:3001/students/login', {
      email: formData.email,
      password: formData.password,
    });

    setAuthToken(data.auth.access_token)
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    // Retrieve form data from localStorage, if available
    const storedFormData = JSON.parse(localStorage.getItem("formData"));

    if (storedFormData) {
      console.log("Retrieved form data from local storage:", storedFormData);
      setFormData(storedFormData);
    }
  }, []);

  useEffect(() => {
    // Save form data to localStorage whenever it changes
    localStorage.setItem("formData", JSON.stringify(formData));
    // console.log("Saved form data to local storage:", formData);
  }, [formData]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Box my={5}>
          <Grid container direction="row" spacing={2}>
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
                  value={formData.password}
                  onChange={handleOnChange}
                  error={false}
                  label="Contraseña"
                  type="text"
                  fullWidth
                  variant="outlined"
                  sx={{ m: 2, width: 300 }}
                  color="tertiary"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Contraseña
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
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
                    color="tertiary"
                  />
                  <FormHelperText id="outlined-password-helper-text">
                    Campo obligatorio
                  </FormHelperText>
                </FormControl>

                <Box sx={{ "& > button": { m: 1 } }}>
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
                        bgcolor: "#000000",
                        "&:hover": {
                          bgcolor: "#F0F0F0",
                          color: "#000000",
                        },
                        color: "#secondary",
                      }}
                      color="tertiary"
                    >
                      Registrarse
                    </Button>
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Box>
      </header>
    </div>
  );
}

export default Form;
