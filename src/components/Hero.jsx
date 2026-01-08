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
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import logo_vertical from '../assets/logo_vertical.webp';
import fondo_luz from '../assets/fondo_luz.webp';
import { GoArrowRight } from "react-icons/go";
import '../components/Hero.css';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const Hero = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      id="home"
      minH={{ base: '110vh', md: '100vh' }}
      minW={{ base: '100%', md: '75%' }}
      align="center"
      justify="center"
      direction={{ base: 'column', md: 'row' }}
      bgGradient="linear(to-b, blackAlpha.900, blackAlpha.800)"
      px={{ base: 2, md: 20 }}
      pt={{ base: 40, md: 0 }}
      pb={{ base: 20, md: 0 }}
      overflow="hidden"
      gap={{ base: 2, md: 6 }}
    >
      {/* Texto principal */} 
      <VStack
        align={{ base: 'center', md: 'start' }}
        spacing={4}
        maxW={{ base: '300px', md: '500px' }}
        textAlign={{ base: 'start', md: 'left' }}
      >
        <MotionHeading
          as="h1"
          fontSize={{ base: '43px', md: '40px', lg: '40px' }}
          fontWeight="bold"
          color="white"
          lineHeight="shorter"
          initial={isMobile ? { opacity: 0, y: 10 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.6 : 0.8 }}
        >
          Potenciamos tu <Text fontSize={{ base: '47px', md: '40px', lg: '50px' }}  as="span" color="orange.400">Marca Deportiva</Text>
        </MotionHeading>

        <MotionBox
          initial={isMobile ? { opacity: 0.5 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: isMobile ? 0.3 : 0.6, duration: isMobile ? 0.6 : 0.8 }}
          w="100%"
        > 
        <Link href="#servicesButton">
          <Button
            size={{ base: 'lg', md: 'md' }}
            colorScheme="orange"
            bg="orange.500"
            fontFamily="Stack Sans Headline, sans-serif"
            _hover={{ 
                transform: 'scale(1.05)',
                boxShadow: '0px 0px 12px 1px rgba(245,160,15,0.56)',
                WebkitBoxShadow: '0px 0px 12px 1px rgba(245,160,15,0.56)',
                MozBoxShadow: '0px 0px 12px 1px rgba(245,160,15,0.56)',
            }}
            w={{ base: '100%', md: 'auto' }}
            px={{ base: 20, md: 8 }}
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
        initial={isMobile ? { opacity: 0.5 } : { opacity: 0 }}
        animate={isMobile ? { opacity: 0.5 } : { opacity: 1 }}
        transition={{ duration: isMobile ? 0 : 1 }}
      >
        <Image
          className='fondo_luz'
          src={fondo_luz}
          alt="Marketing Deportivo"
          boxSize={{ base: '300px', sm: '400px', md: '400px'}}
          objectFit="contain"
          draggable="false"
          position="absolute"
          top={{ base: '450px', md: '60px' }}
          right={{ base: '0px',sm: '20px', md: '120px' }}
          zIndex="0"
          opacity="0.5"
          w={"170px"}
          h={"170px"}
        />
      </MotionBox>
       <MotionBox
         ml={{ base: 0, md: 20 }}
         initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: isMobile ? 0 : 1 }}
       >
        <Image
          className='logo_vertical'
          src={logo_vertical}
          alt="Marketing Deportivo"
          boxSize={{ base: '400px', sm: '390px', md: '400px', lg: '400px' }}
          objectFit="contain"
          draggable="false"
          zIndex="1"
        />
        </MotionBox>
    </Flex>
  );
};

export default Hero;
