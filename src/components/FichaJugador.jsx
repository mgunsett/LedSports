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
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import ClubInfo from './ClubInfo';

const MotionModalContent = motion(ModalContent);
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

// Circular Progress Component
const CircularProgress = ({ value, label, size = 100 }) => {
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  
  const variants = {
  mobileInitial:  { opacity: 0, scale: 0.4 },
  mobileAnimate:  { opacity: 1, scale: 1 }, 
  desktopInitial: { opacity: 0, scale: 0.2, rotate: (-180) },
  desktopAnimate: { opacity: 1, scale: 1, rotate: 0 },
  };



  return (
    <MotionBox
      variants={variants}
      initial={useBreakpointValue({ base: "mobileInitial", lg: "desktopInitial" })}
      animate={useBreakpointValue({ base: "mobileAnimate", lg: "desktopAnimate" })}
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

// Soccer field mini map component with heatmap effect
const SoccerFieldPosition = ({ position = 'Forward' }) => {
  const normalized = (position || '').toLowerCase();
  const getHeatmapArea = () => {
    // Arquero - Áreas expandidas
    if (normalized === 'arquero') {
      return {
        center: { top: '41%', left: '-5%' },
        size: { width: '20%', height: '18%' },
        intensity: 1.5
      };
    }
    // Defensor Central 
    if (
      normalized === 'defensor central' ||
      normalized === 'defensor'
    ) {
      return {
        center: { top: '41%', left: '11%' },
        size: { width: '20%', height: '18%' },
        intensity: 1.5
      };
    }
    // Lateral Izquiero
    if (
      normalized === 'lateral izquierdo'
    ) {
      return {
        center: { top: '10%', left: '17%' },
        size: { width: '20%', height: '18%' },
        intensity: 1.5
      };
    }
    // Lateral Derecho
    if (
      normalized === 'lateral derecho'
    ) {
      return {
        center: { top: '70%', left: '17%' },
        size: { width: '20%', height: '18%' },
        intensity: 1.5
      };
    }
    // Mediocampista Ofensivo
    if (
      normalized === 'mediocampista ofensivo'
    ) {
      return {
        center: { top: '41%', left: '55%' },
       size: { width: '20%', height: '18%' },
        intensity: 1.5
      };
    }
    // Mediocampista Central
    if (
      normalized === 'mediocampista central'
    ) {
      return {
        center: { top: '41%', left: '30%' },
        size: { width: '20%', height: '18%' },
        intensity: 1.5
      };
    }
    // Mediocampista izquierdo
    if (
      normalized === 'mediocampista izquierdo'
    ) {
      return {
        center: { top: '10%', left: '40%' },
        size: { width: '20%', height: '18%' },
        intensity: 1.5
      };
    }
    // Delantero
    if (normalized === 'delantero') {
      return {
        center: { top: '41%', left: '73%' },
        size: { width: '20%', height: '18%' },
        intensity: 1.5
      };
    }
    // Extremo Derecho
    if (normalized === 'extremo derecho') {
      return {
        center: { top: '73%', left: '73%' },
        size: { width: '20%', height: '18%' },
        intensity: 1.5
      };
    }
    // Extremo Izquierdo
    if (normalized === 'extremo izquierdo') {
      return {
        center: { top: '9%', left: '73%' },
        size: { width: '20%', height: '18%' },
        intensity: 1.5
      };
    }
    // Fallback al centro (mediocampo)
    return {
      center: { top: '50%', left: '50%' },
      size: { width: '20%', height: '18%' },
      intensity: 1.5
    };
  };

  const heatmapData = getHeatmapArea();

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
      {/* Heatmap layers - Efecto de mapa de calor expandido */}
      <MotionBox
        position="absolute"
        top={heatmapData.center.top}
        left={heatmapData.center.left}
        transform="translate(-50%, -50%)"
        width={heatmapData.size.width}
        height={heatmapData.size.height}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >    
        {/* Capa interna - naranja fuerte */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          width="45%"
          height="45%"
          borderRadius="50%"
          bgGradient={`radial(circle, rgba(234, 88, 12, ${heatmapData.intensity * 0.8}) 0%, rgba(249, 115, 22, ${heatmapData.intensity * 0.6}) 55%, rgba(251, 146, 60, ${heatmapData.intensity * 0.35}) 80%, transparent 95%)`}
          filter="blur(8px)"
        />
        
        {/* Núcleo central - punto más brillante y expandido */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          width={{ base: "30%" , md: "25%" }}
          height={{ base: "45%" , md: "50%" }}
          borderRadius="50%"
          bg={`orange.400`}
          boxShadow={`  0 0 30px rgba(251, 146, 60, ${heatmapData.intensity})`}
        />
      </MotionBox>

      {/* Pitch lines */}
      <Box position="absolute" inset="8px" border="1px solid" borderColor="whiteAlpha.700" borderRadius="md">
        {/* Línea de medio campo */}
        <Box position="absolute" left="50%" top="0" bottom="0" w="1px" bg="whiteAlpha.700" />
        {/* Círculo central */}
        <Circle
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          size="38px"
          border="1px solid"
          borderColor="whiteAlpha.700"
        />
        {/* Punto central */}
        <Circle
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          size="3px"
          bg="whiteAlpha.700"
        />
        {/* Área grande izquierda */}
        <Box
          position="absolute"
          top="22%"
          left="0"
          w="18%"
          h="56%"
          borderTop="1px solid"
          borderBottom="1px solid"
          borderRight="1px solid"
          borderColor="whiteAlpha.700"
        />
        {/* Semicírculo área grande izquierda */}
        <Box
          position="absolute"
          top="50%"
          left={{base:"13%" , md:"15%"}}
          transform="translateY(-50%)"
          w="16px"
          h="35px"
          borderRadius="0 100% 100% 0"
          borderRight="1px solid"
          borderColor="whiteAlpha.700"
        />
        {/* Área chica izquierda */}
        <Box
          position="absolute"
          top="38%"
          left="0"
          w="7%"
          h="24%"
          borderTop="1px solid"
          borderBottom="1px solid"
          borderRight="1px solid"
          borderColor="whiteAlpha.700"
        />
        {/* Punto penal izquierdo */}
        <Circle
          position="absolute"
          top="50%"
          left="12%"
          transform="translate(-50%, -50%)"
          size="3px"
          bg="whiteAlpha.700"
        />
        {/* Área grande derecha */}
        <Box
          position="absolute"
          top="22%"
          right="0"
          w="18%"
          h="56%"
          borderTop="1px solid"
          borderBottom="1px solid"
          borderLeft="1px solid"
          borderColor="whiteAlpha.700"
        />
        {/* Semicírculo área grande derecha */}
        <Box
          position="absolute"
          top="50%"
          right={{base:"13%" , md:"15%"}}
          transform="translateY(-50%)"
          w="16px"
          h="35px"
          borderRadius="100% 0 0 100%"
          borderLeft="1px solid"
          borderColor="whiteAlpha.700"
        />
        {/* Área chica derecha */}
        <Box
          position="absolute"
          top="38%"
          right="0"
          w="7%"
          h="24%"
          borderTop="1px solid"
          borderBottom="1px solid"
          borderLeft="1px solid"
          borderColor="whiteAlpha.700"
        />
        {/* Punto penal derecho */}
        <Circle
          position="absolute"
          top="50%"
          right="12%"
          transform="translate(50%, -50%)"
          size="3px"
          bg="whiteAlpha.700"
        />
      </Box>
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

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Modal
      isCentered
      isOpen={isOpen}
      onClose={onClose}
      size={{base:'7xl', md:'6xl'}}  
    >
      <ModalOverlay
        bg="transparent"
        backdropFilter="blur(5px)"
      />
      <MotionModalContent
        maxW={{ base: '95vw', md: '90vw', lg: '85vw' }}
        maxH={{ base: '95vh', md: '90vh', lg: '85vh' }}
        h={{ base: '100vh', md: '85vh' }}
        bg="transparent"
        overflow="hidden"
        borderRadius="2xl"
        boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.5)"
        initial={{ opacity: 0, scale: 0.9, y: 60 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 60 }}
        transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <ModalBody p={0}   >
          <Box
            position="relative"
            w="100%"
            h={{base: "100vh", md: "88vh"}}
            bgGradient="linear(135deg, gray.900 0%, black 50%, gray.900 100%)"
            overflow={{base: "auto", md: "hidden"}} 
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
                initial={isMobile ? {x: 0, opacity: 1} : {x: -100, opacity: 0}}
                animate={{ x: 0, opacity: 1 }}
                transition={isMobile ? { duration: 0, delay: 0 } : { duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src={jugadorData.img}
                  alt={jugadorData.name || 'Jugador'}
                  objectFit={{ base:'contain', md:'cover' }}
                  w={{base: "120%", md: "100%"}} 
                  h={{base: "150%", md: "100%"}}
                  objectPosition= 'center top'
                  pt={{base: "5px", md: "0%"}}
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
                initial={isMobile ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={isMobile ? { duration: 0, delay: 0 } : { duration: 0.6, delay: 0.3 }}
              >
                  <Box mb={{ base: 4, md: 6 }}>
                    <Flex align="center" justify="space-between" mb={2} w="100%">
                      <Flex align="center" gap={3}>
                        <Box
                          w="40px"
                          h="2px"
                          bg="orange.400"
                          boxShadow="0 0 10px rgba(251, 146, 60, 0.6)"
                        />
                        <Text
                          fontSize={{ base: '10px', md: 'sm' }}
                          fontWeight="bold"
                          color="orange.300"
                          textTransform="uppercase"
                          letterSpacing="wider"
                        >
                          {jugadorData.position || 'Forward'}
                        </Text>
                      </Flex>
                      <Flex
                      w={{base: '50%', md: 'auto'}} 
                      gap={2} 
                      align={{base:"flex-end" , md:'center'}} 
                      justify={'end'} 
                      wrap={{base: 'wrap', md:'nowrap'}}
                      >
                        {jugadorData.trayectoria ? (
                            jugadorData.trayectoria.map((club, index) => (
                                <ClubInfo key={index} clubData={club}>
                                    <Image
                                      src={club.logo}
                                      alt={club.name}
                                      w={{ base: "20px", md: "30px" }}
                                      h={{ base: "20px", md: "30px" }}
                                      objectFit="contain"
                                      opacity={0.8}
                                      _hover={{ opacity: 1, transform: 'scale(1.1)' }}
                                      transition="all 0.2s"
                                      fallback={<Box w={{ base: "20px", md: "30px" }} h={{ base: "20px", md: "30px" }} bg="whiteAlpha.200" borderRadius="full" />}
                                    />
                                </ClubInfo>
                            ))
                        ) : (<Text fontSize={{ base: '10px', md: 'sm' }} color="whiteAlpha.600">Sin trayectoria</Text>
                        )}
                      </Flex>
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
                  templateColumns={{ base: 'repeat(4, 1fr)', md: 'repeat(4, 1fr)' }}
                  gap={{ base: 6, md: 6 }}
                  mb={{ base: 4, md: 6 }}
                  pb={{ base: 4, md: 6 }}
                  borderBottom="1px solid"
                  borderColor="whiteAlpha.200"
                  overflowY={{base:"visible", md:'hidden'}} 
                        
                >
                  <Box>
                    <Text
                      fontSize={{base:"10px", md:"xs"}}
                      color="whiteAlpha.600"
                      fontWeight="semibold"
                      mb={1}
                    >
                      FECHA NAC.
                    </Text>
                    <Text fontSize={{base: "12px", md: "sm"}}  color="white" fontWeight="bold">
                      {jugadorData.birthDate || '01/01/1990'}
                    </Text>
                  </Box>
                  <Box ml={{base:-3, md:-8}}>
                    <Text
                      fontSize={{base:"10px", md:"xs"}}
                      color="whiteAlpha.600"  
                      fontWeight="semibold"
                      mb={1}
                    >
                      PAÍS
                    </Text>
                    <Text 
                    fontSize={{base: "12px", md: "sm"}} 
                    color="white" 
                    fontWeight="bold"
                    >
                      {jugadorData.country || 'Argentina'}
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      fontSize={{base:"10px", md:"xs"}}
                      color="whiteAlpha.600"
                      fontWeight="semibold"
                      mb={1}
                    >
                      CLUB ACTUAL
                    </Text>
                    <Flex  align="center" gap={2}>
                      {jugadorData.clubLogoActual && (
                        <ClubInfo clubData={Array.isArray(jugadorData.clubLogoActual) ? jugadorData.clubLogoActual[0] : null}>
                          <Image
                            src={Array.isArray(jugadorData.clubLogoActual) ? jugadorData.clubLogoActual[0].logo : jugadorData.clubLogoActual}
                            alt={jugadorData.club || 'Club actual'}
                            w={{ base: "20px", md: "25px" }}
                            h={{ base: "20px", md: "25px" }}
                            objectFit="contain"
                          />
                        </ClubInfo>
                      )}
                      <Text fontSize={{base: "12px", md: "sm"}} color="white" fontWeight="bold">
                        {jugadorData.club || 'Club actual'}
                      </Text>
                    </Flex>
                  </Box>
                  <Box ml={{base: 3, md:0}}>
                    <Text
                      fontSize={{base:"10px", md:"xs"}}
                      color="whiteAlpha.600"
                      fontWeight="semibold"
                      mb={1}
                    >
                      ESTATURA
                    </Text>
                    <Text fontSize={{base: "12px", md: "sm"}} color="white" fontWeight="bold">
                      {jugadorData.height || '1.80 m'}
                    </Text>
                  </Box>
                </Grid>
                {isMobile ? (
                    <Grid
                      templateColumns='repeat(2, 1fr)'
                      gap={4}
                      pb={10}
                    >
                        <Flex
                          gridColumn='span 2'
                          gap={6}
                          mb={4}
                          justify="center"
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
                        <Flex
                        justifyContent='center'
                        alignItems='center'
                        w="100%"
                        ml={3}
                        mt={2}
                        mb={6}
                        gridColumn='span 2'
                        >
                          <MotionFlex
                            bg="whiteAlpha.50"
                            borderRadius="lg"
                            px={4}
                            py={4}
                            border="1px solid"
                            borderColor="whiteAlpha.200"
                            transition={{ duration: 0.3 }}
                            w="50%"
                            h="198px"
                            justifyContent='flex-start'

                            flexDirection='column'
                          >
                            <Text
                              fontSize="xs"
                              color="orange.300"
                              fontWeight="bold"
                              mb={6}
                              textTransform="uppercase"
                            >
                              Estadísticas
                            </Text>
                            <Flex justify="space-between" mb={2}>
                              <Text fontSize="xs" color="whiteAlpha.700">
                                Goles
                              </Text>
                              <Text fontSize="xs" color="white" fontWeight="bold">
                                {goals}
                              </Text>
                            </Flex>
                            <Flex justify="space-between" mb={2}>
                              <Text fontSize="xs" color="whiteAlpha.700">
                                Asistencias
                              </Text>
                              <Text fontSize="xs" color="white" fontWeight="bold">
                                {assists}
                              </Text>
                            </Flex>
                            <Flex justify="space-between">
                              <Text fontSize="xs" color="whiteAlpha.700">
                                Partidos
                              </Text>
                              <Text fontSize="xs" color="white" fontWeight="bold">
                                {matches}
                              </Text>
                            </Flex>
                          </MotionFlex>
                          <MotionBox
                            bg="whiteAlpha.50"
                            borderRadius="lg"
                            border="1px solid"
                            borderColor="whiteAlpha.200"
                            transition={{ duration: 0.3 }}
                            w="70%"
                            h="150px"
                            transform="rotate(90deg)"
                          >
                            <Box
                              w="100%"
                              h="100%"
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              transform="rotate(180deg)"
                              transformOrigin="center"
                            >
                              <SoccerFieldPosition position={jugadorData.position} />
                            </Box>
                          </MotionBox>

                      </Flex>
                    </Grid>
                ) : (
                  <Box
                    id="stats"
                    flex={{base:"2", md:"1"}}
                    overflowY={{base:'auto' , md: 'hidden' }} 
                    h={{base:'600px', md: '100%' }} 
                  >
                    <Grid
                      templateColumns={{ base: 'repeat(2, 1fr)',md:'repeat(3, 1fr)' }}
                      gap={4}
                    >
                      <MotionBox
                        bg="whiteAlpha.50"
                        borderRadius="lg"
                        p={4}
                        border="1px solid"
                        borderColor="whiteAlpha.200"
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
                        order={{ base: 1, md: 0 }}
                        transition={{ duration: 0.3 }}
                        flexDirection= 'column'
                        alignItems="center"
                        justifyContent="center"
                        gridColumn={{ base: 'span 2', md: 'span 2' }}
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
                          transition={{ duration: 0.3 }}
                          w="60%"
                          h="150px"
                        >
                          <SoccerFieldPosition position={jugadorData.position} />
                        </MotionBox>
                      </MotionFlex>
                    </Grid>
                  </Box>
                )}
              </MotionFlex>
            </Flex>
          </Box>
        </ModalBody>
      </MotionModalContent>
    </Modal>
  );
}

export default FichaJugador;