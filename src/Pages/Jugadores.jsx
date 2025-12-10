import { Box, Flex, Heading, Text, Image, Grid, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import Contact from "../components/Contact";
import { BsChevronDoubleDown } from "react-icons/bs";
import jugador_mainero from "../assets/jugador_mainero.webp";
import jugador_ade from "../assets/jugador_ade.webp";
import jugador_callejo from "../assets/jugador_callejo.webp";
import jugador_campisi from "../assets/jugador_campisi.webp";
import jugador_correa from "../assets/jugador_correa.webp";
import jugador_gonzapiovi from "../assets/jugador_gonzapiovi.webp";
import jugador_carmelo from "../assets/jugador_carmelo.webp";
import jugador_farias from "../assets/jugador_farias.webp";
import jugador_gonzasosa from "../assets/jugador_gonzasosa.webp";
import jugador_jonitorres from "../assets/jugador_jonitorres.webp";
import jugador_keki from "../assets/jugador_keki.webp";
import jugador_lotti from "../assets/jugador_lotti.webp";
import jugador_luka from "../assets/jugador_luka.webp";
import jugador_oroz from "../assets/jugador_oroz.webp";
import jugador_runi from "../assets/jugador_runi.webp";
import jugador_zuqi from "../assets/jugador_zuqi.webp";
import { TitleCards } from "../components/TitleCards";
import FichaJugador from "../components/FichaJugador";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionBox = motion(Box);
const MotionGrid = motion(Grid);

const brands = [
  {
    img: jugador_mainero,
    name: 'Guido Mainero',
    Firstname: 'Guido',
    Lastname: 'Mainero',
    birthDate: '23/03/1995',
    country: 'Córdoba, Argentina',
    position: 'Extremo izquierdo',
    club: 'Platense',
    number: '7',
    height: '1,77 m',
  },
  {
    img: jugador_ade,
    name: 'Ricardo Ade',
    Firstname: 'Ricardo',
    Lastname: 'Ade',
    birthDate: '21/05/1990',
    country: 'San Marcos, Haití',
    position: 'Defensor Central',
    club: 'Liga de Quito',
    number: '4',
    height: '1,90 m',
  },
  {
    img: jugador_callejo,
    name: 'Facundo Callejo',
    Firstname: 'Facundo',
    Lastname: 'Callejo',
    birthDate: '02/07/1992',
    country: 'Tandil, Argentina',
    position: 'Delantero',
    club: 'Cusco FC',
    number: '9',
    height: '1,78 m',
  },
  {
    img: jugador_campisi,
    name: 'Nicolas Campisi',
    Firstname: 'Nicolas',
    Lastname: 'Campisi',
    birthDate: '29/10/1996',
    country: 'Río Negro, Argentina',
    position: 'Arquero',
    club: 'Miami FC',
    number: '1',
    height: '1,89 m',
  },
  {
    img: jugador_correa,
    name: 'Javier Correa',
    Firstname: 'Javier',
    Lastname: 'Correa',
    birthDate: '23/10/1992',
    country: 'Córdoba, Argentina',
    position: 'Delantero',
    club: 'Colo-Colo',
    number: '9',
    height: '1,84 m',
  },
  {
    img: jugador_gonzapiovi,
    name: 'Gonzalo Piovi',
    Firstname: 'Gonzalo',
    Lastname: 'Piovi',
    birthDate: '08/09/1994',
    country: 'Buenos Aires, Argentina',
    position: 'Lateral izquierdo',
    club: 'Cruz Azul',
    number: '33',
    height: '1,80 m',
  },
  {
    img: jugador_carmelo,
    name: 'Carmelo Argañaraz',
    Firstname: 'Carmelo',
    Lastname: 'Argañaraz',
    birthDate: '27/01/1996',
    country: 'Santa Cruz, Bolivia',
    position: 'Delantero',
    club: 'Kalamata FC',
    number: '11',
    height: '1,76 m',
  },
  {
    img: jugador_farias,
    name: 'Facundo Farias',
    Firstname: 'Facundo',
    Lastname: 'Farias',
    birthDate: '22/08/2002',
    country: 'Santa Fe, Argentina',
    position: 'Mediocampista Ofensivo',
    club: 'Estudiantes LP',
    number: '11',
    height: '1,72 m',
  },
  {
    img: jugador_gonzasosa,
    name: 'Gonzalo Sosa',
    Firstname: 'Gonzalo',
    Lastname: 'Sosa',
    birthDate: '04/01/1989',
    country: 'Santa Fe, Argentina',
    position: 'Delantero',
    club: 'Ñublense',
    number: '9',
    height: '1,85 m',
  },
  {
    img: jugador_jonitorres,
    name: 'Jonatan Torres',
    Firstname: 'Jonatan',
    Lastname: 'Torres',
    birthDate: '29/12/1996',
    country: 'Santa Fe, Argentina',
    position: 'Delantero',
    club: 'Cerro Porteño',
    number: '27',
    height: '1,87 m',
  },
  {
    img: jugador_keki,
    name: 'Keki Piovi',
    Firstname: 'Lucas',
    Lastname: 'Piovi',
    birthDate: '20/08/1992',
    country: 'Buenos Aires, Argentina',
    position: 'Mediocampista Central',
    club: 'Estudiantes LP',
    number: '21',
    height: '1,72 m',
  },
  {
    img: jugador_lotti,
    name: 'Augusto Lotti',
    Firstname: 'Augusto',
    Lastname: 'Lotti',
    birthDate: '10/06/1996',
    country: 'Buenos Aires, Argentina',
    position: 'Delantero',
    club: 'Platense',
    number: '21',
    height: '1,80 m',
  },
  {
    img: jugador_luka,
    name: 'Luka Romero',
    Firstname: 'Luka',
    Lastname: 'Romero',
    birthDate: '18/11/2004',
    country: 'Durango, México',
    position: 'Extremo Derecho',
    club: 'Cruz Azul',
    number: '18',
    height: '1,69 m',
  },
  {
    img: jugador_oroz,
    name: 'Nicolas Oroz', 
    Firstname: 'Nicolas',
    Lastname: 'Oroz',
    birthDate: '01/04/1994',
    country: 'San Luis, Argentina',
    position: 'Mediocampista Izquierdo',
    club: 'Argentinos Jr',
    number: '21',
    height: '1,74 m',
  },
  {
    img: jugador_runi,
    name: 'Ronaldo Martinez',
    Firstname: 'Ronaldo',
    Lastname: 'Martinez',
    birthDate: '25/04/1996',
    country: 'Paraguay',
    position: 'Delantero',
    club: 'Platense',
    number: '21',
    height: '1,78 m',
  },
  {
    img: jugador_zuqi,
    name: 'Fernando Zuqui',
    Firstname: 'Fernando',
    Lastname: 'Zuqui',
    birthDate: '27/11/1991',
    country: 'Mendoza, Argentina',
    position: 'Mediocampista Central',
    club: 'U Católica',
    number: '18',
    height: '1,74 m',
  },
];

export const Jugadores = () => {
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
        <FichaJugador
          isOpen={isOpen}
          onClose={onClose}
          jugador={jugadorSeleccionado}
        />
      )}
    </Box>
  );
};

