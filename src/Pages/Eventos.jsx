import { useState } from "react";
import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";
import eventos from "@/assets/banners/eventos.webp";
import Contact from "@/components/common/Contact";

/*
 * Eventos · versión "Programa"
 * Título original + columna fija (título, texto y banner) y, a la derecha, el "programa"
 * del evento en 4 bloques desplegables. Cierra con una entrada que lleva a Contacto.
 */

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionBox = motion(Box);

const EASE_OUT = [0.23, 1, 0.32, 1];
const EASE_OUT_CSS = "cubic-bezier(0.23, 1, 0.32, 1)";
const LINE = "rgba(255,255,255,.12)";
// Mismo contenedor que EntidadesDeportivas
const CONTAINER = { w: "100%", maxW: "1280px", mx: "auto", px: { base: 5, md: 10 } };
const HOVER = "@media (hover: hover) and (pointer: fine)";
const NOTCH = "radial-gradient(circle 14px at calc(100% - 150px) 0, #0000 98%, #000) top / 100% 51% no-repeat, radial-gradient(circle 14px at calc(100% - 150px) 100%, #0000 98%, #000) bottom / 100% 51% no-repeat";

const PROGRAM = [
  {
    id: "previa",
    kicker: "La previa",
    title: "Planificación y comunicación",
    text: "Nos encargamos de la planificación y coordinación general del evento, gestionando desde la identidad visual hasta la comunicación previa.",
    chips: ["Coordinación general", "Identidad visual", "Comunicación previa"],
  },
  {
    id: "dia",
    kicker: "El día del evento",
    title: "Cobertura foto y video",
    text: "Realizamos producciones fotográficas y audiovisuales profesionales, con un registro de alta calidad que refleja la emoción, la energía y el espíritu de cada momento.",
    chips: ["Fotografía profesional", "Audiovisual", "Cobertura en vivo"],
  },
  {
    id: "despues",
    kicker: "Después",
    title: "Difusión y redes",
    text: "Generamos contenido dinámico y atractivo para redes sociales, ideal para amplificar el alcance del evento y posicionar la marca o institución organizadora.",
    chips: ["Difusión posterior", "Contenido para redes", "Alcance"],
  },
  {
    id: "siempre",
    kicker: "Siempre",
    title: "Imagen institucional",
    text: "Cada acción es planificada estratégicamente para fortalecer la imagen institucional y transmitir los valores del deporte con una estética cuidada y coherente.",
    chips: ["Estética cuidada", "Valores del deporte"],
  },
];

const Em = ({ children }) => (
  <Text as="em" fontStyle="italic" color="orange.400">
    {children}
  </Text>
);

const PlusIcon = () => (
  <Box as="svg" viewBox="0 0 24 24" w="16px" h="16px" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="M12 5v14M5 12h14" />
  </Box>
);

const TicketIcon = () => (
  <Box as="svg" viewBox="0 0 24 24" w="28px" h="28px" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 8a2 2 0 0 0 0 4v4h18v-4a2 2 0 0 1 0-4V4H3z" />
    <path d="M14 4v12" />
  </Box>
);

