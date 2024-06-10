import { DraggableItemConfig } from '@/app/types';
import clsx from 'clsx';
import CoverFitImage from '@/app/components/CoverFitImage';

export interface DragImageProps {
  config: DraggableItemConfig;
  isDragging: boolean;
  dragX: number;
  dragY: number;
}

export default function DragImage({
  config,
  isDragging,
  dragX,
  dragY,
}: DragImageProps) {
  return (
    <div
      className={clsx(
        'drag-image-box pointer-events-none fixed z-20 flex -translate-y-1/2 translate-x-4 flex-row items-center gap-4',
        { hidden: !isDragging }
      )}
      style={{ top: dragY, left: dragX }}
    >
      <CoverFitImage
        height={32}
        width={32}
        src={config.imageData}
        alt={config.imageAlt}
        className="rounded"
      />
      <div className="text-lg font-medium">{config.title}</div>
    </div>
  );
}
