import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Heading,
  Image,
  Text,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { brands } from '../data/jugadores';
import '../components/TrustSection.css';

const MotionBox = motion(Box);

const TrustSection = () => {

  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  //-----------------------------------------------------------------
  // PRUEBA INTERSECTION OBSERVER PARA DESTACAR TARJETA ACTIVA EN MOBILE
  //-----------------------------------------------------------------

  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
  if (!isMobile || !containerRef.current) return;

  const cards = containerRef.current.querySelectorAll('.brand');
  if (!cards.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.dataset.index);
          setActiveIndex(index);
        }
      });
    },
    {
      root: containerRef.current,
      threshold: 0.6, // 60% visible
    }
  );

  cards.forEach((card) => observer.observe(card));

  return () => observer.disconnect();
}, [isMobile]);

  //-----------------------------------------------------------------
  //-----------------------------------------------------------------
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  const [scrollPosition, setScrollPosition] = useState(0);
  
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

  const animateScrollTo = (target, duration = 900) => {
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
      if (!containerRef.current) return;
      // if user started dragging, cancel the smooth animation
      if (isDragging) {
        animationRef.current = null;
        return;
      }
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

  // Center the first visible card on mount
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      if (containerRef.current) {
        const centered = getClosestCardCenter(containerRef.current.scrollLeft);
        setScrollPosition(centered);
      }
    });
    return () => cancelAnimationFrame(id);
  }, []);

  // Calcular el centro de la tarjeta más cercana (mobile)
  const getClosestCardCenter = (targetScroll) => {
  const el = containerRef.current;
  if (!el) return targetScroll;

  const cards = el.querySelectorAll('.brand');
  if (!cards.length) return targetScroll;

  const containerCenter = targetScroll + el.clientWidth / 2;

  let closest = null;
  let minDistance = Infinity;

  cards.forEach((card) => {
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const distance = Math.abs(cardCenter - containerCenter);

    if (distance < minDistance) {
      minDistance = distance;
      closest = card;
    }
  });

  if (!closest) return targetScroll;

  const centeredScroll =
    closest.offsetLeft +
    closest.offsetWidth / 2 -
    el.clientWidth / 2;

  return clampToBounds(centeredScroll);
};


  const scrollLeft = () => {
    const el = containerRef.current;
    if (!el) return;
    const cards = el.querySelectorAll('.brand');
    if (!cards.length) return;

    const firstCard = cards[0];
    const rect = firstCard.getBoundingClientRect();
    const styles = window.getComputedStyle(firstCard);
    const marginLeft = parseFloat(styles.marginLeft) || 0;
    const marginRight = parseFloat(styles.marginRight) || 0;
    const cardWidth = rect.width + marginLeft + marginRight;

    const scrollAmount = isMobile ? cardWidth : cardWidth * 2;
    const newPosition = clampToBounds(el.scrollLeft - scrollAmount);
    const finalPosition = getClosestCardCenter(newPosition);
    setScrollPosition(finalPosition);
  };

  const scrollRight = () => {
    const el = containerRef.current;
    if (!el) return;
    const cards = el.querySelectorAll('.brand');
    if (!cards.length) return;

    const firstCard = cards[0];
    const rect = firstCard.getBoundingClientRect();
    const styles = window.getComputedStyle(firstCard);
    const marginLeft = parseFloat(styles.marginLeft) || 0;
    const marginRight = parseFloat(styles.marginRight) || 0;
    const cardWidth = rect.width + marginLeft + marginRight;

    const scrollAmount = isMobile ? cardWidth : cardWidth * 2;
    const newPosition = clampToBounds(el.scrollLeft + scrollAmount);
    const finalPosition = getClosestCardCenter(newPosition);
    setScrollPosition(finalPosition);
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
    if (containerRef.current) {
      if (Math.abs(velocityRef.current) > 0.5) {
        const inertiaMultiplier = isMobile ? 200 : 150;
        const inertiaScroll = velocityRef.current * inertiaMultiplier;
        const targetScroll = containerRef.current.scrollLeft - inertiaScroll;
        const centeredScroll = getClosestCardCenter(targetScroll);
        setScrollPosition(centeredScroll);
      } else {
        const centeredScroll = getClosestCardCenter(containerRef.current.scrollLeft);
        setScrollPosition(centeredScroll);
      }
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
    if (containerRef.current) {
      if (Math.abs(velocityRef.current) > 0.5) {
        const inertiaScroll = velocityRef.current * 200;
        const targetScroll = containerRef.current.scrollLeft - inertiaScroll;
        const centeredScroll = getClosestCardCenter(targetScroll);
        setScrollPosition(centeredScroll);
      } else {
        const centeredScroll = getClosestCardCenter(containerRef.current.scrollLeft);
        setScrollPosition(centeredScroll);
      }
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
            px={{ base: 'calc(50vw - 160px)', md: '0' }}
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
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              userSelect: 'none',
            }}
          >
            {brands.map((logo, i) => {
              const isActive = isMobile
                  ? activeIndex === i
                  : hoveredIndex === i;
              return (
              <MotionBox
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  viewport={{ once: true, root: containerRef.current || undefined }}
                  overflow='visible'
                >
                <Flex
                  className="brand"
                  data-index={i}
                  position="relative"
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  mt="40px"
                  mx={{ base: '5px', md: '20px' }}
                  w={{ base: '320px', md: '230px' }}
                  h="340px"
                  transition="all 1.2s"
                  onMouseEnter={() => !isMobile && setHoveredIndex(i)}
                  onMouseLeave={() => !isMobile && setHoveredIndex(null)}
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
                    transition="all 0.5s ease-out"
                    borderRadius="8px"
                    filter={isActive ? 'grayscale(0%) brightness(1)' : 'grayscale(100%) brightness(0.9)'}
                    transform={isActive ? 'translateY(-20px) scale(1.05)' : 'none'}
                  />

                  {/* #brand_info */}
                  <Box
                    id="brand_info"
                    position="absolute"
                    bottom={{ base: '10px', md: '10px' }}
                    left="50%"
                    transform="translate(-50%, -10px)"
                    w={{ base: '70%', md: '100%' }}
                    opacity={isActive ? 1 : 0}
                    pointerEvents={isActive ? 'auto' : 'none'}
                    transition="all 1.2s ease-out"
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
                      <Box
                        position="absolute"
                        inset={0}
                        borderWidth="1px"
                        borderRadius="lg"
                        pointerEvents="none"
                        borderColor={isActive ? 'whiteAlpha.600' : 'rgba(255,255,255,0.6)'}
                        opacity={ isActive ? 0.8 : 0.4}
                        boxShadow={
                          isActive
                            ? 'inset 0 0 30px rgba(255, 255, 255, 0.3)'
                            : 'none'
                        }
                        transition="all 0.9s"
                      />

                      <Flex
                        position="relative"
                        zIndex={10}
                        align="flex-start"
                        justify="space-between"
                        gap={3}
                      >
                        <Box flex="1">
                          <Box
                            as={motion.div}
                            initial={{ x: -100, opacity: 0 }}
                            animate={{
                              x: isActive ? 0 : -100,
                              opacity: isActive ? 1 : 0,
                            }}
                            transition={{ duration: 0.9 }}
                            mb={2}

                          >
                            <Flex align="center" gap={2}>
                              <Box w={{ base: "45px", md: "30px" }} h="2px" bg="orange.400" />
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
                          <Box
                            as={motion.div}
                            initial={{ y: 0 }}
                            animate={{ y: isActive ? 0 : 20 }}
                            transition={{ duration: 0.7 }}
                          >
                            <Text
                              as="h3"
                              color="white"
                              fontSize={{ base: '12px', md: 'md' }}
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
                            w={isActive ? '100%' : '60px'}
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
            )})}
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













