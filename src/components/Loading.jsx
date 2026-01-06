import { Box, Image, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import logo_horizontal  from '../assets/logo_horizontal.webp';

const MotionFlex = motion(Flex);
const MotionImage = motion(Image);
const MotionBox = motion(Box);

const PageLoaderLED = ({ isExiting = false, onExitComplete } = {}) => {
  return (
    <MotionFlex
      position="fixed"
      inset="0"
      bg="black"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      zIndex="9999"
      initial={{  y: 0 }}
      animate={isExiting ? { y: "-100vh" } : { y: 0}}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      onAnimationComplete={() => {
        if (isExiting && typeof onExitComplete === 'function') onExitComplete();
      }}
    >
      {/* LOGO */}
      <MotionImage
        src={logo_horizontal}
        alt="LED Sports"
        w={{ base: "220px", md: "360px" }}
        objectFit="contain"
        initial={{ opacity: 0.3, scale: 0.95 }}
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [0.95, 1, 0.95],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        filter="drop-shadow(0 0 20px rgba(255,107,53,0.6))"
      />
      {/* LOADING BAR */}
      <Box
        w={{ base: "160px", md: "220px" }}
        h="4px"
        bg="whiteAlpha.200"
        overflow="hidden"
        borderRadius="full"
      >
        <MotionBox
          h="100%"
          bg="#ff6b35"
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </Box>
    </MotionFlex>
  );
}

export default PageLoaderLED;
