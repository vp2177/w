import { h } from "preact";

export function AboutBox() {
  return h(
    "article",
    { className: "AboutBox" },
    h("section", null, `${navigator.hardwareConcurrency} cores`),
    h("section", {}, navigator.platform),
    h("section", {}, `${screen.width}*${screen.height}`),
    // h("section", {}, `Came from <${document.referrer}>`),
    h("section", {}, String(navigator.languages)),
    h("section", {}, `${navigator.connection?.type ?? ""} ${navigator.connection?.downlink} down, ${navigator.connection?.rtt} rtt` ),
  );
}
