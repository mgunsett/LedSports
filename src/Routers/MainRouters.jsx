import { BrowserRouter, Routes, Route } from "react-router-dom";     
import Navbar from "../components/Navbar";     
import { Home } from "../Pages/Home";     
import { Agentes } from "../Pages/Agentes";     
import { Eventos } from "../Pages/Eventos";     
import { Marcas } from "../Pages/Marcas";     
import { Deportistas } from "../Pages/Deportistas";     
import { EntidadesDeportivas } from "../Pages/EntidadesDeportivas";
import { Jugadores } from "../Pages/Jugadores";
import Footer from "../components/Footer";     
import { ScrollToTop } from "./ScrollToTop";     
      

export const MainRouters = () => {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/:id" element={<Home />} />
        <Route path="/agentes" element={<Agentes />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/marcas" element={<Marcas />} />
        <Route path="/deportistas" element={<Deportistas />} />
        <Route path="/entidades-deportivas" element={<EntidadesDeportivas />} />
        <Route path="/jugadores" element={<Jugadores />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
