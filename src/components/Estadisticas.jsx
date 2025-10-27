import { motion, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Flex, Heading, Text, Divider, Box } from "@chakra-ui/react";

const MotionBox = motion(Box);

const defaultDatos = {
    deportistas: 50,
    seguidores: 1500,
    satisfaccion: 99,
}

export default function Estadisticas({datos}) {
    const data = datos ?? defaultDatos;
    const deportistas = data.deportistas ?? 0;
    const seguidores = data.seguidores ?? 0;
    const satisfaccion = data.satisfaccion ?? 0;

    const [depDisplay, setDepDisplay] = useState(0);
    const [segDisplay, setSegDisplay] = useState(0);
    const [satDisplay, setSatDisplay] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        const c1 = animate(0, deportistas, {
            duration: 2,
            onUpdate: (v) => setDepDisplay(Math.round(v)),
        });
        const c2 = animate(0, seguidores, {
            duration: 2.5,
            onUpdate: (v) => setSegDisplay(Math.round(v)),
        });
        const c3 = animate(0, satisfaccion, {
            duration: 3,
            onUpdate: (v) => setSatDisplay(Math.round(v)),
        });
        return () => {
            c1.stop();
            c2.stop();
            c3.stop();
        };
    }, [inView, deportistas, seguidores, satisfaccion]);

  return (
    <MotionBox
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        mt={20}
        ref={ref}
      >
        <Flex
          direction="row"
          alignItems="center"
          justifyContent="center"
          gap={6}
          bg="linear-gradient(to right, rgba(255, 165, 0, 0.1), rgba(255, 165, 0, 0.2))"
          border="1px solid rgba(255, 165, 0, 0.3)"
          borderRadius="full"
          boxShadow="0 10px 30px rgba(0,0,0,0.45),0 0 30px rgba(255, 166, 0, 0.32)"
          px={6}
          py={4}
          w="full"
          maxW="600px"
          transition="all 1s"
        >
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            
            <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} color="orange.500" fontWeight="bold">{depDisplay + '+'}</Heading>
            <Text fontSize="sm" color="gray.400">Deportistas</Text>
          </Flex>
          <Divider borderColor="orange.500/30" orientation="vertical" h="12" />
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} color="orange.500" fontWeight="bold">{segDisplay + 'k'}</Heading>
            <Text fontSize="sm" color="gray.400">Seguidores</Text>
          </Flex>
          <Divider borderColor="orange.500/30" orientation="vertical" h="12" />
          <Flex
            direction="column"  
            alignItems="center"
            justifyContent="center"
          >
            <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} color="orange.500" fontWeight="bold">{satDisplay + '%'}</Heading>
            <Text fontSize="sm" color="gray.400">Satisfacción</Text>
          </Flex>
        </Flex>
      </MotionBox>
  );
}