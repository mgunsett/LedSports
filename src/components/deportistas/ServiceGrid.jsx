import { useEffect, useRef, useState } from "react";
import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { motion, useInView, useReducedMotion } from "framer-motion";

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

/*
 * Grilla de servicios para Deportistas · versión "Grilla + plan"
 * - Resumen del plan integral (los 11 servicios con tilde; al tocar uno, baja a su tarjeta y la resalta).
 * - Grilla con la misma distribución que la página original (tarjetas de 1, 2 o 3 columnas).
 * - Las imágenes se ajustan con unidades de contenedor (cqw/cqh): siempre enteras, nunca recortadas.
 */

const MotionBox = motion(Box);
const EASE_OUT = [0.23, 1, 0.32, 1];
const EASE_OUT_CSS = "cubic-bezier(0.23, 1, 0.32, 1)";
const HOVER = "@media (hover: hover) and (pointer: fine)";
const LINE = "rgba(255,255,255,.1)";
const PANEL = "#15161a";

// [clave, columnas en desktop, orientación]: misma distribución que la página original
const SERVICES = [
  { k: "plan", t: "Plan de marketing", d: "Diseñamos el plan de marketing y comunicación adaptado a tu persona para generar el contenido adecuado.", span: 2, h: true, media: { img: deportistas_planmkt } },
  { k: "g360", t: "Gestión 360º", d: "Generamos contenido adaptado para todas las redes sociales existentes.", span: 1, media: { img: deportistas_gestion360 } },
  { k: "logos", t: "Logos", d: "Creamos tu logo propio para identificar todo tu contenido profesionalmente.", span: 1, media: { img: deportistas_logos } },
  { k: "match", t: "Matchday", d: "Anunciá tu próximo partido con placas estáticas o animadas de alta calidad.", span: 2, h: true, media: { fan: [deportistas_prematch, deportistas_prematch1, deportistas_prematch2] } },
  { k: "reels", t: "Reels", d: "Generamos videos profesionales para tus redes sociales.", span: 2, h: true, big: true, media: { video: true } },
  { k: "post", t: "Post partido", d: "Comunicá tus sensaciones de manera profesional con imágenes o videos.", span: 1, media: { img: deportistas_postpartido } },
  { k: "perfil", t: "Optimización de perfil", d: "Organizamos tu perfil con biografía, portada e historias destacadas profesionales.", span: 3, h: true, big: true, media: { perfil: [deportistas_perfil, deportistas_perfil3, deportistas_perfil4] } },
  { k: "conme", t: "Conmemorativas", d: "Contenido especial para fechas importantes y aniversarios de clubes.", span: 1, media: { img: deportistas_aniversario } },
  { k: "stats", t: "Estadísticas", d: "Análisis visual de tu rendimiento, progresos y logros deportivos.", span: 1, media: { img: deportistas_estadis } },
  { k: "foto", t: "Fotografía", d: "Fotógrafos y filmmakers en todo el mundo para contenido de alta calidad.", span: 1, media: { img: deportistas_fotografia } },
  { k: "carpeta", t: "Carpeta comercial", d: "Destacamos tus beneficios para acercar tu imagen a marcas comerciales.", span: 3, h: true, media: { img: deportistas_carpetacom } },
];

const reveal = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, delay: (i % 3) * 0.06, ease: EASE_OUT },
});

const Check = ({ size = "20px" }) => (
  <Box as="span" w={size} h={size} flex="none" borderRadius="full" display="grid" placeItems="center" bg="rgba(237,137,54,.16)" color="orange.400">
    <Box as="svg" viewBox="0 0 12 12" w="11px" h="11px" aria-hidden="true">
      <path d="M2.5 6.2 5 8.5l4.5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </Box>
  </Box>
);

const ReelVideo = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (inView && !reduceMotion) v.play().catch(() => {});
    else v.pause();
  }, [inView, reduceMotion]);
  return (
    <video
      ref={ref}
      src={deportistas_video}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label="Reel de ejemplo"
      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
    />
  );
};

const IMG = { w: "auto", h: "auto", objectFit: "contain", loading: "lazy", decoding: "async", draggable: false };

