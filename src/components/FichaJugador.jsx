import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Box,
  Flex,
  Text,
  Image,
  Heading,
  Grid,
  Circle,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionModalContent = motion(ModalContent);
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

// Circular Progress Component
const CircularProgress = ({ value, label, size = 100 }) => {
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <MotionBox
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      position="relative"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
    >
      <Box position="relative" w={`${size}px`} h={`${size}px`} bg="transparent">
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="6"
            fill="none"
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#orangeGradient)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{
              strokeDasharray: circumference,
            }}
          />
          <defs>
            <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#f5a00f" />
            </linearGradient>
          </defs>
        </svg>
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
        >
          <Text fontSize="xl" fontWeight="black" color="white">
            {value}
          </Text>
          <Text fontSize="2xs" color="orange.300">
            %
          </Text>
        </Box>
      </Box>
      <Text fontSize="xs" fontWeight="semibold" color="whiteAlpha.700" textAlign="center">
        {label}
      </Text>
    </MotionBox>
  );
};

// Soccer field mini map component
const SoccerFieldPosition = ({ position = 'Forward' }) => {
  const normalized = (position || '').toLowerCase();

  const markerByPosition = () => {
    // Arquero
    if (normalized === 'arquero') {
      return { top: '50%', left: '14%' };
    }

    // Defensas
    if (
      normalized === 'defensor central' ||
      normalized === 'lateral derecho' ||
      normalized === 'lateral izquiero'
    ) {
      return { top: '50%', left: '28%' };
    }

    // Mediocampo
    if (
      normalized === 'mediocampista' ||
      normalized === 'mediocampista izq' ||
      normalized === 'mediocampista der'
    ) {
      return { top: '50%', left: '50%' };
    }

    // Delanteros
    if (
      normalized === 'delantero' ||
      normalized === 'extremo izq' ||
      normalized === 'extremo der'
    ) {
      return { top: '50%', left: '75%' };
    }

    // Fallback al centro
    return { top: '50%', left: '50%' };
  };

  const markerPos = markerByPosition();

  return (
    <Box
      position="relative"
      w="100%"
      h="100%"
      bg="transparent"
      backdropFilter="blur(6px)"
      borderRadius="lg"
      overflow="hidden"
    >
      {/* Pitch lines */}
      <Box position="absolute" inset="8px" border="1px solid" borderColor="whiteAlpha.700" borderRadius="md">
        <Box position="absolute" left="50%" top="0" bottom="0" w="1px" bg="whiteAlpha.700" />

        <Circle
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          size="38px"
          border="1px solid"
          borderColor="whiteAlpha.700"
        />

        {/* Left penalty area */}

        <Box
          position="absolute"
          top="20%"
          left="0"
          w="22%"
          h="60%"
          borderTop="1px solid"
          borderBottom="1px solid"
          borderRight="1px solid"
          borderColor="whiteAlpha.700"
        />
        <Box
          position="absolute"
          top="32%"
          left="0"
          w="12%"
          h="36%"
          borderTop="1px solid"
          borderBottom="1px solid"
          borderRight="1px solid"
          borderColor="whiteAlpha.700"
        />

        {/* Right penalty area */}

        <Box
          position="absolute"
          top="20%"
          right="0"
          w="22%"
          h="60%"
          borderTop="1px solid"
          borderBottom="1px solid"
          borderLeft="1px solid"
          borderColor="whiteAlpha.700"
        />
        <Box
          position="absolute"
          top="32%"
          right="0"
          w="12%"
          h="36%"
          borderTop="1px solid"
          borderBottom="1px solid"
          borderLeft="1px solid"
          borderColor="whiteAlpha.700"
        />

      </Box>

      {/* Player marker */}
      <MotionBox
        position="absolute"
        top={markerPos.top}
        left={markerPos.left}
        transform="translate(-50%, -50%)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <Circle size="16px" bg="orange.400" boxShadow="0 0 24px rgba(251, 146, 60, 0.9)" />
      </MotionBox>
    </Box>
  );
};

