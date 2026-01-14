import { Box, Flex, Text, Heading, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";
import entidades_deportivas from "../assets/entidades_deportivas.webp";
import Contact from "../components/Contact";
import PlanMkt from "../components/PlanMkt";


const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionImage = motion(Image);

const EntidadesDeportivas= () => {
  return (
    <Flex 
      bg="black"
      minHeight="100vh" 
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap={{ base: 10, md: 20 }}
      pt={{ base: 40, md: 60 }}
      pb={{ base: '80px', md: '0' }}
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
            fontSize={{ base: '5xl', md: '5xl', lg: '5xl' }}
            fontWeight="bold"
            lineHeight="shorter"
            mt={{ base: -2, md: 0 }}
          >
            Deportivas
          </Text>
        </MotionFlex>
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
          gap={{ base: 20, md: 8 }}
          flexDirection={{ base: "column-reverse", md: "row" }}
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
              h={{ base: "300px", sm: "400px", md: "100%" }}
              objectFit="cover"
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2 }}
              flex="1"
              position="relative"
              overflow="hidden"
            />
          {/* BOX PRINCIPAL */}
          <MotionFlex
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            flex="1"
            flexDirection="column"
            justifyContent="center"
            gap={4}
            bg="gray.900"
            border="2px solid"
            borderColor="orange.400"
            borderRadius="2xl"
            p={8}
            position="relative"
            overflow="hidden"
            
            _hover={{
                transform: "scale(1.02)",
                boxShadow: "0px 0px 20px 2px rgba(245,160,15,0.4)"
            }}
            cursor="pointer"
            role="group"
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
              transition="transform 0.7s"
              _groupHover={{
                  transform: "scale(1.5)",
              }}
            />
            
            <Box 
            position="relative" 
            zIndex={10} 
            >
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
          </MotionFlex>
        </MotionFlex>

        {/* BOX 2 */}
        <Flex
          gap={6}
          flexDirection={{ base: "column", md: "row" }}
        >
          <MotionBox
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            bg="gray.900"
            border="2px solid"
            borderColor="orange.400"
            borderRadius="2xl"
            p={6}
            textAlign={{ base: "start", md: "end" }}
            w={{ base: "100%", md: "47%" }}
          >
            <Text fontSize="md" color="white" lineHeight="tall">
              Nuestro objetivo es acompañar a cada entidad en la construcción de una{" "}
              <Text as= 'span' color="orange.400" px={1} fontSize={"lg"}>
                estrategia de comunicación completa
              </Text>
              , que refleje su historia, su esencia y su visión de crecimiento.
            </Text>
          </MotionBox>
        
          <MotionBox
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            bg="gray.900"
            border="2px solid"
            borderColor="orange.400"
            borderRadius="2xl"
            p={6}
            textAlign="start"
            w={{ base: "100%", md: "53%" }}
          >
            <Text fontSize="md" color="white" lineHeight="tall">
              Desarrollamos{" "}
              <Text as="span" color="orange.400" px={1} fontSize={"lg"}>
                diseños gráficos profesionales
              </Text>
              , realizamos{" "}
              <Text as="span" color="orange.400" px={1} fontSize={"lg"}>
                producciones fotográficas
              </Text>{" "}
              y{" "}
              <Text as="span" color="orange.400" px={1} fontSize={"lg"}>
                audiovisuales de alta calidad
              </Text>
              .
            </Text>
            <Text fontSize="md" color="white" lineHeight="tall">
              Brindamos soporte en la{" "}
              <Text as="span" color="orange.400" px={1} fontSize={"lg"}>
                creación de plataformas digitales y sitios web
              </Text>{" "}
              que complementan la identidad visual de la institución.
            </Text>
          </MotionBox>
        </Flex>

        {/* BOX 3 */}
        <PlanMkt/>
      </Flex>
      <MotionBox
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        display="flex"
        alignItems="center"
        justifyContent="start"
        fontSize={{ base: '60px', md: '80px' }}
        mt={{ base: 2, md: '-80px' }}
        h='0'      
      >
        <BsChevronDoubleDown color="orange" />
      </MotionBox>
      <Contact/>
    </Flex>
  );
};

export default EntidadesDeportivas;




