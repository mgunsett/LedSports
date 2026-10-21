import { useRef, useState } from "react";
import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";
import agentes from "@/assets/agentes/agentes.webp";
import agentes1 from "@/assets/agentes/agentes1.webp";
import agentes2 from "@/assets/agentes/agentes2.webp";
import Contact from "@/components/common/Contact";

/*
 * Agentes · versión "Dos frentes"
 * Título original + intro con notebook, selector "Tus representados / Tu agencia"
 * (cambia imagen, texto y servicios) y frase de cierre. Contacto sin cambios.
 */

const MotionHeading = motion(Heading);
const MotionBox = motion(Box);
const MotionText = motion(Text);

const EASE_OUT = [0.23, 1, 0.32, 1];
const EASE_OUT_CSS = "cubic-bezier(0.23, 1, 0.32, 1)";
const LINE = "rgba(255,255,255,.12)";
// Mismo contenedor que EntidadesDeportivas
const CONTAINER = { w: "100%", maxW: "1280px", mx: "auto", px: { base: 5, md: 10 } };
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
    img: agentes1,
    alt: "Piezas de bienvenida y nuevo equipo para un jugador",
  },
  {
    id: "agencia",
    tab: "Tu agencia",
    title: "La identidad de",
    em: "tu agencia",
    text: "Trabajamos junto a las agencias para fortalecer su identidad corporativa dentro del mercado deportivo, generando una presencia sólida, moderna y diferenciada, que potencia su alcance y su posicionamiento.",
    chips: ["Identidad corporativa", "Campañas personalizadas", "Planes de marketing", "Materiales visuales", "Presupuestos a medida"],
    img: agentes,
    alt: "Pieza: Elevamos tu presencia digital y la de tus talentos al siguiente nivel",
    poster: true,
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
      p={{ base: "8%", md: "5%" }}
      borderRadius={{ base: "22px", md: "28px" }}
      border={`1px solid ${LINE}`}
      bg="radial-gradient(ellipse 80% 70% at 50% 60%, #241306, #0b0b0b 70%)"
      overflow="hidden"
    >
      {front.poster ? (
        <Image
          src={front.img}
          alt={front.alt}
          loading="lazy"
          h={{ base: "300px", md: "clamp(280px, 32vw, 480px)" }}
          w="auto"
          maxW="100%"
          borderRadius="6px"
          transform="rotate(-3deg)"
          boxShadow="0 30px 60px rgba(0,0,0,.6)"
        />
      ) : (
        <Image src={front.img} alt={front.alt} loading="lazy" w="100%" h="auto" filter="drop-shadow(0 40px 60px rgba(0,0,0,.75))" />
      )}
    </Box>
    <Box>
      <Heading as="h3" m="0" fontSize={{ base: "26px", md: "clamp(26px, 2.6vw, 40px)" }} lineHeight="1.05" letterSpacing="-0.02em" fontWeight="700" color="white">
        {front.title} <Em>{front.em}</Em>
      </Heading>
      <Text mt="14px" color="whiteAlpha.700" fontSize="16px" lineHeight="1.65" maxW="44ch">
        {front.text}
      </Text>
      <Flex as="ul" wrap="wrap" gap="8px" mt="22px" p="0" listStyleType="none">
        {front.chips.map((c, i) => (
          <Box
            as="li"
            key={c}
            px="14px"
            py="9px"
            borderRadius="full"
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
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: EASE_OUT }}
          >
            <Image
              src={agentes2}
              alt="Piezas de convocatoria y clasificación para una selección"
              w="100%"
              h="auto"
              filter="drop-shadow(0 40px 60px rgba(0,0,0,.75))"
            />
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
