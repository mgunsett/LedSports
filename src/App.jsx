// App.jsx
import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/theme';
import { MainRouters } from './Routers';

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
      <MainRouters />
    </ChakraProvider>
  );
}

export default App;

