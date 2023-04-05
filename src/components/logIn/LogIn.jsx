import React from "react";
import { logUser } from "../../redux/store/slices/users";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginUser,
} from "../../redux/store/slices/users/getAllUsers";

const Login = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userState);
  const user = userState.loggedUser;

  const navigate = useNavigate();

  const googleAuth = () => {};
  const facebookAuth = () => {};
  const githubAuth = () => {};

  const handlerLogin = async () => {
    try {
      if (!user) {
        // Retrieve data from user useing auth0
        dispatch(loginUser(dataSign));

        navigate("/henrycollege/courses");

        // Display welcome message
        alert(`Bienvenido/a ${signUpData.user.displayName}!`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <Box>
        <Button
          onClick={() => handlerLogin(googleAuth)}
          color="tertiary"
          style={{ width: 300 }}
          sx={{
            m: 1,
            bgcolor: "#4285F4",
            "&:hover": {
              bgcolor: "#34A853",
              color: "#FFFFFF",
            },
            color: "#FFFFFF",
          }}
        >
          Ingresa con Google
        </Button>
      </Box>
      <Box>
        <Button
          onClick={() => handlerLogin(facebookAuth)}
          color="tertiary"
          style={{ width: 300 }}
          sx={{
            m: 1,
            bgcolor: "#3B5998",
            "&:hover": {
              bgcolor: "#E9EAED",
              color: "#000000",
            },
            color: "#FFFFFF",
          }}
        >
          Ingresa con Facebook
        </Button>
      </Box>
      <Box>
        <Button
          onClick={() => handlerLogin(githubAuth)}
          color="tertiary"
          style={{ width: 300 }}
          sx={{
            m: 1,
            bgcolor: "#6f42c1",
            "&:hover": {
              bgcolor: "#FFFFFF",
              color: "#000000",
            },
            color: "#FFFFFF",
          }}
        >
          Ingresa con GitHub
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
