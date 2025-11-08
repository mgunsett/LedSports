import { Flex, Heading, Text, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionBox = motion(Box);

export const Deportistas = () => {
    return (
        <Flex 
        bg="black" 
        minHeight="100vh" 
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
                flexDirection="column"
                my={10}
                w={{ base: "100%", md: "50%" }} 
                h="400px"
                border="2px solid orange"
                borderRadius="10px"
                fontSize="2xl" 
                fontWeight="bold" 
                fontFamily="Stack Sans Headline, sans-serif" 
                color="white"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
            >
                <Text textAlign="center">
                TESTIMONIOS
                </Text>
            </MotionFlex>
                <MotionFlex
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    my={20}
                    w={{ base: "100%", md: "50%" }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                >
                    <Text textAlign="center" fontSize="3xl" fontWeight="bold" fontFamily="Stack Sans Headline, sans-serif" color="white" mt={20}>
                        Así potenciamos <Text as='mark' p={'3px'} bg="orange.400" color="white" mx={1}>tú marca</Text>
                    </Text>
                    <MotionFlex
                        w={{ base: "100%", md: "100%" }}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        my={'150px'}
                        position="relative"
                    >
                        <MotionBox
                            fontSize="6xl"
                            fontWeight="bold"
                            fontFamily="Stack Sans Headline, sans-serif"
                            color="orange.400"
                            w={{ base: "100%", md: "700px" }}
                            position="absolute"
                            left={-11}
                            top={-10}
                        >
                            <Text
                                fontSize="80px"
                                fontWeight="800"
                                fontFamily="Stack Sans Headline, sans-serif"
                                color="orange.400"
                                lineHeight="shorter"
                            >Plan de Marketing</Text>
                        </MotionBox>
                        <MotionText
                            fontSize="xl"
                            fontFamily="Stack Sans Headline, sans-serif"
                            color="white"
                            position="absolute"
                            w="800px"
                            left={10}
                            top={10}
                            textAlign="end"
                        >
                            Diseñamos el plan de marketing y comunicación adaptado a tu persona para generar el contenido adecuado para potenciar tu marca persona.
                        </MotionText>
                    </MotionFlex>
                </MotionFlex>
        </Flex>
    );
};