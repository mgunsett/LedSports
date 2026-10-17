import { useEffect, useRef, useState } from 'react';
import { Box, Flex, HStack, IconButton, Text, useBreakpointValue } from '@chakra-ui/react';
import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { FaPause, FaPlay, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import nacion_led from '@/assets/videos/video_nacionled.mp4';
import nacion_led_poster from '@/assets/videos/NACIONLED-poster.jpg';

/*
 * "Sobre nosotros" · versión Cine
 * El video arranca como tarjeta centrada y se expande a pantalla completa con el scroll.
 * "Sobre" y "LED SPORTS" se separan y desaparecen; luego entra el texto sobre el video.
 * - Requiere que ningún ancestro tenga overflow: hidden (usar overflow: clip), si no el sticky no funciona.
 * - Con "reducir movimiento" se muestra la versión final estática (video completo + texto).
 */

const MotionBox = motion(Box);
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const DESCRIPTION =
  'Somos una agencia de marketing deportivo. Creamos y potenciamos la marca de deportistas y entidades deportivas a través de la profesionalización de sus redes y web propia.';
const PILLS = ['Deportistas', 'Entidades deportivas', 'Redes sociales'];

const Brand = (props) => (
  <Text as="span" fontStyle="italic" fontWeight="700" letterSpacing="-0.01em" {...props}>
    NACIÓN  <Text as="span" color="orange.400" ml="0.12em">LED</Text>
  </Text>
);

function useSectionVideo(containerRef) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const userPaused = useRef(false);
  const inView = useInView(containerRef, { amount: 0.35 });

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (inView) {
      if (userPaused.current) return;
      v.muted = true;
      setIsMuted(true);
      v.play().catch(() => setIsPlaying(false));
    } else {
      v.pause();
      v.muted = true;
      setIsMuted(true);
      userPaused.current = false;
    }
  }, [inView]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      userPaused.current = false;
      v.play();
    } else {
      userPaused.current = true;
      v.pause();
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  const videoProps = {
    ref: videoRef,
    src: nacion_led,
    poster: nacion_led_poster,
    muted: true,
    loop: true,
    playsInline: true,
    preload: 'metadata',
    onPlay: () => setIsPlaying(true),
    onPause: () => setIsPlaying(false),
    style: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  };

  return { videoProps, isPlaying, isMuted, togglePlay, toggleMute };
}

const VideoControls = ({ isPlaying, isMuted, togglePlay, toggleMute, visible = true }) => (
  <HStack
    position="absolute"
    right={{ base: '14px', md: '20px' }}
    bottom={{ base: '14px', md: '20px' }}
    zIndex={3}
    spacing={1}
    p="5px"
    borderRadius="full"
    bg="blackAlpha.600"
    border="1px solid"
    borderColor="whiteAlpha.200"
    backdropFilter="blur(8px)"
    opacity={visible ? 1 : 0}
    pointerEvents={visible ? 'auto' : 'none'}
    transition="opacity 300ms ease"
  >
    {[
      { label: isPlaying ? 'Pausar' : 'Reproducir', icon: isPlaying ? <FaPause /> : <FaPlay />, onClick: togglePlay },
      { label: isMuted ? 'Activar sonido' : 'Silenciar', icon: isMuted ? <FaVolumeMute /> : <FaVolumeUp />, onClick: toggleMute },
    ].map((b) => (
      <IconButton
        key={b.label}
        aria-label={b.label}
        icon={b.icon}
        onClick={b.onClick}
        isRound
        size="md"
        variant="ghost"
        color="white"
        _hover={{}}
        _active={{ transform: 'scale(0.92)' }}
        sx={{ '@media (hover: hover) and (pointer: fine)': { '&:hover': { bg: 'whiteAlpha.300' } } }}
      />
    ))}
  </HStack>
);

const Copy = (props) => (
  <MotionBox
    position="absolute"
    left={{ base: '20px', md: '6vw' }}
    right={{ base: '20px', md: '6vw' }}
    bottom={{ base: '88px', md: '11vh' }}
    zIndex={2}
    maxW="640px"
    {...props}
  >
    <Flex align="center" gap="10px" color="orange.400" fontSize="13px" fontWeight="600" letterSpacing=".18em" textTransform="uppercase">
     
      Somos familia
    </Flex>
    <Text as="h2" m="8px 0 18px" fontSize={{ base: '34px', md: 'clamp(32px, 4.2vw, 60px)' }} lineHeight="1">
      <Brand />
    </Text>
    <Text m="0 0 24px" color="whiteAlpha.900" fontSize={{ base: '15px', md: 'clamp(16px, 1.35vw, 20px)' }} lineHeight="1.6">
      {DESCRIPTION}
    </Text>
    <Flex wrap="wrap" gap="10px">
      {PILLS.map((p, i) => (
        <Box
          key={p}
          px="16px"
          py="9px"
          borderRadius="full"
          border="1px solid"
          borderColor={i === 0 ? 'orange.500' : 'whiteAlpha.400'}
          color={i === 0 ? 'orange.400' : 'white'}
          bg="blackAlpha.400"
          backdropFilter="blur(6px)"
          fontSize="14px"
        >
          {p}
        </Box>
      ))}
    </Flex>
  </MotionBox>
);

