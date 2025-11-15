import React from 'react';
import {
  Flex,
  Heading,
  Text,
  Box,
} from '@chakra-ui/react';
import { motion } from 'framer-motion'; 
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { Link as RouterLink } from 'react-router-dom';
import './Contact.css';


const MotionBox = motion(Box);

const Contact = () => {

  const contactMethods = [
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      value: 'Contáctanos',
      href: 'https://wa.me/5493516666666',
    },
    {
      icon: CiMail,
      title: 'Email',
      value: 'led@mail.com',
      href: 'mailto:led@mail.com',
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
        w={{ base: '100%', md: '60%' }}
        h={{ base: '500px', md: '400px' }}
        mx={'auto'}
        mt={40}
        mb={20}
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
          <Text fontSize="xl" maxW="3xl" mx="auto">
            Consultá por el Plan que más se ajuste a tus necesidades.
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
                w={'120px'}
                h={'120px'}
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
                <method.icon size={'40px'} color="white"/>
              </Flex>
              </RouterLink>
            </MotionBox>
          ))}
        </Flex>
      </Flex>
  );
};

export default Contact;