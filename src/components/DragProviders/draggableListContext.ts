'use client';

import { createContext } from 'react';
import { DraggableListContext } from '@/types';

export const draggableListContext = createContext<DraggableListContext>({
  listOrder: {},
  reorderItem: () => {},
});
