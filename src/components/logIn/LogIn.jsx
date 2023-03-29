import React from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// import axios from 'axios'

const Login = () => {

  const [user, setUser] = useAuthState(auth);
  const googleAuth = new GoogleAuthProvider();
  const facebookAuth = new FacebookAuthProvider();
  const githubAuth = new GithubAuthProvider();
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
