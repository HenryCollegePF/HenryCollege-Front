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

const FormRegister = () => {
  const dispatch = useDispatch();

  const [input, setInput] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [confirmPas, setConfirmPas] = React.useState("");

  const onConfirmPass = (event) => {
    event.preventDefault();
    setConfirmPas(event.target.value);
  };
  const onChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    input.password !== confirmPas
      ? alert("La contraseña no coincide")
      : dispatch(postNewUser(input));
  };

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
        <TextField
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
        />
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
