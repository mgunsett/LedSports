// App.jsx
import React, { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/theme';
import { MainRouters } from './Routers';
import PageLoaderLED from '@/components/layout/Loading';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;

const LOADER_MIN_MS = 2200;
const LOADER_MAX_MS = 5000;

function App() {

  const [showLoader, setShowLoader] = useState(true);
  const [loaderExiting, setLoaderExiting] = useState(false);

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

  // El loader se va cuando la página terminó de cargar, pero se muestra al menos
  // LOADER_MIN_MS (para que se vea la animación) y nunca más de LOADER_MAX_MS.
  useEffect(() => {
    let loaded = document.readyState === 'complete';
    let minDone = false;
    const tryExit = () => {
      if (loaded && minDone) setLoaderExiting(true);
    };
    const onLoad = () => {
      loaded = true;
      tryExit();
    };
    const minId = setTimeout(() => {
      minDone = true;
      tryExit();
    }, LOADER_MIN_MS);
    const maxId = setTimeout(() => setLoaderExiting(true), LOADER_MAX_MS);
    if (!loaded) window.addEventListener('load', onLoad);
    return () => {
      clearTimeout(minId);
      clearTimeout(maxId);
      window.removeEventListener('load', onLoad);
    };
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <MainRouters />
      {showLoader && (
        <PageLoaderLED
          minDuration={LOADER_MIN_MS}
          isExiting={loaderExiting}
          onExitComplete={() => setShowLoader(false)}
        />
      )}
    </ChakraProvider>
  );
}

export default App;

