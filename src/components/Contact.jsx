import React from 'react';
import {
  Flex,
  Heading,
  Text,
  Box,
  Icon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion'; 
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { Link as RouterLink } from 'react-router-dom';
import './Contact.css';


const MotionBox = motion(Box);

const Contact = ({ path }) => {

  const contactText = {
    home: 'Consulta por el Plan que más se ajuste a tus necesidades.',
    deportistas: 'Consulta por nuestros packs.',
    agentes: 'Solicita tu presupuesto a la medida de tu agencia.',
  };

  const currentPath = path || (typeof window !== 'undefined' ? window.location.pathname : '/');

  let pageKey = 'home';
  if (currentPath.includes('deportistas')) pageKey = 'deportistas';
  if (currentPath.includes('agentes')) pageKey = 'agentes';

  const selectedText = contactText[pageKey];

  const contactMethods = [
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      value: 'Contáctanos',
      href: 'https://wa.me/5493516666666',
    },
    {
      icon: FaInstagram,
      title: 'Instagram',
      value: '@ledsports',
      href: 'https://www.instagram.com/_ledsports/',
    }
  ];

  return (
      <Flex
        id='contact'
        justifyContent={'center'}
        flexDirection={"column"}
        alignItems={"center"}
        borderTop={"1px solid orange"}
        w={{ base: '80%', md: '60%' }}
        h="400px"
        mx={'auto'}
        mt={40}
        mb={{ base: 2, md: 20 }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          mb={16}
          textAlign="center"
          color="white"
        >
          <Heading as="h2" fontSize={{ base: '35px', md: '5xl' }} fontWeight="bold" mb={4}>
            Cont<Text as="span" color="orange.600">acto</Text>
          </Heading>
          <Text fontSize="xl" maxW="2xl" mx="auto">
            {selectedText}
          </Text>
        </MotionBox>

        <Flex
        justifyContent={'space-evenly'} 
        gap={10}
        >
            {contactMethods.map((method, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <RouterLink to={method.href} target="_blank">
              <Flex 
                w={{ base: '100px', md: '120px' }}
                h={{ base: '70px', md: '120px' }}
                justify="center"
                alignItems="center"
                mx="auto"
                borderRadius='lg'
                bgGradient="linear(to-br, orange.600, orange.500)"
                transition="all 0.4s ease"
                _hover={{
                boxShadow: "0px 10px 15px rgba(255, 165, 0, 0.5)",
                cursor: 'pointer',
                transform: "scale(1.1)",
              }} 
              >
                <Icon as={method.icon} color="white" fontSize={{ base: '25px', md: '40px' }} />
              </Flex>
              </RouterLink>
            </MotionBox>
          ))}
        </Flex>
      </Flex>
  );
};

export default Contact;