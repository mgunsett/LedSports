import { Box, Flex, Text, Heading, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";
import entidades_deportivas from "../assets/entidades_deportivas.png";
import Contact from "../components/Contact";


const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionImage = motion(Image);

export const EntidadesDeportivas= () => {
  return (
    <Flex 
      bg="black"
      minHeight="100vh" 
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap={{ base: 10, md: 20 }}
      pt={{ base: 40, md: 60 }}
      pb={{ base: '80px', md: '100px' }}
      px={{ base: 4, md: 0 }}
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
          h={{ base: '70px', md: '80px' }} 
          bg="orange.400"
          mr={2}
          borderRadius="full"
          boxShadow="0px 0px 12px 1px rgba(245,160,15,0.56)"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <MotionBox
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Heading
            as="h1"
            fontSize={{ base: '5xl', md: '5xl', lg: '5xl' }}
            fontWeight="bold"
            color="white"
            lineHeight="shorter"
          >
            Entidades&nbsp;
            <Text as="span" color="orange.400">
              Deportivas
            </Text>
          </Heading>
        </MotionBox>
      </Flex>

      {/* Layout Vertical con Imagen Izquierda */}
      <Flex
        w={{ base: "100%", md: "70%" }}
        flexDirection="column"
        gap={10}
        px={{ base: 4, md: 0 }}
      >
        {/* Sección 1: Imagen + Feature Principal */}
        <MotionFlex
          gap={8}
          flexDirection={{ base: "column", md: "row" }}
          alignItems="stretch"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Imagen */}
          
            <MotionImage
              src={entidades_deportivas}
              alt="Entidades Deportivas"
              w="100%"
              h={{ base: "300px", md: "100%" }}
              objectFit="cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              flex="1"
              position="relative"
              overflow="hidden"
            />
          

          {/* Texto Principal */}
          <Flex
            flex="1"
            flexDirection="column"
            justifyContent="center"
            gap={4}
            bg="gray.900"
            border="2px solid"
            borderColor="gray.800"
            borderRadius="2xl"
            p={8}
            position="relative"
            overflow="hidden"
          >
            <Box
              position="absolute"
              top="-60px"
              right="-60px"
              w="200px"
              h="200px"
              bg="orange.400"
              opacity={0.15}
              borderRadius="full"
              filter="blur(50px)"
            />
            
            <Box position="relative" zIndex={10}>
              <Box w="64px" h="4px" bg="orange.400" mb={4} />
              <Heading
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="bold"
                color="orange.400"
                mb={4}
              >
                Potenciamos la identidad digital de tu institución deportiva
              </Heading>
              <Text fontSize="md" color="white" lineHeight="tall">
                Brindamos un servicio integral diseñado para clubes, academias, ligas y organizaciones deportivas que buscan 
                fortalecer su marca en el entorno digital y proyectar una imagen profesional, moderna y coherente con sus valores.
              </Text>
            </Box>
          </Flex>
        </MotionFlex>

        {/* Sección 2: Estrategia */}
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Box
            bg="gray.900"
            border="2px solid"
            borderColor="gray.800"
            borderRadius="2xl"
            p={8}
          >
            <Text fontSize="lg" color="white" lineHeight="tall">
              Nuestro objetivo es acompañar a cada entidad en la construcción de una{" "}
              <Text as="mark" bg="orange.400" color="white" px={1}>
                estrategia de comunicación completa
              </Text>
              , que refleje su historia, su esencia y su visión de crecimiento.
            </Text>
          </Box>
        </MotionBox>

        {/* Sección 3: Servicios en Columnas */}
        <MotionFlex
          gap={6}
          flexDirection={{ base: "column", md: "row" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Box
            flex="1"
            bg="gray.900"
            border="2px solid"
            borderColor="gray.800"
            borderRadius="2xl"
            p={6}
          >
            <Text fontSize="md" color="white" lineHeight="tall">
              Desarrollamos{" "}
              <Text as="mark" bg="orange.400" color="white" px={1}>
                diseños gráficos profesionales
              </Text>
              , realizamos{" "}
              <Text as="mark" bg="orange.400" color="white" px={1}>
                producciones fotográficas
              </Text>{" "}
              y{" "}
              <Text as="mark" bg="orange.400" color="white" px={1}>
                audiovisuales de alta calidad
              </Text>
              .
            </Text>
          </Box>

          <Box
            flex="1"
            bg="gray.900"
            border="2px solid"
            borderColor="gray.800"
            borderRadius="2xl"
            p={6}
          >
            <Text fontSize="md" color="white" lineHeight="tall">
              Brindamos soporte en la{" "}
              <Text as="mark" bg="orange.400" color="white" px={1}>
                creación de plataformas digitales y sitios web
              </Text>{" "}
              que complementan la identidad visual de la institución.
            </Text>
          </Box>
        </MotionFlex>

        {/* Sección 4: Marketing */}
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Box
            bg="gray.900"
            border="2px solid"
            borderColor="gray.800"
            borderRadius="2xl"
            p={8}
          >
            <Text fontSize="lg" color="white" lineHeight="tall" textAlign="center">
              Además, elaboramos{" "}
              <Text as="mark" bg="orange.400" color="white" px={1}>
                planes de marketing deportivo personalizados
              </Text>
              , adaptados a la realidad y objetivos de cada organización. Diseñamos{" "}
              <Text as="mark" bg="orange.400" color="white" px={1}>
                campañas específicas y acciones estratégicas
              </Text>{" "}
              orientadas a potenciar la marca institucional al máximo, mejorar el posicionamiento, 
              aumentar la visibilidad y fortalecer el vínculo con la comunidad, las marcas y los sponsors.
            </Text>
            <Text fontSize="lg" color="white" lineHeight="tall" textAlign="center" mt={4}>
              Cada proyecto es único. Por eso, realizamos presupuestos a medida, ajustándonos a las necesidades, 
              metas y posibilidades de cada institución deportiva. Nuestro compromiso es brindar soluciones integrales 
              que eleven su comunicación y consoliden su identidad dentro y fuera del campo de juego.
            </Text>
          </Box>
        </MotionBox>
      </Flex>

      {/* Scroll Indicator */}
      <MotionBox
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize={{ base: '60px', md: '100px' }}
        mt={{ base: 10, md: 20 }}
      >
        <BsChevronDoubleDown color="orange" />
      </MotionBox>
    </Flex>
  );
};

export default EntidadesDeportivas 




// import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";
// import entidades_deportivas from "../assets/entidades_deportivas.png";
// import { motion } from "framer-motion";
// import { BsChevronDoubleDown } from "react-icons/bs";
// import Contact from "../components/Contact";

// const MotionHeading = motion(Heading);
// const MotionImage = motion(Image);
// const MotionFlex = motion(Flex);
// const MotionBox = motion(Box);
// const MotionText = motion(Text);

// export const EntidadesDeportivas = () => {
//     return (       
//         <Flex
//             bg="black"
//             justifyContent="center"
//             alignItems="center"
//             gap={{ base: 10, md: 20 }}
//             flexDirection="column"
//             minHeight="100vh"
//             pt={{ base: 40, md: 60 }}
//             pb={{ base: '80px', md: '0' }}
//             px={{ base: 4, md: 0 }}
//         >
//             <Flex 
//             justifyContent="start"
//             alignItems="start"
//             gap={2}
//             flexDirection="row"
//             alignSelf="start"
//             w="100%"
//             pl={{ base: 4, md: 16, lg: '250px' }}
//             mb={{ base: 6, md: 0}}
//             >
//                 <MotionBox 
//                 w={'2px'} 
//                 h={{ base: '70px', md: '80px' }} 
//                 bg="orange.400" 
//                 mr={2}
//                 borderRadius="full"
//                 boxShadow="0px 0px 12px 1px rgba(245,160,15,0.56)"
//                 initial={{ opacity: 0, y: 80 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}   
//                 ></MotionBox>
//                 <MotionHeading
//                 as="h1"
//                     fontSize={{ base: '5xl', md: '5xl', lg: '5xl' }}
//                     fontWeight="bold"
//                 color="white"
//                 lineHeight="shorter"
//                 initial={{ opacity: 0, x: -40 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.6, duration: 0.8 }}             
//                 >
//                     Entidades&nbsp;
//                         <MotionText 
//                         fontSize={{ base: '5xl', md: '5xl', lg: '5xl' }} 
//                         as="span" 
//                         color="orange.400"
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.8, duration: 0.8 }}
//                         >
//                          Deportivas
//                         </MotionText>
//                 </MotionHeading>
//             </Flex>
//             <MotionFlex
//             justifyContent="center"
//             alignItems="center"
//             gap={{ base: 8, md: 20}}  
//             flexDirection='column'
//             mb={{ base: 20, md: '0px' }}
//             >
//                 <MotionFlex
//                 w={{ base: '100%', md: '800px' }}
//                 initial={{ opacity: 0, x: -60 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.8, duration: 1 }}
//                 viewport={{ once: true }}
//                 p={{ base: 6, md: 0 }}
//                 lineHeight={1.7}
//                 flexDirection='column'
//                 justifyContent='center'
//                 alignItems='end'
//                 gap={2}
//                 >
//                     <Text
//                         as='mark'
//                         mb={{ base: 2, md: 0 }}
//                         p={{ base: '1px', md: 2 }}
//                         bg="orange.400"
//                         fontSize="2xl"
//                         fontWeight="bold"
//                         color="white"
//                     >
//                         Potenciamos la identidad digital de tu institución deportiva
//                     </Text>
//                     <Text fontSize="lg" color="white" textAlign='end'>
//                          Brindamos un servicio integral diseñado para clubes, academias, ligas y organizaciones deportivas que buscan 
//                          fortalecer su marca en el entorno digital y proyectar una imagen profesional, moderna y coherente con sus valores.
//                     </Text>
//                 </MotionFlex>
//                 <Flex
//                     bgGradient="linear(to-br,  gray.900, black)"
//                     w={{ base: "100vw", md: "98vw" }}
//                     h={{ base: "auto", md: "500px" }}
//                     pt={0}
//                     mt={{ base: 2, md: 40 }}
//                     flexDirection='column'
//                     justifyContent='center'
//                     alignItems='center'
//                 >
//                     <Flex
//                         justifyContent="center"
//                         alignItems="center"
//                         gap={{ base: 8, md: 10 }}
//                         flexDirection={{ base: "column", md: "row" }}
//                         mb={{ base: 20, md: 10 }}
//                         mt={{ base: 2, md: 0 }}
//                     >
//                         <MotionImage
//                             src={entidades_deportivas} 
//                             alt="entidades_deportivas"
//                             w={{ base: "100%", md: "450px" }}
//                             initial={{ opacity: 0, x: -60 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ delay: 0.8, duration: 1 }}
//                             viewport={{ once: true }}
//                             mt={'-180px'}
                            
