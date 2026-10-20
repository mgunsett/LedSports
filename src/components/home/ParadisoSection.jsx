import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';
import { motion, useReducedMotion } from 'framer-motion';
import { GoArrowRight } from 'react-icons/go';
import fotoAccion from '@/assets/paradiso/foto_accion.webp';
import escudo from '@/assets/paradiso/escudo.webp';

/*
 * Home · Caso FC Paradiso (versión "Pantalla completa")
 * Foto a todo el ancho con el título encima, CTA a /fc-paradiso y una barra de datos del club.
 */

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const EASE_OUT = [0.23, 1, 0.32, 1];
const MD = '@media (min-width: 48em)';
const FACT_LINE = '1px solid rgba(255,255,255,.14)';

const FACTS = [
  { label: 'Club', value: 'FC Paradiso' },
  { label: 'País', value: 'Suiza' },
  { label: 'Liga', value: 'Promotion League' },
  { label: 'Fundado', value: '1917', club: true },
];

const ParadisoSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <Box as="section" id="paradiso" aria-labelledby="paradiso-title" px={{ base: '12px', md: 'clamp(12px, 2vw, 28px)' }} py={{ base: '40px', md: 'clamp(40px, 8vh, 80px)' }}>
      <MotionBox
        position="relative"
        overflow="hidden"
        borderRadius={{ base: '24px', md: '32px' }}
        bg="#0a0a0a"
        minH={{ base: '88svh', md: '0' }}
        h={{ base: 'auto', md: 'min(92svh, 860px)' }}
        display="flex"
        flexDirection="column"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Foto */}
        <MotionImage
          src={fotoAccion}
          alt="Jugador de FC Paradiso frente al banner Tutti siamo Paradiso"
          loading="lazy"
          decoding="async"
          draggable={false}
          position="absolute"
          inset="0"
          w="100%"
          h="100%"
          objectFit="cover"
          objectPosition={{ base: '50% 30%', md: '60% 40%' }}
          variants={{ hidden: { scale: reduceMotion ? 1 : 1.06 }, show: { scale: 1 } }}
          transition={{ duration: 1.4, ease: EASE_OUT }}
        />
        {/* Sombra para que el texto se lea */}
        <Box
          position="absolute"
          inset="0"
          pointerEvents="none"
          sx={{
            backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,.95) 0%, rgba(0,0,0,.75) 55%, rgba(0,0,0,.2) 100%)',
            [MD]: {
              backgroundImage:
                'linear-gradient(90deg, rgba(0,0,0,.9) 0%, rgba(0,0,0,.65) 38%, rgba(0,0,0,.05) 70%), linear-gradient(0deg, rgba(0,0,0,.85), transparent 40%)',
            },
          }}
        />

        {/* Texto + CTA */}
        <MotionBox
          position={{ base: 'relative', md: 'absolute' }}
          inset={{ md: 0 }}
          zIndex={2}
          flex={{ base: '1', md: 'none' }}
          display="flex"
          flexDirection="column"
          justifyContent={{ base: 'flex-end', md: 'center' }}
          maxW="760px"
          p={{ base: '200px 22px 24px', md: 'clamp(24px, 5vw, 72px)' }}
          variants={{ hidden: { opacity: 0, y: reduceMotion ? 0 : 22 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT }}
        >
          <Flex
            align="center"
            gap="12px"
            w="max-content"
            maxW="100%"
            p="6px 16px 6px 6px"
            borderRadius="full"
            bg="rgba(0,0,0,.5)"
            border="1px solid rgba(255,255,255,.14)"
            backdropFilter="blur(8px)"
            fontSize="13px"
            fontWeight="600"
          >
            <Image src={escudo} alt="" w="36px" h="36px" borderRadius="full" bg="white" p="2px" />
            Caso real · FC Paradiso, Suiza
          </Flex>
          <Heading
            as="h2"
            id="paradiso-title"
            mt="22px"
            fontSize={{ base: '40px', md: 'clamp(40px, 5.4vw, 88px)' }}
            lineHeight=".95"
            fontWeight="700"
            letterSpacing="-0.03em"
            color="white"
          >
            Dirigimos el marketing de un club{' '}
            <Text as="em" fontStyle="italic" color="orange.400">
              con historia
            </Text>
          </Heading>
          <Text mt="18px" maxW="46ch" color="whiteAlpha.800" fontSize={{ base: '16px', md: 'clamp(16px, 1.4vw, 20px)' }} lineHeight="1.6">
            Fotografía, video, redes y el seguimiento del club día a día, partido a partido, entrenamiento a entrenamiento.
          </Text>
          <Box mt="30px">
            <Box
              as={RouterLink}
              to="/fc-paradiso"
              display="inline-flex"
              alignItems="center"
              gap="10px"
              minH="52px"
              px="24px"
              borderRadius="full"
              bg="orange.500"
              color="white"
              fontWeight="600"
              fontSize="15px"
              transition="background-color 200ms ease, transform 160ms cubic-bezier(0.23, 1, 0.32, 1)"
              _active={{ transform: 'scale(0.97)' }}
              _focusVisible={{ outline: '2px solid', outlineColor: 'orange.400', outlineOffset: '3px' }}
              sx={{ '@media (hover: hover) and (pointer: fine)': { '&:hover': { bg: 'orange.400' } } }}
            >
              Ver el caso
              <GoArrowRight aria-hidden="true" />
            </Box>
          </Box>
        </MotionBox>

        {/* Datos del club */}
        <Grid
          as="dl"
          position={{ base: 'relative', md: 'absolute' }}
          left="0"
          right="0"
          bottom="0"
          zIndex={2}
          m="0"
          templateColumns={{ base: 'repeat(2, minmax(0, 1fr))', md: 'repeat(4, minmax(0, 1fr))' }}
          borderTop={FACT_LINE}
        >
          {FACTS.map((f, i) => (
            <Box
              key={f.label}
              p={{ base: '16px', md: '18px clamp(16px, 2.4vw, 32px)' }}
              borderLeft={{ base: i % 2 === 0 ? '0' : FACT_LINE, md: i === 0 ? '0' : FACT_LINE }}
              borderTop={{ base: i > 1 ? FACT_LINE : '0', md: '0' }}
            >
              <Text as="dt" color="whiteAlpha.600" fontSize="11px" fontWeight="600" letterSpacing=".16em" textTransform="uppercase">
                {f.label}
              </Text>
              <Text as="dd" m="4px 0 0" fontSize={{ base: '16px', md: 'clamp(16px, 1.4vw, 20px)' }} fontWeight="700" color={f.club ? '#F2D21B' : 'white'}>
                {f.value}
              </Text>
            </Box>
          ))}
        </Grid>
      </MotionBox>
    </Box>
  );
};

export default ParadisoSection;
