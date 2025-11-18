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
import { BsChevronDoubleDown } from "react-icons/bs";
import { Link } from "react-router-dom";

const MotionBox = motion(Box);

const Services = () => {
  return (
    <Box 
    id="services" 
    bg="blackAlpha.100" 
    py={{ base: 10, md: 28 }} 
    px={{ base: 2, md: '170px' }}
    >
      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Flex
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-evenly"
        px={{ base: 2, md: 20 }}
        pt={6}
        gap={10}
        >
          <Flex
            width={{ base: "100%", md: "350px" }}
            h={{ base: "200px", md: "400px" }}
            direction="column"
            alignItems={{ base: "start", md: "start" }}
            justifyContent="center"
            p={{ base: 4, md: 2 }}
            pr={{ base: 4, md: 10 }}
            gap={2}
          >
            <Heading
              as="h2"
              fontSize={{ base: '4xl', md: '3xl' }}
              color="white"
              textAlign={{ base: "start", md: "start" }}
              lineHeight={1}
            >
              Nuestros <Text fontSize={{ base: '45px', md: '40px' }} color="orange.400">Servicios</Text>
            </Heading>
            <Text
              fontSize={{ base: '20px', md: '18px' }}
              color="white"
              lineHeight={1.7}
              textAlign={{ base: "start", md: "start" }}
            >
              Llevamos la imagen más allá: <br />creamos contenido visual de calidad para deportistas,
              clubes, ligas, agencias, marcas y eventos que buscan conectar y destacar.
            </Text>
          </Flex>
          <Flex
            id="servicesButton"
            direction="row"
            alignItems="center"
            justifyContent="center"
            h={{ base: "400px", md: "750px" }}
            w={{ base: "100%", md: "50%" }}
            p={10}
          >
              <Image
                src={service3}
                alt="services"
                mr={{ base: '-15px', md: '-12px' }}
                w={{ base: "210px", md: "350px" }}
                h={{ base: "210px", md: "350px" }}
                objectFit="contain"
                transition="all 0.6s ease-in-out"
                _hover={{
                  filter: 'drop-shadow(0px 0px 14px rgba(255, 165, 0, 0.5))',
                  transform: { base: "scale(1.2) translateX(15px)", md: "scale(1.05) translateX(15px)"},
                  mr: '-15px',
                  zIndex: 2
                }}
                _active={{
                  transform: { base: "scale(1.2) translateX(15px)", md: "none"},
                }}
              />
              <Image
                src={service1}
                alt="services"
                zIndex={1}
                w={{ base: "260px", md: "500px" }}
                h={{ base: "260px", md: "500px" }} 
                objectFit="contain"
                transition="all 0.4s ease-in-out"
                _hover={{
                  filter: 'drop-shadow(0px 0px 14px rgba(255, 165, 0, 0.5))',
                  transform: { base: "scale(1.2)", md: "scale(1.05)"},
                  ml: '-15px',
                  mr: '-15px'
                }}
                _active={{
                  transform: { base: "scale(1.2)", md: "none"},
                }}
              />
              <Image
                src={service4}
                alt="services"
                ml={{ base: '-15px', md: '-12px' }}
                w={{ base: "210px", md: "350px" }}
                h={{ base: "210px", md: "350px" }}
                objectFit="contain"
                transition="all 0.6s ease-in-out"
                _hover={{
                  filter: 'drop-shadow(0px 0px 14px rgba(255, 165, 0, 0.5))',
                  transform: { base: "scale(1.2) translateX(-15px)", md: "scale(1.05) translateX(-15px)"},
                  ml: '-15px',
                  zIndex: 2 
                }}
                _active={{
                  transform: { base: "scale(1.2) translateX(-15px)", md: "none"},
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
        mb={{ base: '50px', md: '80px' }}
        fontSize={{ base: '60px', md: '100px' }}
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
          flexWrap="wrap"
          gap={{ base: '12px', md: 8 }}
          mt={10}
          mb={{ base: '20px', md: '120px' }}
          mx={{ base: '20px'  , md: 10 }}
        >
          <Link to="/deportistas">
            <Button
              color="orange.400"
              size={{ base: 'md', md: 'lg' }}
              transition="all 0.3s ease-in-out"
              py={{ base: 10, md: 12 }}
              px='80px'
              w={{ base: '290px', md: '220px'}}
              boxShadow={{ base: '0px 4px 6px rgba(255, 165, 0, 0.5)', md: '0px 10px 15px rgba(255, 165, 0, 0.5)'}}
              bgGradient="linear(to-br, gray.800, gray.900)"
              _hover={{
                bgGradient: "linear(to-br, gray.600, gray.700)",
                transform: "scale(1.1)",
                zIndex: 1
              }}
              _active={{
                transform: "translateY(5px)",
              }}
              fontSize={{ base: 'md', md: 'sm' }}
            >
              DEPORTISTAS
            </Button>
          </Link>
          <Link to="/entidades-deportivas">
            <Button
              color="orange.400"
              size={{ base: 'md', md: 'lg' }}
              transition="all 0.3s ease-in-out"
              py={{ base: 8, md: 10 }}
              px={{ base: '60px', md: '80px' }}
              w={{ base: '140px', md: '150px'}}
              boxShadow={{ base: '0px 4px 6px rgba(255, 165, 0, 0.5)', md: '0px 10px 15px rgba(255, 165, 0, 0.5)'}}
              bgGradient="linear(to-br, gray.800, gray.900)"
              _hover={{
                bgGradient: "linear(to-br, gray.600, gray.700)",
                transform: "scale(1.1)",
                zIndex: 1
              }}
              _active={{
                transform: "translateY(5px)",

              }}
              fontSize={{ base: 'md', md: 'sm' }}
            >
              ENTIDADES <br /> DEPORTIVAS
            </Button>
          </Link>
          <Link to="/agentes">
            <Button
              color="orange.400"
              size={{ base: 'md', md: 'lg' }}
              transition="all 0.3s ease-in-out"
              py={{ base: 8, md: 10 }}
              px={{ base: '60px', md: '80px' }}
              w={{ base: '140px', md: '150px'}}
              boxShadow={{ base: '0px 4px 6px rgba(255, 165, 0, 0.5)', md: '0px 10px 15px rgba(255, 165, 0, 0.5)'}}
              bgGradient="linear(to-br, gray.800, gray.900)"
              _hover={{
                bgGradient: "linear(to-br, gray.600, gray.700)",
                transform: "scale(1.1)",
                zIndex: 1
              }}
              _active={{
                transform: "translateY(5px)",

              }}
              fontSize={{ base: 'md', md: 'sm' }}
            >
              AGENTES
            </Button>
          </Link>
          <Link to="/eventos">
            <Button
              color="orange.400"
              size={{ base: 'md', md: 'lg' }}
              transition="all 0.3s ease-in-out"
              py={{ base: 8, md: 10 }}
              px={{ base: '60px', md: '80px' }}
              w={{ base: '140px', md: '150px'}}
              boxShadow={{ base: '0px 4px 6px rgba(255, 165, 0, 0.5)', md: '0px 10px 15px rgba(255, 165, 0, 0.5)'}}
              bgGradient="linear(to-br, gray.800, gray.900)"
              _hover={{
                bgGradient: "linear(to-br, gray.600, gray.700)",
                transform: "scale(1.1)",
                zIndex: 1
              }}
              _active={{
                transform: "translateY(5px)",

              }}
              fontSize={{ base: 'md', md: 'sm' }}
            >
              EVENTOS
            </Button>
          </Link>
          <Link to="/marcas">
            <Button
              color="orange.400"
              size={{ base: 'md', md: 'lg' }}
              transition="all 0.3s ease-in-out"
              py={{ base: 8, md: 10 }}
              px={{ base: '60px', md: '80px' }}
              w={{ base: '140px', md: '150px'}}
              boxShadow={{ base: '0px 4px 6px rgba(255, 165, 0, 0.5)', md: '0px 10px 15px rgba(255, 165, 0, 0.5)'}}
              bgGradient="linear(to-br, gray.800, gray.900)"
              _hover={{
                bgGradient: "linear(to-br, gray.600, gray.700)",
                transform: "scale(1.1)",
                zIndex: 1
              }}
              _active={{
                transform: "translateY(5px)",

              }}
              fontSize={{ base: 'md', md: 'sm' }}
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
