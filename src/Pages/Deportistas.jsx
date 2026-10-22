import { useRef, useState } from "react";
import { Box, Flex, Grid, Heading, HStack, IconButton, Image, Text } from "@chakra-ui/react";
import { motion, useScroll } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

import deportistas_gestion360 from "@/assets/deportistas/deportistas_gestion360.webp";
import deportistas_logos from "@/assets/deportistas/deportistas_logos.webp";
import deportistas_prematch from "@/assets/deportistas/deportistas_prematch.webp";
import deportistas_prematch1 from "@/assets/deportistas/deportistas_prematch1.webp";
import deportistas_prematch2 from "@/assets/deportistas/deportistas_prematch2.webp";
import deportistas_postpartido from "@/assets/deportistas/deportistas_postpartido.webp";
import deportistas_video from "@/assets/deportistas/deportistas_video.mp4";
import deportistas_aniversario from "@/assets/deportistas/deportistas_aniversario.webp";
import deportistas_perfil from "@/assets/deportistas/deportistas_perfil.webp";
import deportistas_perfil3 from "@/assets/deportistas/deportistas_perfil3.webp";
import deportistas_perfil4 from "@/assets/deportistas/deportistas_perfil4.webp";
import deportistas_fotografia from "@/assets/deportistas/deportistas_fotografia.webp";
import deportistas_estadis from "@/assets/deportistas/deportistas_estadis.webp";
import deportistas_carpetacom from "@/assets/deportistas/deportistas_carpetacom.webp";
import deportistas_planmkt from "@/assets/deportistas/deportistas_planmkt.webp";
import Contact from "@/components/common/Contact";
import MatchdayCarousel from "@/components/deportistas/MatchdayCarousel";

/*
 * Deportistas · versión "Recorrido"
 * Título original + intro con accesos a 3 etapas (antes / durante y después / todo el año).
 * Cada etapa: encabezado fijo con barra de progreso + servicios alternando imagen y texto.
 * Las imágenes de cada servicio conservan el formato, tamaño y recuadro de la versión anterior.
 */

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const EASE_OUT = [0.23, 1, 0.32, 1];
const LINE = "rgba(255,255,255,.12)";
const PX = { base: "20px", md: "250px" };
const HOVER = "@media (hover: hover) and (pointer: fine)";
const GLOW_ORANGE = "drop-shadow(0px 0px 12px rgba(245,160,15,0.56))";
const GLOW_WHITE = "drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.56))";

/* ---------- Recuadro e imagen (mismo formato que la versión anterior) ---------- */

const MediaBox = ({ children, ...props }) => (
  <Box
    position="relative"
    bg="gray.900"
    display="flex"
    alignItems="center"
    justifyContent="center"
    minH={{ base: "200px", md: "340px" }}
    borderRadius={{ base: "18px", md: "24px" }}
    border={`1px solid ${LINE}`}
    overflow="hidden"
    transition="border-color 200ms ease, box-shadow 200ms ease"
    sx={{ [HOVER]: { "&:hover": { borderColor: "orange.400", boxShadow: "0 0 20px rgba(245, 160, 15, 0.3)" } } }}
    {...props}
  >
    {children}
  </Box>
);

const Shot = ({ glow, sx, ...props }) => (
  <Image
    loading="lazy"
    decoding="async"
    alt=""
    maxW="100%"
    borderRadius="md"
    transitionDuration="0.3s"
    sx={{
      ...(glow && { [HOVER]: { "&:hover": { transform: "translateY(-8px)", filter: glow } } }),
      ...sx,
    }}
    {...props}
  />
);

/* ---------- Reels: video con controles ---------- */

