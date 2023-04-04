import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import NavBar from './components/navBar/NavBar'
import { About, Detail, Form, Home, Landing, SubLanding, FormRegister, Payment } from './views'
import React from "react"
import { styled } from "@mui/material"
import Profile from "./views/profile/Profile"
import Students from "./views/profile/Students"
import Formulario from "./views/profile/Formulario"
import Data from "./views/profile/Data"


const Root = styled('div')({
  maxWidth: "1280px",
  margin: "0 auto",
  padding: "2rem",
  textAlign: "center",
});

function App() {

  const location = useLocation();

  return (

    <Root>
      {location.pathname !== "/" && <NavBar />}

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

export default App