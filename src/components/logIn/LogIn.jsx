import React from "react";
import { logUser } from "../../redux/store/slices/users";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginUser,
} from "../../redux/store/slices/users/getAllUsers";
import axios from "axios";
// import axios from 'axios'

const Login = () => {
  const dispatch = useDispatch();

  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const googleAuth = new GoogleAuthProvider();
  const facebookAuth = new FacebookAuthProvider();
  const githubAuth = new GithubAuthProvider();

  const handlerLogin = async (authType) => {
    try {
      if (!user) {
        const signUpData = await signInWithPopup(auth, authType);
        const dataSign = {
          email: signUpData.user.email,
          password: signUpData.user.uid,
        }
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
