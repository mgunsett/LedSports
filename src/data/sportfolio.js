import guidoHero from "@/assets/sportfolio/guido_mobile_hero.webp";
import guidoGaleria from "@/assets/sportfolio/guido_mobile_galeria.webp";
import pioviHero from "@/assets/sportfolio/piovi_hero.webp";
import pioviStats from "@/assets/sportfolio/piovi_stats.webp";
import ronyGaleria from "@/assets/sportfolio/rony_galeria.webp";
import cainHero from "@/assets/sportfolio/cainfara_hero.webp";

/*
 * Datos del servicio Sportfolio Web + LED Sports.
 * Para agregar un caso: sumá un objeto a SPORTFOLIO_CASES.
 *  - layout "phones": dos capturas de celular · "browser": una o dos capturas de escritorio.
 *  - url: dejá null si todavía no hay link público (no se muestra el botón).
 */

export const SPORTFOLIO_URL = "https://matiasgunsett.netlify.app/sportfolio";

export const SPORTFOLIO_CASES = [
  {
    name: "Guido Mainero",
    club: "Platense · Argentina",
    url: "https://guidomainero.com",
    linkLabel: "guidomainero.com",
    layout: "phones",
    shots: [
      { src: guidoHero, alt: "Inicio de la web de Guido Mainero" },
      { src: guidoGaleria, alt: "Galería por torneo en la web de Guido Mainero" },
    ],
    points: ["Próximo partido y último resultado", "Galería por torneo", "Estadísticas y prensa"],
  },
  {
    name: "Gonzalo Piovi",
    club: "Cruz Azul · México",
    url: "https://gonzalopiovi.com",
    linkLabel: "gonzalopiovi.com",
    layout: "browser",
    shots: [
      { src: pioviHero, alt: "Inicio de la web de Gonzalo Piovi", bar: "gonzalopiovi.com" },
      { src: pioviStats, alt: "Estadísticas en la web de Gonzalo Piovi", bar: "Estadísticas" },
    ],
    points: ["Último resultado y próximo partido", "Perfil y radar de rendimiento", "Datos de la temporada"],
  },
  {
    name: "Rony Martínez",
    club: "Vélez Sarsfield · Argentina",
    url: null, // TODO: completar el dominio (se recibió "https://ronaldomartinez", sin terminación)
    linkLabel: "Ver web",
    layout: "browser",
    shots: [{ src: ronyGaleria, alt: "Galería en la web de Rony Martínez", bar: "Galería" }],
    points: ["Galería por club y selección", "Fotos de partido y equipo", "Identidad con los colores del club"],
  },
  {
    name: "Cain Fara",
    club: "Universitario de Deportes · Perú",
    url: "https://cainfara.netlify.app",
    linkLabel: "cainfara.netlify.app",
    layout: "browser",
    shots: [{ src: cainHero, alt: "Inicio de la web de Cain Fara", bar: "cainfara.netlify.app" }],
    points: ["Portada con identidad propia", "Estadísticas, videos y galería", "Sección de prensa"],
  },
];
