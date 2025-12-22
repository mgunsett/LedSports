import React from 'react';
import { Box, Text, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const CircularProgress = ({ value, label, size = 100 }) => {
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  
  const variants = {
    mobileInitial:  { opacity: 0, scale: 0.4 },
    mobileAnimate:  { opacity: 1, scale: 1 }, 
    desktopInitial: { opacity: 0, scale: 0.2, rotate: (-180) },
    desktopAnimate: { opacity: 1, scale: 1, rotate: 0 },
  };

  return (
    <MotionBox
      variants={variants}
      initial={useBreakpointValue({ base: "mobileInitial", lg: "desktopInitial" })}
      animate={useBreakpointValue({ base: "mobileAnimate", lg: "desktopAnimate" })}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      position="relative"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
    >
      <Box position="relative" w={`${size}px`} h={`${size}px`} bg="transparent">
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="6"
            fill="none"
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#orangeGradient)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{
              strokeDasharray: circumference,
            }}
          />
          <defs>
            <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#f5a00f" />
            </linearGradient>
          </defs>
        </svg>
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
        >
          <Text fontSize="xl" fontWeight="black" color="white">
            {value}
          </Text>
          <Text fontSize="2xs" color="orange.300">
            %
          </Text>
        </Box>
      </Box>
      <Text fontSize="xs" fontWeight="semibold" color="whiteAlpha.700" textAlign="center">
        {label}
      </Text>
    </MotionBox>
  );
};

export default CircularProgress;
