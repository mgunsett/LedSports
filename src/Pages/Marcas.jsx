import { useMemo } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, Grid, Heading, Image, Text, keyframes } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";
import { brands } from "@/data/jugadores";
import Contact from "@/components/common/Contact";

/*
 * Marcas · versión "Manifiesto"
 * Título original + intro, franja naranja con la frase "Transformamos el deporte en conexión
 * y propósito", cinta de deportistas, formatos (campañas / activaciones / eventos) y cierre.
 * Para cambiar los deportistas de la cinta, editá ROSTER (nombres exactos de src/data/jugadores.js).
 */

const MotionHeading = motion(Heading);
const MotionBox = motion(Box);
const MotionText = motion(Text);

const EASE_OUT = [0.23, 1, 0.32, 1];
const EASE_OUT_CSS = "cubic-bezier(0.23, 1, 0.32, 1)";
const LINE = "rgba(255,255,255,.12)";
const PX = { base: "20px", md: "clamp(20px, 6vw, 96px)" };
const HOVER = "@media (hover: hover) and (pointer: fine)";
const QUOTE = "Transformamos el deporte en conexión y propósito.";

const ROSTER = [
  "Andres Gudiño",
  "Ricardo Ade",
  "Tomas Áviles",
  "Gonzalo Piovi",
  "Ezequiel Piovi",
  "Fernando Zuqui",
  "Facundo Farias",
  "Guido Mainero",
  "Nicolas Orsini",
  "Javier Correa",
  "Ronaldo Martinez",
  "Jonatan Torres",
];

const FORMATS = [
  { title: "Campañas", text: "Contenido profesional con el deportista ideal para comunicar tu marca." },
  { title: "Activaciones", text: "Acciones que acercan tu marca al público desde la emoción del deporte." },
  { title: "Eventos", text: "Presencia de marca y deportistas en los momentos que más importan." },
];

const scroll = keyframes`to { transform: translateX(-50%); }`;
const capitalize = (s = "") => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

const Em = ({ children }) => (
  <Text as="em" fontStyle="italic" color="orange.400">
    {children}
  </Text>
);

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay, ease: EASE_OUT },
});

const RosterCard = ({ player }) => (
  <Box
    position="relative"
    flex="none"
    w={{ base: "160px", md: "clamp(170px, 15vw, 230px)" }}
    aspectRatio="3 / 4.1"
    borderRadius="20px"
    overflow="hidden"
    border={`1px solid ${LINE}`}
    bg="radial-gradient(ellipse 90% 70% at 50% 100%, #2a1606 0%, #111 55%, #0a0a0a 100%)"
  >
    <Image
      src={player.img}
      alt=""
      loading="lazy"
      decoding="async"
      draggable={false}
      position="absolute"
      left="50%"
      bottom="0"
      h="86%"
      w="auto"
      maxW="none"
      transform="translateX(-50%)"
    />
    <Box position="absolute" left="0" right="0" bottom="0" p="36px 14px 12px" bg="linear-gradient(0deg, rgba(0,0,0,.92), rgba(0,0,0,0))">
      <Text color="orange.400" fontSize="10px" fontWeight="600" letterSpacing=".14em" textTransform="uppercase" noOfLines={1}>
        {capitalize(player.position)}
      </Text>
      <Text mt="3px" fontSize="15px" fontWeight="700" lineHeight="1.1" color="white">
        {player.name}
      </Text>
    </Box>
  </Box>
);

