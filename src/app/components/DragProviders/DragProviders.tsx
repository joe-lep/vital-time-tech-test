import { DraggableItemConfig } from "@/app/types";
import { ReactNode } from "react";
import { DraggableListProvider } from "./DraggableListProvider";
import DragProvidersInner from "./DragProvidersInner";

export interface DragProvidersProps {
  config: Array<DraggableItemConfig>;
  children: ReactNode;
}

export default function DragProviders({ config, children }: DragProvidersProps) {
  return (
    <DraggableListProvider config={config}>
      <DragProvidersInner>
        {children}
      </DragProvidersInner>
    </DraggableListProvider>
  );
}
