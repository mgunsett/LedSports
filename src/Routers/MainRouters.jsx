import { BrowserRouter, Routes, Route } from "react-router-dom";     
import Navbar from "../components/Navbar";     
import { Home } from "../Pages/Home";     
import { Agentes } from "../Pages/Agentes";     
import { Eventos } from "../Pages/Eventos";     
import { Marcas } from "../Pages/Marcas";     
import { Deportistas } from "../Pages/Deportistas";     
import Footer from "../components/Footer";     
      

export const MainRouters = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agentes" element={<Agentes />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/marcas" element={<Marcas />} />
        <Route path="/deportistas" element={<Deportistas />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
