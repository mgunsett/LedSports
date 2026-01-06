import React, { useState } from 'react';
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
import { Link, useNavigate } from "react-router-dom";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const Services = () => {
  const navigate = useNavigate();
  const images = [service1, service3, service4];
  const [activeIndex, setActiveIndex] = useState(1); // start with middle image as center

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  const getPosition = (index) => {
    if (index === activeIndex) return 'center';
    if (index === (activeIndex - 1 + images.length) % images.length) return 'left';
    if (index === (activeIndex + 1) % images.length) return 'right';
    return 'hidden';
  };

  const variants = {
    center: {
      x: "0%",
      scale: 1.5,
      zIndex: 10,
      opacity: 1,
      filter: "drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.56))",
    },
    left: {
      x: "-100%",
      scale: 1,
      zIndex: 1,
      opacity: 1,
      filter: "brightness(0.7)",
    },
    right: {
      x: "100%",
      scale: 1,
      zIndex: 1,
      opacity: 1,
      filter: "brightness(0.7)",
    }
  };

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
        mb={{ base: 10, md: 20 }}
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
            w={{ base: "100%", md: "40%" }}
            p={10}
          >
            <Box
              position="relative"
              w="100%"
              h="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {images.map((img, index) => {
                const position = getPosition(index);
                const isCenter = position === 'center';
                return (
                  <MotionImage
                    key={index}
                    src={img}
                    position="absolute"
                    w={{ base: "115px", md: "200px" }}
                    h={{ base: "250px", md: "500px" }}
                    borderRadius="md"
                    initial={false}
                    animate={position}
                    variants={variants}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    objectFit={"contain"}
                    cursor={isCenter ? 'default' : 'pointer'}
                    onClick={!isCenter ? () => setActiveIndex(index) : undefined}
                  />
                );
              })}
            </Box>
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
          gap={{ base: '7px', sm: '12px', md: 8 }}
          mt={10}
          mb={{ base: '20px', md: '120px' }}
          mx={{ base: 'auto', md: 'auto' }}
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
              w={{ base: '355px', sm: '360px', md: '220px'}}
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
              w={{ base: '173px', sm: '175px', md: '150px'}}
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
              w={{ base: '173px', sm: '175px', md: '150px'}}
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
              w={{ base: '173px', sm: '175px', md: '150px'}}
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
              w={{ base: '173px', sm: '175px', md: '150px'}}
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