function FichaJugador({ isOpen, onClose, jugador }) {
  const jugadorData = jugador || {};

  const passAccuracy = jugadorData.passAccuracy ?? 71;
  const shotConversion = jugadorData.shotConversion ?? 86;
  const fitness = jugadorData.fitness ?? 92;

  const goals = jugadorData.goals ?? 12;
  const assists = jugadorData.assists ?? 7;
  const matches = jugadorData.matches ?? 34;

  return (
    <Modal
      isCentered
      isOpen={isOpen}
      onClose={onClose}
      size="6xl"
    >
      <ModalOverlay
        bg="transparent"
        backdropFilter="blur(5px)"
      />
      <MotionModalContent
        maxW={{ base: '95vw', md: '90vw', lg: '85vw' }}
        maxH={{ base: '95vh', md: '90vh', lg: '85vh' }}
        h={{ base: '85vh', md: '85vh' }}
        bg="transparent"
        overflow="hidden"
        borderRadius="2xl"
        boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.5)"
        initial={{ opacity: 0, scale: 0.9, y: 60 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 60 }}
        transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <ModalBody p={0}>
          <Box
            position="relative"
            w="100%"
            h="88vh"
            bgGradient="linear(135deg, gray.900 0%, black 50%, gray.900 100%)"
            overflow="hidden"
          >
            <Box
              position="absolute"
              top="-10%"
              right="-5%"
              w="300px"
              h="300px"
              bg="orange.500"
              opacity={0.1}
              filter="blur(80px)"
              borderRadius="full"
            />
            <Box
              position="absolute"
              bottom="-10%"
              left="-5%"
              w="250px"
              h="250px"
              bg="orange.600"
              opacity={0.08}
              filter="blur(70px)"
              borderRadius="full"
            />

            <ModalCloseButton
              position="absolute"
              top={4}
              right={4}
              color="white"
              bg="whiteAlpha.200"
              borderRadius="full"
              _hover={{ bg: 'red.500', transform: 'scale(1.1)' }}
              _active={{ transform: 'scale(0.95)' }}
              transition="all 0.2s"
              zIndex={10}
            />

            <Flex h="100%" position="relative" direction={{ base: 'column', md: 'row' }}>
              <MotionBox
                w={{ base: '100%', md: '35%' }}
                h={{ base: '35%', md: '100%' }}
                position="relative"
                overflow="hidden"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src={jugadorData.img}
                  alt={jugadorData.name || 'Jugador'}
                  objectFit='cover'
                  w="100%"
                  h="100%"
                  objectPosition="center top"
                />
                <Box
                  position="absolute"
                  inset="0"
                  bgGradient="linear(to-r, transparent 0%, gray.900 95%)"
                  display={{ base: 'none', md: 'block' }}
                />
                <Box
                  position="absolute"
                  inset="0"
                  bgGradient="linear(to-t, gray.900 0%, transparent 40%)"
                />
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  w={{ base: '100%', md: '4px' }}
                  h={{ base: '4px', md: '100%' }}
                  bg="orange.400"
                  boxShadow="0 0 20px rgba(251, 146, 60, 0.6)"
                />
              </MotionBox>

              <MotionFlex
                w={{ base: '100%', md: '60%' }}
                h={{ base: '65%', md: '100%' }}
                direction="column"
                p={{ base: 4, md: 6, lg: 8 }}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Box mb={{ base: 4, md: 6 }}>
                  <Flex align="center" gap={3} mb={2}>
                    <Box
                      w="40px"
                      h="2px"
                      bg="orange.400"
                      boxShadow="0 0 10px rgba(251, 146, 60, 0.6)"
                    />
                    <Text
                      fontSize={{ base: 'xs', md: 'sm' }}
                      fontWeight="bold"
                      color="orange.300"
                      textTransform="uppercase"
                      letterSpacing="wider"
                    >
                      {jugadorData.position || 'Forward'}
                    </Text>
                  </Flex>
                  <Flex align="baseline" gap={3} flexWrap="wrap">
                    <Heading
                      fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                      fontWeight="black"
                      color="white"
                      letterSpacing="tight"
                      lineHeight="1"
                    >
                      {jugadorData.Firstname || 'Nombre'}
                    </Heading>
                    <Text
                      fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
                      fontWeight="black"
                      color="orange.400"
                      letterSpacing="tight"
                      lineHeight="1"
                    >
                      {jugadorData.number || '10'}
                    </Text>
                  </Flex>
                  <Heading
                    fontSize={{ base: '3xl', md: '4xl', lg: '6xl' }}
                    fontWeight="black"
                    color="orange.400"
                    letterSpacing="tight"
                    lineHeight="1.1"
                    textTransform="uppercase"
                  >
                    {jugadorData.Lastname || 'Apellido'}
                  </Heading>
                </Box>

                <Grid
                  templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
                  gap={{ base: 3, md: 4 }}
                  mb={{ base: 4, md: 6 }}
                  pb={{ base: 4, md: 6 }}
                  borderBottom="1px solid"
                  borderColor="whiteAlpha.200"
                  overflowY="hidden"
                >
                  <Box>
                    <Text
                      fontSize="xs"
                      color="whiteAlpha.600"
                      fontWeight="semibold"
                      mb={1}
                    >
                      FECHA NAC.
                    </Text>
                    <Text fontSize="sm" color="white" fontWeight="bold">
                      {jugadorData.birthDate || '01/01/1990'}
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      fontSize="xs"
                      color="whiteAlpha.600"
                      fontWeight="semibold"
                      mb={1}
                    >
                      PAÍS
                    </Text>
                    <Text fontSize="sm" color="white" fontWeight="bold">
                      {jugadorData.country || 'Argentina'}
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      fontSize="xs"
                      color="whiteAlpha.600"
                      fontWeight="semibold"
                      mb={1}
                    >
                      CLUB
                    </Text>
                    <Text fontSize="sm" color="white" fontWeight="bold">
                      {jugadorData.club || 'Club actual'}
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      fontSize="xs"
                      color="whiteAlpha.600"
                      fontWeight="semibold"
                      mb={1}
                    >
                      ESTATURA
                    </Text>
                    <Text fontSize="sm" color="white" fontWeight="bold">
                      {jugadorData.height || '1.80 m'}
                    </Text>
                  </Box>
                </Grid>
                <Box
                  id="stats"
                  flex="1"
                  overflowY="hidden"  
                  // css={{
                  //   '&::-webkit-scrollbar': { width: '6px' },
                  //   '&::-webkit-scrollbar-track': {
                  //     background: 'rgba(255,255,255,0.05)',
                  //   },
                  //   '&::-webkit-scrollbar-thumb': {
                  //     background: 'rgba(251, 146, 60, 0.5)',
                  //     borderRadius: '3px',
                  //   },
                  // }}
                >
                  <Grid
                    templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
                    gap={4}
                  >
                    <MotionBox
                      bg="whiteAlpha.50"
                      borderRadius="lg"
                      p={4}
                      border="1px solid"
                      borderColor="whiteAlpha.200"
                      // whileHover={{ scale: 1.02, y: -4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Text
                        fontSize="xs"
                        color="orange.300"
                        fontWeight="bold"
                        mb={3}
                        textTransform="uppercase"
                      >
                        Estadísticas Generales
                      </Text>
                      <Flex justify="space-between" mb={2}>
                        <Text fontSize="sm" color="whiteAlpha.700">
                          Goles
                        </Text>
                        <Text fontSize="sm" color="white" fontWeight="bold">
                          {goals}
                        </Text>
                      </Flex>
                      <Flex justify="space-between" mb={2}>
                        <Text fontSize="sm" color="whiteAlpha.700">
                          Asistencias
                        </Text>
                        <Text fontSize="sm" color="white" fontWeight="bold">
                          {assists}
                        </Text>
                      </Flex>
                      <Flex justify="space-between">
                        <Text fontSize="sm" color="whiteAlpha.700">
                          Partidos jugados
                        </Text>
                        <Text fontSize="sm" color="white" fontWeight="bold">
                          {matches}
                        </Text>
                      </Flex>
                    </MotionBox>
                    <MotionFlex
                      // whileHover={{ scale: 1.02, y: -4 }}
                      transition={{ duration: 0.3 }}
                      flexDirection= 'column'
                      alignItems="center"
                      justifyContent="center"
                      gridColumn={{ base: 'span 3', md: 'span 2' }}
                    >
                      <Flex
                        gap={{ base: 3, md: 6 }}
                        mb={{ base: 4, md: 6 }}
                        justify="end"
                        flexWrap="wrap"
                      >
                        <CircularProgress
                          value={passAccuracy}
                          label="Precisión pases"
                          size={90}
                        />
                        <CircularProgress 
                          value={shotConversion}
                          label="Conversión tiro"
                          size={90} 
                        />
                        <CircularProgress
                          value={fitness}
                          label="Condición física"
                          size={90}
                        />
                      </Flex>

                      <MotionBox
                        position="relative"
                        bg="whiteAlpha.50"
                        borderRadius="lg"
                        border="1px solid"
                        borderColor="whiteAlpha.200"
                        // whileHover={{ scale: 1.02, y: -4 }} 
                        transition={{ duration: 0.3 }}
                        w="60%"
                        h="150px"
                      >
                        <SoccerFieldPosition position={jugadorData.position} />
                      </MotionBox>
                    </MotionFlex>
                  </Grid>
                </Box>
              </MotionFlex>
            </Flex>
          </Box>
        </ModalBody>
      </MotionModalContent>
    </Modal>
  );
}

export default FichaJugador;