import { Route, Routes, useLocation } from "react-router-dom"
import './App.css'
import NavBar from './components/navBar/NavBar'
import { About, Detail, Form, Home, Landing, SubLanding, UserDashboard, FormRegister } from './views'
import React from "react"
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { Paper, Switch } from "@mui/material"

function App() {
  // const [isDark, setIsDark] = useState(false)
  const location = useLocation();

  // const theme = createTheme({
  //   palette: {
  //     type: isDark ? "dark" : "light",
  //     primary: {
  //       main: "#FFFF01", //amarillo
  //       contrastText: "black", // color de texto secundario
  //     },
  //     secondary: {
  //       main: "#fafafa", //blanco
  //       contrastText: "black", // color de texto secundario
  //     },
  //     tertiary: {
  //       main: "#000000", //negro
  //       contrastText: "white", // color de texto secundario
  //     },
  //     background: {
  //       paper: "#fafafa", //negro
  //     },
  //   },
  // });

  return (

    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      {/* <ThemeProvider theme={theme}>
        <Paper>
          <Switch checked={isDark} onChange={e => setIsDark(!isDark)} color="primary" /> */}
          
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/dashboard" element={<UserDashboard />} />
            <Route exact path="/courses" element={<SubLanding />} />
            <Route exact path="/henrycollege" element={<SubLanding />} />
            <Route exact path="/henrycollege/courses" element={<Home />} />
            <Route exact path="/henrycollege/registrarse" element={<FormRegister />} />
            <Route exact path="/henrycollege/iniciarsesion" element={<Form />} />
            <Route exact path="/henrycollege/nosotros" element={<About />} />
            <Route exact path="/henrycollege/detalle/:id" element={<Detail />} />
          </Routes>
        {/* </Paper>
      </ThemeProvider> */}
    </div>
  )
}

export default App