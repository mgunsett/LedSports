import { useEffect, useRef, useState } from "react";
import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";
import Contact from "@/components/common/Contact";
import { SPORTFOLIO_CASES, SPORTFOLIO_URL } from "@/data/sportfolio";
import {
  BrowserFrame,
  CREAM,
  Cta,
  HOVER,
  LineIcon,
  Lockup,
  NewBadge,
  PhoneFrame,
  SAGE,
  SPF_DEEP,
  SPF_GREEN,
} from "@/components/sportfolio/SportfolioUI";
import logoSportfolio from "@/assets/sportfolio/logo_sportfolio.webp";
import logoLed from "@/assets/branding/logo_firma.webp";
import reel from "@/assets/sportfolio/guido_reel.mp4";
import reelPoster from "@/assets/sportfolio/guido_reel_poster.jpg";
import feedColab from "@/assets/sportfolio/feed_colaboracion.webp";
import feedQueHace from "@/assets/sportfolio/feed_que_hace.webp";
import feedArgentina from "@/assets/sportfolio/feed_argentina.webp";


const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionBox = motion(Box);

const EASE_OUT = [0.23, 1, 0.32, 1];
const LINE = "rgba(255,255,255,.12)";
// Mismo ancho de contenido que el resto de las páginas de servicios (ver Agentes)
const CONTAINER = { w: "100%", maxW: "1280px", mx: "auto", px: { base: 5, md: 10 } };
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, delay, ease: EASE_OUT },
});

const svg = (children) => (
  <Box as="svg" viewBox="0 0 24 24" w="22px" h="22px" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </Box>
);

const FEATURES = [
  { title: "Carrera y trayectoria", text: "Su historia completa, temporada por temporada.", icon: svg(<path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />) },
  { title: "Clubes", text: "Escudos, etapas y logros en cada club.", icon: svg(<path d="M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6z" />) },
  {
    title: "Galería de fotos",
    text: "Ordenada por torneo, club o selección.",
    icon: svg(
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="9" cy="10" r="2" />
        <path d="m21 16-5-5-8 8" />
      </>
    ),
  },
  {
    title: "Highlights",
    text: "Sus mejores jugadas y videos.",
    icon: svg(
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m10 9 5 3-5 3z" />
      </>
    ),
  },
  {
    title: "Estadísticas",
    text: "Perfil, rendimiento y datos de temporada.",
    icon: svg(
      <>
        <path d="M12 3a9 9 0 1 0 9 9h-9z" />
        <path d="M15 3.5A9 9 0 0 1 20.5 9H15z" />
      </>
    ),
  },
  {
    title: "Partido a partido",
    text: "Próximo partido y último resultado.",
    icon: svg(
      <>
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M3 9h18M8 2v4M16 2v4M8 14h2M14 14h2" />
      </>
    ),
  },
  {
    title: "Dominio propio",
    text: "Su nombre como dirección web.",
    icon: svg(
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
      </>
    ),
  },
  {
    title: "Siempre al día",
    text: "Actualizamos datos y contenido.",
    icon: svg(
      <>
        <path d="M20 11a8 8 0 0 0-14.6-4.5L4 8M4 13a8 8 0 0 0 14.6 4.5L20 16" />
        <path d="M4 4v4h4M20 20v-4h-4" />
      </>
    ),
  },
];

const TEAM = [
  {
    logo: logoLed,
    alt: "LED Sports",
    role: "Marca y contenido",
    bg: "linear-gradient(160deg, #1a1006, #0b0b0b 60%)",
    accent: "orange.400",
    items: [
      ["Contenido y fotos", "Producción audiovisual de cada jugador."],
      ["Estadísticas", "Datos de temporada, listos para publicar."],
      ["Marca personal", "Estrategia y presencia en redes."],
    ],
  },
  {
    logo: logoSportfolio,
    alt: "Sportfolio Web",
    role: "Diseño y web",
    bg: `linear-gradient(160deg, #1c3a2a, ${SPF_DEEP} 70%)`,
    accent: SAGE,
    items: [
      ["Diseño", "Una identidad visual propia del jugador o club."],
      ["Desarrollo", "Web a medida, rápida y adaptable."],
      ["Dominio y updates", "Su nombre como dominio y datos al día."],
    ],
  },
];

const STEPS = [
  { who: "LED Sports", led: true, title: "Contenido", text: "Reunimos fotos, videos, trayectoria y estadísticas." },
  { who: "Sportfolio", title: "Diseño", text: "Una identidad visual propia, con tus colores." },
  { who: "Sportfolio", title: "Desarrollo", text: "Web a medida, rápida y adaptada a celular." },
  { who: "Juntos", led: true, title: "Dominio y updates", text: "Tu nombre como dominio y los datos siempre al día." },
];

