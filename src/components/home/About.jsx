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
import nacion_led_ambient from '@/assets/videos/NACIONLED-ambient.jpg';

const MotionBox = motion(Box);
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
const clamp01 = (v) => Math.min(1, Math.max(0, v));
const range = (v, a, b) => clamp01((v - a) / (b - a));
const lerp = (a, b, t) => a + (b - a) * t;

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
  const wasOut = useRef(true);
  const inView = useInView(containerRef, { amount: 0.15 });

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (inView) {
      if (userPaused.current) return;
      if (wasOut.current) v.currentTime = 0; // arranca desde el principio cada vez que se entra
      wasOut.current = false;
      v.muted = true;
      setIsMuted(true);
      v.play().catch(() => setIsPlaying(false));
    } else {
      v.pause();
      v.muted = true;
      setIsMuted(true);
      userPaused.current = false;
      wasOut.current = true;
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
    // objectFit lo define cada contenedor: inline le ganaría a sus reglas
    style: { width: '100%', height: '100%', display: 'block' },
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

const Copy = ({ compact, ...props }) => (
  <MotionBox
    position="absolute"
    zIndex={3}
    left={{ base: '20px', md: 'clamp(20px, 6vw, 96px)' }}
    w={{ base: 'calc(100% - 40px)', md: 'min(430px, calc(100% - 40px))' }}
    p={{ base: '20px', md: 'clamp(22px, 2.6vw, 36px)' }}
    borderRadius="24px"
    bg="rgba(0,0,0,.58)"
    border="1px solid"
    borderColor="whiteAlpha.200"
    backdropFilter="blur(14px)"
    {...props}
  >
    <Flex align="center" gap="10px" color="orange.400" fontSize="13px" fontWeight="600" letterSpacing=".18em" textTransform="uppercase">
      
      Somos familia
    </Flex>
    <Text as="h2" m="8px 0 16px" fontSize={{ base: '30px', md: 'clamp(30px, 3vw, 44px)' }} lineHeight="1" whiteSpace="nowrap">
      <Brand />
    </Text>
    <Text m={{ base: '0 0 16px', md: '0 0 22px' }} color="whiteAlpha.900" fontSize={{ base: '14px', md: 'clamp(15px, 1.2vw, 18px)' }} lineHeight="1.6">
      {DESCRIPTION}
    </Text>
    <Flex wrap="wrap" gap={compact ? '8px' : '10px'}>
      {PILLS.map((p, i) => (
        <Box
          key={p}
          px={{ base: '12px', md: '16px' }}
          py={{ base: '7px', md: '9px' }}
          borderRadius="xl"
          border="1px solid"
          borderColor={i === 0 ? 'orange.500' : 'whiteAlpha.400'}
          color={i === 0 ? 'orange.400' : 'white'}
          bg="blackAlpha.400"
          fontSize={{ base: '13px', md: '14px' }}
        >
          {p}
        </Box>
      ))}
    </Flex>
  </MotionBox>
);

// Fondo ambiente: el propio video difuminado + brillo naranja
const Ambient = (props) => (
  <MotionBox position="absolute" inset="0" pointerEvents="none" {...props}>
    <Box
      position="absolute"
      inset="-10%"
      bgImage={`url(${nacion_led_ambient})`}
      bgSize="cover"
      bgPosition="center"
      filter="blur(70px) saturate(1.3) brightness(.32)"
      transform="scale(1.1)"
    />
    <Box
      position="absolute"
      left="50%"
      top="50%"
      w="min(1100px, 130vw)"
      aspectRatio="1.6"
      transform="translate(-50%, -50%)"
      bg="radial-gradient(closest-side, rgba(237,137,54,.22), transparent 70%)"
    />
  </MotionBox>
);

const SIDE_SHADE = 'linear-gradient(90deg, rgba(0,0,0,.6), rgba(0,0,0,0) 55%)';

/* Versión estática para "reducir movimiento" */
const AboutStatic = () => {
  const ref = useRef(null);
  const video = useSectionVideo(ref);
  return (
    <Box id="about" ref={ref} position="relative" h="100svh" minH="560px" overflow="hidden" bg="black">
      <Ambient />
      <Box
        position="absolute"
        top={{ base: '8%', md: '8%' }}
        bottom={{ base: '52%', md: '8%' }}
        left={{ base: '20px', md: '36%' }}
        right={{ base: '20px', md: 'clamp(20px, 6vw, 96px)' }}
        borderRadius="20px"
        overflow="hidden"
        boxShadow="0 30px 80px rgba(0,0,0,.55)"
        sx={{ '& video': { objectFit: 'contain' } }}
      >
        <video {...video.videoProps} />
        <VideoControls {...video} />
      </Box>
      <Copy top={{ base: 'auto', md: '50%' }} bottom={{ base: '40px', md: 'auto' }} transform={{ base: 'none', md: 'translateY(-50%)' }} />
    </Box>
  );
};

function useViewport() {
  const [vp, setVp] = useState(() => ({ w: typeof window !== 'undefined' ? window.innerWidth : 1440, h: typeof window !== 'undefined' ? window.innerHeight : 900 }));
  useEffect(() => {
    const onResize = () => setVp({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return vp;
}

const AboutCine = () => {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const isMobile = useBreakpointValue({ base: true, md: false }, { ssr: false }) ?? false;
  const { w, h } = useViewport();
  const video = useSectionVideo(stickyRef);

  const { scrollYProgress: p } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });

  // Tarjeta inicial → pantalla completa (primer 55% del recorrido)
  const g = useTransform(p, (v) => easeOutCubic(range(v, 0, 0.55)));
  const cardH = Math.min(60, ((w * 0.9 * 0.5625) / h) * 100); // 16:9 en celular
  const start = isMobile ? { t: (100 - cardH) / 2, l: 5 } : { t: 16, l: 20 };
  const top = useTransform(g, (v) => `${lerp(start.t, 0, v)}%`);
  const side = useTransform(g, (v) => `${lerp(start.l, 0, v)}%`);
  const radius = useTransform(g, (v) => `${lerp(28, 0, v)}px`);
  const borderColor = useTransform(g, (v) => `rgba(255,255,255,${0.16 * (1 - v)})`);

  // Etiqueta y "Deslizá" acompañan a la tarjeta y se van al crecer
  const labelsOpacity = useTransform(p, [0.05, 0.25], [1, 0]);
  const chipLeft = useMotionTemplate`calc(${side} + 16px)`;
  const chipTop = useMotionTemplate`calc(${top} + 16px)`;
  const hintTop = useTransform(g, (v) => `calc(${100 - lerp(start.t, 0, v)}% + 18px)`);

  // Al final el video se corre para dejarle lugar al panel
  const sh = useTransform(p, (v) => easeOutCubic(range(v, 0.55, 0.78)));
  const videoTransform = useTransform(sh, (v) =>
    isMobile ? `translateY(${-v * 26}%)` : `translateX(${v * 16}%) scale(${1 - v * 0.34})`
  );
  const videoRadius = useTransform(sh, (v) => (isMobile ? '0px' : `${(v * 18) / (1 - v * 0.34)}px`));
  const frameBg = useTransform(sh, (v) => (isMobile ? 'rgba(0,0,0,0)' : `rgba(0,0,0,${1 - v})`));
  const ambientOpacity = useTransform(p, (v) => (isMobile ? 1 : Math.max(1 - range(v, 0.35, 0.6), easeOutCubic(range(v, 0.55, 0.78)) * 0.7)));

  const shadeOpacity = useTransform(p, [0.5, 0.7], [0, 1]);
  const copyOpacity = useTransform(p, [0.62, 0.8], [0, 1]);
  const copyShift = useTransform(p, [0.62, 0.8], [24, 0]);
  const copyTransform = useTransform(copyShift, (v) => (isMobile ? `translateY(${v}px)` : `translateY(calc(-50% + ${v}px))`));

  const [full, setFull] = useState(false);
  useMotionValueEvent(g, 'change', (v) => setFull(v > 0.95));

  return (
    <Box id="about" ref={sectionRef} position="relative" h={{ base: '260vh', md: '300vh' }} bg="black" mt={{ base: 0, md: 20 }}>
      <Box ref={stickyRef} position="sticky" top="0" h="100svh" overflow="hidden" sx={{ isolation: 'isolate' }}>
        <Ambient style={{ opacity: ambientOpacity }} />

        {/* Marco que se expande */}
        <MotionBox
          position="absolute"
          overflow="hidden"
          border="1px solid"
          boxShadow="0 40px 120px rgba(0,0,0,.7)"
          style={{ top, bottom: top, left: side, right: side, borderRadius: radius, borderColor, background: frameBg }}
        >
          <MotionBox
            position="absolute"
            inset="0"
            overflow="hidden"
            boxShadow="0 30px 80px rgba(0,0,0,.55)"
            style={{ transform: videoTransform, borderRadius: videoRadius }}
            // Desktop: llena el ancho del marco manteniendo su alto (recorta arriba/abajo)
            sx={{ '& video': { objectFit: isMobile ? 'contain' : 'cover' } }}
          >
            <video {...video.videoProps} />
          </MotionBox>
          <VideoControls {...video} visible={full} />
        </MotionBox>

        <MotionBox position="absolute" inset="0" zIndex={2} bg={SIDE_SHADE} pointerEvents="none" display={{ base: 'none', md: 'block' }} style={{ opacity: shadeOpacity }} />

      

        <Copy
          top={{ base: 'auto', md: '50%' }}
          bottom={{ base: '84px', md: 'auto' }}
          style={{ opacity: copyOpacity, transform: copyTransform }}
        />
      </Box>
    </Box>
  );
};

const About = () => {
  const reduceMotion = useReducedMotion();
  return reduceMotion ? <AboutStatic /> : <AboutCine />;
};

export default About;
