import React from 'react';
import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  VStack,
  Text,
  Flex,
  List,
  ListItem,
  ListIcon,
  Divider,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import lukaromero from '../assets/lukaromero.png';
import ricardoade from '../assets/ricardoade.png';
import mainero from '../assets/mainero.png';
import luiszarate from '../assets/luiszarate.png';
import '../components/TrustSection.css';
import { GoCheckCircleFill } from 'react-icons/go';


const MotionBox = motion(Box);

const brands = [
    {
      img:lukaromero,
      name:'Luka Romero',
      item1:'lorem ipsum dolor sit amet',
      item2:'lorem ipsum dolor sit amet',
      item3:'lorem ipsum dolor sit amet',
    },
    {
      img:ricardoade, 
      name:'Ricardo Adebayo', 
      item1:' lorem ipsum dolor sit amet', 
      item2:'lorem ipsum dolor sit amet', 
      item3:'lorem ipsum dolor sit amet',
    },
    {
      img:mainero,
      name:'Mainero', 
      item1:'lorem ipsum dolor sit amet', 
      item2:'lorem ipsum dolor sit amet', 
      item3:'lorem ipsum dolor sit amet',
    },
    {
      img:luiszarate, 
      name:'Luis Zarate', 
      item1:'lorem ipsum dolor sit amet', 
      item2:'lorem ipsum dolor sit amet', 
      item3:'lorem ipsum dolor sit amet',
    },

];

const TrustSection = () => {
  return (
    <Flex 
      id="trust" 
      bg="black" 
      py={{ base: 20, md: 28 }} 
      px={{ base: 6, md: 20 }}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={16}
      >
      <VStack spacing={12}>
        <Heading
          as="h2"
          fontSize={{ base: '3xl', md: '4xl' }}
          color="white"
          textAlign="center"
        >
          Confían en <Text as="span" color="orange.400">Nosotros</Text>
        </Heading>

        <SimpleGrid columns={{ base: 2, sm: 3, md: 4}} spacing={'120px'}>
          {brands.map((logo, i) => (
            <MotionBox
              key={i}
              role="group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              position="relative"
              overflow="visible"
            >
              <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
              gap={4}
              transition="all 0.8s"
              >
              <Image
                className='image_brand'
                src={logo.img}
                alt={`Logo ${i}`}
                maxH="370px"
                mx="auto"
                filter="grayscale(100%) brightness(0.9)"
                transition="all 0.8s"
                _groupHover={{ 
                  filter: 'grayscale(0%) brightness(1)',
                  transform: 'scale(1.05)',
                  cursor: 'pointer',
                }}
              />
              </Flex> 
                <Flex
                  id='brand_info'
                  direction="column"
                  alignItems="flex-start"
                  justifyContent="center"
                  gap={3}
                  p={4}
                  position={'relative'}
                  w={{ base: '100%', md: '100%' }}
                  bg={'linear-gradient(135deg, rgba(17,17,17,0.75) 0%, rgba(30,30,30,0.75) 100%)'}
                  backdropFilter={'blur(8px)'}
                  border={'1px solid rgba(255,165,0,0.35)'}
                  borderRadius={'16px'}
                  boxShadow={'0 10px 30px rgba(0,0,0,0.45),0 0 30px rgba(255, 166, 0, 0.32)'}
                  overflow={'hidden'}
                  maxH={0}
                  opacity={0}
                  transform={'translateY(-8px)'}
                  pointerEvents="none"
                  transition="max-height 1s ease, opacity 1s ease, transform 1s ease"
                  _before={{
                    content: '""',
                    position: 'absolute',
                    inset: '-2px',
                    borderRadius: '18px',
                    background: 'linear-gradient(135deg, rgba(255,165,0,0.45), rgba(255,255,255,0.06))',
                    filter: 'blur(10px)',
                    zIndex: -1,
                  }}
                  _groupHover={{ maxHeight: '420px', opacity: 1, transform: 'translateY(0)', mt: 3, pointerEvents: 'auto' }}
                >
                  <Text
                  as="span"
                  color="white"
                  fontSize={{ base: 'lg', md: '2xl' }}
                  textAlign="center"
                  mt={4}
                  >
                    {logo.name}
                  </Text>
                  <Text as="span" color="orange.300" fontSize="sm" fontWeight="bold" letterSpacing="wide">
                    Highlights
                  </Text>
                  <List spacing={3}>
                    <ListItem color={'gray.200'} display={'flex'} alignItems={'center'}>
                      <ListIcon as={GoCheckCircleFill} color='orange.400' />
                      {logo.item1}
                    </ListItem>
                    <ListItem color={'gray.200'} display={'flex'} alignItems={'center'}>
                      <ListIcon as={GoCheckCircleFill} color='orange.400' />
                      {logo.item2}
                    </ListItem>
                    <ListItem color={'gray.200'} display={'flex'} alignItems={'center'}>
                      <ListIcon as={GoCheckCircleFill} color='orange.400' />
                      {logo.item3}
                    </ListItem>
                  </List>
                </Flex>    
            </MotionBox>
          ))}
        </SimpleGrid>
      </VStack>
      <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          mt={20}
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
              <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} color="orange.500" fontWeight="bold">50+</Heading>
              <Text fontSize="sm" color="gray.400">Deportistas</Text>
            </Flex>
            <Divider borderColor="orange.500/30" orientation="vertical" h="12" />
            <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            
            >
              <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} color="orange.500" fontWeight="bold">7mil+</Heading>
              <Text fontSize="sm" color="gray.400">Seguidores</Text>
            </Flex>
            <Divider borderColor="orange.500/30" orientation="vertical" h="12" />
            <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            >
              <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} color="orange.500" fontWeight="bold">99%</Heading>
              <Text fontSize="sm" color="gray.400">Satisfacción</Text>
            </Flex>
          </Flex>
        </MotionBox>
    </Flex>
  );
};

export default TrustSection;