const FEED = [
  { src: feedColab, alt: "Pieza: Colaboración Sportfolio Web + LED Sports" },
  { src: feedQueHace, alt: "Pieza: Qué hace cada uno" },
  { src: feedArgentina, alt: "Pieza: Argentina, 3 webs" },
];

const Em = ({ children, color = CREAM }) => (
  <Text as="em" fontStyle="italic" color={color}>
    {children}
  </Text>
);

const Eyebrow = ({ children, cream }) => (
  <Flex align="center" gap="10px" color={cream ? CREAM : "orange.400"} fontSize="13px" fontWeight="600" letterSpacing=".18em" textTransform="uppercase">
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

const Card = (props) => <MotionBox p="22px" borderRadius="22px" border={`1px solid ${LINE}`} bg="#0d0d0d" {...props} />;

/* Reel vertical: se reproduce solo cuando está en pantalla; botón de sonido */
const Reel = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });
  const reduceMotion = useReducedMotion();
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (inView && !reduceMotion) v.play().catch(() => {});
    else v.pause();
  }, [inView, reduceMotion]);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !muted;
    setMuted(!muted);
    if (muted) v.play().catch(() => {});
  };

  return (
    <Box position="relative" aspectRatio="9 / 16" borderRadius="26px" overflow="hidden" bg="#0a0a0a" border="1px solid rgba(255,255,255,.14)" boxShadow="0 40px 80px rgba(0,0,0,.65)">
      <video
        ref={ref}
        src={reel}
        poster={reelPoster}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        aria-label="Recorrido por la web de Guido Mainero"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      <Flex
        position="absolute"
        left="12px"
        top="12px"
        align="center"
        gap="6px"
        px="10px"
        py="6px"
        borderRadius="full"
        bg="blackAlpha.600"
        fontSize="11px"
        fontWeight="700"
        letterSpacing=".1em"
        textTransform="uppercase"
      >
        <Box w="7px" h="7px" borderRadius="full" bg={SAGE} />
        guidomainero.com
      </Flex>
      <Box
        as="button"
        type="button"
        onClick={toggle}
        aria-label={muted ? "Activar sonido" : "Silenciar"}
        position="absolute"
        right="12px"
        bottom="12px"
        w="40px"
        h="40px"
        borderRadius="full"
        bg="blackAlpha.600"
        display="grid"
        placeItems="center"
        _focusVisible={{ outline: "2px solid", outlineColor: "orange.400", outlineOffset: "3px" }}
      >
        <Box as="svg" viewBox="0 0 24 24" w="18px" h="18px" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M11 5 6 9H3v6h3l5 4z" />
          {muted ? <path d="m16 9 5 5m0-5-5 5" /> : <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />}
        </Box>
      </Box>
    </Box>
  );
};

const CaseMedia = ({ c }) => {
  if (c.layout === "phones") {
    return (
      // align flex-start: sin esto el primer celular se estira al alto del segundo (desplazado) y queda vacío abajo
      <Flex justify="center" align="flex-start" gap={{ base: "12px", md: "clamp(12px, 2vw, 24px)" }}>
        {c.shots.map((s, i) => (
          <PhoneFrame key={s.alt} src={s.src} alt={s.alt} w="min(42%, 250px)" mt={i === 1 ? "12%" : 0} />
        ))}
      </Flex>
    );
  }
  return (
    <Box>
      {c.shots.map((s, i) => (
        <BrowserFrame key={s.alt} src={s.src} alt={s.alt} bar={s.bar} position="relative" w={i === 0 ? "100%" : "62%"} mt={i === 0 ? 0 : "-14%"} ml={i === 0 ? 0 : "auto"} />
      ))}
    </Box>
  );
};

