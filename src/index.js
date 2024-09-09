import React from "react";
import ReactDOM from "react-dom";
import { CSSReset, extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import Fonts from "./Components/Ui/Fonts";
import store from "./Store";



// 2. Call `extendTheme` and pass your custom values
const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "60em",
  xl: "80em",
  "2xl": "96em",
});

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontSize: "auto",
        color: "gray.600",
        backgroundColor: "white",
        lineHeight: "tall",
      },
      ":focus": {
        boxShadow: "none",
        outline: "none",
      },
    },
  },
  breakpoints,
  sizes: {
    themeSize: "1200px",
  },
  light: "#f3f3f3",
  dark: {
    bg: "#f3f3f3",
  },
  fonts: {
    body: "Open Sans, sans-serif",
    heading: "Open Sans, sans-serif",
    mono: "Menlo, monospace",
  },
  colors: {
    green: {
      100: "#f7fafc",
      500: "#6da356",
      900: "#5fa100 ",
    },
    gray: {
      100: "#f7f7f7",
      200: "#ebebeb",
      500: "#7d7777",
      800: "#3a3939",
      900: "#696969",
    },
  },
});

 


window.store = store;
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <ChakraProvider theme={theme}>
          <Fonts />
          <CSSReset />
          <App />
        </ChakraProvider>
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById("root")


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
