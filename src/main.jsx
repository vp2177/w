// import from "preact/compat" // TODO: This crashed SWC
import { render, h } from "preact";
import { AboutBox } from "./about";
import { MyWindow } from "./windows";
/* @jsx h */

function MainApp() {
  return (
    <div className="Desktop">
      <MyWindow x={50} y={50}>
        <div className="Cone" />
      </MyWindow>
      <MyWindow x={160} y={80} title="About">
        <AboutBox />
      </MyWindow>
    </div>
  );
}

render(<MainApp />, document.getElementById("main"));

/**
 * Create
 * - price ticker
 * - demo video player
 */
