import {h, render} from "preact"
import {useState} from "preact/hooks"

export function PreactCounter() {
   const [n, setN]= useState(0)


    return <var  onMouseMove={() => setN(prev => prev+1)} >
        Preact:{n}</var>
}