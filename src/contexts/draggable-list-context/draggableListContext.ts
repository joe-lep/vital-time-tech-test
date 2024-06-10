'use client';

import { DraggableListContext } from "@/app/types";
import { createContext } from "react";

export const draggableListContext = createContext<DraggableListContext>({ listOrder: {}, reorderItem: () => {} });
