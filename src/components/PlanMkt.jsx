import { Box, Flex, Text, Heading, Grid } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export const PlanMkt = () => {
  const cards = [
    {
      emoji: "🎯",
      title: "Diagnóstico y personalización",
      description: "Analizamos la realidad de cada institución y definimos un plan de marketing deportivo totalmente a medida."
    },
    {
      emoji: "📣",
      title: "Campañas y acciones estratégicas",
      description: "Diseñamos campañas específicas para potenciar tu marca, mejorar el posicionamiento y ganar visibilidad."
    },
    {
      emoji: "🤝",
      title: "Vínculo con comunidad y sponsors",
      description: "Fortalecemos la relación con hinchas, comunidad, marcas y sponsors para generar alianzas duraderas."
    },
    {
      emoji: "💼",
      title: "Presupuestos a medida",
      description: "Cada proyecto es único. Ajustamos el presupuesto a tus necesidades, metas y posibilidades reales."
    }
  ];

  return (
    <Flex
      bg="black"
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      py={{ base: 12, md: 2}}
      px={{ base: 2, md: 8 }}
    >
      <Box maxW="1280px" w="100%">
        {/* Header */}
        <MotionBox
          textAlign="center"
          mb={12}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Heading
            as="h2"
            fontSize='3xl'
            fontWeight="bold"
            color="orange.400"
            mb={4}
            textAlign={{ base: "start", md: "center" }}
          >
            Planes de marketing a tu medida
          </Heading>
          <Text
            fontSize={{ base: "md", md: "md"}}
            color="gray.300"
            maxW="3xl"
            mx="auto"
            textAlign={{ base: "start", md: "center" }}
          >
            Transformamos tus objetivos en estrategias concretas dentro y fuera del campo de juego.
          </Text>
        </MotionBox>

        {/* Cards Grid */}
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={6}
          mb={10}
        >
          {cards.map((card, index) => (
            <MotionBox
              key={index}
              bg="gray.900"
              p={6}
              borderRadius="lg"
              borderBottom="4px solid"
              borderBottomColor="gray.600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -4,
                borderBottomColor: "#ffa500",
                cursor: "pointer",
                transition: { duration: 0.3 }
              }}
            >
              <Text fontSize="4xl" mb={4}>
                {card.emoji}
              </Text>
              <Heading
                as="h3"
                fontSize="xl"
                fontWeight="bold"
                color="white"
                mb={3}
              >
                {card.title}
              </Heading>
              <Text color="gray.400" fontSize="sm" lineHeight="tall">
                {card.description}
              </Text>
            </MotionBox>
          ))}
        </Grid>
      </Box>
    </Flex>
  );
};

export default PlanMkt;
