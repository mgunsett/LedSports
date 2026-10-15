import { Box, Flex, Grid, Image, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import logo_firma from '@/assets/branding/logo_firma.webp';

/*
 * Footer · versión "Firma"
 * Frase de marca + redes, columnas de Secciones / Servicios / Contacto,
 * el logo "LED SPORTS" enorme cortado al pie y la barra legal con el crédito de desarrollo.
 */

const LINE = 'rgba(255,255,255,.12)';
const hoverOnly = (styles) => ({ '@media (hover: hover) and (pointer: fine)': { '&:hover': styles } });

const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/_ledsports/', icon: FaInstagram },
  { label: 'TikTok', href: 'https://www.tiktok.com/@led.sports', icon: FaTiktok },
  { label: 'WhatsApp', href: 'https://wa.link/v8wl84', icon: FaWhatsapp },
];

// Secciones de la home: si la sección está en la página actual se desplaza ahí; si no, va a la home y luego baja.
const SECTIONS = [
  { label: 'Inicio', id: 'top' },
  { label: 'Nosotros', id: 'about' },
  { label: 'Servicios', id: 'servicesButton' },
  { label: 'Nos eligieron', to: '/jugadores' },
  { label: 'Contacto', id: 'contact' },
];

const SERVICES = [
  { label: 'Deportistas', to: '/deportistas' },
  { label: 'Entidades', to: '/entidades-deportivas' },
  { label: 'Agentes', to: '/agentes' },
  { label: 'Eventos', to: '/eventos' },
  { label: 'Marcas', to: '/marcas' },
];

const linkStyles = {
  color: 'whiteAlpha.700',
  fontSize: '15px',
  textAlign: 'left',
  transition: 'color 180ms ease',
  _focusVisible: { outline: '2px solid', outlineColor: 'orange.400', outlineOffset: '3px', borderRadius: '4px' },
  sx: hoverOnly({ color: 'white', textDecoration: 'none' }),
};

const Column = ({ title, children }) => (
  <Box>
    <Text m="0 0 14px" color="whiteAlpha.500" fontSize="12px" fontWeight="600" letterSpacing=".16em" textTransform="uppercase">
      {title}
    </Text>
    <Flex as="ul" direction="column" gap="10px" listStyleType="none" m="0" p="0">
      {children}
    </Flex>
  </Box>
);

const Footer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const goToSection = (id) => {
    if (id === 'top') {
      if (pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' });
      else navigate('/');
      return;
    }
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    // Otra página: ir a la home y esperar a que la sección exista (y a que ScrollToTop termine) antes de bajar
    navigate('/');
    let tries = 0;
    const wait = setInterval(() => {
      const el = document.getElementById(id);
      tries += 1;
      if (el || tries > 30) {
        clearInterval(wait);
        if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 120);
      }
    }, 100);
  };

  return (
    <Box
      as="footer"
      position="relative"
      overflow="hidden"
      px={{ base: '20px', md: 'clamp(20px, 6vw, 96px)' }}
      pt={{ base: '56px', md: 'clamp(56px, 8vw, 90px)' }}
      borderTop={`1px solid ${LINE}`}
      bg="linear-gradient(180deg, #080808, #000)"
      color="white"
    >
      <Grid templateColumns={{ base: '1fr 1fr', md: '1.3fr 1fr 1fr 1fr' }} gap="28px">
        {/* Marca + redes */}
        <Box gridColumn={{ base: '1 / -1', md: 'auto' }}>
          <Text m="0" maxW="26ch" fontSize={{ base: '20px', md: 'clamp(20px, 1.8vw, 26px)' }} lineHeight="1.25" fontWeight="700">
            Potenciamos la{' '}
            <Text as="em" fontStyle="italic" color="orange.400">
              marca
            </Text>{' '}
            de deportistas y entidades deportivas.
          </Text>
          <Flex gap="10px" mt="22px">
            {SOCIALS.map(({ label, href, icon }) => (
              <Link
                key={label}
                href={href}
                isExternal
                aria-label={label}
                w="44px"
                h="44px"
                borderRadius="full"
                border={`1px solid ${LINE}`}
                display="grid"
                placeItems="center"
                color="orange.400"
                transition="background-color 200ms ease, color 200ms ease, border-color 200ms ease, transform 160ms cubic-bezier(0.23, 1, 0.32, 1)"
                _active={{ transform: 'scale(0.94)' }}
                _focusVisible={{ outline: '2px solid', outlineColor: 'orange.400', outlineOffset: '3px' }}
                sx={hoverOnly({ bg: 'orange.500', borderColor: 'orange.500', color: 'black' })}
              >
                <Box as={icon} boxSize="18px" />
              </Link>
            ))}
          </Flex>
        </Box>

        <Column title="Secciones">
          {SECTIONS.map((s) => (
            <Box as="li" key={s.label}>
              {s.to ? (
                <Link as={RouterLink} to={s.to} {...linkStyles}>
                  {s.label}
                </Link>
              ) : (
                <Link as="button" type="button" onClick={() => goToSection(s.id)} {...linkStyles}>
                  {s.label}
                </Link>
              )}
            </Box>
          ))}
        </Column>

        <Column title="Servicios">
          {SERVICES.map((s) => (
            <Box as="li" key={s.label}>
              <Link as={RouterLink} to={s.to} {...linkStyles}>
                {s.label}
              </Link>
            </Box>
          ))}
        </Column>

        <Column title="Contacto">
          {SOCIALS.map((s) => (
            <Box as="li" key={s.label}>
              <Link href={s.href} isExternal {...linkStyles}>
                {s.label}
              </Link>
            </Box>
          ))}
        </Column>
      </Grid>

      {/* Firma: logo enorme cortado al pie */}
      <Box aria-hidden="true" mt={{ base: '40px', md: 'clamp(40px, 6vw, 70px)' }} mx={{ base: '-4px', md: 'calc(-1 * clamp(4px, 1vw, 12px))' }}>
        <Image src={logo_firma} alt="" loading="lazy" decoding="async" w="100%" h="auto" transform="translateY(16%)" opacity={0.95} draggable={false} />
      </Box>

      {/* Barra legal */}
      <Flex
        position="relative"
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        gap={{ base: '10px', md: '16px' }}
        mx={{ base: '-20px', md: 'calc(-1 * clamp(20px, 6vw, 96px))' }}
        px={{ base: '20px', md: 'clamp(20px, 6vw, 96px)' }}
        py="18px"
        borderTop={`1px solid ${LINE}`}
        bg="black"
        color="whiteAlpha.500"
        fontSize="12px"
      >
        <Text m="0">© {new Date().getFullYear()} LED SPORTS. Todos los derechos reservados.</Text>
        <Link
          href="https://www.linkedin.com/in/matiasgunsett/"
          isExternal
          display="inline-flex"
          alignItems="center"
          gap="6px"
          color="whiteAlpha.700"
          transition="color 180ms ease"
          sx={hoverOnly({ color: 'white', textDecoration: 'none' })}
        >
          Desarrollo web · Matías Gunsett <FaLinkedin size="14px" />
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
