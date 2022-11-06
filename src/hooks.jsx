import { useEffect, useState } from "preact/hooks";

export function useInterval(period = 1000) {
  const [c, setC] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setC((prev) => prev + 1), period);
    return () => clearInterval(id);
  }, [period /*, setC*/]);
  return c;
}
