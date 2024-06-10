'use client';

import { DraggableListContext } from '@/types';
import { createContext } from 'react';

export const draggableListContext = createContext<DraggableListContext>({
  listOrder: {},
  reorderItem: () => {},
});
