import { lazy, Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Box, Flex, Heading, Image, Text, useDisclosure } from '@chakra-ui/react';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';
import { brands } from '@/data/jugadores';

const FichaJugador = lazy(() => import('@/components/jugadores/FichaJugador'));

/*
 * "Nos eligieron" · versión Foco
 * Un jugador destacado en grande (foto, número, escudo, posición, club, país) y una tira de miniaturas para elegir.
 * Rota solo cada 6 s mientras la sección está en pantalla; se pausa con el mouse encima, con el foco del teclado
 * o si el usuario prefiere menos movimiento. "Ver ficha" abre FichaJugador sin salir de la home.
 *
 * Para cambiar los destacados, editá FEATURED (nombres exactos de src/data/jugadores.js).
 */
const FEATURED = [
  'Andres Gudiño',
  'Ricardo Ade',
  'Tomas Áviles',
  'Gonzalo Piovi',
  'Ezequiel Piovi',
  'Fernando Zuqui',
  'Facundo Farias',
  'Guido Mainero',
  'Nicolas Orsini',
  'Javier Correa',
  'Ronaldo Martinez',
  'Jonatan Torres',
];

const ROTATE_MS = 6000;
const EASE_OUT = [0.23, 1, 0.32, 1];
const LINE = 'rgba(255,255,255,.12)';
const MotionBox = motion(Box);
const hoverOnly = (styles) => ({ '@media (hover: hover) and (pointer: fine)': { '&:hover': styles } });

const capitalize = (s = '') => s.charAt(0).toUpperCase() + s.slice(1);
const countryOf = (p) => (p.country || '').split(',').pop().trim();
const crestOf = (p) => p.clubLogoActual?.[0]?.logo;

const Header = () => (
  <Flex
    direction={{ base: 'column', md: 'row' }}
    align={{ base: 'flex-start', md: 'flex-end' }}
    justify="space-between"
    gap="24px"
    mb={{ base: '24px', md: 'clamp(24px, 4vw, 48px)' }}
  >
    <Box>
      <Flex align="center" gap="10px" color="orange.400" fontSize="13px" fontWeight="600" letterSpacing=".18em" textTransform="uppercase">
        <Box w="22px" h="2px" bg="orange.500" borderRadius="2px" />
        Jugadores
      </Flex>
      <Heading
        as="h2"
        m="14px 0 0"
        fontSize={{ base: '44px', md: 'clamp(42px, 6vw, 96px)' }}
        lineHeight=".92"
        fontWeight="700"
        letterSpacing="-0.03em"
        color="white"
      >
        Nos{' '}
        <Text as="em" fontStyle="italic" color="orange.400">
          eligieron
        </Text>
      </Heading>
      <Text mt="16px" maxW="40ch" color="whiteAlpha.700" fontSize={{ base: '15px', md: 'clamp(15px, 1.25vw, 18px)' }} lineHeight="1.6">
        Más de 350 deportistas confiaron su marca en nosotros. Estos son algunos.
      </Text>
    </Box>
    <Flex
      as={RouterLink}
      to="/jugadores"
      align="center"
      gap="10px"
      minH="48px"
      px="22px"
      borderRadius="full"
      border="1.5px solid"
      borderColor="whiteAlpha.500"
      fontWeight="600"
      fontSize="15px"
      whiteSpace="nowrap"
      transition="border-color 200ms ease, background-color 200ms ease, transform 160ms cubic-bezier(0.23, 1, 0.32, 1)"
      _active={{ transform: 'scale(0.97)' }}
      _focusVisible={{ outline: '2px solid', outlineColor: 'orange.400', outlineOffset: '3px' }}
      sx={{
        '& svg': { color: 'orange.400', transition: 'transform 200ms cubic-bezier(0.23, 1, 0.32, 1)' },
        ...hoverOnly({ borderColor: 'orange.500', bg: 'rgba(237,137,54,.1)', '& svg': { transform: 'translateX(3px)' } }),
      }}
    >
      Ver todos los jugadores <GoArrowRight aria-hidden="true" />
    </Flex>
  </Flex>
);