const ProgramRow = ({ item, index, open, onToggle }) => (
  <Box borderBottom={`1px solid ${LINE}`}>
    <Box
      as="button"
      type="button"
      id={`prog-btn-${item.id}`}
      aria-expanded={open}
      aria-controls={`prog-${item.id}`}
      onClick={onToggle}
      w="100%"
      display="grid"
      gridTemplateColumns="auto 1fr auto"
      alignItems="center"
      gap={{ base: "14px", md: "clamp(14px, 2vw, 28px)" }}
      py={{ base: "20px", md: "clamp(20px, 3vh, 30px)" }}
      textAlign="left"
      cursor="pointer"
      _focusVisible={{ outline: "2px solid", outlineColor: "orange.400", outlineOffset: "3px", borderRadius: "12px" }}
      sx={{ [HOVER]: { "&:hover .prog-pm": { borderColor: "orange.500" } } }}
    >
      <Text
        as="span"
        aria-hidden="true"
        minW="2.1ch"
        fontSize={{ base: "40px", md: "clamp(40px, 4.6vw, 76px)" }}
        lineHeight=".85"
        fontWeight="700"
        fontStyle="italic"
        letterSpacing="-0.05em"
        color={open ? "orange.500" : "transparent"}
        transition="color 300ms ease"
        sx={{ WebkitTextStroke: "1.5px rgba(237,137,54,.55)" }}
      >
        {String(index + 1).padStart(2, "0")}
      </Text>
      <Flex direction="column" gap="6px">
        <Text as="span" color="orange.400" fontSize="12px" fontWeight="600" letterSpacing=".16em" textTransform="uppercase">
          {item.kicker}
        </Text>
        <Text as="span" fontSize={{ base: "22px", md: "clamp(22px, 2.2vw, 32px)" }} lineHeight="1.05" letterSpacing="-0.02em" fontWeight="700" color="white">
          {item.title}
        </Text>
      </Flex>
      <Box
        className="prog-pm"
        w="40px"
        h="40px"
        borderRadius="full"
        display="grid"
        placeItems="center"
        border="1px solid"
        borderColor={open ? "orange.500" : LINE}
        bg={open ? "rgba(237,137,54,.12)" : "transparent"}
        color="white"
        transform={open ? "rotate(45deg)" : "none"}
        transition={`transform 400ms ${EASE_OUT_CSS}, border-color 200ms ease, background-color 200ms ease`}
      >
        <PlusIcon />
      </Box>
    </Box>
    <Box
      id={`prog-${item.id}`}
      role="region"
      aria-labelledby={`prog-btn-${item.id}`}
      display="grid"
      gridTemplateRows={open ? "1fr" : "0fr"}
      transition={`grid-template-rows 450ms ${EASE_OUT_CSS}`}
    >
      <Box overflow="hidden" visibility={open ? "visible" : "hidden"} transition={open ? "visibility 0s" : "visibility 0s 450ms"}>
        <Text m="0" pb="10px" color="whiteAlpha.700" fontSize="16px" lineHeight="1.65" maxW="48ch">
          {item.text}
        </Text>
        <Flex as="ul" wrap="wrap" gap="8px" m="6px 0 28px" p="0" listStyleType="none">
          {item.chips.map((c, i) => (
            <Box
              as="li"
              key={c}
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
              {c}
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  </Box>
);

const Eventos = () => {
  const [open, setOpen] = useState(0);

  const goToContact = (e) => {
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("contact")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
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
                    fontSize='5xl'
                    fontWeight="bold"
                    color="white"
                    lineHeight="shorter"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    Even
                    <MotionText
                        fontSize='5xl'
                        as="span"
                        color="orange.400"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        tos
                    </MotionText>
                </MotionHeading>
            </Flex>

      <Grid
        as="section"
        templateColumns={{ base: "1fr", lg: "minmax(0, .95fr) minmax(0, 1.05fr)" }}
        gap={{ base: "36px", lg: "clamp(28px, 5vw, 90px)" }}
        {...CONTAINER}
        pb={{ base: "60px", md: "clamp(60px, 10vh, 110px)" }}
      >
        {/* Columna fija */}
        <MotionBox
          as="aside"
          position={{ base: "relative", lg: "sticky" }}
          top={{ lg: "110px" }}
          alignSelf="start"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE_OUT }}
        >
          
          <Heading as="h2" mt="12px" fontSize={{ base: "34px", md: "clamp(32px, 3.6vw, 56px)" }} lineHeight=".95" fontWeight="700" letterSpacing="-0.03em">
            Transformamos cada evento en una <Em>experiencia única</Em>
          </Heading>
          <Text mt="18px" maxW="48ch" color="whiteAlpha.800" fontSize={{ base: "16px", md: "clamp(16px, 1.4vw, 20px)" }} lineHeight="1.6">
            Un servicio integral para la organización, comunicación y cobertura de eventos deportivos, pensado para clubes, academias,
            marcas e instituciones que buscan proyectar profesionalismo y generar impacto en cada detalle.
          </Text>
          <Image
            src={eventos}
            alt="Lleva tu evento al siguiente nivel con LED Sports"
            mt="30px"
            w="100%"
            h="auto"
            transform={{ base: "none", lg: "rotate(-2deg)" }}
            filter="drop-shadow(0 30px 50px rgba(0,0,0,.7))"
          />
        </MotionBox>

        {/* Programa */}
        <Box>
          <Box borderTop={`1px solid ${LINE}`}>
            {PROGRAM.map((item, i) => (
              <ProgramRow key={item.id} item={item} index={i} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
            ))}
          </Box>

          {/* Entrada */}
          <MotionBox
            mt={{ base: "40px", md: "clamp(40px, 6vh, 60px)" }}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
          >
            <Box
              as="a"
              href="#contact"
              onClick={goToContact}
              display="grid"
              gridTemplateColumns={{ base: "1fr", md: "minmax(0, 1fr) auto" }}
              borderRadius="22px"
              bg="linear-gradient(135deg, #F6AD55, #DD6B20)"
              color="black"
              transition={`transform 160ms ${EASE_OUT_CSS}`}
              _active={{ transform: "scale(0.98)" }}
              _focusVisible={{ outline: "2px solid", outlineColor: "orange.400", outlineOffset: "4px" }}
              sx={{ "@media (min-width: 48em)": { WebkitMask: NOTCH, mask: NOTCH } }}
            >
              <Box p="26px 28px">
                <Text fontSize="12px" fontWeight="700" letterSpacing=".16em" textTransform="uppercase" opacity={0.65}>
                  Tu próximo evento
                </Text>
                <Text mt="8px" fontSize={{ base: "22px", md: "clamp(22px, 2.2vw, 30px)" }} lineHeight="1.05" letterSpacing="-0.02em" fontWeight="700">
                  Llevalo al siguiente nivel con LED Sports
                </Text>
                <Text mt="8px" fontSize="14px" opacity={0.75}>
                  Clubes · Academias · Marcas · Instituciones
                </Text>
              </Box>
              <Flex
                w={{ base: "auto", md: "150px" }}
                direction={{ base: "row", md: "column" }}
                align="center"
                justify="center"
                gap={{ base: "8px", md: "6px" }}
                p="16px"
                borderTop={{ base: "2px dashed rgba(0,0,0,.3)", md: "0" }}
                borderLeft={{ base: "0", md: "2px dashed rgba(0,0,0,.3)" }}
                fontWeight="700"
                fontSize="14px"
              >
                <TicketIcon />
                Consultanos
              </Flex>
            </Box>
          </MotionBox>
        </Box>
      </Grid>

      <MotionBox
        alignSelf="center"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        display="flex"
        fontSize={{ base: "50px", md: "100px" }}
      >
        <BsChevronDoubleDown color="orange" />
      </MotionBox>
      <Contact />
    </Flex>
  );
};

export default Eventos;
