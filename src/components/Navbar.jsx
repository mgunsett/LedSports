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
import { Link as RouterLink, useNavigate } from 'react-router-dom';

// Motion wrapper
const MotionBox = motion(Box);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  // Detectar scroll para efecto blur
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Nosotros', href: '#about' },
    { label: 'Servicios', href: '#servicesButton' },
    { label: 'Nos eligieron', href: '/jugadores' },
    { label: 'Contacto', href: '#contact' },
  ];

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('servicesButton');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNosotrosClick = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToAbout();
      }, 100);
    } else {
      scrollToAbout();
    }
  };

  const handleServiciosClick = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToServices();
      }, 100);
    } else {
      scrollToServices();
    }
  };

  const handleContactoClick = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToContact();
      }, 100);
    } else {
      scrollToContact();
    }
  };

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
        maxW={{ base: '100%', md: '75%' }}
        mx="auto"
      >
        {/* Logo */}
        <RouterLink to="/">
        <Image
          src={logo_horizontal}
          alt="Marketing Deportivo"
          boxSize={{ base: '77px', md: '80px', lg: '80px' }}
          objectFit="contain"
          draggable="false"
          zIndex="1"
          cursor="pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />  
        </RouterLink>

        {/* Menú Desktop */}
        <Flex
          display={{ base: 'none', md: 'flex' }}
          gap={8}
          align="center"
          fontWeight="medium"
        >
          {navLinks.map((link) => (
            link.label === 'Nosotros' ? (
              <Link
                key={link.href}
                color="whiteAlpha.900"
                _hover={{ color: 'orange.400', textDecoration: 'none' }}
                transition="color 0.2s"
                fontSize={{ base: '10px', md: '15px' }}
                onClick={handleNosotrosClick}
              >
                {link.label}
              </Link>
            ) : link.label === 'Servicios' ? (
              <Link
                key={link.href}
                color="whiteAlpha.900"
                _hover={{ color: 'orange.400', textDecoration: 'none' }}
                transition="color 0.2s"
                fontSize={{ base: '10px', md: '15px' }}
                onClick={handleServiciosClick}
              >
                {link.label}
              </Link>
            ) : link.label === 'Contacto' ? (
              <Link
                key={link.href}
                color="whiteAlpha.900"
                _hover={{ color: 'orange.400', textDecoration: 'none' }}
                transition="color 0.2s"
                fontSize={{ base: '10px', md: '15px' }}
                onClick={handleContactoClick}
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.href}
                as={RouterLink}
                to={link.href}
                color="whiteAlpha.900"
                _hover={{ color: 'orange.400', textDecoration: 'none' }}
                transition="color 0.2s"
                fontSize={{ base: '10px', md: '15px' }}
              >
                {link.label}
              </Link>
            )
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
          _hover={{ color: 'orange.400' }}
          transition="color 0.2s"
          _active={{ color: 'orange.400' }}
        />
      </Flex>
      <Drawer 
      variant="custom" 
      placement="right" 
      onClose={onClose}
      isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent bg="blackAlpha.900" color="white">
          <DrawerCloseButton  _hover={{ color: 'red' }}/>
          <DrawerBody>
            <VStack spacing={6} mt={16}> 
              {navLinks.map((link) => (
                link.label === 'Nosotros' ? (
                  <Link
                    key={link.href}
                    fontSize="lg"
                    _hover={{ color: 'orange.400' }}
                    onClick={() => {
                      handleNosotrosClick();
                      onClose();
                    }}
                  >
                    {link.label}
                  </Link>
                ) : link.label === 'Servicios' ? (
                  <Link
                    key={link.href}
                    fontSize="lg"
                    _hover={{ color: 'orange.400' }}
                    onClick={() => {
                      handleServiciosClick();
                      onClose();
                    }}
                  >
                    {link.label}
                  </Link>
                ) : link.label === 'Contacto' ? (
                  <Link
                    key={link.href}
                    fontSize="lg"
                    _hover={{ color: 'orange.400' }}
                    onClick={() => {
                      handleContactoClick();
                      onClose();
                    }}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <Link
                    key={link.href}
                    as={RouterLink}
                    to={link.href}
                    fontSize="lg"
                    _hover={{ color: 'orange.400' }}
                    onClick={onClose}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </MotionBox>
  );
};

export default Navbar;
