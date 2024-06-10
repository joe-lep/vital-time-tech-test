import { DragProviders } from '@/components/DragProviders';
import { DraggableItemListProps } from './propsDefinition';
import DraggableItemListInner from './DraggableItemListInner';

export default function DraggableItemList({ config }: DraggableItemListProps) {
  return (
    <DragProviders config={config}>
      <DraggableItemListInner config={config} />
    </DragProviders>
  );
}
