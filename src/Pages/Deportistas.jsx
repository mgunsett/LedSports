import { Flex, Heading, Text, Box, Image, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "./Deportistas.css";

import deportistas_gestion360 from "../assets/deportistas_gestion360.png";
import deportistas_logos from "../assets/deportistas_logos.png";
import deportistas_prematch from "../assets/deportistas_prematch.png";
import deportistas_prematch1 from "../assets/deportistas_prematch1.png";
import deportistas_prematch2 from "../assets/deportistas_prematch2.png";
import deportistas_postpartido from "../assets/deportistas_postpartido.png";
import deportistas_video from "../assets/deportistas_video.mp4";
import deportistas_aniversario from "../assets/deportistas_aniversario.png";
import deportistas_perfil from "../assets/deportistas_perfil.png";
import deportistas_perfil3 from "../assets/deportistas_perfil3.png";
import deportistas_perfil4 from "../assets/deportistas_perfil4.png";
import deportistas_fotografia from "../assets/deportistas_fotografia.png";
import deportistas_estadis from "../assets/deportistas_estadis.png";
import deportistas_estadis2 from "../assets/deportistas_estadis2.png";
import deportistas_carpetacom from "../assets/deportistas_carpetacom.png";
import deportistas_planmkt from "../assets/deportistas_planmkt.png";
import { BsChevronDoubleDown } from "react-icons/bs";
import Contact from "../components/Contact";

const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionBox = motion(Box);

export const Deportistas = () => {
  const services = [
    {
      title: "Plan de Marketing",
      description: "Diseñamos el plan de marketing y comunicación adaptado a tu persona para generar el contenido adecuado.",
      featured: true,
      image: deportistas_planmkt
    },
    {
      title: "Gestión 360º",
      description: "Generamos contenido adaptado para todas las redes sociales existentes.",
      featured: false,
      image: deportistas_gestion360
    },
    {
      title: "Logos",
      description: "Creamos tu logo propio para identificar todo tu contenido profesionalmente.",
      featured: false,
      image: deportistas_logos
    },
    {
      title: "Video Matchday",
      description: "Generamos videos profesionales para tus redes sociales.",
      featured: true,
      video: deportistas_video
    },
    {
      title: "Matchday",
      description: "Anuncia tu próximo partido con placas estáticas o animadas de alta calidad.",
      featured: true,
      image: deportistas_prematch,
      image2: deportistas_prematch1,
      image3: deportistas_prematch2
    },
    {
      title: "Post Partido",
      description: "Comunica tus sensaciones de manera profesional con imágenes o videos.",
      featured: false,
      image: deportistas_postpartido
    },
    {
      title: "Conmemorativas",
      description: "Contenido especial para fechas importantes y aniversarios de clubes.",
      featured: false,
      image: deportistas_aniversario
    },
    {
      title: "Optimización de Perfil",
      description: "Organizamos tu perfil con biografía, portada e historias destacadas profesionales.",
      featured: true,
      image: deportistas_perfil,
      image2: deportistas_perfil3,
      image3: deportistas_perfil4,
    },
    {
      title: "Estadísticas",
      description: "Análisis visual de tu rendimiento, progresos y logros deportivos.",
      featured: true,
      image: deportistas_estadis,
      image2: deportistas_estadis2
    },
    {
      title: "Fotografía",
      description: "Fotógrafos y filmmakers en todo el mundo para contenido de alta calidad.",
      featured: false,
      image: deportistas_fotografia
    },
    {
      title: "Carpeta Comercial",
      description: "Destacamos tus beneficios para acercar tu imagen a marcas comerciales.",
      featured: false,
      image: deportistas_carpetacom
    }
  ];

  return (
    <Flex
      bg="black"
      minHeight="100vh"
      pt={{ base: 40, md: 60 }}
      pb={{ base: 20, md: 0 }}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      {/* Hero Header */}
      <Flex
        justifyContent="start"
        alignItems="start"
        gap={2}
        flexDirection="row"
        alignSelf="start"
        w="100%"
        pl={{ base: 4, md: 16, lg: "250px" }}
        mb={{ base: 6, md: 10 }}
      >
        <MotionBox
          w={"2px"}
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
          fontSize={{ base: "4xl", md: "5xl" }}
          fontWeight="bold"
          color="white"
          lineHeight="shorter"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Depor
          <MotionText
            fontSize={{ base: "4xl", md: "5xl" }}
            as="span"
            color="orange.400"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            tistas
          </MotionText>
        </MotionHeading>
      </Flex>

      {/* Intro Text */}
      <MotionFlex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        px={{ base: 6, md: 0 }}
        my={{ base: 8, md: 16 }}
        w={{ base: "90%", md: "60%" }}
        fontSize={{ base: "lg", md: "xl" }}
        fontWeight="bold"
        color="white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <Text textAlign="center">
          Desde nuestros inicios en 2020, hemos trabajado en la marca personal de más de
          <Text as="mark" p={"3px"} bg="orange.400" color="white" mx={1}>
            350 deportistas
          </Text>
          que confiaron en nosotros. A ellos los acompañamos en las principales competiciones de América y el mundo.
        </Text>
      </MotionFlex>

      {/* Section Title */}
      <MotionFlex
        justifyContent="center"
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
        my={{ base: 8, md: 16 }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        gap={2}
      >
        <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" color="white" textAlign="center">
          Así potenciamos
        </Text>
        <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" color="orange.400" textAlign="center">
          tu marca
        </Text>
      </MotionFlex>

      {/* Services Grid */}
      <Box w="100%" maxW="1400px" px={{ base: 4, md: 8 }}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: 6, md: 8 }} mb={{ base: 16, md: 24 }}>
          {services.map((service, index) => (
            <MotionBox
              key={index}
              bg="zinc.900"
              border="1px solid"
              borderColor="gray.800"
              borderRadius="xl"
              overflow="hidden"
              gridColumn={service.featured ? { base: "span 1", lg: "span 2" } : "span 1"}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              _hover={{
                transform: "translateY(-8px)",
                borderColor: "orange.400",
                boxShadow: "0 0 20px rgba(245, 160, 15, 0.3)"
              }}
              transitionDuration="0.3s"
            >
              <Flex
                flexDirection={service.featured ? { base: "column", md: "row" } : "column"}
                h="100%"
              >
                {/* Image Section */}
                <Box
                  flex={service.featured ? "2" : "1"}
                  bg="gray.900"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p={6}
                  minH={{ base: "200px", md: service.featured ? "300px" : "250px" }}
                >
                {service.image && (
                  <Image
                    src={service.image}
                    w="140px"
                    h={service.featured ? "260px" : "200px"}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="md"
                    color="gray.500"
                    fontSize="sm"
                    transitionDuration="0.3s"
                    _hover={{
                        transform: "translateY(-8px)",
                        borderColor: "orange.400",
                        filter: "drop-shadow(0px 0px 12px rgba(245,160,15,0.56))"
                      }}
                  />
                  )}
                  {service.image2 && (
                    <Image
                      src={service.image2}
                      w="140px"
                      h={service.featured ? "260px" : "200px"}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="md"
                      color="gray.500"
                      fontSize="sm"
                      transitionDuration="0.3s"
                      ml={2}
                      _hover={{
                        transform: "translateY(-8px)",
                        borderColor: "orange.400",
                        filter: "drop-shadow(0px 0px 12px rgba(245,160,15,0.56))"
                      }}
                    />
                  )}
                  {service.image3 && (
                    <Image
                      src={service.image3}
                      w="140px"
                      h={service.featured ? "260px" : "200px"}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="md"
                      color="gray.500"
                      fontSize="sm"
                      transitionDuration="0.3s"
                      ml={2}
                      _hover={{
                        transform: "translateY(-8px)",
                        borderColor: "orange.400",
                        filter: "drop-shadow(0px 0px 12px rgba(245,160,15,0.56))"
                      }}
                    />
                  )}    
                  {service.video && (
                    <iframe
                      src={service.video}
                      width='100%'
                      height={service.featured ? "100%": "200px"}  
                      controls='none'
                      loop
                      allowFullScreen
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="md"
                    />
                  )}
                </Box>

                {/* Content Section */}
                <Flex
                  flex={service.featured ? "1" : "auto"}
                  flexDirection="column"
                  p={{ base: 6, md: 8 }}
                  gap={3}
                  justifyContent="center"
                >
                  <Text
                    as="h2"
                    fontSize={{ base: "xl", md: service.featured ? "3xl" : "2xl" }}
                    fontWeight="bold"
                    color="orange.400"
                    p={2}
                    alignSelf="start"
                  >
                    {service.title}
                  </Text>
                  <Text fontSize={{ base: "sm", md: "md" }} color="gray.300" lineHeight="tall">
                    {service.description}
                  </Text>
                </Flex>
              </Flex>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>

      {/* Scroll Indicator */}
      <MotionBox
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        fontSize={{ base: "50px", md: "100px" }}
        mt={{ base: 8, md: 16 }}
      >
        <BsChevronDoubleDown color="orange" />
      </MotionBox>

      <Contact />
    </Flex>
  );
};


// export const Deportistas = () => {
//     return (
//         <Flex 
//             bg="black"
//             minHeight="100vh"
//             minWidth="70vw"
//             pt={60}
//             justifyContent="center"
//             alignItems="center"
//             flexDirection="column"
//         >
//             <Flex 
//                 justifyContent="start"
//                 alignItems="start"
//                 gap={2}
//                 flexDirection="row"
//                 alignSelf="start"
//                 pl={{ base: 4, md: 16, lg: '250px' }}
//                 mb={{ base: 6, md: 10 }}
//             >
//                 <MotionBox
//                     w={'2px'}
//                     h={{ base: '70px', md: '80px' }} 
//                     bg="orange.400"
//                     mr={2}
//                     borderRadius="full"
//                     boxShadow="0px 0px 12px 1px rgba(245,160,15,0.56)"
//                     initial={{ opacity: 0, y: 80 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}

//                 ></MotionBox>
//                 <MotionHeading
//                     as="h1"
//                     fontSize="5xl"
//                     fontWeight="bold"
//                     color="white"
//                     lineHeight="shorter"
//                     initial={{ opacity: 0, x: -40 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.7, duration: 0.8 }}
//                 >
//                     Depor
//                     <MotionText
//                         fontSize='5xl'
//                         as="span"
//                         color="orange.400"
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.8, duration: 0.8 }}
//                     >
//                         tistas
//                     </MotionText>
//                 </MotionHeading>
//             </Flex>
//             <MotionFlex
//                 justifyContent="center"
//                 alignItems="center"
//                 flexDirection="column"
//                 px={{ base: 4, md: 0 }}
//                 my={{ base: 12, md: 16 }}
//                 w={{ base: "90%", md: "50%" }}
//                 fontSize={{ base: "lg", md: "xl" }}
//                 fontWeight="bold" 
//                 fontFamily="Stack Sans Headline, sans-serif" 
//                 color="white"
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.9, duration: 0.8 }}
//             >
//                 <Text textAlign={{ base: "start", md: "center" }}>
//                 Desde nuestros inicios en 2020, hemos trabajado en la marca personal de más de 
//                 <Text as='mark' p={'3px'} bg="orange.400" color="white" mx={1}>350 deportistas</Text> que confiaron en nosotros.
//                 A ellos los acompañamos en las principales competiciones de América y el mundo.
//                 </Text>
//             </MotionFlex>
//             <MotionFlex
//                 justifyContent='center'
//                 alignItems='center'
//                 flexDirection={{ base: "column", md: "row" }}
//                 my={{ base: 12, md: 20 }}
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.9, duration: 0.8 }}
//                 w={{ base: "90%", md: "70%" }}
//             >
//                 <Text 
//                     textAlign="center"
//                     fontSize={{ base: "4xl", md: "5xl" }} 
//                     fontWeight="bold" 
//                     fontFamily="Stack Sans Headline, sans-serif" 
//                     color="white" 
//                     mt={{ base: 4, md: 20 }}
//                 >
//                     Así potenciamos 
//                 </Text>
//                 <Text 
//                     color="orange.400" 
//                     fontSize="5xl" 
//                     fontWeight="bold" 
//                     fontFamily="Stack Sans Headline, sans-serif" 
//                     mt={{ base: -2, md: 20 }}
//                 >
//                    <Text display={{ base: "none", md: "inline" }}> &nbsp;</Text>tu marca
//                 </Text>
//             </MotionFlex>
//             <Flex
//                 className="bordersBox2"
//                 w={{ base: "100%", md: "70%" }}
//                 h="400px"
//                 justifyContent="space-around"
//                 alignItems="center"
//                 fontFamily="Stack Sans Headline, sans-serif"
//                 color="white"
//                 p={10}
//             >
//                 <MotionImage 
//                 initial={{ opacity: 0, x: 40 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.8, duration: 0.6 }}
//                 viewport={{ once: true }}
//                 src={deportistas_planmkt}
//                 alt="deportistas_planmkt" 
//                 w="300px" 
//                 h="300px" 
//                 objectFit="contain" 
//                 filter="drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.59))"
//                 /> 
//                 <MotionFlex
//                     initial={{ opacity: 0, x: 40 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.7, duration: 0.6 }}
//                     viewport={{ once: true }}
//                     justifyContent="start"
//                     alignItems="end"
//                     flexDirection="column"
//                     gap={2}
//                     alignSelf="start"
//                     w="300px"
//                 >
//                     <Text textAlign="start" fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold"  as='mark' p={'3px'} bg="orange.400" color="white" mx={1} mt={20}>
//                         Plan de Marketing
//                     </Text>
//                     <Text fontSize={{ base: "sm", md: "md" }} textAlign="end">
//                         Diseñamos el plan de marketing y comunicación adaptado a tu persona para generar el contenido adecuado para potenciar tu marca persona.
//                     </Text>
//                 </MotionFlex>
//             </Flex>
//             <Flex
//                 className="bordersBox"
//                 w={{ base: "100%", md: "70%" }}
//                 h="400px"
//                 justifyContent="space-around"
//                 alignItems="center"
//                 fontFamily="Stack Sans Headline, sans-serif"
//                 color="white"
//                 p={10}
//             >
//                 <MotionFlex
//                     initial={{ opacity: 0, x: -40 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.7, duration: 0.6 }}
//                     viewport={{ once: true }}
//                     justifyContent="start"
//                     alignItems="start"
//                     flexDirection="column"
//                     gap={2}
//                     alignSelf="start"
//                     w="300px"
//                 >
//                     <Text textAlign="start" fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold"  as='mark' p={'3px'} bg="orange.400" color="white" mx={1} mt={20}>
//                         Gestión 360º
//                     </Text>
//                     <Text fontSize={{ base: "sm", md: "md" }}>
//                         Generamos contenido adaptado para todas las redes sociales existentes.
//                     </Text>
//                 </MotionFlex>
//                 <MotionImage 
//                 initial={{ opacity: 0, x: -40 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.8, duration: 0.6 }}
//                 viewport={{ once: true }}
//                 src={deportistas_gestion360}
//                 alt="deportistas_gestion360" 
//                 w="350px" 
//                 h="350px" 
//                 objectFit="contain" 
//                 /> 
//             </Flex>
//             <Flex
//                 className="bordersBox2"
//                 w={{ base: "100%", md: "70%" }}
//                 h="400px"
//                 justifyContent="space-around"
//                 alignItems="center"
//                 fontFamily="Stack Sans Headline, sans-serif"
//                 color="white"
//                 p={10}
//             >
//                 <MotionImage 
//                 initial={{ opacity: 0, x: 40 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.8, duration: 0.6 }}
//                 viewport={{ once: true }}
//                 src={deportistas_logos}
//                 alt="deportistas_logos" 
//                 w="350px" 
//                 h="350px" 
//                 objectFit="contain" 
//                 filter="drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.59))"
//                 /> 
//                 <MotionFlex
//                     initial={{ opacity: 0, x: 40 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.7, duration: 0.6 }}
//                     viewport={{ once: true }}
//                     justifyContent="start"
//                     alignItems="end"
//                     flexDirection="column"
//                     gap={2}
//                     alignSelf="start"
//                     w="300px"
//                 >
//                     <Text textAlign="start" fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold"  as='mark' p={'3px'} bg="orange.400" color="white" mx={1} mt={20}>
//                         Logos
//                     </Text>
//                     <Text fontSize={{ base: "sm", md: "md" }} textAlign="end">
//                         El Logo es el principal diferenciador de una marca, es por ello que crearemos el tuyo propio para identificar todo tu contenido.
//                     </Text>
//                 </MotionFlex>
//             </Flex>
//             <Flex
//                 className="bordersBox"
//                 w={{ base: "100%", md: "70%" }}
//                 h="500px"
//                 justifyContent="space-around"
//                 alignItems="center"
//                 fontFamily="Stack Sans Headline, sans-serif"
//                 color="white"
//                 p={20}
//             >
//                 <MotionFlex
//                     initial={{ opacity: 0, x: -40 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.7, duration: 0.6 }}
//                     viewport={{ once: true }}
//                     justifyContent="start"
//                     alignItems="start"
//                     flexDirection="column"
//                     gap={2}
//                     alignSelf="start"
//                     w="300px"
//                 >
//                     <Text textAlign="start" fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold"  as='mark' p={'3px'} bg="orange.400" color="white" mx={1} mt={20}>
//                         Matchday
//                     </Text>
//                     <Text fontSize={{ base: "sm", md: "md" }}>
//                         Anuncia tu próximo partido con el equipo de la mejor manera a través de placas estáticas o animadas.
//                     </Text>
//                 </MotionFlex>
//                 <Flex
//                     justifyContent="center"
//                     alignItems="flex-start"
//                     gap={4}
//                     w="400px"
//                 >
//                     <Image
//                         src={deportistas_prematch}
//                         alt="deportistas_prematch"
//                         w="200px"
//                         h="250px"
//                         objectFit="contain"
//                         transition="all 0.5s ease-in-out"
//                         _hover={{
//                             transform: "scale(1.1)",
//                             filter: "drop-shadow(0px 0px 5px rgba(209, 121, 21, 0.77))",
//                             mx: 2,
//                         }}
//                     />
//                     <Image
//                         src={deportistas_prematch1}
//                         alt="deportistas_prematch1"
//                         w="200px"
//                         h="250px"
//                         objectFit="contain"
//                         transition="all 0.5s ease-in-out"
//                         _hover={{
//                             transform: "scale(1.1)",
//                             filter: "drop-shadow(0px 0px 5px rgba(209, 121, 21, 0.77))",
//                             mx: 2,
//                         }}
//                     />
//                     <Image
//                         src={deportistas_prematch2}
//                         alt="deportistas_prematch2"
//                         w="200px"
//                         h="250px"
//                         objectFit="contain"
//                         transition="all 0.5s ease-in-out"
//                         _hover={{
//                             transform: "scale(1.1)",
//                             filter: "drop-shadow(0px 0px 5px rgba(209, 121, 21, 0.77))",
//                             mx: 2,
//                         }}
//                     />
//                 </Flex>
//             </Flex>
//             <Flex
//                 className="bordersBox2"
//                 w={{ base: "100%", md: "70%" }}
//                 h="600px"
//                 justifyContent="space-around"
//                 alignItems="center"
//                 flexDirection={{ base: "column", md: "row" }}
//                 gap={6}
//                 fontFamily="Stack Sans Headline, sans-serif"
//                 color="white"
//                 p={10}
//             >
//                 <MotionImage 
//                 initial={{ opacity: 0, x: 40 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.8, duration: 0.6 }}
//                 viewport={{ once: true }}
//                 src={deportistas_postpartido}
//                 alt="deportistas_postpartido" 
//                 w="400px" 
//                 h="500px" 
//                 objectFit="contain" 
//                 filter="drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.59))"
//                 /> 
//                 <MotionFlex
//                     initial={{ opacity: 0, x: 40 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.7, duration: 0.6 }}
//                     viewport={{ once: true }}
//                     justifyContent="start"
//                     alignItems="end"
//                     flexDirection="column"
//                     gap={2}
//                     alignSelf="start"
//                     w="300px"
//                 >
//                     <Text textAlign="end" fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold"  as='mark' p={'3px'} bg="orange.400" color="white" mx={1} mt={20}>
//                         Publicaciones
//                     </Text>
//                     <Text textAlign="end" fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold"  as='mark' p={'3px'} bg="orange.400" color="white" mx={1} >
//                         Post Partido
//                     </Text>
//                     <Text fontSize={{ base: "sm", md: "md" }} textAlign="end">
//                         Comunica tus sensaciones luego de disputar un encuentro de la manera más profesional a través de imágenes o videos.
//                     </Text>
//                 </MotionFlex>
//             </Flex>
//             <Flex
//                 className="bordersBox"
//                 w={{ base: "100%", md: "70%" }}
//                 h="750px"
//                 justifyContent="space-around"
//                 alignItems="center"
//                 gap={20}
//                 fontFamily="Stack Sans Headline, sans-serif"
//                 color="white"
//                 p={20}
//             >
//                 <MotionFlex
//                     initial={{ opacity: 0, x: -40 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.7, duration: 0.6 }}
//                     viewport={{ once: true }}
//                     justifyContent="start"
//                     alignItems="start"
//                     flexDirection="column"
//                     gap={2}
//                     alignSelf="start"
//                     w="400px"
//                 >
//                     <Text textAlign="start" fontSize="4xl" fontWeight="bold"  as='mark' p={'3px'} bg="orange.400" color="white" mx={1} mt={20}>
//                         Conmemorativas
//                     </Text>
//                     <Text fontSize="xl">
//                         Recorda esas fechas que son importantes en tu carrera o saluda a los clubes anteriores o actual por su aniversario, también a través de contenido en imágenes o videos.
//                     </Text>
//                 </MotionFlex>
//                 <MotionImage 
//                 initial={{ opacity: 0, x: -40 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.8, duration: 0.6 }}
//                 viewport={{ once: true }}
//                 src={deportistas_aniversario}
//                 alt="deportistas_aniversario" 
//                 w="600px" 
//                 h="650px" 
//                 objectFit="contain" 
//                 /> 
//             </Flex>
//             <Flex
//                 className="bordersBox2"
//                 w={{ base: "100%", md: "70%" }}
//                 h="900px"
//                 justifyContent="space-around"
//                 alignItems="start"
//                 gap={20}
//                 fontFamily="Stack Sans Headline, sans-serif"
//                 color="white"
//                 p={10}
//                 position="relative"
//             >   
//                 <Flex
//                 flexDirection="column"
//                 justifyContent="center"
//                 alignItems="start"
//                 >
//                     <MotionImage
//                         initial={{ opacity: 0, x: 40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.8, duration: 0.6 }}
//                         viewport={{ once: true }}
//                         src={deportistas_perfil}
//                         alt="deportistas_perfil"
//                         w="500px"
//                         h="600px"
//                         objectFit="contain"
//                         filter="drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.59))"
//                     />
//                     <MotionImage
//                         initial={{ opacity: 0, x: 40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.8, duration: 0.6 }}
//                         viewport={{ once: true }}
//                         src={deportistas_perfil3}
//                         alt="deportistas_perfil3"
//                         w="550px"
//                         h="600px"
//                         objectFit="contain"
//                         position="absolute"
//                         bottom="-60px"
//                         left="110px"
//                     /> 
//                     <MotionImage
//                         initial={{ opacity: 0, x: 40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.8, duration: 0.6 }}
//                         viewport={{ once: true }}
//                         src={deportistas_perfil4}
//                         alt="deportistas_perfil4"
//                         w="550px"
//                         h="600px"
//                         objectFit="contain"
//                         position="absolute"
//                         bottom="-60px"
//                         right="80px"
//                     /> 
//                 </Flex>
//                 <MotionFlex
//                     initial={{ opacity: 0, x: 40 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.7, duration: 0.6 }}
//                     viewport={{ once: true }}
//                     justifyContent="start"
//                     alignItems="end"
//                     flexDirection="column"
//                     gap={2}
//                     alignSelf="start"
//                     w="400px"
//                     pt={10}
//                 >
//                     <Text textAlign="center" fontSize="4xl" fontWeight="bold"  as='mark' p={'3px'} bg="orange.400" color="white" mx={1} mt={20}>
//                         Optimización de Perfil
//                     </Text>
//                     <Text fontSize="xl" textAlign="end" >
//                         Biografia, Portada principal y destacadas: Organizamos y tu perfil generando el copy para tu biografia, 
//                         diseñando tu portada principal para dar la bienvenida e historias destacadas de Instagram por etapas de tu carrera 
//                         (clubes, selecciones, eventos o hitos). Cada portada cuenta parte de tu recorrido, manteniendo una estética visual uniforme y profesional.
//                     </Text>
//                 </MotionFlex>
//             </Flex>
//             <Flex
//                 className="bordersBox"
//                 w={{ base: "100%", md: "70%" }}
//                 h="550px"
//                 justifyContent="space-around"
//                 alignItems="center"
//                 gap={20}
//                 fontFamily="Stack Sans Headline, sans-serif"
//                 color="white"
//                 p={20}
//             >
//                 <MotionFlex
//                     initial={{ opacity: 0, x: -40 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.7, duration: 0.6 }}
//                     viewport={{ once: true }}
//                     justifyContent="start"
//                     alignItems="start"
//                     flexDirection="column"
//                     gap={2}
//                     alignSelf="start"
//                     w="400px"
//                 >
//                     <Text textAlign="start" fontSize="4xl" fontWeight="bold"  as='mark' p={'3px'} bg="orange.400" color="white" mx={1} mt={20}>
//                         Fotografia y filmación
//                     </Text>
//                     <Text fontSize="xl">
//                         Contamos con fotografos y filmmakers distribuidos estrategicamente en todo el mundo para poder general contenido personalizado, profesional y de alta calidad.
//                     </Text>
//                 </MotionFlex>
//                 <MotionImage 
//                 initial={{ opacity: 0, x: -40 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.8, duration: 0.6 }}
//                 viewport={{ once: true }}
//                 src={deportistas_fotografia}
//                 alt="deportistas_fotografia" 
//                 w="400px" 
//                 h="400px" 
//                 objectFit="contain" 
//                 filter="drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.59))"
//                 /> 
//             </Flex>
//             <Flex
//                 className="bordersBox2"
//                 w={{ base: "100%", md: "70%" }}
//                 h="700px"
//                 justifyContent="center"
//                 alignItems="center"
//                 fontFamily="Stack Sans Headline, sans-serif"
//                 color="white"
//                 gap={20}
//             >
//                 <Flex
//                 w='600px'
//                 justifyContent="center"
//                 alignItems="start"
//                 alignSelf="start"
//                 >
//                     <MotionImage
//                         initial={{ opacity: 0, x: 40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.8, duration: 0.6 }}
//                         viewport={{ once: true }}
//                         src={deportistas_estadis}
//                         alt="deportistas_estadis"
//                         w="500px"
//                         h="550px"
//                         objectFit="contain"
//                         alignSelf="flex-start"
//                     />
//                     <MotionImage
//                         initial={{ opacity: 0, x: 40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.8, duration: 0.6 }}
//                         viewport={{ once: true }}
//                         src={deportistas_estadis2}
//                         alt="deportistas_estadis2"
//                         w="500px"
//                         h="550px"
//                         objectFit="contain"
//                         alignSelf="flex-start"
//                     /> 
//                 </Flex>
//                 <MotionFlex
//                     initial={{ opacity: 0, x: 40 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.7, duration: 0.6 }}
//                     viewport={{ once: true }}
//                     justifyContent="start"
//                     alignItems="end"
//                     flexDirection="column"
//                     gap={2}
//                     alignSelf="flex-start"
//                     w="350px"
//                     mt={'180px'}
//                     ml={'10px'}
//                 >
//                     <Text textAlign="start" fontSize="4xl" fontWeight="bold"  as='mark' p={'3px'} bg="orange.400" color="white" mx={1}>
//                         Estadísticas
//                     </Text>
//                     <Text fontSize="xl" textAlign="end">
//                        Registramos y analizamos tus estadísticas deportivas partido a partido o de forma mensual. Transformamos los datos en información visual clara y profesional para que puedas mostrar tu rendimiento, progresos y logros en cada etapa de tu carrera.

