import { h, render } from "preact";
import { useState } from "preact/hooks";
import { AboutBox } from "./about";
import { MyWindow } from "./windows";
/* at_jßx h - Was used by SWC */

/** @type {import("./windows").WindowT[]} */
const DEFAULT_WINDOWS = [];

function MainApp() {
  const [openWin, setOpenWin] = useState(DEFAULT_WINDOWS);

  return (
    <div className="Desktop Desktop--default">
      {openWin.map((w, i) => (
        <MyWindow title={w.title} key={w.id}>
          -
        </MyWindow>
      ))}
      <MyWindow>
        <div className="Cone" />
      </MyWindow>
      <MyWindow title="System Info">
        <AboutBox />
      </MyWindow>
      <div className="DockContainer DockContainer--default">
        <nav className="Dock Dock--default">
          <button className="AppIcon AppIcon--default" title="Foo App" />
          <button className="AppIcon AppIcon--default active" title="Bar App" />
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
 * - ticker
 * - player
 * - pd
 * - sound freq
 * - grav
 * - DOH lookup?
 */
