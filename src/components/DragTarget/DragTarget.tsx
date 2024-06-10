'use client';

import { useMemo } from 'react';
import { useDroppable } from '@dnd-kit/core';
import clsx from 'clsx';

export interface DragTargetProps {
  index: number;
}

export default function DragTarget({ index }: DragTargetProps) {
  const { setNodeRef, isOver, active } = useDroppable({
    id: `drop-zone-${index}`,
    data: {
      index,
    },
  });

  const activeIndex = active?.data.current?.index;

  const isCurrentDraggingItemNotAdjacent = useMemo(() => {
    if (typeof activeIndex !== 'number') {
      return false;
    }
    return !(activeIndex === index || activeIndex === index - 1);
  }, [activeIndex, index]);

  return (
    <div
      className={clsx('relative h-1', {
        'drop-boundry-dragover-bg': isOver && isCurrentDraggingItemNotAdjacent,
      })}
      ref={setNodeRef}
    />
  );
}
