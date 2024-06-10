import { useContext, useMemo } from "react";
import { draggableListContext } from "./draggableListContext";

export function useReorderItem() {
  const { reorderItem } = useContext(draggableListContext);
  return useMemo(() => reorderItem, [reorderItem]);
}
