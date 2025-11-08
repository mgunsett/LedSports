import { Flex, Text, Heading, Box, Image } from "@chakra-ui/react";  
import { motion } from "framer-motion";
import marcas from "../assets/marcas.png";
import { BsChevronDoubleDown } from "react-icons/bs";
import Contact from "../components/Contact";



const MotionHeading = motion(Heading);
const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);
const MotionImage = motion(Image);

export const Marcas = () => {
    return (
        <Flex 
        bg="black"
        minHeight="100vh" 
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap={20}
        pt={60}
        pb={'100px'}
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
                    Mar
                    <MotionText
                        fontSize={{ base: '5xl', md: '5xl', lg: '6xl' }}
                        as="span"
                        color="orange.400"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        cas
                    </MotionText>
                </MotionHeading>
            </Flex>
             <Flex
                justifyContent="center"
                alignItems="center"
                gap={20}
                flexDirection={{ base: "column", md: "row" }}
                w={{ base: "100%", md: "60%" }}
            >
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
                    lineHeight="40px"
                    
                >
                    <Text fontSize="3xl" fontWeight="bold"fontFamily="Stack Sans Headline, sans-serif" color="orange.400">
                        Unimos marcas y deportistas para generar impacto real
                    </Text>
                    <Text fontSize="xl" color="white"> 
                        Nuestro servicio está diseñado para marcas que buscan potenciar su presencia a través del deporte y conectar con su 
                        público desde la emoción, la credibilidad y la pasión.
                    </Text> 
                </MotionFlex>
                <MotionImage
                    src={marcas}
                    alt="marcas"
                    w={{ base: "100%", md: "570px" }}
                    h={{ base: "auto", md: "750px" }}
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    viewport={{ once: true }}
                />
            </Flex>
            <MotionFlex
                justifyContent="center"
                alignItems="stretch"
                flexWrap="wrap"
                gap={2}
              
                w={{ base: "100%", md: "60%" }}
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{ delay: 0.3, duration: 1 }}
                viewport={{ once: true }}  
                color="white"
                fontFamily="Stack Sans Headline, sans-serif"
            >
                <MotionBox
                    w={{ base: "100%", md: "48%" }}
                    p={10}
                    pr={4}
                    border="1px solid"
                    borderColor="orange.400"
                    borderRadius="md"
                    textAlign="end"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1}}
                    viewport={{ once: true }}
                    _hover={{
                        boxShadow: "0px 0px 12px 1px rgba(245,160,15,0.56)",
                    }}
                >
                    <Text fontSize="xl" lineHeight="40px">
                        Actuamos como <Text as='mark' p={'3px'} bg="orange.400" color="white"> nexo estratégico entre las marcas y los deportistas</Text> que mejor representan sus valores e identidad. 
                        Gracias a nuestra red de atletas reconocidos, ayudamos a cada marca a identificar al perfil ideal para transmitir su mensaje de manera auténtica y efectiva. 
                        Creamos vínculos sólidos y colaboraciones que fortalecen el posicionamiento, amplían el alcance y generan una conexión genuina con las audiencias.
                    </Text>
                </MotionBox>
                <MotionBox
                    w={{ base: "100%", md: "48%" }}
                    p={10}
                    pl={4}
                    border="1px solid"
                    borderColor="orange.400"
                    borderRadius="md"
                    textAlign="start"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.1 }}
                    viewport={{ once: true }}
                    _hover={{
                        boxShadow: "0px 0px 12px 1px rgba(245,160,15,0.56)",
                    }}
                >
                    <Text fontSize="xl" lineHeight="40px">
                        Nos encargamos de todo el proceso: desde la <Text as='mark' p={'3px'} bg="orange.400" color="white"> selección y vinculación con el deportista adecuado</Text>, hasta la<Text as='mark' p={'3px'} bg="orange.400" color="white"> planificación de acciones conjuntas</Text>, 
                        incluyendo la<Text as='mark' p={'3px'} bg="orange.400" color="white"> producción de contenido profesionalizado</Text> para que cada publicación, campaña o colaboración mantenga la estética y el mensaje de la marca.
                    </Text>
                </MotionBox>
                <MotionBox 
                    w={{ base: "100%", md: "48%" }}
                    p={10}
                    pr={4}
                    border="1px solid"
                    borderColor="orange.400"
                    borderRadius="md"
                    textAlign="end"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    _hover={{
                        boxShadow: "0px 0px 12px 1px rgba(245,160,15,0.56)",
                    }}
                >
                    <Text fontSize="xl" lineHeight="40px">
                        Además, realizamos <Text as='mark' p={'3px'} bg="orange.400" color="white"> coberturas de eventos, activaciones y lanzamientos</Text>, desarrollando contenido visual de calidad para redes sociales y plataformas digitales, 
                        con el fin de acompañar cada instancia de comunicación de la marca dentro del ecosistema deportivo.
                    </Text>
                </MotionBox>
                <MotionBox
                    w={{ base: "100%", md: "48%" }}
                    p={10}
                    pl={4}
                    border="1px solid"
                    borderColor="orange.400"
                    borderRadius="md"
                    textAlign="start"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    _hover={{
                        boxShadow: "0px 0px 12px 1px rgba(245,160,15,0.56)",
                    }}
                >
                    <Text fontSize="xl" lineHeight="40px">
                        Creemos en el poder del deporte como espacio de inspiración y conexión emocional. Por eso, trabajamos para que cada alianza entre marca y 
                        deportista sea una oportunidad de generar valor, visibilidad y crecimiento compartido.
                    </Text>
                </MotionBox>
                <MotionBox
                    w={{ base: "100%", md: "97%" }}
                    p={10}
                    border="1px solid"
                    borderColor="orange.400"
                    borderRadius="md"
                    textAlign="center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}
                    _hover={{
                        boxShadow: "0px 0px 12px 1px rgba(245,160,15,0.56)",
                    }}
                >
                    <Text fontSize="xl" lineHeight="40px">
                        Cada proyecto es único. Diseñamos <Text as='mark' p={'3px'} bg="orange.400" color="white"> acciones y presupuestos a medida</Text>, adaptándonos a las necesidades y 
                        objetivos de cada marca para lograr un vínculo auténtico y duradero con el deporte.
                    </Text>
                </MotionBox>
            </MotionFlex>
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