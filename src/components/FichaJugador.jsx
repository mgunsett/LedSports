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
  useBreakpointValue,
  Link,
  Icon
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import ClubInfo from './ClubInfo';
import CircularProgress from './CircularProgress';
import SoccerFieldPosition from './SoccerFieldPosition';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import './FichaJugador.css';

const MotionModalContent = motion(ModalContent);
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

function FichaJugador({ isOpen, onClose, jugador }) {
  const jugadorData = jugador || {};
// Circulos de progreso
  const aereo = jugadorData.aereo;
  const recuperos = jugadorData.recuperos;
  const pases = jugadorData.pases;
  const oportunidadDeTiro = jugadorData.tiros;
  const fitness = jugadorData.fitness;
// Ficha Estadísticas
  const goals = jugadorData.goals;
  const partidos = jugadorData.partidos;

  const isMobile = useBreakpointValue({ base: true, sm: false, md: false });

  return (
    <Modal
      isCentered
      isOpen={isOpen}
      onClose={onClose} 
      size={{base:'100%', md:'6xl'}}  
    >
      <ModalOverlay
        bg="transparent"
        backdropFilter="blur(5px)"
      />
      <MotionModalContent
        maxW={{ base: '95vw', md: '90vw', lg: '85vw' }}
        maxH={{ base: '95vh', md: '90vh', lg: '85vh' }}
        h={{ base: '100vh', md: '90vh' }}
        bg="transparent"
        overflow="hidden"
        borderRadius="2xl"
        boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.5)"
        initial={isMobile ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 60 }}
        animate={ isMobile ? { opacity: 1, scale: 1, y: 0} : { opacity: 1, scale: 1, y: 0 }}
        exit={ isMobile ? { opacity: 1, scale: 1, y: 0} :   { opacity: 0, scale: 0.9, y: 60 }}
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
                    <Text fontSize={{base: "12px", md: "xs"}}  color="white" fontWeight="bold">
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
                    fontSize={{base: "12px", md: "xs"}} 
                    color="white" 
                    fontWeight="bold"
                    >
                      {jugadorData.country || 'Argentina'}
                    </Text>
                  </Box>
                  <Box ml={{base:-3, md:-8}}>
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
                      {jugadorData.altura || '1.80 m'}
                    </Text>
                  </Box>
                </Grid>
                {isMobile ? (
                    <Flex
                      flexDirection= 'column'
                      alignItems="center"
                      justifyContent="center"
                      h="100%"
                      w="100%"
                      gap={4}
                      pb={6}
                    >
                      <Flex
                        gap={6}
                        mb={4}
                        justify="center"
                        flexWrap="wrap"
                        >
                          {recuperos ? (
                          <CircularProgress
                            value={recuperos}
                            label="Recuperos"
                            size={90}
                          />
                          ) : null}
                          {aereo ? (
                          <CircularProgress
                            value={aereo}
                            label="Juego aéreo"
                            size={90}
                          />
                          ) : null}
                          {pases ? (
                          <CircularProgress
                            value={pases}
                            label="Precisión pases"
                            size={90}
                          />
                          ) : null}
                          {oportunidadDeTiro ? (
                          <CircularProgress 
                            value={oportunidadDeTiro}
                            label="Tiros al arco"
                            size={90} 
                          />
                          ) : null}
                          {fitness ? (
                          <CircularProgress
                            value={fitness}
                            label="Condición física"
                            size={90}
                          />
                          ) : null}
                      </Flex>
                      <Flex
                        flexDirection= 'column'
                        justifyContent='center'
                        alignItems='center'
                        w="100%"
                        h="100%"
                        gap={4}
                        mb={6}
                        >
                          <Flex
                          flexDirection= 'row'
                          alignItems="center"
                          justifyContent="center"
                          w="100%"
                          h="100%"                                                                    
                          >
                            <Flex
                              className='estadisticas_mobile'
                              w="110%"
                              h="110%"
                              flexDirection='column'
                              alignItems="space-between"
                              justifyContent="start"
                              bg="whiteAlpha.50"
                              borderRadius="lg"
                              p={4}
                              border="1px solid"
                              borderColor="whiteAlpha.200"
                            >
                              <Text
                                fontSize="xs"
                                color="orange.300"
                                fontWeight="bold"
                                mt={2}
                                mb={4}
                                textTransform="uppercase"
                              >
                                Estadísticas Generales
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
                                  Partidos
                                </Text>
                                <Text fontSize="xs" color="white" fontWeight="bold">
                                  {partidos}
                                </Text>
                              </Flex>
                              <Flex justify="space-between" mb={2}>
                                <Text fontSize="xs" color="whiteAlpha.700">
                                  Pie hábil
                                </Text>
                                <Text fontSize="xs" color="white" fontWeight="bold">
                                  {jugadorData.pieHabil}
                                </Text>
                              </Flex>
                            </Flex>
                            <Box
                              className='cancha_position'
                              bg="whiteAlpha.50"
                              borderRadius="lg"
                              border="1px solid"
                              borderColor="whiteAlpha.200"
                              w="90%"
                              h="85%"
                              mr={-5}
                              transform="rotate(90deg)"
                            >
                              <SoccerFieldPosition position={jugadorData.position} />
                            </Box>         
                          </Flex>
                        <Flex
                            w="100%"
                            h="40%"
                            flexDirection='column'
                            alignItems="space-between"
                            justifyContent="center"
                            bg="whiteAlpha.50"
                            borderRadius="lg"
                            p={4}
                            pb={2}
                            border="1px solid"
                            borderColor="whiteAlpha.200"
                          >
                            <Text
                              fontSize="xs"
                              color="orange.300"
                              fontWeight="bold"
                              textTransform="uppercase"
                              mb={'5px'}
                            >
                              Ficha
                            </Text>
                            <Flex justify="space-between" mb={2}>
                              <Text fontSize="xs" color="whiteAlpha.700">
                                Descargar PDF
                              </Text>
                              <MdOutlineFileDownload size={16} color="white" />
                            </Flex>
                            <Flex justify="space-between">
                            <Text
                              fontSize="xs"
                              color="orange.300"
                              fontWeight="bold"
                              textTransform="uppercase"
                              mb={'7px'}
                            >
                              Redes Sociales
                            </Text>
                            <Flex justify="flex-start" mb={2} gap={3}>
                              <Link href={`https://www.instagram.com/${jugadorData.instagram}`} isExternal>
                                <Icon as={FaInstagram} color="white" boxSize='15px' transition="all 0.4s ease" _hover={{ color: 'orange.300' }} />
                              </Link>
                              <Link href={`https://www.tiktok.com/${jugadorData.tiktok}`} isExternal>
                                <Icon as={FaTiktok} color="white" boxSize='15px' transition="all 0.4s ease" _hover={{ color: 'orange.300' }} />
                              </Link>
                            </Flex>
                            </Flex>
                          </Flex>
                      </Flex>
                    </Flex>
                ) : (
                  <Box
                    id="stats"
                    flex="1"
                    overflowY='hidden'
                    h= '100%'
                  >
                    <Flex
                      flexDirection= 'row'
                      alignItems="flex-start"
                      justifyContent='center'
                      h="100%"
                      gap={12}
                    >
                      <Flex
                        flexDirection= 'column'
                        alignItems="center"
                        justifyContent="flex-start"
                        h="100%"
                        w="43%"
                        gap={'12px'}                     
                        >
                          <MotionFlex
                            w="100%"
                            flexDirection='column'
                            alignItems="space-between"
                            justifyContent="center"
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
                              <Text fontSize="xs" color="whiteAlpha.700">
                                Goles
                              </Text>
                              <Text fontSize="xs" color="white" fontWeight="bold">
                                {goals}
                              </Text>
                            </Flex>
                            <Flex justify="space-between" mb={2}>
                              <Text fontSize="xs" color="whiteAlpha.700">
                                Partidos
                              </Text>
                              <Text fontSize="xs" color="white" fontWeight="bold">
                                {partidos}
                              </Text>
                            </Flex>
                            <Flex justify="space-between" mb={2}>
                              <Text fontSize="xs" color="whiteAlpha.700">
                                Pie hábil
                              </Text>
                              <Text fontSize="xs" color="white" fontWeight="bold">
                                {jugadorData.pieHabil}
                              </Text>
                            </Flex>
                          </MotionFlex>
                          <MotionFlex
                            w="100%"
                            flexDirection='column'
                            alignItems="space-between"
                            justifyContent="center"
                            bg="whiteAlpha.50"
                            borderRadius="lg"
                            p={4}
                            pb={2}
                            border="1px solid"
                            borderColor="whiteAlpha.200"
                            transition={{ duration: 0.3 }}
                          >
                            <Text
                              fontSize="xs"
                              color="orange.300"
                              fontWeight="bold"
                              textTransform="uppercase"
                              mb={'5px'}
                            >
                              Ficha 
                            </Text>
                            <Flex justify="space-between" mb={2}>
                              <Text fontSize="xs" color="whiteAlpha.700">
                                Descargar PDF
                              </Text>
                              <MdOutlineFileDownload size={16} color="white" />
                            </Flex>
                            <Text
                              fontSize="xs"
                              color="orange.300"
                              fontWeight="bold"
                              textTransform="uppercase"
                              mb={'7px'}
                            >
                              Redes Sociales
                            </Text>
                            <Flex justify="flex-start" mb={2} gap={3}>
                              <Link href={`https://www.instagram.com/${jugadorData.instagram}`} isExternal>
                                <Icon as={FaInstagram} color="white" boxSize='15px' transition="all 0.4s ease" _hover={{ color: 'orange.300' }} />
                              </Link>
                              <Link href={`https://www.tiktok.com/${jugadorData.tiktok}`} isExternal>
                                <Icon as={FaTiktok} color="white" boxSize='15px' transition="all 0.4s ease" _hover={{ color: 'orange.300' }} />
                              </Link>
                            </Flex>
                          </MotionFlex>
                      </Flex>
                      <MotionFlex
                        order={{ base: 1, md: 0 }}
                        transition={{ duration: 0.3 }}
                        flexDirection= 'column'
                        alignItems="center"
                        justifyContent="center"
                        w="70%"
                      >
                        <Flex
                          gap={{ base: 3, md: 6 }}
                          mb={{ base: 4, md: 6 }}
                          justify="end"
                          flexWrap="wrap"
                        > 
                          {recuperos ? (
                          <CircularProgress
                            value={recuperos}
                            label="Quites por partido"
                            size={90}
                          />
                          ) : null}
                          {aereo ? (
                          <CircularProgress
                            value={aereo}
                            label="Juego aéreo"
                            size={90}
                          />
                          ) : null}
                          {pases ? (
                          <CircularProgress
                            value={pases}
                            label="Precisión pases"
                            size={90}
                          />
                          ) : null}
                          {oportunidadDeTiro ? (
                          <CircularProgress 
                            value={oportunidadDeTiro}
                            label="Oportunidad de tiro"
                            size={90} 
                          />
                          ) : null}
                          {fitness ? (
                          <CircularProgress
                            value={fitness}
                            label="Condición física"
                            size={90}
                          />
                          ) : null}
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
                    </Flex> 
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