// Directores técnicos que trabajan con LED Sports.
// Misma forma que jugadores.js, con `dt: true` (la ficha y las tarjetas lo usan para
// mostrar "Director técnico" en lugar del dorsal, el pie hábil y la posición en cancha).
//
// Ejemplo de carga (las imágenes van en src/assets/imagenes.js como el resto):
//
// import { TECNICOS, ESCUDOS, FICHAS } from "@/assets/imagenes";
// {
//   dt: true,
//   img: TECNICOS.nombre,            // foto recortada sin fondo (como las de jugadores)
//   name: 'Nombre Apellido',
//   Firstname: 'Nombre',
//   Lastname: 'Apellido',
//   birthDate: '01/01/1975 (51)',
//   country: 'Ciudad, País',
//   club: 'Club actual',
//   partidos: 120,                   // se muestra como "Partidos dirigidos"
//   instagram: 'usuario',
//   clubLogoActual: [{ logo: ESCUDOS.club, name: 'Club actual', years: '2025- Actualidad', trophies: [] }],
//   trayectoria: [
//     { logo: ESCUDOS.otroclub, name: 'Otro club', years: '2022-2024', trophies: [] },
//   ],
//   ficha: FICHAS.descarga,
// },

export const tecnicos = [];
