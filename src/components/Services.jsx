import React from 'react';
import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Button,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import service1 from '../assets/service1.png';
import service3 from '../assets/service3.png';
import service4 from '../assets/service4.png';
import '../components/Service.css';

const MotionBox = motion(Box);


const Services = () => {
  return (
    <Box id="services" bg="blackAlpha.100" py={{ base: 20, md: 28 }} px={{ base: 6, md: '170px' }}>
        <Flex
          direction="row"
          alignItems="center"
          justifyContent="space-evenly"
          px={{ base: 6, md: 20 }}
          py={10}
          >
          <Flex 
          width="400px" 
          h="500px" 
          direction="column" 
          alignItems="start" 
          justifyContent="start"
          p={10}
          gap={4}
          >
            <Heading
              as="h2"
              fontSize={{ base: '3xl', md: '4xl' }}
              color="white"
              textAlign="start"
              lineHeight={1}
            >
              Nuestros <Text fontSize="45px" color="orange.400">Servicios</Text>
            </Heading>
            <Text
              fontSize="20px"
              color="white"
              lineHeight={1.7}
            >
              Llevamos la imagen más allá: creamos contenido visual de calidad para deportistas, 
              clubes, ligas, agencias, marcas y eventos que buscan conectar y destacar.
            </Text>
          </Flex>
          <Flex
          direction="row"
          alignItems="center"
          justifyContent="center"
          gap={-10}
          maxW="100%"
          h="700px"
          overflow="hidden"
          ml={10}
          >
              <Image
                className="service-image"
                src={service3}
                alt="services"
                boxSize="700px"
                objectFit="contain"
                mx={'-150px'}
              />
              <Image
                className="service-image"
                src={service1}
                alt="services"
                boxSize="850px"
                objectFit="contain"
                mx={'-250px'}  
              />
              <Image
                className="service-image"
                src={service4}
                alt="services"
                boxSize="700px"
                objectFit="contain"
                mx={'-150px'}
              />
          </Flex>
      </Flex>
      <Flex
      direction="row"
      alignItems="center"
      justifyContent="center"
      gap={20}
      my={10}
      mx={10}
      >
        <Button
          colorScheme="orange"
          size="lg"
          variant="outline"
          transition="all 0.3s ease-in-out"
          py={10}
          px={20}
          boxShadow="0px 10px 15px rgba(255, 165, 0, 0.5)"
          _hover={{
            bg: "orange.400",
            color: "white",
            border: "none",
            transform: "scale(1.1)",
            boxShadow: "0px 10px 15px rgba(255, 165, 0, 0.5)",
          }}
        >
          AGENTES
        </Button>
        <Button
          colorScheme="orange"
          size="lg"
          variant="outline"
          transition="all 0.3s ease-in-out"
          py={10}
          px={20}
          boxShadow="0px 10px 15px rgba(255, 165, 0, 0.5)"
          _hover={{
            bg: "orange.400",
            color: "white",
            border: "none",
            transform: "scale(1.1)",
            boxShadow: "0px 10px 15px rgba(255, 165, 0, 0.5)",
          }}
        >
          EVENTOS
        </Button>
        <Button
          colorScheme="orange"
          size="lg"
          variant="outline"
          transition="all 0.3s ease-in-out"
          py={10}
          px={20}
          boxShadow="0px 10px 15px rgba(255, 165, 0, 0.5)"
          _hover={{
            bg: "orange.400",
            color: "white",
            border: "none",
            transform: "scale(1.1)",
            boxShadow: "0px 10px 15px rgba(255, 165, 0, 0.5)",
          }}
        >
          MARCAS
        </Button>
        <Button
          colorScheme="orange"
          size="lg"
          variant="outline"
          transition="all 0.3s ease-in-out"
          py={10}
          px={20}
          boxShadow="0px 10px 15px rgba(255, 165, 0, 0.5)"
          _hover={{
            bg: "orange.400",
            color: "white",
            border: "none",
            transform: "scale(1.1)",
            boxShadow: "0px 10px 15px rgba(255, 165, 0, 0.5)",
          }}
        >
          DEPORTISTAS
        </Button>
      </Flex>
    </Box>
  );
};

export default Services;
