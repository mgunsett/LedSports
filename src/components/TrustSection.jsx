import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Heading,
  Image,
  Text,
  Flex,
  IconButton,
  filter,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import jugador_mainero from '../assets/jugador_mainero.png';
import jugador_ade from '../assets/jugador_ade.png';
import jugador_callejo from '../assets/jugador_callejo.png';
import jugador_campisi from '../assets/jugador_campisi.png';
import jugador_correa from '../assets/jugador_correa.png';
import jugador_gonzapiovi from '../assets/jugador_gonzapiovi.png';
import jugador_carmelo from '../assets/jugador_carmelo.png';
import jugador_farias from '../assets/jugador_farias.png';
import jugador_gonzasosa from '../assets/jugador_gonzasosa.png';
import jugador_jonitorres from '../assets/jugador_jonitorres.png';
import jugador_keki from '../assets/jugador_keki.png';
import jugador_lotti from '../assets/jugador_lotti.png';
import jugador_luka from '../assets/jugador_luka.png';
import jugador_oroz from '../assets/jugador_oroz.png';
import jugador_runi from '../assets/jugador_runi.png';
import jugador_zuqi from '../assets/jugador_zuqi.png';

import '../components/TrustSection.css';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);

const brands = [
  {
    img: jugador_mainero,
    name: 'Guido Mainero',
    Firstname: 'Guido',
    Lastname: 'Mainero',
    birthDate: '23/03/1995',
    country: 'Córdoba, Argentina',
    position: 'Extremo derecho',
    club: 'Platense',
    number: '7',
    height: '1,77 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_ade,
    name: 'Ricardo Ade',
    Firstname: 'Ricardo',
    Lastname: 'Ade',
    birthDate: '21/05/1990',
    country: 'San Marcos, Haití',
    position: 'Defensor',
    club: 'Liga de Quito',
    number: '4',
    height: '1,90 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_callejo,
    name: 'Facundo Callejo',
    Firstname: 'Facundo',
    Lastname: 'Callejo',
    birthDate: '02/07/1992',
    country: 'Tandil, Argentina',
    position: 'Delantero',
    club: 'Cusco FC',
    number: '9',
    height: '1,78 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_campisi,
    name: 'Nicolas Campisi',
    Firstname: 'Nicolas',
    Lastname: 'Campisi',
    birthDate: '29/10/1996',
    country: 'Río Negro, Argentina',
    position: 'Arquero',
    club: 'Miami FC',
    number: '1',
    height: '1,89 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_correa,
    name: 'Javier Correa',
    Firstname: 'Javier',
    Lastname: 'Correa',
    birthDate: '23/10/1992',
    country: 'Córdoba, Argentina',
    position: 'Delantero',
    club: 'Colo-Colo',
    number: '9',
    height: '1,84 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_gonzapiovi,
    name: 'Gonzalo Piovi',
    Firstname: 'Gonzalo',
    Lastname: 'Piovi',
    birthDate: '08/09/1994',
    country: 'Buenos Aires, Argentina',
    position: 'Lateral Izquierdo',
    club: 'Cruz Azul',
    number: '33',
    height: '1,80 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_carmelo,
    name: 'Carmelo Argañaraz',
    Firstname: 'Carmelo',
    Lastname: 'Argañaraz',
    birthDate: '27/01/1996',
    country: 'Santa Cruz, Bolivia',
    position: 'Delantero',
    club: 'Kalamata FC',
    number: '11',
    height: '1,76 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_farias,
    name: 'Facundo Farias',
    Firstname: 'Facundo',
    Lastname: 'Farias',
    birthDate: '22/08/2002',
    country: 'Santa Fe, Argentina',
    position: 'Mediocampista',
    club: 'Estudiantes LP',
    number: '11',
    height: '1,72 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_gonzasosa,
    name: 'Gonzalo Sosa',
    Firstname: 'Gonzalo',
    Lastname: 'Sosa',
    birthDate: '04/01/1989',
    country: 'Santa Fe, Argentina',
    position: 'Delantero',
    club: 'Ñublense',
    number: '9',
    height: '1,85 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_jonitorres,
    name: 'Jonatan Torres',
    Firstname: 'Jonatan',
    Lastname: 'Torres',
    birthDate: '29/12/1996',
    country: 'Santa Fe, Argentina',
    position: 'Delantero',
    club: 'Cerro Porteño',
    number: '27',
    height: '1,87 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_keki,
    name: 'Keki Piovi',
    Firstname: 'Lucas',
    Lastname: 'Piovi',
    birthDate: '20/08/1992',
    country: 'Buenos Aires, Argentina',
    position: 'Mediocampista',
    club: 'Estudiantes LP',
    number: '21',
    height: '1,72 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_lotti,
    name: 'Augusto Lotti',
    Firstname: 'Augusto',
    Lastname: 'Lotti',
    birthDate: '10/06/1996',
    country: 'Buenos Aires, Argentina',
    position: 'Delantero',
    club: 'Platense',
    number: '21',
    height: '1,80 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_luka,
    name: 'Luka Romero',
    Firstname: 'Luka',
    Lastname: 'Romero',
    birthDate: '18/11/2004',
    country: 'Durango, México',
    position: 'Mediocampista',
    club: 'Cruz Azul',
    number: '18',
    height: '1,69 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_oroz,
    name: 'Nicolas Oroz', 
    Firstname: 'Nicolas',
    Lastname: 'Oroz',
    birthDate: '01/04/1994',
    country: 'San Luis, Argentina',
    position: 'Mediocampista',
    club: 'Argentinos Jr',
    number: '21',
    height: '1,74 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_runi,
    name: 'Ronaldo Martinez',
    Firstname: 'Ronaldo',
    Lastname: 'Martinez',
    birthDate: '25/04/1996',
    country: 'Paraguay',
    position: 'Delantero',
    club: 'Platense',
    number: '21',
    height: '1,78 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_zuqi,
    name: 'Fernando Zuqui',
    Firstname: 'Fernando',
    Lastname: 'Zuqui',
    birthDate: '27/11/1991',
    country: 'Mendoza, Argentina',
    position: 'Volante de contención',
    club: 'U Católica',
    number: '18',
    height: '1,74 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
];

const TrustSection = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const animationRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const velocityRef = useRef(0);
  const lastPosRef = useRef(0);
  const lastTimeRef = useRef(0);

  // Detectar si es mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const animateScrollTo = (target, duration = 800) => {
    if (!containerRef.current) return;
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }

    const start = containerRef.current.scrollLeft;
    const change = target - start;
    const startTime = performance.now();
    
    // Ease out quart para transición más suave
    const easeOutQuart = (t) => {
      return 1 - Math.pow(1 - t, 4);
    };

    const step = (now) => {
      if (isDragging || !containerRef.current) return;
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(t);
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

  // Calcular el centro de la tarjeta más cercana (mobile)
  const getClosestCardCenter = (scrollLeft) => {
    if (!containerRef.current) return scrollLeft;
    const el = containerRef.current;
    const cards = el.querySelectorAll('#brand');
    if (!cards.length) return scrollLeft;

    const containerRect = el.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closest = null;
    let minDistance = Infinity;

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(cardCenter - containerCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closest = card;
      }
    });

    if (closest) {
      const rect = closest.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2 - containerRect.left;
      const offset = cardCenter - containerRect.width / 2;
      return clampToBounds(scrollLeft + offset);
    }

    return scrollLeft;
  };

  const scrollLeft = () => {
    const el = containerRef.current;
    if (!el) return;
    const cards = el.querySelectorAll('#brand');
    if (!cards.length) return;

    const firstCard = cards[0];
    const rect = firstCard.getBoundingClientRect();
    const styles = window.getComputedStyle(firstCard);
    const marginLeft = parseFloat(styles.marginLeft) || 0;
    const marginRight = parseFloat(styles.marginRight) || 0;
    const cardWidth = rect.width + marginLeft + marginRight;

    const scrollAmount = isMobile ? cardWidth : cardWidth * 2;
    const newPosition = clampToBounds(el.scrollLeft - scrollAmount);
    
    // En mobile, centramos la tarjeta
    const finalPosition = isMobile ? getClosestCardCenter(newPosition) : newPosition;
    setScrollPosition(finalPosition);
  };

  const scrollRight = () => {
    const el = containerRef.current;
    if (!el) return;
    const cards = el.querySelectorAll('#brand');
    if (!cards.length) return;

    const firstCard = cards[0];
    const rect = firstCard.getBoundingClientRect();
    const styles = window.getComputedStyle(firstCard);
    const marginLeft = parseFloat(styles.marginLeft) || 0;
    const marginRight = parseFloat(styles.marginRight) || 0;
    const cardWidth = rect.width + marginLeft + marginRight;

    const scrollAmount = isMobile ? cardWidth : cardWidth * 2;
    const newPosition = clampToBounds(el.scrollLeft + scrollAmount);
    
    // En mobile, centramos la tarjeta
    const finalPosition = isMobile ? getClosestCardCenter(newPosition) : newPosition;
    setScrollPosition(finalPosition);
  };

  useEffect(() => {
    if (containerRef.current) animateScrollTo(scrollPosition, 800);
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
    lastPosRef.current = e.pageX;
    lastTimeRef.current = Date.now();
    velocityRef.current = 0;
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
    
    // Calcular velocidad para inercia
    const now = Date.now();
    const timeDelta = now - lastTimeRef.current;
    if (timeDelta > 0) {
      velocityRef.current = (e.pageX - lastPosRef.current) / timeDelta;
    }
    lastPosRef.current = e.pageX;
    lastTimeRef.current = now;
    
    containerRef.current.scrollLeft = startScrollLeftRef.current - walk;
  };

  const endMouseDrag = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // Aplicar inercia suave al soltar
    if (Math.abs(velocityRef.current) > 0.5 && containerRef.current && isMobile) {
      const inertiaScroll = velocityRef.current * 150;
      const targetScroll = containerRef.current.scrollLeft - inertiaScroll;
      const centeredScroll = getClosestCardCenter(targetScroll);
      setScrollPosition(centeredScroll);
    } else if (isMobile && containerRef.current) {
      // Centrar la tarjeta más cercana
      const centeredScroll = getClosestCardCenter(containerRef.current.scrollLeft);
      setScrollPosition(centeredScroll);
    }
  };

  const onTouchStart = (e) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    hasDraggedRef.current = false;
    const touch = e.touches[0];
    startXRef.current = touch.pageX - containerRef.current.offsetLeft;
    startScrollLeftRef.current = containerRef.current.scrollLeft;
    lastPosRef.current = touch.pageX;
    lastTimeRef.current = Date.now();
    velocityRef.current = 0;
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
    
    // Calcular velocidad para inercia
    const now = Date.now();
    const timeDelta = now - lastTimeRef.current;
    if (timeDelta > 0) {
      velocityRef.current = (touch.pageX - lastPosRef.current) / timeDelta;
    }
    lastPosRef.current = touch.pageX;
    lastTimeRef.current = now;
    
    containerRef.current.scrollLeft = startScrollLeftRef.current - walk;
  };

  const onTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // Aplicar inercia suave al soltar
    if (Math.abs(velocityRef.current) > 0.5 && containerRef.current && isMobile) {
      const inertiaScroll = velocityRef.current * 200;
      const targetScroll = containerRef.current.scrollLeft - inertiaScroll;
      const centeredScroll = getClosestCardCenter(targetScroll);
      setScrollPosition(centeredScroll);
    } else if (isMobile && containerRef.current) {
      // Centrar la tarjeta más cercana
      const centeredScroll = getClosestCardCenter(containerRef.current.scrollLeft);
      setScrollPosition(centeredScroll);
    }
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
    direction="column" 
    alignItems="center" 
    justifyContent="center" 
    gap={6} 
    mb={'200px'}
    mt={18}
    >
      <Heading
        as="h2"
        fontSize={{ base: '3xl', md: '45px' }}
        color="white"
        fontWeight="bold"
        display="flex"
        alignItems="end"
        justifyContent="center"
        gap={2}
      >
        Nos <Text color="orange.500" fontSize={{ base: '35px', md: '50px' }}>eligieron</Text>
      </Heading>

      <Flex
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={2}
        overflowX="auto"
        overflowY="hidden"
        maxW="100%"
        minW={{ base: '100%', md: '75%' }}
        margin="auto"
        mb={{ base: '10px', md: '20px' }}
        position="relative"
      >
        <IconButton
          aria-label="Scroll Left"
          icon={<ChevronLeftIcon />}
          onClick={scrollLeft}
          position="absolute"
          left={{ base: '10px', md: '130px' }}
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
          overflow="visible"
          maxW={{ base: '100%', md: '79%' }}
          minW={{ base: '100%', md: '75%' }}
          m={'auto'}
          sx={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}
        >
          <Flex
            ref={containerRef}
            overflowX="auto"
            overflowY="hidden"
            gap={8}
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
                transition={{ duration: 0.2 }}
                viewport={{ once: true }}
                overflow="visible"
              >
                <Flex
                  id="brand"
                  position="relative"
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  mt="40px"
                  mx={{ base: '-5px', md: '20px' }}
                  w={{ base: '320px', md: '230px' }}
                  h="340px"
                  transition="all 0.8s"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  sx={{
                    '&:hover .image_brand': {
                      filter: 'grayscale(0%) brightness(1)',
                      transform: 'translateY(-20px) scale(1.05)',
                    },
                  }}
                >
                  <Image
                    className="image_brand"
                    src={logo.img}
                    alt={`Logo ${i}`}
                    maxH={{ base: '300px', md: '280px' }}
                    maxW={{ base: '320px', md: '300px' }}
                    borderRadius="8px"
                    filter="grayscale(100%) brightness(0.9)"
                    transition="all 0.8s"
                  />

                  {/* #brand_info */}
                  <Box
                    id="brand_info"
                    position="absolute"
                    bottom={{ base: '10px', md: '10px' }}
                    left="50%"
                    transform="translate(-50%, -10px)"
                    w={{ base: '60%', md: '100%' }}
                    opacity={hoveredIndex === i ? 1 : 0}
                    pointerEvents={hoveredIndex === i ? 'auto' : 'none'}
                    transition="all 0.7s ease-out"
                    overflow="visible"
                    fontFamily={'Stack Sans Headline, sans-serif'}
                  >
                    <Box
                      position="relative"
                      bg="blackAlpha.700"
                      backdropFilter="blur(5px)"
                      borderRadius="lg"
                      p={{ base: 4, md: 5 }}
                      overflow="visible"
                    >

                      {/* Border with glow effect */}
                      <Box
                        position="absolute"
                        inset={0}
                        borderWidth="1px"
                        borderRadius="lg"
                        pointerEvents="none"
                        borderColor={hoveredIndex === i ? 'whiteAlpha.600' : 'rgba(255,255,255,0.6)'}
                        opacity={hoveredIndex === i ? 0.8 : 0.4}
                        boxShadow={
                          hoveredIndex === i
                            ? 'inset 0 0 30px rgba(255, 255, 255, 0.3)'
                            : 'none'
                        }
                        transition="all 0.6s"
                      />

                      <Flex
                        position="relative"
                        zIndex={10}
                        align="flex-start"
                        justify="space-between"
                        gap={3}
                      >
                        <Box flex="1">
                          {/* Club with line - slides in from left */}
                          <Box
                            as={motion.div}
                            initial={{ x: -100, opacity: 0 }}
                            animate={{
                              x: hoveredIndex === i ? 0 : -100,
                              opacity: hoveredIndex === i ? 1 : 0,
                            }}
                            transition={{ duration: 0.6 }}
                            mb={2}
                          >
                            <Flex align="center" gap={2}>
                              <Box w="30px" h="2px" bg="orange.400" />
                              <Text
                                color="orange.400"
                                fontSize={{ base: '8px', md: '10px' }}
                                fontWeight="semibold"
                                textTransform="uppercase"
                                letterSpacing="wide"
                              >
                                {logo.club}
                              </Text>
                            </Flex>
                          </Box>

                          {/* Name */}
                          <Box
                            as={motion.div}
                            initial={{ y: 0 }}
                            animate={{ y: hoveredIndex === i ? 0 : 20 }}
                            transition={{ duration: 0.7 }}
                          >
                            <Text
                              as="h3"
                              color="white"
                              fontSize={{ base: 'sm', md: 'md' }}
                              fontWeight="black"
                              textTransform="uppercase"
                              lineHeight="tight"
                            >
                              {logo.name}
                            </Text>
                          </Box>

                          {/* Bottom expanding line */}
                          <Box
                            h="3px"
                            bg="orange.400"
                            mt={3}
                            boxShadow="0 0 15px rgba(251,146,60,0.6)"
                            transition="all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)"
                            w={hoveredIndex === i ? '100%' : '60px'}
                          />
                        </Box>

                        {/* Navigation button */}
                        <Box
                          as={motion.button}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{
                            opacity: hoveredIndex === i ? 1 : 0,
                            scale: hoveredIndex === i ? 1 : 0.8,
                          }}
                          transition={{ duration: 0.3 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate('/jugadores');
                          }}
                          aria-label="Ver jugadores"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          flexShrink={0}
                          w={{ base: 8, md: 9 }}
                          h={{ base: 8, md: 9 }}
                          borderRadius="full"
                          bg="orange.400Alpha.200"
                          borderWidth="1px"
                          borderColor="orange.400"
                          color="orange.400"
                          _hover={{
                            bg: 'orange.400',
                            color: 'white',
                            boxShadow: '0 0 20px rgba(251,146,60,0.5)',
                          }}
                        >
                          <ArrowForwardIcon />
                        </Box>
                      </Flex>
                    </Box>
                  </Box>
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
          right={{ base: '10px', md: '120px' }}
          top="50%"
          transform="translateY(-50%)"  
          zIndex="2"
          fontSize="40px"
          color="white"
          backgroundColor="rgba(0,0,0,0.3)" 
          _hover={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        />
      </Flex>
      <Box
        id='verMas'
        onClick={() => navigate('/jugadores')}
        position="relative"
        px={8}
        py={4}
        bg="transparent"
        borderWidth="1px"
        borderColor="whiteAlpha.500"
        borderRadius="lg"
        overflow="hidden"
        cursor="pointer"
        w={{ base: '70%', md: '15%' }}
        role="group"
        transition="all 0.6s ease-out"
        _hover={{
          borderColor: 'orange.400',
          transform: 'scale(1.02)',
          color: 'white',
        }}
      >  
      {/* Barra izquierda gruesa con animación mejorada */}
        <Box
          position="absolute" 
          top="0"
          left="0"
          w='4px'
          h='100%' 
          bg="orange.400"
          boxShadow="0 0 20px rgba(251, 146, 60, 0.6)"
          transition="all 0.3s ease-out"
          _groupHover={{
            width: '10px',
          }}
        />

      <Flex
        position="relative"
        align="center"
        gap={3}
      >
        <Box
          color="orange.400"
          display="flex"
          alignItems="center"
          justifyContent="center"
          filter="drop-shadow(0 0 8px rgba(251,146,60,0.6))"
          transition="all 0.6s ease-out"
          _groupHover={{
            color: "white",
            transform: 'translateX(20px)',
            fontSize: '20px',
          }}
        >
          <ArrowForwardIcon size={20} />
        </Box> 
        <Text
          color="orange.400"
          fontWeight="bold"
          fontSize="lg"
          letterSpacing="wide"
          _groupHover={{
            transform: 'translateX(20px)',
            color: 'white',
          }}
          transition="all 0.6s ease-out"
        >
          Ver más
        </Text>
      </Flex>
    </Box>  
    </Flex>
  );
};

export default TrustSection;













