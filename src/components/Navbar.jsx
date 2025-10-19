import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Link,
  Image,
} from '@chakra-ui/react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { motion } from 'framer-motion';
import logo_horizontal from '../assets/logo_horizontal.png';

// Motion wrapper
const MotionBox = motion(Box);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollY, setScrollY] = useState(0);

  // Detectar scroll para efecto blur
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#home' },
    { label: 'Nosotros', href: '#about' },
    { label: 'Servicios', href: '#services' },
    { label: 'Ya Confían', href: '#trust' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <MotionBox
      position="fixed"
      top="0"
      left="0"
      w="100%"
      zIndex="100"
      transition="all 0.3s ease"
      backdropFilter={scrollY > 30 ? 'blur(6px)' : 'none'}
      bg={scrollY > 30 ? 'rgba(0,0,0,0.6)' : 'transparent'}
      boxShadow={scrollY > 30 ? '0 2px 6px rgba(0,0,0,0.3)' : 'none'}
    >
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        px={{ base: 4, md: 12 }}
        maxW="1200px"
        mx="auto"
      >
        {/* Logo */}
        <Image
          src={logo_horizontal}
          alt="Marketing Deportivo"
          boxSize={{ base: '77px', md: '80px', lg: '100px' }}
          objectFit="contain"
          draggable="false"
          zIndex="1"
          cursor="pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />  

        {/* Menú Desktop */}
        <Flex
          display={{ base: 'none', md: 'flex' }}
          gap={8}
          align="center"
          fontWeight="medium"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              color="whiteAlpha.900"
              _hover={{ color: 'orange.400', textDecoration: 'none' }}
              transition="color 0.2s"
            >
              {link.label}
            </Link>
          ))}
        </Flex>

        {/* Botón menú móvil */}
        <IconButton
          aria-label="Abrir menú"
          icon={<RxHamburgerMenu size={24} />}
          variant="ghost"
          color="white"
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
        />
      </Flex>

      {/* Drawer móvil (Chakra UI v2) */}
      <Drawer variant="custom" placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="blackAlpha.900" color="white">
          <DrawerCloseButton />
          <DrawerBody>
            <VStack spacing={6} mt={16}> 
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  fontSize="lg"
                  _hover={{ color: 'orange.400' }}
                  onClick={onClose}
                >
                  {link.label}
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </MotionBox>
  );
};

export default Navbar;
