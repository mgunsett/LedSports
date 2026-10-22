import { useState } from 'react';
import { Box, Flex, Heading, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';
import serviceDeportistas from '@/assets/servicios/service1.webp';
import serviceEntidades from '@/assets/banners/entidades_deportivas.webp';
import serviceAgentes from '@/assets/agentes/agentes1.webp';
import serviceEventos from '@/assets/banners/eventos.webp';
import serviceMarcas from '@/assets/banners/marcas.webp';


const SERVICES = [
  {
    key: 'deportistas',
    title: 'Deportistas',
    to: '/deportistas',
    image: serviceDeportistas,
    description: 'Marca personal para deportistas: más de 350 nos eligieron desde 2020.',
  },
  {
    key: 'entidades',
    title: 'Entidades',
    to: '/entidades-deportivas',
    image: serviceEntidades,
    description: 'Identidad digital para clubes, academias, ligas y organizaciones.',
  },
  {
    key: 'agentes',
    title: 'Agentes',
    to: '/agentes',
    image: serviceAgentes,
    description: 'La imagen de tus representados y de tu agencia, en un mismo nivel.',
  },
  {
    key: 'eventos',
    title: 'Eventos',
    to: '/eventos',
    image: serviceEventos,
    description: 'Organización, comunicación y cobertura de eventos deportivos.',
  },
  {
    key: 'marcas',
    title: 'Marcas',
    to: '/marcas',
    image: serviceMarcas,
    description: 'Unimos marcas y deportistas para generar impacto real.',
  },
];

const EASE_OUT = [0.23, 1, 0.32, 1];
const LINE = 'rgba(255,255,255,.12)';
const MotionBox = motion(Box);

const hoverOnly = (styles) => ({ '@media (hover: hover) and (pointer: fine)': { '&:hover': styles } });

const ServiceButton = ({ to }) => (
  <Flex
    as={RouterLink}
    to={to}
    flexShrink={0}
    align="center"
    gap="10px"
    minH="46px"
    px="20px"
    borderRadius="lg"
    bg="orange.500"
    color="white"
    fontWeight="600"
    fontSize="15px"
    transition="background-color 200ms ease, transform 160ms cubic-bezier(0.23, 1, 0.32, 1)"
    _active={{ transform: 'scale(0.97)' }}
    _focusVisible={{ outline: '2px solid', outlineColor: 'orange.400', outlineOffset: '3px' }}
    sx={{
      '& svg': { transition: 'transform 200ms cubic-bezier(0.23, 1, 0.32, 1)' },
      ...hoverOnly({ bg: 'orange.400', '& svg': { transform: 'translateX(3px)' } }),
    }}
  >
    Ver servicio
  </Flex>
);

// Imagen contenida sobre su propia versión desenfocada: funciona con mockups verticales y horizontales
const ServiceMedia = ({ src, alt }) => (
  <Box position="relative" overflow="hidden" bg="#0a0a0a" aspectRatio={{ base: '4 / 4.4', md: '4 / 4.3' }}>
    <Image
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      position="absolute"
      inset="-10%"
      w="120%"
      h="120%"
      maxW="none"
      objectFit="cover"
      filter="blur(36px) brightness(.38) saturate(1.2)"
    />
    <Image
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      draggable={false}
      position="relative"
      w="100%"
      h="100%"
      objectFit="contain"
      p="6%"
    />
  </Box>
);

const Intro = () => (
  <>
    
    <Heading
      as="h2"
      m="14px 0 40px 0"
      fontSize={{ base: '44px', md: '70px' }}
      lineHeight=".92"
      fontWeight="700"
      letterSpacing="-0.03em"
      color="white"
    >
      Nuestros{'  '} 
      <Text as="em" fontStyle="italic" color="orange.400">
        Servicios
      </Text>
    </Heading>
  </>
);

const Services = () => {
  const [active, setActive] = useState(0);
  const isDesktop = useBreakpointValue({ base: false, md: true }, { ssr: false }) ?? false;
  const reduceMotion = useReducedMotion();

  const jumpTo = (event, index) => {
    event.preventDefault();
    document.getElementById(`service-${SERVICES[index].key}`)?.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'center',
    });
  };

  return (
    <Box
      as="section"
      id="services"
      aria-label="Servicios"
      position="relative"
      bg="black"
      display="grid"
      gridTemplateColumns={{ base: '1fr', md: 'minmax(0, .9fr) minmax(0, 1.1fr)' }}
      px={{ base: '20px', md: 'clamp(20px, 6vw, 96px)' }}
      py={{ base: 'clamp(40px, 8vw, 80px)', md: '60px' }} 
    >
      {/* Ancla que usa el Navbar ("Servicios") */}
      <Box id="servicesButton" position="absolute" top="0" left="0" />

      {/* Columna fija */}
      <Flex
        direction="column"
        justify="center"
        position={{ base: 'relative', md: 'sticky' }}
        top="0"
        h={{ base: 'auto', md: '100svh' }}
        pt={{ base: '96px', md: '90px' }}
        pb={{ base: '10px', md: '40px' }}
      >
        <Intro />

        {isDesktop && (
          <Box as="ul" listStyleType="none" m="clamp(24px, 5vh, 48px) 0 0" p="0" borderTop={`1px solid ${LINE}`}>
            {SERVICES.map((service, i) => {
              const isActive = active === i;
              return (
                <Box as="li" key={service.key}>
                  <Flex
                    as="a"
                    href={`#service-${service.key}`}
                    onClick={(e) => jumpTo(e, i)}
                    aria-current={isActive ? 'true' : undefined}
                    align="center"
                    justify="space-between"
                    gap="16px"
                    py="16px"
                    px="4px"
                    borderBottom={`1px solid ${LINE}`}
                    fontSize="clamp(20px, 1.9vw, 28px)"
                    fontWeight="700"
                    color={isActive ? 'white' : 'whiteAlpha.500'}
                    transition="color 260ms ease"
                    _focusVisible={{ outline: '2px solid', outlineColor: 'orange.400', outlineOffset: '2px' }}
                    sx={hoverOnly({ color: 'white' })}
                  >
                    {service.title}
                    <Box
                      as="span"
                      color="orange.400"
                      fontSize="20px"
                      opacity={isActive ? 1 : 0}
                      transform={isActive ? 'none' : 'translateX(-6px)'}
                      transition="opacity 220ms ease, transform 260ms cubic-bezier(0.23, 1, 0.32, 1)"
                    >
                      <GoArrowRight aria-hidden="true" />
                    </Box>
                  </Flex>
                </Box>
              );
            })}
          </Box>
        )}
      </Flex>

      {/* Tarjetas */}
      <Flex direction="column" gap={{ base: '18px', md: '16vh' }} pt={{ base: '24px', md: '16vh' }} pb={{ base: '30px', md: '18vh' }}>
        {SERVICES.map((service, i) => {
          const isActive = !isDesktop || active === i;
          return (
            <MotionBox
              as="article"
              key={service.key}
              id={`service-${service.key}`}
              position="relative"
              w="100%"
              maxW={{ base: 'none', md: 'calc(74svh * 4 / 4.3)' }}
              mx="auto"
              borderRadius={{ base: '22px', md: '28px' }}
              overflow="hidden"
              border={`1px solid ${LINE}`}
              initial={false}
              animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0.35, scale: 0.96 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.7, ease: EASE_OUT }}
              onViewportEnter={() => isDesktop && setActive(i)}
              viewport={{ margin: '-45% 0px -45% 0px' }}
            >
              <ServiceMedia src={service.image} alt={`Servicio para ${service.title.toLowerCase()}`} />
              <Flex
                position="absolute"
                left="0"
                right="0"
                bottom="0"
                p={{ base: '20px', md: '26px' }}
                direction={{ base: 'column', md: 'row' }}
                align={{ base: 'flex-start', md: 'flex-end' }}
                justify="space-between"
                gap={{ base: '14px', md: '18px' }}
                bg="linear-gradient(0deg, rgba(0,0,0,.92), rgba(0,0,0,.6) 55%, rgba(0,0,0,0))"
              >
                <Box>
                  <Heading as="h3" m="0 0 6px" fontSize={{ base: '28px', md: 'clamp(26px, 2.6vw, 40px)' }} fontStyle="italic" letterSpacing="-0.01em">
                    {service.title}
                  </Heading>
                  <Text m="0" color="whiteAlpha.800" fontSize="15px" lineHeight="1.5" maxW="34ch">
                    {service.description}
                  </Text>
                </Box>
                <ServiceButton to={service.to} />
              </Flex>
            </MotionBox>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Services;
