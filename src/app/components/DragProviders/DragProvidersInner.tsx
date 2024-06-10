'use client';

import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from '@dnd-kit/core';
import { ReactNode, useCallback, useState } from 'react';
import { useReorderItem } from './useReorderItem';
import { DraggableItemConfig } from '@/app/types';
import OverlayItem from '../OverlayItem';

export interface DragProvidersInnerProps {
  children: ReactNode;
}

export default function DragProvidersInner({
  children,
}: DragProvidersInnerProps) {
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const [activeConfig, setActiveConfig] = useState<DraggableItemConfig | null>(
    null
  );
  const reorderItem = useReorderItem();

  const handleDragStart = useCallback(
    (event: DragStartEvent) => {
      const index = event.active.data.current?.index;
      const config = event.active.data.current?.config;

      if (typeof index === 'number') {
        setDraggingIndex(index);
      } else {
        setDraggingIndex(null);
      }

      if (config) {
        setActiveConfig(config);
      } else {
        setActiveConfig(null);
      }
    },
    [setDraggingIndex]
  );

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const itemId = event.active.data.current?.config?.id;
      const targetIndex = event.over?.data.current?.index;

      console.log(event);
      console.log(itemId, targetIndex);

      if (typeof itemId === 'string' && typeof targetIndex === 'number') {
        reorderItem(itemId, targetIndex);
      }

      setDraggingIndex(null);
    },
    [reorderItem, setDraggingIndex]
  );

  const handleDragCancel = useCallback(() => {
    setDraggingIndex(null);
  }, []);

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      {children}
      <DragOverlay className="flex items-center justify-center">
        {activeConfig != null && <OverlayItem config={activeConfig} />}
      </DragOverlay>
    </DndContext>
  );
}
