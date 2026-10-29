import React from 'react';
import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import { motion, useReducedMotion } from 'framer-motion';
import CircularProgress from '@/components/jugadores/CircularProgress';

const MotionBox = motion(Box);

// Panel de rendimiento para directores técnicos (reemplaza la cancha de los jugadores).
// Espera `stats` con: partidos, ganados, empatados, perdidos, golesFavor, golesContra.
const RECORD = [
  { key: 'ganados', name: 'Ganados', color: 'orange.400' },
  { key: 'empatados', name: 'Empatados', color: 'whiteAlpha.600' },
  { key: 'perdidos', name: 'Perdidos', color: 'whiteAlpha.300' },
];

const SectionTitle = ({ children, aside }) => (
  <Flex justify="space-between" align="baseline" mb={3}>
    <Text fontSize="xs" color="orange.300" fontWeight="bold" textTransform="uppercase">
      {children}
    </Text>
    {aside ? <Text fontSize="xs" color="whiteAlpha.600">{aside}</Text> : null}
  </Flex>
);

function DTStats({ stats, compact = false }) {
  const reduceMotion = useReducedMotion();
  if (!stats?.partidos) return null;

  const { partidos, ganados = 0, empatados = 0, golesFavor = 0, golesContra = 0 } = stats;
  const hasGoles = stats.golesFavor != null || stats.golesContra != null;
  const rendimiento = Math.round(((ganados * 3 + empatados) / (partidos * 3)) * 10000) / 100;
  const diferencia = golesFavor - golesContra;
  const promedio = (n) => (n / partidos).toFixed(2);

  const goles = [
    { label: 'Goles a favor', value: golesFavor, sub: `${promedio(golesFavor)} por partido` },
    { label: 'Goles en contra', value: golesContra, sub: `${promedio(golesContra)} por partido` },
    { label: 'Diferencia', value: diferencia > 0 ? `+${diferencia}` : diferencia, sub: 'de gol', accent: true },
  ];

  return (
    <Flex
      w="100%"
      h={compact ? 'auto' : '100%'}
      direction="column"
      justify={hasGoles ? 'space-between' : 'center'}
      gap={compact ? 5 : 6}
      bg="whiteAlpha.50"
      borderRadius="lg"
      border="1px solid"
      borderColor="whiteAlpha.200"
      p={{ base: 4, md: 5 }}
    >
      <Box>
        <SectionTitle aside={`${partidos} partidos dirigidos`}>Rendimiento como DT</SectionTitle>
        <Flex align="center" gap={{ base: 4, md: 6 }} direction={compact ? 'column' : 'row'}>
          <CircularProgress value={rendimiento} label="Efectividad" size={compact ? 90 : 110} />

          <Flex direction="column" flex="1" w="100%" gap={3}>
            <Grid templateColumns="repeat(3, 1fr)" gap={2}>
              {RECORD.map((r) => (
                <Box
                  key={r.key}
                  bg="whiteAlpha.50"
                  borderRadius="md"
                  borderTop="2px solid"
                  borderTopColor={r.color}
                  py={3}
                  textAlign="center"
                >
                  <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="black" color="white" lineHeight="1">
                    {stats[r.key] || 0}
                  </Text>
                  <Text fontSize="2xs" color="whiteAlpha.700" textTransform="uppercase" letterSpacing="wider" mt={1}>
                    {r.name}
                  </Text>
                </Box>
              ))}
            </Grid>

            <Flex
              h={2}
              borderRadius="full"
              overflow="hidden"
              bg="whiteAlpha.100"
              role="img"
              aria-label={RECORD.map((r) => `${stats[r.key] || 0} ${r.name.toLowerCase()}`).join(', ')}
            >
              {RECORD.map((r, i) => (
                <MotionBox
                  key={r.key}
                  bg={r.color}
                  h="100%"
                  initial={reduceMotion ? false : { width: 0 }}
                  animate={{ width: `${((stats[r.key] || 0) / partidos) * 100}%` }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: 'easeOut' }}
                />
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Box>

      {hasGoles && (
      <Box>
        <SectionTitle>Goles</SectionTitle>
        <Grid templateColumns="repeat(3, 1fr)" gap={2}>
          {goles.map((g) => (
            <Box key={g.label} bg="whiteAlpha.50" borderRadius="md" px={3} py={3}>
              <Text fontSize="2xs" color="whiteAlpha.700" textTransform="uppercase" letterSpacing="wider">
                {g.label}
              </Text>
              <Text
                fontSize={{ base: 'xl', md: '2xl' }}
                fontWeight="black"
                color={g.accent ? 'orange.400' : 'white'}
                lineHeight="1.2"
                mt={1}
              >
                {g.value}
              </Text>
              <Text fontSize="2xs" color="whiteAlpha.500">{g.sub}</Text>
            </Box>
          ))}
        </Grid>
      </Box>
      )}
    </Flex>
  );
}

export { DTStats };
