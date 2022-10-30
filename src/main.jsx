// import from "preact/compat" // TODO: This crashes SWC
// import from "react-dom" // TODO: This also crashes SWC
import {render, h} from "preact"
import {MyWindow} from "./windows"




function MainApp() {
  return h("div", {className: "Desktop"},
    h(MyWindow, {
      x: 150, y: 20, 
    }, h("div", {className: "Cone"}) ),

  
  
  )
}

render(h(MainApp), document.getElementById("main"))






/**
 * Create
 * - root window
 * - movable window
 * - about box
 * - price ticker
 * - demo video player
 */
