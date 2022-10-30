// import from "preact/compat" // TODO: This crashes SWC
// import from "react-dom" // TODO: This also crashes SWC
import {render, h} from "preact"
// import { myWindow } from "./windows";

/*
app({
  init: {},
  view(state) {
    return h("div", { class: "Desktop" }, [
      myWindow(10, 10, "Test#1", () => {}),
    ]);
  },
  node: document.getElementById("main"),
});
*/
function MainApp() {
  return "987"
}

render(h(MainApp), document.getElementById("main"))



/**
 * Create
 * - root window
 * - movable window
 * - about box
 * - price ticker
 * - demo video player
 */
