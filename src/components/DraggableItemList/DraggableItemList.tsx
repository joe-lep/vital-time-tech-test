import { DraggableItemListProps } from './propsDefinition';
import DraggableItemListInner from './DraggableItemListInner';
import { DragProviders } from '@/components/DragProviders';

export default function DraggableItemList({ config }: DraggableItemListProps) {
  return (
    <DragProviders config={config}>
      <DraggableItemListInner config={config} />
    </DragProviders>
  );
}
