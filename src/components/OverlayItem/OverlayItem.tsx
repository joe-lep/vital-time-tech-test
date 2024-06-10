import { DraggableItemConfig } from '@/types';
import clsx from 'clsx';
import CoverFitImage from '@/components/CoverFitImage';

export interface DragImageProps {
  config: DraggableItemConfig;
}

export default function DragImage({ config }: DragImageProps) {
  return (
    <div className="drag-image-box pointer-events-none inline-flex flex-row items-center gap-4">
      <CoverFitImage
        height={32}
        width={32}
        src={config.imageData}
        alt={config.imageAlt}
        className="rounded"
        imageStyle={config.imageStyleSmall ?? config.imageStyle}
        noFill={config.noImageFill}
      />
      <div className="text-lg font-medium">{config.title}</div>
    </div>
  );
}
