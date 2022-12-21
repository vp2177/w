import { h } from "preact";
import { useState } from "preact/hooks";
import { randomBetween } from "./data";
import { startTrackingPointerMove } from "./tracker";

let globalTop = 2;

export function MyWindow({ title = "Untitled", theme = "default", children }) {
  const [ax, setAx] = useState(() => randomBetween(0, window.innerWidth / 2));
  const [ay, setAy] = useState(() => randomBetween(10, window.innerHeight / 2));
  const [closing, setClosing] = useState(false);
  const [zIndex, setZIndex] = useState(globalTop); // TODO: Delegate this outside

  return (
    <div
      className={`Window Window--${theme} ${
        closing ? `closing closing--${theme}` : ""
      }`}
      style={{ left: ax, top: ay, zIndex }}
    >
      {children}
      <header
        className={`Window__title Window__title--${theme}`}
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
        class={`Window__closer Window__closer--${theme}`}
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
