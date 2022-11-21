// import from "preact/compat" // TODO: This crashed SWC
import { render, h } from "preact";
import { AboutBox } from "./about";
import { MyWindow } from "./windows";
import  "./experiments.omi"
/* at_jßx h - Was used by SWC */

function MainApp() {
  return (
    <div className="Desktop">
      <MyWindow x={50} y={50}>
        <div className="Cone" />
      </MyWindow>
      <MyWindow x={160} y={80} title="System Info">
        <AboutBox />
      </MyWindow>
      <div className="DockContainer">
      <nav className="Dock">
        <button className="AppIcon" title="Foo" />
        <button className="AppIcon active" title="Bar" />
      </nav>
      </div>
    </div>
  );
}

const target = document.getElementById("main");
if (target) {
  render(<MainApp />, target);
}

/**
 * Create:
 * - price ticker
 * - demo video player
 * - pd
 */
