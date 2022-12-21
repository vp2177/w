import { h } from "preact";
import { useMemo } from "preact/hooks";
import { getGLRenderer } from "./runtime-info";

export function AboutBox() {
  const glRenderer = useMemo(getGLRenderer, []);

  return (
    <article className="AboutBox AboutBox--default">
      <section>{navigator.hardwareConcurrency} cores</section>
      <section>{navigator.platform}</section>
      <section>
        {screen.width}*{screen.height} {window.devicePixelRatio}x
      </section>
      <section>{String(navigator.languages)}</section>
      <section>
        {navigator.connection?.downlink} down,
        {navigator.connection?.rtt} rtt - {navigator.connection?.type}
      </section>
      <section>{glRenderer}</section>
      <section>{location.hash}</section>
      <table>
        <tr>
          <td title="relative">{location.protocol}</td>
          <td>ipfs:</td>
          <td>CF gateway</td>
        </tr>
        <tr>
          <td>
            <img src="assets/teams-tick.png" className="Tick" />
          </td>
          <td>
            <img
              src="ipfs://QmdLRfj7uVNbvW6cb3YaBXyVUEZwmLLVRKWAy1YEsKJX4h"
              className="Tick"
            />
          </td>
          <td>
            <img
              src="https://cloudflare-ipfs.com/ipfs/QmdLRfj7uVNbvW6cb3YaBXyVUEZwmLLVRKWAy1YEsKJX4h"
              className="Tick"
            />
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <td>WebP</td>
          <td>AVIF</td>
          <td>JPEG XL</td>
        </tr>
        <tr>
          <td>
            <img src="assets/teams-tick.webp" className="Tick" />
          </td>
          <td>
            <img src="assets/teams-tick.avif" className="Tick" />
          </td>
          <td>
            <img src="assets/teams-tick.jxl" className="Tick" />
          </td>
        </tr>
      </table>
    </article>
  );
}
