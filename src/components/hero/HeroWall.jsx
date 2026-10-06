import { memo, useMemo } from 'react';
import { Box, Button, Image, Stack, Text } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { motion, useReducedMotion } from 'framer-motion';
import logo3d from '../../assets/logo_3d.webp';
import { JUGADORES } from '../../assets/imagenes';

/*
 * Hero "Muro" — muro 3D de publicaciones que se desplaza en columnas alternas,
 * con el logo 3D y los dos CTAs al centro.
 * - El desplazamiento del muro es CSS puro (transform), corre fuera del hilo principal.
 * - Las entradas usan Framer Motion con un ease-out fuerte (sin bounce).
 * - Hover solo en dispositivos con mouse; con "reducir movimiento" el muro queda quieto.
 */

const EASE_OUT = [0.23, 1, 0.32, 1];
const COLUMNS = 9;
const TILES_PER_COLUMN = 7;
const HOT_EVERY = 6; // 1 de cada 6 tarjetas usa el fondo naranja de marca

const scrollUp = keyframes`
  from { transform: translateY(0); }
  to   { transform: translateY(-50%); }
`;

const EDGE_FADE = 'linear-gradient(180deg, #000 0%, rgba(0,0,0,0) 22%, rgba(0,0,0,0) 78%, #000 100%)';
const VIGNETTE_MOBILE = `radial-gradient(ellipse 75% 42% at 50% 52%, rgba(0,0,0,.95) 0%, rgba(0,0,0,.85) 50%, rgba(0,0,0,.35) 100%), ${EDGE_FADE}`;
const VIGNETTE_DESKTOP = `radial-gradient(ellipse 42% 50% at 50% 50%, rgba(0,0,0,.96) 0%, rgba(0,0,0,.88) 50%, rgba(0,0,0,.35) 100%), ${EDGE_FADE}`;

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

// Reparto determinista de jugadores en columnas (sin repetir vecinos inmediatos)
function buildColumns(players) {
  return Array.from({ length: COLUMNS }, (_, c) => {
    const items = Array.from({ length: TILES_PER_COLUMN }, (_, k) => {
      const src = players[(c * TILES_PER_COLUMN + k * 5) % players.length];
      return { src, hot: (c + k) % HOT_EVERY === 2 };
    });
    // duplicamos para que el loop translateY(-50%) sea continuo
    return {
      duration: 60 + ((c * 13) % 5) * 9,
      reverse: c % 2 === 1,
      items: [...items, ...items],
    };
  });
}

const Tile = memo(function Tile({ src, hot }) {
  return (
    <Box
      position="relative"
      aspectRatio="4 / 5"
      borderRadius="14px"
      overflow="hidden"
      bg={
        hot
          ? 'linear-gradient(170deg, #F6AD55 0%, #DD6B20 55%, #5a2a06 100%)'
          : 'linear-gradient(170deg, #262626 0%, #0c0c0c 75%)'
      }
      boxShadow="inset 0 0 0 1px rgba(255,255,255,.06)"
      sx={{
        '@media (hover: hover) and (pointer: fine)': {
          '&:hover img': { filter: 'none' },
        },
      }}
    >
      <Image
        src={src}
        alt=""
        loading="lazy"
        decoding="async"
        draggable={false}
        position="absolute"
        left="50%"
        bottom="0"
        h="92%"
        w="auto"
        maxW="none"
        transform="translateX(-50%)"
        filter={hot ? 'grayscale(1) brightness(.85) contrast(1.1)' : 'grayscale(1) brightness(.6)'}
        transition="filter 300ms ease"
      />
    </Box>
  );
});

