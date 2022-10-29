

import  {app,h,text} from "hyperapp"
import {myWindow} from "./windows"

app({
    init: {},
    view(state) {
        return h("div", {class: "Desktop"}, [
            myWindow(5, 5, "Test#1", () => {}, h("mark", {}, text("...")))
        ]) 
    },
    node: document.getElementById("main"),


})


/**
 * Create
 * - root window
 * - movable window
 * - about box
 * - price ticker
 * - demo video player
 */
