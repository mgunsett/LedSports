import React from 'react';
import {
  Flex,
  Heading,
  Text,
  Button,
  Box,
} from '@chakra-ui/react';
import { motion } from 'framer-motion'; 
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";


const MotionBox = motion(Box);

const Contact = () => {

  const contactMethods = [
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      value: 'Contáctanos',
    },
    {
      icon: CiMail,
      title: 'Email',
      value: 'led@mail.com',
    },
    {
      icon: FaInstagram,
      title: 'Instagram',
      value: '@ledsports',
    }
  ];

  return (
    <Box id="contacto" py={20}>
      <Flex
        z={10}
        maxW="5xl"
        mx="auto"
        px={4}
        flexDirection={"column"}
        alignItems={"center"}
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
          <Heading fontSize={"4xl"} md={"5xl"} fontWeight="bold" mb={4}>
            Contacto
          </Heading>
          <Text fontSize="lg" maxW="3xl" mx="auto">
            ¿Listo para llevar tu marca deportiva al siguiente nivel?
          </Text>

        </MotionBox>

        <Flex
        justifyContent={'space-between'} 
        gap={8}
          >
            {contactMethods.map((method, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              border='1px solid  orange'
              _hover={{
                boxShadow: "0px 10px 15px rgba(255, 165, 0, 0.5)",
                cursor: 'pointer'
              }}
              borderRadius='lg'
              py={'40px'}
              px={'120px'}
              textAlign='text-center'
              bgGradient="linear(to-br, gray.800, gray.900)"
            >
              <Flex 
                w={16}
                h={16}
                justify="center"
                alignItems="center"
                mx="auto"
                mb={8}
                borderRadius='lg'
                boxShadow="0px 10px 15px rgba(255, 165, 0, 0.5)"
                bgGradient="linear(to-br, orange.600, orange.500)"
              >
                <method.icon size={'30px'} color="white"/>
              </Flex>
              <Flex
                flexDirection="column"
                alignItems="center"
                textAlign="center"
              >
              <Heading fontSize="xl" fontWeight="bold" mb={2} color="white">{method.title}</Heading>
              <Text fontSize="lg" color= "white">{method.value}</Text>
              </Flex>
            </MotionBox>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Contact;