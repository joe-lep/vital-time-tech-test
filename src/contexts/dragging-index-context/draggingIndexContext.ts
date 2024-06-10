'use client';

import { createContext } from 'react';
import { DEFAULT_DRAGGING_INDEX } from './consts';

export const draggingIndexContext = createContext({
  currentDraggingIndex: DEFAULT_DRAGGING_INDEX,
  setCurrentDraggingIndex: (value: number) => {},
  resetCurrentDraggingIndex: () => {},
});
