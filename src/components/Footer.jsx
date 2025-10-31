import React from 'react';
import { Box, Flex, Text, Link, HStack, Icon, Image } from '@chakra-ui/react';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import logo_vertical from '../assets/logo_vertical.png';


const Footer = () => {
  return (
    <Box 
    className='footer_cont'
    py={'60px'} 
    px={{ base: 6, md: 20 }} 
    bgGradient="linear(to-br,  gray.900, black)"
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
        gap={6}
      >
        <Image src={logo_vertical} alt="Logo" width={'70px'} />
        <Text color="whiteAlpha.700" fontSize="sm" textAlign="center">
          © {new Date().getFullYear()} LED SPORTS. Todos los derechos reservados.
        </Text>

        <HStack spacing={6}>
          <Link href="https://www.instagram.com" isExternal>
            <Icon as={FaInstagram} color="orange.400" boxSize={5} _hover={{ color: 'white' }} />
          </Link>
          <Link href="https://www.tiktok.com" isExternal>
            <Icon as={FaTiktok} color="orange.400" boxSize={5} _hover={{ color: 'white' }} />
          </Link>
          <Link href="https://wa.me/5491122334455" isExternal>
            <Icon as={FaWhatsapp} color="orange.400" boxSize={5} _hover={{ color: 'white' }} />
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
