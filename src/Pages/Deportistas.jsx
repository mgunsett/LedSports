import { Flex, Heading, Text, Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "./Deportistas.css";
import deportistas_gestion360 from "../assets/deportistas_gestion360.png";
import deportistas_logos from "../assets/deportistas_logos.png";
import deportistas_matchday from "../assets/deportistas_matchday.png";
import deportistas_postpartido from "../assets/deportistas_postpartido.png";
import deportistas_aniversario from "../assets/deportistas_aniversario.png";
import deportistas_perfil from "../assets/deportistas_perfil.png";
import deportistas_perfil3 from "../assets/deportistas_perfil3.png";
import deportistas_perfil4 from "../assets/deportistas_perfil4.png";
import deportistas_fotografia from "../assets/deportistas_fotografia.png";
import deportistas_estadis from "../assets/deportistas_estadis.png";
import deportistas_estadis2 from "../assets/deportistas_estadis2.png";
import deportistas_carpetacom from "../assets/deportistas_carpetacom.png";
import deportistas_planmark from "../assets/deportistas_planmark.png";
import { BsChevronDoubleDown } from "react-icons/bs";
import Contact from "../components/Contact";

const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionBox = motion(Box);
const MotionImage = motion(Image);

export const Deportistas = () => {
    return (
        <Flex 
        bg="black" 
        minHeight="100vh" 
        minWidth="70vw"
        pt={60}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        >
            <Flex 
                justifyContent="start"
                alignItems="start"
                gap={2}
                flexDirection="row"
                alignSelf="start"
                pl={'400px'}
                mb={10}
            >
                <MotionBox
                    w={'2px'}
                    h={'100px'}
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
                    fontSize={{ base: '5xl', md: '5xl', lg: '6xl' }}
                    fontWeight="bold"
                    color="white"
                    lineHeight="shorter"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                >
                    Depor
                    <MotionText
                        fontSize={{ base: '5xl', md: '5xl', lg: '6xl' }}
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
            <MotionFlex
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                my={20}
                w={{ base: "100%", md: "50%" }}
                fontSize="2xl" 
                fontWeight="bold" 
                fontFamily="Stack Sans Headline, sans-serif" 
                color="white"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
            >
                <Text textAlign="center">
                Desde nuestros inicios en 2020, hemos trabajado en la marca personal de más de 
                <Text as='mark' p={'3px'} bg="orange.400" color="white" mx={1}>350 deportistas</Text> que confiaron en nosotros.
                A ellos los acompañamos en las principales competiciones de América y el mundo.
                </Text>
            </MotionFlex>
            <MotionFlex
                justifyContent="center"
                alignItems="center"
                my={20}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                w={{ base: "100%", md: "70%" }}
            >
                <Text textAlign="center" fontSize="6xl" fontWeight="bold" fontFamily="Stack Sans Headline, sans-serif" color="white" mt={20}>
                    Así potenciamos 
                </Text>
                <Text color="orange.400" fontSize="6xl" fontWeight="bold" fontFamily="Stack Sans Headline, sans-serif" mt={20}>Tú marca</Text>
            </MotionFlex>
            <Flex
                className="bordersBox2"
                w={{ base: "100%", md: "70%" }}
                h="500px"
                justifyContent="space-around"
                alignItems="center"
                gap={20 }
                fontFamily="Stack Sans Headline, sans-serif"
                color="white"
                p={10}
            >
                <MotionImage 
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
                src={deportistas_planmark}
                alt="deportistas_planmark" 
                w="500px" 
                h="500px" 
                objectFit="contain" 
                filter="drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.59))"
                /> 
                <MotionFlex
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    viewport={{ once: true }}
                    justifyContent="start"
                    alignItems="end"
                    flexDirection="column"
                    gap={2}
                    alignSelf="start"
                    w="500px"
                >
                    <Text textAlign="start" fontSize="4xl" fontWeight="bold"  as='mark' p={'3px'} bg="orange.400" color="white" mx={1} mt={20}>
                        Plan de Marketing
                    </Text>
                    <Text fontSize="xl" textAlign="end">
                        Diseñamos el plan de marketing y comunicación adaptado a tu persona para generar el contenido adecuado para potenciar tu marca persona.
                    </Text>
                </MotionFlex>
            </Flex>
            <Flex
                className="bordersBox"
                w={{ base: "100%", md: "70%" }}
                h="500px"
                justifyContent="space-around"
                alignItems="center"
                gap={20 }
                fontFamily="Stack Sans Headline, sans-serif"
                color="white"
                p={10}
            >
                <MotionFlex
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    viewport={{ once: true }}
                    justifyContent="start"
                    alignItems="start"
                    flexDirection="column"
                    gap={2}
                    alignSelf="start"
                    w="500px"
                >
                    <Text textAlign="start" fontSize="4xl" fontWeight="bold"  as='mark' p={'3px'} bg="orange.400" color="white" mx={1} mt={20}>
                        Gestión 360º
                    </Text>
                    <Text fontSize="xl">
                        Generamos contenido adaptado para todas las redes sociales existentes.
                    </Text>
                </MotionFlex>
                <MotionImage 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
                src={deportistas_gestion360}
                alt="deportistas_gestion360" 
                w="500px" 
                h="500px" 
                objectFit="contain" 
                /> 
            </Flex>
            <Flex
                className="bordersBox2"
                w={{ base: "100%", md: "70%" }}
                h="500px"
                justifyContent="space-around"
                alignItems="center"
                gap={20 }
                fontFamily="Stack Sans Headline, sans-serif"
                color="white"
                p={10}
            >
                <MotionImage 
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
                src={deportistas_logos}
                alt="deportistas_logos" 
                w="500px" 
                h="500px" 
                objectFit="contain" 
                filter="drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.59))"
                /> 
                <MotionFlex
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    viewport={{ once: true }}
                    justifyContent="start"
                    alignItems="end"
                    flexDirection="column"
                    gap={2}
                    alignSelf="start"
                    w="500px"
                >
                    <Text textAlign="start" fontSize="4xl" fontWeight="bold"  as='mark' p={'3px'} bg="orange.400" color="white" mx={1} mt={20}>
                        Logos
                    </Text>
                    <Text fontSize="xl" textAlign="end">
                        El Logo es el principal diferenciador de una marca, es por ello que crearemos el tuyo propio para identificar todo tu contenido.
                    </Text>
                </MotionFlex>
            </Flex>
            <Flex
                className="bordersBox"
                w={{ base: "100%", md: "70%" }}
                h="750px"
                justifyContent="space-around"
                alignItems="center"
                gap={20}
                fontFamily="Stack Sans Headline, sans-serif"
                color="white"
                p={20}
            >
                <MotionFlex
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    viewport={{ once: true }}
                    justifyContent="start"
                    alignItems="start"
                    flexDirection="column"
                    gap={2}
                    alignSelf="start"
                    w="400px"
                >
                    <Text textAlign="start" fontSize="4xl" fontWeight="bold"  as='mark' p={'3px'} bg="orange.400" color="white" mx={1} mt={20}>
                        Matchday
                    </Text>
                    <Text fontSize="xl">
                        Anuncia tu próximo partido con el equipo de la mejor manera a través de placas estáticas o animadas.
                    </Text>
                </MotionFlex>
                <MotionImage 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
                src={deportistas_matchday}
                alt="deportistas_matchday" 
                w="600px" 
                h="650px" 
                objectFit="contain" 
                /> 
            </Flex>
            <Flex
                className="bordersBox2"
                w={{ base: "100%", md: "70%" }}
                h="800px"
                justifyContent="space-around"
                alignItems="center"
                gap={20}
                fontFamily="Stack Sans Headline, sans-serif"
                color="white"
                p={10}
            >
                <MotionImage 
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
                src={deportistas_postpartido}
                alt="deportistas_postpartido" 
                w="600px" 
                h="650px" 
                objectFit="contain" 
                filter="drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.59))"
                /> 
                <MotionFlex
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    viewport={{ once: true }}
                    justifyContent="start"
                    alignItems="end"
                    flexDirection="column"
                    gap={2}
                    alignSelf="start"
                    w="400px"
                >
                    <Text textAlign="start" fontSize="4xl" fontWeight="bold"  as='mark' p={'3px'} bg="orange.400" color="white" mx={1} mt={20}>
                        Publicaciones Post Partido
                    </Text>
                    <Text fontSize="xl" textAlign="end">
                        Comunica tus sensaciones luego de disputar un encuentro de la manera más profesional a través de imágenes o videos.
                    </Text>
                </MotionFlex>
            </Flex>
            <Flex
                className="bordersBox"
                w={{ base: "100%", md: "70%" }}
                h="750px"
                justifyContent="space-around"
                alignItems="center"
                gap={20}
                fontFamily="Stack Sans Headline, sans-serif"
                color="white"
                p={20}
            >
                <MotionFlex
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    viewport={{ once: true }}
                    justifyContent="start"
                    alignItems="start"
                    flexDirection="column"
                    gap={2}
                    alignSelf="start"
                    w="400px"
                >
                    <Text textAlign="start" fontSize="4xl" fontWeight="bold"  as='mark' p={'3px'} bg="orange.400" color="white" mx={1} mt={20}>
                        Conmemorativas
                    </Text>
                    <Text fontSize="xl">
                        Recorda esas fechas que son importantes en tu carrera o saluda a los clubes anteriores o actual por su aniversario, también a través de contenido en imágenes o videos.
                    </Text>
                </MotionFlex>
                <MotionImage 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
                src={deportistas_aniversario}
                alt="deportistas_aniversario" 
                w="600px" 
                h="650px" 
                objectFit="contain" 
                /> 
            </Flex>
            <Flex
                className="bordersBox2"
                w={{ base: "100%", md: "70%" }}
                h="900px"
                justifyContent="space-around"
                alignItems="start"
                gap={20}
                fontFamily="Stack Sans Headline, sans-serif"
                color="white"
                p={10}
                position="relative"
            >   
                <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="start"
                >
                    <MotionImage
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        viewport={{ once: true }}
                        src={deportistas_perfil}
                        alt="deportistas_perfil"
                        w="500px"
                        h="600px"
                        objectFit="contain"
                        filter="drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.59))"
                    />
                    <MotionImage
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        viewport={{ once: true }}
                        src={deportistas_perfil3}
                        alt="deportistas_perfil3"
                        w="550px"
                        h="600px"
                        objectFit="contain"
                        position="absolute"
                        bottom="-60px"
                        left="110px"
                    /> 
                    <MotionImage
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        viewport={{ once: true }}
                        src={deportistas_perfil4}
                        alt="deportistas_perfil4"
                        w="550px"
                        h="600px"
                        objectFit="contain"
                        position="absolute"
                        bottom="-60px"
                        right="80px"
                    /> 
                </Flex>
                <MotionFlex
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    viewport={{ once: true }}
                    justifyContent="start"
                    alignItems="end"
                    flexDirection="column"
                    gap={2}
                    alignSelf="start"
                    w="400px"
                    pt={10}
                >
                    <Text textAlign="center" fontSize="4xl" fontWeight="bold"  as='mark' p={'3px'} bg="orange.400" color="white" mx={1} mt={20}>
                        Optimización de Perfil
                    </Text>
                    <Text fontSize="xl" textAlign="end" >
                        Biografia, Portada principal y destacadas: Organizamos y tu perfil generando el copy para tu biografia, 
                        diseñando tu portada principal para dar la bienvenida e historias destacadas de Instagram por etapas de tu carrera 
                        (clubes, selecciones, eventos o hitos). Cada portada cuenta parte de tu recorrido, manteniendo una estética visual uniforme y profesional.
                    </Text>
                </MotionFlex>
            </Flex>
            <Flex
                className="bordersBox"
                w={{ base: "100%", md: "70%" }}
                h="550px"
                justifyContent="space-around"
                alignItems="center"
                gap={20}
                fontFamily="Stack Sans Headline, sans-serif"
                color="white"
                p={20}
            >
                <MotionFlex
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    viewport={{ once: true }}
                    justifyContent="start"
                    alignItems="start"
                    flexDirection="column"
                    gap={2}
                    alignSelf="start"
                    w="400px"
                >
                    <Text textAlign="start" fontSize="4xl" fontWeight="bold"  as='mark' p={'3px'} bg="orange.400" color="white" mx={1} mt={20}>
                        Fotografia y filmación
                    </Text>
                    <Text fontSize="xl">
                        Contamos con fotografos y filmmakers distribuidos estrategicamente en todo el mundo para poder general contenido personalizado, profesional y de alta calidad.
                    </Text>
                </MotionFlex>
                <MotionImage 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
                src={deportistas_fotografia}
                alt="deportistas_fotografia" 
                w="400px" 
                h="400px" 
                objectFit="contain" 
                filter="drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.59))"
                /> 
            </Flex>
            <Flex
                className="bordersBox2"
                w={{ base: "100%", md: "70%" }}
                h="700px"
                justifyContent="center"
                alignItems="center"
                fontFamily="Stack Sans Headline, sans-serif"
                color="white"
                gap={20}
            >
                <Flex
                w='600px'
                justifyContent="center"
                alignItems="start"
                alignSelf="start"
                >
                    <MotionImage
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        viewport={{ once: true }}
                        src={deportistas_estadis}
                        alt="deportistas_estadis"
                        w="500px"
                        h="550px"
                        objectFit="contain"
                        alignSelf="flex-start"
                    />
                    <MotionImage
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        viewport={{ once: true }}
                        src={deportistas_estadis2}
                        alt="deportistas_estadis2"
                        w="500px"
                        h="550px"
                        objectFit="contain"
                        alignSelf="flex-start"
                    /> 
                </Flex>
                <MotionFlex
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    viewport={{ once: true }}
                    justifyContent="start"
                    alignItems="end"
                    flexDirection="column"
                    gap={2}
                    alignSelf="flex-start"
                    w="350px"
                    mt={'180px'}
                    ml={'10px'}
                >
                    <Text textAlign="start" fontSize="4xl" fontWeight="bold"  as='mark' p={'3px'} bg="orange.400" color="white" mx={1}>
                        Estadísticas
                    </Text>
                    <Text fontSize="xl" textAlign="end">
                       Registramos y analizamos tus estadísticas deportivas partido a partido o de forma mensual. Transformamos los datos en información visual clara y profesional para que puedas mostrar tu rendimiento, progresos y logros en cada etapa de tu carrera.

                    </Text>
                </MotionFlex>
            </Flex>
             <Flex
                className="bordersBox"
                w={{ base: "100%", md: "70%" }}
                h="550px"
                justifyContent="space-around"
                alignItems="center"
                gap={6}
                fontFamily="Stack Sans Headline, sans-serif"
                color="white"
                p={20}
            >
                <MotionFlex
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    viewport={{ once: true }}
                    justifyContent="start"
                    alignItems="start"
                    flexDirection="column"
                    gap={2}
                    alignSelf="start"
                    w="400px"
                >
                    <Text textAlign="start" fontSize="4xl" fontWeight="bold"  as='mark' p={'3px'} bg="orange.400" color="white" mx={1} mt={20}>
                        Carpeta comercial
                    </Text>
                    <Text fontSize="xl">
                        Creamos tu carpeta comercial donde destacamos tus principales beneficios como deportista y persona, para de esta manera poder 
                        acercarla a marcas que quieran invertir en tu imagen.
                    </Text>
                </MotionFlex>
                <MotionImage 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
                src={deportistas_carpetacom}
                alt="deportistas_carpetacom" 
                w="400px" 
                h="400px" 
                objectFit="contain" 
                /> 
            </Flex>
            <MotionBox
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                display="flex"
                direction="row"
                alignItems="center"
                justifyContent="center"
                fontSize={{ base: '50px', md: '100px' }}
                mt={'100px'}
            >
                <BsChevronDoubleDown color="orange" />
            </MotionBox> 
            <Contact/>
        </Flex>
    );
};