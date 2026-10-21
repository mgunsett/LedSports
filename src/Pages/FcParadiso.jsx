import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, Grid, Heading, Image, Text, keyframes } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";
import Contact from "@/components/common/Contact";

import escudo from "@/assets/paradiso/escudo.webp";
import escudoLinea from "@/assets/paradiso/escudo_linea.webp";
import fotoPlantel from "@/assets/paradiso/foto_plantel.webp";
import fotoAccion from "@/assets/paradiso/foto_accion.webp";
import fotoEntreno from "@/assets/paradiso/foto_entreno.webp";
import fotoEscalera from "@/assets/paradiso/foto_escalera.webp";
import fotoMarcador from "@/assets/paradiso/foto_marcador.webp";
import fotoBenvenuti from "@/assets/paradiso/foto_benvenuti.webp";
import postMatchday from "@/assets/paradiso/post_matchday.webp";
import postXi from "@/assets/paradiso/post_xi.webp";
import postFulltime from "@/assets/paradiso/post_fulltime.webp";
import postGirone from "@/assets/paradiso/post_girone.webp";
import tuttiSiamo from "@/assets/paradiso/tutti_siamo.webp";
import capitanEscudo from "@/assets/paradiso/capitan_escudo.webp";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionBox = motion(Box);

const EASE_OUT = [0.23, 1, 0.32, 1];
const EASE_OUT_CSS = "cubic-bezier(0.23, 1, 0.32, 1)";
const LINE = "rgba(255,255,255,.12)";
// Mismo ancho de contenido que el resto de las páginas de servicios (ver Agentes)
const CONTAINER = { w: "100%", maxW: "1280px", mx: "auto", px: { base: 5, md: 10 } };
const HOVER = "@media (hover: hover) and (pointer: fine)";
const MOBILE = "@media (max-width: 47.99em)";
const CLUB_YELLOW = "#F2D21B";
const spin = keyframes`to { transform: rotate(360deg); }`;

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, delay, ease: EASE_OUT },
});

const FICHA = [
  { label: "Club", value: "FC Paradiso" },
  { label: "País", value: "Suiza" },
  { label: "Liga", value: "Promotion League" },
  { label: "Estadio", value: "Football Center Pian Scairolo" },
];

const icon = (paths) => (
  <Box as="svg" viewBox="0 0 24 24" w="24px" h="24px" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {paths}
  </Box>
);

