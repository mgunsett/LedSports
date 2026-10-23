import { useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";
import moonTraspaso from "@/assets/agentes/moon_traspaso.webp";
import moonFecha from "@/assets/agentes/moon_fecha.webp";
import moonSemana from "@/assets/agentes/moon_semana.webp";
import moonLogo from "@/assets/agentes/moon_logo.webp";
import corner100 from "@/assets/agentes/corner_100.webp";
import cornerCalendario from "@/assets/agentes/corner_calendario.webp";
import cornerLogo from "@/assets/agentes/corner_logo.webp";
import Contact from "@/components/common/Contact";

const MotionHeading = motion(Heading);
const MotionBox = motion(Box);
const MotionText = motion(Text);

const EASE_OUT = [0.23, 1, 0.32, 1];
const EASE_OUT_CSS = "cubic-bezier(0.23, 1, 0.32, 1)";
const LINE = "rgba(255,255,255,.12)";
// Mismo contenedor que EntidadesDeportivas
const CONTAINER = { w: "100%", maxW: "1280px", mx: "auto", px: { base: 5, md: 10 } };
const HOVER = "@media (hover: hover) and (pointer: fine)";
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay, ease: EASE_OUT },
});

const FRONTS = [
  {
    id: "representados",
    tab: "Tus representados",
    title: "La marca personal de",
    em: "cada jugador",
    text: "Entendemos que la comunicación es una herramienta clave dentro del deporte profesional. Desarrollamos estrategias visuales y de marketing que permiten profesionalizar la imagen de cada jugador, destacando su trayectoria, logros y valores.",
    chips: ["Contenidos de calidad", "Diseños gráficos personalizados", "Producciones fotográficas y audiovisuales", "Gestión estratégica de redes"],
    media: [
      { src: corner100, alt: "Pieza: 100 partidos con Platense · Corner Football Agency" },
      { src: moonFecha, alt: "Pieza: jugador de la fecha · Moon Sports Group" },
    ],
  },
  {
    id: "agencia",
    tab: "Tu agencia",
    title: "La identidad de",
    em: "tu agencia",
    text: "Trabajamos junto a las agencias para fortalecer su identidad corporativa dentro del mercado deportivo, generando una presencia sólida, moderna y diferenciada, que potencia su alcance y su posicionamiento.",
    chips: ["Identidad corporativa", "Campañas personalizadas", "Planes de marketing", "Materiales visuales", "Presupuestos a medida"],
    media: [
      { logo: cornerLogo, alt: "Logo de Corner Football Agency" },
      { src: moonSemana, alt: "Pieza: partidos de la semana · Moon Sports Group" },
    ],
  },
];

const AGENCIES = [
  {
    id: "moon",
    name: "Moon Sports Group",
    logo: moonLogo,
    tint: "rgba(217,185,140,.22)",
    title: "Cada movimiento,",
    em: "bien contado",
    text: "Agencia que ayuda a futbolistas y directores técnicos en la gestión de: contratos, transferencias y marca personal. Juntos comunicamos cada paso de sus representados, desde los traspasos y el jugador de la fecha hasta la agenda semanal de partidos.",
    chips: ["Traspasos", "Jugador de la fecha", "Partidos de la semana"],
    media: [
      { src: moonTraspaso, alt: "Pieza de traspaso · Moon Sports Group" },
      { src: moonFecha, alt: "Pieza jugador de la fecha · Moon Sports Group" },
      { src: moonSemana, alt: "Pieza partidos de la semana · Moon Sports Group" },
    ],
    sportfolio: true,
    url: "https://moonsportsgroup1.netlify.app/",
  },
  {
    id: "corner",
    name: "Corner Football Agency",
    logo: cornerLogo,
    tint: "rgba(31,166,122,.22)",
    title: "Una trayectoria,",
    em: "una voz propia",
    text: "Agencia con gran carrera en representación de jugadores y técnicos de fútbol. Acompañamos su comunicación con piezas para cada hito de carrera, el calendario semanal de sus representados y una identidad visual propia.",
    chips: ["Hitos de carrera", "Calendario semanal", "Identidad visual"],
    media: [
      { logo: cornerLogo, alt: "Logo de Corner Football Agency" },
      { src: corner100, alt: "Pieza 100 partidos con Platense · Corner Football Agency" },
      { src: cornerCalendario, alt: "Pieza calendario semanal · Corner Football Agency" },
    ],
    stat: { value: "+40", label: "años representando profesionalmente" },
    reverse: true,
    url: "https://www.instagram.com/cornerfootballagency/"
  },
];

