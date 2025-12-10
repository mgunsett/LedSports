import React from 'react';
import { Box, Flex, Text, Link, HStack, Icon, Image } from '@chakra-ui/react';
import { FaInstagram, FaTiktok, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import logo_vertical from '../assets/logo_vertical.webp';


const Footer = () => {
  return (
    <Box 
    className='footer_cont'
    py={'70px'} 
    px={{ base: 6, md: 20 }} 
    bgGradient="linear(to-br,  gray.900, black)"
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
        gap={{ base: 12, md: 6 }}
      >
        <Link href="/" >
        <Image 
          src={logo_vertical} 
          alt="Logo" 
          width={{ base: '80px', md: '60px' }} 
          transition="all 0.4s ease"
          _hover={{ transform: 'scale(1.1)' }}
        />
        </Link>
        <Flex
          direction={'column'}
          alignItems={'center'}
          gap={2}
          mt={{ base: 4, md: 2 }}
          color="whiteAlpha.700"
        >
          <Text fontSize="12px" textAlign="center">
            © {new Date().getFullYear()} LED SPORTS. Todos los derechos reservados.
          </Text>
          <Flex direction={'row'} alignItems={'center'} gap={2} fontSize="12px">
            <Text>
              Desarrollo Web -
            </Text>
            <Link href={'https://www.linkedin.com/in/matiasgunsett/'} isExternal _hover={{ textDecoration: 'none' }}>
              <Flex
                direction={'row'}
                alignItems={'center'}
                gap={2}
                transition="all 0.3s ease"
                _hover={{
                  color: 'blue.600',
                }}
              >
                Matías Gunsett  <FaLinkedin size={'15px'} />
              </Flex>
            </Link>
          </Flex>
        </Flex> 
        <HStack spacing={{ base: 8, md: 6}}>
          <Link href="https://www.instagram.com/_ledsports/" isExternal>
            <Icon as={FaInstagram} color="orange.400" boxSize={{ base: 6, md: '20px'}} transition="all 0.4s ease" _hover={{ color: 'white', transform: 'scale(1.3)' }} />
          </Link>
          <Link href="https://www.tiktok.com/@ledsports" isExternal>
            <Icon as={FaTiktok} color="orange.400" boxSize={{ base: 6, md: '20px'}} transition="all 0.4s ease" _hover={{ color: 'white', transform: 'scale(1.3)' }} />
          </Link>
          <Link href="https://wa.me/5493516666666" isExternal>
            <Icon as={FaWhatsapp} color="orange.400" boxSize={{ base: 6, md: '20px'}} transition="all 0.4s ease" _hover={{ color: 'white', transform: 'scale(1.3)' }} />
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
