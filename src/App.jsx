import { Route, Routes, useLocation } from "react-router-dom"
import NavBar from './components/navBar/NavBar'
import { About, Detail, Form, Home, Landing, SubLanding, FormRegister, Payment } from './views'
import React, { useEffect } from "react"
import { styled } from "@mui/material"
import { useDispatch } from "react-redux"
import { useAuth0 } from "@auth0/auth0-react"
import { getUserDataByAuthId, setAuthToken } from "./utils/auth"
import { logUser } from "./redux/store/slices/users"

const Root = styled('div')({
  maxWidth: "1280px",
  margin: "0 auto",
  padding: "2rem",
  textAlign: "center",
});

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { user, getAccessTokenSilently } = useAuth0();
  
  useEffect(() => {
    if (!user) return;

    const getUserData = async () => {
      const auth0Id = user.sub.split('|')[1];
      const token = await getAccessTokenSilently({
        authorizationParams: {
          audience: import.meta.env.VITE_AUTH0_AUDIENCE,
        }
      });
      const userData = await getUserDataByAuthId(auth0Id, token)
      setAuthToken(token);
      dispatch(logUser(userData))
    }
  
    getUserData()
  }, [user])

  return (

      <Root>
        {location.pathname !== "/" && <NavBar />}
        
        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route exact path="/henrycollege" element={<SubLanding/>} />
          <Route exact path="/henrycollege/courses" element={<Home/>} />
          <Route exact path="/henrycollege/registrarse" element={<FormRegister/>} />
          {/* <Route exact path="/henrycollege/iniciarsesion" element={<Form/>} /> */}
          <Route exact path="/henrycollege/nosotros" element={<About/>} />          
          <Route exact path="/henrycollege/detalle/:id" element={<Detail/>} />          
          <Route exact path="/henrycollege/payment" element={<Payment/>} />          
        </Routes>
        
      </Root>
  )
}

export default App