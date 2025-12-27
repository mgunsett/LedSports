import React, { useRef, useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  IconButton,
  HStack,
  useBreakpointValue
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import nacion_led from '../assets/NACIONLED.mp4';
import './About.css';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const About = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleVideoInView = () => {
    if (videoRef.current) {
      // Reproducir siempre muteado al inicio para evitar bloqueos
      videoRef.current.muted = true;
      setIsMuted(true);
      
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
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <Flex
      id="about"
      direction={{ base: 'column-reverse', md: 'row' }}
      align="center"
      justify={{ base: 'center', md: 'space-evenly' }}
      py={{ base: 8, md: 10 }}
      px={{ base: 0, md: 20 }}
      gap={{ base: 10, md: 0 }}
      mb={{ base: 12, md: 0 }}
      bg="black"
      overflow="hidden"
    >
      <MotionBox
        id="video_led"
        w={{base:"429px", sm:"440px", md:"100%"}}
        maxW={{ base: '550px', md: '800px' }}
        maxH={{ base: '500px', md: '750px' }}
        initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        whileInView={isMobile ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
        onViewportEnter={handleVideoInView}
        onViewportLeave={handleVideoOutOfView}
        position="relative"
        role="group"
        // filter="drop-shadow(0px 0px 14px rgba(255, 165, 0, 0.5))"
        borderColor="orange.400"
        borderWidth="1px"
        borderRadius="8px"
        overflow="hidden"
        right="-0.6px"
      >
        <video 
          class="video-led"
          ref={videoRef}
          src={nacion_led} 
          loop 
          muted={isMuted}
          playsInline
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
      </MotionBox>

      {/* Texto de descripción */}
      <VStack
        align={{ base: 'flex-end', md: 'start' }}
        spacing={{ base: 2,  md: 5 }}
        textAlign={{ base: 'end', md: 'left' }}
        maxW="350px"
        w="95%"
      >
        <MotionHeading
          fontSize={{ base: '4xl', md: '3xl' }}
          fontWeight="bold"
          color="white"
          lineHeight="shorter"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Text fontSize={{ base: '4xl', md: '3xl' }}>Sobre </Text><Text as="span" fontFamily="Stack Sans Headline, sans-serif" color="orange.400">LED</Text>SPORTS
        </MotionHeading>
        <MotionText
          color="whiteAlpha.800"
          fontSize={{ base: '15px', md: '20px' }}
          lineHeight={{ base: 1.5 , md: 1.7 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Somos una agencia de marketing deportivo, que nos encargamos de crear & potenciar la marca de deportistas y entidades deportivas, a través de la profesionalización de sus redes sociales.
        </MotionText>
      </VStack>
    </Flex>
  );
};

export default About;
