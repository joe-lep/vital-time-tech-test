'use client';

import { useContext, useMemo } from 'react';
import { draggableListContext } from './draggableListContext';

export function useListOrder() {
  const { listOrder } = useContext(draggableListContext);
  return useMemo(() => listOrder, [listOrder]);
}
