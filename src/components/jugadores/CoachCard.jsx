import { Box, Flex, Image, Text } from '@chakra-ui/react';

/*
 * Tarjeta horizontal de director técnico para /jugadores (pestaña "Directores técnicos").
 * Foto recortada a la izquierda (entera, apoyada abajo), "DT" en contorno detrás,
 * y a la derecha nombre, club, país, escudos de la trayectoria y "Ver ficha".
 */

const EASE_OUT = 'cubic-bezier(0.23, 1, 0.32, 1)';
const LINE = 'rgba(255,255,255,.12)';
const countryOf = (c = '') => c.split(',').pop().trim();

const CoachCard = ({ coach, onClick }) => {
  const crests = [...(coach.clubLogoActual || []), ...(coach.trayectoria || [])].filter((c) => c.logo).slice(0, 6);

  return (
    <Box
      as="button"
      type="button"
      onClick={onClick}
      aria-label={`Ver ficha de ${coach.name}`}
      display="grid"
      gridTemplateColumns="minmax(0, .8fr) minmax(0, 1fr)"
      minH={{ base: '240px', md: '300px' }}
      w="100%"
      borderRadius={{ base: '20px', md: '24px' }}
      overflow="hidden"
      border="1px solid rgba(237,137,54,.35)"
      bg="linear-gradient(140deg, #1c1007, #0b0b0b 60%)"
      textAlign="left"
      transition={`border-color 250ms ease, transform 350ms ${EASE_OUT}`}
      _focusVisible={{ outline: '2px solid', outlineColor: 'orange.400', outlineOffset: '3px' }}
      sx={{
        '@media (hover: hover) and (pointer: fine)': {
          '&:hover': { borderColor: 'orange.500', transform: 'translateY(-3px)' },
          '&:hover .cc-photo': { transform: 'scale(1.03)' },
        },
      }}
    >
      <Flex position="relative" align="flex-end" justify="center" bg="radial-gradient(ellipse 90% 70% at 50% 100%, #3a1d06, transparent 70%)" overflow="hidden">
        <Text
          as="span"
          aria-hidden="true"
          position="absolute"
          top="8px"
          left="12px"
          fontSize={{ base: '56px', md: '84px' }}
          lineHeight="1"
          fontWeight="700"
          fontStyle="italic"
          letterSpacing="-0.05em"
          color="transparent"
          sx={{ WebkitTextStroke: '1.5px rgba(237,137,54,.4)' }}
        >
          DT
        </Text>
        {coach.img && (
          <Image
            className="cc-photo"
            src={coach.img}
            alt=""
            loading="lazy"
            decoding="async"
            /* Absoluta para no estirar la card. Misma altura para todas las fotos: apoyadas abajo y
               centradas; si una es más ancha se recortan los costados. */
            position="absolute"
            bottom="0"
            left="50%"
            sx={{ translate: '-50% 0' }}
            h="92%"
            w="auto"
            maxW="none"
            objectFit="contain"
            objectPosition="50% 100%"
            transformOrigin="50% 100%"
            transition={`transform 500ms ${EASE_OUT}`}
          />
        )}
      </Flex>
      <Flex direction="column" justify="flex-end" gap="10px" p={{ base: '16px', md: '24px' }}>
        <Text color="orange.400" fontSize="11px" fontWeight="600" letterSpacing=".14em" textTransform="uppercase">
          Director técnico
        </Text>
        <Text fontSize={{ base: '22px', md: 'clamp(22px, 2vw, 30px)' }} lineHeight="1" fontWeight="700" letterSpacing="-0.02em" color="white">
          {coach.name}
        </Text>
        <Flex wrap="wrap" gap="6px">
          {[coach.club, countryOf(coach.country)].filter(Boolean).map((m) => (
            <Text key={m} as="span" px="10px" py="6px" borderRadius="full" border={`1px solid ${LINE}`} fontSize="12px" color="whiteAlpha.800">
              {m}
            </Text>
          ))}
        </Flex>
        {crests.length > 0 && (
          <Flex gap="6px" mt="4px">
            {crests.map((c) => (
              <Image key={c.name} src={c.logo} alt={c.name} w="26px" h="26px" objectFit="contain" p="3px" borderRadius="full" border={`1px solid ${LINE}`} bg="whiteAlpha.50" loading="lazy" />
            ))}
          </Flex>
        )}
        <Text as="span" mt="6px" fontWeight="700" fontSize="14px" color="orange.400">
          Ver ficha →
        </Text>
      </Flex>
    </Box>
  );
};

export default CoachCard;
