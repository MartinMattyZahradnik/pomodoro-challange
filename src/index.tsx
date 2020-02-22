import React from "react";
import ReactDOM from "react-dom";
import { StylesProvider } from "@material-ui/styles";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import { store } from "redux/store";
import GlobalStyles from "./GlobalStyles";
import theme from "./Theme";

import App from "./App";

ReactDOM.render(
  <StylesProvider injectFirst>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <GlobalStyles />
          <App />
        </Provider>
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  </StylesProvider>,

  document.getElementById("root")
);
