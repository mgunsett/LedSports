import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Heading,
  Image,
  Text,
  Flex,
  List,
  ListItem,
  ListIcon,
  IconButton,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { GoCheckCircleFill } from 'react-icons/go';

import lukaromero from '../assets/lukaromero.png';
import ricardoade from '../assets/ricardoade.png';
import mainero from '../assets/mainero.png';
import luiszarate from '../assets/luiszarate.png';
import '../components/TrustSection.css';
import Estadisticas from './Estadisticas';

const MotionBox = motion(Box);

const brands = [
  {
    img: lukaromero,
    name: 'Luka Romero',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: ricardoade,
    name: 'Ricardo Adebayo',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: mainero,
    name: 'Mainero',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: luiszarate,
    name: 'Luis Zarate',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: lukaromero,
    name: 'Luka Romero',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: ricardoade,
    name: 'Ricardo Adebayo',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: mainero,
    name: 'Mainero',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: luiszarate,
    name: 'Luis Zarate',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
];

const TrustSection = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    const easeInOutQuad = (t) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

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
    if (containerRef.current) animateScrollTo(scrollPosition, 900);
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

  const endMouseDrag = () => setIsDragging(false);

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

  const onTouchEnd = () => setIsDragging(false);

  const onClickCapture = (e) => {
    if (hasDraggedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      hasDraggedRef.current = false;
    }
  };

  return (
    <Flex 
    direction="column" 
    alignItems="center" 
    justifyContent="center" 
    gap={6} 
    mb={20}
    >
      <Heading
        as="h2"
        fontSize={{ base: '3xl', md: '4xl' }}
        color="white"
        fontWeight="bold"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={2}
      >
        Ya confían <Text color="orange.500">en nosotros</Text>
      </Heading>

      <Flex
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={2}
        overflowX="auto"
        overflowY="hidden"
        maxW="100%"
        minW="75%"
        margin="auto"
        mb="100px"
        position="relative"
      >
        <IconButton
          aria-label="Scroll Left"
          icon={<ChevronLeftIcon />}
          onClick={scrollLeft}
          position="absolute"
          left="130px"
          top="50%"
          transform="translateY(-50%)"
          zIndex="2"
          fontSize="40px"
          color="white"
          backgroundColor="rgba(0,0,0,0.3)"
          _hover={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        />

        <Flex
          className={`scrollCards ${visible ? 'reveal--visible' : ''}`}
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
          maxW="75%"
          minW="75%"
          margin="auto"
        >
          <Flex
            ref={containerRef}
            overflowX="auto"
            overflowY="hidden"
            gap={6}
            padding={2}
            margin="auto"
            maxW="100%"
            minW="100%"
            cursor={isDragging ? 'grabbing' : 'grab'}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={endMouseDrag}
            onMouseLeave={endMouseDrag}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onClickCapture={onClickCapture}
            sx={{
              '&::-webkit-scrollbar': { display: 'none' },
              '-ms-overflow-style': 'none',
              'scrollbar-width': 'none',
              'user-select': 'none',
            }}
          >
            {brands.map((logo, i) => (
              <MotionBox
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                overflow="visible"
              >
                <Flex
                  id="brand"
                  position="relative"
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  mx="50px"
                  w="250px"
                  transition="all 0.8s"
                  sx={{
                    '&:hover .image_brand': {
                      filter: 'grayscale(0%) brightness(1)',
                      transform: 'translateY(-20px) scale(1.05)',
                    },
                    '&:hover #brand_info': {
                      opacity: 1,
                      transform: 'translate(50%, -30px) ',
                      pointerEvents: 'auto',
                    },
                  }}
                >
                  <Image
                    className="image_brand"
                    src={logo.img}
                    alt={`Logo ${i}`}
                    maxH="450px"
                    maxW="370px"
                    borderRadius="8px"
                    filter="grayscale(100%) brightness(0.9)"
                    transition="all 0.8s"
                  />

                  {/* Overlay info */}
                  <Flex
                    id="brand_info"
                    direction="column"
                    alignItems="flex-start"
                    justifyContent="center"
                    gap={3}
                    p={4}
                    position="absolute"
                    bottom="-20px"
                    left="-40%"
                    transform="translate(50%, 30px)"
                    w="90%"
                    bg="linear-gradient(135deg, rgba(158, 156, 156, 0.68) 0%, rgba(30, 30, 30, 0.45) 100%)"
                    backdropFilter="blur(2px)"
                    borderRadius="5px"
                    boxShadow="0 10px 15px rgba(0,0,0,0.45), 0 0 15px rgba(255,255,255,0.25)"
                    opacity={0}
                    pointerEvents="none"
                    transition="opacity 0.8s ease, transform 0.8s ease"
                    fontFamily={'Stack Sans Headline, sans-serif'}
                  >
                    <Text as="span" color="white" fontSize={{ base: 'lg', md: 'xl' }}>
                      {logo.name}
                    </Text>
                    <Text as="span" color="orange.300" fontSize="sm" fontWeight="bold" letterSpacing="wide" alignItems="start">
                      Highlights
                    </Text>
                    <List spacing={2}>
                      {logo.item1 && (
                        <ListItem color="gray.200" display="flex" alignItems="center">
                          <ListIcon as={GoCheckCircleFill} color="orange.400" /> {logo.item1}
                        </ListItem>
                      )}
                      {logo.item2 && (
                        <ListItem color="gray.200" display="flex" alignItems="center">
                          <ListIcon as={GoCheckCircleFill} color="orange.400" /> {logo.item2}
                        </ListItem>
                      )}
                      {logo.item3 && (
                        <ListItem color="gray.200" display="flex" alignItems="center">
                          <ListIcon as={GoCheckCircleFill} color="orange.400" /> {logo.item3}
                        </ListItem>
                      )}
                    </List>
                  </Flex>
                </Flex>
              </MotionBox>
            ))}
          </Flex>
        </Flex>

        <IconButton
          aria-label="Scroll Right"
          icon={<ChevronRightIcon />}
          onClick={scrollRight}
          position="absolute"
          right="80px"
          top="50%"
          transform="translateY(-50%)"
          zIndex="2"
          fontSize="40px"
          color="white"
          backgroundColor="rgba(0,0,0,0.3)"
          _hover={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        />
      </Flex>

      <Estadisticas />
    </Flex>
  );
};

export default TrustSection;