const Wall = memo(function Wall({ columns, reduceMotion }) {
  return (
    <Box
      position="absolute"
      left="50%"
      top="50%"
      w="150vmax"
      h="160vmax"
      display="flex"
      gap="18px"
      justifyContent="center"
      transform="translate(-50%, -50%) rotateX(24deg) rotateZ(-12deg)"
    >
      {columns.map((col, c) => (
        <Box key={c} flex={{ base: '0 0 120px', md: '0 0 clamp(150px, 13vw, 230px)' }}>
          <Box
            display="flex"
            flexDirection="column"
            gap="18px"
            animation={
              reduceMotion
                ? 'none'
                : `${scrollUp} ${col.duration}s linear infinite ${col.reverse ? 'reverse' : 'normal'}`
            }
            sx={{ '@media (prefers-reduced-motion: reduce)': { animation: 'none' } }}
          >
            {col.items.map((item, i) => (
              <Tile key={i} src={item.src} hot={item.hot} />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
});

const HeroWall = () => {
  const reduceMotion = useReducedMotion();
  const players = useMemo(() => Object.values(JUGADORES), []);
  const columns = useMemo(() => buildColumns(players), [players]);

  // con reduced motion: solo fundidos, sin desplazamientos ni escalas
  const enter = (delay, from = { y: 16 }) => ({
    initial: reduceMotion ? { opacity: 0 } : { opacity: 0, ...from },
    animate: reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 },
    transition: reduceMotion
      ? { duration: 0.3, delay: delay / 1000 }
      : { duration: 0.8, delay: delay / 1000, ease: EASE_OUT },
  });

  return (
    <Box
      as="section"
      aria-label="Inicio"
      position="relative"
      h="100svh"
      minH="560px"
      overflow="hidden"
      bg="black"
      isolation="isolate"
    >
      {/* Muro */}
      <MotionBox
        position="absolute"
        inset="0"
        zIndex={0}
        style={{ perspective: 1400 }}
        aria-hidden="true"
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduceMotion ? 0.3 : 1.4, delay: 0.1, ease: EASE_OUT }}
      >
        <Wall columns={columns} reduceMotion={reduceMotion} />
      </MotionBox>

      {/* Viñeta para que el logo y los CTAs dominen */}
      <Box
        position="absolute"
        inset="0"
        zIndex={1}
        pointerEvents="none"
        sx={{
          backgroundImage: VIGNETTE_MOBILE,
          '@media (min-width: 48em)': { backgroundImage: VIGNETTE_DESKTOP },
        }}
      />

      {/* Contenido */}
      <Stack
        position="absolute"
        inset="0"
        zIndex={2}
        align="center"
        justify="center"
        spacing="26px"
        px="20px"
        pt="90px"
        pb="40px"
        pointerEvents="none"
        sx={{ '& > *': { pointerEvents: 'auto' } }}
      >
        <MotionImage
          src={logo3d}
          alt="LED Sports"
          draggable={false}
          w="min(440px, 68vw, calc((100svh - 300px) * .9))"
          h="auto"
          filter="drop-shadow(0 18px 22px rgba(0,0,0,.6))"
          {...enter(450, { scale: 0.96 })}
        />

        <MotionBox {...enter(800)}>
          <Text
            as="h1"
            m="0"
            color="whiteAlpha.800"
            fontWeight="400"
            fontSize={{ base: '17px', md: 'clamp(17px, 1.5vw, 21px)' }}
            letterSpacing=".01em"
            textAlign="center"
          >
            Potenciamos tu marca deportiva
          </Text>
        </MotionBox>

        <MotionBox {...enter(860)} w={{ base: 'min(320px, 100%)', sm: 'auto' }}>
          <Stack direction={{ base: 'column', sm: 'row' }} spacing="14px" justify="center">
            <Button
              onClick={() => scrollToSection('services')}
              h="52px"
              px="30px"
              borderRadius="full"
              bg="orange.500"
              color="white"
              border="1.5px solid"
              borderColor="orange.500"
              fontFamily="Stack Sans Headline, sans-serif"
              fontWeight="600"
              fontSize="16px"
              transition="background-color 200ms ease, border-color 200ms ease, transform 160ms cubic-bezier(0.23, 1, 0.32, 1)"
              _hover={{}}
              _active={{ transform: 'scale(0.97)' }}
              sx={{
                '@media (hover: hover) and (pointer: fine)': {
                  '&:hover': { bg: 'orange.400', borderColor: 'orange.400' },
                },
              }}
            >
              Ver servicios
            </Button>
            <Button
              onClick={() => scrollToSection('trust')}
              h="52px"
              px="30px"
              borderRadius="full"
              bg="blackAlpha.400"
              color="white"
              border="1.5px solid"
              borderColor="whiteAlpha.500"
              backdropFilter="blur(6px)"
              fontFamily="Stack Sans Headline, sans-serif"
              fontWeight="600"
              fontSize="16px"
              transition="background-color 200ms ease, border-color 200ms ease, transform 160ms cubic-bezier(0.23, 1, 0.32, 1)"
              _hover={{}}
              _active={{ transform: 'scale(0.97)' }}
              sx={{
                '@media (hover: hover) and (pointer: fine)': {
                  '&:hover': { bg: 'whiteAlpha.100', borderColor: 'white' },
                },
              }}
            >
              Ver jugadores
            </Button>
          </Stack>
        </MotionBox>
      </Stack>
    </Box>
  );
};

export default HeroWall;
