import { DraggableListProvider } from "@/contexts/draggable-list-context";
import { DraggableItemListProps } from "./propsDefinition";
import DraggableItemListInner from "./DraggableItemListInner";
import { DraggingIndexProvider } from "@/contexts/dragging-index-context";

export default function DraggableItemList({ config }: DraggableItemListProps) {
  return (
    <DraggableListProvider config={config}>
      <DraggingIndexProvider>
        <DraggableItemListInner config={config} />
      </DraggingIndexProvider>
    </DraggableListProvider>
  );
}
