export function nextRate(prev = 100, variance= 5/100) {
    const rand = Math.random() * 2 - 1;
    return prev +rand * variance
  }

export function randomColorHSL(saturation = 100, light = 50) {
 const hue = Math.random() * 360
 return `hsl(${hue}, ${saturation}%, ${light}%)`
}
