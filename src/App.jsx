import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import {
  About,
  Detail,
  Form,
  Home,
  Landing,
  SubLanding,
  FormRegister,
  Payment,
} from "./views";
import React, { useEffect } from "react";
import { styled } from "@mui/material";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserDataByAuthId, setAuthToken } from "./utils/auth";
import { logUser } from "./redux/store/slices/users"
import Profile from "./views/profile/Profile"
import Students from "./views/profile/Students"
import Formulario from "./views/profile/Formulario"
import Data from "./views/profile/Data"



const Root = styled("div")({
  maxWidth: "100%",
  maxHeight: "100%",
  margin: "0 auto",
  padding: "2rem",
  textAlign: "center",
  border: "none",
});

function App({ toggleDarkMode, isDarkMode }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const { user, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    if (!user) return;

    const getUserData = async () => {
      const auth0Id = user.sub.split("|")[1];
      const token = await getAccessTokenSilently({
        authorizationParams: {
          audience: import.meta.env.VITE_AUTH0_AUDIENCE,
        },
      });
      const userData = await getUserDataByAuthId(auth0Id, token);
      setAuthToken(token);
      dispatch(logUser(userData));
    };

    getUserData();
  }, [user]);

  return (
    <Root>
      {location.pathname !== "/" && (
        <NavBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      )}

      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/henrycollege" element={<SubLanding />} />
        <Route exact path="/henrycollege/courses" element={<Home />} />
        <Route exact path="/henrycollege/registrarse" element={<FormRegister />} />
        <Route exact path="/henrycollege/iniciarsesion" element={<Form />} />
        <Route exact path="/henrycollege/nosotros" element={<About />} />
        <Route exact path="/henrycollege/detalle/:id" element={<Detail />} />
        <Route exact path="/henrycollege/payment" element={<Payment />} />
        <Route path="/profile" element={<Profile />} >
          <Route path="/profile" element={<Navigate replace to="informacion-personal" />} />
          <Route path="students" element={<Students />} />
          <Route path="formulario" element={<Formulario />} />
          <Route path="informacion-personal" element={<Data />} />
        </Route>
      </Routes>
    </Root>
  )
}

export default App;
