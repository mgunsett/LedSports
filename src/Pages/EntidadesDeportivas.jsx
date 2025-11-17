import { Flex, Heading, Text, Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import deportistas_planmark from "../assets/deportistas_planmark.png";
import { BsChevronDoubleDown } from "react-icons/bs";
import Contact from "../components/Contact";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionFlex = motion(Flex);

export const EntidadesDeportivas = () => {
    return (
        <Flex
            bg={'black'}
            justifyContent="center"
            alignItems="center"
            gap={20}
            flexDirection="column"
            minHeight="100vh"
            pt={60}
            pb={10}
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
                    Entidades
                    <br />
                    <MotionText
                        fontSize={{ base: '5xl', md: '5xl', lg: '6xl' }}
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
            <MotionImage
                className="shadow"
                src={deportistas_planmark}
                alt="deportistas_planmark"
                w={{ base: "100%", md: "650px" }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                viewport={{ once: true }}
                zIndex={1}
            />
            <MotionFlex
                bgGradient="linear(to-br,  gray.900, black)"
                justifyContent="center"
                alignItems="start"
                flexDirection="column"
                gap={6}
                w={{ base: "100%", md: "100%" }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                viewport={{ once: true }}
                lineHeight="45px"
                color="white"
                h="950px"
                px={'500px'}
                mt={'-180px'}
                pt={20}
            >
            <Text as='mark'  p={2} bg="orange.400" fontSize="2xl" fontWeight="bold" color="white">Potenciamos la identidad digital de tu institución deportiva</Text>
            <Text fontSize="xl" color="white" lineHeight="45px">
                Brindamos un servicio integral diseñado para clubes, academias, ligas y organizaciones deportivas que buscan fortalecer su marca en el entorno digital y 
                proyectar una imagen profesional, moderna y coherente con sus valores.
                Nuestro objetivo es acompañar a cada entidad en la construcción de una estrategia de comunicación completa, que refleje su historia, su esencia y su visión de crecimiento. 
                Para lograrlo, desarrollamos diseños gráficos profesionales, realizamos producciones fotográficas y audiovisuales de alta calidad, y gestionamos la presencia en redes sociales 
                con una mirada estratégica y actual. También brindamos soporte en la creación de plataformas digitales y sitios web que complementan la identidad visual de la institución.
                Además, elaboramos planes de marketing deportivo personalizados, adaptados a la realidad y objetivos de cada organización. Diseñamos campañas específicas y acciones estratégicas 
                orientadas a potenciar la marca institucional al máximo, mejorar el posicionamiento, aumentar la visibilidad y fortalecer el vínculo con la comunidad, las marcas y los sponsors.
                Cada proyecto es único. Por eso, realizamos presupuestos a medida, ajustándonos a las necesidades, metas y posibilidades de cada institución deportiva. Nuestro compromiso es 
                brindar soluciones integrales que eleven su comunicación y consoliden su identidad dentro y fuera del campo de juego.
            </Text>
            </MotionFlex>
            <MotionBox
                animate={{ y: [0, -15, 0]}}
                transition={{ duration: 1, repeat: Infinity}}
                display="flex"
                direction="row"
                alignItems="center"
                justifyContent="center"
                fontSize={{ base: '50px', md: '100px' }}
                mt={'-120px'}
            >
                <BsChevronDoubleDown color="orange" />
            </MotionBox>  
            <Contact />
        </Flex>
    );
};