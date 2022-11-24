import { WeElement, defineElement } from "omi";

export class ShadowlessElement extends WeElement {
  /**
   * @param {ShadowRootInit} init
   * @returns {ShadowRoot}
   */
  attachShadow(init) {
    // @ts-expect-error
    return this;
  }

  render(_props, _store) {}
}

/**
 * @typedef {() => JSX.Element  } RenderProp
 */

/**
 * Workaround for Omi's apparently broken slotting when not using Shadow DOM,
 * which clones the slotted element instead of adopting it.
 * TODO: Report this^
 */
export class RenderTheProp extends ShadowlessElement {
  /**
   * @param props {object}
   * @param props.prop {RenderProp?}
   */
  render({ prop }) {
    const res = prop?.();
    if (res) return res;
    else
      console.warn(
        "<RenderTheProp>: Imperative renderers not supported yet,",
        prop,
        "->",
        res
      );
  }
}
defineElement("render-the-prop", RenderTheProp);
