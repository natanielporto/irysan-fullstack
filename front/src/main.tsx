import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./global.css";
import { SyncProvider } from "./context/sync";

ReactDOM.render(
  <React.StrictMode>
    <SyncProvider>
      <App />
    </SyncProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
