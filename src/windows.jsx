import { h } from "preact";
import { useState } from "preact/hooks";

let globalTop = 2;

export function MyWindow({
  x = 0,
  y = 0,
  title = "Untitled",
  onClose = () => {},
  children,
}) {
  const [[ax, ay], setActual] = useState([x, y]);
  const [closing, setClosing] = useState(false);
 const [zIndex, setZIndex] = useState(globalTop) // TODO: Delegate this outside

  return (
    <div
      className={`Window ${closing ? "closing" : ""}`}
      style={{ left: ax, top: ay, zIndex }}
    >
      {children}
      <div
        className="Window__title"
        onPointerDown={() =>
          startTrackingPointerMove((dx, dy) =>
            setActual(([oldx, oldy]) => [oldx + dx, oldy + dy])
          )
        }
        onClick={() => setZIndex(++globalTop) }
      >
        {title}
      </div>
      <button
        class="Window__closer"
        title="Close"
        onClick={(ev) => {
          setClosing(true);
          onClose();
        }}
      />
    </div>
  );

}

/**
 * @param onMove {(dx: number, dy: number) => *}
 * @param startingEvent {PointerEvent=}
 * TODO: Move to own file
 */
export function startTrackingPointerMove(onMove, startingEvent) {
  const handleMove = (/** @type {PointerEvent} */ ev) => {
    if (startingEvent)    onMove( ev.clientX - startingEvent.clientX , ev.clientY - startingEvent.clientY)
    else     onMove(ev.movementX, ev.movementY);
  };
  const handleEnd = (/** @type {PointerEvent} */ ev) => {
    window.removeEventListener("pointercancel", handleEnd);
    window.removeEventListener("pointerup", handleEnd);
    window.removeEventListener("pointermove", handleMove);

    console.info("Stopped tracking due to", ev.type);
  };

  window.addEventListener("pointercancel", handleEnd);
  window.addEventListener("pointerup", handleEnd);
  window.addEventListener("pointermove", handleMove);

  console.info("Started tracking from", startingEvent?.type);
}