const Sportfolio = () => {
  const reduceMotion = useReducedMotion();
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  return (
    <Flex bg="black" flexDirection="column" minHeight="100vh" pt={{ base: 40, md: 60 }} pb={{ base: "80px", md: "0" }} color="white" overflowX="clip">
      {/* Título */}
      <Flex justifyContent="start" alignItems="start" gap={2} flexDirection="row" alignSelf="start" pl={{ base: 4, md: 16, lg: "250px" }} mb={{ base: 6, md: 10 }}>
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
          Sport
          <MotionText fontSize="5xl" as="span" color="orange.400" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.8 }}>
            folio
          </MotionText>
        </MotionHeading>
      </Flex>

      {/* Intro + reel */}
      <Grid
        as="section"
        templateColumns={{ base: "1fr", md: "minmax(0, 1.1fr) minmax(0, .9fr)" }}
        gap={{ base: "40px", md: "clamp(32px, 5vw, 80px)" }}
        alignItems="center"
        {...CONTAINER}
        pb={{ base: "60px", md: "clamp(60px, 9vh, 100px)" }}
      >
        <MotionBox {...reveal(0.3)}>
          <NewBadge />
          <Lockup mt="40px" />
          <H2 mt="28px" fontSize={{ base: "34px", md: "clamp(34px, 4vw, 62px)" }}>
            Tu carrera, en una web <Em>única y propia</Em>
          </H2>
          <Text mt="18px" maxW="46ch" color="whiteAlpha.800" fontSize={{ base: "16px", md: "clamp(16px, 1.4vw, 20px)" }} lineHeight="1.6">
            Junto a Sportfolio Web sumamos un nuevo servicio: la landing page profesional de cada jugador, con{" "}
            <Text as="b" color="white" fontWeight="600">
              toda su carrera, trayectoria, clubes, fotos, highlights, estadísticas, partido a partido y resultados
            </Text>
            .
          </Text>
          <Flex wrap="wrap" gap="12px" mt="30px">
            <Cta as="a" href="#contact" onClick={scrollTo("contact")}>
              Quiero mi web
              <LineIcon name="down" />
            </Cta>
            <Cta as="a" href="#casos" onClick={scrollTo("casos")} variant="ghost">
              Ver casos reales
            </Cta>
          </Flex>
          
        </MotionBox>
        <MotionBox {...reveal(0.4)} position="relative" justifySelf="center" w="min(340px, 100%)">
          <Box
            aria-hidden="true"
            position="absolute"
            inset="-25%"
            bg="radial-gradient(closest-side, rgba(134,192,162,.2), transparent)"
            pointerEvents="none"
          />
          <Reel />
        </MotionBox>
      </Grid>

      {/* Qué incluye */}
      <Section>
        <Eyebrow cream>Qué incluye</Eyebrow>
        <H2>
          Todo lo que un jugador <Em>necesita mostrar</Em>
        </H2>
        <Grid templateColumns={{ base: "repeat(2, minmax(0, 1fr))", lg: "repeat(4, minmax(0, 1fr))" }} gap={{ base: "10px", md: "14px" }} mt={{ base: "28px", md: "clamp(28px, 4vw, 48px)" }}>
          {FEATURES.map((f, i) => (
            <Card
              key={f.title}
              as="article"
              {...reveal((i % 4) * 0.05)}
              display="flex"
              flexDirection="column"
              gap={{ base: "10px", md: "12px" }}
              minH={{ base: "0", md: "190px" }}
              p={{ base: "16px", md: "22px" }}
              transitionProperty="border-color"
              transitionDuration="200ms"
              sx={{ [HOVER]: { "&:hover": { borderColor: "rgba(134,192,162,.5)" } } }}
            >
              <Box w={{ base: "40px", md: "48px" }} h={{ base: "40px", md: "48px" }} borderRadius="14px" display="grid" placeItems="center" bg="rgba(134,192,162,.12)" color={SAGE}>
                {f.icon}
              </Box>
              <Heading as="h3" mt={{ base: "4px", md: "auto" }} fontSize={{ base: "16px", md: "clamp(18px, 1.5vw, 22px)" }} lineHeight="1.1" fontWeight="700">
                {f.title}
              </Heading>
              <Text m="0" color="whiteAlpha.700" fontSize={{ base: "13px", md: "14px" }} lineHeight="1.5">
                {f.text}
              </Text>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* La colaboración */}
      <Section>
        <Eyebrow>La colaboración</Eyebrow>
        <H2>
          Dos enfoques, <Em color="orange.400">un solo equipo</Em>
        </H2>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="14px" mt={{ base: "28px", md: "clamp(28px, 4vw, 48px)" }}>
          {TEAM.map((t, i) => (
            <MotionBox key={t.alt} as="article" {...reveal(i * 0.08)} p={{ base: "24px", md: "clamp(24px, 3vw, 40px)" }} borderRadius="26px" border={`1px solid ${LINE}`} bg={t.bg}>
              <Flex align="center" justify="space-between" gap="16px" minH="44px">
                <Image src={t.logo} alt={t.alt} h="32px" w="auto" />
                <Text fontSize="12px" fontWeight="700" letterSpacing=".16em" textTransform="uppercase" color="whiteAlpha.500" textAlign="right">
                  {t.role}
                </Text>
              </Flex>
              <Box as="ul" listStyleType="none" m="26px 0 0" p="0" borderTop="1px solid rgba(255,255,255,.14)">
                {t.items.map(([title, text], j) => (
                  <Grid as="li" key={title} templateColumns="40px 1fr" gap="10px" py="16px" borderBottom="1px solid rgba(255,255,255,.14)">
                    <Text as="b" fontSize="13px" color={t.accent} pt="3px">
                      {String(j + 1).padStart(2, "0")}
                    </Text>
                    <Box>
                      <Text fontSize={{ base: "18px", md: "clamp(18px, 1.6vw, 22px)" }} fontWeight="700" letterSpacing="-0.01em">
                        {title}
                      </Text>
                      <Text mt="4px" color="whiteAlpha.700" fontSize="14px" lineHeight="1.5">
                        {text}
                      </Text>
                    </Box>
                  </Grid>
                ))}
              </Box>
            </MotionBox>
          ))}
        </Grid>
        <Text mt="18px" textAlign="center" color={CREAM} fontSize="12px" fontWeight="700" letterSpacing=".22em" textTransform="uppercase">
          La marca del jugador y su web, hechas por el mismo equipo
        </Text>
      </Section>

      {/* Casos reales */}
      <Section id="casos" scrollMarginTop="90px">
        <Eyebrow cream>Casos reales</Eyebrow>
        <H2>
          Webs que ya están <Em>en la cancha</Em>
        </H2>
        <Flex direction="column" gap={{ base: "56px", md: "clamp(56px, 9vh, 110px)" }} mt={{ base: "36px", md: "clamp(36px, 5vw, 64px)" }}>
          {SPORTFOLIO_CASES.map((c, i) => {
            const flip = i % 2 === 1;
            return (
              <MotionBox
                key={c.name}
                as="article"
                {...reveal()}
                display="grid"
                gridTemplateColumns={{ base: "1fr", md: flip ? "minmax(0, .7fr) minmax(0, 1.3fr)" : "minmax(0, 1.3fr) minmax(0, .7fr)" }}
                gap={{ base: "24px", md: "clamp(24px, 4vw, 64px)" }}
                alignItems="center"
              >
                <Box order={{ base: 0, md: flip ? 2 : 0 }} minW="0">
                  <CaseMedia c={c} />
                </Box>
                <Box>
                  <Text color={SAGE} fontSize="12px" fontWeight="700" letterSpacing=".16em">
                    {String(i + 1).padStart(2, "0")}{" "}
                    <Text as="span" color="whiteAlpha.500" fontWeight="600">
                      / {String(SPORTFOLIO_CASES.length).padStart(2, "0")}
                    </Text>
                  </Text>
                  <Heading as="h3" mt="12px" fontSize={{ base: "34px", md: "clamp(34px, 3.8vw, 60px)" }} lineHeight=".92" letterSpacing="-0.03em" fontWeight="700">
                    {c.name}
                  </Heading>
                  <Text mt="8px" color="whiteAlpha.700" fontSize="16px">
                    {c.club}
                  </Text>
                  <Box as="ul" listStyleType="none" m="22px 0 0" p="0" borderTop={`1px solid ${LINE}`}>
                    {c.points.map((p) => (
                      <Flex as="li" key={p} align="center" gap="12px" py="11px" borderBottom={`1px solid ${LINE}`} fontSize="15px" fontWeight="600">
                        <Box w="6px" h="6px" borderRadius="full" bg={CREAM} flex="none" />
                        {p}
                      </Flex>
                    ))}
                  </Box>
                  {c.url && (
                    <Cta as="a" href={c.url} target="_blank" rel="noopener noreferrer" variant="ghost" mt="24px">
                      {c.linkLabel}
                      <LineIcon name="ext" />
                    </Cta>
                  )}
                </Box>
              </MotionBox>
            );
          })}
        </Flex>
      </Section>

      {/* Cómo funciona */}
      <Section>
        <Eyebrow>Cómo funciona</Eyebrow>
        <H2>
          De tu carrera <Em color="orange.400">a tu web</Em>
        </H2>
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, minmax(0, 1fr))", lg: "repeat(4, minmax(0, 1fr))" }} gap="14px" mt={{ base: "28px", md: "clamp(28px, 4vw, 48px)" }}>
          {STEPS.map((s, i) => (
            <Card key={s.title} as="article" {...reveal(i * 0.06)} p="22px 22px 24px">
              <Text
                aria-hidden="true"
                fontSize={{ base: "48px", md: "clamp(48px, 4.6vw, 72px)" }}
                lineHeight=".8"
                fontWeight="700"
                fontStyle="italic"
                letterSpacing="-0.05em"
                color="transparent"
                sx={{ WebkitTextStroke: "1.5px rgba(242,233,184,.5)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </Text>
              <Text
                as="span"
                display="inline-block"
                mt="18px"
                px="10px"
                py="5px"
                borderRadius="full"
                fontSize="11px"
                fontWeight="700"
                letterSpacing=".12em"
                textTransform="uppercase"
                bg={s.led ? "rgba(237,137,54,.14)" : "rgba(134,192,162,.14)"}
                color={s.led ? "orange.400" : SAGE}
              >
                {s.who}
              </Text>
              <Heading as="h3" mt="12px" fontSize={{ base: "20px", md: "clamp(20px, 1.7vw, 24px)" }} lineHeight="1.1" fontWeight="700">
                {s.title}
              </Heading>
              <Text mt="8px" color="whiteAlpha.700" fontSize="14px" lineHeight="1.5">
                {s.text}
              </Text>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* En redes */}
      <Section>
        <Eyebrow cream># En redes</Eyebrow>
        <H2>
          Así lo <Em>contamos</Em>
        </H2>
        <Box
          mt={{ base: "28px", md: "clamp(28px, 4vw, 48px)" }}
          display={{ base: "flex", md: "grid" }}
          gridTemplateColumns="repeat(3, minmax(0, 1fr))"
          gap={{ base: "12px", md: "14px" }}
          overflowX={{ base: "auto", md: "visible" }}
          mx={{ base: "-20px", md: 0 }}
          px={{ base: "20px", md: 0 }}
          pb={{ base: "8px", md: 0 }}
          sx={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }}
        >
          {FEED.map((f, i) => (
            <MotionBox key={f.alt} {...reveal(i * 0.06)} flex={{ base: "none", md: "initial" }} w={{ base: "72vw", md: "auto" }} sx={{ scrollSnapAlign: "start" }}>
              <Image src={f.src} alt={f.alt} loading="lazy" decoding="async" w="100%" aspectRatio="4 / 5" objectFit="cover" borderRadius="18px" border={`1px solid ${LINE}`} />
            </MotionBox>
          ))}
        </Box>
      </Section>

      {/* Cierre */}
      <Box {...CONTAINER} mb={{ base: "40px", md: "clamp(40px, 6vh, 70px)" }}>
        <MotionBox
          as="section"
          {...reveal()}
          borderRadius={{ base: "24px", md: "32px" }}
          bg={`radial-gradient(ellipse 80% 120% at 90% 50%, #2f6a4c, ${SPF_GREEN} 35%, ${SPF_DEEP} 85%)`}
          p={{ base: "32px 22px", md: "clamp(40px, 6vw, 88px)" }}
          display="grid"
          gridTemplateColumns={{ base: "1fr", md: "minmax(0, 1fr) auto" }}
          gap={{ base: "24px", md: "clamp(24px, 4vw, 64px)" }}
          alignItems="center"
        >
          <Box>
            <NewBadge>Servicio extra</NewBadge>
            <Text mt="18px" fontSize={{ base: "32px", md: "clamp(32px, 4vw, 64px)" }} lineHeight=".98" fontWeight="700" letterSpacing="-0.03em" maxW="15ch">
              ¿Querés tu <Em>propia web?</Em>
            </Text>
            <Text mt="14px" color="whiteAlpha.800" fontSize="15px" maxW="44ch" lineHeight="1.6">
              Consultanos: lo sumamos a tu plan de LED Sports como servicio extra.
            </Text>
            <Flex wrap="wrap" gap={{ base: "5px", md: "12px" }} mt="30px">
              <Cta as="a" href="#contact" onClick={scrollTo("contact")} variant="cream">
                Hablemos
                <LineIcon name="down" />
              </Cta>
              <Cta as="a" href={SPORTFOLIO_URL} target="_blank" rel="noopener noreferrer" variant="ghost">
                Conocé Sportfolio
                <LineIcon name="ext" />
              </Cta>
            </Flex>
          </Box>
          <Image m={{base:'10px auto', md:'auto'}} src={logoSportfolio} alt="Sportfolio Web" w={{ base: "50%", md: "clamp(220px, 26vw, 400px)" }} h="auto" />
        </MotionBox>
      </Box>

      <MotionBox mt="40px" alignSelf="center" animate={{ y: [0, -15, 0] }} transition={{ duration: 1, repeat: Infinity }} display="flex" fontSize={{ base: "50px", md: "80px" }}>
        <BsChevronDoubleDown color="orange" />
      </MotionBox>
      <Contact />
    </Flex>
  );
};

export default Sportfolio;