const ROLES = [
  {
    title: "Dirección de marketing",
    text: "Lideramos el área dentro del club: estrategia, comunicación e imagen.",
    icon: icon(<path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4l-5.2 2.7 1-5.8L3.5 9.2l5.9-.9z" />),
    lead: true,
  },
  {
    title: "Fotografía",
    text: "Partidos, entrenamientos, sesiones de plantel y presentación de indumentaria.",
    icon: icon(
      <>
        <path d="M4 7h3l2-3h6l2 3h3v12H4z" />
        <circle cx="12" cy="13" r="3.5" />
      </>
    ),
  },
  {
    title: "Video",
    text: "Piezas audiovisuales del día a día y de cada fecha para redes.",
    icon: icon(
      <>
        <rect x="3" y="6" width="13" height="12" rx="2" />
        <path d="m16 10 5-3v10l-5-3" />
      </>
    ),
  },
  {
    title: "Gestión de redes",
    text: "Matchday, formaciones, resultados y la comunicación diaria del club.",
    icon: icon(
      <>
        <rect x="4" y="3" width="16" height="18" rx="4" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="16.5" cy="7.5" r=".8" fill="currentColor" />
      </>
    ),
  },
];

const WEEK = [
  { tag: "Lun – Vie", title: "Entrenamientos", text: "Cobertura especial de cada práctica de la semana.", img: fotoEntreno, alt: "Entrenamiento de FC Paradiso" },
  { tag: "Previa", title: "Matchday", text: "Anunciamos el partido: rival, horario y estadio.", img: postMatchday, alt: "Pieza Matchday" },
  { tag: "Partido", title: "Formación y en vivo", text: "El XI inicial y la cobertura durante el partido.", img: postXi, alt: "Pieza XI iniziale", match: true },
  { tag: "Final", title: "Full time", text: "El resultado y las mejores imágenes de la fecha.", img: postFulltime, alt: "Pieza Full time" },
];

// Galería: posición en la grilla de 6 columnas (desktop) y de 2 columnas (celular)
const GALLERY = [
  { img: fotoAccion, alt: "Partido de FC Paradiso", tag: "Partido", d: ["1 / 4", "1 / 3"], m: ["span 2", "span 2"] },
  { img: fotoBenvenuti, alt: "Football Center Pian Scairolo", tag: "Estadio", d: ["4 / 7", "1"], m: ["span 2", "span 1"] },
  { img: fotoEscalera, alt: "Presentación de la camiseta", tag: "Indumentaria", d: ["4 / 6", "2 / 4"], m: ["span 1", "span 2"], pos: "50% 20%" },
  { img: postGirone, alt: "Pieza Girone di andata", d: ["6", "2 / 4"], m: ["span 1", "span 2"] },
  { img: fotoMarcador, alt: "Marcador del estadio", tag: "Día de partido", d: ["1 / 4", "3"], m: ["span 2", "span 1"] },
  { img: fotoEntreno, alt: "Entrenamiento", tag: "Entrenamiento", d: ["1 / 4", "4"], m: ["span 1", "span 1"], pos: "50% 40%" },
  { img: fotoPlantel, alt: "Plantel", tag: "Plantel", d: ["4 / 7", "4"], m: ["span 1", "span 1"] },
];

const Em = ({ children, color = "orange.400" }) => (
  <Text as="em" fontStyle="italic" color={color}>
    {children}
  </Text>
);

const Eyebrow = ({ children, color = "orange.400" }) => (
  <Flex align="center" gap="10px" color={color} fontSize="13px" fontWeight="600" letterSpacing=".18em" textTransform="uppercase">
    
    {children}
  </Flex>
);

const H2 = ({ children, ...props }) => (
  <Heading as="h2" mt="12px" fontSize={{ base: "36px", md: "clamp(36px, 4.4vw, 68px)" }} lineHeight=".95" fontWeight="700" letterSpacing="-0.03em" color="white" {...props}>
    {children}
  </Heading>
);

const Section = ({ children, ...props }) => (
  <Box as="section" py={{ base: "60px", md: "clamp(60px, 9vh, 100px)" }} borderTop={`1px solid ${LINE}`} {...props}>
    <Box {...CONTAINER}>{children}</Box>
  </Box>
);

const Tag = ({ children }) => (
  <Text
    as="figcaption"
    position="absolute"
    left="12px"
    bottom="12px"
    px="10px"
    py="6px"
    borderRadius="full"
    bg="rgba(0,0,0,.6)"
    backdropFilter="blur(6px)"
    fontSize="11px"
    fontWeight="600"
    letterSpacing=".12em"
    textTransform="uppercase"
    color="white"
  >
    {children}
  </Text>
);

const ArrowIcon = ({ d }) => (
  <Box as="svg" viewBox="0 0 24 24" w="16px" h="16px" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d={d} />
  </Box>
);

const ctaStyles = {
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  minH: "52px",
  px: "24px",
  borderRadius: "full",
  fontWeight: "600",
  fontSize: "15px",
  transition: `background-color 200ms ease, transform 160ms ${EASE_OUT_CSS}`,
  _active: { transform: "scale(0.97)" },
  _focusVisible: { outline: "2px solid", outlineColor: "orange.400", outlineOffset: "3px" },
};

const FcParadiso = () => {
  const reduceMotion = useReducedMotion();

  const goToContact = (e) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  return (
    <Flex bg="black" flexDirection="column" minHeight="100vh" pt={{ base: 40, md: 60 }} pb={{ base: "80px", md: "0" }} color="white">
      {/* Título */}
      <Flex justifyContent="start" alignItems="start" gap={2} flexDirection="row" alignSelf="start" pl={{ base: 4, md: 16, lg: "250px" }} mb={{ base: 6, md: 16 }}>
        <MotionBox
          w="2px"
          h={{ base: "70px", md: "80px" }}
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
          fontSize="5xl"
          fontWeight="bold"
          color="white"
          lineHeight="shorter"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          FC{" "}
          <MotionText
            fontSize="5xl"
            as="span"
            color="orange.400"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Paradiso
          </MotionText>
        </MotionHeading>
      </Flex>

      {/* Intro + ficha */}
      <Grid
        as="section"
        templateColumns={{ base: "1fr", md: "minmax(0, .9fr) minmax(0, 1.1fr)" }}
        gap={{ base: "32px", md: "clamp(32px, 5vw, 80px)" }}
        alignItems="center"
        {...CONTAINER}
        pb={{ base: "60px", md: "clamp(60px, 9vh, 100px)" }}
      >
        <MotionBox {...reveal(0.3)}>
          <Eyebrow>Profesionalización</Eyebrow>
          <H2 fontSize={{ base: "32px", md: "clamp(32px, 3.6vw, 56px)" }}>
            Trabajamos la imagen <Em>profesional del Club</Em>
          </H2>
          <Text mt="18px" maxW="46ch" color="whiteAlpha.800" fontSize={{ base: "16px", md: "clamp(16px, 1.4vw, 20px)" }} lineHeight="1.6">
            Desde LED Sports ocupamos la dirección del área de marketing de FC Paradiso. Fotografía, video, gestión de redes y el seguimiento del
            club{" "}
            <Text as="b" color="white" fontWeight="600">
              día a día, partido a partido
            </Text>
            , con cobertura especial de todos los entrenamientos de la semana.
          </Text>
          <Grid as="dl" templateColumns={{ base: "1fr", md: "1fr 1fr" }} m="28px 0 0" borderTop={`1px solid ${LINE}`}>
            {FICHA.map((f, i) => (
              <Box key={f.label} py="14px" pr={{ base: 0, md: i % 2 === 0 ? "16px" : 0 }} borderBottom={`1px solid ${LINE}`}>
                <Text as="dt" color="whiteAlpha.500" fontSize="11px" fontWeight="600" letterSpacing=".16em" textTransform="uppercase">
                  {f.label}
                </Text>
                <Text as="dd" m="4px 0 0" fontSize="16px" fontWeight="700">
                  {f.value}
                </Text>
              </Box>
            ))}
          </Grid>
        </MotionBox>
        <MotionBox as="figure" {...reveal(0.4)} position="relative" m="0" borderRadius="28px" overflow="hidden" border={`1px solid ${LINE}`} aspectRatio="4 / 3">
          <Image src={fotoPlantel} alt="Plantel de FC Paradiso" w="100%" h="100%" objectFit="cover" />
          <Image
            src={escudo}
            alt="Escudo de FC Paradiso"
            position="absolute"
            right="18px"
            top="18px"
            w={{ base: "64px", md: "84px" }}
            h={{ base: "64px", md: "84px" }}
            borderRadius="full"
            bg="white"
            p="4px"
            boxShadow="0 10px 30px rgba(0,0,0,.5)"
          />
          <Text
            as="figcaption"
            position="absolute"
            left="0"
            right="0"
            bottom="0"
            p="40px 20px 16px"
            bg="linear-gradient(0deg, rgba(0,0,0,.85), transparent)"
            fontSize="13px"
            color="whiteAlpha.800"
          >
            Plantel de la temporada · Football Center Pian Scairolo
          </Text>
        </MotionBox>
      </Grid>

      {/* Nuestro rol */}
      <Section>
        <Eyebrow>Nuestro rol</Eyebrow>
        <H2>
          Todo el marketing del club, <Em>en un solo equipo</Em>
        </H2>
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, minmax(0, 1fr))", lg: "repeat(4, minmax(0, 1fr))" }} gap="14px" mt={{ base: "28px", md: "clamp(28px, 4vw, 48px)" }}>
          {ROLES.map((r, i) => (
            <MotionBox
              key={r.title}
              as="article"
              {...reveal(i * 0.06)}
              display="flex"
              flexDirection="column"
              gap="14px"
              minH={{ base: "0", md: "230px" }}
              p="22px"
              borderRadius="22px"
              border="1px solid"
              borderColor={r.lead ? "transparent" : LINE}
              bg={r.lead ? "linear-gradient(150deg, #F6AD55, #DD6B20 60%, #4a2205)" : "#0d0d0d"}
              color={r.lead ? "black" : "white"}
              transitionProperty="border-color"
              transitionDuration="200ms"
              sx={r.lead ? {} : { [HOVER]: { "&:hover": { borderColor: "rgba(237,137,54,.5)" } } }}
            >
              <Box w="52px" h="52px" borderRadius="14px" display="grid" placeItems="center" bg={r.lead ? "rgba(0,0,0,.12)" : "rgba(237,137,54,.12)"} color={r.lead ? "black" : "orange.400"}>
                {r.icon}
              </Box>
              <Heading as="h3" mt={{ base: "4px", md: "auto" }} fontSize={{ base: "20px", md: "clamp(20px, 1.7vw, 24px)" }} lineHeight="1.1" letterSpacing="-0.01em" fontWeight="700">
                {r.title}
              </Heading>
              <Text m="0" fontSize="14px" lineHeight="1.55" color={r.lead ? "blackAlpha.800" : "whiteAlpha.700"}>
                {r.text}
              </Text>
            </MotionBox>
          ))}
        </Grid>
      </Section>

      {/* Una semana en Paradiso */}
      <Section>
        <Flex wrap="wrap" align="flex-end" justify="space-between" gap="20px">
          <Box>
            <Eyebrow>Linea Gráfica</Eyebrow>
            <H2>
              Del entrenamiento <Em>al resultado</Em>
            </H2>
          </Box>
          <Text m="0" maxW="38ch" color="whiteAlpha.700" fontSize={{ base: "16px", md: "clamp(16px, 1.4vw, 20px)" }} lineHeight="1.6">
            Seguimos al equipo toda la semana y contamos cada fecha de principio a fin.
          </Text>
        </Flex>
        <Box
          position="relative"
          mt={{ base: "28px", md: "clamp(28px, 4vw, 48px)" }}
          display={{ base: "flex", md: "grid" }}
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          gap={{ base: "12px", md: "14px" }}
          overflowX={{ base: "auto", md: "visible" }}
          mx={{ base: "-20px", md: 0 }}
          px={{ base: "20px", md: 0 }}
          pb={{ base: "8px", md: 0 }}
          sx={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
            "@media (min-width: 48em)": {
              "&::before": { content: '""', position: "absolute", left: 0, right: 0, top: "19px", h: "2px", bg: LINE },
            },
          }}
        >
          {WEEK.map((d, i) => (
            <MotionBox key={d.title} {...reveal(i * 0.08)} position="relative" flex={{ base: "none", md: "initial" }} w={{ base: "74vw", md: "auto" }} sx={{ scrollSnapAlign: "start" }}>
              <Box
                as="span"
                position="relative"
                zIndex={1}
                display="inline-flex"
                alignItems="center"
                h="40px"
                px="14px"
                borderRadius="full"
                bg={d.match ? "#1a0f05" : "#0b0b0b"}
                border="1px solid"
                borderColor={d.match ? "orange.500" : LINE}
                fontSize="12px"
                fontWeight="700"
                letterSpacing=".14em"
                textTransform="uppercase"
                color="orange.400"
              >
                {d.tag}
              </Box>
              <Box mt="18px" borderRadius="18px" overflow="hidden" aspectRatio="4 / 5" border={`1px solid ${LINE}`} bg="#0b0b0b">
                <Image src={d.img} alt={d.alt} loading="lazy" decoding="async" w="100%" h="100%" objectFit="cover" />
              </Box>
              <Heading as="h3" mt="16px" fontSize={{ base: "20px", md: "clamp(20px, 1.7vw, 24px)" }} lineHeight="1.1" letterSpacing="-0.01em" fontWeight="700">
                {d.title}
              </Heading>
              <Text mt="6px" color="whiteAlpha.700" fontSize="14px" lineHeight="1.55">
                {d.text}
              </Text>
            </MotionBox>
          ))}
        </Box>
      </Section>

      {/* Identidad del club */}
      <Box
        as="section"
        position="relative"
        overflow="hidden"
        bg="radial-gradient(ellipse 70% 90% at 80% 50%, #1f7a35, #0E3B1B 70%)"
        py={{ base: "60px", md: "clamp(60px, 10vh, 110px)" }}
      >
        {/* El fondo verde va a sangre; el contenido respeta el ancho del resto */}
        <Grid {...CONTAINER} position="relative" templateColumns={{ base: "1fr", md: "minmax(0, 1fr) minmax(0, 1fr)" }} gap={{ base: "28px", md: "clamp(28px, 5vw, 80px)" }} alignItems="center">
          <MotionBox {...reveal()}>
            <Eyebrow color={CLUB_YELLOW}>Creamos identidad</Eyebrow>
            <Text mt="14px" fontSize={{ base: "28px", md: "clamp(28px, 3.2vw, 50px)" }} lineHeight="1.05" fontWeight="700" letterSpacing="-0.02em" maxW="18ch">
              De solo un club, <Em color={CLUB_YELLOW}>a una comunidad viva</Em>
            </Text>
            <Text mt="16px" color="whiteAlpha.800" fontSize="16px" lineHeight="1.6" maxW="44ch">
              Transformamos la imagen del club alrededor de un lema. Con el verde, el amarillo y el león de su escudo como bandera, cada pieza en redes, en el estadio y en cada publicación repite la misma idea: "TODOS SOMOS Paradiso".
            </Text>
          </MotionBox>
          <MotionBox {...reveal(0.1)} position="relative" display="grid" placeItems="center" justifySelf="center" w="100%" maxW="620px">
            <Box
              aria-hidden="true"
              position="absolute"
              left="50%"
              top="50%"
              w={{ base: "92%", md: "min(480px, 104%)" }}
              aspectRatio="1"
              transform="translate(-50%, -50%)"
              pointerEvents="none"
              _before={{
                content: '""',
                position: "absolute",
                inset: "-14%",
                borderRadius: "full",
                bg: "radial-gradient(closest-side, rgba(242,210,27,.16), rgba(242,210,27,.05) 55%, transparent 72%)",
              }}
            >
 
            </Box>
            <Image src={tuttiSiamo} alt="Tutti siamo Paradiso" position="relative" w="100%" h="auto" filter="drop-shadow(0 20px 30px rgba(0,0,0,.35))" />
          </MotionBox>
        </Grid>
      </Box>

      {/* Galería */}
      <Section borderTop="0">
        <Eyebrow>Galería</Eyebrow>
        <H2>
          Dentro del <Em>club</Em>
        </H2>
        <Grid
          mt={{ base: "28px", md: "clamp(28px, 4vw, 48px)" }}
          templateColumns={{ base: "repeat(2, minmax(0, 1fr))", md: "repeat(6, minmax(0, 1fr))" }}
          gridAutoRows={{ base: "150px", md: "clamp(140px, 14vw, 220px)" }}
          gap={{ base: "10px", md: "12px" }}
        >
          {GALLERY.map((g, i) => (
            <MotionBox
              key={g.alt}
              as="figure"
              {...reveal((i % 3) * 0.06)}
              position="relative"
              m="0"
              borderRadius="18px"
              overflow="hidden"
              border={`1px solid ${LINE}`}
              bg="#0b0b0b"
              gridColumn={{ base: g.m[0], md: g.d[0] }}
              gridRow={{ base: g.m[1], md: g.d[1] }}
              sx={{ [HOVER]: { "&:hover img": { transform: "scale(1.04)" } } }}
            >
              <Image
                src={g.img}
                alt={g.alt}
                loading="lazy"
                decoding="async"
                w="100%"
                h="100%"
                objectFit="cover"
                objectPosition={g.pos || "50% 50%"}
                transition={`transform 700ms ${EASE_OUT_CSS}`}
              />
              {g.tag && <Tag>{g.tag}</Tag>}
            </MotionBox>
          ))}
        </Grid>
      </Section>

      {/* Cierre */}
      <Box
        as="section"
        pt={{ base: "60px", md: "clamp(60px, 9vh, 100px)" }}
        pb={{ base: "40px", md: "clamp(40px, 6vh, 70px)" }}
        borderTop={`1px solid ${LINE}`}
      >
        <Grid
          {...CONTAINER}
          templateColumns={{ base: "1fr", md: "minmax(0, 1fr) auto" }}
          gap={{ base: "28px", md: "clamp(28px, 5vw, 80px)" }}
          alignItems="center"
        >
          <MotionBox {...reveal()}>
            <Eyebrow>Tu club</Eyebrow>
            <Text mt="14px" fontSize={{ base: "32px", md: "clamp(32px, 4vw, 64px)" }} lineHeight=".98" fontWeight="700" letterSpacing="-0.03em" maxW="16ch">
              ¿Querés este trabajo para <Em>tu institución?</Em>
            </Text>
            <Flex wrap="wrap" gap="12px" mt="28px">
              <Box as="a" href="#contact" onClick={goToContact} {...ctaStyles} bg="orange.500" color="white" sx={{ [HOVER]: { "&:hover": { bg: "orange.400" } } }}>
                Hablemos
                <ArrowIcon d="M12 5v14M6 13l6 6 6-6" />
              </Box>
              <Box
                as={RouterLink}
                to="/entidades-deportivas"
                {...ctaStyles}
                border="1px solid rgba(255,255,255,.22)"
                color="white"
                sx={{ [HOVER]: { "&:hover": { bg: "rgba(255,255,255,.06)" } } }}
              >
                Servicio para entidades
              </Box>
            </Flex>
          </MotionBox>
          <MotionBox {...reveal(0.1)} justifySelf="center">
            <Image
              src={capitanEscudo}
              alt="Capitán de FC Paradiso junto al escudo del club"
              loading="lazy"
              decoding="async"
              w={{ base: "min(360px, 100%)", md: "auto" }}
              h={{ base: "auto", md: "clamp(340px, 38vw, 560px)" }}
              filter="drop-shadow(0 30px 40px rgba(0,0,0,.6))"
              sx={{
                maskImage: "linear-gradient(180deg, #000 75%, transparent)",
                WebkitMaskImage: "linear-gradient(180deg, #000 75%, transparent)",
                [MOBILE]: { maxW: "100%" },
              }}
            />
          </MotionBox>
        </Grid>
      </Box>

      <MotionBox alignSelf="center" animate={{ y: [0, -15, 0] }} transition={{ duration: 1, repeat: Infinity }} display="flex" fontSize={{ base: "50px", md: "80px" }}>
        <BsChevronDoubleDown color="orange" />
      </MotionBox>
      <Contact />
    </Flex>
  );
};

export default FcParadiso;