const MetaPill = ({ children }) => (
  <Box as="span" px="14px" py="9px" borderRadius="full" border={`1px solid ${LINE}`} bg="blackAlpha.400" fontSize="14px" color="whiteAlpha.800">
    {children}
  </Box>
);

const TrustSection = () => {
  const players = useMemo(() => {
    const byName = new Map(brands.map((b) => [b.name, b]));
    const picked = FEATURED.map((n) => byName.get(n)).filter(Boolean);
    return picked.length ? picked : brands.slice(0, 12);
  }, []);

  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const stripRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.4 });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [fichaPlayer, setFichaPlayer] = useState(null);

  const progressRef = useRef(0);

  const goTo = useCallback(
    (i) => {
      const next = (i + players.length) % players.length;
      progressRef.current = 0;
      setProgress(0);
      setIndex(next);
      const thumb = stripRef.current?.children[next];
      const strip = stripRef.current;
      if (thumb && strip) {
        // centrar la miniatura dentro de la tira sin mover la página
        strip.scrollTo({ left: thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2, behavior: reduceMotion ? 'auto' : 'smooth' });
      }
    },
    [players.length, reduceMotion]
  );

  // Rotación automática con barra de progreso
  const running = inView && !paused && !isOpen && !reduceMotion;
  useEffect(() => {
    if (!running) return;
    let raf;
    let last = performance.now();
    const tick = (now) => {
      const dt = now - last;
      last = now;
      if (document.visibilityState === 'visible') {
        progressRef.current += dt / ROTATE_MS;
        if (progressRef.current >= 1) {
          goTo(index + 1);
          return;
        }
        setProgress(progressRef.current);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [running, index, goTo]);

  const openFicha = () => {
    setFichaPlayer(players[index]);
    onOpen();
  };

  const p = players[index];
  const crest = crestOf(p);
  const swap = reduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.2 } }
    : {
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
        transition: { duration: 0.5, ease: EASE_OUT },
      };

  return (
    <Box as="section" id="trust" ref={sectionRef} aria-label="Nos eligieron" bg="black" px={{ base: '20px', md: 'clamp(20px, 6vw, 96px)' }} pt={{ base: '80px', md: 'clamp(80px, 11vh, 120px)' }} pb={{ base: '100px', md: '160px' }}>
      <Header />

      {/* Escenario */}
      <Box
        position="relative"
        display="grid"
        gridTemplateColumns={{ base: '1fr', md: 'minmax(0, 1.05fr) minmax(0, .95fr)' }}
        alignItems="end"
        minH={{ md: 'min(70vh, 640px)' }}
        borderRadius={{ base: '24px', md: '32px' }}
        overflow="hidden"
        border={`1px solid ${LINE}`}
        bg="radial-gradient(ellipse 70% 80% at 30% 100%, #2a1606 0%, #0d0d0d 60%, #050505 100%)"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        {/* Número gigante */}
        <AnimatePresence mode="wait" initial={false}>
          <MotionBox
            key={`num-${index}`}
            aria-hidden="true"
            position="absolute"
            left={{ base: 'auto', md: '2%' }}
            right={{ base: '-4%', md: 'auto' }}
            top={{ base: '2%', md: 'auto' }}
            bottom={{ base: 'auto', md: '-6%' }}
            fontSize={{ base: '62vw', md: 'clamp(220px, 34vw, 520px)' }}
            lineHeight=".8"
            fontWeight="700"
            fontStyle="italic"
            letterSpacing="-0.06em"
            color="transparent"
            pointerEvents="none"
            sx={{ WebkitTextStroke: '2px rgba(237,137,54,.35)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {p.number}
          </MotionBox>
        </AnimatePresence>

        {/* Foto */}
        <Flex position="relative" h="100%" align="flex-end" justify="center" pt={{ base: '20px', md: '30px' }}>
          <AnimatePresence mode="wait" initial={false}>
            <MotionBox key={`img-${index}`} {...swap}>
              <Image
                src={p.img}
                alt={p.name}
                draggable={false}
                h={{ base: '44vh', md: 'min(64vh, 600px)' }}
                w="auto"
                maxW="none"
                filter="drop-shadow(0 30px 40px rgba(0,0,0,.7))"
              />
            </MotionBox>
          </AnimatePresence>
        </Flex>

        {/* Datos */}
        <Box position="relative" p={{ base: '22px 22px 26px', md: 'clamp(28px, 4vw, 56px)' }} alignSelf="center" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <MotionBox key={`info-${index}`} {...swap}>
              {crest && <Image src={crest} alt={p.club} w="56px" h="56px" objectFit="contain" mb="18px" />}
              <Text color="orange.400" fontSize="13px" fontWeight="600" letterSpacing=".16em" textTransform="uppercase">
                {capitalize(p.position)}
              </Text>
              <Heading
                as="h3"
                m="10px 0 0"
                fontSize={{ base: '40px', md: 'clamp(40px, 5vw, 80px)' }}
                lineHeight=".92"
                fontWeight="700"
                letterSpacing="-0.03em"
                fontStyle="italic"
              >
                {p.name}
              </Heading>
              <Flex wrap="wrap" gap="10px" m="22px 0 28px">
                <MetaPill>
                  #<Text as="b" color="white" fontWeight="600">{p.number}</Text>
                </MetaPill>
                <MetaPill>
                  <Text as="b" color="white" fontWeight="600">{p.club}</Text>
                </MetaPill>
                {countryOf(p) && <MetaPill>{countryOf(p)}</MetaPill>}
              </Flex>
              <Flex
                as="button"
                type="button"
                onClick={openFicha}
                align="center"
                gap="10px"
                minH="50px"
                px="24px"
                borderRadius="full"
                bg="orange.500"
                color="white"
                fontWeight="600"
                fontSize="15px"
                transition="background-color 200ms ease, transform 160ms cubic-bezier(0.23, 1, 0.32, 1)"
                _active={{ transform: 'scale(0.97)' }}
                _focusVisible={{ outline: '2px solid', outlineColor: 'orange.400', outlineOffset: '3px' }}
                sx={hoverOnly({ bg: 'orange.400' })}
              >
                Ver ficha <GoArrowRight aria-hidden="true" />
              </Flex>
            </MotionBox>
          </AnimatePresence>
        </Box>
      </Box>

      {/* Miniaturas */}
      <Flex
        ref={stripRef}
        role="tablist"
        aria-label="Jugadores destacados"
        gap="12px"
        mt="18px"
        p="4px 2px 8px"
        overflowX="auto"
        sx={{ scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}
      >
        {players.map((pl, i) => {
          const active = i === index;
          return (
            <Box
              as="button"
              type="button"
              role="tab"
              key={pl.name}
              aria-selected={active}
              aria-label={pl.name}
              onClick={() => goTo(i)}
              position="relative"
              flex="0 0 auto"
              w={{ base: '70px', md: '86px' }}
              h={{ base: '70px', md: '86px' }}
              borderRadius={{ base: '16px', md: '20px' }}
              border="1px solid"
              borderColor={active ? 'orange.500' : LINE}
              bg="#111"
              overflow="hidden"
              transition="border-color 200ms ease"
              _focusVisible={{ outline: '2px solid', outlineColor: 'orange.400', outlineOffset: '2px' }}
              sx={{
                '& img': { filter: active ? 'none' : 'grayscale(1) brightness(.7)', transition: 'filter 250ms ease' },
                ...hoverOnly({ '& img': { filter: 'none' } }),
              }}
            >
              <Image src={pl.img} alt="" loading="lazy" w="100%" h="135%" maxW="none" objectFit="cover" objectPosition="50% 0" />
              <Box
                position="absolute"
                left="0"
                right="0"
                bottom="0"
                h="3px"
                bg="orange.500"
                transformOrigin="0 50%"
                style={{ transform: `scaleX(${active ? progress : 0})` }}
              />
            </Box>
          );
        })}
      </Flex>

      {fichaPlayer && (
        <Suspense fallback={null}>
          <FichaJugador isOpen={isOpen} onClose={onClose} jugador={fichaPlayer} />
        </Suspense>
      )}
    </Box>
  );
};

export default TrustSection;
