import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";     
import Navbar from "../components/Navbar";     
import { Home } from "../Pages/Home";     
const Agentes = lazy(() => import("../Pages/Agentes"));
const Eventos = lazy(() => import("../Pages/Eventos"));   
const Marcas = lazy(() => import("../Pages/Marcas"));      
const EntidadesDeportivas = lazy(() => import("../Pages/EntidadesDeportivas"));
const Deportistas = lazy(() => import("../Pages/Deportistas"));
const Jugadores = lazy(() => import("../Pages/Jugadores"));
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
        <Route path="/agentes" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Agentes />
          </Suspense>
        } />
        <Route path="/eventos" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Eventos />
          </Suspense>
        } />
        <Route path="/marcas" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Marcas />
          </Suspense>
        } />
        <Route path="/deportistas" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Deportistas />
          </Suspense>
        } />
        <Route path="/entidades-deportivas" element={
          <Suspense fallback={<div>Loading...</div>}>
            <EntidadesDeportivas />
          </Suspense>
        } />
        <Route path="/jugadores" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Jugadores />
          </Suspense>
        } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};


// import { Deportistas } from "../Pages/Deportistas";  
// import { Jugadores } from "../Pages/Jugadores";