import {WeElement} from "omi"

export class ShadowlessElement extends WeElement {
    /** 
     * @param {ShadowRootInit} init 
     * @returns {ShadowRoot}
     */
    attachShadow(init) {
        // @ts-expect-error
        return this
    }

    render(_props, _store) {}
}