import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Dishes } from "../pages/Dishes";

export function CommonUser() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prato" element={<Dishes />} />
    </Routes>
  );
}
