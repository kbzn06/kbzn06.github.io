import { canciones } from "../data/canciones.js";

export function GET() {
  const lista = canciones.map((c) => ({
    title: c.titulo,
    artist: c.artista,
    // El player añade "./" antes de file. Desde /reproductor/index.html,
    // ../audio/... resuelve al directorio público /audio/.
    file: `../${c.archivo.replace(/^\//, "")}`,
    art: c.portada ?? null,
  }));

  return new Response(JSON.stringify(lista), {
    headers: { "Content-Type": "application/json" },
  });
}