//                         />
//                         <MotionFlex
//                             justifyContent="start"
//                             alignItems='start'
//                             flexDirection="column"
//                             gap={2}
//                             w={{ base: "100%", md: "350px" }}
//                             initial={{ opacity: 0, x: 60 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ delay: 0.8, duration: 1 }}
//                             viewport={{ once: true }}
//                             mt={{ base: 2, md: '-120px' }}
//                         >
//                             <Text fontSize="lg" color="white" lineHeight={1.7} textAlign='start'>
//                                 Nuestro objetivo es acompañar a cada entidad en la construcción de una <Text as="mark" p={'2px'} color="white" bg="orange.400">estrategia de comunicación completa</Text>, que refleje su historia,
//                                 su esencia y su visión de crecimiento. 
//                             </Text>
//                         </MotionFlex>
//                     </Flex>
//                     <MotionFlex
//                     justifyContent="start"
//                     alignItems="start"
//                     flexDirection='column'
//                     w={{ base: "100%", md: "800px" }}
//                     >
//                         <Text fontSize="lg" color="white" lineHeight={1.7} textAlign='start'>
//                             También brindamos soporte en la <Text as="mark" p={'2px'} color="white" bg="orange.400">creación de plataformas digitales y sitios web</Text>
//                             que complementan la identidad visual de la institución.
//                         </Text>
//                         <Text fontSize="lg" color="white" lineHeight={1.7} textAlign='start'>
//                             Para lograrlo, desarrollamos  <Text as="mark" p={'2px'} color="white" bg="orange.400"> diseños gráficos profesionales</Text>, realizamos   <Text as="mark" p={'2px'} color="white" bg="orange.400"> producciones fotográficas</Text>
//                             y <Text as="mark" p={'2px'} color="white" bg="orange.400"> audiovisuales de alta calidad</Text>, y gestionamos la presencia en redes sociales con una mirada estratégica y actual.<br />
//                         </Text>
//                     </MotionFlex>
//                 </Flex>
//                 <MotionText
//                     w={{ base: '100%', md: '820px' }}
//                     initial={{ opacity: 0, x: -60 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.8, duration: 1 }}
//                     viewport={{ once: true }}
//                     p={{ base: 6, md: 0 }}
//                     lineHeight={1.7}
//                     fontSize="lg"
//                     color="white"
//                     textAlign='center'
//                 >
//                     Además, elaboramos  <Text as="mark" p={'2px'} color="white" bg="orange.400">planes de marketing deportivo personalizados</Text>, adaptados a la realidad y objetivos de cada organización. 
//                     Diseñamos<Text as="mark" p={'2px'} color="white" bg="orange.400"> campañas específicas y acciones estratégicas</Text> orientadas a potenciar la marca institucional al máximo, 
//                     mejorar el posicionamiento, aumentar la visibilidad y fortalecer el vínculo con la comunidad, las marcas y los sponsors.
//                     <br />
//                     Cada proyecto es único. Por eso, realizamos presupuestos a medida, ajustándonos a las necesidades, metas y posibilidades de cada institución deportiva.
//                     Nuestro compromiso es brindar soluciones integrales que eleven su comunicación y consoliden su identidad dentro y fuera del campo de juego.
//                 </MotionText>
//             </MotionFlex>
//             <MotionBox
//             animate={{ y: [0, -15, 0]}}
//             transition={{ duration: 1, repeat: Infinity}}
//             display="flex"
//             direction="row"
//             alignItems="center"
//             justifyContent="center"
//             fontSize={{ base: '60px', md: '100px' }}
//             mt={{ base: 4, md: 2}}
//             mb={{ base:-20, md: -20}}
//             >
//                 <BsChevronDoubleDown color="orange" />
//             </MotionBox>  
//             <Contact />
//         </Flex>
//     );
// };