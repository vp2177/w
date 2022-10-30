import { h } from "preact";
import { useState } from "preact/hooks";

export function MyWindow({
  x = 0,
  y = 0,
  title = "Untitled",
  onClose = () => {},
  children,
}) {
  const [[ax, ay], setActual] = useState([x, y]);
 const [closing, setClosing]=  useState(false)

  return h(
    "div",
    {
      className: "Window " + (closing? "closing":""),
      style: {
        left: ax,
        top: ay,
      },
    },
    children,
    h(
      "div",
      {
        className: "Window__title",
        onPointerDown: () =>
          startTrackingPointerMove((dx, dy) =>
            setActual(([oldx, oldy]) => [oldx + dx, oldy + dy])
          ),
      },
      title
    ),
    h("button", {
      className: "Window__closer",
      title: "Close",
      onClick: (ev) => {
        setClosing(true)
        onClose(ev)
      },
    })
  );
}

/**
 * @param onMove {(dx: number, dy: number) => *}
 */
export function startTrackingPointerMove(onMove){ 
  const handleMove = (/** @type {PointerEvent} */ ev) => {
    onMove(ev.movementX, ev.movementY);
  };
  const handleEnd = (/** @type {PointerEvent} */ ev) => {
    window.removeEventListener("pointercancel", handleEnd);
    window.removeEventListener("pointerup", handleEnd);
    window.removeEventListener("pointermove", handleMove);

    console.info("Stopped tracking due to", ev.type);
  };

  window.addEventListener("pointercancel", handleEnd);
  window.addEventListener("pointerup", handleEnd);
  window.addEventListener("pointermove", handleMove );

  console.info("Started tracking");
}