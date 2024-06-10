'use client';

import { DraggableItemConfig } from '@/app/types';
import clsx from 'clsx';
import { DragEvent, useCallback, useRef, useState } from 'react';
import CoverFitImage from '@/app/components/CoverFitImage';
import { useDraggingIndexSetters } from '@/contexts/dragging-index-context';
import LocationIcon from './LocationIcon';
import DragImage from './DragImage';

export interface DraggableItemProps {
  config: DraggableItemConfig;
  index: number;
}

const OFF_SCREEN = -99999;

export default function DraggableItem({ config, index }: DraggableItemProps) {
  const emptyDivRef = useRef<HTMLDivElement>(null);
  const helperRef = useRef<(value: number) => void>((_value) => {});
  const [isDragging, setIsDragging] = useState(false);
  const [dragX, setDragX] = useState(OFF_SCREEN);
  const [dragY, setDragY] = useState(OFF_SCREEN);
  const { setCurrentDraggingIndex, resetCurrentDraggingIndex } =
    useDraggingIndexSetters();

  const handleDragStart = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      if (emptyDivRef.current) {
        event.dataTransfer.setDragImage(emptyDivRef.current, 0, 0);
      }

      event.dataTransfer.setData('text/plain', config.id);
      setIsDragging(true);
      setCurrentDraggingIndex(index);
    },
    [emptyDivRef, setIsDragging, config.id, setCurrentDraggingIndex, index]
  );

  const handleDrag = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
      if (event.clientX || event.clientY) {
        // prevent flash of resetting position to (0, 0)
        setDragX(event.clientX);
        setDragY(event.clientY);
        helperRef.current(event.clientX);
      }
    },
    [helperRef]
  );

  const handleDragEnd = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      setIsDragging(false);
      setDragX(OFF_SCREEN);
      setDragY(OFF_SCREEN);
      resetCurrentDraggingIndex();
    },
    [setIsDragging, setDragX, setDragY, resetCurrentDraggingIndex]
  );

  return (
    <>
      <div className={clsx('px-10 py-5', { 'dragging-item-bg': isDragging })}>
        <div
          className={clsx('flex flex-row items-center gap-6', {
            'opacity-30': isDragging,
          })}
          draggable
          onDragStart={handleDragStart}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
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

      {/* Custom drag image */}
      <DragImage
        config={config}
        isDragging={isDragging}
        dragX={dragX}
        dragY={dragY}
      />

      {/* Use this to hide default drag image */}
      <div className="hidden" ref={emptyDivRef} />
    </>
  );
}
