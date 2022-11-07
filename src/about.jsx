import { h } from "preact";
import { useMemo } from "preact/hooks";
import { useInterval } from "./hooks";
import { getGLRenderer } from "./runtime-info";

export function AboutBox() {
  const glRenderer = useMemo(getGLRenderer, []);

  return (
    <article className="AboutBox">
      <section>{navigator.hardwareConcurrency} cores</section>
      <section>{navigator.platform}</section>
      <section>
        {screen.width}*{screen.height}
      </section>
      <section>{String(navigator.languages)}</section>
      <section>
        {navigator.connection?.downlink} down,
        {navigator.connection?.rtt} rtt
        - {navigator.connection?.type}
      </section>
      <section>{glRenderer}</section>
      <section>{location.hash}</section>
    </article>
  );
}
