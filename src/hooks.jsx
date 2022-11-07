import { useEffect, useState } from "preact/hooks";

export function useInterval(period = 1000) {
  const [c, setC] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setC((prev) => prev + 1), period);
    return () => clearInterval(id);
  }, [period /*, setC*/]);
  return c;
}

/**
 * @template T
 * @param p {Promise<T>}
 */
export function usePromise(p) {
  /** @type {T|undefined} */
  let init;
  const [v, setV] = useState(init);
  useEffect(() => {
    p.then(setV);
    // return () => // TODO: Unsubscribe somehow
  }, [p]);
  return v;
}
