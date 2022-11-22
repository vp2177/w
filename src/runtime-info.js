/** @returns {string?} */
export function getGLRenderer() {
  const el = document.createElement("canvas");
  const ctx = el.getContext("webgl", { failIfMajorPerformanceCaveat: true });
  const debugInfo = ctx?.getExtension("WEBGL_debug_renderer_info");
  return debugInfo ? ctx?.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : debugInfo;
}
