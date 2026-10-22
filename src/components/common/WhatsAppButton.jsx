import { Box } from '@chakra-ui/react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const MotionBox = motion(Box);
const WHATSAPP = 'https://wa.link/v8wl84';

// Botón flotante de WhatsApp, fijo abajo a la derecha. Aparece cuando termina el loader inicial.
export const WhatsAppButton = () => {
  const reduceMotion = useReducedMotion();
  return (
    <MotionBox
      as="a"
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      position="fixed"
      right={{ base: 4, md: 6 }}
      bottom={{ base: 'calc(env(safe-area-inset-bottom) + 16px)', md: 6 }}
      zIndex="1040"
      display="grid"
      placeItems="center"
      boxSize={{ base: 14, md: 16 }}
      borderRadius="full"
      bg="#25D366"
      color="white"
      boxShadow="0 12px 30px -6px rgba(37,211,102,.55), 0 6px 16px rgba(0,0,0,.45)"
      _focusVisible={{ outline: '2px solid', outlineColor: 'orange.400', outlineOffset: '3px' }}
      sx={{ transitionProperty: 'box-shadow', transitionDuration: '200ms', '@media (hover: hover) and (pointer: fine)': { '&:hover': { boxShadow: '0 14px 36px -4px rgba(37,211,102,.7), 0 6px 16px rgba(0,0,0,.45)' } } }}
      initial={reduceMotion ? false : { opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1], delay: 2.6 }}
      whileHover={reduceMotion ? undefined : { scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
    >
      <Box as={FaWhatsapp} boxSize={{ base: 7, md: 8 }} />
    </MotionBox>
  );
};
