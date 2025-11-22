import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  VStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import nosotros_photo from '../assets/nosotros_photo.svg';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const About = () => {
  return (
    <Flex
      id="about"
      direction={{ base: 'column-reverse', md: 'row' }}
      align="center"
      justify={{ base: 'center', md: 'space-evenly' }}
      py={{ base: 0, md: 10 }}
      px={{ base: 6, md: 20 }}
      gap={{ base: 10, md: 2 }}
      mb={{ base: 12, md: 0 }}
      bg="black"
      overflow="hidden"
    >
      {/* Imagen de apoyo */}
      <MotionBox
        w="100%"
        maxW={{ base: '320px', md: '400px' }}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src={nosotros_photo}
          alt="Equipo de marketing deportivo"
          borderRadius="2xl"
          objectFit="cover"
          boxShadow="xl"
          w="100%"
          maxW={{ base: '320px', md: '400px' }}
        />
      </MotionBox>

      {/* Texto de descripción */}
      <VStack
        align={{ base: 'flex-end', md: 'start' }}
        spacing={{ base: 2,  md: 5 }}
        textAlign={{ base: 'end', md: 'left' }}
        maxW="350px"
        w="95%"
      >
        <MotionHeading
          fontSize={{ base: '4xl', md: '3xl' }}
          fontWeight="bold"
          color="white"
          lineHeight="shorter"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Text fontSize={{ base: '4xl', md: '3xl' }}>Sobre </Text><Text as="span" fontFamily="Stack Sans Headline, sans-serif" color="orange.400">LED</Text>SPORTS
        </MotionHeading>
        <MotionText
          color="whiteAlpha.800"
          fontSize={{ base: '15px', md: '20px' }}
          lineHeight={{ base: 1.5 , md: 1.7 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Somos una agencia de marketing deportivo, que nos encargamos de crear & potenciar la marca de deportistas y entidades deportivas, a través de la profesionalización de sus redes sociales.
        </MotionText>
      </VStack>
    </Flex>
  );
};

export default About;
