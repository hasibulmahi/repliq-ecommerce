import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider.jsx";
import CartProviders from "./providers/CartProviders.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartProviders>
          <App />
        </CartProviders>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);