const ReelsMedia = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleInView = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    setIsMuted(true);
    v.play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  };

  const handleOutOfView = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
    v.muted = true;
    setIsMuted(true);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (isPlaying) {
      v.pause();
      setIsPlaying(false);
    } else {
      v.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <MediaBox minH="0" aspectRatio="4 / 5" role="group">
      <MotionBox position="absolute" inset="0" onViewportEnter={handleInView} onViewportLeave={handleOutOfView}>
        <video
          ref={videoRef}
          src={deportistas_video}
          preload="metadata"
          loop
          muted={isMuted}
          playsInline
          aria-label="Reel de ejemplo"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </MotionBox>
      <HStack
        position="absolute"
        bottom="15px"
        right="15px"
        spacing={2}
        bg="blackAlpha.600"
        p={2}
        borderRadius="full"
        transition="opacity 0.3s ease-in-out"
        sx={{ [HOVER]: { opacity: 0 }, "[role=group]:hover &, &:focus-within": { opacity: 1 } }}
      >
        <IconButton
          aria-label={isPlaying ? "Pausar" : "Reproducir"}
          icon={isPlaying ? <FaPause /> : <FaPlay />}
          onClick={togglePlay}
          size="sm"
          variant="ghost"
          color="white"
          _hover={{ bg: "whiteAlpha.300" }}
          isRound
        />
        <IconButton
          aria-label={isMuted ? "Activar sonido" : "Silenciar"}
          icon={isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          onClick={toggleMute}
          size="sm"
          variant="ghost"
          color="white"
          _hover={{ bg: "whiteAlpha.300" }}
          isRound
        />
      </HStack>
    </MediaBox>
  );
};

/* ---------- Servicios ---------- */

