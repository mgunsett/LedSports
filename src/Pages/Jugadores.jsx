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
import escudo_racing1 from "../assets/escudo_racing1.png";
import escudo_velez from "../assets/escudo_velez.png";
import escudo_argentinos from "../assets/escudo_argentinos.png";
import escudo_gimnasia from "../assets/escudo_gimnasia.png";
import escudo_defensa from "../assets/escudo_defensa.png";
import escudo_colon from "../assets/escudo_colon.png";
import escudo_instituto from "../assets/escudo_instituto.png";
import escudo_iquique from "../assets/escudo_iquique.png";
import escudo_sarmiento from "../assets/escudo_sarmiento.png";
import escudo_baltimore from "../assets/escudo_baltimore.png";
import escudo_miamiunited from "../assets/escudo_miamiunited.png";
import escudo_donbosco from "../assets/escudo_donbosco.png";
import escudo_santiagomorning from "../assets/escudo_santiagomorning.png";
import escudo_mushucruna from "../assets/escudo_mushucruna.png";
import escudo_ligaquito from "../assets/escudo_ligaquito.png";
import escudo_platense from "../assets/escudo_platense.png";
import escudo_cruzazul from "../assets/escudo_cruzazul.png";
import escudo_estudiantes from "../assets/escudo_estudiantes.png";
import escudo_acrmessina from "../assets/escudo_acrmessina.png";
import escudo_lamadrid from "../assets/escudo_lamadrid.png";
import escudo_fenix from "../assets/escudo_fenix.png";
import escudo_almagro from "../assets/escudo_almagro.png";
import escudo_arsenal from "../assets/escudo_arsenal.png";
import escudo_kalamata from "../assets/escudo_kalamata.png";
import escudo_orientepetro from "../assets/escudo_orientepetro.png";
import escudo_petrolero from "../assets/escudo_petrolero.png";
import escudo_sportboys from "../assets/escudo_sportboys.png";
import escudo_alwaysready from "../assets/escudo_alwaysready.png";
import escudo_ismailySC from "../assets/escudo_ismailySC.png";
import escudo_bolivar from "../assets/escudo_bolivar.png";
import escudo_intermiami from "../assets/escudo_intermiami.png";
import escudo_cusco from "../assets/escudo_cusco.png";
import escudo_gyejujuy from "../assets/escudo_gyejujuy.png";
import escudo_ligaloja from "../assets/escudo_ligaloja.png";
import escudo_patronato from "../assets/escudo_patronato.png";
import escudo_santamarina from "../assets/escudo_santamarina.png";
import escudo_carabobo from "../assets/escudo_carabobo.png";
import escudo_allboys from "../assets/escudo_allboys.png";
import escudo_temperley from "../assets/escudo_temperley.png";
import escudo_macara from "../assets/escudo_macara.png"; 
import escudo_nacionalpotosi from "../assets/escudo_nacionalpotosi.png";
import escudo_aucas from "../assets/escudo_aucas.png";
import escudo_sportivosl from "../assets/escudo_sportivosl.png";
import escudo_miamifc from "../assets/escudo_miamifc.png";
import escudo_luqueno from "../assets/escudo_luqueno.png";
import escudo_solamerica from "../assets/escudo_solamerica.png";
import escudo_atleticotucuman from "../assets/escudo_atleticotucuman.png";
import escudo_huracan from "../assets/escudo_huracan.png";
import escudo_union from "../assets/escudo_union.png";
import escudo_tampa from "../assets/escudo_tampa.png";
import escudo_colocolo from "../assets/escudo_colocolo.png";
import escudo_gralpaz from "../assets/escudo_gralpaz.png";
import escudo_central from "../assets/escudo_central.png";
import escudo_ferro from "../assets/escudo_ferro.png";
import escudo_olimpia from "../assets/escudo_olimpia.png";
import escudo_godoycruz from "../assets/escudo_godoycruz.png";  
import escudo_santoslaguna from "../assets/escudo_santoslaguna.png";
import escudo_atlas from "../assets/escudo_atlas.png";
import escudo_nublense from "../assets/escudo_nublense.png";
import escudo_atlanta from "../assets/escudo_atlanta.png";
import escudo_barracas from "../assets/escudo_barracas.png";
import escudo_colegiales from "../assets/escudo_colegiales.png";
import escudo_gimansia_cdu from "../assets/escudo_gimansia_cdu.png";
import escudo_guaraniantonio from "../assets/escudo_guaraniantonio.png";
import escudo_magallanes from "../assets/escudo_magallanes.png";
import escudo_milipillas from "../assets/escudo_milipillas.png";
import escudo_mazatlan from "../assets/escudo_mazatlan.png";
import escudo_audax from "../assets/escudo_audax.png";
import escudo_palestino from "../assets/escudo_palestino.png";
import escudo_quilmes from "../assets/escudo_quilmes.png";
import escudo_cerro from "../assets/escudo_cerro.png";
import escudo_queretaro from "../assets/escudo_queretaro.png";
import escudo_lanus from "../assets/escudo_lanus.png";
import escudo_wohlen from "../assets/escudo_wohlen.png";
import escudo_mallorca from "../assets/escudo_mallorca.png";
import escudo_lazio from "../assets/escudo_lazio.png";
import escudo_milan from "../assets/escudo_milan.png";
import escudo_almeria from "../assets/escudo_almeria.png";
import escudo_alaves from "../assets/escudo_alaves.png";
import escudo_chacarita from "../assets/escudo_chacarita.png";
import escudo_ohiggins from "../assets/escudo_ohiggins.png";
import escudo_udechile from "../assets/escudo_udechile.png";
import escudo_alwasl from "../assets/escudo_alwasl.png";
import escudo_volos from "../assets/escudo_volos.png";
import escudo_capiata from "../assets/escudo_capiata.png";
import escudo_central_norte from "../assets/escudo_central_norte.png";
import escudo_strongest from "../assets/escudo_strongest.png";
import escudo_resistencia from "../assets/escudo_resistencia.png";
import escudo_ucatolica from "../assets/escudo_ucatolica.png";
import escudo_boca from "../assets/escudo_boca.png";
import escudo_yeni from "../assets/escudo_yeni.png";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionBox = motion(Box);
const MotionGrid = motion(Grid);

