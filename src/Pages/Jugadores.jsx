import { Box, Flex, Heading, Text, Grid, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
const FichaJugador = lazy(() => import("../components/FichaJugador"));
import Contact from "../components/Contact";
import { BsChevronDoubleDown } from "react-icons/bs";
import { brands } from "../data/jugadores";
import { TitleCards } from "../components/TitleCards";
// import FichaJugador from "../components/FichaJugador";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionBox = motion(Box);
const MotionGrid = motion(Grid);

const Jugadores = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [jugadorSeleccionado, setJugadorSeleccionado] = useState(null);

  return (
    <Box bg="black" minHeight="100vh" overflow="hidden">
      {/* Hero Section */}
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={6}
        pt={{ base: 32, md: 48 }}
        pb={20}
        px={4}
      >
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
            Juga
            <MotionText
              fontSize='5xl'
              as="span"
              color="orange.400"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
             dores
            </MotionText>
          </MotionHeading>
        </Flex>

        {/* Animated chevron */}
        
      </Flex>

      {/* Players Grid */}
      <Box maxW="1180px" mx="auto" px={{ base: 4, md: 8 }} pb={20}>
        <MotionGrid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={{ base: 4, md: 6 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {brands.map((brand, index) => (
            <TitleCards
              key={index}
              name={brand.name}
              club={brand.club}
              img={brand.img}
              onClick={() => {
                setJugadorSeleccionado(brand);
                onOpen();
              }}
            />
          ))}
        </MotionGrid>
      </Box>
      <MotionBox
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize={{ base: '50px', md: '80px' }}
        mt={{ base: 2, md: '50px' }}
      >
        <BsChevronDoubleDown color="orange" />
      </MotionBox>
      <Contact />
      {jugadorSeleccionado && (
        <Suspense fallback={<div>Loading...</div>}>
          <FichaJugador
            isOpen={isOpen}
            onClose={onClose}
            jugador={jugadorSeleccionado}
          />
        </Suspense>
      )}
    </Box>
  );
};
export default Jugadores;

