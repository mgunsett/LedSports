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
                    Mar
                    <MotionText
                        fontSize='5xl'
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
                w={{ base: "100%", md: "68%" }}
                flexDirection="column"
                gap={6}
                px={{ base: 4, md: 0 }}
            >
                <Flex
                    gap={6}
                    flexDirection={{ base: "column", md: "row" }}
                >
                    <MotionBox
                        flex="7"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        cursor="pointer"
                        role="group"
                    >
                        <Box
                            position="relative"
                            h="full"
                            bg="gray.900"
                            border="2px solid"
                            borderColor="orange.400"
                            borderRadius="2xl"
                            p={8}
                            overflow="hidden"
                            transition="all 0.5s"
                            _hover={{
                                borderColor: "orange.400",
                                boxShadow: "0px 0px 20px 2px rgba(245,160,15,0.4)"
                            }}
                            >
                            <Box
                                position="absolute"
                                top="-80px"
                                right="-80px"
                                w="240px"
                                h="240px"
                                bg="orange.400"
                                opacity={0.2}
                                borderRadius="full"
                                filter="blur(60px)"
                                transition="transform 0.7s"
                                _groupHover={{
                                    transform: "scale(1.5)"
                                }}
                            />

                            <Box position="relative" zIndex={10}>
                                <Box mb={6}>
                                    <Box w="64px" h="4px" bg="orange.400" mb={4} />
                                    <Heading
                                        fontSize={{ base: "2xl", md: "3xl" }}
                                        fontWeight="bold"
                                        color="orange.400"
                                        mb={4}
                                    >
                                        Unimos marcas y deportistas para generar impacto real
                                    </Heading>
                                </Box>
                                <Text
                                    fontSize="lg"
                                    color="whiteAlpha.900"
                                    lineHeight="relaxed"
                                >
                                    Nuestro servicio está diseñado para marcas que buscan potenciar su presencia a través del deporte y conectar con su
                                    público desde la emoción, la credibilidad y la pasión. Nos encargamos de identificar al atleta ideal, gestionar la colaboración y producir contenido
                                    profesional para campañas, activaciones y eventos.
                                </Text>
                            </Box>
                        </Box>
                    </MotionBox>

                    <MotionBox
                        flex="5"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        role="group"
                    >
                        <Image
                            src={marcas}
                            alt="marcas"
                            w={{ base: "100%", md: "400px" }}
                            h={{ base: "auto", md: "auto" }}
                            transition="transform 0.5s ease-in-out"
                            _groupHover={{
                                transform: "scale(1.02)",
                            }}
                        />
                    </MotionBox>
                </Flex>

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
                            p={12}
                            textAlign="center"  
                        >
                            <Box maxW="4xl" mx="auto">
                                <Flex justify="center" mb={6}>
                                    <Box w="96px" h="4px" bg="orange.400" />
                                </Flex>
                                <Text
                                    fontSize="lg"
                                    lineHeight="relaxed"
                                    color="whiteAlpha.900"
                                >
                                    Creamos vínculos auténticos que amplían el alcance,
                                    fortalecen el posicionamiento y generan una conexión real con las audiencias. Diseñamos acciones y
                                    presupuestos a medida para que cada alianza entre marca y deporte genere valor y crecimiento compartido.
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                </MotionBox>
                <MotionBox
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
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
        </Flex>
    );
};





             {/* <Flex
                justifyContent="center"
                alignItems="center"
                gap={{ base: 8, md: 20 }}
                flexDirection={{ base: "column", md: "row" }}
                w={{ base: "100%", md: "60%" }}
                mb={{ base: 6, md: 10 }}
            >
                <MotionFlex
                    justifyContent="start"
                    alignItems="start"
                    flexDirection="column"
                    gap={2}
                    w={{ base: "100%", md: "400px" }}
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    viewport={{ once: true }}
                    
                    p={{base: 6, md: 4}}
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
                    w={{ base: "100%", md: "400px" }}
                    h={{ base: "auto", md: "auto" }}
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
                w={{ base: "100%", md: "70%" }}
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{ delay: 0.3, duration: 1 }}
                viewport={{ once: true }}  
                color="white"
                fontFamily="Stack Sans Headline, sans-serif"
            >
                <MotionBox
                    w={{ base: "100%", md: "85%" }}
                    p={20}
                    border="1px solid"
                    borderColor="orange.400"
                    borderRadius="md"
                    textAlign="center"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1}}
                    viewport={{ once: true }}
                    _hover={{
                        boxShadow: "0px 0px 12px 1px rgba(245,160,15,0.56)",
                    }}
                >
                    <Text fontSize="lg" lineHeight="30px">
                        Nos encargamos de identificar al atleta ideal, gestionar la colaboración y producir contenido 
                        profesional para campañas, activaciones y eventos. Creamos vínculos auténticos que amplían el alcance,
                        fortalecen el posicionamiento y generan una conexión real con las audiencias. Diseñamos acciones y 
                        presupuestos a medida para que cada alianza entre marca y deporte genere valor y crecimiento compartido.
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
        </Flex> */}
