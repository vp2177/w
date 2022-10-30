import  {h} from "preact"
import {useState} from "preact/hooks"


export function MyWindow({
  x = 0,
  y = 0,
  title = "Untitled",
  onClose = () => {},
  children

}) {
const [[ax,ay], setActual] = useState([x,y])


  return h("div", { className: "Window", style: {
    left: ax, top: ay
  }, 
    
  
},       
    children,
    h("div", {className: "Window__title", 
    onPointerDown : () => startTracking((dx, dy) => setActual(([oldx, oldy]) => [oldx+dx, oldy+dy]),)
  }, title),
    h("button", {className: "Window__closer", title: "Close", onClick: onClose })
   )
}

/** 
 * @param onMove {(dx: number, dy: number) => *}
 */
export function startTracking( onMove,stopOn = "pointerup" ) {
  
  const handleMove = (/** @type {PointerEvent} */ ev) => {
    onMove(ev.movementX, ev.movementY)
  }
  const handleEnd = (/** @type {PointerEvent} */ ev) => {
    
    window.removeEventListener("pointercancel", handleEnd)
    window.removeEventListener(stopOn, handleEnd)
    window.removeEventListener("pointermove", handleMove)

    console.info("Stopped tracking due to", ev.type )
  }
  
  window.addEventListener("pointercancel", handleEnd)
  window.addEventListener(stopOn, handleEnd)
  window.addEventListener("pointermove", handleMove, /* TODO? {passive: true}*/)
  
  console.info("Started tracking")


}