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
import lukaromero from '../assets/lukaromero.png';
import ricardoade from '../assets/ricardoade.png';
import mainero from '../assets/mainero.png';
import luiszarate from '../assets/luiszarate.png';
import '../components/TrustSection.css';
import { GoCheckCircleFill } from 'react-icons/go';
import Estadisticas from './Estadisticas';


const MotionBox = motion(Box);

const brands = [
  {
    img: lukaromero,
    name: 'Luka Romero',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
    item3: 'lorem ipsum dolor',
  },
  {
    img: ricardoade,
    name: 'Ricardo Adebayo',
    item1: ' lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
    item3: 'lorem ipsum dolor',
  },
  {
    img: mainero,
    name: 'Mainero',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
    item3: 'lorem ipsum dolor',
  },
  {
    img: luiszarate,
    name: 'Luis Zarate',
    item1: 'lorem ipsum dolor ',
  },
   {
    img: mainero,
    name: 'Mainero',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
    item3: 'lorem ipsum dolor',
  },
  {
    img: luiszarate,
    name: 'Luis Zarate',
    item1: 'lorem ipsum dolor ',
    item2: 'lorem ipsum dolor',
    item3: 'lorem ipsum dolor',
  },
  {
    img: mainero,
    name: 'Mainero',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
    item3: 'lorem ipsum dolor',
  },
  {
    img: luiszarate,
    name: 'Luis Zarate',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
    item3: 'lorem ipsum dolor',
  },
   {
    img: mainero,
    name: 'Mainero',
    item1: 'lorem ipsum dolor ',
    item2: 'lorem ipsum dolor',
    item3: 'lorem ipsum dolor',
  },
  {
    img: luiszarate,
    name: 'Luis Zarate',
    item1: 'lorem ipsum dolor',
    item2: 'lorem ipsum dolor',
    item3: 'lorem ipsum dolor',
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const containerRef = useRef(null); 
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollAmount = 700;
  const animationRef = useRef(null);

  // Estados para drag/swipe
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);

  // Animación personalizada de scroll con duración controlable
  const animateScrollTo = (target, duration = 700) => {
    if (!containerRef.current) return;

    // Cancelar animación previa si existe
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }

    const start = containerRef.current.scrollLeft;
    const change = target - start;
    const startTime = performance.now();

    // Easing: easeInOutQuad
    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const step = (now) => {
      // Detener si el usuario está arrastrando
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

  // Evitar que el scroll programático se vaya fuera de los límites
  const clampToBounds = (val) => {
    const el = containerRef.current;
    if (!el) return val;
    const max = Math.max(0, el.scrollWidth - el.clientWidth);
    return Math.min(Math.max(0, val), max);
  };

  // Función para desplazar a la izquierda
  const scrollLeft = () => {
    setScrollPosition((prevPosition) => clampToBounds(prevPosition - scrollAmount));   
  };

  // Función para desplazar a la derecha
  const scrollRight = () => {
    setScrollPosition((prevPosition) => clampToBounds(prevPosition + scrollAmount));
  };

  useEffect(() => {
    if (containerRef.current) {  // Acceder al contenedor de forma directa
      animateScrollTo(scrollPosition, 900); // Ajusta 700ms a tu gusto (ej. 600-900)
    }
  }, [scrollPosition]);

  // Limpiar animación al desmontar
  useEffect(() => {
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Handlers de drag (mouse)
  const onMouseDown = (e) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    hasDraggedRef.current = false;
    startXRef.current = e.pageX - containerRef.current.offsetLeft;
    startScrollLeftRef.current = containerRef.current.scrollLeft;
    // Cancelar animación si el usuario comienza a arrastrar
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  const onMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = x - startXRef.current; // distancia arrastrada
    if (Math.abs(walk) > 3) hasDraggedRef.current = true; // umbral pequeño
    containerRef.current.scrollLeft = startScrollLeftRef.current - walk;
  };

  const endMouseDrag = () => {
    if (!isDragging) return;
    setIsDragging(false);
    // No hacemos nada más; hasDraggedRef se usa para bloquear clics si hubo arrastre
  };

  // Handlers de touch (mobile)
  const onTouchStart = (e) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    hasDraggedRef.current = false;
    const touch = e.touches[0];
    startXRef.current = touch.pageX - containerRef.current.offsetLeft;
    startScrollLeftRef.current = containerRef.current.scrollLeft;
    // Cancelar animación si el usuario comienza a arrastrar con touch
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

  // Bloquear clics cuando se arrastró para evitar navegaciones accidentales
  const onClickCapture = (e) => {
    if (hasDraggedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      // Reset para permitir próximos clics
      hasDraggedRef.current = false;
    }
  };

  return (
    <Flex
    direction={'column'}
    alignItems={'center'}
    justifyContent={'center'}
    gap={6}
    mb={20}
    >
       
    <Heading 
    as="h2" 
    fontSize={{ base: "3xl", md: "4xl" }} 
    color="white" 
    fontWeight="bold"
    display="flex"
    alignItems="center"
    justifyContent="center"
    gap={2}
    >
      Ya confian   
      <Text color="orange.500" fontWeight="bold">en nosotros</Text>
    </Heading>
    <IconButton
          aria-label="Scroll Left"
          icon={<ChevronLeftIcon />}
          onClick={scrollLeft}
          position="absolute"
          left="130px"
          top="70%"
          zIndex="1"
          fontSize="2xl"
          color={'white'}
          backgroundColor="rgba(0,0,0,0.3)"
          _hover={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        />
    <Flex
    className={`scrollCards ${visible ? 'reveal--visible' : ''}`}
    position="relative" 
    alignItems="center" 
    justifyContent="center"
    overflowY="hidden"
    maxW="75%"
    minW="75%"
    margin={'auto'}
    >
        <Flex
          ref={containerRef}
          overflowX="auto" // Scroll horizontal del carrusel
          overflowY="hidden" // Evita scroll vertical dentro del carrusel
          gap={2}
          padding={2}
          margin={'auto'}
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
                  gap={8}
                  transition="all 0.8s"
                  
                >
                  <Image
                    className='image_brand'
                    src={logo.img}
                    alt={`Logo ${i}`}
                    maxH="370px"
                    mx="60px"
                    maxW="370px"
                    overflow="hidden"
                    filter="grayscale(100%) brightness(0.9)"
                    transition="all 0.8s"
                    _groupHover={{
                      filter: 'grayscale(0%) brightness(1)',
                      transform: 'scale(1.05)',
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
                  margin={'auto'}
                  w={{ base: '100%', md: '70%' }}
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
                  _groupHover={{  maxHeight: '180px', opacity: 1, transform: 'translateY(0)', mt: 3, pointerEvents: 'auto' }}
                >
                  <Text
                    as="span"
                    color="white"
                    fontSize={{ base: 'lg', md: 'xl' }}
                    textAlign="center"
                    mt={4}
                  >
                    {logo.name}
                  </Text>
                  <Text as="span" color="orange.300" fontSize="sm" fontWeight="bold" letterSpacing="wide">
                    Highlights
                  </Text>
                  <List spacing={2}>
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
    </Flex>
    </Flex>
    <IconButton
          aria-label="Scroll Right"
          icon={<ChevronRightIcon />}
          onClick={scrollRight}
          position="absolute"
          right="80px"
          top="70%"
          zIndex="1"
          fontSize="2xl"
          color={'white'}
          backgroundColor="rgba(0,0,0,0.3)"
          _hover={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        />
        <Estadisticas/>
    </Flex>
  );
} 
export default TrustSection;















