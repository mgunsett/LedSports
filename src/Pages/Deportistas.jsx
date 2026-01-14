import { Flex, Heading, Text, Box, Image, SimpleGrid,HStack,VStack, IconButton} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import "./Deportistas.css";

import deportistas_gestion360 from "../assets/deportistas_gestion360.webp";
import deportistas_logos from "../assets/deportistas_logos.webp";
import deportistas_prematch from "../assets/deportistas_prematch.webp";
import deportistas_prematch1 from "../assets/deportistas_prematch1.webp";
import deportistas_prematch2 from "../assets/deportistas_prematch2.webp";
import deportistas_postpartido from "../assets/deportistas_postpartido.webp";
import deportistas_video from "../assets/deportistas_video.mp4";
import deportistas_aniversario from "../assets/deportistas_aniversario.webp";
import deportistas_perfil from "../assets/deportistas_perfil.webp";
import deportistas_perfil3 from "../assets/deportistas_perfil3.webp";
import deportistas_perfil4 from "../assets/deportistas_perfil4.webp";
import deportistas_fotografia from "../assets/deportistas_fotografia.webp";
import deportistas_estadis from "../assets/deportistas_estadis.webp";
import deportistas_carpetacom from "../assets/deportistas_carpetacom.webp";
import deportistas_planmkt from "../assets/deportistas_planmkt.webp";
import { BsChevronDoubleDown } from "react-icons/bs";
import Contact from "../components/Contact";
import MatchdayCarousel from "../components/MatchdayCarousel";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionBox = motion(Box);

