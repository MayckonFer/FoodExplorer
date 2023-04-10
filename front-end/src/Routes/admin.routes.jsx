import { Routes, Route } from "react-router-dom";

import { HomeAdmin } from "../pages/HomeAdmin";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { NotFound } from "../pages/NotFound";
import { DishesAdmin } from "../pages/DishesAdmin";

export function Admin() {
  return (
    <>
      <Header imageLogo="/assets/images/logo-admin.png" />
      <Routes>
        <Route path="/home-admin" element={<HomeAdmin />} />
        <Route path="/prato-admin" element={<DishesAdmin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
