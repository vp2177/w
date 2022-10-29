import { h, text } from "hyperapp";

export function myWindow(
  x = 50,
  y = 0,
  title = "Untitled",
  CloseWindow,
  child = h("span", {})
) {
  return h("div", { class: "Window" }, [
    child,
    h("div", { class: "Window__title" }, text(title)),
    h("button", {
      class: "Window__closer",
      onclick: CloseWindow,
      title: "Close",
    }),
  ]);
}
