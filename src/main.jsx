import h from "solid-js/h"
import SW from "solid-js/web"
import {createSignal} from "solid-js";
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

SW.render(() => h("var", {}, "Solid?"), document.getElementById("main"))

/**
 * Create
 * - root window
 * - movable window
 * - about box
 * - price ticker
 * - demo video player
 */