const SHADE =
  'linear-gradient(0deg, rgba(0,0,0,.92) 0%, rgba(0,0,0,.55) 32%, rgba(0,0,0,.05) 62%), linear-gradient(90deg, rgba(0,0,0,.55), rgba(0,0,0,0) 55%)';

// Fundido a negro en el borde inferior para que el video no corte en seco contra la sección siguiente
const BottomFade = (props) => (
  <MotionBox
    position="absolute"
    left="0"
    right="0"
    bottom="0"
    h={{ base: '22vh', md: '28vh' }}
    bg="linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.6) 55%, #000 100%)"
    pointerEvents="none"
    {...props}
  />
);

/* Versión estática para "reducir movimiento" */
const AboutStatic = () => { 
  const ref = useRef(null);
  const video = useSectionVideo(ref);
  return (
    <Box id="about" ref={ref} position="relative" h="100svh" minH="560px" overflow="hidden" bg="black">
      <video {...video.videoProps} />
      <Box position="absolute" inset="0" bg={SHADE} pointerEvents="none" />
      <BottomFade />
      <Copy />
      <VideoControls {...video} />
    </Box>
  );
};

const AboutCine = () => {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const isMobile = useBreakpointValue({ base: true, md: false }, { ssr: false }) ?? false;
  const video = useSectionVideo(stickyRef);

  const { scrollYProgress: p } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });

  // 0 → 1 en el primer 60% del recorrido: la tarjeta se expande
  const grow = useTransform(p, [0, 0.6], [0, 1], { ease: easeOutCubic });
  const insetX = useTransform(grow, (g) => (1 - g) * (isMobile ? 8 : 30));
  const insetY = useTransform(grow, (g) => (1 - g) * (isMobile ? 24 : 20));
  const radius = useTransform(grow, (g) => (1 - g) * 28);
  const clipPath = useMotionTemplate`inset(${insetY}% ${insetX}% round ${radius}px)`;

  const titleOpacity = useTransform(p, [0.35, 0.5], [1, 0]);
  const leftX = useTransform(grow, [0, 1], ['0vw', isMobile ? '0vw' : '-12vw']);
  const rightX = useTransform(grow, [0, 1], ['0vw', isMobile ? '0vw' : '12vw']);
  const leftY = useTransform(grow, [0, 1], [0, isMobile ? -30 : 0]);
  const rightY = useTransform(grow, [0, 1], [0, isMobile ? 30 : 0]);

  const shadeOpacity = useTransform(p, [0.45, 0.65], [0, 1]);
  const copyOpacity = useTransform(p, [0.55, 0.75], [0, 1]);
  const copyY = useTransform(p, [0.55, 0.75], [24, 0]);

  const [full, setFull] = useState(false);
  useMotionValueEvent(grow, 'change', (g) => setFull(g > 0.95));

  return (
    <Box id="about" ref={sectionRef} position="relative" h={{ base: '260vh', md: '300vh' }} bg="black" mt={{ base: 0, md: 20 }}>
      <Box ref={stickyRef} position="sticky" top="0" h="100svh" overflow="hidden">
        {/* Video que se expande */}
        <MotionBox position="absolute" inset="0" style={{ clipPath, willChange: 'clip-path' }}>
          <video {...video.videoProps} />
          <MotionBox position="absolute" inset="0" bg={SHADE} pointerEvents="none" style={{ opacity: shadeOpacity }} />
          <BottomFade style={{ opacity: shadeOpacity }} />
          <VideoControls {...video} visible={full} />
        </MotionBox>

       

        <Copy style={{ opacity: copyOpacity, y: copyY }} />
      </Box>
    </Box>
  );
};

const About = () => {
  const reduceMotion = useReducedMotion();
  return reduceMotion ? <AboutStatic /> : <AboutCine />;
};

export default About;
