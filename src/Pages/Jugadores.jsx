import { Box, Flex, Heading, Text, Grid, Input, InputGroup, InputLeftElement, useDisclosure } from "@chakra-ui/react";
import { useMemo, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
const FichaJugador = lazy(() => import("@/components/jugadores/FichaJugador"));
import Contact from "@/components/common/Contact";
import { BsChevronDoubleDown } from "react-icons/bs";
import { brands } from "../data/jugadores";
import { tecnicos } from "../data/tecnicos";
import PlayerCard from "@/components/jugadores/PlayerCard";
import CoachCard from "@/components/jugadores/CoachCard";
// import FichaJugador from "@/components/jugadores/FichaJugador";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionBox = motion(Box);
const MotionGrid = motion(Grid);

// Agrupación por posición a partir del campo `position` de jugadores.js
const GROUPS = [
  { key: 'arq', label: 'Arqueros' },
  { key: 'def', label: 'Defensores' },
  { key: 'med', label: 'Mediocampistas' },
  { key: 'del', label: 'Delanteros' },
];
const groupOf = (position = '') => {
  const p = position.toLowerCase();
  if (p.includes('arquero')) return 'arq';
  if (p.includes('defensor') || p.includes('lateral')) return 'def';
  if (p.includes('medio')) return 'med';
  return 'del';
};
const normalize = (s = '') => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const counts = brands.reduce((acc, b) => {
  const g = groupOf(b.position);
  acc[g] = (acc[g] || 0) + 1;
  return acc;
}, {});

const EASE_OUT_CSS = 'cubic-bezier(0.23, 1, 0.32, 1)';
const VIEWS = [
  { key: 'jugadores', label: 'Jugadores', count: brands.length },
  { key: 'tecnicos', label: 'Directores técnicos', count: tecnicos.length },
];

/* Selector "Jugadores | Directores técnicos" (tabs con flechas del teclado) */
const ViewTabs = ({ active, onChange }) => {
  const refs = useRef([]);
  const onKeyDown = (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const next = (active + (e.key === 'ArrowRight' ? 1 : -1) + VIEWS.length) % VIEWS.length;
    onChange(next);
    refs.current[next]?.focus();
  };
  return (
    <Box
      role="tablist"
      aria-label="Elegir listado"
      position="relative"
      display="inline-grid"
      gridTemplateColumns="1fr 1fr"
      w={{ base: '100%', md: 'auto' }}
      p="5px"
      mb="26px"
      borderRadius="full"
      border="1px solid rgba(255,255,255,.12)"
      bg="#0b0b0b"
      onKeyDown={onKeyDown}
    >
      <Box
        aria-hidden="true"
        position="absolute"
        top="5px"
        bottom="5px"
        left="5px"
        w="calc(50% - 5px)"
        borderRadius="full"
        bg="orange.400"
        transform={active === 1 ? 'translateX(100%)' : 'none'}
        transition={`transform 450ms ${EASE_OUT_CSS}`}
      />
      {VIEWS.map((v, i) => (
        <Box
          key={v.key}
          as="button"
          type="button"
          role="tab"
          id={`tab-${v.key}`}
          aria-selected={active === i}
          aria-controls={`panel-${v.key}`}
          tabIndex={active === i ? 0 : -1}
          ref={(el) => (refs.current[i] = el)}
          onClick={() => onChange(i)}
          position="relative"
          zIndex={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="10px"
          minH="50px"
          px={{ base: '10px', md: '26px' }}
          borderRadius="full"
          fontWeight="600"
          fontSize={{ base: '14px', md: '16px' }}
          whiteSpace="nowrap"
          color={active === i ? 'black' : 'whiteAlpha.700'}
          transition="color 250ms ease"
          _focusVisible={{ outline: '2px solid', outlineColor: 'orange.400', outlineOffset: '3px' }}
        >
          {v.label}
          <Text as="small" fontSize="12px" opacity={0.65} sx={{ fontVariantNumeric: 'tabular-nums' }}>
            {v.count}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

const Jugadores = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [jugadorSeleccionado, setJugadorSeleccionado] = useState(null);
  const [group, setGroup] = useState('all');
  const [query, setQuery] = useState('');
  const [view, setView] = useState(0);
  const [coachQuery, setCoachQuery] = useState('');

  const coaches = useMemo(() => {
    const q = normalize(coachQuery.trim());
    return tecnicos.filter((t) => !q || normalize(t.name).includes(q) || normalize(t.club).includes(q));
  }, [coachQuery]);

  const openFicha = (person) => {
    setJugadorSeleccionado(person);
    onOpen();
  };

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    return brands.filter(
      (b) =>
        (group === 'all' || groupOf(b.position) === group) &&
        (!q || normalize(b.name).includes(q) || normalize(b.club).includes(q))
    );
  }, [group, query]);

  return (
    <Box bg="black" minHeight="100vh" overflow="hidden">
      {/* Hero Section */}
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={6}
        pt={{ base: 32, md: 48 }}
        pb={20}
        px={4}
      >
       <Flex
          justifyContent="start"
          alignItems="start"
          gap={2}
          flexDirection="row"
          alignSelf="start"
          pl={{ base: 4, md: 16, lg: '250px' }}
          mb={{ base: 6, md: 10 }}
        >
          <MotionBox
            w={'2px'}
            h={{ base: '70px', md: '80px' }}
            bg="orange.400"
            mr={2}
            borderRadius="full"
            boxShadow="0px 0px 12px 1px rgba(245,160,15,0.56)"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          ></MotionBox>
          <Box>
          <MotionHeading
            as="h1"
            fontSize='5xl'
            fontWeight="bold"
            color="white"
            lineHeight="shorter"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Juga
            <MotionText
              fontSize='5xl'
              as="span"
              color="orange.400"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
             dores
            </MotionText>
          </MotionHeading>
          <MotionText
            mt="6px"
            maxW="42ch"
            fontSize="16px"
            fontWeight="400"
            lineHeight="1.5"
            color="whiteAlpha.700"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Jugadores y directores técnicos que confían su marca en nosotros.
          </MotionText>
          </Box>
        </Flex>

        {/* Animated chevron */}
        
      </Flex>

      {/* Pestañas + filtros + buscador */}
      <Box maxW="1180px" mx="auto" px={{ base: 4, md: 8 }}>
        <ViewTabs active={view} onChange={setView} />
      </Box>

      {view === 0 ? (
      <Box role="tabpanel" id="panel-jugadores" aria-labelledby="tab-jugadores">
      <Box maxW="1180px" mx="auto" px={{ base: 4, md: 8 }}>
        <Flex
          align="center"
          justify="space-between"
          gap="14px"
          wrap="wrap"
          pb="22px"
          mb="26px"
          borderBottom="1px solid rgba(255,255,255,.12)"
        >
          <Flex role="group" aria-label="Filtrar por posición" gap="8px" overflowX="auto" sx={{ scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
            {[{ key: 'all', label: 'Todos' }, ...GROUPS].map((g) => {
              const active = group === g.key;
              const count = g.key === 'all' ? brands.length : counts[g.key];
              return (
                <Box
                  as="button"
                  type="button"
                  key={g.key}
                  aria-pressed={active}
                  onClick={() => setGroup(g.key)}
                  flex="0 0 auto"
                  display="inline-flex"
                  alignItems="center"
                  gap="8px"
                  minH="42px"
                  px="16px"
                  borderRadius="full"
                  border="1px solid"
                  borderColor={active ? 'orange.500' : 'rgba(255,255,255,.12)'}
                  bg={active ? 'orange.500' : 'rgba(255,255,255,.04)'}
                  color={active ? 'black' : 'white'}
                  fontSize="14px"
                  fontWeight="600"
                  transition="background-color 180ms ease, border-color 180ms ease, color 180ms ease, transform 140ms cubic-bezier(0.23, 1, 0.32, 1)"
                  _active={{ transform: 'scale(0.96)' }}
                  _focusVisible={{ outline: '2px solid', outlineColor: 'orange.400', outlineOffset: '2px' }}
                  sx={active ? undefined : { '@media (hover: hover) and (pointer: fine)': { '&:hover': { borderColor: 'rgba(237,137,54,.6)' } } }}
                >
                  {g.label}
                  <Text as="small" fontSize="12px" color={active ? 'blackAlpha.700' : 'whiteAlpha.500'} sx={{ fontVariantNumeric: 'tabular-nums' }}>
                    {count}
                  </Text>
                </Box>
              );
            })}
          </Flex>
          <InputGroup maxW={{ base: '100%', md: '280px' }} flex={{ base: '1 1 100%', md: '0 1 280px' }}>
            <InputLeftElement pointerEvents="none" h="44px" color="whiteAlpha.500">
              <FiSearch />
            </InputLeftElement>
            <Input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar jugador o club"
              aria-label="Buscar jugador o club"
              autoComplete="off"
              h="44px"
              borderRadius="full"
              borderColor="rgba(255,255,255,.12)"
              bg="#0b0b0b"
              color="white"
              fontSize="16px"
              _placeholder={{ color: 'whiteAlpha.500' }}
              _hover={{ borderColor: 'rgba(255,255,255,.25)' }}
              _focusVisible={{ borderColor: 'orange.500', boxShadow: 'none' }}
            />
          </InputGroup>
        </Flex>
      </Box>

      {/* Grilla de jugadores */}
      <Box maxW="1180px" mx="auto" px={{ base: 4, md: 8 }} pb={20}>
        {filtered.length ? (
          <MotionGrid
            templateColumns={{ base: 'repeat(2, minmax(0, 1fr))', md: 'repeat(auto-fill, minmax(210px, 1fr))' }}
            gap={{ base: '10px', md: '18px' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {filtered.map((player) => (
              <PlayerCard
                key={player.name}
                player={player}
                onClick={() => openFicha(player)}
              />
            ))}
          </MotionGrid>
        ) : (
          <Text py="60px" textAlign="center" color="whiteAlpha.700">
            No encontramos jugadores con ese filtro. Probá con otro nombre o posición.
          </Text>
        )}
      </Box>
      </Box>
      ) : (
        <Box role="tabpanel" id="panel-tecnicos" aria-labelledby="tab-tecnicos" maxW="1180px" mx="auto" px={{ base: 4, md: 8 }} pb={20}>
          <Flex align="center" justify="space-between" gap="14px" wrap="wrap" pb="22px" mb="26px" borderBottom="1px solid rgba(255,255,255,.12)">
            <Text m="0" color="whiteAlpha.600" fontSize="15px">
              Entrenadores que confían su marca en LED Sports.
            </Text>
            <InputGroup maxW={{ base: '100%', md: '280px' }} flex={{ base: '1 1 100%', md: '0 1 280px' }}>
              <InputLeftElement pointerEvents="none" h="44px" color="whiteAlpha.500">
                <FiSearch />
              </InputLeftElement>
              <Input
                type="search"
                value={coachQuery}
                onChange={(e) => setCoachQuery(e.target.value)}
                placeholder="Buscar DT o club"
                aria-label="Buscar DT o club"
                autoComplete="off"
                h="44px"
                borderRadius="full"
                borderColor="rgba(255,255,255,.12)"
                bg="#0b0b0b"
                color="white"
                fontSize="16px"
                _placeholder={{ color: 'whiteAlpha.500' }}
                _hover={{ borderColor: 'rgba(255,255,255,.25)' }}
                _focusVisible={{ borderColor: 'orange.500', boxShadow: 'none' }}
              />
            </InputGroup>
          </Flex>
          {coaches.length ? (
            <Grid templateColumns={{ base: 'minmax(0, 1fr)', lg: 'repeat(2, minmax(0, 1fr))' }} gap={{ base: '12px', md: '18px' }}>
              {coaches.map((c) => (
                <CoachCard key={c.name} coach={c} onClick={() => openFicha(c)} />
              ))}
            </Grid>
          ) : (
            <Text py="60px" textAlign="center" color="whiteAlpha.700">
              {tecnicos.length ? 'No encontramos directores técnicos con esa búsqueda.' : 'Muy pronto vas a conocer a los directores técnicos que trabajan con nosotros.'}
            </Text>
          )}
        </Box>
      )}
      <MotionBox
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize={{ base: '50px', md: '80px' }}
        mt={{ base: 2, md: '50px' }}
      >
        <BsChevronDoubleDown color="orange" />
      </MotionBox>
      <Contact />
      {jugadorSeleccionado && (
        <Suspense fallback={<div>Loading...</div>}>
          <FichaJugador
            isOpen={isOpen}
            onClose={onClose}
            jugador={jugadorSeleccionado}
          />
        </Suspense>
      )}
    </Box>
  );
};
export default Jugadores;

