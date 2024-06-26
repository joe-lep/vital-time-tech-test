'use client';

import clsx from 'clsx';
import { useDraggable } from '@dnd-kit/core';

import CoverFitImage from '@/components/CoverFitImage';
import { DraggableItemConfig } from '@/types';
import LocationIcon from './LocationIcon';

export interface DraggableItemProps {
  config: DraggableItemConfig;
  index: number;
}

export default function DraggableItem({ config, index }: DraggableItemProps) {
  const { setNodeRef, listeners, isDragging } = useDraggable({
    id: config.id,
    data: {
      config,
      index,
    },
  });

  return (
    <div
      className={clsx('cursor-grab touch-none px-10 py-5', {
        'dragging-item-bg': isDragging,
      })}
      ref={setNodeRef}
      {...listeners}
    >
      <div
        className={clsx('flex flex-row items-center gap-6', {
          'opacity-30': isDragging,
        })}
      >
        <CoverFitImage
          height={96}
          width={96}
          src={config.imageData}
          alt={config.imageAlt}
          className="rounded-xl"
          imageStyle={config.imageStyle}
          noFill={config.noImageFill}
        />
        <div className="flex flex-1 flex-col gap-1">
          <div className="text-lg font-medium">{config.title}</div>
          <div className="location-text text-md flex flex-row items-center gap-1">
            <LocationIcon />
            {config.location}
          </div>
        </div>
      </div>
    </div>
  );
}
