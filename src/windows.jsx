
export function myWindow(
  x = 0,
  y = 0,
  title = "Untitled",
  CloseWindow,
  child = h("div", {style: {minWidth: "300px", minHeight: "150px"}}, text(""))
) {
  return h("div", { class: "Window", style: {left: `${x}px`, top: `${y}px`} }, [
    child,
    h("div", { class: "Window__title" }, text(title)),
    h("button", {
      class: "Window__closer",
      onclick: CloseWindow,
      title: "Close",
    }),
  ]);
}
