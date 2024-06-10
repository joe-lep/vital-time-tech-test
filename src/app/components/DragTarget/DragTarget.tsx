'use client';

import { useReorderItem } from "@/contexts/draggable-list-context";
import { useCurrentDraggingIndex } from "@/contexts/dragging-index-context";
import clsx from "clsx";
import { DragEvent, useCallback, useMemo, useState } from "react";

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

  const handleDragEnter = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (!isCurrentDraggingItemAdjacent) {
      setIsDraggingOver(true);
    }
  }, [setIsDraggingOver, isCurrentDraggingItemAdjacent]);

  const handleDragLeave = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    setIsDraggingOver(false);
  }, [setIsDraggingOver]);

  const handleDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  
    if (!isCurrentDraggingItemAdjacent) {
      event.dataTransfer.dropEffect = 'move';
    }
    else {
      event.dataTransfer.dropEffect = 'none';
    }
  }, [isCurrentDraggingItemAdjacent]);

  const handleDrop = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const itemId = event.dataTransfer.getData('text/plain');

    if (!isCurrentDraggingItemAdjacent) {
      reorderItem(itemId, index);
      setIsDraggingOver(false);
    }
  }, [isCurrentDraggingItemAdjacent, index, reorderItem, setIsDraggingOver]);

  return (
    <div
      className="h-20 flex flex-col justify-center"
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className={clsx('h-1 bg-blue-100 pointer-events-none', {hidden: !isDraggingOver})} />
    </div>
  );
}
