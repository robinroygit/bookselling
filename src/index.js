import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FirebaseProvider } from "./context/FirebaseContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseProvider>
        <App />
      </FirebaseProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
