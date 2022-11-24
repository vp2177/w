import { h } from "preact";
import { useState } from "preact/hooks";
import { startTrackingPointerMove } from "./tracker";

let globalTop = 2;

export function MyWindow({ title = "Untitled", children }) {
  const [ax, setAx] = useState(() => (Math.random() * window.innerWidth) / 2);
  const [ay, setAy] = useState(() => (Math.random() * window.innerHeight) / 2);
  const [closing, setClosing] = useState(false);
  const [zIndex, setZIndex] = useState(globalTop); // TODO: Delegate this outside

  return (
    <div
      className={`Window ${closing ? "closing" : ""}`}
      style={{ left: ax, top: ay, zIndex }}
    >
      {children}
      <header
        className="Window__title"
        onPointerDown={() =>
          startTrackingPointerMove((dx, dy) => {
            setAx((p) => p + dx);
            setAy((p) => p + dy);
          })
        }
        onClick={() => {
          setZIndex(++globalTop);
          // onRaise()
        }}
      >
        {title}
      </header>
      <button
        class="Window__closer"
        title="Close"
        onClick={(ev) => {
          setClosing(true);
          // onClosing()
        }}
      />
    </div>
  );
}

/**
 * @typedef WindowT
 * @property {string=} title
 * @property {string} id
 * @property {Function} renderer
 */
