import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import { Switch, Paper } from "@mui/material";
import NavBar from "./components/navBar/NavBar";
import { Auth0Provider } from "@auth0/auth0-react";

const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#FFFF01",
      contrastText: "black",
    },
    secondary: {
      main: "#fafafa",
      contrastText: "black",
    },
    tertiary: {
      main: "#000000",
      contrastText: "white",
    },
    background: {
      paper: "#fafafa",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#FFFF01",
      contrastText: "black",
    },
    secondary: {
      main: "#fafafa",
      contrastText: "black",
    },
    tertiary: {
      main: "#FFFFFF",
      contrastText: "black",
    },
    background: {
      paper: "#000000",
    },
    mode: "dark",
  },
});

const persistor = persistStore(store);

const AppWrapper = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Paper
              sx={{
                height: "100vh",
                backgroundColor: theme.palette.background.paper,
              }}
            >
              <Auth0Provider
                domain={import.meta.env.VITE_AUTH0_DOMAIN}
                clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
                authorizationParams={{
                  redirect_uri: window.location.origin,
                }}
                cacheLocation="localstorage"
              >
                <App
                  sx={{ height: "100vh" }}
                  toggleDarkMode={toggleDarkMode}
                  isDarkMode={isDarkMode}
                />
              </Auth0Provider>
              {/* <Switch onChange={toggleDarkMode} checked={isDarkMode} /> */}
            </Paper>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </PersistGate>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<AppWrapper />);
