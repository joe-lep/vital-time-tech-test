import DraggableItemList from "./components/DraggableItemList";
import { draggableItemsList } from "@/config/listConfig";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DraggableItemList config={draggableItemsList} />
    </main>
  );
}
