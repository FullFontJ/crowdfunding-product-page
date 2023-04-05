import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Menu } from "./Menu";
import { DataPage } from "./DataPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Menu />
    <DataPage />
  </React.StrictMode>
);
