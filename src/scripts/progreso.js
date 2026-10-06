const CLAVE = "our13-pase";

export function tienePase() {
  try {
    return localStorage.getItem(CLAVE) === "ok";
  } catch {
    return false;
  }
}

export function darPase() {
  try {
    localStorage.setItem(CLAVE, "ok");
  } catch {}
}