const Em = ({ children }) => (
  <Text as="em" fontStyle="italic" color="orange.400">
    {children}
  </Text>
);

const Eyebrow = ({ children }) => (
  <Flex align="center" gap="10px" color="orange.400" fontSize="13px" fontWeight="600" letterSpacing=".18em" textTransform="uppercase">
    
    {children}
  </Flex>
);

/* Pieza 4:5 (formato de post: se muestra entera) o placa con el logo de la agencia */
const Post = ({ item, ...props }) => (
  <Box
    position="relative"
    aspectRatio="4 / 5"
    borderRadius="14px"
    overflow="hidden"
    bg={item.logo ? "radial-gradient(circle at 50% 40%, #123d2f, #0a1712)" : "#111"}
    border="1px solid rgba(255,255,255,.08)"
    boxShadow="0 24px 50px rgba(0,0,0,.55)"
    display={item.logo ? "grid" : "block"}
    placeItems="center"
    {...props}
  >
    {item.logo ? (
      <Image src={item.logo} alt={item.alt} loading="lazy" w="66%" h="auto" />
    ) : (
      <Image src={item.src} alt={item.alt} loading="lazy" decoding="async" w="100%" h="100%" objectFit="cover" />
    )}
  </Box>
);

const Chips = ({ items }) => (
  <Flex as="ul" wrap="wrap" gap="8px" mt="22px" p="0" listStyleType="none">
    {items.map((c, i) => (
      <Box
        as="li"
        key={c}
        px="14px"
        py="9px"
        borderRadius="xl"
        border="1px solid"
        borderColor={i === 0 ? "orange.500" : LINE}
        color={i === 0 ? "orange.400" : "white"}
        bg="rgba(255,255,255,.04)"
        fontSize="14px"
        fontWeight="600"
      >
        {c}
      </Box>
    ))}
  </Flex>
);

/* Selector de frente (tabs) */
const FrontSwitch = ({ active, onChange }) => {
  const refs = useRef([]);

  const onKeyDown = (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (active + (e.key === "ArrowRight" ? 1 : -1) + FRONTS.length) % FRONTS.length;
    onChange(next);
    refs.current[next]?.focus();
  };

  return (
    <Box
      role="tablist"
      aria-label="Elegir frente"
      position="relative"
      display="inline-grid"
      gridTemplateColumns="1fr 1fr"
      w={{ base: "100%", md: "auto" }}
      p="5px"
      borderRadius="full"
      border={`1px solid ${LINE}`}
      bg="#0b0b0b"
      onKeyDown={onKeyDown}
    >
      <Box
        aria-hidden="true"
        position="absolute"
        top="5px"
        bottom="5px"
        left="5px"
        w="calc(50% - 5px)"
        borderRadius="full"
        bg="orange.400"
        transform={active === 1 ? "translateX(100%)" : "none"}
        transition={`transform 450ms ${EASE_OUT_CSS}`}
      />
      {FRONTS.map((f, i) => (
        <Box
          key={f.id}
          as="button"
          type="button"
          role="tab"
          id={`tab-${f.id}`}
          aria-selected={active === i}
          aria-controls={`panel-${f.id}`}
          tabIndex={active === i ? 0 : -1}
          ref={(el) => (refs.current[i] = el)}
          onClick={() => onChange(i)}
          position="relative"
          zIndex={1}
          minH="46px"
          px={{ base: "10px", md: "22px" }}
          borderRadius="full"
          fontWeight="600"
          fontSize="15px"
          color={active === i ? "black" : "whiteAlpha.700"}
          transition="color 250ms ease"
          _focusVisible={{ outline: "2px solid", outlineColor: "orange.400", outlineOffset: "3px" }}
        >
          {f.tab}
        </Box>
      ))}
    </Box>
  );
};

