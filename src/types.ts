import { StaticImageData } from 'next/image';
import { CSSProperties } from 'react';

export type DraggableItemConfig = {
  id: string;
  title: string;
  location: string;
  imageAlt: string;
  imageData: StaticImageData;
  imageStyle?: CSSProperties;
  imageStyleSmall?: CSSProperties;
  noImageFill?: boolean;
};

export type DraggableListContext = {
  listOrder: Record<string, number>;
  reorderItem: (itemId: string, targetIndex: number) => void;
};
