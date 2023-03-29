import React from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// import axios from 'axios'

const Login = () => {
  const [user, setUser] = useAuthState(auth);
  const googleAuth = new GoogleAuthProvider();
  const auth1 = getAuth();

  const handlerLogin = async (authType) => {
    try {
      if (!user) {
        const signUpData = await signInWithPopup(auth, authType);
        console.log(signUpData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    signOut(auth);
  };

  return (
    <Box>
      <Button onClick={() => handlerLogin(googleAuth)} color="tertiary">
        Ingresa con Google
      </Button>
    </Box>
  );
};

export default Login;