const FrontPanel = ({ front, on }) => (
  <Grid
    role="tabpanel"
    id={`panel-${front.id}`}
    aria-labelledby={`tab-${front.id}`}
    aria-hidden={!on}
    gridArea="1 / 1"
    templateColumns={{ base: "1fr", md: "minmax(0, 1.15fr) minmax(0, .85fr)" }}
    gap={{ base: "20px", md: "clamp(24px, 4vw, 64px)" }}
    alignItems="center"
    opacity={on ? 1 : 0}
    visibility={on ? "visible" : "hidden"}
    transform={on ? "none" : "translateY(14px)"}
    transition={
      on
        ? `opacity 350ms ease 80ms, transform 500ms ${EASE_OUT_CSS} 80ms, visibility 0s`
        : `opacity 350ms ease, transform 500ms ${EASE_OUT_CSS}, visibility 0s 350ms`
    }
  >
    <Box
      display="grid"
      placeItems="center"
      minH={{ base: "0", md: "clamp(300px, 34vw, 520px)" }}
      p={{ base: "10% 8%", md: "5%" }}
      borderRadius={{ base: "22px", md: "28px" }}
      border={`1px solid ${LINE}`}
      bg="radial-gradient(ellipse 80% 70% at 50% 60%, #241306, #0b0b0b 70%)"
      overflow="hidden"
    >
      <Flex w="88%" maxW="520px" gap="4%" justify="center">
        {front.media.map((m, i) => (
          <Post key={m.alt} item={m} w="46%" transform={i === 0 ? "rotate(-4deg) translateY(4%)" : "rotate(4deg)"} />
        ))}
      </Flex>
    </Box>
    <Box>
      <Heading as="h3" m="0" fontSize={{ base: "26px", md: "clamp(26px, 2.6vw, 40px)" }} lineHeight="1.05" letterSpacing="-0.02em" fontWeight="700" color="white">
        {front.title} <Em>{front.em}</Em>
      </Heading>
      <Text mt="14px" color="whiteAlpha.700" fontSize="16px" lineHeight="1.65" maxW="44ch">
        {front.text}
      </Text>
      <Chips items={front.chips} />
    </Box>
  </Grid>
);

