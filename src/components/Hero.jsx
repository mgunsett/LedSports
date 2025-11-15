import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  Image,
  Link,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import logo_vertical from '../assets/logo_vertical.png';
import fondo_luz from '../assets/fondo_luz.png';
import { GoArrowRight } from "react-icons/go";
import { Link as RouterLink } from 'react-router-dom';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const Hero = () => {
  return (
    <Flex
      id="home"
      minH={{ base: '150vh', md: '100vh' }}
      align="center"
      justify="center"
      direction={{ base: 'column', md: 'row' }}
      bgGradient="linear(to-b, blackAlpha.900, blackAlpha.800)"
      px={{ base: 6, md: 20 }}
      overflow="hidden"
    >
      {/* Texto principal */} 
      <VStack
        align={{ base: 'center', md: 'start' }}
        spacing={4}
        maxW={{ base: '300px', md: '600px' }}
        textAlign={{ base: 'start', md: 'left' }}
      >
        <MotionHeading
          as="h1"
          fontSize={{ base: '5xl', md: '5xl', lg: '6xl' }}
          fontWeight="bold"
          color="white"
          lineHeight="shorter"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Potenciamos tu <Text fontSize={{ base: '5xl', md: '5xl', lg: '7xl' }} as="span" color="orange.400">Marca Deportiva</Text>
        </MotionHeading>

        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        > 
        <Link href="#servicesButton">
          <Button
            size="lg"
            colorScheme="orange"
            bg="orange.500"
            fontFamily="Stack Sans Headline, sans-serif"
            _hover={{ 
                transform: 'scale(1.05)',
                boxShadow: '0px 0px 12px 1px rgba(245,160,15,0.56)',
                WebkitBoxShadow: '0px 0px 12px 1px rgba(245,160,15,0.56)',
                MozBoxShadow: '0px 0px 12px 1px rgba(245,160,15,0.56)',
            }}
            px={{ base: '100px', md: '8' }}
            py={6}
            borderRadius={{ base: 'xl', md: 'full' }}
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
            }}
            transition="all 0.3s ease-in-out"
          >
            Servicios &nbsp;&nbsp; <GoArrowRight />
                      {/* ESPACIO */}
          </Button>
        </Link>
        </MotionBox>
      </VStack>

      {/* Imagen o Ilustración */}
      <MotionBox
        mt={{ base: 10, md: 0 }}  
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={fondo_luz}
          alt="Marketing Deportivo"
          boxSize={{ base: '300px', md: '450px', lg: '600px' }}
          objectFit="contain"
          draggable="false"
          position="absolute"
          top={{ base: '498px', md: '10px' }}
          right={{ base: '-50px', md: '180px' }}
          zIndex="0"
          opacity="0.5"
        />
      </MotionBox>
       <MotionBox
         ml={{ base: 0, md: 20 }}
         initial={{ opacity: 0, x: 40 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 1 }}
       >
        <Image
          src={logo_vertical}
          alt="Marketing Deportivo"
          boxSize={{ base: '400px', md: '450px', lg: '500px' }}
          objectFit="contain"
          draggable="false"
          zIndex="1"
        />
        {/* <MotionBox
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Box 
                position="absolute" 
                bottom="-6" 
                right="-8" 
                bg="orange.500" 
                p={{ base: '12px', md: '20px' }}
                textAlign="center"
                borderRadius="2xl"
                boxShadow="0px 0px 12px 1px rgba(245,160,15,0.56)"
                opacity="0.9"
                mr={{ base: '12px', md: 0 }}
                >
                <Text fontSize="4xl" fontWeight="bold" color="white">50+</Text>
                <Text fontSize="sm" color="white/90">Deportistas Activos</Text>
              </Box>
            </MotionBox> */}
        </MotionBox>
    </Flex>
  );
};

export default Hero;
