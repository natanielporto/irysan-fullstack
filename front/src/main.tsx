import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SyncProvider } from "./context/sync";
import "./global.css";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SyncProvider>
      <App />
    </SyncProvider>
  </React.StrictMode>
);