const ITEMS = {
  plan: {
    title: "Plan de marketing",
    text: "Diseñamos el plan de marketing y comunicación adaptado a tu persona para generar el contenido adecuado.",
    media: (
      <MediaBox p={{ base: 10, md: 6 }} py={{ base: 16, md: 0 }}>
        <Shot src={deportistas_planmkt} w={{ base: "180px", md: "250px" }} h={{ base: "150px", md: "210px" }} glow={GLOW_ORANGE} />
      </MediaBox>
    ),
  },
  g360: {
    title: "Gestión 360º",
    text: "Generamos contenido adaptado para todas las redes sociales existentes.",
    media: (
      <MediaBox p={{ base: 12, md: 6 }} py={{ base: 16, md: 0 }}>
        <Shot src={deportistas_gestion360} w="200px" h="200px" objectFit="contain" glow={GLOW_ORANGE} />
      </MediaBox>
    ),
  },
  logos: {
    title: "Logos",
    text: "Creamos tu logo propio para identificar todo tu contenido profesionalmente.",
    media: (
      <MediaBox p={{ base: 14, md: 6 }} py={{ base: 20, md: 0 }}>
        <Shot
          src={deportistas_logos}
          w={{ base: "280px", md: "250px" }}
          h={{ base: "180px", md: "150px" }}
          objectFit={{ base: "contain", md: "cover" }}
          glow={GLOW_WHITE}
        />
      </MediaBox>
    ),
  },
  match: {
    title: "Matchday",
    text: "Anunciá tu próximo partido con placas estáticas o animadas de alta calidad.",
    media: (
      <MediaBox p={{ base: 8, md: 6 }} minH={{ base: "370px", md: "440px" }}>
        <MatchdayCarousel images={[deportistas_prematch, deportistas_prematch1, deportistas_prematch2]} />
      </MediaBox>
    ),
  },
  reels: {
    title: "Reels",
    text: "Generamos videos profesionales para tus redes sociales.",
    media: <ReelsMedia />,
  },
  post: {
    title: "Post partido",
    text: "Comunicá tus sensaciones de manera profesional con imágenes o videos.",
    media: (
      <MediaBox p={{ base: 10, md: 6 }} minH={{ base: "200px", md: "380px" }}>
        <Shot
          src={deportistas_postpartido}
          w={{ base: "300px", md: "320px" }}
          h={{ base: "350px", md: "320px" }}
          objectFit="contain"
          sx={{ [HOVER]: { "&:hover": { filter: GLOW_WHITE } } }}
        />
      </MediaBox>
    ),
  },
  perfil: {
    title: "Optimización de perfil",
    text: "Organizamos tu perfil con biografía, portada e historias destacadas profesionales.",
    wide: true,
    media: (
      <MediaBox flexDirection={{ base: "column", md: "row" }} gap={2} p={10}>
        <Shot
          src={deportistas_perfil}
          w={{ base: "250px", md: "320px" }}
          h={{ base: "250px", md: "250px" }}
          objectFit="contain"
          glow={GLOW_WHITE}
        />
        <Flex flexDirection="column" alignItems="center" gap={2} maxW="100%">
          <Shot src={deportistas_perfil3} w={{ base: "300px", md: "380px" }} h={{ base: "120px", md: "150px" }} objectFit="contain" glow={GLOW_ORANGE} />
          <Shot src={deportistas_perfil4} w={{ base: "300px", md: "380px" }} h={{ base: "120px", md: "150px" }} objectFit="contain" glow={GLOW_ORANGE} />
        </Flex>
      </MediaBox>
    ),
  },
  conme: {
    title: "Conmemorativas",
    text: "Contenido especial para fechas importantes y aniversarios de clubes.",
    media: (
      <MediaBox p={10} py={{ base: 16, md: 10 }}>
        <Shot
          src={deportistas_aniversario}
          w={{ base: "250px", md: "280px" }}
          h={{ base: "270px", md: "300px" }}
          objectFit="contain"
          glow={GLOW_ORANGE}
        />
      </MediaBox>
    ),
  },
  stats: {
    title: "Estadísticas",
    text: "Análisis visual de tu rendimiento, progresos y logros deportivos.",
    media: (
      <MediaBox p={8} pb={{ base: "90px", md: 10 }}>
        <Shot src={deportistas_estadis} w={{ base: "180px", md: "200px" }} h={{ base: "340px", md: "360px" }} mt={-4} objectFit="contain" />
      </MediaBox>
    ),
  },
  foto: {
    title: "Fotografía",
    text: "Fotógrafos y filmmakers en todo el mundo para contenido de alta calidad.",
    media: (
      <MediaBox p={{ base: 12, md: 6 }} pb={12}>
        <Shot src={deportistas_fotografia} w="200px" h="150px" glow={GLOW_ORANGE} />
      </MediaBox>
    ),
  },
  carpeta: {
    title: "Carpeta comercial",
    text: "Destacamos tus beneficios para acercar tu imagen a marcas comerciales.",
    media: (
      <MediaBox p={{ base: 16, md: 6 }} py={{ base: 16, md: 10 }}>
        <Shot src={deportistas_carpetacom} w={{ base: "120px", md: "140px" }} h="200px" objectFit="contain" glow={GLOW_ORANGE} />
      </MediaBox>
    ),
  },
};

const STAGES = [
  {
    id: "antes",
    label: "Antes del partido",
    title: "Preparamos",
    em: "tu imagen",
    text: "La base de tu marca: estrategia, identidad y perfil, y la previa de cada fecha.",
    items: ["plan", "logos", "perfil", "match"],
  },
  {
    id: "despues",
    label: "Durante y después",
    title: "Contamos",
    em: "lo que pasó",
    text: "Cubrimos cada partido y lo transformamos en contenido que suma.",
    items: ["reels", "post", "foto", "stats"],
  },
  {
    id: "siempre",
    label: "Todo el año",
    title: "Hacemos crecer",
    em: "tu marca",
    text: "Presencia constante en redes, fechas especiales y oportunidades comerciales.",
    items: ["g360", "conme", "carpeta"],
  },
];

/* ---------- Etapa ---------- */

