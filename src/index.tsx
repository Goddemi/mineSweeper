import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Game from "./Game";
import { Provider } from "react-redux";
import { store } from "./store/store";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Game />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
