import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";
import Contact from "@/components/common/Contact";
import ServiceGrid from "@/components/deportistas/ServiceGrid";


const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const EASE_OUT = [0.23, 1, 0.32, 1];
const PX = { base: "20px", md: "250px" };

const Deportistas = () => {
  return (
    <Flex bg="black" minHeight="100vh" pt={{ base: 40, md: 60 }} pb={{ base: 20, md: 0 }} flexDirection="column" color="white">
      {/* Hero Header */}
      <Flex
        justifyContent="start"
        alignItems="start"
        gap={2}
        flexDirection="row"
        alignSelf="start"
        w="100%"
        pl={{ base: 10, md: 16, lg: "250px" }}
        mb={{ base: 6, md: 10 }}
      >
        <MotionBox
          w={"2px"}
          h={{ base: "60px", md: "80px" }}
          bg="orange.400"
          mr={2}
          borderRadius="full"
          boxShadow="0px 0px 12px 1px rgba(245,160,15,0.56)"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <MotionHeading
          as="h1"
          fontSize={{ base: "4xl", md: "5xl" }}
          fontWeight="bold"
          color="white"
          lineHeight="shorter"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Depor
          <MotionText
            fontSize={{ base: "4xl", md: "5xl" }}
            as="span"
            color="orange.400"
            fontStyle="italic"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            tistas
          </MotionText>
        </MotionHeading>
      </Flex>

      {/* Intro + accesos a etapas */}
      <MotionBox
        px={PX}
        pb={{ base: "56px", md: "90px" }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8, ease: EASE_OUT }}
      >
        <Text maxW="46ch" color="whiteAlpha.800" fontSize={{ base: "17px", md: "clamp(18px, 1.6vw, 22px)" }} lineHeight="1.55">
          Desde nuestros inicios en 2020 trabajamos la marca personal de{" "}
          <Text as="b" color="white" fontWeight="600">
            más de <Text as="span" color="orange.400" fontStyle="italic">350 deportistas</Text>
          </Text>{" "}
          que confiaron en nosotros, y los acompañamos en las principales competiciones de América y el mundo.
        </Text>
       
      </MotionBox>

      <ServiceGrid />

      <MotionBox
        alignSelf="center"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        fontSize={{ base: "50px", md: "100px" }}
        mt={{ base: 8, md: 16 }}
      >
        <BsChevronDoubleDown color="orange" />
      </MotionBox>
      <Contact />
    </Flex>
  );
};

export default Deportistas;
