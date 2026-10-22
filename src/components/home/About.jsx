import { forwardRef, useEffect, useRef, useState } from 'react';
import { Box, Flex, HStack, IconButton, Text, useBreakpointValue } from '@chakra-ui/react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { FaPause, FaPlay, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import nacion_led from '@/assets/videos/video_nacionled.mp4';
import nacion_led_poster from '@/assets/videos/NACIONLED-poster.jpg';
import nacion_led_ambient from '@/assets/videos/NACIONLED-ambient.jpg';

const MotionBox = motion(Box);

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
    // Abajo a la izquierda: abajo a la derecha queda el botón flotante de WhatsApp
    left={{ base: '14px', md: '20px' }}
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

const Copy = forwardRef(({ compact, ...props }, ref) => (
  <MotionBox
    ref={ref}
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
));
Copy.displayName = 'Copy';

// Fondo ambiente: el propio video difuminado + brillo naranja
const Ambient = (props) => (
  <Box position="absolute" inset="0" pointerEvents="none" {...props}>
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
  </Box>
);

function useViewport() {
  const [vp, setVp] = useState(() => ({ w: typeof window !== 'undefined' ? window.innerWidth : 1440, h: typeof window !== 'undefined' ? window.innerHeight : 900 }));
  useEffect(() => {
    const onResize = () => setVp({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return vp;
}

const About = () => {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const isMobile = useBreakpointValue({ base: true, md: false }, { ssr: false }) ?? false;
  const { w, h } = useViewport();
  const video = useSectionVideo(sectionRef);

  // Medimos el panel: en celular para que video + panel ocupen la pantalla, en desktop para centrarlo
  const copyRef = useRef(null);
  const [copyH, setCopyH] = useState(260);
  useEffect(() => {
    const el = copyRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return undefined;
    const ro = new ResizeObserver(() => setCopyH(el.offsetHeight));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const mobile = (() => {
    const side = 16;
    const navH = 76; // alto del navbar fijo
    const gap = 14;
    const bottomSafe = 24;
    const vw = w - side * 2;
    const avail = h - navH - bottomSafe - copyH - gap;
    const vh = Math.max(vw * 0.5625, Math.min(avail, vw * 1.05)); // más alto que 16:9, sin recortar de más
    const groupH = vh + gap + copyH;
    const top = navH + Math.max(0, (h - navH - bottomSafe - groupH) / 2);
    return { rect: { l: side, t: top, w: vw, h: vh }, copyTop: top + vh + gap };
  })();

  // Geometría del marco en px: encuadre 16:9 con el panel superpuesto a la izquierda
  const PANEL_W = Math.min(430, w - 40);
  const OVERLAP = 160; // cuánto se superpone el panel sobre el video (desktop)
  const { finalRect, panelLeft } = (() => {
    if (isMobile) return { finalRect: mobile.rect, panelLeft: 16 };
    // Video completo en 16:9 (sin recorte, se ven los subtítulos), lo más grande posible
    const margin = Math.max(20, h * 0.05);
    const right = Math.max(20, w * 0.03);
    const minPanelLeft = w * 0.06;
    const fw = Math.min(w - (minPanelLeft + PANEL_W - OVERLAP) - right, ((h - margin * 2) * 16) / 9);
    const fh = (fw * 9) / 16;
    // Panel + video forman un bloque; en pantallas muy anchas se centra
    const groupW = PANEL_W - OVERLAP + fw;
    const groupLeft = Math.max(minPanelLeft, (w - groupW) / 2);
    const fl = groupLeft + PANEL_W - OVERLAP;
    return { finalRect: { l: fl, t: (h - fh) / 2, w: fw, h: fh }, panelLeft: groupLeft };
  })();

  const rect = isMobile ? mobile.rect : finalRect;

  return (
    <Box id="about" ref={sectionRef} position="relative" h="100svh" overflow="hidden" bg="black" mt={{ base: 0, md: 20 }} sx={{ isolation: 'isolate' }}>
      <Box position="absolute" inset="0" opacity={isMobile ? 1 : 0.7}>
        <Ambient />
      </Box>

      {/* Marco del video: fijo en su encuadre final */}
      <Box
        position="absolute"
        zIndex={1}
        overflow="hidden"
        borderRadius="20px"
        bg="#000"
        boxShadow="0 40px 120px rgba(0,0,0,.7)"
        style={{ left: `${rect.l}px`, top: `${rect.t}px`, width: `${rect.w}px`, height: `${rect.h}px` }}
      >
        <Box position="absolute" inset="0" sx={{ '& video': { objectFit: 'cover' } }}>
          <video {...video.videoProps} />
        </Box>
        <VideoControls {...video} />
      </Box>

      {/* Único movimiento: el panel de descripción aparece al entrar en pantalla */}
      <Copy
        ref={copyRef}
        w={{ base: 'calc(100% - 32px)', md: `${PANEL_W}px` }}
        style={{ left: `${panelLeft}px`, top: `${isMobile ? mobile.copyTop : (h - copyH) / 2}px` }}
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.15 }}
      />
    </Box>
  );
};

export default About;