const Deportistas = () => {

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const handleVideoInView = () => {
    if (videoRef.current) {
      // Asegurar que el video esté muteado antes de reproducir
      videoRef.current.muted = true;
      setIsMuted(true);
      
      // Reproducir automáticamente
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.warn("Autoplay falló:", error);
        setIsPlaying(false);
      });
    }
  };

  const handleVideoOutOfView = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reiniciar el video
      // Resetear estado al salir: muteado y pausado
      videoRef.current.muted = true;
      setIsMuted(true);
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((error) => {
          console.warn("Play falló:", error);
        });
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  return (
    <Flex
      bg="black"
      minHeight="100vh"
      pt={{ base: 40, md: 60 }}
      pb={{ base: 20, md: 0 }}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      {/* Hero Header */}
      <Flex
        justifyContent="start"
        alignItems="start"
        gap={2}
        flexDirection="row"
        alignSelf='start'
        w="100%"
        pl={{ base: 10, md: 16, lg: "250px" }}
        mb={{ base: 6, md: 10 }}
      >
        <MotionBox
          w={"2px"}
          h={{ base: "60px", md: "80px" }}
          bg="orange.400"
          mr={2}
          borderRadius="full"
          boxShadow="0px 0px 12px 1px rgba(245,160,15,0.56)"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <MotionHeading
          as="h1"
          fontSize={{ base: "4xl", md: "5xl" }}
          fontWeight="bold"
          color="white"
          lineHeight="shorter"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Depor
          <MotionText
            fontSize={{ base: "4xl", md: "5xl" }}
            as="span"
            color="orange.400"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            tistas
          </MotionText>
        </MotionHeading>
      </Flex>

      {/* Intro Text */}
      <MotionFlex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        px={{ base: 10, md: 0 }}
        my={{ base: 8, md: 16 }}
        w={{ base: "100%", md: "60%" }}
        fontSize={{ base: "md", md: "xl" }}
        fontWeight={{ base: "normal", md: "bold" }}
        color="white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <Text textAlign="center">
          Desde nuestros inicios en 2020, hemos trabajado en la marca personal de más de
          <Text as="mark" p={"3px"} bg="orange.400" color="white" mx={1}>
            350 deportistas
          </Text>
          que confiaron en nosotros. A ellos los acompañamos en las principales competiciones de América y el mundo.
        </Text>
      </MotionFlex>

      {/* Section Title */}
      <MotionFlex
        justifyContent="center"
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
        my={{ base: 10, md: 16 }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" color="white" textAlign="center">
          Así potenciamos
        </Text>
        <Text 
          fontSize={{ base: "4xl", md: "5xl" }} 
          fontWeight="bold" 
          color="orange.400" 
          textAlign="center" 
          mt={{ base: -4, md: 0 }}
        >
          tu marca
        </Text>
      </MotionFlex>

      {/* Plan Mkt */}
      <Box w="100%" maxW={{ base: "100%", md: "80%" }} px={{ base: 2, md: 8 }}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: 6, md: 8 }} mb={{ base: 10, md: 24 }}>
            <MotionBox
              bg="zinc.900"
              border="1px solid"
              borderColor="gray.800"
              borderRadius="xl"
              overflow="hidden"
              gridColumn={{ base: "span 1", lg: "span 2" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              _hover={{
                transform: "translateY(-8px)",
                borderColor: "orange.400",
                boxShadow: "0 0 20px rgba(245, 160, 15, 0.3)"
              }}
              transitionDuration="0.3s"
              
            >
              <Flex
                flexDirection={{ base: "column", md: "row" }}
                h="100%"
              >
                <Box
                  flex='1'
                  bg="gray.900"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p={{ base: 10, md: 6 }}
                  py={{ base: 16, md: 0 }}
                  minH={{ base: "150px", md: '"200px"' }}
                >
                  <Image
                    src= {deportistas_planmkt}
                    w={{ base: "180px", md: "250px" }}
                    h={{ base: "150px", md: "210px" }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="md"
                    color="gray.500"
                    fontSize="sm"
                    transitionDuration="0.3s"
                    _hover={{
                        transform: "translateY(-8px)",
                        borderColor: "orange.400",
                        filter: "drop-shadow(0px 0px 12px rgba(245,160,15,0.56))"
                      }}
                  />
                </Box>
                <Flex
                  flex='1'
                  flexDirection="column"
                  p={{ base: 6, md: 8 }}
                  gap={3}
                  justifyContent="center"
                >
                  <Text
                    as="h2"
                    fontSize={{ base: "xl", md:"2xl"}}
                    fontWeight="bold"
                    color="orange.400"
                    p={{ base: 0, md: 2 }}
                    alignSelf="start"
                  >
                    Plan de marketing
                  </Text>
                  <Text fontSize={{ base: "xs", md: "md" }} color="gray.300" lineHeight="tall">
                    Diseñamos el plan de marketing y comunicación adaptado a tu persona para generar el contenido adecuado.
                  </Text>
                </Flex>
              </Flex>
            </MotionBox>

            {/* Gestion 360º */}
            <MotionBox
              bg="zinc.900"
              border="1px solid"
              borderColor="gray.800"
              borderRadius="xl"
              overflow="hidden"
              gridColumn={{ base: "span 1", lg: "span 1" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              _hover={{
                transform: "translateY(-8px)",
                borderColor: "orange.400",
                boxShadow: "0 0 20px rgba(245, 160, 15, 0.3)"
              }}
              transitionDuration="0.3s"

            >
              <Flex
                flexDirection={{ base: "column", md: "column" }}
                h="100%"
              >
                <Box
                  flex={{ base: '1', md: '2' }}
                  bg="gray.900"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p={{ base: 12, md: 6 }}
                  py={{ base: 16, md: 0 }}
                  minH={{ base: "150px", md: "220px" }}
                >
                  <Image
                    src= {deportistas_gestion360}
                    w="200px"
                    h="200px"
                    objectFit="contain"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="md"
                    color="gray.500"
                    fontSize="sm"
                    transitionDuration="0.3s"
                    _hover={{
                        transform: "translateY(-8px)",
                        borderColor: "orange.400",
                        filter: "drop-shadow(0px 0px 12px rgba(245,160,15,0.56))"
                      }}
                  />
                </Box>
                <Flex
                  flex='1'
                  flexDirection="column"
                  p={{ base: 6, md: 8 }}
                  gap={3}
                  justifyContent="center"
                  h="100%"
                >
                  <Text
                    as="h2"
                    fontSize={{ base: "xl", md:"2xl"}}
                    fontWeight="bold"
                    color="orange.400"
                    p={{ base: 0, md: 2 }}
                    alignSelf="start"
                  >
                    Gestión 360º
                  </Text>
                  <Text fontSize={{ base: "xs", md: "md" }} color="gray.300" lineHeight="tall">
                    Generamos contenido adaptado para todas las redes sociales existentes.
                  </Text>
                </Flex>
              </Flex>
            </MotionBox>

            {/* Logos */}
            <MotionBox
              bg="zinc.900"
              border="1px solid"
              borderColor="gray.800"
              borderRadius="xl"
              overflow="hidden"
              gridColumn={{ base: "span 1", lg: "span 1" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              _hover={{
                transform: "translateY(-8px)",
                borderColor: "orange.400",
                boxShadow: "0 0 20px rgba(245, 160, 15, 0.3)"
              }}
              transitionDuration="0.3s"
            >
              <Flex
                flexDirection={{ base: "column", md: "column" }}
                h="100%"
              >
                <Box
                  flex={{ base: '1', md: '2' }}
                  bg="gray.900"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p={{ base: 14, md: 6 }}
                  py={{ base: 20, md: 0 }}
                  minH={{ base: "200px", md: "300px" }}
                >
                  <Image
                    src= {deportistas_logos}
                    w={{ base: "280px", md: "250px" }}
                    h={{ base: "180px", md: "150px" }}
                    objectFit={{base: "contain", md: "cover"}}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="md"
                    color="gray.500"
                    fontSize="sm"
                    transitionDuration="0.3s"
                    _hover={{
                        transform: "translateY(-8px)",
                        borderColor: "orange.400",
                        filter: "drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.56))"
                      }}
                  />
                </Box>
                <Flex
                  flex='1'
                  flexDirection="column"
                  p={{ base: 6, md: 8 }}
                  gap={3}
                  justifyContent="center"
                >
                  <Text
                    as="h2"
                    fontSize={{ base: "xl", md:"2xl"}}
                    fontWeight="bold"
                    color="orange.400"
                    p={{ base: 0, md: 2 }}
                    alignSelf="start"
                  >
                    Logos
                  </Text>
                  <Text fontSize={{ base: "xs", md: "md" }} color="gray.300" lineHeight="tall">
                    Creamos tu logo propio para identificar todo tu contenido profesionalmente.
                  </Text>
                </Flex>
              </Flex>
            </MotionBox>

            {/* Matchday */}
            <MotionBox
              bg="zinc.900"
              border="1px solid"
              borderColor="gray.800"
              borderRadius="xl"
              overflow="hidden"
              gridColumn={{ base: "span 1", lg: "span 2" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              _hover={{
                transform: "translateY(-8px)",
                borderColor: "orange.400",
                boxShadow: "0 0 20px rgba(245, 160, 15, 0.3)"
              }}
              transitionDuration="0.3s"
            >
              <Flex
                flexDirection={{ base: "column", md: "row" }}
                h="100%"
              >
                <Box
                  flex='2'
                  bg="gray.900"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p={{ base: 8, md: 6 }}
                  
                  minH={{ base: "370px", md: "200px" }}
                  overflow="hidden"
                >
                  <MatchdayCarousel 
                    images={[deportistas_prematch, deportistas_prematch1, deportistas_prematch2]} 
                  />
                </Box>
                <Flex
                  flex='1'
                  flexDirection="column"
                  p={{ base: 6, md: 8 }}
                  py={8}
                  gap={3}
                  justifyContent="center"
                >
                  <Text
                    as="h2"
                    fontSize={{ base: "xl", md:"2xl"}}
                    fontWeight="bold"
                    color="orange.400"
                    p={{ base: 0, md: 2 }}
                    alignSelf="start"
                  >
                    Matchday
                  </Text>
                  <Text fontSize={{ base: "xs", md: "md" }} color="gray.300" lineHeight="tall">
                    Anuncia tu próximo partido con placas estáticas o animadas de alta calidad
                  </Text>
                </Flex>
              </Flex>
            </MotionBox>

             {/* Matchday | Video */}
            <MotionBox
              bg="zinc.900"
              border="1px solid"
              borderColor="gray.800"
              borderRadius="xl"
              overflow="hidden"
              gridColumn={{ base: "span 1", lg: "span 2" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              _hover={{
                transform: "translateY(-8px)",
                borderColor: "orange.400",
                boxShadow: "0 0 20px rgba(245, 160, 15, 0.3)"
              }}
              transitionDuration="0.3s"
            >
              <Flex
                flexDirection={{ base: "column", md: "row" }}
                h="100%"
              >
                <Box
                  flex='2'
                  bg="gray.900"
                  position="relative"
                  w="100%"
                  minH={{ base: "150px", md: "200px" }}
                  minW={{ base: "150px", md: "200px" }}
                  overflow="hidden"
                  onViewportEnter={handleVideoInView}
                  onViewportLeave={handleVideoOutOfView}
                  role="group"
                >
                <video
                  src={deportistas_video}
                  ref={videoRef}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
                {/* Controles de video */}
                <HStack
                  position="absolute"
                  bottom="15px"
                  right="15px"
                  spacing={2}
                  opacity={0}
                  _groupHover={{ opacity: 1 }}
                  transition="opacity 0.3s ease-in-out"
                  bg="blackAlpha.600"
                  p={2}
                  borderRadius="full"
                >
                  <IconButton
                    aria-label={isPlaying ? "Pausar" : "Reproducir"}
                    icon={isPlaying ? <FaPause /> : <FaPlay />}
                    onClick={togglePlay}
                    size="sm"
                    variant="ghost"
                    color="white"
                    _hover={{ bg: 'whiteAlpha.300' }}
                    isRound
                  />
                  <IconButton
                    aria-label={isMuted ? "Activar sonido" : "Silenciar"}
                    icon={isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                    onClick={toggleMute}
                    size="sm"
                    variant="ghost"
                    color="white"
                    _hover={{ bg: 'whiteAlpha.300' }}
                    isRound
                  />
                </HStack>
                </Box>
                <Flex
                  flex='1'
                  flexDirection="column"
                  p={{ base: 6, md: 8 }}
                  py= {0}
                  gap={3}
                  justifyContent="center"
                >
                  <Text
                    as="h2"
                    fontSize={{ base: "xl", md:"2xl"}}
                    fontWeight="bold"
                    color="orange.400"
                    p={{ base: 0, md: 2 }}
                    alignSelf="start"
                  >
                    Reels
                  </Text>
                  <Text fontSize={{ base: "xs", md: "md" }} color="gray.300" lineHeight="tall">
                    Generamos videos profesionales para tus redes sociales.
                  </Text>
                </Flex>
              </Flex>
            </MotionBox>

          {/* PostPartido */}
          <MotionBox
            bg="zinc.900"
            border="1px solid"
            borderColor="gray.800"
            borderRadius="xl"
            overflow="hidden"
            gridColumn={{ base: "span 1", lg: "span 1" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            _hover={{
              transform: "translateY(-8px)",
              borderColor: "orange.400",
              boxShadow: "0 0 20px rgba(245, 160, 15, 0.3)"
            }}
            transitionDuration="0.3s"
            position="relative"
          >
            <Flex
              flexDirection={{ base: "column", md: "column" }}
              h="100%"
            >
              <Box
                flex='2'
                bg="gray.900"
                display="flex"
                alignItems="center"
                justifyContent="center"
                p={{  base: 10, md: 6 }}
                minH={{ base: "200px", md: "300px" }}
                overflow="hidden"
              >
                <Image
                  src={deportistas_postpartido}
                  w={{base: "300px", md: "320px"}}
                  h={{base: "350px", md: "320px"}}
                  objectFit="contain"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="md"
                  color="gray.500"
                  fontSize="sm"
                  transitionDuration="0.3s"
                  _hover={{
                    filter: "drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.56))",
                    cursor: {base: 'auto', md: "zoom-in" },
                  }}
                  _active={{
                        position: {base: "none", md: "relative"},
                        w: {base: "none", md: "650px"},
                        h: {base: "none", md: "500px"},
                      }}
                />
              </Box>
              <Flex
                flex='1'
                flexDirection="column"
                p={{ base: 6, md: 8 }}
                gap={3}
                justifyContent="center"
              >
                <Text
                  as="h2"
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  color="orange.400"
                  p={{ base: 0, md: 2 }}
                  alignSelf="start"
                >
                  Post partido
                </Text>
                <Text fontSize={{ base: "xs", md: "md" }} color="gray.300" lineHeight="tall">
                 Comunica tus sensaciones de manera profesional con imágenes o videos.
                </Text>
              </Flex>
            </Flex>
          </MotionBox>

          {/* Optimizacion de Perfil */}
          <MotionBox
              bg="zinc.900"
              border="1px solid"
              borderColor="gray.800"
              borderRadius="xl"
              overflow="hidden"
              gridColumn={{ base: "span 1", lg: "span 3" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              _hover={{
                transform: "translateY(-8px)",
                borderColor: "orange.400",
                boxShadow: "0 0 20px rgba(245, 160, 15, 0.3)"
              }}
              transitionDuration="0.3s"
            >
              <Flex
                flexDirection={{ base: "column", md: "row" }}
                h="100%"
              >
                <Box
                  flex='3'
                  bg="gray.900"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection={{ base: "column", md: "row" }}
                  gap={2}
                  p={10}
                  minH={{ base: "150px", md: "200px" }}
                >
                  <Image
                    src= {deportistas_perfil}
                    w={{ base: "250px", md: "320px" }}
                    h={{ base: "250px", md: "250px" }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="md"
                    color="gray.500"
                    fontSize="sm"
                    transitionDuration="0.3s"
                    objectFit={'contain'}
                    _hover={{
                        transform: "translateY(-8px)",
                        borderColor: "orange.400",
                        filter: "drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.56))",
                        cursor: 'zoom-in',
                      }}
                    _active={{
                        position: "relative",
                        w: { base: "none", md: "550px" },
                        h: { base: "none", md: "450px" },
                      }}
                  />
                  <Flex flexDirection="column" alignItems="center" gap={2}>
                    <Image
                      src={deportistas_perfil3}
                      w={{ base: "300px", md: "380px" }}
                      h={{ base: "120px", md: "150px" }}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="md"
                      color="gray.500"
                      fontSize="sm"
                      transitionDuration="0.3s"
                      objectFit={'contain'}
                      ml={2}
                      _hover={{
                        transform: "translateY(-8px)",
                        borderColor: "orange.400",
                        filter: "drop-shadow(0px 0px 12px rgba(245,160,15,0.56))"
                      }}
                    />
                    <Image
                      src={deportistas_perfil4}
                      w={{ base: "300px", md: "380px" }}
                      h={{ base: "120px", md: "150px" }}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="md"
                      color="gray.500"
                      fontSize="sm"
                      transitionDuration="0.3s"
                      objectFit={'contain'}
                      ml={2}
                      _hover={{
                        transform: "translateY(-8px)",
                        borderColor: "orange.400",
                        filter: "drop-shadow(0px 0px 12px rgba(245,160,15,0.56))"
                      }}
                    />
                  </Flex>
                  </Box>
                  <Flex
                    flex='1'
                    flexDirection="column"
                    p={{ base: 6, md: 8 }}
                    gap={3}
                    justifyContent="center"
                  >
                    <Text
                      as="h2"
                      fontSize={{ base: "xl", md:"2xl"}}
                      fontWeight="bold"
                      color="orange.400"
                      p={{ base: 0, md: 2 }}
                      alignSelf="start"
                    >
                      Optimización de Perfil
                    </Text>
                    <Text fontSize={{ base: "xs", md: "md" }} color="gray.300" lineHeight="tall">
                      Organizamos tu perfil con biografía, portada e historias destacadas profesionales.
                    </Text>
                  </Flex>
                </Flex>
            </MotionBox>

             {/* Conmemorativas */}
            <MotionBox
              bg="zinc.900"
              border="1px solid"
              borderColor="gray.800"
              borderRadius="xl"
              overflow="hidden"
              gridColumn={{ base: "span 1", lg: "span 1" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              _hover={{
                transform: "translateY(-8px)",
                borderColor: "orange.400",
                boxShadow: "0 0 20px rgba(245, 160, 15, 0.3)"
              }}
              transitionDuration="0.3s"
            >
              <Flex
                flexDirection={{ base: "column", md: "column" }}
                h="100%"
              >
                <Box
                  flex='2'
                  bg="gray.900"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p={10}
                  py={{ base: 16, md: 10 }}
                  minH={{ base: "200px", md: "220px" }}
                >
                  <Image
                    src= {deportistas_aniversario}
                    w={{ base: "250px", md: "280px" }}
                    h={{ base: "270px", md: "300px" }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="md"
                    color="gray.500"
                    fontSize="sm"
                    transitionDuration="0.3s"
                    objectFit={'contain'}
                    _hover={{
                        transform: "translateY(-8px)",
                        borderColor: "orange.400",
                        filter: "drop-shadow(0px 0px 12px rgba(245,160,15,0.56))"
                      }}
                  />
                </Box>
                <Flex
                  flex='1'
                  flexDirection="column"
                  p={{ base: 6, md: 8 }}
                  py={{ base: 6, md: 8 }}
                  gap={3}
                  justifyContent="center"
                  h="100%"
                >
                  <Text
                    as="h2"
                    fontSize={{ base: "xl", md:"2xl"}}
                    fontWeight="bold"
                    color="orange.400"
                    p={{ base: 0, md: 2 }}
                    alignSelf="start"
                  >
                    Conmemorativas
                  </Text>
                  <Text fontSize={{ base: "xs", md: "md" }} color="gray.300" lineHeight="tall">
                    Contenido especial para fechas importantes y aniversarios de clubes.
                  </Text>
                </Flex>
              </Flex>
            </MotionBox>

            {/* Estadísticas */}
            <MotionBox
              bg="zinc.900"
              border="1px solid"
              borderColor="gray.800"
              borderRadius="xl"
              overflow="hidden"
              gridColumn={{ base: "span 1", lg: "span 1" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              _hover={{
                transform: "translateY(-8px)",
                borderColor: "orange.400",
                boxShadow: "0 0 20px rgba(245, 160, 15, 0.3)"
              }}
              transitionDuration="0.3s"
            >
              <Flex
                flexDirection={{ base: "column", md: "column" }}
                h="100%"
              >
                <Box
                  flex='2'
                  bg="gray.900"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p={8}
                  pb={{ base: '90px', md: 10 }}
                  minH={{ base: "200px", md: "220px" }}
                >
                  <Image
                    src= {deportistas_estadis}
                    w={{ base: "180px", md: "200px" }}
                    h={{ base: "340px", md: "360px" }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="md"
                    color="gray.500"
                    fontSize="sm"
                    transitionDuration="0.3s"
                    mt={-4}
                    objectFit={'contain'}
                  />
                </Box>
                <Flex
                  flex='1'
                  flexDirection="column"
                  p={{ base: 6, md: 8 }}
                  py={{ base: 6, md: 8  }}
                  gap={3}
                  justifyContent="center"
                  h="100%"
                >
                  <Text
                    as="h2"
                    fontSize={{ base: "xl", md:"2xl"}}
                    fontWeight="bold"
                    color="orange.400"
                    p={{ base: 0, md: 2 }}
                    alignSelf="start"
                  >
                    Estadísticas
                  </Text>
                  <Text fontSize={{ base: "xs", md: "md" }} color="gray.300" lineHeight="tall">
                    Análisis visual de tu rendimiento, progresos y logros deportivos.
                  </Text>
                </Flex>
              </Flex>
            </MotionBox>

            {/* Fotografia */}
            <MotionBox
              bg="zinc.900"
              border="1px solid"
              borderColor="gray.800"
              borderRadius="xl"
              overflow="hidden"
              gridColumn={{ base: "span 1", lg: "span 1" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              _hover={{
                transform: "translateY(-8px)",
                borderColor: "orange.400",
                boxShadow: "0 0 20px rgba(245, 160, 15, 0.3)"
              }}
              transitionDuration="0.3s"
            >
              <Flex
                flexDirection={{ base: "column", md: "column" }}
                h="100%"
              >
                <Box
                  flex='2'
                  bg="gray.900"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p={{ base: 12, md: 6 }}
                  pb={12}
                  minH={{ base: "200px", md: "220px" }}
                >
                  <Image
                    src= {deportistas_fotografia}
                    w="200px"
                    h="150px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="md"
                    color="gray.500"
                    fontSize="sm"
                    transitionDuration="0.3s"
                    
                    _hover={{
                        transform: "translateY(-8px)",
                        borderColor: "orange.400",
                        filter: "drop-shadow(0px 0px 12px rgba(245,160,15,0.56))"
                      }}
                  />
                </Box>
                <Flex
                  flex='1'
                  flexDirection="column"
                  p={{ base: 6, md: 8 }}
                  py={{ base: 12, md: 6 }}
                  gap={3}
                  justifyContent="center"
                  h="100%"
                >
                  <Text
                    as="h2"
                    fontSize={{ base: "xl", md:"2xl"}}
                    fontWeight="bold"
                    color="orange.400"
                    p={{ base: 0, md: 2 }}
                    alignSelf="start"
                  >
                    Fotografía
                  </Text>
                  <Text fontSize={{ base: "xs", md: "md" }} color="gray.300" lineHeight="tall">
                    Fotógrafos y filmmakers en todo el mundo para contenido de alta calidad.
                  </Text>
                </Flex>
              </Flex>
            </MotionBox>

            {/* Carpeta Comercial */}
            <MotionBox
              bg="zinc.900"
              border="1px solid"
              borderColor="gray.800"
              borderRadius="xl"
              overflow="hidden"
              gridColumn={{ base: "span 1", lg: "span 3" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              _hover={{
                transform: "translateY(-8px)",
                borderColor: "orange.400",
                boxShadow: "0 0 20px rgba(245, 160, 15, 0.3)"
              }}
              transitionDuration="0.3s"
            >
              <Flex
                flexDirection={{ base: "column", md: "row" }}
                h="100%"
              >
                <Box
                  flex={{ base: '2', md: '1' }}
                  bg="gray.900"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p={{ base: 16, md: 6 }}
                  py={{ base: 16, md: 10 }}
                  minH={{ base: "200px", md: "220px" }}
                >
                  <Image
                    src= {deportistas_carpetacom}
                    w={{base: "120px" , md: "140px"}}
                    h="200px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="md"
                    color="gray.500"
                    fontSize="sm"
                    transitionDuration="0.3s"
                    objectFit={'contain'}
                    _hover={{
                        transform: "translateY(-8px)",
                        borderColor: "orange.400",
                        filter: "drop-shadow(0px 0px 12px rgba(245,160,15,0.56))"
                      }}
                  />
                </Box>
                <Flex
                  flex={{ base: '1', md: '2' }}
                  flexDirection="column"
                  p={{ base: 6, md: 8 }}
                  gap={3}
                  justifyContent="center"
                  h="100%"
                >
                  <Text
                    as="h2"
                    fontSize={{ base: "xl", md:"2xl"}}
                    fontWeight="bold"
                    color="orange.400"
                    p={{ base: 0, md: 2}}
                    alignSelf="start"
                  >
                    Carpeta Comercial
                  </Text>
                  <Text fontSize={{ base: "xs", md: "md" }} color="gray.300" lineHeight="tall">
                    Destacamos tus beneficios para acercar tu imagen a marcas comerciales.
                  </Text>
                </Flex>
              </Flex>
            </MotionBox>
        </SimpleGrid>
      </Box>
   
      <MotionBox
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        fontSize={{ base: "50px", md: "100px" }}
        mt={{ base: 8, md: 16 }}
      >
        <BsChevronDoubleDown color="orange" />
      </MotionBox>
      <Contact />
    </Flex>
  );
};

export default Deportistas;


