import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "@ionic/react/css/core.css";
import App from "./App";
import { store } from "@redux-store";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import { setupIonicReact, IonApp } from "@ionic/react";
setupIonicReact({
  mode: "md",
});

Object.defineProperty(String.prototype, "capitalize", {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
  },
  enumerable: false,
});

ReactDOM.render(
  <IonApp>
    <Provider store={store}>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </Provider>
  </IonApp>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
