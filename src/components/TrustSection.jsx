import React, { useEffect, useRef, useState } from 'react';
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
  IconButton,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import lukaromero from '../assets/lukaromero.png';
import ricardoade from '../assets/ricardoade.png';
import mainero from '../assets/mainero.png';
import luiszarate from '../assets/luiszarate.png';
import '../components/TrustSection.css';
import { GoCheckCircleFill } from 'react-icons/go';
import Estadisticas from './Estadisticas'

const MotionBox = motion(Box);

const brands = [
  {
    img: lukaromero,
    name: 'Luka Romero',
    item1: 'lorem ipsum dolor sit amet',
    item2: 'lorem ipsum dolor sit amet',
    item3: 'lorem ipsum dolor sit amet',
  },
  {
    img: ricardoade,
    name: 'Ricardo Adebayo',
    item1: ' lorem ipsum dolor sit amet',
    item2: 'lorem ipsum dolor sit amet',
    item3: 'lorem ipsum dolor sit amet',
  },
  {
    img: mainero,
    name: 'Mainero',
    item1: 'lorem ipsum dolor sit amet',
    item2: 'lorem ipsum dolor sit amet',
    item3: 'lorem ipsum dolor sit amet',
  },
  {
    img: luiszarate,
    name: 'Luis Zarate',
    item1: 'lorem ipsum dolor sit amet',
    item2: 'lorem ipsum dolor sit amet',
    item3: 'lorem ipsum dolor sit amet',
  },
];

const TrustSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollAmount = 700;
  const animationRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);

  const animateScrollTo = (target, duration = 700) => {
    if (!containerRef.current) return;

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }

    const start = containerRef.current.scrollLeft;
    const change = target - start;
    const startTime = performance.now();

    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const step = (now) => {
      if (isDragging || !containerRef.current) return;
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      const eased = easeInOutQuad(t);
      containerRef.current.scrollLeft = start + change * eased;
      if (t < 1) {
        animationRef.current = requestAnimationFrame(step);
      } else {
        animationRef.current = null;
      }
    };

    animationRef.current = requestAnimationFrame(step);
  };

  const clampToBounds = (val) => {
    const el = containerRef.current;
    if (!el) return val;
    const max = Math.max(0, el.scrollWidth - el.clientWidth);
    return Math.min(Math.max(0, val), max);
  };

  const scrollLeft = () => {
    setScrollPosition((prev) => clampToBounds(prev - scrollAmount));
  };

  const scrollRight = () => {
    setScrollPosition((prev) => clampToBounds(prev + scrollAmount));
  };

  useEffect(() => {
    if (containerRef.current) {
      animateScrollTo(scrollPosition, 900);
    }
  }, [scrollPosition]);

  useEffect(() => {
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const onMouseDown = (e) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    hasDraggedRef.current = false;
    startXRef.current = e.pageX - containerRef.current.offsetLeft;
    startScrollLeftRef.current = containerRef.current.scrollLeft;
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  const onMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = x - startXRef.current;
    if (Math.abs(walk) > 3) hasDraggedRef.current = true;
    containerRef.current.scrollLeft = startScrollLeftRef.current - walk;
  };

  const endMouseDrag = () => {
    if (!isDragging) return;
    setIsDragging(false);
  };

  const onTouchStart = (e) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    hasDraggedRef.current = false;
    const touch = e.touches[0];
    startXRef.current = touch.pageX - containerRef.current.offsetLeft;
    startScrollLeftRef.current = containerRef.current.scrollLeft;
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  const onTouchMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    const touch = e.touches[0];
    const x = touch.pageX - containerRef.current.offsetLeft;
    const walk = x - startXRef.current;
    if (Math.abs(walk) > 3) hasDraggedRef.current = true;
    containerRef.current.scrollLeft = startScrollLeftRef.current - walk;
  };

  const onTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
  };

  const onClickCapture = (e) => {
    if (hasDraggedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      hasDraggedRef.current = false;
    }
  };

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

        <Flex position="relative" w="full">
          <IconButton
            aria-label="Anterior"
            icon={<ChevronLeftIcon />}
            onClick={scrollLeft}
            left='-150px'
            top="50%"
            transform="translateY(-50%)"
            zIndex={2}
            colorScheme="orange"
            variant="solid"
            size="sm"
            opacity={visible ? 1 : 0.85}
          />
          <SimpleGrid
            ref={containerRef}
            gridAutoFlow="column"
            gridAutoColumns={{ base: '50%', sm: '33.33%', md: '25%' }}
            columnGap={8}
            overflowX="auto"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseLeave={endMouseDrag}
            onMouseUp={endMouseDrag}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd} 
            onClickCapture={onClickCapture}
            cursor={isDragging ? 'grabbing' : 'grab'}
            sx={{
              '&::-webkit-scrollbar': { display: 'none' },
              '-ms-overflow-style': 'none',
              'scrollbar-width': 'none',
            }}
          >
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
                  id='brand'
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
          <IconButton
            aria-label="Siguiente"
            icon={<ChevronRightIcon />}
            onClick={scrollRight}
            position="absolute"
            right='-150px'
            top="50%"
            transform="translateY(-50%)"
            zIndex={2}
            colorScheme="orange"
            variant="solid"
            size="sm"
            opacity={visible ? 1 : 0.85}
          />
        </Flex>
        <Estadisticas/>
      </VStack>
    </Flex>
  );
};

export default TrustSection;
