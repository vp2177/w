import {h , defineElement} from "omi"
import { RenderTheProp, ShadowlessElement } from "./omi-utils";
import { startTrackingPointerMove } from "./tracker";

let globalTop = 2;

export class MyWindow extends ShadowlessElement {

/* static propTypes */
ax = Math.random() * window.innerWidth / 2
ay = Math.random() * window.innerHeight / 2
closing = false
zIndex = globalTop;// TODO: Delegate this outside


  render({title ,
    renderProp,
    children
}) {

  return (
    <div 
      className={`Window ${this.closing ? "closing" : ""}`}
      style={{ left: this.ax, top: this.ay, zIndex: this.zIndex }}
    >
      <RenderTheProp prop={renderProp} />
      {/* <slot />, children <- TODO */}
      <header
        className="Window__title"
        onPointerDown={() =>
          startTrackingPointerMove((dx, dy) => {
            this.ax += dx;
            this.ay += dy;
            return;
            this.update()
          }
          )
        }
        onClick={() => {
          this.zIndex = (++globalTop);
          return;
          this.update()
          this.fire("raise"); // onRaise()
        }}
      >
        {title ?? "Untitled"}
      </header>
      <button
        class="Window__closer"
        title="Close"
        onClick={(ev) => {
          this.closing = true
          this.update()
          this.fire("closing"); // onClose()
        }}
      />
    </div>
  );
      }
      
}
defineElement("my-window",MyWindow)

/** 
 * @typedef WindowT
 * @property {string=} title 
 * @property {string} id
 * @property {unknown} renderer 
 */


