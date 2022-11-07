/**
 * @param onMove {(dx: number, dy: number) => *}
 * @param startingEvent {PointerEvent=}
 */
 export function startTrackingPointerMove(onMove, startingEvent) {
    const handleMove = (/** @type {PointerEvent} */ ev) => {
      if (startingEvent)
        onMove(
          ev.clientX - startingEvent.clientX,
          ev.clientY - startingEvent.clientY
        );
      else onMove(ev.movementX, ev.movementY);
    };
    const handleEnd = (/** @type {PointerEvent} */ ev) => {
      window.removeEventListener("pointercancel", handleEnd);
      window.removeEventListener("pointerup", handleEnd);
      window.removeEventListener("pointermove", handleMove);
  
      console.info("Stopped tracking due to", ev.type);
    };
  
    window.addEventListener("pointercancel", handleEnd);
    window.addEventListener("pointerup", handleEnd);
    window.addEventListener("pointermove", handleMove);
  
    console.info("Started tracking from", startingEvent?.type);
  }
