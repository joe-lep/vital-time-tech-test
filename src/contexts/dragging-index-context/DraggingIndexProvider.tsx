'use client';

import { ReactNode, useCallback, useState } from 'react';
import { DEFAULT_DRAGGING_INDEX } from './consts';
import { draggingIndexContext } from './draggingIndexContext';

export interface DraggingIndexProviderProps {
  children: ReactNode;
}

export function DraggingIndexProvider({
  children,
}: DraggingIndexProviderProps) {
  const [currentDraggingIndex, setCurrentDraggingIndex] = useState(
    DEFAULT_DRAGGING_INDEX
  );

  const resetCurrentDraggingIndex = useCallback(() => {
    setCurrentDraggingIndex(DEFAULT_DRAGGING_INDEX);
  }, [setCurrentDraggingIndex]);

  return (
    <draggingIndexContext.Provider
      value={{
        currentDraggingIndex,
        setCurrentDraggingIndex,
        resetCurrentDraggingIndex,
      }}
    >
      {children}
    </draggingIndexContext.Provider>
  );
}
