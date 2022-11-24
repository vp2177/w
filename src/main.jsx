// import from "preact/compat" // TODO: This crashed SWC
import {render, h,  defineElement, } from "omi"
import { AboutBox } from "./about";
import { MyWindow } from "./windows";
import { ShadowlessElement } from "./omi-utils";
/* at_jßx h - Was used by SWC */

class MainApp extends ShadowlessElement {
render() {
  

  return (
    <div className="Desktop">
      <MyWindow renderProp={() => <div className="Cone" />} />
      <my-window  title="System Info" 
        renderProp={() => <AboutBox />} />
      <div className="DockContainer">
      <nav className="Dock">
        <button className="AppIcon" title="Foo" />
        <button className="AppIcon active" title="Bar" />
      </nav>
      </div>
    </div>
  );
}


}
defineElement("main-app",MainApp)

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
