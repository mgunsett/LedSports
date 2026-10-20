import { Box, Flex, Image, Text } from "@chakra-ui/react";
import logoSportfolio from "@/assets/sportfolio/logo_sportfolio.webp";
import logoLed from "@/assets/branding/logo_firma.webp";

/* Piezas visuales compartidas por la sección del Home y la página /sportfolio */

export const CREAM = "#F2E9B8";
export const SAGE = "#86C0A2";
export const SPF_GREEN = "#285741";
export const SPF_DEEP = "#0D1F16";
export const EASE_OUT_CSS = "cubic-bezier(0.23, 1, 0.32, 1)";
export const HOVER = "@media (hover: hover) and (pointer: fine)";

export const NewBadge = ({ children = "Nuevo · Servicio extra" }) => (
  <Flex
    as="span"
    display="inline-flex"
    align="center"
    gap="8px"
    px="14px"
    py="7px"
    borderRadius="full"
    border="1px solid rgba(242,233,184,.35)"
    bg="rgba(242,233,184,.08)"
    color={CREAM}
    fontSize="12px"
    fontWeight="700"
    letterSpacing=".12em"
    textTransform="uppercase"
  >
    <Box as="i" w="7px" h="7px" borderRadius="full" bg={SAGE} />
    {children}
  </Flex>
);

export const Lockup = (props) => (
  <Flex align="center" gap={{ base: "12px", md: "clamp(12px, 1.6vw, 20px)" }} {...props}>
    <Image src={logoSportfolio} alt="Sportfolio Web" h={{ base: "30px", md: "clamp(30px, 3vw, 44px)" }} w="auto" />
    <Text as="span" aria-hidden="true" fontSize="24px" fontWeight="300" color="whiteAlpha.500">
      +
    </Text>
    <Image src={logoLed} alt="LED Sports" h={{ base: "22px", md: "clamp(22px, 2.2vw, 32px)" }} w="auto" />
  </Flex>
);

export const BrowserFrame = ({ src, alt, bar, ...props }) => (
  <Box borderRadius="14px" overflow="hidden" border="1px solid rgba(255,255,255,.14)" bg="#0b0b0b" boxShadow="0 40px 80px rgba(0,0,0,.6)" {...props}>
    <Flex align="center" gap="6px" h="30px" px="12px" bg="#141414" borderBottom="1px solid rgba(255,255,255,.08)">
      {[0, 1, 2].map((i) => (
        <Box key={i} w="9px" h="9px" borderRadius="full" bg="whiteAlpha.300" />
      ))}
      {bar && (
        <Text as="span" ml="10px" px="12px" py="3px" borderRadius="full" bg="whiteAlpha.100" fontSize="11px" color="whiteAlpha.600" noOfLines={1}>
          {bar}
        </Text>
      )}
    </Flex>
    <Image src={src} alt={alt} loading="lazy" decoding="async" w="100%" h="auto" />
  </Box>
);

export const PhoneFrame = ({ src, alt, ...props }) => (
  <Box borderRadius="30px" p="7px" bg="#111" border="1px solid rgba(255,255,255,.16)" boxShadow="0 40px 80px rgba(0,0,0,.6)" {...props}>
    <Image src={src} alt={alt} loading="lazy" decoding="async" w="100%" h="auto" borderRadius="24px" />
  </Box>
);

const ICON_PATHS = {
  arrow: "M5 12h14M13 6l6 6-6 6",
  ext: "M7 17 17 7M9 7h8v8",
  down: "M12 5v14M6 13l6 6 6-6",
};

export const LineIcon = ({ name, size = "16px" }) => (
  <Box as="svg" viewBox="0 0 24 24" w={size} h={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={ICON_PATHS[name]} />
  </Box>
);

const CTA_VARIANTS = {
  orange: { bg: "orange.500", color: "white", hover: { bg: "orange.400" } },
  ghost: { bg: "transparent", color: "white", border: "1px solid rgba(255,255,255,.22)", hover: { bg: "rgba(255,255,255,.06)" } },
  cream: { bg: CREAM, color: "#111", hover: { bg: "#fff6cf" } },
};

export const Cta = ({ variant = "orange", children, ...props }) => {
  const { hover, ...v } = CTA_VARIANTS[variant];
  return (
    <Box
      display="inline-flex"
      alignItems="center"
      gap="10px"
      minH="52px"
      px="24px"
      borderRadius="full"
      fontWeight="600"
      fontSize="15px"
      transition={`background-color 200ms ease, transform 160ms ${EASE_OUT_CSS}`}
      _active={{ transform: "scale(0.97)" }}
      _focusVisible={{ outline: "2px solid", outlineColor: "orange.400", outlineOffset: "3px" }}
      sx={{ [HOVER]: { "&:hover": hover } }}
      {...v}
      {...props}
    >
      {children}
    </Box>
  );
};