const Agentes = () => {
  const [front, setFront] = useState(0);

  return (
    <Flex bg="black" flexDirection="column" minHeight="100vh" pt={{ base: 40, md: 60 }} pb={{ base: "80px", md: "0" }} color="white">
            <Flex 
            justifyContent="start"
            alignItems="start"
            gap={2}
            flexDirection="row"
            alignSelf="start"
            w="100%"
            pl={{ base: 4, md: 16, lg: '250px' }}
            mb={{ base: 6, md: 20 }}
            >
                <MotionBox 
                w={'2px'} 
                h={{ base: '70px', md: '80px' }} 
                bg="orange.400" 
                mr={2}
                borderRadius="full"
                boxShadow="0px 0px 12px 1px rgba(245,160,15,0.56)"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}   
                ></MotionBox>
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
                    Agen
                        <MotionText 
                        fontSize="5xl"  
                        fontStyle="italic"
                        as="span" 
                        color="orange.400"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        >
                        tes
                        </MotionText>
                </MotionHeading>
            </Flex>

      {/* Intro + notebook */}
      <Grid
        as="section"
        templateColumns={{ base: "1fr", md: "minmax(0, .9fr) minmax(0, 1.1fr)" }}
        gap={{ base: "32px", md: "clamp(28px, 5vw, 80px)" }}
        alignItems="center"
        {...CONTAINER}
        pb={{ base: "70px", md: "clamp(70px, 10vh, 120px)" }}
      >
        <MotionBox {...reveal(0.2)}>
          <Heading as="h2" fontSize={{ base: "30px", md: "clamp(30px, 3.2vw, 50px)" }} lineHeight="1.02" fontWeight="700" letterSpacing="-0.03em">
            Impulsamos la imagen digital de <Em>tus representados y tu agencia</Em>
          </Heading>
          <Text mt="18px" maxW="46ch" color="whiteAlpha.800" fontSize={{ base: "16px", md: "clamp(16px, 1.4vw, 20px)" }} lineHeight="1.6">
            Ofrecemos un servicio integral pensado para agentes, representantes y agencias deportivas que buscan potenciar la presencia digital
            tanto de los deportistas que forman parte de su equipo como de su propia marca institucional.
          </Text>
        </MotionBox>
        <Box position="relative">
          <Box position="absolute" inset="8% 4% 0" bg="radial-gradient(closest-side, rgba(237,137,54,.22), transparent)" aria-hidden="true" />
          <MotionBox
            position="relative"
            aspectRatio={{ base: "1.15 / 1", md: "1.3 / 1" }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: EASE_OUT }}
          >
            <Post item={{ src: moonTraspaso, alt: "Pieza de traspaso · Moon Sports Group" }} position="absolute" w="44%" left="2%" top="10%" transform="rotate(-8deg)" />
            <Post item={{ src: corner100, alt: "Pieza 100 partidos con Platense · Corner Football Agency" }} position="absolute" w="44%" right="2%" top="10%" transform="rotate(8deg)" />
            <Post item={{ src: moonFecha, alt: "Pieza jugador de la fecha · Moon Sports Group" }} position="absolute" w="46%" left="27%" top="0" zIndex={2} />
          </MotionBox>
        </Box>
      </Grid>

      {/* Dos frentes */}
      <Box as="section" py={{ base: "60px", md: "clamp(60px, 9vh, 100px)" }} borderTop={`1px solid ${LINE}`}>
        <Box {...CONTAINER}>
          <Flex
            wrap="wrap"
            direction={{ base: "column", md: "row" }}
            align={{ base: "flex-start", md: "flex-end" }}
            justify="space-between"
            gap="24px"
          >
            <Box>
              <Eyebrow>Un servicio, dos frentes</Eyebrow>
              <Heading as="h2" mt="12px" fontSize={{ base: "36px", md: "clamp(36px, 4.4vw, 68px)" }} lineHeight=".95" fontWeight="700" letterSpacing="-0.03em">
                ¿A quién <Em>potenciamos?</Em>
              </Heading>
            </Box>
            <FrontSwitch active={front} onChange={setFront} />
          </Flex>
          <Grid mt={{ base: "28px", md: "clamp(28px, 4vw, 48px)" }}>
            {FRONTS.map((f, i) => (
              <FrontPanel key={f.id} front={f} on={front === i} />
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Agencias con las que trabajamos */}
      <Box as="section" py={{ base: "60px", md: "clamp(60px, 9vh, 100px)" }} borderTop={`1px solid ${LINE}`}>
        <Box {...CONTAINER}>
          <Flex wrap="wrap" direction={{ base: "column", md: "row" }} align={{ base: "flex-start", md: "flex-end" }} justify="space-between" gap="24px">
            <Box>
              <Eyebrow>Trabajo en conjunto</Eyebrow>
              <Heading as="h2" mt="12px" fontSize={{ base: "36px", md: "clamp(36px, 4.4vw, 68px)" }} lineHeight=".95" fontWeight="700" letterSpacing="-0.03em">
                Agencias que <Em>confían en nosotros</Em>
              </Heading>
            </Box>
            <Text m="0" maxW="40ch" color="whiteAlpha.700" fontSize={{ base: "16px", md: "clamp(16px, 1.3vw, 19px)" }} lineHeight="1.6">
              Trabajamos codo a codo con agencias de representación para comunicar cada paso de sus jugadores y técnicos.
            </Text>
          </Flex>
          <Box mt={{ base: "36px", md: "clamp(36px, 5vw, 64px)" }}>
            {AGENCIES.map((a, idx) => (
              <MotionBox
                key={a.id}
                as="article"
                {...reveal()}
                display="grid"
                gridTemplateColumns={{
                  base: "minmax(0, 1fr)",
                  md: a.reverse ? "minmax(0, .85fr) minmax(0, 1.15fr)" : "minmax(0, 1.15fr) minmax(0, .85fr)",
                }}
                gap={{ base: "24px", md: "clamp(28px, 5vw, 80px)" }}
                alignItems="center"
                mt={idx ? { base: "64px", md: "clamp(56px, 8vw, 110px)" } : 0}
              >
                <Grid
                  order={{ base: 0, md: a.reverse ? 2 : 0 }}
                  templateColumns="repeat(3, minmax(0, 1fr))"
                  gap={{ base: "8px", md: "12px" }}
                  p={{ base: "16px", md: "clamp(18px, 2.4vw, 30px)" }}
                  borderRadius={{ base: "22px", md: "28px" }}
                  border={`1px solid ${LINE}`}
                  bg={`radial-gradient(ellipse 90% 80% at 50% 100%, ${a.tint}, #0b0b0b 70%)`}
                >
                  {a.media.map((m, i) => (
                    <Post key={m.alt} item={m} transform={i === 1 ? "translateY(-6%)" : "none"} borderRadius={{ base: "10px", md: "14px" }} />
                  ))}
                </Grid>
                <Box>
                  <Flex align="center" gap="14px">
                    <Image
                      src={a.logo}
                      alt=""
                      w="52px"
                      h="52px"
                      flex="none"
                      borderRadius="full"
                      p={a.id === "moon" ? "4px" : 0}
                      bg={a.id === "moon" ? "#121212" : "transparent"}
                      border={a.id === "moon" ? "1px solid rgba(217,185,140,.35)" : "none"}
                    />
                    <Box>
                      <Text as="h3" m="0" fontFamily="heading" fontWeight="600" fontSize="35px" lineHeight="1.1">
                        {a.name}
                      </Text>
                      <Text m="0" mt="4px" color="whiteAlpha.500" fontSize="12px" fontWeight="600" letterSpacing=".12em" textTransform="uppercase">
                        Representación de futbolistas y técnicos
                      </Text>
                    </Box>
                  </Flex>
                  
                  <Text mt="14px" color="whiteAlpha.700" fontSize="16px" lineHeight="1.65" maxW="46ch">
                    {a.text}
                  </Text>
                  {a.stat && (
                    <Flex align="center" gap="12px" mt="20px">
                      <Text as="span" fontSize={{ base: "48px", md: "clamp(48px, 5vw, 72px)" }} lineHeight=".9" letterSpacing="-0.04em" color="orange.400" fontStyle="italic" fontWeight="700">
                        {a.stat.value}
                      </Text>
                      <Text as="span" color="whiteAlpha.800" fontSize="15px" fontFamily="heading" fontWeight="600" fontStyle={'italic'} lineHeight="1.35" maxW="18ch">
                        {a.stat.label}
                      </Text>
                    </Flex>
                  )}
                  <Chips items={a.chips} />
                  {a.sportfolio && (
                    <Flex
                      gap="12px"
                      align="flex-start"
                      mt="20px"
                      p="14px 16px"
                      borderRadius="16px"
                      border="1px solid rgba(237,137,54,.35)"
                      bg="rgba(237,137,54,.07)"
                      fontSize="14px"
                      lineHeight="1.5"
                      color="whiteAlpha.900"
                    >
                      <Box as="svg" viewBox="0 0 24 24" w="20px" h="20px" flex="none" mt="1px" color="orange.400" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                        <rect x="3" y="4" width="18" height="14" rx="2" />
                        <path d="M3 8h18M8 21h8" />
                      </Box>
                      <Text as="span" m="0">
                        Todos sus jugadores cuentan con su propia landing page profesional, creada junto a Sportfolio.{" "}
                        <Box as={RouterLink} to="/sportfolio" color="orange.400" fontWeight="700" whiteSpace="nowrap" sx={{ [HOVER]: { "&:hover": { textDecoration: "underline" } } }}>
                          Conocé Sportfolio →
                        </Box>
                      </Text>
                    </Flex>
                  )}
                  {a.url && (
                    <Box
                      as="a"
                      href={a.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      display="inline-flex"
                      alignItems="center"
                      gap="8px"
                      mt="22px"
                      pb="3px"
                      fontWeight="700"
                      fontSize="15px"
                      borderBottom="1px solid rgba(255,255,255,.3)"
                      transition="color 200ms ease, border-color 200ms ease"
                      sx={{ [HOVER]: { "&:hover": { color: "orange.400", borderColor: "orange.400" } } }}
                    >
                      Visitar su web <span aria-hidden="true">↗</span>
                    </Box>
                  )}
                </Box>
              </MotionBox>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Frase de cierre */}
      <Box as="section" py={{ base: "80px", md: "clamp(80px, 14vh, 150px)" }} borderTop={`1px solid ${LINE}`}>
        <Box {...CONTAINER} textAlign="center">
          <Text
            as="span"
            aria-hidden="true"
            display="block"
            mb="10px"
            fontSize={{ base: "70px", md: "clamp(70px, 9vw, 140px)" }}
            lineHeight=".6"
            color="orange.500"
            fontStyle="italic"
            fontWeight="700"
          >
            “
          </Text>
          <MotionText
            {...reveal()}
            mx="auto"
            maxW="18ch"
            fontSize={{ base: "36px", md: "clamp(36px, 5.6vw, 92px)" }}
            lineHeight=".98"
            fontWeight="700"
            letterSpacing="-0.035em"
          >
            Elevamos tu presencia digital y la de <Em>tus talentos</Em> al siguiente nivel.
          </MotionText>
          <Text mt="26px" color="whiteAlpha.500" fontSize="13px" letterSpacing=".16em" textTransform="uppercase">
            Presupuestos a medida para cada agente o agencia
          </Text>
        </Box>
      </Box>

      <MotionBox
        alignSelf="center"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        display="flex"
        fontSize={{ base: "60px", md: "100px" }}
        mt={{ base: 4, md: 2 }}
      >
        <BsChevronDoubleDown color="orange" />
      </MotionBox>
      <Contact />
    </Flex>
  );
};

export default Agentes;
