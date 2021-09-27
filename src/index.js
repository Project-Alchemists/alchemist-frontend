import { ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./redux/store";

ReactDOM.render(
  <>
    <ColorModeScript />
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById("root")
);
