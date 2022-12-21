export function nextRate(prev = 100, variance = 5 / 100) {
  const rand = randomBetween(-1, 1);
  return prev + rand * variance;
}

export function randomColorHSL(saturation = 100, light = 50) {
  const hue = randomBetween(0, 360);
  return `hsl(${hue}, ${saturation}%, ${light}%)`;
}

export function randomBetween(a = 0, b = 1) {
  return a + Math.random() * (b - a);
}

export function initials(s = "", n = 2) {
  const parts = s.split(/\s+/, n);
  return parts.length >= n ? parts.map((p) => p[0]).join("") : s.slice(0, n);
}
