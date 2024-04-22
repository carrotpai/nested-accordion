import { createContext } from "react";
import {Node} from "./types.ts";

interface IAccordionContext {
  nextFreeId: { value: number };
  accordionNodes: Map<number, Node>;
  version: number;
  addNode?: (currentHeight: number, scrollHeight: number) => void;
  getRootId: () => number;
  increaseVersion?: () => void;
}

export const AccordionContext = createContext<IAccordionContext>({
  nextFreeId: {value: 0},
  accordionNodes: new Map(),
  getRootId: () => 0,
  version: 0,
})