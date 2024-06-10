'use client';

import { DraggableItemConfig } from "@/app/types";
import { draggableListContext } from "./draggableListContext";
import { ReactNode, useCallback, useState } from "react";

export interface DraggableListProviderProps {
  config: Array<DraggableItemConfig>;
  children: ReactNode;
};

function getDefaultListOrder(config: Array<DraggableItemConfig>) {
  const listOrder: Record<string, number> = {};

  config.forEach(({ id }, index) => {
    listOrder[id] = index;
  });

  return listOrder;
}

export function DraggableListProvider({ config, children }: DraggableListProviderProps) {
  const [listOrder, setListOrder] = useState(getDefaultListOrder(config));

  const reorderItem = useCallback((itemId: string, targetIndex: number) => {
    setListOrder((prevListOrder) => {
      const currentIndex = prevListOrder[itemId];
      const newListOrder: Record<string, number> = {};

      if (targetIndex < currentIndex) {
        Object.keys(prevListOrder).forEach((itemKey) => {
          const itemIndex = prevListOrder[itemKey];

          if (itemIndex >= targetIndex && itemIndex < currentIndex) {
            newListOrder[itemKey] = itemIndex + 1;
          }
          else {
            newListOrder[itemKey] = itemIndex;
          }
        })

        newListOrder[itemId] = targetIndex;

        return newListOrder;
      }

      if (targetIndex > currentIndex + 1) {
        const trueTargetIndex = targetIndex - 1;

        Object.keys(prevListOrder).forEach((itemKey) => {
          const itemIndex = prevListOrder[itemKey];

          if (itemIndex > currentIndex && itemIndex <= trueTargetIndex) {
            newListOrder[itemKey] = itemIndex - 1;
          }
          else {
            newListOrder[itemKey] = itemIndex;
          }
        });

        newListOrder[itemId] = trueTargetIndex;

        return newListOrder;
      }

      return prevListOrder;
    });
  }, [setListOrder]);

  return (
    <draggableListContext.Provider value={{ listOrder, reorderItem }}>
      {children}
    </draggableListContext.Provider>
  );
}
