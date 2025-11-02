import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";
import agentes from "../assets/agentes.png";
import agentes2 from "../assets/agentes2.png";
import agentes1 from "../assets/agentes1.png";
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
            bg="blackAlpha.900"
            justifyContent="center"
            alignItems="center"
            gap={20}
            flexDirection="column"
            minHeight="100vh"
            pt={60}
            pb={'400px'}
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
                transition={{ delay: 0.6, duration: 0.8 }}             
                >
                    Agen
                        <MotionText 
                        fontSize={{ base: '5xl', md: '5xl', lg: '6xl' }} 
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
            gap={20}
            flexDirection={{ base: "column", md: "row" }}
            mb={'200px'}
            >   
                <MotionImage
                    src={agentes2}
                    alt="agentes"
                    w={{ base: "100%", md: "570px" }}
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    viewport={{ once: true }}
                />
                <MotionFlex
                    justifyContent="start"
                    alignItems="start"
                    flexDirection="column"
                    gap={2}
                    w={{ base: "100%", md: "500px" }}
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    viewport={{ once: true }}
                >
                    <Text as='mark'  p={2} bg="orange.400" fontSize="2xl" fontWeight="bold" color="white">Impulsamos la imagen digital</Text>
                    <Text fontSize="2xl" fontWeight="bold" color="white">de tus representados y tu agencia</Text>
                    <Text fontSize="xl" color="white"> Ofrecemos un servicio integral pensado para agentes, representantes y agencias deportivas que buscan potenciar la presencia digital tanto de los deportistas que forman parte de su equipo como de su propia marca institucional.</Text>
                </MotionFlex>
            </Flex>
            <Box 
            bgGradient="linear(to-br,  gray.900, black)"
            w="100%"
            h="600px"
            pt={0}
            >
            <Flex
            justifyContent="center"
            alignItems="center"
            gap={'150px'}
            flexDirection={{ base: "column", md: "row" }}
            >   
                <MotionFlex
                    justifyContent="start"
                    alignItems="start"
                    flexDirection="column"
                    gap={2}
                    w={{ base: "100%", md: "400px" }}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    viewport={{ once: true }}
                    mt={-2}
                    lineHeight="35px"
                >
                    <Text fontSize="xl" color="white"> Entendemos que la comunicación es una herramienta clave dentro del deporte profesional. 
                    Por eso, desarrollamos estrategias visuales y de marketing que permiten
                    <Text as='mark' p={'3px'} bg="orange.400" color="white"> profesionalizar la imagen de cada jugador</Text> destacando su trayectoria, logros y valores a través de 
                    <Text as='mark' p={'3px'} bg="orange.400" color="white">contenidos de calidad</Text>, diseños 
                    <Text as='mark' p={'3px'} bg="orange.400" color="white">gráficos personalizados</Text>, <Text as='mark' p={'3px'} bg="orange.400" color="white">producciones fotográficas y audiovisuales</Text>, y una gestión estratégica de redes sociales que refuerza su marca personal.</Text>
                </MotionFlex>
                <MotionImage
                    src={agentes}
                    alt="agentes"
                    w={{ base: "100%", md: "450px" }}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    viewport={{ once: true }}
                    mt={-20}
                    boxShadow="0px 0px 12px 1px rgba(245,160,15,0.86)" 
                />
            </Flex>
            </Box>
            <Flex
            justifyContent="center"
            alignItems="center"
            gap={'150px'}
            flexDirection={{ base: "column", md: "row" }}
            mt={'180px'}
            >   
                <MotionImage
                    src={agentes1}
                    alt="agentes"
                    w={{ base: "100%", md: "590px" }}
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
                    w={{ base: "100%", md: "500px" }}
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    viewport={{ once: true }}
                    mt={2}
                    lineHeight="38px"
                >
                    <Text fontSize="xl" color="white">A su vez, trabajamos junto a las agencias para 
                    <Text as='mark' p={'3px'} bg="orange.400" color="white"> fortalecer su identidad corporativa</Text> dentro del mercado deportivo, 
                    generando una presencia sólida, moderna y diferenciada. Creamos 
                    <Text as='mark' p={'3px'} bg="orange.400" color="white"> campañas personalizadas, planes de marketing</Text> y materiales visuales que consolidan
                    la imagen profesional de la representación, potenciando su alcance y su posicionamiento.
                    Cada servicio se adapta a las necesidades y objetivos de cada agente o agencia, ofreciendo
                    <Text as='mark' p={'3px'} bg="orange.400" color="white"> presupuestos a medida</Text> y soluciones integrales orientadas a maximizar 
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
            fontSize={{ base: '50px', md: '100px' }}
            >
                <BsChevronDoubleDown color="orange" />
            </MotionBox>  
            <Contact />
        </Flex>
    );
};