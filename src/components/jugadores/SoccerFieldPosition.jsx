import React from 'react';
import { Box, Circle, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const SoccerFieldPosition = ({ position = 'Forward' }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const normalized = (position || '').toLowerCase();
  const getHeatmapArea = () => {
    // Arquero - Áreas expandidas
    if (normalized === 'arquero') {
      return {
        center: { top: '41%', left: '-5%' },
        size: { width: '20%', height: '18%' },
        intensity: 1.5
      };
    }
    // Defensor Central 
    if (
      normalized === 'defensor central' ||
      normalized === 'defensor'
    ) {
      return {
        center: { top: '41%', left: '11%' },
        size: { width: '20%', height: '18%' },
        intensity: 1.5
      };
    }
    // Lateral Izquiero
    if (
      normalized === 'lateral izquierdo'
    ) {
      return {
        center: { top: '10%', left: '17%' },
        size: { width: '20%', height: '18%' },
        intensity: 1.5
      };
    }
    // Lateral Derecho
    if (
      normalized === 'lateral derecho'
    ) {
      return {
        center: { top: '70%', left: '17%' },
        size: { width: '20%', height: '18%' },
        intensity: 1.5
      };
    }
    // Mediocampista Ofensivo
    if (
      normalized === 'mediocampista ofensivo'
    ) {
      return {
        center: { top: '41%', left: '55%' },
       size: { width: '20%', height: '18%' },
        intensity: 1.5
      };
    }
    // Mediocampista Central
    if (
      normalized === 'mediocampista central'
    ) {
      return {
        center: { top: '41%', left: '30%' },
        size: { width: '20%', height: '18%' },
        intensity: 1.5
      };
    }
    // Mediocampista izquierdo
    if (
      normalized === 'mediocampista izquierdo'
    ) {
      return {
        center: { top: '10%', left: '40%' },
        size: { width: '20%', height: '18%' },
        intensity: 1.5
      };
    }
    // Delantero
    if (normalized === 'delantero') {
      return {
        center: { top: '41%', left: '73%' },
        size: { width: '20%', height: '18%' },
        intensity: 1.5
      };
    }
    // Extremo Derecho
    if (normalized === 'extremo derecho') {
      return {
        center: { top: '73%', left: '73%' },
        size: { width: '20%', height: '18%' },
        intensity: 1.5
      };
    }
    // Extremo Izquierdo
    if (normalized === 'extremo izquierdo') {
      return {
        center: { top: '9%', left: '73%' },
        size: { width: '20%', height: '18%' },
        intensity: 1.5
      };
    }
    // Fallback al centro (mediocampo)
    return {
      center: { top: '50%', left: '50%' },
      size: { width: '20%', height: '18%' },
      intensity: 1.5
    };
  };

  const heatmapData = getHeatmapArea();

  return (
    <Box
      position="relative"
      w="100%"
      h="100%"
      bg="transparent"
      backdropFilter="blur(6px)"
      borderRadius="lg"
      overflow="hidden"
    >
      {/* Heatmap layers - Efecto de mapa de calor expandido */}
      <MotionBox
        position="absolute"
        top={heatmapData.center.top}
        left={heatmapData.center.left}
        transform="translate(-50%, -50%)"
        width={heatmapData.size.width}
        height={heatmapData.size.height}
        initial={isMobile ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 60 }}
        animate={ isMobile ? { opacity: 1, scale: 1, y: 0} : { opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >    
        {/* Capa interna - naranja fuerte */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          width="45%"
          height="45%"
          borderRadius="50%"
          bgGradient={`radial(circle, rgba(234, 88, 12, ${heatmapData.intensity * 0.8}) 0%, rgba(249, 115, 22, ${heatmapData.intensity * 0.6}) 55%, rgba(251, 146, 60, ${heatmapData.intensity * 0.35}) 80%, transparent 95%)`}
          filter="blur(8px)"
        />
        
        {/* Núcleo central - punto más brillante y expandido */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          width={{ base: "30%" , md: "25%" }}
          height={{ base: "45%" , md: "50%" }}
          borderRadius="50%"
          bg={`orange.400`}
          boxShadow={`  0 0 30px rgba(251, 146, 60, ${heatmapData.intensity})`}
        />
      </MotionBox>

      {/* Pitch lines */}
      <Box position="absolute" inset="8px" border="1px solid" borderColor="whiteAlpha.700" borderRadius="md">
        {/* Línea de medio campo */}
        <Box position="absolute" left="50%" top="0" bottom="0" w="1px" bg="whiteAlpha.700" />
        {/* Círculo central */}
        <Circle
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          size="38px"
          border="1px solid"
          borderColor="whiteAlpha.700"
        />
        {/* Punto central */}
        <Circle
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          size="3px"
          bg="whiteAlpha.700"
        />
        {/* Área grande izquierda */}
        <Box
          position="absolute"
          top="22%"
          left="0"
          w="18%"
          h="56%"
          borderTop="1px solid"
          borderBottom="1px solid"
          borderRight="1px solid"
          borderColor="whiteAlpha.700"
        />
        {/* Semicírculo área grande izquierda */}
        <Box
          position="absolute"
          top="50%"
          left={{base:"13%" , md:"15%"}}
          transform="translateY(-50%)"
          w="16px"
          h="35px"
          borderRadius="0 100% 100% 0"
          borderRight="1px solid"
          borderColor="whiteAlpha.700"
        />
        {/* Área chica izquierda */}
        <Box
          position="absolute"
          top="38%"
          left="0"
          w="7%"
          h="24%"
          borderTop="1px solid"
          borderBottom="1px solid"
          borderRight="1px solid"
          borderColor="whiteAlpha.700"
        />
        {/* Punto penal izquierdo */}
        <Circle
          position="absolute"
          top="50%"
          left="12%"
          transform="translate(-50%, -50%)"
          size="3px"
          bg="whiteAlpha.700"
        />
        {/* Área grande derecha */}
        <Box
          position="absolute"
          top="22%"
          right="0"
          w="18%"
          h="56%"
          borderTop="1px solid"
          borderBottom="1px solid"
          borderLeft="1px solid"
          borderColor="whiteAlpha.700"
        />
        {/* Semicírculo área grande derecha */}
        <Box
          position="absolute"
          top="50%"
          right={{base:"13%" , md:"15%"}}
          transform="translateY(-50%)"
          w="16px"
          h="35px"
          borderRadius="100% 0 0 100%"
          borderLeft="1px solid"
          borderColor="whiteAlpha.700"
        />
        {/* Área chica derecha */}
        <Box
          position="absolute"
          top="38%"
          right="0"
          w="7%"
          h="24%"
          borderTop="1px solid"
          borderBottom="1px solid"
          borderLeft="1px solid"
          borderColor="whiteAlpha.700"
        />
        {/* Punto penal derecho */}
        <Circle
          position="absolute"
          top="50%"
          right="12%"
          transform="translate(50%, -50%)"
          size="3px"
          bg="whiteAlpha.700"
        />
      </Box>
    </Box>
  );
};

export default SoccerFieldPosition;
