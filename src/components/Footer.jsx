import React from 'react';
import { Box, Flex, Text, Link, HStack, Icon } from '@chakra-ui/react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="black" py={10} px={{ base: 6, md: 20 }}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
        gap={6}
      >
        <Text color="whiteAlpha.700" fontSize="sm" textAlign="center">
          © {new Date().getFullYear()} LED SPORTS. Todos los derechos reservados.
        </Text>

        <HStack spacing={6}>
          <Link href="https://www.instagram.com" isExternal>
            <Icon as={FaInstagram} color="orange.400" boxSize={5} _hover={{ color: 'white' }} />
          </Link>
          <Link href="https://www.facebook.com" isExternal>
            <Icon as={FaFacebook} color="orange.400" boxSize={5} _hover={{ color: 'white' }} />
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