const brands = [
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
    clubLogoActual: escudo_cruzazul,
    trayectoria: [
      { logo: escudo_velez, name: "Vélez Sarsfield", years: "2014-2016", trophies: [] },
      { logo: escudo_argentinos, name: "Argentinos Juniors", years: "2016-2018", trophies: [] },
      { logo: escudo_racing1, name: "Racing Club", years: "2018-2020", trophies: [] },
      { logo: escudo_gimnasia, name: "Gimnasia de La Plata", years: "2020-2021", trophies: [] },
      { logo: escudo_defensa, name: "Defensa y Justicia", years: "2021-2022", trophies: [] },
      { logo: escudo_colon, name: "Colón de Santa Fe", years: "2022-2023", trophies: [] },
    ],
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
    clubLogoActual: escudo_ligaquito,
    trayectoria: [
      { logo: escudo_baltimore, name: "Baltimore SC", years: "2013-2015", trophies: [] },
      { logo: escudo_miamiunited, name: "Miami United FC", years: "2015-2016", trophies: [] },
      { logo: escudo_donbosco, name: "Don Bosco FC", years: "2016-2018", trophies: [] },
      { logo: escudo_santiagomorning, name: "Santiago Morning", years: "2018-2020", trophies: [] },
      { logo: escudo_mushucruna, name: "Mushuc Runa", years: "2020-2022", trophies: [] },
    ],
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
    clubLogoActual: escudo_cruzazul,
    trayectoria: [
      { logo: escudo_mallorca, name: "RCD Mallorca", years: "2019-2021", trophies: [] },
      { logo: escudo_lazio, name: "SS Lazio", years: "2021-2023", trophies: [] },
      { logo: escudo_milan, name: "AC Milan", years: "2023 (Préstamo)", trophies: [] },
      { logo: escudo_almeria, name: "UD Almería", years: "2023-", trophies: [] },
      { logo: escudo_alaves, name: "Deportivo Alavés", years: "2023-", trophies: [] },
    ],
  },
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
    clubLogoActual: escudo_platense,
    trayectoria: [
      { logo: escudo_instituto, name: "Instituto", years: "2014-2017", trophies: [] },
      { logo: escudo_velez, name: "Vélez Sarsfield", years: "2018-2020", trophies: [] },
      { logo: escudo_defensa, name: "Defensa y Justicia", years: "2020", trophies: 
        [ { name: "Copa Sudamericana"},
          { name: "Copa Sudamericana"},
          { name: "Copa Sudamericana"}
        ] 
      },
      { logo: escudo_iquique, name: "Deportes Iquique", years: "2021", trophies: [] },
      { logo: escudo_sarmiento, name: "Sarmiento", years: "2021-2023", trophies: [] },
    ],
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
    clubLogoActual: escudo_cusco,
    trayectoria: [
      { logo: escudo_colon, name: "Colón de Santa Fe", years: "2012-2015", trophies: [] },
      { logo: escudo_gyejujuy, name: "Gimnasia y Esgrima de Jujuy", years: "2015-2016", trophies: [] },
      { logo: escudo_ligaloja, name: "Liga de Loja", years: "2016-2017", trophies: [] },
      { logo: escudo_patronato, name: "Patronato", years: "2017-2018", trophies: [] },
      { logo: escudo_santamarina, name: "Santamarina", years: "2018-2019", trophies: [] },
      { logo: escudo_carabobo, name: "Carabobo FC", years: "2019-2020", trophies: [] },
      { logo: escudo_allboys, name: "All Boys", years: "2020-2021", trophies: [] },
      { logo: escudo_temperley, name: "Temperley", years: "2021-2022", trophies: [] },
      { logo: escudo_macara, name: "Macará", years: "2022-2023", trophies: [] },
      { logo: escudo_nacionalpotosi, name: "Nacional Potosí", years: "2023", trophies: [] },
      { logo: escudo_aucas, name: "Aucas", years: "2023-Presente", trophies: [] },
    ],
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
    clubLogoActual: escudo_miamifc,
    trayectoria: [  
      {logo: escudo_sportivosl, name: "Sportivo San Lorenzo", years: "2015-2016", trophies: [] },
      {logo: escudo_luqueno, name: "Club Atlético Luqueño", years: "2016-2017", trophies: [] },
      {logo: escudo_solamerica, name: "Sol América", years: "2017-2018", trophies: [] },  
      {logo: escudo_atleticotucuman, name: "Atlético Tucumán", years: "2018-2019", trophies: [] },
      {logo: escudo_huracan, name: "Huracán", years: "2019-2020", trophies: [] },
      {logo: escudo_union, name: "Unión de Santa Fe", years: "2020-2021", trophies: [] },
      {logo: escudo_tampa, name: "Tampa Bay Rowdies", years: "2021-2022", trophies: [] },
    ],
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
    clubLogoActual: escudo_colocolo,
    trayectoria: [
      { logo: escudo_instituto, name: "Instituto", years: "2012-2014", trophies: [] },
      { logo: escudo_gralpaz, name: "General Paz Juniors", years: "2014-2015", trophies: [] },
      { logo: escudo_ferro, name: "Ferro Carril Oeste", years: "2015-2016", trophies: [] },
      { logo: escudo_central, name: "Rosario Central", years: "2016-2018", trophies: [] },
      { logo: escudo_olimpia, name: "Olimpia", years: "2018-2019", trophies: [] },
      { logo: escudo_godoycruz, name: "Godoy Cruz", years: "2019-2020", trophies: [] },
      { logo: escudo_colon, name: "Colón de Santa Fe", years: "2020-2021", trophies: [] },
      { logo: escudo_santoslaguna, name: "Santos Laguna", years: "2021-2022", trophies: [] },
      { logo: escudo_atlas, name: "Atlas", years: "2022-2023", trophies: [] },
      { logo: escudo_racing1, name: "Racing Club", years: "2023", trophies: [] },
      { logo: escudo_estudiantes, name: "Estudiantes LP", years: "2023-Presente", trophies: [] },
    ],
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
    clubLogoActual: escudo_kalamata,
    trayectoria: [
      { logo: escudo_orientepetro, name: "Oriente Petrolero", years: "2014-2016", trophies: [] },
      { logo: escudo_petrolero, name: "Club Petrolero", years: "2016-2017", trophies: [] },
      { logo: escudo_sportboys, name : "Sport Boys", years: "2017-2018", trophies: [] },
      { logo: escudo_alwaysready, name: "Always Ready", years: "2018-2019", trophies: [] },
      { logo: escudo_ismailySC, name: "Ismaily SC", years: "2019-2020", trophies: [] },
      { logo: escudo_bolivar, name: "Club Bolívar", years: "2020-2022", trophies: [] },
    ],
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
    clubLogoActual: escudo_estudiantes,
    trayectoria: [
      { logo: escudo_colon, name: "Colón de Santa Fe", years: "2020-Presente", trophies: [] },
      { logo: escudo_intermiami, name: "Inter Miami CF", years: "2023 (Préstamo)", trophies: [] },
    ],
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
    clubLogoActual: escudo_nublense,
    trayectoria: [
      { logo: escudo_atlanta, name: "Atlanta", years: "2010-2012", trophies: [] },
      { logo: escudo_barracas, name: "Barracas Central", years: "2012-2014", trophies: [] },
      { logo: escudo_colegiales, name: "Colegiales", years: "2014-2016", trophies: [] },
      { logo: escudo_gimansia_cdu, name: "Gimnasia y Esgrima CDU", years: "2016-2017", trophies: [] },
      { logo: escudo_guaraniantonio, name: "Guaraní Antonio Franco", years: "2017-2018", trophies: [] },
      { logo: escudo_magallanes, name: "Deportes Magallanes", years: "2018-2019", trophies: [] },
      { logo: escudo_milipillas, name: "Deportes Melipilla", years: "2019-2020", trophies: [] },
      { logo: escudo_mazatlan, name: "Mazatlán FC", years: "2020-2021", trophies: [] },
      { logo: escudo_audax, name: "Audax Italiano", years: "2021-2022", trophies: [] },
      { logo: escudo_palestino, name: "Palestino", years: "2022-2023", trophies: [] },
    ],
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
    clubLogoActual: escudo_cerro,
    trayectoria: [
      { logo: escudo_quilmes, name: "Quilmes", years: "2016-2018", trophies: [] },
      { logo: escudo_almagro, name: "Almagro", years: "2018-2019", trophies: [] },
      { logo: escudo_sarmiento, name: "Sarmiento", years: "2019-2020", trophies: [] },
      { logo: escudo_queretaro, name: "Querétaro FC", years: "2020-2021", trophies: [] },
      { logo: escudo_lanus, name: "Lanús", years: "2021-2022", trophies: [] },
    ],
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
    clubLogoActual: escudo_estudiantes,
    trajectoria: [
      { logo: escudo_acrmessina, name: "ACR Messina", years: "2015-2016", trophies: [] },
      { logo: escudo_lamadrid, name: "Deportivo La Madrid", years: "2016-2017", trophies: [] }, 
      { logo: escudo_fenix, name: "Fénix", years: "2017-2018", trophies: [] },
      { logo: escudo_almagro, name: "Almagro", years: "2018-2019", trophies: [] },
      { logo: escudo_arsenal, name: "Arsenal de Sarandí", years: "2019-2020", trophies: [] },
      { logo: escudo_ligaquito, name: "Liga de Quito", years: "2020-2021", trophies: [] },
    ],
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
    clubLogoActual: escudo_platense,
    trayectoria: [
      { logo: escudo_racing1, name: "Racing Club", years: "2016-2018", trophies: [] },
      { logo: escudo_wohlen, name: "FC Wohlen", years: "2018-2019", trophies: [] },
      { logo: escudo_union, name: "Unión de Santa Fe", years: "2019-2020", trophies: [] },
      { logo: escudo_atleticotucuman, name: "Atlético Tucumán", years: "2020-2022", trophies: [] },
      { logo: escudo_cruzazul, name: "Cruz Azul", years: "2022-2023", trophies: [] },
      { logo: escudo_lanus, name: "Lanús", years: "2023-", trophies: [] },
    ],
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
    clubLogoActual: escudo_argentinos,
    trayectoria: [
      { logo: escudo_racing1, name: "Racing Club", years: "2013-2016", trophies: [] },
      { logo: escudo_chacarita, name: "Chacarita Juniors", years: "2016-2017", trophies: [] },
      { logo: escudo_ohiggins, name: "O'Higgins", years: "2017-2018", trophies: [] },
      { logo: escudo_udechile, name: "Universidad de Chile", years: "2018-2019", trophies: [] },
      { logo: escudo_alwasl, name: "Al Wasl FC", years: "2019-2020", trophies: [] },
      { logo: escudo_volos, name: "Volos FC", years: "2020-2021", trophies: [] },
    ],
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
    clubLogoActual: escudo_platense,
    trayectoria: [
      { logo: escudo_cerro, name: "Cerro Porteño", years: "2013-2015", trophies: [] },
      { logo: escudo_capiata, name: "Club Deportivo Capiatá", years: "2015-2017", trophies: [] },
      { logo: escudo_central_norte, name: "Central Norte", years: "2017-2018", trophies: [] },
      { logo: escudo_strongest, name: "The Strongest", years: "2018-2019", trophies: [] },
      { logo: escudo_resistencia, name: "Resistencia SC", years: "2019-2020", trophies: [] },
    ],
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
    clubLogoActual: escudo_ucatolica,
    trayectoria: [
      { logo: escudo_boca, name: "Boca Juniors", years: "2013-2015", trophies: [] },
      { logo: escudo_estudiantes, name: "Estudiantes LP", years: "2015-2017", trophies: [] },
      { logo: escudo_colon, name: "Colón de Santa Fe", years: "2017-2020", trophies: [] },
      { logo: escudo_yeni, name: "Yeni Malatyaspor", years: "2020-2021", trophies: [] },
    ],
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