const Marcas = () => {
  const reduceMotion = useReducedMotion();
  const roster = useMemo(() => {
    const byName = new Map(brands.map((b) => [b.name, b]));
    const picked = ROSTER.map((n) => byName.get(n)).filter(Boolean);
    return picked.length ? picked : brands.slice(0, 12);
  }, []);

  const goToContact = (e) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  return (
    <Flex bg="black" flexDirection="column" minHeight="100vh" pt={{ base: 40, md: 60 }} pb={{ base: "80px", md: "0" }} color="white">
            <Flex
                justifyContent="start"
                alignItems="start"
                gap={2}
                flexDirection="row"
                alignSelf="start"
                pl={{ base: 4, md: 16, lg: '250px' }}
                mb={{ base: 6, md: 10 }}
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
                    fontSize='5xl'
                    fontWeight="bold"
                    color="white"
                    lineHeight="shorter"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    Mar
                    <MotionText
                        fontSize='5xl'
                        as="span"
                        color="orange.400"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        cas
                    </MotionText>
                </MotionHeading>
            </Flex>

      {/* Intro */}
      <Grid
        as="section"
        templateColumns={{ base: "1fr", md: "minmax(0, 1fr) minmax(0, 1fr)" }}
        gap={{ base: "20px", md: "clamp(28px, 5vw, 80px)" }}
        alignItems="end"
        px={PX}
        pb={{ base: "56px", md: "clamp(60px, 9vh, 100px)" }}
      >
        <MotionBox {...reveal(0.2)}>
          <Heading as="h2" fontSize={{ base: "32px", md: "clamp(32px, 3.6vw, 56px)" }} lineHeight=".95" fontWeight="700" letterSpacing="-0.03em">
            Unimos marcas y deportistas para generar <Em>impacto real</Em>
          </Heading>
        </MotionBox>
        <MotionText {...reveal(0.3)} maxW="48ch" color="whiteAlpha.800" fontSize={{ base: "16px", md: "clamp(16px, 1.4vw, 20px)" }} lineHeight="1.6">
          Nuestro servicio está diseñado para marcas que buscan potenciar su presencia a través del deporte. Identificamos al atleta ideal,
          gestionamos la colaboración y producimos contenido profesional para conectar con tu público desde{" "}
          <Text as="b" color="white" fontWeight="600">
            la emoción, la credibilidad y la pasión
          </Text>
          .
        </MotionText>
      </Grid>

      {/* Franja naranja */}
      <Box
        as="section"
        position="relative"
        overflow="hidden"
        bg="linear-gradient(160deg, #F7A94A, #EE8420 55%, #E07612)"
        color="white"
        px={PX}
        py={{ base: "90px", md: "clamp(90px, 16vh, 180px)" }}
        textAlign="center"
        _before={{
          content: '""',
          position: "absolute",
          inset: 0,
          opacity: 0.35,
          mixBlendMode: "soft-light",
          bg: "repeating-linear-gradient(170deg, rgba(255,255,255,0) 0 40px, rgba(255,255,255,.35) 41px, rgba(255,255,255,0) 44px 120px), repeating-linear-gradient(8deg, rgba(0,0,0,0) 0 70px, rgba(0,0,0,.25) 71px, rgba(0,0,0,0) 74px 160px)",
        }}
      >
        <MotionBox
          as="p"
          position="relative"
          m="0 auto"
          maxW="14ch"
          fontSize={{ base: "9.4vw", md: "clamp(46px, 8.4vw, 150px)" }}
          lineHeight=".86"
          fontWeight="700"
          letterSpacing="-0.045em"
          textTransform="uppercase"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ show: { transition: { staggerChildren: reduceMotion ? 0 : 0.07 } } }}
        >
          {QUOTE.split(" ").map((w, i) => (
            <MotionBox
              as="span"
              key={i}
              display="inline-block"
              mr="0.25em"
              variants={{
                hidden: { opacity: 0, y: reduceMotion ? 0 : "0.4em" },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
              }}
            >
              {w}
            </MotionBox>
          ))}
        </MotionBox>
        <Text position="relative" mt="36px" fontSize="15px" fontWeight="700" fontStyle="italic" letterSpacing=".02em" color="whiteAlpha.900">
          <Text as="span" color="#7a3a00">
            LED
          </Text>{" "}
          SPORTS
        </Text>
      </Box>

      {/* Cinta de deportistas */}
      <Box as="section" pt={{ base: "60px", md: "clamp(60px, 9vh, 100px)" }}>
        <Flex px={PX} wrap="wrap" align="flex-end" justify="space-between" gap="16px">
          <Box>
            <Flex align="center" gap="10px" color="orange.400" fontSize="13px" fontWeight="600" letterSpacing=".18em" textTransform="uppercase">
              <Box w="22px" h="2px" bg="orange.500" borderRadius="2px" />
              Talento
            </Flex>
            <Heading as="h2" mt="12px" fontSize={{ base: "36px", md: "clamp(36px, 4.4vw, 68px)" }} lineHeight=".95" fontWeight="700" letterSpacing="-0.03em">
              Deportistas con <Em>los que trabajamos</Em>
            </Heading>
          </Box>
          <Box
            as={RouterLink}
            to="/jugadores"
            display="inline-flex"
            alignItems="center"
            minH="46px"
            px="18px"
            borderRadius="full"
            border={`1px solid ${LINE}`}
            fontWeight="600"
            fontSize="14px"
            transition={`border-color 200ms ease, background-color 200ms ease, transform 160ms ${EASE_OUT_CSS}`}
            _active={{ transform: "scale(0.97)" }}
            _focusVisible={{ outline: "2px solid", outlineColor: "orange.400", outlineOffset: "3px" }}
            sx={{ [HOVER]: { "&:hover": { borderColor: "orange.500", bg: "rgba(237,137,54,.08)" } } }}
          >
            Ver jugadores →
          </Box>
        </Flex>
        <Box
          mt={{ base: "28px", md: "clamp(28px, 4vw, 44px)" }}
          overflowX={reduceMotion ? "auto" : "hidden"}
          sx={{
            maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
            [HOVER]: { "&:hover .roster-track": { animationPlayState: "paused" } },
          }}
        >
          <Flex
            className="roster-track"
            w="max-content"
            px={reduceMotion ? PX : 0}
            animation={reduceMotion ? "none" : `${scroll} 50s linear infinite`}
          >
            {(reduceMotion ? [0] : [0, 1]).map((copy) => (
              <Flex key={copy} gap="14px" pr={reduceMotion ? 0 : "14px"} aria-hidden={copy === 1 ? "true" : undefined}>
                {roster.map((p) => (
                  <RosterCard key={p.name} player={p} />
                ))}
              </Flex>
            ))}
          </Flex>
        </Box>
      </Box>

      {/* Formatos + cierre */}
      <Box as="section" px={PX}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, minmax(0, 1fr))" }} borderTop={`1px solid ${LINE}`} mt={{ base: "60px", md: "clamp(60px, 9vh, 100px)" }}>
          {FORMATS.map((f, i) => (
            <MotionBox
              key={f.title}
              {...reveal(i * 0.08)}
              py={{ base: "36px", md: "clamp(40px, 6vh, 64px)" }}
              pl={{ base: 0, md: i === 0 ? 0 : "clamp(16px, 2.5vw, 36px)" }}
              pr={{ base: 0, md: "clamp(16px, 2.5vw, 36px)" }}
              borderLeft={{ base: "0", md: i === 0 ? "0" : `1px solid ${LINE}` }}
              borderTop={{ base: i === 0 ? "0" : `1px solid ${LINE}`, md: "0" }}
            >
              <Text
                aria-hidden="true"
                fontSize={{ base: "56px", md: "clamp(56px, 6vw, 96px)" }}
                lineHeight=".8"
                fontWeight="700"
                fontStyle="italic"
                letterSpacing="-0.05em"
                color="transparent"
                sx={{ WebkitTextStroke: "1.5px rgba(237,137,54,.55)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </Text>
              <Heading as="h3" mt="18px" fontSize={{ base: "28px", md: "clamp(26px, 2.4vw, 38px)" }} letterSpacing="-0.02em" lineHeight="1" fontWeight="700">
                {f.title}
              </Heading>
              <Text mt="10px" color="whiteAlpha.700" fontSize="15px" lineHeight="1.6" maxW="32ch">
                {f.text}
              </Text>
            </MotionBox>
          ))}
        </Grid>

        <Flex
          wrap="wrap"
          align="center"
          justify="space-between"
          gap="24px"
          borderTop={`1px solid ${LINE}`}
          py={{ base: "50px", md: "clamp(50px, 8vh, 80px)" }}
        >
          <Text m="0" maxW="52ch" color="whiteAlpha.700" fontSize={{ base: "16px", md: "clamp(16px, 1.3vw, 19px)" }} lineHeight="1.6">
            Creamos vínculos auténticos que{" "}
            <Text as="b" color="white">
              amplían el alcance, fortalecen el posicionamiento
            </Text>{" "}
            y generan una conexión real con las audiencias. Diseñamos acciones y presupuestos a medida para que cada alianza entre marca y
            deporte genere valor y crecimiento compartido.
          </Text>
          <Box
            as="a"
            href="#contact"
            onClick={goToContact}
            display="inline-flex"
            alignItems="center"
            gap="10px"
            minH="52px"
            px="24px"
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
            Hablemos de tu marca ↓
          </Box>
        </Flex>
      </Box>

      <MotionBox
        alignSelf="center"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        display="flex"
        fontSize={{ base: "50px", md: "80px" }}
      >
        <BsChevronDoubleDown color="orange" />
      </MotionBox>
      <Contact />
    </Flex>
  );
};

export default Marcas;
