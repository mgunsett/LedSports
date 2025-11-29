import { Box, Flex, Heading, Text, Image, Grid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Contact from "../components/Contact";
import { BsChevronDoubleDown } from "react-icons/bs";
import jugador_mainero from "../assets/jugador_mainero.png";
import jugador_ade from "../assets/jugador_ade.png";
import jugador_callejo from "../assets/jugador_callejo.png";
import jugador_campisi from "../assets/jugador_campisi.png";
import jugador_correa from "../assets/jugador_correa.png";
import jugador_gonzapiovi from "../assets/jugador_gonzapiovi.png";
import jugador_carmelo from "../assets/jugador_carmelo.png";
import jugador_farias from "../assets/jugador_farias.png";
import jugador_gonzasosa from "../assets/jugador_gonzasosa.png";
import jugador_jonitorres from "../assets/jugador_jonitorres.png";
import jugador_keki from "../assets/jugador_keki.png";
import jugador_lotti from "../assets/jugador_lotti.png";
import jugador_luka from "../assets/jugador_luka.png";
import jugador_oroz from "../assets/jugador_oroz.png";
import jugador_runi from "../assets/jugador_runi.png";
import jugador_zuqi from "../assets/jugador_zuqi.png";
import { TitleCards } from "../components/TitleCards";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionBox = motion(Box);
const MotionGrid = motion(Grid);

const brands = [
  {
    img: jugador_mainero,
    name: 'Juan Mainero',
    Firstname: 'Juan',
    Lastname: 'Mainero',
    birthDate: '15/03/1995',
    country: 'Argentina',
    position: 'Extremo derecho',
    club: 'Platense',
    number: '7',
    height: '1,78 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_ade,
    name: 'Jugador Ade',
    Firstname: 'Pedro',
    Lastname: 'Ade',
    fullName: 'Pedro Ade',
    birthDate: '22/07/1994',
    country: 'Brasil',
    position: 'Delantero centro',
    club: 'Futbol Club Demo',
    number: '9',
    height: '1,82 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_callejo,
    name: 'Jugador Callejo',
    Firstname: 'Marcos',
    Lastname: 'Callejo',
    fullName: 'Marcos Callejo',
    birthDate: '01/11/1993',
    country: 'Uruguay',
    position: 'Lateral izquierdo',
    club: 'Club Deportivo Prueba',
    number: '3',
    height: '1,75 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_campisi,
    name: 'Jugador Campisi',
    Firstname: 'Lucas',
    Lastname: 'Campisi',
    fullName: 'Lucas Campisi',
    birthDate: '09/05/1996',
    country: 'Argentina',
    position: 'Mediocampista central',
    club: 'Club Atlético Central',
    number: '5',
    height: '1,80 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_correa,
    name: 'Jugador Correa',
    Firstname: 'Diego',
    Lastname: 'Correa',
    fullName: 'Diego Correa',
    birthDate: '30/06/1992',
    country: 'Chile',
    position: 'Defensor central',
    club: 'Unión Deportiva Modelo',
    number: '2',
    height: '1,85 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_gonzapiovi,
    name: 'Jugador Gonzapiovi',
    Firstname: 'Gonzalo',
    Lastname: 'Piovi',
    fullName: 'Gonzalo Piovi',
    birthDate: '05/02/1994',
    country: 'Argentina',
    position: 'Lateral / Central',
    club: 'Cruz Azul',
    number: '33',
    height: '1,84 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_carmelo,
    name: 'Jugador Carmelo',
    Firstname: 'Carmelo',
    Lastname: 'Díaz',
    fullName: 'Carmelo Díaz',
    birthDate: '18/09/1990',
    country: 'Paraguay',
    position: 'Delantero',
    club: 'Club Guaraní (ejemplo)',
    number: '11',
    height: '1,79 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_farias,
    name: 'Facundo Farias',
    Firstname: 'Facundo',
    Lastname: 'Farias',
    fullName: 'Facundo Farias',
    birthDate: '02/12/1998',
    country: 'Argentina',
    position: 'Enganche',
    club: 'Estudiantes',
    number: '10',
    height: '1,76 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_gonzasosa,
    name: 'Gonzalo Sosa',
    Firstname: 'Gonzalo',
    Lastname: 'Sosa',
    fullName: 'Gonzalo Sosa',
    birthDate: '21/01/1997',
    country: 'Argentina',
    position: 'Volante ofensivo',
    club: 'Club Deportivo Sur',
    number: '20',
    height: '1,74 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_jonitorres,
    name: 'Jonatan Torres',
    Firstname: 'Jonatan',
    Lastname: 'Torres',
    fullName: 'Jonatan Torres',
    birthDate: '10/04/1995',
    country: 'Colombia',
    position: 'Extremo',
    club: 'Cerro Porteño',
    number: '17',
    height: '1,81 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_keki,
    name: 'Keki Piovi',
    Firstname: 'Keki',
    Lastname: 'Piovi',
    fullName: 'Keki Piovi',
    birthDate: '29/08/1999',
    country: 'Argentina',
    position: 'Mediapunta',
    club: 'Estudiantes',
    number: '19',
    height: '1,73 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_lotti,
    name: 'Franco Lotti',
    Firstname: 'Franco',
    Lastname: 'Lotti',
    fullName: 'Franco Lotti',
    birthDate: '03/03/1994',
    country: 'Argentina',
    position: 'Delantero extremo',
    club: 'Platense',
    number: '14',
    height: '1,80 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_luka,
    name: 'Luka Romero',
    Firstname: 'Luka',
    Lastname: 'Romero',
    fullName: 'Luka Romero',
    birthDate: '26/01/2000',
    country: 'Croacia',
    position: 'Mediocampista mixto',
    club: 'Cruz Azul',
    number: '8',
    height: '1,83 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_oroz,
    name: 'Ignacio Oroz', 
    Firstname: 'Ignacio',
    Lastname: 'Oroz',
    fullName: 'Ignacio Oroz',
    birthDate: '14/07/1993',
    country: 'Argentina',
    position: 'Mediocampista ofensivo',
    club: 'Argentinos Juniors',
    number: '27',
    height: '1,79 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_runi,
    name: 'Ramiro Runi',
    Firstname: 'Ramiro',
    Lastname: 'Runi',
    fullName: 'Ramiro Runi',
    birthDate: '19/10/1991',
    country: 'Uruguay',
    position: 'Defensor lateral',
    club: 'Club Oriental',
    number: '4',
    height: '1,77 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_zuqi,
    name: 'Fernando Zuqi',
    Firstname: 'Fernando',
    Lastname: 'Zuqi',
    fullName: 'Fernando Zuqi',
    birthDate: '07/09/1996',
    country: 'Chile',
    position: 'Volante de contención',
    club: 'U Católica',
    number: '6',
    height: '1,81 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
];

export const Jugadores = () => {
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
            xl: "repeat(5, 1fr)"
          }}
          gap={{ base: 4, md: 6 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {brands.map((brand, index) => (
            <TitleCards
              key={index}
              name={brand.fullName || brand.name}
              club={brand.club}
              img={brand.img}
              number={brand.number}
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
    </Box>
    );
};



