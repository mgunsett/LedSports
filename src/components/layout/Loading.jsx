import { useEffect, useRef, useState } from "react";
import { Box, Image, Text, keyframes } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";
import logoFirma from "@/assets/branding/logo_firma.webp";

/*
 * Loader inicial · versión "Encendido"
 * El logo arranca apagado y una línea de luz lo recorre encendiéndolo como un cartel LED.
 * Contador 000 → 100 y línea de progreso abajo. Al salir, la pantalla se abre en dos mitades.
 *
 * Props (mismas que antes):
 *  - isExiting: cuando pasa a true arranca la salida.
 *  - onExitComplete: se llama al terminar la salida (para desmontar).
 *  - minDuration: ms que tarda el contador en llegar a 99 (debe coincidir con el mínimo de App.jsx).
 */

const MotionBox = motion(Box);

const EASE_IO = [0.77, 0, 0.175, 1];
const EASE_IO_CSS = "cubic-bezier(0.77, 0, 0.175, 1)";
const SCAN_DELAY = 250;
const SCAN_MS = 1700;

const reveal = keyframes`from { mask-position: 100% 0; -webkit-mask-position: 100% 0; } to { mask-position: 0 0; -webkit-mask-position: 0 0; }`;
const sweep = keyframes`
  0% { left: -2%; opacity: 0; }
  10% { opacity: 1; }
  85% { opacity: 1; }
  100% { left: 102%; opacity: 0; }
`;

const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

const PageLoaderLED = ({ isExiting = false, onExitComplete, minDuration = 2200 } = {}) => {
  const reduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(0);

  // Contador: 0 → 99 durante minDuration; llega a 100 cuando arranca la salida.
  useEffect(() => {
    if (isExiting) {
      setProgress(1);
      return undefined;
    }
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / minDuration);
      setProgress(easeInOutCubic(p) * 0.99);
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isExiting, minDuration]);

  const halfTransition = reduceMotion ? { duration: 0.2 } : { duration: 0.7, ease: EASE_IO, delay: 0.12 };
  const done = () => {
    if (isExiting && typeof onExitComplete === "function") onExitComplete();
  };

  return (
    <Box position="fixed" inset="0" zIndex="9999" role="status" aria-label="Cargando LED Sports" pointerEvents={isExiting ? "none" : "auto"}>
      {/* Mitades que se abren al salir */}
      <MotionBox
        position="absolute"
        top="0"
        left="0"
        right="0"
        h="50.5%"
        bg="black"
        initial={false}
        animate={isExiting ? (reduceMotion ? { opacity: 0 } : { y: "-100%" }) : { y: 0, opacity: 1 }}
        transition={halfTransition}
        onAnimationComplete={done}
      />
      <MotionBox
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        h="50.5%"
        bg="black"
        initial={false}
        animate={isExiting ? (reduceMotion ? { opacity: 0 } : { y: "100%" }) : { y: 0, opacity: 1 }}
        transition={halfTransition}
      />

      {/* Logo */}
      <Box
        position="absolute"
        inset="0"
        display="grid"
        placeItems="center"
        opacity={isExiting ? 0 : 1}
        transition="opacity 180ms ease"
      >
        <Box position="relative" w="min(440px, 72vw)">
          <Image src={logoFirma} alt="" w="100%" h="auto" filter="grayscale(1) brightness(.22)" draggable={false} />
          <Image
            src={logoFirma}
            alt="LED Sports"
            position="absolute"
            inset="0"
            w="100%"
            h="auto"
            draggable={false}
            filter="drop-shadow(0 0 18px rgba(237,137,54,.45))"
            sx={
              reduceMotion
                ? {}
                : {
                    maskImage: "linear-gradient(90deg, #000 0 40%, transparent 50% 100%)",
                    WebkitMaskImage: "linear-gradient(90deg, #000 0 40%, transparent 50% 100%)",
                    maskSize: "300% 100%",
                    WebkitMaskSize: "300% 100%",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "100% 0",
                    WebkitMaskPosition: "100% 0",
                    animation: `${reveal} ${SCAN_MS}ms ${EASE_IO_CSS} ${SCAN_DELAY}ms forwards`,
                  }
            }
          />
          {!reduceMotion && (
            <Box
              aria-hidden="true"
              position="absolute"
              top="-30%"
              bottom="-30%"
              left="-2%"
              w="3px"
              borderRadius="3px"
              bg="linear-gradient(180deg, transparent, #FFD8A8, transparent)"
              boxShadow="0 0 24px 6px rgba(246,173,85,.55)"
              opacity={0}
              animation={`${sweep} ${SCAN_MS}ms ${EASE_IO_CSS} ${SCAN_DELAY}ms forwards`}
            />
          )}
        </Box>
      </Box>

      {/* Pie: texto + contador */}
      <Box
        position="absolute"
        left={{ base: "20px", md: "clamp(20px, 4vw, 48px)" }}
        right={{ base: "20px", md: "clamp(20px, 4vw, 48px)" }}
        bottom={{ base: "22px", md: "clamp(22px, 4vh, 40px)" }}
        display="flex"
        justifyContent="space-between"
        alignItems="flex-end"
        opacity={isExiting ? 0 : 1}
        transition="opacity 150ms ease"
      >
        <Text fontSize="12px" letterSpacing=".18em" textTransform="uppercase" color="whiteAlpha.500">
          Marketing deportivo
        </Text>
        <Text
          aria-hidden="true"
          fontSize={{ base: "28px", md: "clamp(28px, 3vw, 40px)" }}
          lineHeight="1"
          fontWeight="700"
          letterSpacing="-0.02em"
          color="orange.400"
          sx={{ fontVariantNumeric: "tabular-nums" }}
        >
          {String(Math.round(progress * 100)).padStart(3, "0")}
        </Text>
      </Box>

      {/* Línea de progreso */}
      <Box
        position="absolute"
        left="0"
        right="0"
        bottom="0"
        h="2px"
        bg="orange.500"
        transformOrigin="0 50%"
        style={{ transform: `scaleX(${progress})` }}
        opacity={isExiting ? 0 : 1}
        transition="opacity 150ms ease"
      />
    </Box>
  );
};

export default PageLoaderLED;
