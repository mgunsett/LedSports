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
    <Box 
      id="contacto" 
      py={20}
      bg="gradient-to-b from-black to-gray-900"
      position="relative"
      overflow="hidden"
    >

      <Flex
        position="relative"
        z={10}
        maxW="7xl"
        mx="auto"
        px={4}
        sm={6}
        lg={8}
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
        >
          <Heading fontSize={"4xl"} md={"5xl"} fontWeight="bold" mb={4}>
            Contacto
          </Heading>
          <Text fontSize="lg" maxW="3xl" mx="auto">
            ¿Listo para llevar tu marca deportiva al siguiente nivel? Contáctanos y comencemos a trabajar juntos.
          </Text>
        </MotionBox>

        <Flex
        justifyContent={'space-around'} 
        maxW="5xl"
        mx="auto"
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
              bg='gradient-to-br from-gray-800 to-gray-900'
              border='border-orange-500/20'
              hover={{
                borderColor: 'orange-500/50',
                shadow: 'shadow-xl shadow-orange-500/20',
                cursor: 'pointer'
              }}
              rounded='rounded-2xl'
              p='p-8'
              textAlign='text-center'
            >
              <Flex 
                bg='gradient-to-br from-orange-600 to-orange-500'
                w="16"
                h="16"
                rounded="xl"
                flex="flex"
                items="items-center"
                justify="justify-center"
                mx="mx-auto"
                mb="mb-4"
                shadow="shadow-lg shadow-orange-500/50"
              >
                <method.icon 
                w="16"
                h="16"
                color="white"
                />
              </Flex>
              <Heading fontSize="xl" fontWeight="bold" mb={2} color="white">{method.title}</Heading>
              <Text fontSize="lg" color="orange-500">{method.value}</Text>
            </MotionBox>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Contact;