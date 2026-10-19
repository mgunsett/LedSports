import { Box, Flex, Text, Heading, Image, Grid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";
import entidades_deportivas from "@/assets/banners/entidades_deportivas.webp";
import entidades_matchday from "@/assets/entidades/entidades_matchday.jpg";
import entidades_plantel from "@/assets/entidades/entidades_plantel.jpg";
import entidades_estadio from "@/assets/entidades/entidades_estadio.jpg";
import entidades_girone from "@/assets/entidades/entidades_girone.jpg";
import Contact from "@/components/common/Contact";

/*
 * Entidades Deportivas · versión "Identidad"
 * Título original + introducción con banner, "Qué hacemos" (5 rubros + frase con piezas reales para clubes)
 * y "Planes de marketing a tu medida" (4 tarjetas). Contacto al final, sin cambios.
 */

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionImage = motion(Image);

const EASE_OUT = [0.23, 1, 0.32, 1];
const LINE = "rgba(255,255,255,.12)";
const hoverOnly = (styles) => ({ "@media (hover: hover) and (pointer: fine)": { "&:hover": styles } });
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay, ease: EASE_OUT },
});

// Íconos de línea (heredan el color del texto)
const Icon = ({ children }) => (
  <Box as="svg" viewBox="0 0 24 24" w="26px" h="26px" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </Box>
);
const ICONS = {
  strat: <Icon><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></Icon>,
  design: <Icon><path d="M12 3l9 4.5v9L12 21l-9-4.5v-9z" /><path d="M12 12l9-4.5M12 12v9M12 12L3 7.5" /></Icon>,
  photo: <Icon><path d="M4 7h3l2-3h6l2 3h3v12H4z" /><circle cx="12" cy="13" r="3.5" /></Icon>,
  video: <Icon><rect x="3" y="6" width="13" height="12" rx="2" /><path d="m16 10 5-3v10l-5-3" /></Icon>,
  web: <Icon><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 8h18M8 21h8M12 18v3" /></Icon>,
  diag: <Icon><circle cx="11" cy="11" r="6" /><path d="m20 20-4.5-4.5M8.5 11h5M11 8.5v5" /></Icon>,
  camp: <Icon><path d="M3 11v2l11 5V6z" /><path d="M14 9a3 3 0 0 1 0 6M6 13l1 6h3l-1-5" /></Icon>,
  comm: <Icon><circle cx="8" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M2.5 19a5.5 5.5 0 0 1 11 0M13 19a4 4 0 0 1 8.5 0" /></Icon>,
  budget: <Icon><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10h18M7 15h4" /></Icon>,
};

const CAPS = [
  { icon: "strat", title: "Estrategia de comunicación", text: "Una estrategia completa que refleja la historia, la esencia y la visión de la institución." },
  { icon: "design", title: "Diseño gráfico", text: "Diseños profesionales coherentes con la identidad y los valores del club." },
  { icon: "photo", title: "Producción fotográfica", text: "Coberturas y producciones de alta calidad." },
  { icon: "video", title: "Audiovisual", text: "Piezas de video para redes, presentaciones y campañas." },
  { icon: "web", title: "Plataformas digitales y web", text: "Sitios y plataformas que complementan la identidad visual." },
];

const PLANS = [
  { icon: "diag", title: "Diagnóstico y personalización", text: "Analizamos la realidad de cada institución y definimos un plan de marketing deportivo totalmente a medida." },
  { icon: "camp", title: "Campañas y acciones estratégicas", text: "Diseñamos campañas específicas para potenciar tu marca, mejorar el posicionamiento y ganar visibilidad." },
  { icon: "comm", title: "Vínculo con comunidad y sponsors", text: "Fortalecemos la relación con hinchas, comunidad, marcas y sponsors para generar alianzas duraderas." },
  { icon: "budget", title: "Presupuestos a medida", text: "Cada proyecto es único. Ajustamos el presupuesto a tus necesidades, metas y posibilidades reales." },
];

const AUDIENCE = ["Clubes", "Academias", "Ligas", "Organizaciones"];

// Collage de trabajos para clubes: posición en % del contenedor, rotación y orden de apilado
const PHOTOS = [
  { src: entidades_matchday, alt: "Pieza Matchday para club de fútbol", ratio: "4 / 5", pos: { left: "2%", top: "0" }, w: "36%", rot: -6, z: 2 },
  { src: entidades_plantel, alt: "Producción fotográfica del plantel", ratio: "793 / 900", pos: { right: "4%", top: "4%" }, w: "40%", rot: 5, z: 1 },
  { src: entidades_estadio, alt: "Cobertura en el estadio del club", ratio: "3 / 2", pos: { left: "10%", bottom: "4%" }, w: "58%", rot: -3, z: 3 },
  { src: entidades_girone, alt: "Pieza de presentación del torneo", ratio: "4 / 5", pos: { right: "0", bottom: "0" }, w: "33%", rot: 4, z: 4 },
];

