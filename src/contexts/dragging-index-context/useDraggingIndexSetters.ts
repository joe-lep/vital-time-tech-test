import { useContext, useMemo } from "react";
import { draggingIndexContext } from "./draggingIndexContext";

export function useDraggingIndexSetters() {
  const { setCurrentDraggingIndex, resetCurrentDraggingIndex } = useContext(draggingIndexContext);
  return useMemo(
    () => ({ setCurrentDraggingIndex, resetCurrentDraggingIndex }),
    [setCurrentDraggingIndex, resetCurrentDraggingIndex]
  );
}
