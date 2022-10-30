import { h } from "preact";
/* @jsx h */

export function AboutBox() {
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
    </article>
  );
}
