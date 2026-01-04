import React from 'react';
import {
  Flex,
  Heading,
  Text,
  Box,
  Icon,
  useBreakpointValue
} from '@chakra-ui/react';
import { motion } from 'framer-motion'; 
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Link as RouterLink } from 'react-router-dom';
import './Contact.css';


const MotionBox = motion(Box);

function ContactButton({ icon, title, subtitle, to, external }) {
  return (
    <MotionBox
      as={external ? "a" : Link}
      href={external ? to : undefined}
      to={!external ? to : undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      w="100%"
      p="20px 24px"
      display="flex"
      alignItems="center"
      gap="16px"
      borderRadius="12px"
      border="1px solid rgba(255, 107, 53, 0.3)"
      bg="rgba(255,255,255,0.05)"
      color="white"
      position="relative"
      overflow="hidden"
      whileHover={{
        x: 8,
        boxShadow: "0 5px 20px rgba(255,107,53,0.3)",
        borderColor: "#ff6b35",
      }}
    >
      {/* Hover background */}
      <Box
        position="absolute"
        inset="0"
        bgGradient="linear(to-r, rgba(255,107,53,0.1), transparent)"
        w="0%"
        _groupHover={{ w: "100%" }}
        transition="width 0.3s ease"
      />

      {/* ICON */}
      <MotionBox
        w="48px"
        h="48px"
        borderRadius="10px"
        bgGradient="linear(135deg, #ff6b35, #ff8c42)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="1.5rem"
        flexShrink={0}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        {icon}
      </MotionBox>

      {/* TEXT */}
      <Box flex="1">
        <Text fontWeight="600" fontSize="1.1rem">
          {title}
        </Text>
        <Text fontSize="0.9rem" color="#aaa">
          {subtitle}
        </Text>
      </Box>

      {/* ARROW */}
      <MotionBox
        fontSize="1.2rem"
        color="#aaa"
        whileHover={{ x: 4, color: "#ff6b35" }}
      >
        →
      </MotionBox>
    </MotionBox>
  );
}

const Contact = ({ path }) => {

  const isMobile = useBreakpointValue({ base: true, md: false });

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
        mt={12}
        mb={{ base: 2, md: 20 }}
      >
        <MotionBox
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          mb={16}
          textAlign="center"
          color="white"
        >
          <Heading as="h2" fontSize={{ base: '35px', md: '4xl' }} fontWeight="bold" mb={4}>
            Cont<Text as="span" color="orange.600">acto</Text>
          </Heading>
          <Text fontSize="md" maxW="2xl" mx="auto">
            {selectedText}
          </Text>
        </MotionBox>

        <Flex
        w={{base: '90%', md: '70%'}}
        flexDirection={{base:'column', md: 'row'}}
        justifyContent={'space-evenly'} 
        gap={{ base: 4, md: 10  }}
        >
            {contactMethods.map((method, index) => (
              <ContactButton
                key={index}
                icon={<Icon as={method.icon} />}
                title={method.title}
                subtitle={method.value}
                to={method.href}
                external={true}
              />
          ))}
        </Flex>
      </Flex>
  );
};

export default Contact;