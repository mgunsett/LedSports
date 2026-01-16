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
import Loading2 from "@/components/Loading2";
      

export const MainRouters = () => {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/:id" element={<Home />} />
        <Route path="/agentes" element={
          <Suspense fallback={<Loading2 />}>
            <Agentes />
          </Suspense>
        } />
        <Route path="/eventos" element={
          <Suspense fallback={<Loading2 />}>
            <Eventos />
          </Suspense>
        } />
        <Route path="/marcas" element={
          <Suspense fallback={<Loading2 />}>
            <Marcas />
          </Suspense>
        } />
        <Route path="/deportistas" element={
          <Suspense fallback={<Loading2 />}>
            <Deportistas />
          </Suspense>
        } />
        <Route path="/entidades-deportivas" element={
          <Suspense fallback={<Loading2 />}>
            <EntidadesDeportivas />
          </Suspense>
        } />
        <Route path="/jugadores" element={
          <Suspense fallback={<Loading2 />}>
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