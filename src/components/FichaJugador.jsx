import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
  Flex,
  Text,
  Image,
  Heading,
  Stack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionModalContent = motion(ModalContent);
const MotionBox = motion(Box);

function FichaJugador({ isOpen, onClose, jugador }) {
  const jugadorData = jugador || {};

  return (
    <Modal 
    isCentered 
    isOpen={isOpen} 
    onClose={onClose} 
    size="4xl"
    colorScheme="orange"
    >
      <ModalOverlay
        bg="blackAlpha.600"
        backdropFilter="blur(6px) saturate(120%)"
      />
      <MotionModalContent
        maxW="60vw"
        maxH="80vh"
        h={{ base: '80vh', md: '80vh' }}
        bg="gray.900"
        color="white"
        overflow="hidden"
        borderRadius="lg"
        boxShadow="xl"
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.9 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <ModalHeader px={6} pt={5} pb={3} mb={8} borderBottomWidth="1px" borderColor="whiteAlpha.200">
            <Heading fontSize={{ base: 'lg', md: 'xl' }} mb={-4}>
                {jugadorData.Firstname ||'Nombre del jugador'}
            </Heading>
            <Text fontSize={{ base: '2xl', md: '5xl' }} fontWeight="bold" color="orange.400">
                {jugadorData.Lastname || 'Apellido del jugador'}
            </Text>
        </ModalHeader>
        <ModalCloseButton _hover={{ color:'red.400'}}/>
        <ModalBody p={0}>
          <Flex h={{ base: 'calc(80vh - 80px)', md: 'calc(80vh - 90px)' }}>
            <Box
              w="20%"
              h="100%"
              position="relative"
              overflow="hidden"
            >
              <Image
                src={jugadorData.img}
                alt={jugadorData.fullName || jugadorData.name || 'Jugador'}
                objectFit="cover"
                w="100%"
                h="100%"
              />
            </Box>

            <Box w="80%" h="100%" px={6} py={4} overflowY="auto">
              <Stack spacing={4} mb={10}>
                <Flex gap={6} flexWrap="wrap" fontSize="sm">
                  <Box minW="120px">
                    <Text fontWeight="bold" color="orange.300">Fecha de nacimiento</Text>
                    <Text>{jugadorData.birthDate || '01/01/1990'}</Text>
                  </Box>
                  <Box minW="120px">
                    <Text fontWeight="bold" color="orange.300">País</Text>
                    <Text>{jugadorData.country || 'País de origen'}</Text>
                  </Box>
                  <Box minW="120px">
                    <Text fontWeight="bold" color="orange.300">Posición</Text>
                    <Text>{jugadorData.position || 'Posición en el campo'}</Text>
                  </Box>
                  <Box minW="120px">
                    <Text fontWeight="bold" color="orange.300">Club actual</Text>
                    <Text>{jugadorData.club || 'Club actual'}</Text>
                  </Box>
                  <Box minW="120px">
                    <Text fontWeight="bold" color="orange.300">Número</Text>
                    <Text>{jugadorData.number || '10'}</Text>
                  </Box>
                  <Box minW="120px">
                    <Text fontWeight="bold" color="orange.300">Estatura</Text>
                    <Text>{jugadorData.height || '1,80 m'}</Text>
                  </Box>
                </Flex>
              </Stack>

              <Flex gap={4} flexWrap="wrap">
                <MotionBox
                  style={{ flex: '1 1 200px' }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <Box
                    bg="whiteAlpha.100"
                    borderRadius="md"
                    p={4}
                    h="100%"
                    borderWidth="1px"
                    borderColor="whiteAlpha.200"
                  >
                    <Text fontWeight="bold" mb={2} color="orange.300">
                      Estadísticas
                    </Text>
                    <Text fontSize="sm" color="whiteAlpha.800" mb={3}>
                      Resumen general de rendimiento del jugador en la última temporada.
                    </Text>
                    <Flex justify="space-between" fontSize="sm">
                      <Box>
                        <Text fontWeight="bold">Goles</Text>
                        <Text>12</Text>
                      </Box>
                      <Box>
                        <Text fontWeight="bold">Asistencias</Text>
                        <Text>7</Text>
                      </Box>
                      <Box>
                        <Text fontWeight="bold">Partidos</Text>
                        <Text>34</Text>
                      </Box>
                    </Flex>
                  </Box>
                </MotionBox>

                <MotionBox
                  style={{ flex: '1 1 200px' }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <Box
                    bg="whiteAlpha.100"
                    borderRadius="md"
                    p={4}
                    h="100%"
                    borderWidth="1px"
                    borderColor="whiteAlpha.200"
                  >
                    <Text fontWeight="bold" mb={2} color="orange.300">
                      Posición y mapa de calor
                    </Text>
                    <Text fontSize="sm" color="whiteAlpha.800" mb={3}>
                      Zonas del campo donde el jugador interviene con mayor frecuencia.
                    </Text>
                    <Box
                      w="100%"
                      h="120px"
                      borderRadius="md"
                      bgGradient="linear(to-r, green.500, yellow.400, red.500)"
                      opacity={0.8}
                    />
                  </Box>
                </MotionBox>

                <MotionBox
                  style={{ flex: '1 1 200px' }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <Box
                    bg="whiteAlpha.100"
                    borderRadius="md"
                    p={4}
                    h="100%"
                    borderWidth="1px"
                    borderColor="whiteAlpha.200"
                  >
                    <Text fontWeight="bold" mb={2} color="orange.300">
                      Rendimiento físico
                    </Text>
                    <Text fontSize="sm" color="whiteAlpha.800" mb={3}>
                      Datos aproximados de carga física típica del jugador.
                    </Text>
                    <Flex justify="space-between" fontSize="sm">
                      <Box>
                        <Text fontWeight="bold">Km recorridos</Text>
                        <Text>10,2 km</Text>
                      </Box>
                      <Box>
                        <Text fontWeight="bold">Sprints</Text>
                        <Text>28</Text>
                      </Box>
                      <Box>
                        <Text fontWeight="bold">Velocidad máx.</Text>
                        <Text>32 km/h</Text>
                      </Box>
                    </Flex>
                  </Box>
                </MotionBox>
              </Flex>
            </Box>
          </Flex>
        </ModalBody>
      </MotionModalContent>
    </Modal>
  );
}

export default FichaJugador;