import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";     
import Navbar from "@/components/layout/Navbar";     
import { Home } from "../Pages/Home";     
const Agentes = lazy(() => import("../Pages/Agentes"));
const Eventos = lazy(() => import("../Pages/Eventos"));   
const Marcas = lazy(() => import("../Pages/Marcas"));      
const EntidadesDeportivas = lazy(() => import("../Pages/EntidadesDeportivas"));
const Deportistas = lazy(() => import("../Pages/Deportistas"));
const Jugadores = lazy(() => import("../Pages/Jugadores"));
const FcParadiso = lazy(() => import("../Pages/FcParadiso"));
const Sportfolio = lazy(() => import("../Pages/Sportfolio"));
import Footer from "@/components/layout/Footer";     
import { ScrollToTop } from "./ScrollToTop";
import { RouteSeo } from "./RouteSeo";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";     
import Loading2 from "@/components/layout/Loading2";
      

export const MainRouters = () => {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouteSeo />
      <Navbar />
      <main id="main">
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
        <Route path="/fc-paradiso" element={
          <Suspense fallback={<Loading2 />}>
            <FcParadiso />
          </Suspense>
        } />
        <Route path="/sportfolio" element={
          <Suspense fallback={<Loading2 />}>
            <Sportfolio />
          </Suspense>
        } />
      </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
};


// import { Deportistas } from "../Pages/Deportistas";  
// import { Jugadores } from "../Pages/Jugadores";