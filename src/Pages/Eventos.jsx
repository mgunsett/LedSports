import { Flex, Heading, Text, Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import eventos from "../assets/eventos.png";
import "./Eventos.css";
import { BsChevronDoubleDown } from "react-icons/bs";
import Contact from "../Components/Contact";

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
                    Even
                    <MotionText
                        fontSize={{ base: '5xl', md: '5xl', lg: '6xl' }}
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
            <Text as='mark'  p={2} bg="orange.400" fontSize="2xl" fontWeight="bold" color="white">Transformamos cada evento en una experiencia única</Text>
            <Text fontSize="xl" color="white" lineHeight="45px">
                Ofrecemos un servicio integral para la organización, comunicación y cobertura de eventos deportivos, pensado para clubes, academias, marcas e instituciones que buscan proyectar 
                profesionalismo y generar impacto en cada detalle.
            </Text>
            <Text fontSize="xl" color="white" lineHeight="45px">
                Nos encargamos de la<Text as='mark' p={'3px'} bg="orange.400" color="black"> planificación y coordinación general del evento</Text>, gestionando desde la identidad visual y la comunicación previa hasta la cobertura en el día y la difusión posterior.
                Cada acción es planificada estratégicamente para fortalecer la imagen institucional y transmitir los valores del deporte con una estética cuidada y coherente.
            </Text>
            <Text fontSize="xl" color="white" lineHeight="45px">
                Realizamos <Text as='mark' p={'3px'} bg="orange.400" color="black">producciones fotográficas y audiovisuales profesionales</Text>, asegurando un registro de alta calidad que refleje la emoción, la energía y el espíritu de cada momento. 
                Además, generamos contenido dinámico y atractivo para redes sociales, ideal para amplificar el alcance del evento y posicionar la marca o institución organizadora.
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