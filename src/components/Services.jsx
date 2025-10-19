import React from 'react';
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  VStack,
  Icon,
  Card,
  CardBody,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { FaBullhorn, FaChartLine, FaUsers, FaCamera } from 'react-icons/fa';
import { GoCheckCircleFill } from "react-icons/go";

const MotionBox = motion(Box);

const services = [
  {
    icon: FaBullhorn,
    title: 'Gestión de Redes',
    desc: 'Creamos estrategias que potencian tu presencia digital con contenido relevante y creativo.',
  },
  {
    icon: FaChartLine,
    title: 'Publicidad Digital',
    desc: 'Optimizamos tus campañas en Meta y Google para maximizar tu retorno de inversión.',
  },
  {
    icon: FaUsers,
    title: 'Branding Deportivo',
    desc: 'Diseñamos la identidad visual y conceptual de tu marca o institución deportiva.',
  },
  {
    icon: FaCamera,
    title: 'Producción de Contenido',
    desc: 'Fotografía y video profesional para comunicar tu marca con calidad y estilo.',
  },
];

const Services = () => {
  return (
    <Box id="services" bg="blackAlpha.900" py={{ base: 20, md: 28 }} px={{ base: 6, md: 20 }}>
      <VStack spacing={12}>
        <Heading
          as="h2"
          fontSize={{ base: '3xl', md: '4xl' }}
          color="white"
          textAlign="center"
        >
          Nuestros <Text as="span" color="orange.400">Servicios</Text>
        </Heading>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 2 }} spacing={6}>
          {services.map((service, i) => (
            <MotionBox
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              w="100%"
            >
              <Card
                bg="blackAlpha.700"
                border="1px solid"
                borderColor="whiteAlpha.200"
                _hover={{ 
                  transform: 'scale(1.05)', 
                  borderColor: 'orange.400',
                  boxShadow: '0px 10px 15px 1px rgba(117,86,32,0.75)',
                  WebkitBoxShadow: '0px 10px 15px 1px rgba(117,86,32,0.75)',
                  MozBoxShadow: '0px 10px 15px 1px rgba(117,86,32,0.75)',
                 }}
                transition="all 0.3s ease"
                borderRadius="2xl"
                textAlign="center"
                py={12}
                w="100%"
                h="100%"
              >
                <CardBody>
                  <Icon as={service.icon} boxSize={10} color="orange.400" mb={4} />
                  <Heading as="h3" fontSize="xl" color="white" mb={2}>
                    {service.title}
                  </Heading>
                  <Accordion variant="custom" allowMultiple mt={8}>
                    <AccordionItem>
                    {({ isExpanded }) => (
                    <>
                    <Text color="whiteAlpha.700" w={550}>
                      <AccordionButton>
                        <Box as='span' flex='1' textAlign='left'>
                          {service.desc}
                        </Box>
                        {isExpanded ? (
                            <MinusIcon fontSize='12px' />
                          ) : (
                            <AddIcon fontSize='12px' />
                          )}
                      </AccordionButton>
                      
                    </Text>
                    <AccordionPanel>
                      <List spacing={3}>
                        <ListItem>
                          <ListIcon as={GoCheckCircleFill} color='green.500' />
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        </ListItem>
                        <ListItem>
                          <ListIcon as={GoCheckCircleFill} color='green.500' />
                          Assumenda, quia temporibus eveniet a libero incidunt suscipit
                        </ListItem>
                        <ListItem>
                          <ListIcon as={GoCheckCircleFill} color='green.500' />
                          Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                        </ListItem>
                      </List>
                    </AccordionPanel>
                    </>
                    )}
                    </AccordionItem>
                  </Accordion>
                </CardBody>
              </Card>
            </MotionBox>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Services;
