import {h, render} from "preact"
import { AboutBox } from "./about";
import { MyWindow } from "./windows";
/* at_jßx h - Was used by SWC */

function  MainApp()  {
  

  return (
    <div className="Desktop">
      <MyWindow  >
        <div className="Cone" />
      </MyWindow>
      <MyWindow   title="System Info"  >
          <AboutBox />
          </MyWindow>
      <div className="DockContainer">
      <nav className="Dock">
        <button className="AppIcon" title="A" />
        <button className="AppIcon active" title="B" />
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
