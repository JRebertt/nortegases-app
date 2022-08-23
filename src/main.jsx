import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { App } from "./assets/App";
import { ItemInfo } from "./assets/pages/ItemInfo";
import { SignInSide } from "./assets/pages/SignInSide";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cardDetail/:id" element={<ItemInfo />} />
      <Route path="/login" element={<SignInSide />} />
    </Routes>
  </BrowserRouter>
);
