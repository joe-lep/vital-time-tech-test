'use client';

import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from '@dnd-kit/core';
import { ReactNode, useCallback, useState } from 'react';
import { useReorderItem } from './useReorderItem';
import { DraggableItemConfig } from '@/types';
import OverlayItem from '../OverlayItem';

export interface DragProvidersInnerProps {
  children: ReactNode;
}

export default function DragProvidersInner({
  children,
}: DragProvidersInnerProps) {
  const [activeConfig, setActiveConfig] = useState<DraggableItemConfig | null>(
    null
  );
  const reorderItem = useReorderItem();

  const handleDragStart = useCallback(
    (event: DragStartEvent) => {
      const config = event.active.data.current?.config;

      if (config) {
        setActiveConfig(config);
      } else {
        setActiveConfig(null);
      }
    },
    [setActiveConfig]
  );

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const itemId = event.active.data.current?.config?.id;
      const targetIndex = event.over?.data.current?.index;

      if (typeof itemId === 'string' && typeof targetIndex === 'number') {
        reorderItem(itemId, targetIndex);
      }

      setActiveConfig(null);
    },
    [reorderItem, setActiveConfig]
  );

  const handleDragCancel = useCallback(() => {
    setActiveConfig(null);
  }, []);

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      {children}
      <DragOverlay className="flex cursor-grabbing items-center justify-center">
        {activeConfig != null && <OverlayItem config={activeConfig} />}
      </DragOverlay>
    </DndContext>
  );
}
