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
// import { Paper, Switch } from "@mui/material";

function main() {
  const [isDark, setIsDark]= useState(false)

const theme = createTheme({
  palette: {
    type: isDark? "dark" : "light",
    primary: {
      main: "#FFFF01", //amarillo
      contrastText: "black", // color de texto secundario
    },
    secondary: {
      main: "#fafafa", //blanco
      contrastText: "black", // color de texto secundario
    },
    tertiary: {
      main: "#000000", //negro
      contrastText: "white", // color de texto secundario
    },
    background: {
      paper: "#fafafa", //negro
    },
  },
});

const persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById("root")).render(
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
              {/* <Paper>
                <Switch checked={isDark} onChange={e => setIsDark(!isDark)} color= "primary"/> */}
                <App />
              {/* </Paper> */}
            </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </PersistGate>
);
}

export default main;