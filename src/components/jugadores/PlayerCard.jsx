import { Box, Image, Text } from '@chakra-ui/react';

/*
 * Tarjeta de jugador para la grilla de /jugadores.
 * Número contorneado, escudo del club actual, foto recortada y posición / nombre / club.
 * Hover (solo con mouse): la foto pasa de B/N a color, la tarjeta sube y aparece una línea naranja arriba.
 * En pantallas táctiles la foto se muestra a color.
 */

const EASE_OUT = 'cubic-bezier(0.23, 1, 0.32, 1)';
const capitalize = (s = '') => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

const PlayerCard = ({ player, onClick }) => {
  const crest = player.clubLogoActual?.[0]?.logo;

  return (
    <Box
      as="button"
      type="button"
      onClick={onClick}
      aria-label={`Ver ficha de ${player.name}`}
      position="relative"
      w="100%"
      aspectRatio="3 / 4.1"
      borderRadius={{ base: '18px', md: '22px' }}
      overflow="hidden"
      border="1px solid rgba(255,255,255,.12)"
      bg="radial-gradient(ellipse 90% 70% at 50% 100%, #2a1606 0%, #111 55%, #0a0a0a 100%)"
      textAlign="left"
      transition={`border-color 250ms ease, transform 350ms ${EASE_OUT}`}
      _focusVisible={{ outline: '2px solid', outlineColor: 'orange.400', outlineOffset: '3px' }}
      sx={{
        '& .pc-photo': { filter: 'none' },
        '@media (hover: hover) and (pointer: fine)': {
          '& .pc-photo': { filter: 'grayscale(1) brightness(.85)' },
          '&:hover': { borderColor: 'rgba(237,137,54,.5)', transform: 'translateY(-4px)' },
          '&:hover .pc-photo': { filter: 'none', transform: 'translateX(-50%) scale(1.04)' },
          '&:hover .pc-line': { transform: 'scaleX(1)' },
        },
      }}
    >
      {/* Línea superior (hover) */}
      <Box
        className="pc-line"
        position="absolute"
        left="0"
        top="0"
        w="100%"
        h="3px"
        bg="orange.500"
        zIndex={2}
        transform="scaleX(0)"
        transformOrigin="0 50%"
        transition={`transform 500ms ${EASE_OUT}`}
      />

      {/* Número */}
      {player.number && (
        <Text
          as="span"
          aria-hidden="true"
          position="absolute"
          right="12px"
          top="6px"
          fontSize={{ base: '56px', md: '94px' }}
          lineHeight="1"
          fontWeight="700"
          fontStyle="italic"
          letterSpacing="-0.05em"
          color="transparent"
          sx={{ WebkitTextStroke: '1.5px rgba(237,137,54,.35)' }}
        >
          {player.number}
        </Text>
      )}

      {/* Escudo */}
      {crest && (
        <Image src={crest} alt="" position="absolute" left="14px" top="14px" w="30px" h="30px" objectFit="contain" zIndex={1} loading="lazy" />
      )}

      {/* Foto */}
      <Image
        className="pc-photo"
        src={player.img}
        alt=""
        loading="lazy"
        decoding="async"
        draggable={false}
        position="absolute"
        left="50%"
        bottom="0"
        h="86%"
        w="auto"
        maxW="none"
        transform="translateX(-50%)"
        transformOrigin="50% 100%"
        transition={`filter 400ms ease, transform 500ms ${EASE_OUT}`}
      />

      {/* Datos */}
      <Box
        position="absolute"
        left="0"
        right="0"
        bottom="0"
        p={{ base: '36px 12px 12px', md: '44px 16px 14px' }}
        bg="linear-gradient(0deg, rgba(0,0,0,.92), rgba(0,0,0,0))"
      >
        <Text color="orange.400" fontSize="10px" fontWeight="600" letterSpacing=".14em" textTransform="uppercase" noOfLines={1}>
          {capitalize(player.position)}
        </Text>
        <Text mt="4px" fontSize={{ base: '15px', md: '17px' }} fontWeight="700" lineHeight="1.15" color="white">
          {player.name}
        </Text>
        <Text mt="2px" fontSize="13px" color="whiteAlpha.700" noOfLines={1}>
          {player.club}
        </Text>
      </Box>
    </Box>
  );
};

export default PlayerCard;
