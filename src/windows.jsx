import  {h} from "preact"
import {useState} from "preact/hooks"


export function MyWindow({
  x = 0,
  y = 0,
  title = "Untitled",
  onClose,
  children

}) {
  return h("div", { className: "Window", style: {
    left: x, top: y
  }
},       
    children,
    h("div", {className: "Window__title"}, title),
    h("button", {className: "Window__closer", title: "Close", })
   )
}