import {h, defineElement} from "omi"
import { ShadowlessElement } from "./omi-utils";
import { getGLRenderer } from "./runtime-info";

export class AboutBox extends ShadowlessElement {

  _glRenderer = getGLRenderer()

  render() {


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
        {navigator.connection?.rtt} rtt - {navigator.connection?.type}
      </section>
      <section>{this._glRenderer}</section>
      <section>{location.hash}</section>
    </article>
  );
}
}
defineElement("my-about", AboutBox)
