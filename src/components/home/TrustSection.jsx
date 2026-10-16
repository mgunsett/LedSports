import { lazy, Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Box, Flex, Heading, Image, Text, useDisclosure } from '@chakra-ui/react';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';
import { brands } from '@/data/jugadores';

const FichaJugador = lazy(() => import('@/components/jugadores/FichaJugador'));

/*
 * "Nos eligieron" · versión Foco (B2 · Fila)
 * Desktop: toda la sección entra en una pantalla. Encabezado en una fila (título | texto + "Ver todos")
 *          y debajo el escenario: foto del jugador | datos | grilla de miniaturas 3×4.
 *          La foto y las miniaturas se dimensionan según el alto real del escenario (container query units).
 * Mobile:  foto, datos y una tira de tarjetas deslizable con nombre.
 * Rota cada 6 s mientras la sección está en pantalla; se pausa con el mouse encima, con foco de teclado,
 * con la ficha abierta o con "reducir movimiento". "Ver ficha" abre FichaJugador sin salir de la home.
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
const NAV_H = '80px'; // alto del Navbar fijo
const EASE_OUT = [0.23, 1, 0.32, 1];
const LINE = 'rgba(255,255,255,.12)';
const MD = '@media (min-width: 48em)';
// Tamaño de miniatura en desktop: 4 filas que entran en el alto del escenario
const THUMB = 'clamp(60px, calc((100cqh - 72px) / 4), 112px)';
const MotionBox = motion(Box);
const hoverOnly = (styles) => ({ '@media (hover: hover) and (pointer: fine)': { '&:hover': styles } });

const capitalize = (s = '') => s.charAt(0).toUpperCase() + s.slice(1);
const countryOf = (p) => (p.country || '').split(',').pop().trim();
const crestOf = (p) => p.clubLogoActual?.[0]?.logo;
const shortName = (name = '') => `${name.charAt(0)}. ${name.split(' ').slice(-1)[0]}`;

const Header = () => (
  <Flex
    direction={{ base: 'column', md: 'row' }}
    align={{ base: 'flex-start', md: 'flex-end' }}
    justify="space-between"
    gap={{ base: '14px', md: '24px' }}
    flexShrink={0}
  >
    <Box>
      
      <Heading
        as="h2"
        m="12px 0 0"
        fontSize={{ base: '44px', md: 'clamp(40px, 4.6vw, 72px)' }}
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
    </Box>
    <Flex direction={{ base: 'column', md: 'row' }} align={{ base: 'flex-start', md: 'flex-end' }} gap={{ base: '14px', md: '24px' }}>
      <Text m="0" maxW="35ch" textAlign={{ base: 'left', md: 'right' }} color="whiteAlpha.700" fontSize={{ base: '15px', md: 'clamp(15px, 1.15vw, 17px)' }} lineHeight="1.55">
        Más de 350 deportistas confiaron su marca en nosotros. Estos son algunos.
      </Text>
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
        Ver todos <GoArrowRight aria-hidden="true" />
      </Flex>
    </Flex>
  </Flex>
);

const MetaPill = ({ children }) => (
  <Box as="span" px="13px" py="8px" borderRadius="full" border={`1px solid ${LINE}`} bg="blackAlpha.400" fontSize="13px" color="whiteAlpha.800">
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
  const railRef = useRef(null);
  const progressRef = useRef(0);
  const inView = useInView(sectionRef, { amount: 0.4 });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [fichaPlayer, setFichaPlayer] = useState(null);

  const goTo = useCallback(
    (i) => {
      const next = (i + players.length) % players.length;
      progressRef.current = 0;
      setProgress(0);
      setIndex(next);
      // En mobile la tira se desliza: mantener visible la tarjeta activa (sin mover la página)
      const rail = railRef.current;
      const card = rail?.children[next];
      if (rail && card && rail.scrollWidth > rail.clientWidth) {
        rail.scrollTo({ left: Math.max(0, card.offsetLeft - 20), behavior: reduceMotion ? 'auto' : 'smooth' });
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
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
        transition: { duration: 0.45, ease: EASE_OUT },
      };

  return (
    <Box
      as="section"
      id="trust"
      ref={sectionRef}
      aria-label="Nos eligieron"
      bg="black"
      display="flex"
      flexDirection="column"
      gap={{ base: '22px', md: 'clamp(16px, 2.4vh, 26px)' }}
      px={{ base: '20px', md: 'clamp(20px, 6vw, 96px)' }}
      pt={{ base: '80px', md: '32px' }}
      pb={{ base: '100px', md: '28px' }}
      mb={{ base: 0, md: '300px' }}
      mt={{ base: 0, md: '200px' }}
      scrollMarginTop={NAV_H}
      sx={{ [MD]: { height: `calc(100svh - ${NAV_H})`, minHeight: '600px', maxHeight: '860px' } }}
    >
      <Header />

      {/* Escenario */}
      <Box
        position="relative"
        flex={{ md: '1' }}
        minH={{ md: 0 }}
        display="flex"
        flexDirection="column"
        borderRadius={{ base: '24px', md: '28px' }}
        overflow="hidden"
        border={`1px solid ${LINE}`}
        bg="radial-gradient(ellipse 70% 80% at 30% 100%, #2a1606 0%, #0d0d0d 60%, #050505 100%)"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
        sx={{
          [MD]: {
            display: 'grid',
            gridTemplateColumns: 'minmax(0, .9fr) minmax(0, 1fr) auto',
            containerType: 'size',
          },
        }}
      >
        {/* Número gigante */}
        <AnimatePresence mode="wait" initial={false}>
          <MotionBox
            key={`num-${index}`}
            aria-hidden="true"
            position="absolute"
            right="14%"
            top="10px"
            fontSize="200px"
            lineHeight=".8"
            fontWeight="700"
            fontStyle="italic"
            letterSpacing="-0.06em"
            color="transparent"
            pointerEvents="none"
            sx={{
              WebkitTextStroke: '2px rgba(237,137,54,.35)',
              [MD]: { right: 'auto', top: 'auto', left: '1%', bottom: '-8%', fontSize: '600px' },
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {p.number}
          </MotionBox>
        </AnimatePresence>

        {/* Foto */}
        <Flex
          position="relative"
          align="flex-end"
          justify="center"
          overflow="hidden"
          pt="28px"
          px="16px"
          sx={{ [MD]: { alignSelf: 'stretch', pt: 0, px: '12px' } }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <MotionBox key={`img-${index}`} display="flex" alignItems="flex-end" justifyContent="center" maxW="100%" {...swap}>
              <Image
                src={p.img}
                alt={p.name}
                draggable={false}
                display="block"
                w="auto"
                maxW="100%"
                objectFit="contain"
                objectPosition="50% 100%"
                h="min(44svh, 400px)"
                filter="drop-shadow(0 30px 40px rgba(0,0,0,.7))"
                sx={{ [MD]: { height: 'min(88cqh, 640px)' } }}
              />
            </MotionBox>
          </AnimatePresence>
        </Flex>

        {/* Datos */}
        <Box position="relative" alignSelf={{ base: 'stretch', md: 'center' }} p={{ base: '20px 20px 8px', md: 'clamp(20px, 2.4vw, 36px)' }} aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <MotionBox key={`info-${index}`} {...swap}>
              {crest && <Image src={crest} alt={p.club} w="48px" h="48px" objectFit="contain" mb="14px" />}
              <Text color="orange.400" fontSize="12px" fontWeight="600" letterSpacing=".16em" textTransform="uppercase">
                {capitalize(p.position)}
              </Text>
              <Heading
                as="h3"
                m="8px 0 0"
                fontSize={{ base: '36px', md: 'clamp(34px, 3.4vw, 58px)' }}
                lineHeight=".92"
                fontWeight="700"
                letterSpacing="-0.03em"
                fontStyle="italic"
              >
                {p.name}
              </Heading>
              <Flex wrap="wrap" gap="8px" m="18px 0 22px">
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
                minH="48px"
                px="22px"
                borderRadius="lg"
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

        {/* Miniaturas: tira deslizable en mobile, grilla 3×4 en desktop */}
        <Box
          ref={railRef}
          role="tablist"
          aria-label="Jugadores destacados"
          position="relative"
          display="flex"
          gap="10px"
          overflowX="auto"
          p="8px 20px 20px"
          sx={{
            scrollSnapType: 'x mandatory',
            scrollPaddingInline: '20px',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
            WebkitMaskImage: 'linear-gradient(90deg, #000 88%, transparent)',
            maskImage: 'linear-gradient(90deg, #000 88%, transparent)',
            [MD]: {
              alignSelf: 'center',
              display: 'grid',
              gridTemplateColumns: `repeat(3, ${THUMB})`,
              gridAutoRows: THUMB,
              overflow: 'visible',
              padding: '0 22px 0 6px',
              WebkitMaskImage: 'none',
              maskImage: 'none',
            },
          }}
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
                flex="0 0 78px"
                w="78px"
                display="flex"
                flexDirection="column"
                borderRadius="16px"
                border="1px solid"
                borderColor={active ? 'orange.500' : LINE}
                bg="#141414"
                overflow="hidden"
                transition="border-color 200ms ease"
                _focusVisible={{ outline: '2px solid', outlineColor: 'orange.400', outlineOffset: '2px' }}
                sx={{
                  scrollSnapAlign: 'start',
                  '& img': { filter: active ? 'none' : 'grayscale(1) brightness(.7)', transition: 'filter 250ms ease' },
                  ...hoverOnly({ '& img': { filter: 'none' } }),
                  [MD]: { width: THUMB, height: THUMB, flex: 'none', display: 'block', bg: '#111' },
                }}
              >
                <Image
                  src={pl.img}
                  alt=""
                  loading="lazy"
                  w="100%"
                  h="84px"
                  maxW="none"
                  objectFit="cover"
                  objectPosition="50% 4%"
                  sx={{ [MD]: { height: '130%', objectPosition: '50% 0' } }}
                />
                <Text
                  as="span"
                  display="block"
                  p="6px 4px 8px"
                  fontSize="11px"
                  fontWeight="600"
                  lineHeight="1.1"
                  textAlign="center"
                  color={active ? 'white' : 'whiteAlpha.700'}
                  noOfLines={1}
                  sx={{ [MD]: { display: 'none' } }}
                >
                  {shortName(pl.name)}
                </Text>
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
        </Box>
      </Box>

      {fichaPlayer && (
        <Suspense fallback={null}>
          <FichaJugador isOpen={isOpen} onClose={onClose} jugador={fichaPlayer} />
        </Suspense>
      )}
    </Box>
  );
};

export default TrustSection;
