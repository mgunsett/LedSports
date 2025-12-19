import React, { useState } from 'react';
import { Box, Image, Flex, IconButton } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const MotionImage = motion(Image);

const MatchdayCarousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(1); // Start with the middle image as center

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getPosition = (index) => {
    if (index === activeIndex) return 'center';
    if (index === (activeIndex - 1 + images.length) % images.length) return 'left';
    if (index === (activeIndex + 1) % images.length) return 'right';
    return 'hidden';
  };

  const variants = {
    center: {
      x: "0%",
      scale: 1.5,
      zIndex: 10,
      opacity: 1,
      filter: "drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.56))",
    },
    left: {
      x: "-100%", 
      scale: 1,
      zIndex: 1,
      opacity: 1,
      filter: "brightness(0.7)",
    },
    right: {
      x: "100%",
      scale: 1,
      zIndex: 1,
      opacity: 1,
      filter: "brightness(0.7)",
    }
  };

  return (
    <Flex 
      alignItems="center" 
      justifyContent="center" 
      position="relative" 
      w="100%" 
      h="100%"
    >
       <IconButton 
          aria-label="Previous image"
          icon={<BsChevronLeft />} 
          onClick={handlePrev} 
          position="absolute" 
          left={{ base: "-20px", md: "0" }}
          zIndex={20} 
          variant="ghost"
          color="orange.400"
          _hover={{transform: 'scale(1.1)' }}
          fontSize="3xl"
          isRound
       />
       
       <Box 
        position="relative" 
        w="100%" 
        h="100%" 
        display="flex" 
        alignItems="center" 
        justifyContent="center"
       >
         {images.map((img, index) => {
            const position = getPosition(index);
            return (
              <MotionImage
                key={index}
                src={img}
                position="absolute"
                w={{ base: "90px", md: "120px" }}
                h={{ base: "200px", md: "230px" }}
                borderRadius="md"
                initial={false}
                animate={position}
                variants={variants}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                objectFit={{base:"contain" , md:"cover"}}
              />
            );
         })}
       </Box>

       <IconButton 
          aria-label="Next image"
          icon={<BsChevronRight />} 
          onClick={handleNext} 
          position="absolute" 
          right={{ base: "-20px", md: "0" }}
          zIndex={20} 
          variant="ghost"
          color="orange.400"
          _hover={{  transform: 'scale(1.1)' }}
          fontSize="3xl"
          isRound
       />
    </Flex>
  );
};

export default MatchdayCarousel;
