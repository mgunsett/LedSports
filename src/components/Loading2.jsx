import React from 'react';
import { Box, Flex, Spinner } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';

const Loading2 = () => {
  return (
    <Box 
      minH="100vh" 
      bg="black" 
      display="flex" 
      flexDirection="column"
    >
      <Navbar />
      
      <Flex 
        flex="1" 
        align="center" 
        justify="center"
        minH="calc(100vh - 200px)"
      >
        <Spinner
          thickness='3px'
          speed='0.8s'
          emptyColor='gray.200'
          color='orange.400'
          size='xl'
        />
      </Flex>
      
      <Footer />
    </Box>
  );
};

export default Loading2;
