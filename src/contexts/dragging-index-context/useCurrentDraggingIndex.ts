import { useContext, useMemo } from 'react';
import { draggingIndexContext } from './draggingIndexContext';

export function useCurrentDraggingIndex() {
  const { currentDraggingIndex } = useContext(draggingIndexContext);
  return useMemo(() => currentDraggingIndex, [currentDraggingIndex]);
}
