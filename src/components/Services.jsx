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
          id="servicesButton"
          direction="row"
          alignItems="center"
          justifyContent="center"
          h="750px"
          w="50%"
          p={10}
          >
              <Image
                src={service3}
                alt="services"
                w="450px"
                h="450px"
                objectFit="contain"
                transition="all 0.4s ease-in-out"
                _hover={{
                  filter: 'drop-shadow(0px 0px 14px rgba(255, 165, 0, 0.5))',
                  transform: "scale(1.05) translateX(15px)",
                  mr: '-15px',
                }}
              />
              <Image
                src={service1}
                alt="services"
                w="600px"
                h="600px" 
                objectFit="contain"
                transition="all 0.4s ease-in-out"
                _hover={{
                  filter: 'drop-shadow(0px 0px 14px rgba(255, 165, 0, 0.5))',
                  transform: "scale(1.05)",
                  ml: '-15px',
                  mr: '-15px'
                }}
              />
              <Image
                src={service4}
                alt="services"
                w="450px"
                h="450px"
                objectFit="contain"
                transition="all 0.4s ease-in-out"
                _hover={{
                  filter: 'drop-shadow(0px 0px 14px rgba(255, 165, 0, 0.5))',
                  transform: "scale(1.05) translateX(-15px)",
                  ml: '-15px',
                
                }}
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
          <Link to="/deportistas">
            <Button
              color="orange.400"
              size="lg"
              transition="all 0.3s ease-in-out"
              py={12}
              px={'85px'}
              boxShadow="0px 10px 15px rgba(255, 165, 0, 0.5)"
              bgGradient="linear(to-br, gray.800, gray.900)"
              _hover={{
                bgGradient: "linear(to-br, gray.600, gray.700)",
                transform: "scale(1.1)",
              }}
              _active={{
                transform: "translateY(5px)",
              }}
              fontSize={{ base: 'lg', md: 'xl' }}
            >
              DEPORTISTAS
            </Button>
          </Link>
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
                bgGradient: "linear(to-br, gray.600, gray.700)",
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
                bgGradient: "linear(to-br, gray.600, gray.700)",
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
                bgGradient: "linear(to-br, gray.600, gray.700)",
                transform: "scale(1.1)",
              }}
              _active={{
                transform: "translateY(5px)",

              }}
            >
              MARCAS
            </Button>
          </Link>
        </Flex>
      </MotionBox>
    </Box>
  );
};

export default Services;
