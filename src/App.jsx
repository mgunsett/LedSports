// App.jsx
import React, { useEffect } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import TrustSection from '@/components/TrustSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import theme from '@/theme';

function App() {
  useEffect(() => {
    document.title = 'LED SPORTS - Marketing Digital Deportivo';
    const metaName = 'description';
    const content = 'Agencia líder en marketing digital deportivo. Potenciamos la imagen de deportistas profesionales con estrategias innovadoras.';
    let meta = document.querySelector(`meta[name="${metaName}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', metaName);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" bg="black" color="white" overflowX="hidden">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <TrustSection />
        <Contact />
        <Footer />
        <Toaster />
      </Box>
    </ChakraProvider>
  );
}

export default App;

