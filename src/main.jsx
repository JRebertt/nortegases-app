import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { App } from "./assets/App";
import { ItemInfo } from "./assets/pages/ItemInfo";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cardDetail" element={<ItemInfo />} />
    </Routes>
  </BrowserRouter>
);