const Media = ({ s, ...props }) => {
  const m = s.media;
  let inner;
  if (m.video) inner = <ReelVideo />;
  else if (m.fan)
    inner = (
      <Flex align="center" justify="center" gap="2cqw" h="84cqh" w="86cqw">
        {m.fan.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            {...IMG}
            maxH={i === 1 ? "100%" : "78%"}
            maxW={i === 1 ? "32cqw" : "26cqw"}
            borderRadius="8px"
            opacity={i === 1 ? 1 : 0.75}
            filter={i === 1 ? "drop-shadow(0 0 14px rgba(255,255,255,.35))" : "none"}
          />
        ))}
      </Flex>
    );
  else if (m.perfil)
    inner = (
      <Flex align="center" justify="center" gap="3cqw" w="90cqw" h="80cqh" direction={{ base: "column", md: "row" }}>
        <Image src={m.perfil[0]} alt="" {...IMG} maxW={{ base: "80cqw", md: "46cqw" }} maxH={{ base: "44cqh", md: "80cqh" }} />
        <Flex direction="column" gap="3cqh" align="center">
          <Image src={m.perfil[1]} alt="" {...IMG} maxW={{ base: "80cqw", md: "44cqw" }} maxH={{ base: "17cqh", md: "37cqh" }} />
          <Image src={m.perfil[2]} alt="" {...IMG} maxW={{ base: "80cqw", md: "44cqw" }} maxH={{ base: "17cqh", md: "37cqh" }} />
        </Flex>
      </Flex>
    );
  else
    inner = (
      <Image
        className="sg-img"
        src={m.img}
        alt={s.t}
        {...IMG}
        maxW="78cqw"
        maxH="80cqh"
        transition={`transform 400ms ${EASE_OUT_CSS}, filter 300ms ease`}
      />
    );
  return (
    <Box position="relative" display="grid" placeItems="center" overflow="hidden" bg={PANEL} sx={{ containerType: "size" }} {...props}>
      {inner}
    </Box>
  );
};

const ServiceCard = ({ s, i, flash }) => (
  <MotionBox
    as="article"
    id={`servicio-${s.k}`}
    {...reveal(i)}
    gridColumn={{ base: "auto", md: s.span === 3 ? "span 2" : s.span === 2 ? "span 2" : "auto", lg: `span ${s.span}` }}
    display="flex"
    flexDirection={{ base: "column", md: s.h ? "row" : "column" }}
    borderRadius="22px"
    overflow="hidden"
    border="1px solid"
    borderColor={flash ? "orange.500" : LINE}
    bg="#0b0b0b"
    boxShadow={flash ? "0 0 0 1px #ED8936, 0 0 28px rgba(245,160,15,.25)" : "none"}
    transition={`border-color 250ms ease, box-shadow 250ms ease, transform 350ms ${EASE_OUT_CSS}`}
    scrollMarginTop="120px"
    sx={{
      [HOVER]: {
        "&:hover": { borderColor: "rgba(237,137,54,.55)", transform: "translateY(-6px)", boxShadow: "0 0 22px rgba(245,160,15,.18)" },
        "&:hover .sg-img": { transform: "translateY(-6px)", filter: "drop-shadow(0 0 12px rgba(245,160,15,.45))" },
      },
    }}
  >
    <Media
      s={s}
      flex={{ base: "none", md: s.h ? "1.6" : "none" }}
      h={{ base: "240px", md: s.h ? "auto" : "clamp(210px, 19vw, 260px)" }}
      minH={{ md: s.h ? (s.big ? "clamp(300px, 28vw, 400px)" : "clamp(240px, 22vw, 300px)") : undefined }}
    />
    <Flex flex={{ md: s.h ? "1" : "initial" }} direction="column" justify="center" gap="8px" p={{ base: "22px", md: "clamp(22px, 2.4vw, 32px)" }}>
      <Flex align="center" gap="10px">
        <Check />
        <Heading as="h3" m="0" fontSize={{ base: "19px", md: "clamp(19px, 1.7vw, 24px)" }} fontWeight="700" color="orange.400" letterSpacing="-0.01em">
          {s.t}
        </Heading>
        <Text as="span" ml="auto" color="whiteAlpha.500" fontSize="12px" fontWeight="700" letterSpacing=".12em" sx={{ fontVariantNumeric: "tabular-nums" }}>
          {String(i + 1).padStart(2, "0")}
        </Text>
      </Flex>
      <Text m="0" color="whiteAlpha.800" fontSize="15px" lineHeight="1.6">
        {s.d}
      </Text>
    </Flex>
  </MotionBox>
);

