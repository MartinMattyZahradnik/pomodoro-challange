import React from "react";
import ReactDOM from "react-dom";
import { StylesProvider } from "@material-ui/styles";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import configureStore from "redux/store";
import GlobalStyles from "./GlobalStyles";
import theme from "./Theme";

import App from "./App";

const store = configureStore();
console.log(store.getState(), "??");
ReactDOM.render(
  <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyles />
        <App />
      </Provider>
    </ThemeProvider>
  </StylesProvider>,

  document.getElementById("root")
);