//                     </Text>
//                 </MotionFlex>
//             </Flex>
//              <Flex
//                 className="bordersBox"
//                 w={{ base: "100%", md: "70%" }}
//                 h="550px"
//                 justifyContent="space-around"
//                 alignItems="center"
//                 gap={6}
//                 fontFamily="Stack Sans Headline, sans-serif"
//                 color="white"
//                 p={20}
//             >
//                 <MotionFlex
//                     initial={{ opacity: 0, x: -40 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.7, duration: 0.6 }}
//                     viewport={{ once: true }}
//                     justifyContent="start"
//                     alignItems="start"
//                     flexDirection="column"
//                     gap={2}
//                     alignSelf="start"
//                     w="400px"
//                 >
//                     <Text textAlign="start" fontSize="4xl" fontWeight="bold"  as='mark' p={'3px'} bg="orange.400" color="white" mx={1} mt={20}>
//                         Carpeta comercial
//                     </Text>
//                     <Text fontSize="xl">
//                         Creamos tu carpeta comercial donde destacamos tus principales beneficios como deportista y persona, para de esta manera poder 
//                         acercarla a marcas que quieran invertir en tu imagen.
//                     </Text>
//                 </MotionFlex>
//                 <MotionImage 
//                 initial={{ opacity: 0, x: -40 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.8, duration: 0.6 }}
//                 viewport={{ once: true }}
//                 src={deportistas_carpetacom}
//                 alt="deportistas_carpetacom" 
//                 w="400px" 
//                 h="400px" 
//                 objectFit="contain" 
//                 /> 
//             </Flex>
//             <MotionBox
//                 animate={{ y: [0, -15, 0] }}
//                 transition={{ duration: 1, repeat: Infinity }}
//                 display="flex"
//                 direction="row"
//                 alignItems="center"
//                 justifyContent="center"
//                 fontSize={{ base: '50px', md: '100px' }}
//                 mt={'100px'}
//             >
//                 <BsChevronDoubleDown color="orange" />
//             </MotionBox> 
//             <Contact/>
//         </Flex>
//     );
// };