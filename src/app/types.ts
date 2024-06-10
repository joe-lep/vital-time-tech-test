import { StaticImageData } from 'next/image';

export type DraggableItemConfig = {
  id: string;
  title: string;
  location: string;
  imageAlt: string;
  imageData: StaticImageData;
};

export type DraggableListContext = {
  listOrder: Record<string, number>;
  reorderItem: (itemId: string, targetIndex: number) => void;
};
