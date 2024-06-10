'use client';

import { useReorderItem } from '@/contexts/draggable-list-context';
import { useCurrentDraggingIndex } from '@/contexts/dragging-index-context';
import clsx from 'clsx';
import { DragEvent, useCallback, useMemo, useState } from 'react';

export interface DragTargetProps {
  index: number;
}

export default function DragTarget({ index }: DragTargetProps) {
  const reorderItem = useReorderItem();
  const currentDraggingIndex = useCurrentDraggingIndex();
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const isCurrentDraggingItemAdjacent = useMemo(() => {
    return currentDraggingIndex === index || currentDraggingIndex === index - 1;
  }, [currentDraggingIndex, index]);

  const isDraggingOccurring = useMemo(() => {
    return currentDraggingIndex >= 0;
  }, [currentDraggingIndex]);

  const shouldShowDroppableArea = isDraggingOccurring && !isCurrentDraggingItemAdjacent

  const handleDragEnter = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();

      if (!isCurrentDraggingItemAdjacent) {
        setIsDraggingOver(true);
      }
    },
    [setIsDraggingOver, isCurrentDraggingItemAdjacent]
  );

  const handleDragLeave = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();

      setIsDraggingOver(false);
    },
    [setIsDraggingOver]
  );

  const handleDragOver = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();

      if (!isCurrentDraggingItemAdjacent) {
        event.dataTransfer.dropEffect = 'move';
      } else {
        event.dataTransfer.dropEffect = 'none';
      }
    },
    [isCurrentDraggingItemAdjacent]
  );

  const handleDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();

      const itemId = event.dataTransfer.getData('text/plain');

      if (!isCurrentDraggingItemAdjacent) {
        reorderItem(itemId, index);
        setIsDraggingOver(false);
      }
    },
    [isCurrentDraggingItemAdjacent, index, reorderItem, setIsDraggingOver]
  );

  return (
    <div className={clsx("h-1 relative", { 'bg-sky-500': isDraggingOver })}>
      <div
        className={clsx("h-20 absolute top-1/2 inset-x-0 z-20 -translate-y-1/2", { hidden: !shouldShowDroppableArea })}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      />
    </div>
  );
}
