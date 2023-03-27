import {
  Grid,
  TextField,
  Box,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import styles from "./Form.module.css";
import React, { useEffect, useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { Link } from "react-router-dom";
import { loginUser } from "../../redux/store/slices/users/getAllUsers";
import { useDispatch } from "react-redux";

function Form() {

  const dispatch = useDispatch()

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
    e.preventDefault()
    dispatch(loginUser(formData))
  };

  // useEffect(() => {
  //   // Retrieve form data from localStorage, if available
  //   const storedFormData = JSON.parse(localStorage.getItem("formData"));

  //   if (storedFormData) {
  //     console.log("Retrieved form data from local storage:", storedFormData);
  //     setFormData(storedFormData);
  //   }
  // }, []);

  // useEffect(() => {
  //   // Save form data to localStorage whenever it changes
  //   localStorage.setItem("formData", JSON.stringify(formData));
  //   // console.log("Saved form data to local storage:", formData);
  // }, [formData]);

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

                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    name="password"
                    sx={{ width: 300, mt:'1rem' }}
                    color="tertiary"
                    value={formData.password}
                    onChange={handleOnChange}
                  />

                <Box sx={{ "& > button": { m: 1 ,mt:'1rem'} }}>
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
