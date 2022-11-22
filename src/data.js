/*
export function* rate(around = 100, variance = 5 / 100) {
  let r = around;
  while (true) {
    const rand = Math.random() * 2 - 1;
    r = r + rand * variance;
    yield r;
  }
}
*/

export function randomColorHSL(saturation = 100, light = 50) {
 const hue = Math.random() * 360
 return `hsl(${hue}, ${saturation}%, ${light}%)`
}
// TODO: Rename file