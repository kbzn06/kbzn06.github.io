export function ahora() {
  if (import.meta.env.DEV) {
    const simulada = new URLSearchParams(location.search).get("hoy");
    if (simulada) return new Date(simulada);
  }
  return new Date();
}