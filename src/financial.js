export function* rate(around = 100, variance = 5 / 100) {
  let r = around;
  while (true) {
    const rand = Math.random() * 2 - 1;
    r = r + rand * variance;
    yield r;
  }
}
