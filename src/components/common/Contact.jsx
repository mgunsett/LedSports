import { Box, Flex, Heading, Icon, SimpleGrid, Text } from '@chakra-ui/react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { GoArrowUpRight } from 'react-icons/go';

const MotionBox = motion(Box);
const EASE_OUT = [0.23, 1, 0.32, 1];
const LINE = 'rgba(255,255,255,.12)';
const hoverOnly = (styles) => ({ '@media (hover: hover) and (pointer: fine)': { '&:hover': styles } });

const CONTACT_TEXT = {
  home: 'Consulta por el plan que más se ajuste a tus necesidades.',
  deportistas: 'Consulta por nuestros packs.',
  agentes: 'Solicita tu presupuesto a la medida de tu agencia.',
};

const CONTACT_METHODS = [
  { icon: FaWhatsapp, label: 'WhatsApp', value: 'Escribinos directo', href: 'https://wa.link/v8wl84' },
  { icon: FaInstagram, label: 'Instagram', value: '@_ledsports', href: 'https://www.instagram.com/_ledsports/' },
];

const ContactCard = ({ icon, label, value, href }) => (
  <Flex
    as="a"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`${label}: ${value}`}
    align="center"
    gap={{ base: 4, md: 6 }}
    p={{ base: 5, md: 8 }}
    borderRadius="2xl"
    border={`1px solid ${LINE}`}
    bg="whiteAlpha.50"
    color="white"
    transition="border-color 200ms ease, background-color 200ms ease, transform 160ms cubic-bezier(0.23, 1, 0.32, 1)"
    _active={{ transform: 'scale(0.98)' }}
    _focusVisible={{ outline: '2px solid', outlineColor: 'orange.400', outlineOffset: '3px' }}
    sx={{
      '& .contact-arrow': { transition: 'transform 200ms cubic-bezier(0.23, 1, 0.32, 1), background-color 200ms ease, border-color 200ms ease' },
      ...hoverOnly({
        borderColor: 'orange.500',
        bg: 'whiteAlpha.100',
        '& .contact-arrow': { bg: 'orange.500', borderColor: 'orange.500', transform: 'translate(2px, -2px)' },
      }),
    }}
  >
    <Flex
      flexShrink={0}
      align="center"
      justify="center"
      boxSize={{ base: 12, md: 16 }}
      borderRadius="xl"
      bg="orange.500"
      fontSize={{ base: '2xl', md: '3xl' }}
    >
      <Icon as={icon} />
    </Flex>
    <Box flex="1" minW={0}>
      <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="700" fontStyle="italic" letterSpacing="-0.01em" lineHeight="1.1">
        {label}
      </Text>
      <Text mt={1} color="whiteAlpha.700" fontSize={{ base: 'sm', md: 'md' }} noOfLines={1}>
        {value}
      </Text>
    </Box>
    <Flex
      className="contact-arrow"
      flexShrink={0}
      align="center"
      justify="center"
      boxSize={{ base: 10, md: 12 }}
      borderRadius="full"
      border={`1px solid ${LINE}`}
      fontSize={{ base: 'lg', md: 'xl' }}
    >
      <Icon as={GoArrowUpRight} />
    </Flex>
  </Flex>
);

const Contact = ({ path }) => {
  const reduceMotion = useReducedMotion();
  const currentPath = path || (typeof window !== 'undefined' ? window.location.pathname : '/');

  let pageKey = 'home';
  if (currentPath.includes('deportistas')) pageKey = 'deportistas';
  if (currentPath.includes('agentes')) pageKey = 'agentes';

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.4 },
    transition: { duration: 0.6, delay, ease: EASE_OUT },
  });

  return (
    <Box
      as="section"
      id="contact"
      aria-label="Contacto"
      w="100%"
      bg="black"
      color="white"
      px={{ base: '20px', md: 'clamp(20px, 6vw, 96px)' }}
      pt={{ base: 10, md: 16 }}
      pb={{ base: 16, md: 24 }}
    >
      <Box h="1px" bgGradient="linear(to-r, orange.500, transparent)" mb={{ base: 10, md: 16 }} />

      <MotionBox {...reveal()} mb={{ base: 8, md: 'clamp(32px, 4vw, 56px)' }}>
        <Heading
          as="h2"
          m="14px 0 0"
          fontSize={{ base: '44px', md: 'clamp(42px, 6vw, 90px)' }}
          lineHeight=".92"
          fontWeight="700"
          letterSpacing="-0.03em"
        >
          Trabajemos{' '}
          <Text as="em" fontStyle="italic" color="orange.400">
            juntos
          </Text>
        </Heading>
        <Text mt="16px" maxW="46ch" color="whiteAlpha.700" fontSize={{ base: '15px', md: 'clamp(15px, 1.25vw, 18px)' }} lineHeight="1.6">
          {CONTACT_TEXT[pageKey]}
        </Text>
      </MotionBox>

      <MotionBox {...reveal(0.1)}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 4, md: 6 }}>
          {CONTACT_METHODS.map((method) => (
            <ContactCard key={method.label} {...method} />
          ))}
        </SimpleGrid>
      </MotionBox>
    </Box>
  );
};

export default Contact;
