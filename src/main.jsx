import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import { Switch, Paper } from "@mui/material";
import { auth } from "./firebase.js";
import NavBar from "./components/navBar/NavBar";

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

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, [setIsDarkMode]);

  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <NavBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
            <Paper sx={{ height: "100vh" }}>
              <App sx={{ height: "100vh" }} />
            <Switch onChange={toggleDarkMode} checked={isDarkMode} />
            </Paper>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </PersistGate>
  );
};

const FirebaseApp = ({ children }) => {
  const [isFirebaseReady, setIsFirebaseReady] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setIsFirebaseReady(true);
    });
  }, []);

  return isFirebaseReady ? children : null;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <FirebaseApp>
    <AppWrapper />
  </FirebaseApp>
);