const Feature = ({ item, flip }) => (
  <MotionBox
    as="article"
    display="grid"
    gridTemplateColumns={
      item.wide ? "1fr" : { base: "1fr", md: flip ? "minmax(0, .9fr) minmax(0, 1.1fr)" : "minmax(0, 1.1fr) minmax(0, .9fr)" }
    }
    gap={{ base: "16px", md: "clamp(20px, 3vw, 44px)" }}
    alignItems="center"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease: EASE_OUT }}
  >
    <Box order={{ base: 0, md: flip && !item.wide ? 2 : 0 }} minW="0">
      {item.media}
    </Box>
    <Box>
      <Heading
        as="h3"
        m="0"
        fontSize={{ base: "28px", md: "clamp(28px, 2.8vw, 44px)" }}
        fontStyle="italic"
        fontWeight="700"
        letterSpacing="-0.02em"
        lineHeight="1"
        color="white"
      >
        {item.title}
      </Heading>
      <Text mt="12px" color="whiteAlpha.700" fontSize={{ base: "15px", md: "16px" }} lineHeight="1.6" maxW="36ch">
        {item.text}
      </Text>
    </Box>
  </MotionBox>
);

const   Stage = ({ stage }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });

  return (
    <Grid
      as="section"
      ref={ref}
      id={`st-${stage.id}`}
      templateColumns={{ base: "1fr", xl: "minmax(280px, .6fr) minmax(0, 1.4fr)" }}
      gap={{ base: "28px", xl: "clamp(24px, 4vw, 64px)" }}
      px={PX}
      py={{ base: "56px", md: "clamp(50px, 8vh, 90px)" }}
      borderTop={`1px solid ${LINE}`}
      scrollMarginTop="90px"
    >
      <Box position={{ base: "relative", xl: "sticky" }} top={{ xl: "100px" }} alignSelf="start">
        
        <Heading as="h2" mt="12px" fontSize={{ base: "38px", md: "clamp(34px, 3.4vw, 56px)" }} lineHeight=".95" fontWeight="700" letterSpacing="-0.03em" color="white">
          {stage.title}{" "}
          <Text as="em" fontStyle="italic" color="orange.400">
            {stage.em}
          </Text>
        </Heading>
        <Text mt="12px" color="whiteAlpha.700" fontSize="15px" lineHeight="1.55" maxW="30ch">
          {stage.text}
        </Text>
        <Box mt="22px" h="2px" maxW={{ base: "220px", xl: "none" }} bg={LINE} borderRadius="2px" overflow="hidden" aria-hidden="true">
          <MotionBox h="100%" bg="orange.500" transformOrigin="0 50%" style={{ scaleX: scrollYProgress }} />
        </Box>
      </Box>

      <Flex direction="column" gap={{ base: "44px", md: "clamp(36px, 6vh, 64px)" }} minW="0">
        {stage.items.map((k, i) => (
          <Feature key={k} item={ITEMS[k]} flip={i % 2 === 1} />
        ))}
      </Flex>
    </Grid>
  );
};

/* ---------- Página ---------- */

const Deportistas = () => {
  const goTo = (e, id) => {
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(`st-${id}`)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <Flex bg="black" minHeight="100vh" pt={{ base: 40, md: 60 }} pb={{ base: 20, md: 0 }} flexDirection="column" color="white">
      {/* Hero Header */}
      <Flex
        justifyContent="start"
        alignItems="start"
        gap={2}
        flexDirection="row"
        alignSelf="start"
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
            fontStyle="italic"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            tistas
          </MotionText>
        </MotionHeading>
      </Flex>

      {/* Intro + accesos a etapas */}
      <MotionBox
        px={PX}
        pb={{ base: "56px", md: "90px" }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8, ease: EASE_OUT }}
      >
        <Text maxW="46ch" color="whiteAlpha.800" fontSize={{ base: "17px", md: "clamp(18px, 1.6vw, 22px)" }} lineHeight="1.55">
          Desde nuestros inicios en 2020 trabajamos la marca personal de{" "}
          <Text as="b" color="white" fontWeight="600">
            más de <Text as="span" color="orange.400" fontStyle="italic">350 deportistas</Text>
          </Text>{" "}
          que confiaron en nosotros, y los acompañamos en las principales competiciones de América y el mundo.
        </Text>
       
      </MotionBox>

      {STAGES.map((s) => (
        <Stage key={s.id} stage={s} />
      ))}

      <MotionBox
        alignSelf="center"
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
