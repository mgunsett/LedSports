import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Heading,
  Image,
  Text,
  Flex,
  IconButton,
  Button,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

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

const brands = [
  {
    img: jugador_mainero,
    name: 'Juan Mainero',
    Firstname: 'Juan',
    Lastname: 'Mainero',
    birthDate: '15/03/1995',
    country: 'Argentina',
    position: 'Extremo derecho',
    club: 'Club Atlético Ejemplo',
    number: '7',
    height: '1,78 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_ade,
    name: 'Jugador Ade',
    Firstname: 'Pedro',
    Lastname: 'Ade',
    fullName: 'Pedro Ade',
    birthDate: '22/07/1994',
    country: 'Brasil',
    position: 'Delantero centro',
    club: 'Futbol Club Demo',
    number: '9',
    height: '1,82 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_callejo,
    name: 'Jugador Callejo',
    Firstname: 'Marcos',
    Lastname: 'Callejo',
    fullName: 'Marcos Callejo',
    birthDate: '01/11/1993',
    country: 'Uruguay',
    position: 'Lateral izquierdo',
    club: 'Club Deportivo Prueba',
    number: '3',
    height: '1,75 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_campisi,
    name: 'Jugador Campisi',
    Firstname: 'Lucas',
    Lastname: 'Campisi',
    fullName: 'Lucas Campisi',
    birthDate: '09/05/1996',
    country: 'Argentina',
    position: 'Mediocampista central',
    club: 'Club Atlético Central',
    number: '5',
    height: '1,80 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_correa,
    name: 'Jugador Correa',
    Firstname: 'Diego',
    Lastname: 'Correa',
    fullName: 'Diego Correa',
    birthDate: '30/06/1992',
    country: 'Chile',
    position: 'Defensor central',
    club: 'Unión Deportiva Modelo',
    number: '2',
    height: '1,85 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_gonzapiovi,
    name: 'Jugador Gonzapiovi',
    Firstname: 'Gonzalo',
    Lastname: 'Piovi',
    fullName: 'Gonzalo Piovi',
    birthDate: '05/02/1994',
    country: 'Argentina',
    position: 'Lateral / Central',
    club: 'Racing Club (ejemplo)',
    number: '33',
    height: '1,84 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_carmelo,
    name: 'Jugador Carmelo',
    Firstname: 'Carmelo',
    Lastname: 'Díaz',
    fullName: 'Carmelo Díaz',
    birthDate: '18/09/1990',
    country: 'Paraguay',
    position: 'Delantero',
    club: 'Club Guaraní (ejemplo)',
    number: '11',
    height: '1,79 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_farias,
    name: 'Facundo Farias',
    Firstname: 'Facundo',
    Lastname: 'Farias',
    fullName: 'Facundo Farias',
    birthDate: '02/12/1998',
    country: 'Argentina',
    position: 'Enganche',
    club: 'Club Atlético Norte',
    number: '10',
    height: '1,76 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_gonzasosa,
    name: 'Gonzalo Sosa',
    Firstname: 'Gonzalo',
    Lastname: 'Sosa',
    fullName: 'Gonzalo Sosa',
    birthDate: '21/01/1997',
    country: 'Argentina',
    position: 'Volante ofensivo',
    club: 'Club Deportivo Sur',
    number: '20',
    height: '1,74 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_jonitorres,
    name: 'Jonatan Torres',
    Firstname: 'Jonatan',
    Lastname: 'Torres',
    fullName: 'Jonatan Torres',
    birthDate: '10/04/1995',
    country: 'Colombia',
    position: 'Extremo',
    club: 'Club América (ejemplo)',
    number: '17',
    height: '1,81 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_keki,
    name: 'Keki Piovi',
    Firstname: 'Keki',
    Lastname: 'Piovi',
    fullName: 'Keki Piovi',
    birthDate: '29/08/1999',
    country: 'Argentina',
    position: 'Mediapunta',
    club: 'Club del Sur',
    number: '19',
    height: '1,73 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_lotti,
    name: 'Franco Lotti',
    Firstname: 'Franco',
    Lastname: 'Lotti',
    fullName: 'Franco Lotti',
    birthDate: '03/03/1994',
    country: 'Argentina',
    position: 'Delantero extremo',
    club: 'Club Atlético Este',
    number: '14',
    height: '1,80 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_luka,
    name: 'Luka Romero',
    Firstname: 'Luka',
    Lastname: 'Romero',
    fullName: 'Luka Romero',
    birthDate: '26/01/2000',
    country: 'Croacia',
    position: 'Mediocampista mixto',
    club: 'Dinamo FC (ejemplo)',
    number: '8',
    height: '1,83 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_oroz,
    name: 'Ignacio Oroz', 
    Firstname: 'Ignacio',
    Lastname: 'Oroz',
    fullName: 'Ignacio Oroz',
    birthDate: '14/07/1993',
    country: 'Argentina',
    position: 'Mediocampista ofensivo',
    club: 'Racing Club (ejemplo)',
    number: '27',
    height: '1,79 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_runi,
    name: 'Ramiro Runi',
    Firstname: 'Ramiro',
    Lastname: 'Runi',
    fullName: 'Ramiro Runi',
    birthDate: '19/10/1991',
    country: 'Uruguay',
    position: 'Defensor lateral',
    club: 'Club Oriental',
    number: '4',
    height: '1,77 m',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
  },
  {
    img: jugador_zuqi,
    name: 'Fernando Zuqi',
    Firstname: 'Fernando',
    Lastname: 'Zuqi',
    fullName: 'Fernando Zuqi',
    birthDate: '07/09/1996',
    country: 'Chile',
    position: 'Volante de contención',
    club: 'Club Pacífico',
    number: '6',
    height: '1,81 m',
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
  const [scrollAmount, setScrollAmount] = useState(0);
  const animationRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);

  const animateScrollTo = (target, duration = 500) => {
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

  useEffect(() => {
    if (!containerRef.current) return;

    const measureCardWidth = () => {
      if (!containerRef.current) return;
      const el = containerRef.current;
      const firstCard = el.querySelector('#brand');
      if (!firstCard) return;

      const rect = firstCard.getBoundingClientRect();
      const styles = window.getComputedStyle(firstCard);
      const marginLeft = parseFloat(styles.marginLeft) || 0;
      const marginRight = parseFloat(styles.marginRight) || 0;
      const totalWidth = rect.width + marginLeft + marginRight;
      setScrollAmount(totalWidth);
    };

    measureCardWidth();
    window.addEventListener('resize', measureCardWidth);
    return () => window.removeEventListener('resize', measureCardWidth);
  }, []);

  const scrollLeft = () => {
    const el = containerRef.current;
    if (!el) return;
    const max = Math.max(0, el.scrollWidth - el.clientWidth);

    setScrollPosition((prev) => {
      const next = prev - scrollAmount;
      if (next < 0) {
        const lastIndex = Math.floor(max / scrollAmount) || 0;
        return clampToBounds(lastIndex * scrollAmount);
      }
      return clampToBounds(next);
    });
  };
  const scrollRight = () => {
    const el = containerRef.current;
    if (!el) return;
    const max = Math.max(0, el.scrollWidth - el.clientWidth);

    setScrollPosition((prev) => {
      const next = prev + scrollAmount;
      if (next > max) {
        return 0;
      }
      return clampToBounds(next);
    });
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
        mb={{ base: '20px', md: '100px' }}
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
          overflow="hidden"
          maxW={{ base: '100%', md: '75%' }}
          minW={{ base: '100%', md: '75%' }}
          margin="auto"
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
                  mt="50px"
                  mx={{ base: '-5px', md: '20px' }}
                  w={{ base: '320px', md: '230px' }}
                  h="300px"
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
                    maxH={{ base: '300px', md: '280px' }}
                    maxW={{ base: '320px', md: '300px' }}
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
                    gap={2}
                    p={4}
                    position="absolute"
                    bottom="-20px"
                    left={{ base: '-5%', md: '-40%' }}
                    transform="translate(50%, 30px)"
                    w={{ base: '60%', md: '90%' }}
                    h={{ base: '40%', md: '45%' }}
                    bg="linear-gradient(135deg, rgba(158, 156, 156, 0.68) 0%, rgba(30, 30, 30, 0.45) 100%)"
                    backdropFilter="blur(2px)"
                    borderRadius="5px"
                    boxShadow="0 10px 15px rgba(0,0,0,0.45), 0 0 15px rgba(255,255,255,0.25)"
                    opacity={0}
                    pointerEvents="none"
                    transition="opacity 0.8s ease, transform 0.8s ease"
                    fontFamily={'Stack Sans Headline, sans-serif'}
                  >
                    <Text as="span" color="white" fontSize={{ base: 'md', md: 'md'}}>
                      {logo.name}
                    </Text>
                    <Text as="span" color="orange.300" fontSize="sm" fontWeight="bold" letterSpacing="wide" alignItems="start">
                      Highlights
                    </Text>
                      <Button
                        id="ficha_button"
                        variant="outline"
                        colorScheme="white"
                        size="sm"
                        mt={2}
                        w="100%"
                        _hover={{
                          backgroundColor: 'gray.700',
                          borderColor: 'orange.400',
                        }}
                      >
                        + Info
                      </Button>
                    
                   
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
          right={{ base: '10px', md: '80px' }}
          top="50%"
          transform="translateY(-50%)"
          zIndex="2"
          fontSize="40px"
          color="white"
          backgroundColor="rgba(0,0,0,0.3)"
          _hover={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        />
      </Flex>
    </Flex>
  );
};

export default TrustSection;













