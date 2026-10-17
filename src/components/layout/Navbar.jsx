import { useCallback, useEffect, useRef, useState } from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import logo from '@/assets/branding/logo_firma.webp';

/*
 * Navbar · versión "Panel lateral"
 * Logo arriba a la izquierda (se oculta al hacer scroll) y un botón redondo flotante que abre un panel desde la derecha.
 * El panel tiene los links principales (con la sección activa en naranja), "Servicios" desplegable con las 5 páginas,
 * el botón de WhatsApp y las redes. Se cierra con la X, con Esc, tocando el fondo o al elegir un link.
 */

const EASE_OUT = 'cubic-bezier(0.23, 1, 0.32, 1)';
const EASE_DRAWER = 'cubic-bezier(0.32, 0.72, 0, 1)';
const LINE = 'rgba(255,255,255,.12)';
const hoverOnly = (styles) => ({ '@media (hover: hover) and (pointer: fine)': { '&:hover': styles } });

const WHATSAPP = 'https://wa.link/v8wl84';
const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/_ledsports/', icon: FaInstagram },
  { label: 'TikTok', href: 'https://www.tiktok.com/@led.sports', icon: FaTiktok },
  { label: 'WhatsApp', href: WHATSAPP, icon: FaWhatsapp },
];
const SERVICES = [
  { label: 'Deportistas', to: '/deportistas' },
  { label: 'Entidades', to: '/entidades-deportivas' },
  { label: 'Agentes', to: '/agentes' },
  { label: 'Eventos', to: '/eventos' },
  { label: 'Marcas', to: '/marcas' },
];
const SERVICE_PATHS = SERVICES.map((s) => s.to);
// Secciones de la home que se siguen al hacer scroll (id del elemento → clave del link)
const SPY = [
  ['about', 'nosotros'],
  ['servicesButton', 'servicios'],
  ['contact', 'contacto'],
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [spyKey, setSpyKey] = useState('inicio');
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const panelRef = useRef(null);
  const toggleRef = useRef(null);

  // Estado de scroll y sección activa (solo en la home)
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (pathname !== '/') return;
      let key = 'inicio';
      for (const [id, k] of SPY) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) key = k;
      }
      setSpyKey(key);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  const activeKey =
    pathname === '/' ? spyKey : pathname === '/jugadores' ? 'eligieron' : SERVICE_PATHS.includes(pathname) ? 'servicios' : null;

  const close = useCallback(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, []);

  // Bloquear el scroll de la página, Esc para cerrar y foco en el panel
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => panelRef.current?.focus({ preventScroll: true }), 300);
    const onKey = (e) => {
      if (e.key === 'Escape') {
        close();
        toggleRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      clearTimeout(t);
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, close]);

  // Ir a una sección de la home desde cualquier página
  const goToSection = (id) => {
    close();
    if (id === 'top') {
      if (pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' });
      else navigate('/');
      return;
    }
    const target = document.getElementById(id);
    if (pathname === '/' && target) {
      target.scrollIntoView({ behavior: 'smooth' });
      return;
    }
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

  const mainLinkStyles = (key) => ({
    w: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    py: '16px',
    px: '4px',
    borderBottom: `1px solid ${LINE}`,
    fontSize: 'clamp(24px, 2.4vw, 30px)',
    fontWeight: '700',
    letterSpacing: '-0.01em',
    textAlign: 'left',
    color: activeKey === key ? 'orange.400' : 'whiteAlpha.900',
    transition: 'color 200ms ease',
    cursor: 'pointer',
    _focusVisible: { outline: '2px solid', outlineColor: 'orange.400', outlineOffset: '2px', borderRadius: '6px' },
    sx: hoverOnly({ color: activeKey === key ? 'orange.400' : 'white', textDecoration: 'none' }),
  });

  return (
    <>
      {/* Barra superior: logo + botón flotante */}
      <Flex
        as="header"
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="1100"
        h="80px"
        align="center"
        justify="space-between"
        px={{ base: '20px', md: 'clamp(20px, 5vw, 72px)' }}
        pointerEvents="none"
      >
        <Box
          as={RouterLink}
          to="/"
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            close();
          }}
          aria-label="LED Sports, ir al inicio"
          pointerEvents={scrolled && !isOpen ? 'none' : 'auto'}
          opacity={scrolled && !isOpen ? 0 : 1}
          transform={scrolled && !isOpen ? 'translateY(-10px)' : 'none'}
          transition={`opacity 300ms ease, transform 400ms ${EASE_OUT}`}
          _focusVisible={{ outline: '2px solid', outlineColor: 'orange.400', outlineOffset: '4px', borderRadius: '6px' }}
        >
          <Image src={logo} alt="LED Sports" h={{ base: '26px', md: '30px' }} w="auto" draggable={false} />
        </Box>

        <Box
          as="button"
          type="button"
          ref={toggleRef}
          onClick={() => (isOpen ? close() : setIsOpen(true))}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          aria-controls="nav-panel"
          pointerEvents="auto"
          position="relative"
          w="56px"
          h="56px"
          borderRadius="full"
          border={`1px solid ${LINE}`}
          bg="rgba(10,10,10,.7)"
          backdropFilter="blur(12px)"
          boxShadow="0 10px 26px rgba(0,0,0,.45)"
          transition={`border-color 200ms ease, transform 160ms ${EASE_OUT}`}
          _active={{ transform: 'scale(0.94)' }}
          _focusVisible={{ outline: '2px solid', outlineColor: 'orange.400', outlineOffset: '3px' }}
          sx={hoverOnly({ borderColor: 'orange.500' })}
        >
          {/* Ícono: dos líneas que se convierten en X */}
          <Box position="absolute" left="16px" top="16px" w="24px" h="24px" aria-hidden="true">
            <Box
              position="absolute"
              left="2px"
              right="2px"
              h="2px"
              borderRadius="2px"
              bg="white"
              top={isOpen ? '11px' : '8px'}
              transform={isOpen ? 'rotate(45deg)' : 'none'}
              transition={`transform 400ms ${EASE_OUT}, top 400ms ${EASE_OUT}`}
            />
            <Box
              position="absolute"
              left={isOpen ? '2px' : '8px'}
              right="2px"
              h="2px"
              borderRadius="2px"
              bg="white"
              top={isOpen ? '11px' : '14px'}
              transform={isOpen ? 'rotate(-45deg)' : 'none'}
              transition={`transform 400ms ${EASE_OUT}, top 400ms ${EASE_OUT}, left 400ms ${EASE_OUT}`}
            />
          </Box>
        </Box>
      </Flex>

      {/* Fondo oscurecido */}
      <Box
        position="fixed"
        inset="0"
        zIndex="1050"
        bg="rgba(0,0,0,.55)"
        backdropFilter="blur(4px)"
        opacity={isOpen ? 1 : 0}
        pointerEvents={isOpen ? 'auto' : 'none'}
        transition="opacity 400ms ease"
        onClick={close}
        aria-hidden="true"
      />

      {/* Panel */}
      <Flex
        as="nav"
        id="nav-panel"
        ref={panelRef}
        tabIndex={-1}
        aria-label="Menú principal"
        aria-hidden={!isOpen}
        visibility={isOpen ? 'visible' : 'hidden'}
        position="fixed"
        top="12px"
        right="12px"
        bottom="12px"
        zIndex="1060"
        w="min(440px, calc(100vw - 24px))"
        direction="column"
        p="96px 28px 26px"
        overflowY="auto"
        borderRadius="28px"
        border={`1px solid ${LINE}`}
        bg="linear-gradient(170deg, #141008 0%, #0a0a0a 45%)"
        color="white"
        transform={isOpen ? 'none' : 'translateX(calc(100% + 24px))'}
        transition={`transform 520ms ${EASE_DRAWER}, visibility 0s linear ${isOpen ? '0s' : '520ms'}`}
        _focus={{ outline: 'none' }}
        sx={{
          '& > *': {
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'none' : 'translateX(16px)',
            transition: `opacity 300ms ease ${isOpen ? '180ms' : '0ms'}, transform 450ms ${EASE_OUT} ${isOpen ? '180ms' : '0ms'}`,
          },
        }}
      >
        <Box as="ul" listStyleType="none" m="0" p="0" borderTop={`1px solid ${LINE}`}>
          <Box as="li">
            <Box as="button" type="button" onClick={() => goToSection('top')} {...mainLinkStyles('inicio')}>
              Inicio
            </Box>
          </Box>
          <Box as="li">
            <Box as="button" type="button" onClick={() => goToSection('about')} {...mainLinkStyles('nosotros')}>
              Nosotros
            </Box>
          </Box>

          {/* Servicios desplegable */}
          <Box as="li">
            <Box
              as="button"
              type="button"
              aria-expanded={servicesOpen}
              aria-controls="nav-services"
              onClick={() => setServicesOpen((o) => !o)}
              {...mainLinkStyles('servicios')}
            >
              Servicios
              <Box
                as={FiChevronDown}
                boxSize="20px"
                color={servicesOpen ? 'orange.400' : 'whiteAlpha.500'}
                transform={servicesOpen ? 'rotate(180deg)' : 'none'}
                transition={`transform 300ms ${EASE_OUT}, color 200ms ease`}
              />
            </Box>
            <Box
              id="nav-services"
              display="grid"
              gridTemplateRows={servicesOpen ? '1fr' : '0fr'}
              transition={`grid-template-rows 350ms ${EASE_OUT}`}
            >
              <Box overflow="hidden">
                <Box as="ul" listStyleType="none" m="0" p="10px 4px 16px" display="grid" gridTemplateColumns="1fr 1fr" gap="8px">
                  {SERVICES.map((s) => (
                    <Box as="li" key={s.to}>
                      <Box
                        as={RouterLink}
                        to={s.to}
                        onClick={close}
                        tabIndex={servicesOpen ? 0 : -1}
                        display="block"
                        p="12px 14px"
                        borderRadius="14px"
                        border="1px solid"
                        borderColor={pathname === s.to ? 'rgba(237,137,54,.5)' : LINE}
                        bg="rgba(255,255,255,.03)"
                        fontSize="15px"
                        color={pathname === s.to ? 'orange.400' : 'whiteAlpha.700'}
                        transition="border-color 180ms ease, color 180ms ease"
                        _focusVisible={{ outline: '2px solid', outlineColor: 'orange.400', outlineOffset: '2px' }}
                        sx={hoverOnly({ borderColor: 'rgba(237,137,54,.5)', color: 'white' })}
                      >
                        {s.label}
                      </Box>
                    </Box>
                  ))}
                  <Box as="li">
                    <Box
                      as="button"
                      type="button"
                      onClick={() => goToSection('servicesButton')}
                      tabIndex={servicesOpen ? 0 : -1}
                      w="100%"
                      textAlign="left"
                      p="12px 14px"
                      borderRadius="14px"
                      border="1px solid rgba(237,137,54,.5)"
                      bg="rgba(255,255,255,.03)"
                      fontSize="15px"
                      color="orange.400"
                      _focusVisible={{ outline: '2px solid', outlineColor: 'orange.400', outlineOffset: '2px' }}
                    >
                      Ver todos
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box as="li">
            <Box as={RouterLink} to="/jugadores" onClick={close} {...mainLinkStyles('eligieron')}>
              Nos eligieron
              <Text as="span" fontSize="12px" fontWeight="600" color="orange.400" letterSpacing=".1em" textTransform="uppercase">
                Jugadores
              </Text>
            </Box>
          </Box>
          <Box as="li">
            <Box as="button" type="button" onClick={() => goToSection('contact')} {...mainLinkStyles('contacto')}>
              Contacto
            </Box>
          </Box>
        </Box>

        {/* Pie del panel */}
        <Flex direction="column" gap="18px" mt="auto" pt="28px">
          <Flex
            as="a"
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            align="center"
            justify="center"
            gap="10px"
            minH="52px"
            px="24px"
            borderRadius="full"
            bg="orange.500"
            color="white"
            fontWeight="600"
            transition={`background-color 200ms ease, transform 160ms ${EASE_OUT}`}
            _active={{ transform: 'scale(0.97)' }}
            _focusVisible={{ outline: '2px solid', outlineColor: 'orange.400', outlineOffset: '3px' }}
            sx={hoverOnly({ bg: 'orange.400' })}
          >
            <FaWhatsapp size="20px" /> Escribinos por WhatsApp
          </Flex>
          <Flex align="center" justify="space-between" gap="12px" color="whiteAlpha.500" fontSize="13px">
            <Text as="span">Seguinos</Text>
            <Flex gap="10px">
              {SOCIALS.map(({ label, href, icon }) => (
                <Box
                  as="a"
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  w="44px"
                  h="44px"
                  borderRadius="full"
                  border={`1px solid ${LINE}`}
                  display="grid"
                  placeItems="center"
                  color="orange.400"
                  transition="background-color 200ms ease, color 200ms ease, border-color 200ms ease"
                  _focusVisible={{ outline: '2px solid', outlineColor: 'orange.400', outlineOffset: '3px' }}
                  sx={hoverOnly({ bg: 'orange.500', borderColor: 'orange.500', color: 'black' })}
                >
                  <Box as={icon} boxSize="18px" />
                </Box>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
