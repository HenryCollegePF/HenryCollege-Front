import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import { Switch } from '@mui/material';


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
    mode: 'dark',
  },
});

const persistor = persistStore(store)

const AppWrapper = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Switch onChange={toggleDarkMode} checked={isDarkMode} />
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </PersistGate>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppWrapper />
);



