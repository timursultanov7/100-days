import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { RatingValueProvider } from "./Contexts/RatingValueContext";
import { SetSubmitProvider } from "./Contexts/SetSubmitContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SetSubmitProvider>
      <RatingValueProvider>
        <App />
      </RatingValueProvider>
    </SetSubmitProvider>
  </React.StrictMode>
);
