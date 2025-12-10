import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";
import agentes from "../assets/agentes.webp";
import agentes2 from "../assets/agentes2.webp";
import agentes1 from "../assets/agentes1.webp";
import { motion } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";
import Contact from "../components/Contact";

const MotionHeading = motion(Heading);
const MotionImage = motion(Image);
const MotionFlex = motion(Flex);
const MotionBox = motion(Box);
const MotionText = motion(Text);

export const Agentes = () => {
    return (       
        <Flex
            bg="black"
            justifyContent="center"
            alignItems="center"
            gap={{ base: 10, md: 20 }}
            flexDirection="column"
            minHeight="100vh"
            pt={{ base: 40, md: 60 }}
            pb={{ base: '80px', md: '0' }}
            px={{ base: 4, md: 0 }}
        >
            <Flex 
            justifyContent="start"
            alignItems="start"
            gap={2}
            flexDirection="row"
            alignSelf="start"
            w="100%"
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
                    fontSize="5xl"
                    fontWeight="bold"
                    color="white"
                    lineHeight="shorter"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}             
                >
                    Agen
                        <MotionText 
                        fontSize="5xl"  
                        as="span" 
                        color="orange.400"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        >
                        tes
                        </MotionText>
                </MotionHeading>
            </Flex>
            <Flex
            justifyContent="center"
            alignItems="center"
            gap={{ base: 8, md: 20 }}
            flexDirection={{ base: "column", md: "row" }}
            mb={{ base: 20, md: '200px' }}
            >   
                <MotionImage
                    src={agentes2}
                    alt="agentes"
                    w={{ base: "100%", md: "400px" }}
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    viewport={{ once: true }}
                />
                <MotionFlex
                    justifyContent="start"
                    alignItems='start'
                    flexDirection="column"
                    gap={2}
                    w={{ base: "100%", md: "400px" }}
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    viewport={{ once: true }}
                    p={{base: 6, md: 0}}
                >
                    <Text 
                    as='mark'
                    mb={{base: 2, md: 0}} 
                    p={{base: '1px', md: 2}} 
                    bg="orange.400" 
                    fontSize="xl" 
                    fontWeight="bold" 
                    color="white"
                    >
                        Impulsamos la imagen digital
                    </Text>
                    <Text fontSize="xl" fontWeight="bold" color="white">de tus representados y tu agencia</Text>
                    <Text fontSize="lg" color="white">
                        Ofrecemos un servicio integral pensado para agentes, representantes y agencias deportivas que buscan potenciar 
                        la presencia digital tanto de los deportistas que forman parte de su equipo como de su propia marca institucional.
                    </Text>
                </MotionFlex>
            </Flex>
            <Box 
            bgGradient="linear(to-br,  gray.900, black)"
            w={{ base: "100vw", md: "100%" }}
            h={{ base: "auto", md: "500px" }}
            pt={0}
            >
            <Flex
            justifyContent="center"
            alignItems="center"
            gap={{ base: 10, md: '150px' }}
            flexDirection={{ base: "column-reverse", md: "row" }}
            >   
                <MotionFlex
                    justifyContent="start"
                    alignItems="start"
                    flexDirection="column"
                    gap={2}
                    w={{ base: "100%", md: "350px" }}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    viewport={{ once: true }}
                    lineHeight="35px"
                    px={{ base: 6, md: 0 }}
                    pb={{ base: 6, md: 0 }}
                >
                    <Text fontSize="lg" color="white"> Entendemos que la comunicación es una herramienta clave dentro del deporte profesional. 
                    Por eso, desarrollamos estrategias visuales y de marketing que permiten
                    <Text as='mark' p={{base: '1px', md: '3px'}} bg="orange.400" color="white"> profesionalizar la imagen de cada jugador</Text> destacando su trayectoria, logros y valores a través de 
                    <Text as='mark' p={{base: '1px', md: '3px'}} bg="orange.400" color="white">contenidos de calidad</Text>, diseños 
                    <Text as='mark' p={{base: '1px', md: '3px'}} bg="orange.400" color="white">gráficos personalizados</Text>, <Text as='mark' p={{base: '1px', md: '3px'}} bg="orange.400" color="white">producciones fotográficas y audiovisuales</Text>, y una gestión estratégica de redes sociales que refuerza su marca personal.</Text>
                </MotionFlex>
                <MotionImage
                    src={agentes}
                    alt="agentes"
                    w={{ base: "80%", md: "350px" }}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    viewport={{ once: true }}
                    mt={{ base: -20, md: -20 }}
                    filter="drop-shadow(0px 0px 12px rgba(245,160,15,0.86))"
                    // boxShadow="0px 0px 12px 1px rgba(245,160,15,0.86)" 
                />
            </Flex>
            </Box>
            <Flex
            justifyContent="center"
            alignItems="center"
            gap={{ base: 10, md: '100px' }}
            flexDirection={{ base: "column", md: "row" }}
            mt={{ base: 12, md: '100px' }}
            >   
                <MotionImage
                    src={agentes1}
                    alt="agentes"
                    w={{ base: "100%", md: "400px" }}
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    viewport={{ once: true }}
                />
                <MotionFlex
                    justifyContent="start"
                    alignItems="start"
                    flexDirection="column"
                    gap={2}
                    w={{ base: "100%", md: "420px" }}
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    viewport={{ once: true }}
                    mt={2}
                    lineHeight={{ base: "30px", md: "35px" }}
                    px={{ base: 4, md: 0 }}
                >
                    <Text fontSize="lg" color="white">A su vez, trabajamos junto a las agencias para 
                     <Text as='mark' p={{ base: '1px', md: '3px' }} bg="orange.400" color="white">fortalecer su identidad corporativa</Text> dentro del mercado deportivo, 
                    generando una presencia sólida, moderna y diferenciada. Creamos 
                    <Text as='mark' p={{ base: '1px', md: '3px' }} bg="orange.400" color="white"> campañas personalizadas, planes de marketing</Text> y materiales visuales que consolidan
                    la imagen profesional de la representación, potenciando su alcance y su posicionamiento.
                    Cada servicio se adapta a las necesidades y objetivos de cada agente o agencia, ofreciendo
                    <Text as='mark' p={{ base: '1px', md: '3px' }} bg="orange.400" color="white"> presupuestos a medida</Text> y soluciones integrales orientadas a maximizar 
                    el valor comunicacional de sus representados y de la marca que los respalda.
                    </Text>
                </MotionFlex>
            </Flex>
            <MotionBox
            animate={{ y: [0, -15, 0]}}
            transition={{ duration: 1, repeat: Infinity}}
            display="flex"
            direction="row"
            alignItems="center"
            justifyContent="center"
            fontSize={{ base: '60px', md: '100px' }}
            mt={{ base: 4, md: 2}}
            mb={{ base:-20, md: -20}}
            >
                <BsChevronDoubleDown color="orange" />
            </MotionBox>  
            <Contact />
        </Flex>
    );
};