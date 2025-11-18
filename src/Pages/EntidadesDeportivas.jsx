import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";
import entidades_deportivas from "../assets/entidades_deportivas.png";
import { motion } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";
import Contact from "../components/Contact";

const MotionHeading = motion(Heading);
const MotionImage = motion(Image);
const MotionFlex = motion(Flex);
const MotionBox = motion(Box);
const MotionText = motion(Text);

export const EntidadesDeportivas = () => {
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
            mb={{ base: 6, md: 0}}
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
                    fontSize={{ base: '5xl', md: '5xl', lg: '5xl' }}
                    fontWeight="bold"
                color="white"
                lineHeight="shorter"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}             
                >
                    Entidades&nbsp;
                        <MotionText 
                        fontSize={{ base: '5xl', md: '5xl', lg: '5xl' }} 
                        as="span" 
                        color="orange.400"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        >
                         Deportivas
                        </MotionText>
                </MotionHeading>
            </Flex>
            <MotionFlex
            justifyContent="center"
            alignItems="center"
            gap={{ base: 8, md: 20}}  
            flexDirection='column'
            mb={{ base: 20, md: '0px' }}
            >
                <MotionFlex
                w={{ base: '100%', md: '800px' }}
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                viewport={{ once: true }}
                p={{ base: 6, md: 0 }}
                lineHeight={1.7}
                flexDirection='column'
                justifyContent='center'
                alignItems='end'
                gap={2}
                >
                    <Text
                        as='mark'
                        mb={{ base: 2, md: 0 }}
                        p={{ base: '1px', md: 2 }}
                        bg="orange.400"
                        fontSize="2xl"
                        fontWeight="bold"
                        color="white"
                    >
                        Potenciamos la identidad digital de tu institución deportiva
                    </Text>
                    <Text fontSize="lg" color="white" textAlign='end'>
                         Brindamos un servicio integral diseñado para clubes, academias, ligas y organizaciones deportivas que buscan 
                         fortalecer su marca en el entorno digital y proyectar una imagen profesional, moderna y coherente con sus valores.
                    </Text>
                </MotionFlex>
                <Flex
                    bgGradient="linear(to-br,  gray.900, black)"
                    w={{ base: "100vw", md: "98vw" }}
                    h={{ base: "auto", md: "500px" }}
                    pt={0}
                    mt={{ base: 2, md: 40 }}
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Flex
                        justifyContent="center"
                        alignItems="center"
                        gap={{ base: 8, md: 10 }}
                        flexDirection={{ base: "column", md: "row" }}
                        mb={{ base: 20, md: 10 }}
                        mt={{ base: 2, md: 0 }}
                    >
                        <MotionImage
                            src={entidades_deportivas} 
                            alt="entidades_deportivas"
                            w={{ base: "100%", md: "450px" }}
                            initial={{ opacity: 0, x: -60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            viewport={{ once: true }}
                            mt={'-180px'}
                            
                        />
                        <MotionFlex
                            justifyContent="start"
                            alignItems='start'
                            flexDirection="column"
                            gap={2}
                            w={{ base: "100%", md: "350px" }}
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            viewport={{ once: true }}
                            mt={{ base: 2, md: '-120px' }}
                        >
                            <Text fontSize="lg" color="white" lineHeight={1.7} textAlign='start'>
                                Nuestro objetivo es acompañar a cada entidad en la construcción de una <Text as="mark" p={'2px'} color="white" bg="orange.400">estrategia de comunicación completa</Text>, que refleje su historia,
                                su esencia y su visión de crecimiento. 
                            </Text>
                        </MotionFlex>
                    </Flex>
                    <MotionFlex
                    justifyContent="start"
                    alignItems="start"
                    flexDirection='column'
                    w={{ base: "100%", md: "800px" }}
                    >
                        <Text fontSize="lg" color="white" lineHeight={1.7} textAlign='start'>
                            También brindamos soporte en la <Text as="mark" p={'2px'} color="white" bg="orange.400">creación de plataformas digitales y sitios web</Text>
                            que complementan la identidad visual de la institución.
                        </Text>
                        <Text fontSize="lg" color="white" lineHeight={1.7} textAlign='start'>
                            Para lograrlo, desarrollamos  <Text as="mark" p={'2px'} color="white" bg="orange.400"> diseños gráficos profesionales</Text>, realizamos   <Text as="mark" p={'2px'} color="white" bg="orange.400"> producciones fotográficas</Text>
                            y <Text as="mark" p={'2px'} color="white" bg="orange.400"> audiovisuales de alta calidad</Text>, y gestionamos la presencia en redes sociales con una mirada estratégica y actual.<br />
                        </Text>
                    </MotionFlex>
                </Flex>
                <MotionText
                    w={{ base: '100%', md: '820px' }}
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    viewport={{ once: true }}
                    p={{ base: 6, md: 0 }}
                    lineHeight={1.7}
                    fontSize="lg"
                    color="white"
                    textAlign='center'
                >
                    Además, elaboramos  <Text as="mark" p={'2px'} color="white" bg="orange.400">planes de marketing deportivo personalizados</Text>, adaptados a la realidad y objetivos de cada organización. 
                    Diseñamos<Text as="mark" p={'2px'} color="white" bg="orange.400"> campañas específicas y acciones estratégicas</Text> orientadas a potenciar la marca institucional al máximo, 
                    mejorar el posicionamiento, aumentar la visibilidad y fortalecer el vínculo con la comunidad, las marcas y los sponsors.
                    <br />
                    Cada proyecto es único. Por eso, realizamos presupuestos a medida, ajustándonos a las necesidades, metas y posibilidades de cada institución deportiva.
                    Nuestro compromiso es brindar soluciones integrales que eleven su comunicación y consoliden su identidad dentro y fuera del campo de juego.
                </MotionText>
            </MotionFlex>
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