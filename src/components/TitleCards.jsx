import { useState } from 'react';
import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export const TitleCards = ({ name, club, img, number }) => {
  
    const [isHovered, setIsHovered] = useState(false);

    return (
   <MotionBox
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      position="relative"
      w="100%"
      aspectRatio="3/4"
      overflow="hidden"
      borderRadius="xl"
      cursor="pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      bg="black"
    >
      {/* Background Image */}
      <Box position="absolute" inset="0">
        <Image
         src={img}
         alt={name}
         w="100%"
         h="100%"
         objectFit="cover"
         objectPosition="center 0%"
         opacity={isHovered ? 0.4 : 0.8}
         transform={isHovered ? "scale(0.90)" : "scale(1)"}
         transition="opacity 0.9s ease, transform 0.9s ease"
        />
        
        {/* Dual gradient overlay */}
        <Box
          position="absolute"
          inset="0"
          bgGradient="linear(135deg, orange.500 0%, transparent 50%, purple.900 100%)"
          opacity={isHovered ? 0.5 : 0.3}
          mixBlendMode="multiply"
          transition="opacity 0.6s"
        />
        
        <Box
          position="absolute"
          inset="0"
          bgGradient="linear(to-b, transparent 0%, black 100%)"
          opacity={0.7}
        />
      </Box>

      {/* Animated diagonal stripe */}
      <Box
        position="absolute"
        top="0"
        left={isHovered ? "0" : "-100%"}
        w="100%"
        h="4px"
        bg="orange.400"
        boxShadow="0 0 30px rgba(251, 146, 60, 0.8)"
        transition="left 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)"
      />

      {/* Content container */}
      <Flex
        position="absolute"
        inset="0"
        direction="column"
        justify="space-between"
        p={6}
      >
        <MotionBox/>
        
        {/* Bottom info section */}
        <Box>
          {/* Club with sliding animation - hidden when not hovering */}
          <MotionBox
            initial={{ x: -100, opacity: 0 }}
            animate={{ 
              x: isHovered ? 0 : -100,
              opacity: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.6 }}
            mb={3}
          >
            <Flex align="center" gap={2}>
              <Box
                w="30px"
                h="2px"
                bg="orange.400"
              />
              <Text
                color="orange.300"
                fontSize="xs"
                fontWeight="600"
                letterSpacing="wide"
                textTransform="uppercase"
              >
                {club}
              </Text>
            </Flex>
          </MotionBox>
          
          {/* Name with staggered reveal */}
          <MotionBox
            initial={{ y: 0 }}
            animate={{ y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.7 }}
          >
            <Heading
              as="h3"
              color="white"
              fontSize="2xl"
              fontWeight="black"
              letterSpacing="tight"
              textShadow="0 4px 12px rgba(0,0,0,0.6)"
              lineHeight="1.1"
            >
              {name}
            </Heading>
          </MotionBox>

          {/* Accent line */}
          <Box
            w={isHovered ? "100%" : "60px"}
            h="3px"
            bg="orange.400"
            mt={4}
            boxShadow="0 0 15px rgba(251, 146, 60, 0.6)"
            transition="width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)"
          />
        </Box>
      </Flex>

      {/* Border glow effect */}
      <Box
        position="absolute"
        inset="0"
        border="1px solid"
        borderRadius="xl"
        borderColor={isHovered ? "orange.400" : "whiteAlpha.600"}
        opacity={isHovered ? 0.8 : 0.4}
        boxShadow={isHovered ? "inset 0 0 30px rgba(251, 146, 60, 0.3)" : "none"}
        transition="all 0.6s"
        pointerEvents="none"
      />
    </MotionBox>
  );
};
