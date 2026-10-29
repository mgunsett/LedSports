import { TECNICOS, ESCUDOS } from "@/assets/imagenes";

// Directores técnicos que trabajan con LED Sports.
// Misma forma que jugadores.js, con `dt: true` (la ficha y las tarjetas lo usan para
// mostrar "Director técnico" en lugar del dorsal, el pie hábil y la posición en cancha).
//
// Las imágenes van en src/assets/imagenes.js (export TECNICOS) como el resto.
// Campos opcionales: partidos (se muestra como "Partidos dirigidos"), debutDT, instagram, ficha,
// statsDT (panel de rendimiento: partidos, ganados, empatados, perdidos, golesFavor, golesContra).

export const tecnicos = [
  {
    dt: true,
    img: TECNICOS.pellerano,
    name: 'Hernan Pellerano',
    Firstname: 'Hernan',
    Lastname: 'Pellerano',
    birthDate: '04/06/1984 (42)',
    country: 'Buenos Aires, Argentina',
    instagram:"hernanpellerano",
    club: 'Gimnasia de Jujuy',
    partidos: 36,
    debutDT: '2025',
    statsDT: { partidos: 36, ganados: 16, empatados: 12, perdidos: 8, golesFavor: 55, golesContra: 46 },
    clubLogoActual: [
      { logo: ESCUDOS.gimnasiajujuy, name: "Gimnasia de Jujuy", years: "2025- Actualidad", trophies: [] },
    ],
    trayectoria: [
      { logo: ESCUDOS.defensa, name: "Defensa y Justicia", years: "Ayudante de campo", trophies: [] },
      { logo: ESCUDOS.gimnasiajujuy, name: "Gimnasia de Jujuy", years: "2022-2024 (Jugador)", trophies: [] },
      { logo: ESCUDOS.sanmartintuc, name: "San Martín de Tucumán", years: "2021-2022 (Jugador)", trophies: [] },
      { logo: ESCUDOS.melgar, name: "FBC Melgar", years: "2020 (Jugador)", trophies: [] },
      { logo: ESCUDOS.ligaquito, name: "Liga de Quito", years: "2018 (Préstamo)", trophies: [{ name: "Serie A Ecuador 2018" }] },
      { logo: ESCUDOS.olimpia, name: "Olimpia", years: "2017 (Préstamo)", trophies: [] },
      { logo: ESCUDOS.independiente, name: "Independiente", years: "2015-2016", trophies: [] },
      { logo: ESCUDOS.tijuana, name: "Tijuana", years: "2014", trophies: [] },
      { logo: ESCUDOS.almeria, name: "UD Almería", years: "2008-2011 / 2012-2013", trophies: [] },
      { logo: ESCUDOS.newells, name: "Newell's Old Boys", years: "2011-2012 (Préstamo)", trophies: [] },
      { logo: ESCUDOS.velez, name: "Vélez Sarsfield", years: "2003-2008 / 2015 (Préstamo)", datoInfo: "Debút Profesional", trophies: [{ name: "Clausura 2005" }] },
    ],
  },
  {
    dt: true,
    img: TECNICOS.cpellerano,
    name: 'Cristian Pellerano',
    Firstname: 'Cristian',
    Lastname: 'Pellerano',
    birthDate: '01/02/1982 (44)',
    country: 'Buenos Aires, Argentina',
    club: 'Atlanta',
    partidos: 36,
    debutDT: '2025',
    statsDT: { partidos: 36, ganados: 19, empatados: 4, perdidos: 13, golesFavor: 42, golesContra: 36 },
    clubLogoActual: [
      { logo: ESCUDOS.atlanta, name: "Atlanta", years: "2025- Actualidad", trophies: [] },
    ],
    trayectoria: [
      { logo: ESCUDOS.independientedv, name: "Independiente del Valle", years: "2018-2023 (Jugador)", trophies: [
        { name: "Copa Sudamericana 2019" },
        { name: "Serie A Ecuador 2021" },
        { name: "Copa Ecuador 2022" },
        { name: "Copa Sudamericana 2022" },
        { name: "Supercopa Ecuador 2023" },
        { name: "Recopa Sudamericana 2023" },
      ] },
      { logo: ESCUDOS.veracruz, name: "Veracruz", years: "2017 (Préstamo)", trophies: [] },
      { logo: ESCUDOS.tapachula, name: "Tapachula", years: "2016-2017 (Préstamo)", trophies: [] },
      { logo: ESCUDOS.morelia, name: "Morelia", years: "2015-2016 (Préstamo)", trophies: [] },
      { logo: ESCUDOS.americamx, name: "Club América", years: "2015-2018", trophies: [{ name: "Concachampions 2014/15" }] },
      { logo: ESCUDOS.tijuana, name: "Tijuana", years: "2012-2014", trophies: [{ name: "Liga MX Apertura 2012" }] },
      { logo: ESCUDOS.independiente, name: "Independiente", years: "2010-2012", trophies: [{ name: "Copa Sudamericana 2010" }] },
      { logo: ESCUDOS.colon, name: "Colón de Santa Fe", years: "2009-2010", trophies: [] },
      { logo: ESCUDOS.arsenal, name: "Arsenal de Sarandí", years: "2008-2009", trophies: [{ name: "Suruga Bank 2008" }] },
      { logo: ESCUDOS.racing1, name: "Racing Club", years: "2007", trophies: [] },
      { logo: ESCUDOS.chicago, name: "Nueva Chicago", years: "2005-2006", trophies: [] },
      { logo: ESCUDOS.defensores, name: "Defensores de Belgrano", years: "2005", trophies: [] },
      { logo: ESCUDOS.atlanta, name: "Atlanta", years: "2001-2004 (Jugador)", datoInfo: "Debút Profesional", trophies: [] },
    ],
  },
  {
    dt: true,
    img: TECNICOS.rondelli,
    name: 'Miguel Rondelli',
    Firstname: 'Miguel',
    Lastname: 'Rondelli',
    birthDate: '24/01/1978 (48)',
    country: 'Buenos Aires, Argentina',
    instagram: "rondellidt",
    club: 'FBC Melgar',
    partidos: 24,
    debutDT: '2021',
    statsDT: { partidos: 24, ganados: 12, empatados: 7, perdidos: 5, golesFavor: 43, golesContra: 27 },
    clubLogoActual: [
      { logo: ESCUDOS.melgar, name: "FBC Melgar", years: "2026- Actualidad", trophies: [] },
    ],
    trayectoria: [
      { logo: ESCUDOS.cusco, name: "Cusco FC", years: "2024-2026", trophies: [] },
      { logo: ESCUDOS.emelec, name: "Emelec", years: "2023", trophies: [] },
      { logo: ESCUDOS.ucatolica, name: "Universidad Católica (Ecuador)", years: "2021-2022", datoInfo: "Debút como DT (interino)", trophies: [] },
      { logo: ESCUDOS.velez, name: "Vélez Sarsfield", years: "2010-2017 (Juveniles)", trophies: [] },
    ],
  },
];
