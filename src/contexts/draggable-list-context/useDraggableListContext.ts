import { useContext } from 'react';
import { draggableListContext } from './draggableListContext';

export function useDraggableListContext() {
  return useContext(draggableListContext);
}
