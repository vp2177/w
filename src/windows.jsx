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
  const [zIndex, setZIndex] = useState(globalTop); // TODO: Delegate this outside

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
        onClick={() => setZIndex(++globalTop)}
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
