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
import { BsChevronDoubleDown } from "react-icons/bs";
import { Link } from "react-router-dom";


const MotionBox = motion(Box);


const Services = () => {
  return (
    <Box id="services" bg="blackAlpha.100" py={{ base: 20, md: 28 }} px={{ base: 6, md: '170px' }}>
      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
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
          alignItems="start"
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
                boxSize="600px"
                objectFit="contain"
                mx={'-150px'}
                p={0}
              />
              <Image
                className="service-image"
                src={service1}
                alt="services"
                boxSize="750px"
                objectFit="contain"
                mx={'-250px'}  
                mt={-20}
              />
              <Image
                className="service-image"
                src={service4}
                alt="services"
                boxSize="600px"
                objectFit="contain"
                mx={'-150px'}
              />
          </Flex>
      </Flex>
      </MotionBox>
      <MotionBox
        animate={{ y: [0, -15, 0]}}
        transition={{ duration: 1, repeat: Infinity}}
        display="flex"
        direction="row"
        alignItems="center"
        justifyContent="center"
        mb={'80px'}
        fontSize={{ base: '50px', md: '100px' }}
      >
        <BsChevronDoubleDown color="orange" />
      </MotionBox>
      <MotionBox
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <Flex
      direction="row"
      alignItems="center"
      justifyContent="center"
      gap={20}
      mt={10}
      mb={'120px'}
      mx={10}
      >
        <Link to="/agentes">
        <Button
          color="orange.400"
          size="lg"
          transition="all 0.3s ease-in-out"
          py={10}
          px={'80px'}
          boxShadow="0px 10px 15px rgba(255, 165, 0, 0.5)"
          bgGradient="linear(to-br, gray.800, gray.900)"
          _hover={{
            bgGradient:"linear(to-br, gray.600, gray.700)",
            transform: "scale(1.1)",
          }}
          _active={{
            transform: "translateY(5px)",
            
          }}
        >
          AGENTES
        </Button>
        </Link>
        <Link to="/eventos">
        <Button
          color="orange.400"
          size="lg"
          transition="all 0.3s ease-in-out"
          py={10}
          px={'80px'}
          boxShadow="0px 10px 15px rgba(255, 165, 0, 0.5)"
          bgGradient="linear(to-br, gray.800, gray.900)"
          _hover={{
            bgGradient:"linear(to-br, gray.600, gray.700)" ,
            transform: "scale(1.1)",
          }}
          _active={{
            transform: "translateY(5px)",
            
          }}
        >
          EVENTOS
        </Button>
        </Link>
        <Link to="/marcas">
        <Button
          color="orange.400"
          size="lg"
          transition="all 0.3s ease-in-out"
          py={10}
          px={'80px'}
          boxShadow="0px 10px 15px rgba(255, 165, 0, 0.5)"
          bgGradient="linear(to-br, gray.800, gray.900)"
          _hover={{
            bgGradient:"linear(to-br, gray.600, gray.700)",
            transform: "scale(1.1)",
          }}
          _active={{
            transform: "translateY(5px)",
            
          }}
        >
          MARCAS
        </Button>
        </Link>
        <Link to="/deportistas">
        <Button
          color="orange.400"
          size="lg"
          transition="all 0.3s ease-in-out"
          py={10}
          px={'80px'}
          boxShadow="0px 10px 15px rgba(255, 165, 0, 0.5)"
          bgGradient="linear(to-br, gray.800, gray.900)"
          _hover={{
            bgGradient:"linear(to-br, gray.600, gray.700)",
            transform: "scale(1.1)",
          }}
          _active={{
            transform: "translateY(5px)",
            
          }}
        >
          DEPORTISTAS
        </Button>
        </Link>
      </Flex>
      </MotionBox>
    </Box>
  );
};

export default Services;
