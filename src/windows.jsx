import {h , defineElement} from "omi"
import { ShadowlessElement } from "./omi-utils";
import { startTrackingPointerMove } from "./tracker";

let globalTop = 2;

export class MyWindow extends ShadowlessElement {
static propTypes = {
  x: Number,
  y: Number,
  title: String,
  // onClose, onRaise
}

ax = 400
ay = 50
closing = false
zIndex = globalTop;// TODO: Delegate this outside


  render({title ,
  onClose = () => {},
  onRaise = () => {},
  children
}) {
  
    const        setZIndex = console.warn;     

  return (
    <div 
      className={`Window ${this.closing ? "closing" : ""}`}
      style={{ left: this.ax, top: this.ay, zIndex: this.zIndex }}
    >
      {children}
      {/* <slot /> TODO */}
      <header
        className="Window__title"
        onPointerDown={() =>
          startTrackingPointerMove((dx, dy) => {
            this.ax += dx;
            this.ay += dy;
            this.update()
          }
          )
        }
        onClick={() => {
          setZIndex(++globalTop);
          onRaise();
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
          onClose();
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
 * @property {ContentRenderer} renderer 
 */


class ContentRenderer {}
class ContentRendererJSX extends ContentRenderer {
  vnode = <span />;
}
