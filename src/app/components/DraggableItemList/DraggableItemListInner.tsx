'use client';

import { DraggableItemConfig } from "@/app/types";
import DraggableItem from "../DraggableItem/DraggableItem";
import { Fragment, useCallback, useMemo } from "react";
import { DraggableListProvider, useListOrder } from "@/contexts/draggable-list-context";
import DragTarget from "../DragTarget";
import { DraggableItemListProps } from "./propsDefinition";

export default function DraggableItemListInner({ config }: DraggableItemListProps) {
  const listOrder = useListOrder();

  console.log(listOrder);

  const compareFunction = useCallback((a: DraggableItemConfig, b: DraggableItemConfig) => {
    return (listOrder[a.id] ?? 0) - (listOrder[b.id] ?? 0);
  }, [listOrder]);

  const sortedConfig = useMemo(() => {
    const clonedConfig = [...config];
    clonedConfig.sort(compareFunction);

    return clonedConfig;
  }, [config, compareFunction]);

  const renderedItemList = useMemo(
    () => sortedConfig.map((itemConfig, index) => (
      <Fragment key={itemConfig.id}>
        <DragTarget index={index} />
        <DraggableItem config={itemConfig} index={index} />
      </Fragment>
    )),
    [sortedConfig],
  );

  return (
    <div style={{ width: 568 }} className="flex flex-col">
      {renderedItemList}
      <DragTarget index={config.length} />
    </div>
  );
}
