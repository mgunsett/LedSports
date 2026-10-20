import { Link as RouterLink } from "react-router-dom";
import { Box, Grid, Heading, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import pioviHero from "@/assets/sportfolio/piovi_hero.webp";
import guidoHero from "@/assets/sportfolio/guido_mobile_hero.webp";
import { BrowserFrame, Cta, CREAM, LineIcon, Lockup, NewBadge, PhoneFrame } from "@/components/sportfolio/SportfolioUI";

/*
 * Home · Sportfolio Web + LED Sports (versión "Vitrina")
 * Servicio extra: landing pages profesionales para jugadores. CTA a /sportfolio.
 */

const MotionBox = motion(Box);
const EASE_OUT = [0.23, 1, 0.32, 1];
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay, ease: EASE_OUT },
});

const SportfolioSection = () => (
  <Grid
    as="section"
    id="sportfolio"
    aria-labelledby="sportfolio-title"
    templateColumns={{ base: "1fr", md: "minmax(0, .9fr) minmax(0, 1.1fr)" }}
    gap={{ base: "40px", md: "clamp(32px, 5vw, 90px)" }}
    alignItems="center"
    px={{ base: "20px", md: "clamp(20px, 6vw, 96px)" }}
    py={{ base: "80px", md: "clamp(80px, 12vh, 130px)" }}
    overflowX="clip"
  >
    <MotionBox {...reveal()}>
      <NewBadge />
      <Lockup mt="40px" />
      <Heading
        as="h2"
        id="sportfolio-title"
        mt="28px"
        fontSize={{ base: "36px", md: "clamp(36px, 4.4vw, 68px)" }}
        lineHeight=".95"
        fontWeight="700"
        letterSpacing="-0.03em"
        color="white"
      >
        Tu carrera, en tu{" "}
        <Text as="em" fontStyle="italic" color={CREAM}>
          propia web
        </Text>
      </Heading>
      <Text mt="18px" maxW="46ch" color="whiteAlpha.800" fontSize={{ base: "16px", md: "clamp(16px, 1.4vw, 20px)" }} lineHeight="1.6">
        Junto a Sportfolio Web creamos la landing page profesional de cada jugador:{" "}
        <Text as="b" color="white" fontWeight="600">
          trayectoria, clubes, fotos, highlights, estadísticas y partido a partido
        </Text>
        , siempre al día.
      </Text>
      <Flex wrap="wrap" gap="12px" mt="30px">
        <Cta as={RouterLink} to="/sportfolio">
          Conocer el servicio
          <LineIcon name="arrow" />
        </Cta>
        <Cta as="a" href="https://gonzalopiovi.com" target="_blank" rel="noopener noreferrer" variant="ghost">
          Ver una web
          <LineIcon name="ext" />
        </Cta>
      </Flex>
    </MotionBox>

    <MotionBox {...reveal(0.1)} position="relative" h={{ base: "auto", md: "clamp(440px, 42vw, 620px)" }} pb={{ base: "40px", md: 0 }}>
      <Box
        aria-hidden="true"
        position="absolute"
        left="10%"
        bottom="0"
        w="70%"
        aspectRatio="1"
        bg="radial-gradient(closest-side, rgba(134,192,162,.18), transparent)"
        pointerEvents="none"
      />
      <BrowserFrame
        src={pioviHero}
        alt="Landing page de Gonzalo Piovi"
        bar="gonzalopiovi.com"
        position={{ base: "relative", md: "absolute" }}
        right="0"
        top={{ md: "14%" }}
        w={{ base: "100%", md: "88%" }}
      />
      <PhoneFrame
        src={guidoHero}
        alt="Web de Guido Mainero vista en celular"
        position={{ base: "relative", md: "absolute" }}
        left={{ md: 0 }}
        bottom={{ md: "8%" }}
        w={{ base: "42%", md: "clamp(170px, 15vw, 230px)" }}
        mt={{ base: "-30%", md: 0 }}
        ml={{ base: "6%", md: 0 }}
        transform="rotate(-7deg)"
      />
    </MotionBox>
  </Grid>
);

export default SportfolioSection;
