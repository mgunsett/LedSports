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
import service1 from '../assets/service1.webp';
import service3 from '../assets/service3.webp';
import service4 from '../assets/service4.webp';
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
        justifyContent={{ base: "center", md: "space-evenly" }}
        px={{ base: 2, md: 2 }}
        pt={6}
        gap={{ base: 10, md: 20 }}
        >
          <Flex
            width={{ base: "100%", md: "310px" }}
            h={{ base: "150px", md: "400px" }}
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
              fontSize={{ base: '15px', md: '18px' }}
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
            h={{ base: "350px", md: "750px" }}
            w={{ base: "100%", md: "40%"}}
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
          gap={{ base: '10px', md: 8 }}
          mt={10}
          mb={{ base: '20px', md: '120px' }}
          mx={{ base: 'auto'  , md: 10 }}
          w='100%'
        >
          <Link to="/deportistas">
            <Box
              onClick={() => navigate('/jugadores')}
              position="relative"
              px={9}
              py={6}
              bg="transparent"
              borderWidth="1px"
              borderColor="whiteAlpha.500"  
              borderRadius="lg"
              overflow="hidden"
              cursor="pointer"
              w={{ base: '360px', md: '200px'}}
              role="group"
              transition="all 0.6s ease-out"
              _hover={{
                borderColor: 'orange.400',
                transform: 'scale(1.02)',
                color: 'white',
              }}
            >
              {/* Barra izquierda gruesa con animación mejorada */}
              <Box
                position="absolute"
                top="0"
                left="0"
                w='4px'
                h='100%'
                bg="orange.400"
                boxShadow="0 0 20px rgba(251, 146, 60, 0.6)"
                transition="all 0.3s ease-out"
                _groupHover={{
                  width: '10px',
                }}
              />

              <Flex
                position="relative"
                align="center"
                gap={3}
              >
                <Text
                  color="orange.400"
                  fontWeight="bold"
                  fontSize="lg"
                  letterSpacing="wide"
                  _groupHover={{
                    transform: 'translateX(20px)',
                    color: 'white',
                  }}
                  transition="all 0.6s ease-out"
                >
                  Deportistas
                </Text>
              </Flex>
            </Box>
          </Link>
          <Link to="/entidades-deportivas">
            <Box
              onClick={() => navigate('/jugadores')}
              position="relative"
              px={8}
              py={4}
              bg="transparent"
              borderWidth="1px"
              borderColor="whiteAlpha.500"
              borderRadius="lg"
              overflow="hidden"
              cursor="pointer"
              w={{ base: '175px', md: '150px'}}
              role="group"
              transition="all 0.6s ease-out"
              _hover={{
                borderColor: 'orange.400',
                transform: 'scale(1.02)',
                color: 'white',
              }}
            >
              {/* Barra izquierda gruesa con animación mejorada */}
              <Box
                position="absolute"
                top="0"
                left="0"
                w='4px'
                h='100%'
                bg="orange.400"
                boxShadow="0 0 20px rgba(251, 146, 60, 0.6)"
                transition="all 0.3s ease-out"
                _groupHover={{
                  width: '10px',
                }}
              />

              <Flex
                position="relative"
                align="center"
                gap={3}
              >
                <Text
                  color="orange.400"
                  fontWeight="bold"
                  fontSize="lg"
                  letterSpacing="wide"
                  _groupHover={{
                    transform: 'translateX(10px)',
                    color: 'white',
                  }}
                  transition="all 0.6s ease-out"
                >
                  Entidades
                </Text>
              </Flex>
            </Box>
          </Link>
          <Link to="/agentes">
            <Box
              position="relative"
              px={8}
              py={4}
              bg="transparent"
              borderWidth="1px"
              borderColor="whiteAlpha.500"
              borderRadius="lg"
              overflow="hidden"
              cursor="pointer"
              w={{ base: '175px', md: '150px'}}
              role="group"
              transition="all 0.6s ease-out"
              _hover={{
                borderColor: 'orange.400',
                transform: 'scale(1.02)',
                color: 'white',
              }}
            >
              {/* Barra izquierda gruesa con animación mejorada */}
              <Box
                position="absolute"
                top="0"
                left="0"
                w='4px'
                h='100%'
                bg="orange.400"
                boxShadow="0 0 20px rgba(251, 146, 60, 0.6)"
                transition="all 0.3s ease-out"
                _groupHover={{
                  width: '10px',
                }}
              />

              <Flex
                position="relative"
                align="center"
                gap={3}
              >
                <Text
                  color="orange.400"
                  fontWeight="bold"
                  fontSize="lg"
                  letterSpacing="wide"
                  _groupHover={{
                    transform: 'translateX(10px)',
                    color: 'white',
                  }}
                  transition="all 0.6s ease-out"
                >
                  Agentes
                </Text>
              </Flex>
            </Box>
          </Link>
          <Link to="/eventos">
            <Box
              id='verMas'
              onClick={() => navigate('/jugadores')}
              position="relative"
              px={8}
              py={4}
              bg="transparent"
              borderWidth="1px"
              borderColor="whiteAlpha.500"
              borderRadius="lg"
              overflow="hidden"
              cursor="pointer"
              w={{ base: '175px', md: '150px'}}
              role="group"
              transition="all 0.6s ease-out"
              _hover={{
                borderColor: 'orange.400',
                transform: 'scale(1.02)',
                color: 'white',
              }}
            >
              {/* Barra izquierda gruesa con animación mejorada */}
              <Box
                position="absolute"
                top="0"
                left="0"
                w='4px'
                h='100%'
                bg="orange.400"
                boxShadow="0 0 20px rgba(251, 146, 60, 0.6)"
                transition="all 0.3s ease-out"
                _groupHover={{
                  width: '10px',
                }}
              />

              <Flex
                position="relative"
                align="center"
                gap={3}
              >
                <Text
                  color="orange.400"
                  fontWeight="bold"
                  fontSize="lg"
                  letterSpacing="wide"
                  _groupHover={{
                    transform: 'translateX(10px)',
                    color: 'white',
                  }}
                  transition="all 0.6s ease-out"
                >
                 Eventos
                </Text>
              </Flex>
            </Box>
          </Link>
          <Link to="/marcas">
            <Box
              id='verMas'
              onClick={() => navigate('/jugadores')}
              position="relative"
              px={8}
              py={4}
              bg="transparent"
              borderWidth="1px"
              borderColor="whiteAlpha.500"
              borderRadius="lg"
              overflow="hidden"
              cursor="pointer"
              w={{ base: '175px', md: '150px'}}
              role="group"
              transition="all 0.6s ease-out"
              _hover={{
                borderColor: 'orange.400',
                transform: 'scale(1.02)',
                color: 'white',
              }}
            >
              {/* Barra izquierda gruesa con animación mejorada */}
              <Box
                position="absolute"
                top="0"
                left="0"
                w='4px'
                h='100%'
                bg="orange.400"
                boxShadow="0 0 20px rgba(251, 146, 60, 0.6)"
                transition="all 0.3s ease-out"
                _groupHover={{
                  width: '10px',
                }}
              />

              <Flex
                position="relative"
                align="center"
                gap={3}
              >
                <Text
                  color="orange.400"
                  fontWeight="bold"
                  fontSize="lg"
                  letterSpacing="wide"
                  _groupHover={{
                    transform: 'translateX(10px)',
                    color: 'white',
                  }}
                  transition="all 0.6s ease-out"
                >
                  Marcas
                </Text>
              </Flex>
            </Box>  
          </Link>
        </Flex>
      </MotionBox>
    </Box>
  );
};

export default Services;
