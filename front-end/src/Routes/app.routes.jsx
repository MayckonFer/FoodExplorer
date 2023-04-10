import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Dishes } from "../pages/Dishes";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { NotFound } from "../pages/NotFound";

export function CommonUser() {
  return (
    <>
      <Header imageLogo="/assets/images/logo.png" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prato" element={<Dishes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}