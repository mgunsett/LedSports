// App.jsx
import React, { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/theme';
import { MainRouters } from './Routers';
import PageLoaderLED from './components/Loading';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;

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

  useEffect(() => {
    const id = setTimeout(() => setLoaderExiting(true), 4000);
    return () => clearTimeout(id);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <MainRouters />
      {showLoader && (
        <PageLoaderLED
          isExiting={loaderExiting}
          onExitComplete={() => setShowLoader(false)}
        />
      )}
    </ChakraProvider>
  );
}

export default App;

