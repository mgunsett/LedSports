import { Flex, Heading, Text, Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import eventos from "../assets/eventos.png";
import { BsChevronDoubleDown } from "react-icons/bs";
import Contact from "../components/Contact";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionFlex = motion(Flex);

export const Eventos = () => {
    return (
        <Flex
            bg={'black'}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            minHeight="100vh"
            gap={{ base: 10, md: 20 }}
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
                    Even
                    <MotionText
                        fontSize='5xl'
                        as="span"
                        color="orange.400"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        tos
                    </MotionText>
                </MotionHeading>
            </Flex>
            <MotionImage
                className="shadow"
                src={eventos}
                alt="eventos"
                w={{ base: "100%", md: "550px" }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                viewport={{ once: true }}
                zIndex={1}
            />
            <MotionFlex
                bgGradient="linear(to-br,  gray.900, black)"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                gap={6}
                w={{ base: "100%", md: "100%" }}
                h="950px"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                viewport={{ once: true }}
                px={'500px'}
                mt={'-170px'}
                pt={10}
            >
                <MotionBox
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    
                >
                    <Box position="relative" role="group" cursor="pointer">
                        <Box
                            position="absolute"
                            inset="-4px"
                            bgGradient="linear(to-r, orange.400, orange.500, orange.400)"
                            borderRadius="2xl"
                            opacity={0.2}
                            filter="blur(8px)"
                            transition="opacity 0.5s"
                            _groupHover={{
                                opacity: 1
                            }}
                        />

                        <Box
                            position="relative"
                            bg="gray.900"
                            border="1px solid"
                            borderColor="orange.400"
                            borderRadius="2xl"
                            p={{ base: 6, md: 12 }}
                            lineHeight='2.1'
                            w={{ base: "100%", md: "900px" }}
                            h={{ base: "auto", md: "550px" }}
                            textAlign={{ base: "center", md: "left" }}
                        >
                            <Box maxW="4xl" mx="auto">
                                <Flex justify="center" mb={6}>
                                    <Box w="96px" h="4px" bg="orange.400" />
                                </Flex>
                                <Text as='h2'  p={2} fontSize="3xl" fontWeight="bold" color="orange.400">
                                    Transformamos cada evento en una experiencia única
                                </Text>
                                <Text
                                    fontSize="md"
                                    lineHeight="relaxed"
                                    color="whiteAlpha.900"
                                >
                                    Ofrecemos un servicio integral para la organización, comunicación y cobertura de eventos deportivos,
                                    pensado para clubes, academias, marcas e instituciones que buscan proyectar
                                    profesionalismo y generar impacto en cada detalle.
                                    Nos encargamos de la<Text as='mark' p={'3px'} bg="orange.400" color="black"> planificación y coordinación general del evento</Text>, 
                                    gestionando desde la identidad visual y la comunicación previa hasta la cobertura en el día y la difusión posterior.
                                    Cada acción es planificada estratégicamente para fortalecer la imagen institucional y transmitir los valores del deporte con una estética cuidada y coherente.
                                    Realizamos <Text as='mark' p={'3px'} bg="orange.400" color="black">producciones fotográficas y audiovisuales profesionales</Text>, 
                                    asegurando un registro de alta calidad que refleje la emoción, la energía y el espíritu de cada momento.
                                    Además, generamos contenido dinámico y atractivo para redes sociales, ideal para amplificar el alcance del evento
                                    y posicionar la marca o institución organizadora.
                                </Text>
                            </Box>
                        </Box>
                    </Box>
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
                mt={'-120px'}
            >
                <BsChevronDoubleDown color="orange" />
            </MotionBox>  
            <Contact />
        </Flex>
    );
};