const ServiceGrid = () => {
  const reduceMotion = useReducedMotion();
  const [flash, setFlash] = useState(null);
  const timer = useRef(0);
  useEffect(() => () => clearTimeout(timer.current), []);

  const goTo = (k) => (e) => {
    e.preventDefault();
    document.getElementById(`servicio-${k}`)?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
    setFlash(k);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setFlash(null), 1400);
  };

  const goToContact = (e) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  return (
    <Box as="section" w="min(1180px, calc(100% - 40px))" mx="auto" aria-labelledby="servicios-title">
      <Heading
        as="h2"
        id="servicios-title"
        textAlign="center"
        m={{ base: "10px 0 28px", md: "0 0 44px" }}
        fontSize={{ base: "30px", md: "clamp(30px, 3.6vw, 48px)" }}
        fontWeight="700"
        letterSpacing="-0.02em"
        color="white"
      >
        Así potenciamos{" "}
        <Text as="span" color="orange.400">
          tu marca
        </Text>
      </Heading>

      <Grid templateColumns={{ base: "1fr", md: "repeat(2, minmax(0, 1fr))", lg: "repeat(3, minmax(0, 1fr))" }} gap={{ base: "16px", md: "clamp(16px, 1.8vw, 24px)" }}>
        {/* Resumen del plan integral */}
        <MotionBox
          {...reveal()}
          gridColumn={{ base: "auto", md: "span 2", lg: "span 3" }}
          display="grid"
          gridTemplateColumns={{ base: "1fr", lg: "minmax(0, 1fr) minmax(0, 1.3fr)" }}
          gap={{ base: "22px", lg: "clamp(20px, 4vw, 56px)" }}
          alignItems="center"
          p={{ base: "24px", md: "clamp(24px, 3vw, 40px)" }}
          borderRadius="22px"
          border="1px solid rgba(237,137,54,.35)"
          bg="radial-gradient(ellipse 60% 120% at 0% 50%, rgba(237,137,54,.16), transparent 70%), #0b0b0b"
        >
          <Box>
            <Flex align="center" gap="10px" color="orange.400" fontSize="13px" fontWeight="600" letterSpacing=".18em" textTransform="uppercase">
              <Box w="22px" h="2px" bg="orange.500" borderRadius="2px" />
              Servicio integral
            </Flex>
            <Text mt="12px" fontSize={{ base: "28px", md: "clamp(26px, 2.8vw, 42px)" }} lineHeight="1" fontWeight="700" letterSpacing="-0.03em" color="white">
              Un plan,{" "}
              <Text as="em" fontStyle="italic" color="orange.400">
                todo incluido
              </Text>
            </Text>
            <Text mt="12px" color="whiteAlpha.700" fontSize="15px" lineHeight="1.6" maxW="42ch">
              No contratás piezas sueltas: estos 11 servicios trabajan juntos, coordinados por el mismo equipo.
            </Text>
            <Box
              as="a"
              href="#contact"
              onClick={goToContact}
              display="inline-flex"
              alignItems="center"
              gap="10px"
              mt="20px"
              minH="50px"
              px="22px"
              borderRadius="full"
              bg="orange.500"
              color="white"
              fontWeight="600"
              fontSize="15px"
              transition={`background-color 200ms ease, transform 160ms ${EASE_OUT_CSS}`}
              _active={{ transform: "scale(0.97)" }}
              _focusVisible={{ outline: "2px solid", outlineColor: "orange.400", outlineOffset: "3px" }}
              sx={{ [HOVER]: { "&:hover": { bg: "orange.400" } } }}
            >
              Consultá tu plan
              <Box as="svg" viewBox="0 0 24 24" w="16px" h="16px" aria-hidden="true">
                <path d="M12 5v14M6 13l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </Box>
            </Box>
          </Box>
          <Grid as="ul" listStyleType="none" m="0" p="0" templateColumns={{ base: "1fr", sm: "repeat(2, minmax(0, 1fr))" }} columnGap="20px">
            {SERVICES.map((s) => (
              <Box as="li" key={s.k}>
                <Flex
                  as="a"
                  href={`#servicio-${s.k}`}
                  onClick={goTo(s.k)}
                  align="center"
                  gap="10px"
                  py="10px"
                  px="4px"
                  borderBottom={`1px solid ${LINE}`}
                  fontSize="15px"
                  fontWeight="600"
                  color="white"
                  transition="color 200ms ease"
                  _focusVisible={{ outline: "2px solid", outlineColor: "orange.400", outlineOffset: "2px", borderRadius: "8px" }}
                  sx={{ [HOVER]: { "&:hover": { color: "orange.400" } } }}
                >
                  <Check />
                  {s.t}
                </Flex>
              </Box>
            ))}
          </Grid>
        </MotionBox>

        {SERVICES.map((s, i) => (
          <ServiceCard key={s.k} s={s} i={i} flash={flash === s.k} />
        ))}
      </Grid>
    </Box>
  );
};

export default ServiceGrid;
