import DraggableItemList from './components/DraggableItemList';
import { draggableItemsList } from '@/config/listConfig';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 max-sm:pr-12">
      <DraggableItemList config={draggableItemsList} />
    </main>
  );
}
