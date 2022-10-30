// import from "preact/compat" // TODO: This crashes SWC
// import from "react-dom" // TODO: This also crashes SWC (wtf)
import { render, h } from "preact";
import { AboutBox } from "./about";
import { MyWindow } from "./windows";
/* @jsx h */

function MainApp() {
  return <div className="Desktop">
    <MyWindow x={50} y={50}><div className="Cone" /></MyWindow>
    <MyWindow x={250} y={20} title="About"><AboutBox /></MyWindow>
  </div>
  
}

render(h(MainApp), document.getElementById("main"));

/**
 * Create
 * - price ticker
 * - demo video player
 */
