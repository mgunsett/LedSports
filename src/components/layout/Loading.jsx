import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";
import logo3d from "@/assets/branding/logo_3d.webp";

/*
 * Loader inicial · versión "Continuidad"
 * El logo 3D aparece chico con un brillo naranja detrás y una barra de carga.
 * Al salir, el fondo se desvanece y el logo viaja hasta el lugar exacto del logo del Hero
 * (busca el elemento con [data-hero-logo]), así la carga se funde con la página.
 * Si la página no tiene ese logo (se entró por otra ruta), el logo crece un poco y se desvanece.
 *
 * Props (mismas que antes):
 *  - isExiting: cuando pasa a true arranca la salida.
 *  - onExitComplete: se llama al terminar la salida (para desmontar).
 *  - minDuration: ms que tarda la barra en llegar casi al final (igual al mínimo de App.jsx).
 */

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const EASE_OUT = [0.23, 1, 0.32, 1];
const EASE_IO = [0.77, 0, 0.175, 1];
const START_SCALE = 0.58;
const LIFT = -20; // px: el logo queda un poco por encima del centro para dejar lugar a la barra
const LOGO_RATIO = 960 / 866; // alto / ancho de logo_3d.webp
// Mismo ancho que el logo del Hero (HeroWall.jsx), con un mínimo para pantallas muy bajas.
const LOGO_W = "max(180px, min(440px, 68vw, calc((100svh - 300px) * .9)))";

const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

const PageLoaderLED = ({ isExiting = false, onExitComplete, minDuration = 2200 } = {}) => {
  const reduceMotion = useReducedMotion();
  const logoRef = useRef(null);
  const rafRef = useRef(0);
  const [progress, setProgress] = useState(0);
  const [target, setTarget] = useState(null);

  // Barra: 0 → 99% durante minDuration; se completa al salir.
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

  // Al salir: medir dónde está el logo del Hero y calcular el viaje.
  useLayoutEffect(() => {
    if (!isExiting) return;
    const el = logoRef.current;
    const hero = document.querySelector("[data-hero-logo]");
    const r = hero?.getBoundingClientRect();
    if (!el || reduceMotion || !r || r.width === 0 || r.bottom < 0 || r.top > window.innerHeight) {
      setTarget({ found: false });
      return;
    }
    const baseW = el.offsetWidth;
    const heroH = r.width * LOGO_RATIO;
    setTarget({
      found: true,
      x: r.left + r.width / 2 - window.innerWidth / 2,
      y: r.top + heroH / 2 - window.innerHeight / 2,
      scale: r.width / baseW,
    });
  }, [isExiting, reduceMotion]);

  const exiting = isExiting && target;

  let logoAnimate = { opacity: 1, x: 0, y: LIFT, scale: START_SCALE };
  let logoTransition = { duration: 0.6, delay: 0.08, ease: EASE_OUT };
  if (exiting && target.found) {
    logoAnimate = { x: target.x, y: target.y, scale: target.scale, opacity: [1, 1, 0] };
    logoTransition = { default: { duration: 0.8, ease: EASE_IO }, opacity: { duration: 1.05, times: [0, 0.76, 1] } };
  } else if (exiting) {
    logoAnimate = { opacity: 0, x: 0, y: LIFT, scale: reduceMotion ? START_SCALE : START_SCALE * 1.08 };
    logoTransition = { duration: reduceMotion ? 0.2 : 0.5, ease: EASE_OUT };
  }

  return (
    <Box position="fixed" inset="0" zIndex="9999" role="status" aria-label="Cargando LED Sports" pointerEvents={isExiting ? "none" : "auto"}>
      {/* Fondo + brillo */}
      <MotionBox
        position="absolute"
        inset="0"
        bg="black"
        initial={false}
        animate={{ opacity: exiting ? 0 : 1 }}
        transition={{ duration: reduceMotion ? 0.2 : 0.6, delay: exiting && !reduceMotion ? 0.15 : 0, ease: "easeOut" }}
      >
        <Box
          position="absolute"
          left="50%"
          top="50%"
          w="min(900px, 140vw)"
          aspectRatio="1"
          transform="translate(-50%, -50%)"
          bg="radial-gradient(closest-side, rgba(237,137,54,.16), transparent)"
          pointerEvents="none"
        />
      </MotionBox>

      {/* Logo */}
      <Flex position="absolute" inset="0" align="center" justify="center" pointerEvents="none">
        <MotionImage
          ref={logoRef}
          src={logo3d}
          alt="LED Sports"
          w={LOGO_W}
          h="auto"
          flex="none"
          draggable={false}
          filter="drop-shadow(0 18px 22px rgba(0,0,0,.6))"
          initial={{ opacity: 0, x: 0, y: LIFT, scale: START_SCALE * 0.94 }}
          animate={logoAnimate}
          transition={logoTransition}
          onAnimationComplete={() => {
            if (exiting && typeof onExitComplete === "function") onExitComplete();
          }}
        />
      </Flex>

      {/* Barra de carga */}
      <Box
        position="absolute"
        left="50%"
        top={`calc(50% + ${LOGO_W} * ${(LOGO_RATIO * START_SCALE) / 2} + ${LIFT + 12}px)`}
        w="120px"
        ml="-60px"
        h="2px"
        borderRadius="2px"
        bg="whiteAlpha.200"
        overflow="hidden"
        opacity={isExiting ? 0 : 1}
        transition="opacity 200ms ease"
      >
        <Box h="100%" bg="orange.500" transformOrigin="0 50%" style={{ transform: `scaleX(${progress})` }} />
      </Box>
    </Box>
  );
};

export default PageLoaderLED;
