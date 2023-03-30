import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
import { auth } from "../../firebase.js";
import {
  TextField,
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  IconButton,
} from "@mui/material";
import * as React from "react";
import { postNewUser } from "../../redux/store/slices/users/getAllUsers";
import { useDispatch } from "react-redux";
import { VisibilityOff } from "@mui/icons-material";
import { Visibility } from "@mui/icons-material";

const FormRegister = () => {
  const dispatch = useDispatch();

  const [input, setInput] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [confirmPas, setConfirmPas] = React.useState({
    password: "",
  });
  
  const onChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  
  const onConfirmPass = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setConfirmPas({
      ...confirmPas,
      [name]: value,
    });
  };
  
  //se implementó en este onSubmit el firebase para la autenticación
  const onSubmit = async (event) => {
    event.preventDefault();
    if (input.password !== confirmPas.password) {
      alert("La contraseña no coincide");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        input.email,
        input.password
      );
      const user = userCredential.user;
      dispatch(postNewUser(input));
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  // *******Esto es de MUI para hacer visible la contraseña ***************
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }; // ********************************************************************
  const [showPasswordTwo, setShowPasswordTwo] = React.useState(false);
  const handleClickShowPasswordTwo = () => setShowPasswordTwo((show) => !show);
  const handleMouseDownPasswordTwo = (event) => {
    event.preventDefault();
  }; // ********************************************************************

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 3, display: "flex", flexWrap: "wrap" },
      }}
      noValidate
      autoComplete="off"
    >
      <Box>
        <TextField
          label="Nombre"
          name="firstName"
          value={input.firstName}
          onChange={onChange}
          color="tertiary"
          sx={{ m: 2, width: 300 }}
          helperText="Campo obligatorio"
        />
        <TextField
          label="Apellido"
          name="lastName"
          value={input.lastName}
          onChange={onChange}
          color="tertiary"
          sx={{ m: 2, width: 300 }}
          helperText="Campo obligatorio"
        />
      </Box>
      <Box>
        <TextField
          label="Correo electrónico"
          name="email"
          type="email"
          value={input.email}
          onChange={onChange}
          color="tertiary"
          sx={{ m: 2, width: 300 }}
          helperText="Campo obligatorio"
        />
        <TextField
          label="Teléfono"
          name="phone"
          value={input.phone}
          onChange={onChange}
          color="tertiary"
          sx={{ m: 2, width: 300 }}
          helperText="Campo obligatorio"
        />
      </Box>
      <Box>
        {/* <TextField
          sx={{ m: 2, width: 300 }}
          id="filled-password-input"
          label="Contraseña"
          type="password"
          autoComplete="current-password"
          name="password"
          value={input.password}
          onChange={onChange}
          helperText="Campo obligatorio"
          color="tertiary"
        />
        <TextField
          sx={{ m: 2, width: 300 }}
          id="filled-password-input"
          label="Repite contraseña"
          type="password"
          autoComplete="current-password"
          value={confirmPas}
          onChange={onConfirmPass}
          helperText="Campo obligatorio"
          color="tertiary"
        /> */}
        <FormControl sx={{ m: 2, width: 300 }} color="tertiary">
          <InputLabel htmlFor="outlined-adornment-password">
            Contraseña
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            name="password"
            value={input.password}
            onChange={onChange}
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
          <FormHelperText id="component-helper-text">
            Campo obligatorio
          </FormHelperText>
        </FormControl>

        <FormControl sx={{ m: 2, width: 300 }} color="tertiary">
          <InputLabel htmlFor="outlined-adornment-password">
            Repite la contraseña
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPasswordTwo ? "text" : "password"}
            name="password"
            value={confirmPas.password}
            onChange={onConfirmPass}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPasswordTwo}
                  onMouseDown={handleMouseDownPasswordTwo}
                  edge="end"
                >
                  {showPasswordTwo ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Repite la contraseña"
          />
          <FormHelperText id="component-helper-text">
            Campo obligatorio
          </FormHelperText>
        </FormControl>
      </Box>

      <Button
        sx={{
          m: 2,
          bgcolor: "#ffff00",
          "&:hover": {
            bgcolor: "#F0F0F0",
            color: "#000000",
          },
          color: "#212121",
          width: "93%",
        }}
        variant="contained"
        onClick={onSubmit}
        type="submit"
      >
        Registrarse
      </Button>
    </Box>
  );
};
export default FormRegister;
