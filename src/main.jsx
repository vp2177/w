// import from "preact/compat" // TODO: This crashes SWC
// import from "react-dom" // TODO: This also crashes SWC
import { render, h } from "preact";
import { AboutBox } from "./about";
import { MyWindow } from "./windows";

function MainApp() {
  return h(
    "div",
    { className: "Desktop" },
    h(
      MyWindow,
      {
        x: 50,
        y: 50,
      },
      h("div", { className: "Cone" })
    ),
    h(
      MyWindow,
      {
        x: 250,
        y: 20,
        title: "About",
      },
      h(AboutBox)
    )
  );
}

render(h(MainApp), document.getElementById("main"));

/**
 * Create
 * - price ticker
 * - demo video player
 */
