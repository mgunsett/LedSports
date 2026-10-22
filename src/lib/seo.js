import { SPORTFOLIO_CASES } from '@/data/sportfolio';

export const SITE_URL = 'https://ledsportsmarketing.com';
export const SITE_NAME = 'LED Sports';
export const DEFAULT_IMAGE = `${SITE_URL}/images/og-image.webp`;
const ORG_ID = `${SITE_URL}/#organization`;

// Metadatos por ruta: title (≤60 car.), description (≤160 car.) y, opcional, JSON-LD.
export const PAGES = {
  '/': {
    title: 'LED Sports | Marketing Digital Deportivo para Deportistas y Clubes',
    description:
      'Agencia de marketing digital deportivo: potenciamos la marca de deportistas, clubes y agentes con contenido, redes y webs profesionales. Consultá por tu plan.',
  },
  '/deportistas': {
    title: 'Marketing para Deportistas | LED Sports',
    description:
      'Construí tu marca personal como deportista: contenido, redes sociales y web profesional para atraer clubes, sponsors y fans. Consultá por nuestros packs.',
  },
  '/entidades-deportivas': {
    title: 'Marketing para Clubes y Entidades Deportivas | LED Sports',
    description:
      'Plan de marketing para clubes y entidades deportivas: identidad visual, contenido de partido y redes que fortalecen tu institución. Pedí tu propuesta.',
  },
  '/agentes': {
    title: 'Marketing para Agentes y Agencias de Jugadores | LED Sports',
    description:
      'Potenciamos la imagen de tu agencia de representación y de cada uno de tus jugadores con contenido profesional. Solicitá tu presupuesto a medida.',
  },
  '/marcas': {
    title: 'Marketing Deportivo para Marcas | LED Sports',
    description:
      'Conectá tu marca con el deporte: campañas, contenido y alianzas con deportistas y clubes para llegar a la audiencia correcta. Escribinos y armamos tu plan.',
  },
  '/eventos': {
    title: 'Marketing y Difusión de Eventos Deportivos | LED Sports',
    description:
      'Llevá tu evento deportivo al siguiente nivel: comunicación, piezas gráficas y cobertura en redes antes, durante y después. Consultá con LED Sports.',
  },
  '/jugadores': {
    title: 'Jugadores que Confían en LED Sports',
    description:
      'Conocé a los jugadores profesionales que potencian su marca con LED Sports: perfiles, estadísticas, clubes y redes. Sumate a la lista.',
  },
  '/fc-paradiso': {
    title: 'FC Paradiso | Caso de Éxito de LED Sports',
    description:
      'Dirigimos el marketing de FC Paradiso, club suizo con historia: fotografía, video y redes partido a partido. Mirá cómo trabajamos.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'SportsTeam',
      name: 'FC Paradiso',
      sport: 'Soccer',
      foundingDate: '1917',
      url: `${SITE_URL}/fc-paradiso`,
      location: { '@type': 'Country', name: 'Suiza' },
    },
  },
  '/sportfolio': {
    title: 'Sportfolio Web | Páginas para Deportistas | LED Sports',
    description:
      'Sportfolio Web: tu página profesional de deportista con próximos partidos, estadísticas, galería y prensa. Mirá casos reales y pedí la tuya.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Sportfolio Web',
      url: `${SITE_URL}/sportfolio`,
      creator: { '@id': ORG_ID },
      hasPart: SPORTFOLIO_CASES.filter((c) => c.url).map((c) => ({
        '@type': 'CreativeWork',
        name: `Web de ${c.name}`,
        url: c.url,
        creator: { '@id': ORG_ID },
      })),
    },
  },
};
