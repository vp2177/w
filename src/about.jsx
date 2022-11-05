import { h } from "preact";
import { useMemo} from "preact/hooks"
import { getGLRenderer } from "./runtime-info";
/* @jsx h */

export function AboutBox() {
 const glRenderer= useMemo(getGLRenderer, []   )

  return (
    <article className="AboutBox">
      <section>{navigator.hardwareConcurrency} cores</section>
      <section>{navigator.platform}</section>
      <section>
        {screen.width}*{screen.height}
      </section>
      <section>{String(navigator.languages)}</section>
      <section>
        {navigator.connection?.type}
        {navigator.connection?.downlink} down,
        {navigator.connection?.rtt} rtt
      </section>
      <section>{glRenderer}</section>
      <section>{location.hash}</section>
    </article>
  );
}