const Eyebrow = ({ children }) => (
  <Flex align="center" gap="10px" color="orange.400" fontSize="13px" fontWeight="600" letterSpacing=".18em" textTransform="uppercase">
    <Box w="22px" h="2px" bg="orange.500" borderRadius="2px" />
    {children}
  </Flex>
);

const SectionTitle = ({ children }) => (
  <Heading as="h2" m="12px 0 0" fontSize={{ base: "36px", md: "clamp(36px, 4.4vw, 68px)" }} lineHeight=".95" fontWeight="700" letterSpacing="-0.03em" color="white">
    {children}
  </Heading>
);

const Em = ({ children }) => (
  <Text as="em" fontStyle="italic" color="orange.400">
    {children}
  </Text>
);

const EntidadesDeportivas = () => {
  return (
    <Flex
      bg="black"
      minHeight="100vh"
      flexDirection="column"
      pt={{ base: 40, md: 60 }}
      pb={{ base: "80px", md: "0" }}
      color="white"
    >
      {/* Hero Header */}
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
          w="2px"
          h={{ base: '110px', md: '80px' }} 
          bg="orange.400"
          mr={2}
          borderRadius="full"
          boxShadow="0px 0px 12px 1px rgba(245,160,15,0.56)"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <MotionFlex
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          as="h1"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Heading
            fontSize={{ base: '5xl', md: '5xl', lg: '5xl' }}
            fontWeight="bold"
            color="white"
            lineHeight="shorter"
          >
            Entidades&nbsp;
          </Heading>
          <Text
            color="orange.400"
            fontStyle="italic"
            fontSize={{ base: '5xl', md: '5xl', lg: '5xl' }}
            fontWeight="bold"
            lineHeight="shorter"
            mt={{ base: -2, md: 0 }}
          >
            Deportivas
          </Text>
        </MotionFlex>
      </Flex>

      <Box w="100%" maxW="1280px" mx="auto" px={{ base: 5, md: 10 }}>
        {/* Introducción + banner */}
        <Grid templateColumns={{ base: "1fr", md: "minmax(0, 1fr) minmax(0, 1fr)" }} gap={{ base: 10, md: 16 }} alignItems="center">
          <MotionBox {...reveal(0.2)}>
            <Text maxW="44ch" color="whiteAlpha.800" fontSize={{ base: "17px", md: "clamp(18px, 1.6vw, 22px)" }} lineHeight="1.55">
              Brindamos un servicio integral diseñado para clubes, academias, ligas y organizaciones deportivas que buscan fortalecer su marca en
              el entorno digital y proyectar una imagen profesional, moderna y coherente con sus valores.
            </Text>
            <Flex wrap="wrap" gap="8px" mt="24px">
              {AUDIENCE.map((a, i) => (
                <Box
                  key={a}
                  as="span"
                  px="16px"
                  py="9px"
                  borderRadius="full"
                  border="1px solid"
                  borderColor={i === 0 ? "orange.500" : LINE}
                  color={i === 0 ? "orange.400" : "white"}
                  bg="rgba(255,255,255,.04)"
                  fontSize="14px"
                  fontWeight="600"
                >
                  {a}
                </Box>
              ))}
            </Flex>
          </MotionBox>
          <Box position="relative">
            <Box
              position="absolute"
              inset="10% 5% 0"
              bg="radial-gradient(closest-side, rgba(237,137,54,.22), transparent)"
              aria-hidden="true"
            />
            <MotionImage
              src={entidades_deportivas}
              alt="Identidad visual para instituciones deportivas"
              position="relative"
              w="100%"
              h="auto"
              filter="drop-shadow(0 40px 60px rgba(0,0,0,.7))"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.4, ease: EASE_OUT }}
            />
          </Box>
        </Grid>

        {/* Qué hacemos */}
        <Box as="section" mt={{ base: "80px", md: "120px" }} pt={{ base: "60px", md: "90px" }} borderTop={`1px solid ${LINE}`}>
          <Eyebrow>Qué hacemos</Eyebrow>
          <SectionTitle>
            Potenciamos la identidad digital de <Em>tu institución</Em>
          </SectionTitle>
          <Grid
            templateColumns={{ base: "repeat(2, minmax(0, 1fr))", md: "repeat(3, minmax(0, 1fr))", xl: "repeat(5, minmax(0, 1fr))" }}
            gap={{ base: "10px", md: "14px" }}
            mt={{ base: "28px", md: "48px" }}
          >
            {CAPS.map((c, i) => (
              <MotionFlex
                key={c.title}
                {...reveal(i * 0.06)}
                direction="column"
                gap="18px"
                minH={{ base: "180px", md: "220px" }}
                p={{ base: "18px", md: "22px" }}
                borderRadius="22px"
                border={`1px solid ${LINE}`}
                bg="#0d0d0d"
                transitionProperty="border-color"
                transitionDuration="200ms"
                sx={hoverOnly({ borderColor: "rgba(237,137,54,.5)" })}
              >
                <Box w="52px" h="52px" borderRadius="14px" display="grid" placeItems="center" bg="rgba(237,137,54,.12)" color="orange.400">
                  {ICONS[c.icon]}
                </Box>
                <Heading as="h3" mt="auto" fontSize={{ base: "17px", md: "20px" }} lineHeight="1.15" fontWeight="700">
                  {c.title}
                </Heading>
                <Text m="0" color="whiteAlpha.700" fontSize="14px" lineHeight="1.5">
                  {c.text}
                </Text>
              </MotionFlex>
            ))}
          </Grid>

          {/* Frase + piezas reales */}
          <MotionBox {...reveal()}>
            <Grid
              templateColumns={{ base: "1fr", md: "minmax(0, 1.1fr) minmax(0, .9fr)" }}
              gap={{ base: 8, md: 14 }}
              alignItems="center"
              mt={{ base: "56px", md: "72px" }}
            >
              <Box>
                <Text m="0" fontSize={{ base: "24px", md: "clamp(24px, 2.8vw, 44px)" }} lineHeight="1.2" fontWeight="700" letterSpacing="-0.01em">
                  Acompañamos a cada entidad en la construcción de una <Em>estrategia de comunicación completa</Em>, que refleje su historia,
                  su esencia y su visión de crecimiento.
                </Text>
                <Text mt="18px" color="whiteAlpha.500" fontSize="13px">
                  Piezas realizadas por LED Sports para instituciones.
                </Text>
              </Box>
              <Box position="relative" w="100%" maxW="560px" mx="auto" aspectRatio="10 / 9">
                {PHOTOS.map((p) => (
                  <Image
                    key={p.alt}
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    position="absolute"
                    {...p.pos}
                    w={p.w}
                    aspectRatio={p.ratio}
                    objectFit="cover"
                    zIndex={p.z}
                    borderRadius={{ base: "10px", md: "14px" }}
                    border="1px solid rgba(255,255,255,.14)"
                    boxShadow="0 24px 40px rgba(0,0,0,.65)"
                    transform={`rotate(${p.rot}deg)`}
                    transitionProperty="transform"
                    transitionDuration="300ms"
                    transitionTimingFunction="cubic-bezier(0.23, 1, 0.32, 1)"
                    sx={hoverOnly({ transform: "rotate(0deg) scale(1.04)", zIndex: 10 })}
                  />
                ))}
              </Box>
            </Grid>
          </MotionBox>
        </Box>

        {/* Planes */}
        <Box as="section" mt={{ base: "80px", md: "120px" }} mb={{ base: "40px", md: "80px" }}>
          <Eyebrow>Planes</Eyebrow>
          <SectionTitle>
            Planes de marketing <Em>a tu medida</Em>
          </SectionTitle>
          <Text mt="16px" maxW="48ch" color="whiteAlpha.700" fontSize={{ base: "15px", md: "18px" }} lineHeight="1.6">
            Transformamos tus objetivos en estrategias concretas dentro y fuera del campo de juego.
          </Text>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, minmax(0, 1fr))", xl: "repeat(4, minmax(0, 1fr))" }} gap="14px" mt={{ base: "28px", md: "48px" }}>
            {PLANS.map((p, i) => (
              <MotionBox
                key={p.title}
                {...reveal(i * 0.06)}
                position="relative"
                p="26px 22px 24px"
                borderRadius="22px"
                border={`1px solid ${LINE}`}
                bg="#0d0d0d"
                overflow="hidden"
                transitionProperty="border-color"
                transitionDuration="200ms"
                sx={{
                  "& .plan-line": { transform: "scaleX(0)" },
                  ...hoverOnly({ borderColor: "rgba(237,137,54,.4)", "& .plan-line": { transform: "scaleX(1)" } }),
                }}
              >
                <Box color="orange.400" mb="28px">
                  {ICONS[p.icon]}
                </Box>
                <Heading as="h3" m="0 0 8px" fontSize="20px" lineHeight="1.15" fontWeight="700">
                  {p.title}
                </Heading>
                <Text m="0" color="whiteAlpha.700" fontSize="14px" lineHeight="1.55">
                  {p.text}
                </Text>
                <Box
                  className="plan-line"
                  position="absolute"
                  left="0"
                  right="0"
                  bottom="0"
                  h="3px"
                  bg="orange.500"
                  transformOrigin="0 50%"
                  transition="transform 450ms cubic-bezier(0.23, 1, 0.32, 1)"
                />
              </MotionBox>
            ))}
          </Grid>
        </Box>
      </Box>

      <MotionBox
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize={{ base: "50px", md: "80px" }}
      >
        <BsChevronDoubleDown color="orange" />
      </MotionBox>
      <Contact />
    </Flex>
  );
};

export default EntidadesDeportivas;
